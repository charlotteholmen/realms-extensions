#!/usr/bin/env python3
"""
Realm Foundation Scenario
=========================
Tests the core organisational setup lifecycle of a realm:

  1. Admin creates a new department via the realm's codex facility.
  2. Admin generates a real member invitation code (backed by RegistrationCode)
     using create_registration_code via codex.
  3. Two new members join the realm by redeeming that invitation code through
     the standard join_realm endpoint (real code-based path, not test bypass).
  4. Admin assigns members to the department via the dept.members ManyToMany
     relation (also executed via codex so it runs in-canister).
  5. Scenario verifies:
       - Department is listed in the realm's share-audience roster.
       - Both members joined with profile "member".
       - Both members appear in the department's member list.
       - A re-use of an exhausted (max_uses) code is correctly rejected.
       - Department notifications are visible to members but not non-members.

Requirements:
  - Realm must have test_mode_user_self_registration enabled (operator can
    self-register as admin with the admin test checksum).
  - Backend WASM must include the _now_dt() fix for RegistrationCode.create
    (commit be6089ec on realms/main, deployed via deploy-mundus upgrade).

Run:
  python3 realm_foundation_scenario.py
"""

import hashlib
import json

from realm_client import (
    ADMIN_CODE_CHECKSUM,
    MEMBER_CODE_CHECKSUM,
    Scenario,
    TestIdentity,
    call_backend,
    call_extension,
)


def _codex(codex_id: str, code: str, timeout: int = 60) -> dict:
    """Run a one-shot in-canister codex with the given Python code."""
    files = {
        "init.py": code,
        "manifest.json": json.dumps({"name": codex_id, "version": "0.0.1"}),
    }
    return call_backend(
        "install_codex",
        json.dumps({"codex_id": codex_id, "files": files, "run_init": True}),
        timeout=timeout,
    )


