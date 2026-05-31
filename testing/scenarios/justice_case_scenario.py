#!/usr/bin/env python3
"""
Scenario: Justice case lifecycle

A cross-extension test driven against a *deployed* realm on the `test`/`ic`
network. Two freshly-provisioned members walk the full case lifecycle from the
perspective of the justice system:

  file_case → assign_judge → issue_verdict (with penalty) → get_case (read-back)

Extensions / GGG modules exercised:
  - realm_backend (join_realm)
  - justice_litigation (file_case, assign_judge, issue_verdict, get_case,
                        get_penalties)

Design:
  - Self-provisioning: creates two throwaway identities (plaintiff + defendant).
  - Uses seeded courts and judges (always present on the Dominion realm) so the
    scenario does not need admin rights to set up a justice system.
  - State-tolerant: asserts only on the case this run created (identified by its
    auto-generated case_number, which is unique per run).
  - Also exercises domain invariants: an unassigned case cannot receive a
    verdict, and a missing case ID is rejected cleanly.

Prerequisite:
  The realm backend WASM must be current (datetime.utcnow removed from
  ggg/justice/case.py). The stale 0.3.0 extension bug (.find scalar) was
  fixed by deploying justice_litigation 0.3.5.

Usage:
  REALM_CANISTER_ID=ku6cv-2iaaa-aaaab-agrpa-cai DFX_NETWORK=ic \\
      python3 justice_case_scenario.py

Exit code is the number of failed assertions (0 == success).
"""

import sys

from realm_client import (
    MEMBER_CODE_CHECKSUM,
    Scenario,
    TestIdentity,
    call_backend,
    call_extension,
    find_objects,
    resolve_user_id,
)


def _first_court():
    """Return (_id, name) of the first active seeded court."""
    courts = find_objects("Court")
    active = [c for c in courts if c.get("status") == "active"]
    if not active:
        raise RuntimeError("No active court found on realm")
    return active[0]["_id"], active[0].get("name", "")


def _first_judge():
    """Return _id of the first active seeded judge."""
    judges = find_objects("Judge")
    active = [j for j in judges if j.get("status") == "active"]
    if not active:
        raise RuntimeError("No active judge found on realm")
    return active[0]["_id"]


