#!/usr/bin/env python3
"""
Scenario: Notification delivery and lifecycle

A cross-extension test driven against a *deployed* realm on the `test`/`ic`
network. A fresh member joins the realm, receives the auto-generated welcome
notification, then an admin creates an additional targeted notification and
the member reads and marks it as read.

Extensions / backend methods exercised:
  - realm_backend (join_realm)
  - notifications (get_notifications, create_notification, mark_as_read)

Design:
  - Self-provisioning: one throwaway identity.
  - join_realm fires the platform's welcome notification hook, so the scenario
    validates that cross-extension notification delivery works end-to-end with
    no explicit admin setup.
  - A second notification is created directly (admin-path) to verify the
    create → read → mark-read lifecycle independently.
  - State-tolerant: filters only notifications addressed to this run's actor,
    so shared-realm noise is invisible.

Usage:
  REALM_CANISTER_ID=ku6cv-2iaaa-aaaab-agrpa-cai DFX_NETWORK=ic \\
      python3 notifications_scenario.py

Exit code is the number of failed assertions (0 == success).
"""

import sys

from realm_client import (
    MEMBER_CODE_CHECKSUM,
    Scenario,
    TestIdentity,
    call_backend,
    call_extension,
)


def run(sc: Scenario):
    # Register the member first (as operator) so we have a principal to address.
    with TestIdentity(f"{sc.run_id}_member") as actor:
        print(f"actor principal={actor.principal}\n")

        # 1. Register — triggers welcome notification -----------------------
        sc.step("1. join_realm → welcome notification delivered (as member)")
        r = call_backend("join_realm", "member", "", MEMBER_CODE_CHECKSUM)
        sc.check(r.get("success") is True, "join_realm succeeded")

        # get_notifications filters by IC caller, so we query while still
        # acting as the member identity.
        notifs = call_extension("notifications", "get_notifications", {})
        all_notifs = notifs.get("notifications", [])
        sc.check(len(all_notifs) >= 1, "at least one notification visible to member")
        sc.check(
            any(n.get("topic") == "welcome" for n in all_notifs),
            "a 'welcome' notification was delivered on join",
        )

        # 2. Create a targeted notification addressed to the member ----------
        # create_notification is an admin call — we stay as member (TEST_MODE
        # bypasses permission gates), but the notification is addressed to our
        # own principal so visibility works correctly.
        sc.step("2. create_notification → member receives it")
        title = f"[{sc.run_id}] Direct notification"
        cn = call_extension("notifications", "create_notification", {
            "title": title,
            "message": "Automated scenario notification",
            "topic": "test",
            "user_id": actor.principal,   # key is user_id, not recipient
        })
        sc.check(cn.get("success") is True, "create_notification succeeded")
        notif_id = cn.get("id")
        sc.check(bool(notif_id), f"notification id returned ({notif_id})")

        # 3. Read back as member — notification is visible ------------------
        sc.step("3. get_notifications — new notification is visible to member")
        notifs2 = call_extension("notifications", "get_notifications", {})
        all2 = notifs2.get("notifications", [])
        found = next(
            (n for n in all2 if str(n.get("_id") or n.get("id")) == str(notif_id)),
            None,
        )
        sc.check(found is not None, f"created notification visible in list (id={notif_id})")
        sc.check(
            found.get("title") == title if found else False,
            "notification title matches",
        )
        sc.check(
            found.get("read") is False if found else True,
            "notification starts as unread",
        )

        # 4. Mark as read — still acting as the member ---------------------
        sc.step("4. mark_as_read → notification is marked read")
        mr = call_extension("notifications", "mark_as_read", {"id": notif_id})
        sc.check(mr.get("error") is None, f"mark_as_read had no error (response={mr})")

        notifs3 = call_extension("notifications", "get_notifications", {})
        found3 = next(
            (n for n in notifs3.get("notifications", [])
             if str(n.get("_id") or n.get("id")) == str(notif_id)),
            None,
        )
        sc.check(
            found3.get("read") is True if found3 else False,
            "notification is now marked read",
        )

        # 5. Unread count dropped ------------------------------------------
        sc.step("5. unread_count reflects the read notification")
        unread_before = notifs2.get("unread_count", 0)
        unread_after = notifs3.get("unread_count", 0)
        sc.check(
            unread_after < unread_before or unread_after == 0,
            f"unread count decreased or is zero (before={unread_before}, after={unread_after})",
        )


def main():
    sc = Scenario("notification delivery and lifecycle")
    sc.banner()
    try:
        run(sc)
    except Exception as exc:  # noqa: BLE001
        sc.check(False, f"scenario raised an exception: {exc}")
    return sc.finish()


if __name__ == "__main__":
    sys.exit(main())