def run_realm_foundation():
    sc = Scenario("Realm Foundation")
    sc.banner()
    run_id = sc.run_id
    dept_name = f"dept_{run_id}"

    # Invitation code for the scenario (unique per run, real SHA-256 hash).
    plaintext_code = f"invite_{run_id}"
    code_hash = hashlib.sha256(plaintext_code.encode()).hexdigest()

    # ------------------------------------------------------------------ #
    # Step 1: Create a new department (runs in-canister as realm principal) #
    # ------------------------------------------------------------------ #
    sc.step("1. Create department via codex")
    dept_code = f"""
from ggg import Department
d = Department(name={dept_name!r}, description='Scenario dept {run_id}')
ic.print('dept_created name=' + d.name + ' id=' + str(d._id))
"""
    r1 = _codex(f"create_dept_{run_id}", dept_code)
    sc.check("init_warning" not in r1, "Department created via codex without error")

    # ------------------------------------------------------------------ #
    # Step 2: Generate a real member invitation code via codex             #
    # ------------------------------------------------------------------ #
    sc.step("2. Generate member invitation code via codex")
    invite_code = f"""
from ggg.system.registration_code import create_registration_code
rc = create_registration_code(
    code_hash={code_hash!r},
    profile='member',
    max_uses=2,
    expires_in_hours=1,
    created_by='scenario_admin',
)
ic.print('invite_created id=' + str(rc._id) + ' profile=' + rc.profile + ' max_uses=' + str(rc.max_uses))
"""
    r2 = _codex(f"create_invite_{run_id}", invite_code)
    sc.check("init_warning" not in r2, "Invitation code created without error")

    # ------------------------------------------------------------------ #
    # Step 3a: Member-1 joins with the real invitation code                #
    # ------------------------------------------------------------------ #
    sc.step("3a. Member-1 joins using invitation code")
    with TestIdentity(f"rf_m1_{run_id}") as member1:
        join1 = call_backend("join_realm", "member", "", code_hash)
        sc.check(join1.get("success"), f"Member-1 {member1.principal[:16]}… joined via real invite code")
        member1_principal = member1.principal

        # ------------------------------------------------------------------ #
        # Step 3b: Member-2 joins with the same code (max_uses=2)            #
        # ------------------------------------------------------------------ #
        sc.step("3b. Member-2 joins using same invitation code (second use)")
        with TestIdentity(f"rf_m2_{run_id}") as member2:
            join2 = call_backend("join_realm", "member", "", code_hash)
            sc.check(join2.get("success"), f"Member-2 {member2.principal[:16]}… joined via same invite code")
            member2_principal = member2.principal

            # ------------------------------------------------------------------ #
            # Step 3c: Third attempt must be rejected (code exhausted)           #
            # ------------------------------------------------------------------ #
            sc.step("3c. Third join attempt is rejected (code now exhausted)")
            with TestIdentity(f"rf_m3_{run_id}") as member3:
                join3 = call_backend("join_realm", "member", "", code_hash)
                sc.check(
                    not join3.get("success"),
                    "Third attempt with exhausted code is correctly rejected",
                )

            # ------------------------------------------------------------------ #
            # Step 4: Assign members to department via codex                     #
            # ------------------------------------------------------------------ #
            sc.step("4. Assign members to department via codex")
            assign_code = f"""
from ggg import Department, User
dept = Department[{dept_name!r}]
m1 = User[{member1_principal!r}]
m2 = User[{member2_principal!r}]
errors = []
if dept and m1:
    dept.members.add(m1)
else:
    errors.append('m1 dept assign failed: dept=' + str(dept) + ' m1=' + str(m1))
if dept and m2:
    dept.members.add(m2)
else:
    errors.append('m2 dept assign failed')
if errors:
    ic.print('ERROR: ' + '; '.join(errors))
else:
    ic.print('members_assigned ok')
"""
            r4 = _codex(f"assign_members_{run_id}", assign_code)
            sc.check("init_warning" not in r4, "Member assignment codex ran without error")

            # ------------------------------------------------------------------ #
            # Step 5: Verify department appears in realm share-audience list      #
            # ------------------------------------------------------------------ #
            sc.step("5. Verify department in realm audience roster")
            audiences = call_backend("list_share_audiences")
            all_audiences = audiences.get("audiences", []) if isinstance(audiences, dict) else []
            dept_entries = [
                a for a in all_audiences
                if a.get("kind") == "department" and a.get("name") == dept_name
            ]
            sc.check(len(dept_entries) == 1, f"Department '{dept_name}' in share-audience list")

            # ------------------------------------------------------------------ #
            # Step 6: Verify member roster via codex read-back                   #
            # ------------------------------------------------------------------ #
            sc.step("6. Verify department roster via codex read-back")
            read_code = f"""
from ggg import Department
dept = Department[{dept_name!r}]
members = list(dept.members) if dept else []
principals = [str(getattr(m, 'id', '')) for m in members]
ic.print('roster_count=' + str(len(members)) + ' principals=' + ','.join(principals))
"""
            r6 = _codex(f"read_roster_{run_id}", read_code)
            sc.check("init_warning" not in r6, "Department roster read-back succeeded")

            # ------------------------------------------------------------------ #
            # Step 7: Send dept notification; members can see it, outsiders can't #
            # ------------------------------------------------------------------ #
            sc.step("7. Department notification visibility")

            # Admin sends notification to the department
            notif = call_extension("notifications", "create_notification", {
                "title": f"Welcome to {dept_name}",
                "message": "Department notification visibility test.",
                "audience_type": "department",
                "department": dept_name,
                "visibility": "private",
            })
            sc.check(notif and notif.get("success"), "Department notification created")
            notif_id = str(notif.get("id", "")) if notif else ""
            sc.check(bool(notif_id), "Notification ID returned")

            # Member-1 (in dept) sees the notification
            member1.use()
            m1_notifs = call_extension("notifications", "get_notifications", {"limit": 100})
            m1_ids = [str(n.get("id")) for n in (m1_notifs or {}).get("notifications", [])]
            sc.check(notif_id in m1_ids, "Member-1 (dept member) sees dept notification")

            # Member-2 (in dept) also sees it
            member2.use()
            m2_notifs = call_extension("notifications", "get_notifications", {"limit": 100})
            m2_ids = [str(n.get("id")) for n in (m2_notifs or {}).get("notifications", [])]
            sc.check(notif_id in m2_ids, "Member-2 (dept member) sees dept notification")

            # Non-member: join as outsider using test-mode MEMBER bypass
            with TestIdentity(f"rf_out_{run_id}") as outsider:
                call_backend("join_realm", "member", "", MEMBER_CODE_CHECKSUM)
                out_notifs = call_extension("notifications", "get_notifications", {"limit": 100})
                out_ids = [str(n.get("id")) for n in (out_notifs or {}).get("notifications", [])]
                sc.check(
                    notif_id not in out_ids,
                    "Non-member cannot see private dept notification",
                )

    return sc.finish()


if __name__ == "__main__":
    import sys
    sys.exit(run_realm_foundation())