def run(sc: Scenario):
    court_id, court_name = _first_court()
    judge_id = _first_judge()

    # 0. Provision two members (plaintiff + defendant) -----------------------
    sc.step("0. provision plaintiff and defendant identities")
    with TestIdentity(f"{sc.run_id}_plaintiff") as plaintiff_actor:
        r = call_backend("join_realm", "member", "", MEMBER_CODE_CHECKSUM)
        sc.check(r.get("success") is True, "plaintiff joined realm")
        plaintiff_uid = resolve_user_id(plaintiff_actor.principal)
        sc.check(bool(plaintiff_uid), f"plaintiff user_id resolved ({plaintiff_uid})")

    with TestIdentity(f"{sc.run_id}_defendant") as defendant_actor:
        r = call_backend("join_realm", "member", "", MEMBER_CODE_CHECKSUM)
        sc.check(r.get("success") is True, "defendant joined realm")
        defendant_uid = resolve_user_id(defendant_actor.principal)
        sc.check(bool(defendant_uid), f"defendant user_id resolved ({defendant_uid})")

    sc.check(plaintiff_uid != defendant_uid, "plaintiff and defendant are distinct")

    # 1. File the case -------------------------------------------------------
    sc.step(f"1. file_case at court '{court_name}' (id={court_id})")
    fc = call_extension("justice_litigation", "file_case", {
        "court_id": court_id,
        "plaintiff_id": plaintiff_uid,
        "defendant_id": defendant_uid,
        "title": f"[{sc.run_id}] Scenario dispute",
        "description": "Automated scenario — not a real case",
    })
    case_data = (fc.get("data") or {}).get("case", {})
    case_id = case_data.get("id")
    case_number = case_data.get("case_number", "")
    sc.check(fc.get("success") is True, f"file_case succeeded")
    sc.check(bool(case_id), f"case created (id={case_id})")
    sc.check(bool(case_number), f"case_number auto-generated ({case_number})")
    sc.check(case_data.get("status") == "filed", "initial status is 'filed'")
    sc.check(
        case_data.get("court_id") == court_id,
        "case is bound to the correct court",
    )

    # 2. NEGATIVE: verdict before judge is assigned is rejected ---------------
    sc.step("2. NEGATIVE: issue_verdict before assign_judge is rejected")
    bad_verdict = call_extension("justice_litigation", "issue_verdict", {
        "case_id": case_id,
        "judge_id": judge_id,
        "decision": "in_favor_of_plaintiff",
        "reasoning": "Should fail — no judge assigned yet",
    })
    sc.check(
        bad_verdict.get("success") is False,
        "verdict rejected on un-assigned case",
    )

    # 3. Assign a judge ------------------------------------------------------
    sc.step(f"3. assign_judge (judge_id={judge_id})")
    aj = call_extension("justice_litigation", "assign_judge", {
        "case_id": case_id,
        "judge_id": judge_id,
    })
    aj_case = (aj.get("data") or {}).get("case", {})
    sc.check(aj.get("success") is True, "assign_judge succeeded")
    sc.check(
        aj_case.get("status") in ("assigned", "in_progress"),
        f"status advanced after assignment ({aj_case.get('status')})",
    )
    sc.check(
        aj_case.get("judges", []) != [],
        "judge list is non-empty after assignment",
    )

    # 4. Issue a verdict with a symbolic penalty -----------------------------
    sc.step("4. issue_verdict with a fine penalty")
    iv = call_extension("justice_litigation", "issue_verdict", {
        "case_id": case_id,
        "judge_id": judge_id,
        "decision": "in_favor_of_plaintiff",
        "reasoning": f"Automated scenario verdict [{sc.run_id}]",
        "penalties": [{
            "type": "fine",
            "amount": 100.0,
            "currency": "SMPL",
            "description": "Symbolic scenario penalty",
            "target_user_id": defendant_uid,
        }],
    })
    verdict_data = (iv.get("data") or {}).get("verdict", {})
    verdict_id = verdict_data.get("id")
    sc.check(iv.get("success") is True, "issue_verdict succeeded")
    sc.check(bool(verdict_id), f"verdict created (id={verdict_id})")
    sc.check(verdict_data.get("decision") == "in_favor_of_plaintiff", "decision persisted")
    sc.check(verdict_data.get("penalty_count", 0) >= 1, "penalty attached to verdict")

    # 5. Read the case back — status advanced; verdict queryable separately --
    sc.step("5. get_case — status advanced after verdict; get_verdicts returns it")
    gc = call_extension("justice_litigation", "get_case", {"case_id": case_id})
    gc_case = (gc.get("data") or {}).get("case", {})
    sc.check(gc.get("success") is True, "get_case succeeded")
    sc.check(
        gc_case.get("status") in ("verdict_issued", "closed"),
        f"case status advanced after verdict (got {gc_case.get('status')!r})",
    )
    # get_verdicts is the reliable endpoint (case.verdicts OneToMany lazy-loads differently)
    gv = call_extension("justice_litigation", "get_verdicts", {"case_id": case_id})
    verdicts = (gv.get("data") or {}).get("verdicts", [])
    sc.check(gv.get("success") is True, "get_verdicts succeeded")
    sc.check(len(verdicts) >= 1, "at least one verdict for this case")
    sc.check(
        any(v.get("id") == verdict_id for v in verdicts),
        f"our verdict (id={verdict_id}) appears in get_verdicts",
    )

    # 6. Penalty is queryable by verdict ------------------------------------
    sc.step("6. get_penalties for the verdict")
    gp = call_extension("justice_litigation", "get_penalties", {"verdict_id": str(verdict_id)})
    penalties = (gp.get("data") or {}).get("penalties", [])
    sc.check(gp.get("success") is True, "get_penalties succeeded")
    sc.check(len(penalties) >= 1, "at least one penalty returned")
    sc.check(
        any(str(p.get("target_user_id")) == str(defendant_uid) for p in penalties),
        "penalty is addressed to the defendant",
    )

    # 7. NEGATIVE: get_case on unknown id is rejected cleanly ----------------
    sc.step("7. NEGATIVE: get_case on non-existent id")
    missing = call_extension("justice_litigation", "get_case", {"case_id": "no-such-case-zzz"})
    sc.check(missing.get("success") is False, "missing case returns failure")


def main():
    sc = Scenario("justice case lifecycle")
    sc.banner()
    try:
        run(sc)
    except Exception as exc:  # noqa: BLE001
        sc.check(False, f"scenario raised an exception: {exc}")
    return sc.finish()


if __name__ == "__main__":
    sys.exit(main())
