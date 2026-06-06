#!/usr/bin/env python3
"""
Scenario: Land registry ownership transfer

A cross-extension test driven against a *deployed* realm on the `test`/`ic`
network (no Docker, no local replica). It self-provisions two fresh member
identities, creates a residential parcel, and walks the full ownership
lifecycle: assign -> read back -> transfer -> read back -> release.

Extensions exercised:
  - realm_backend (join_realm, find_objects)
  - land_registry (create_land, update_land_ownership, get_land)

Design:
  - Self-provisioning: creates its own dfx identities; the only required initial
    state is "the realm is deployed with the TEST_MODE flags".
  - Namespacing: parcels use random coordinates derived from the RUN_ID, so
    repeated or parallel runs against the shared realm never collide.
  - State-tolerant: asserts only on the parcel this run created.
  - Also pins the land_registry domain rules (members may own only residential
    land; ownership cannot be split between a user and an organization).

This is the journey that previously surfaced three real land_registry bugs:
  1. create_land returned id=null (never set the alias field),
  2. update_land_ownership called a non-existent land.save() (crash),
  3. get_land read land.owner_user.name (User has no `name`, only `nickname`),
all now fixed.

Usage:
  REALM_CANISTER_ID=ku6cv-2iaaa-aaaab-agrpa-cai DFX_NETWORK=ic \\
      python3 land_ownership_scenario.py

Exit code is the number of failed assertions (0 == success).
"""

import random
import sys

from realm_client import (
    MEMBER_CODE_CHECKSUM,
    Scenario,
    TestIdentity,
    call_backend,
    call_extension,
    resolve_user_id,
)


def _register_member(label):
    """Register a fresh member and return (principal, user_id)."""
    with TestIdentity(label) as actor:
        r = call_backend("join_realm", "member", "", MEMBER_CODE_CHECKSUM)
        assert r.get("success") is True, f"join_realm failed for {label}: {r}"
        return actor.principal, resolve_user_id(actor.principal)


def run(sc: Scenario):
    # Unique coordinates for this run so we never collide with seeded/other lands.
    rng = random.Random(sc.run_id)
    x, y = rng.randint(100_000, 9_000_000), rng.randint(100_000, 9_000_000)
    cx, cy = rng.randint(100_000, 9_000_000), rng.randint(100_000, 9_000_000)

    # 0. Provision two members (the buyer/seller of the parcel) ---------------
    sc.step("0. provision two member identities")
    alice_principal, alice_uid = _register_member(f"{sc.run_id}_alice")
    bob_principal, bob_uid = _register_member(f"{sc.run_id}_bob")
    sc.check(bool(alice_uid), f"alice registered (user_id={alice_uid})")
    sc.check(bool(bob_uid), f"bob registered (user_id={bob_uid})")
    sc.check(alice_uid != bob_uid, "alice and bob are distinct users")

    # 1. Create a residential parcel ------------------------------------------
    sc.step("1. land_registry.create_land (residential)")
    c = call_extension("land_registry", "create_land", {
        "x_coordinate": x,
        "y_coordinate": y,
        "land_type": "residential",
        "metadata": f'{{"run_id": "{sc.run_id}"}}',
    })
    land_id = (c.get("data") or {}).get("id")
    sc.check(c.get("success") is True, "create_land succeeded")
    sc.check(bool(land_id), f"create_land returned a usable id (id={land_id!r})")

    # 2. Newly created parcel has no owner ------------------------------------
    sc.step("2. get_land -> parcel starts unowned")
    g0 = call_extension("land_registry", "get_land", {"land_id": land_id})
    d0 = g0.get("data") or {}
    sc.check(g0.get("success") is True, "get_land succeeded on fresh parcel")
    sc.check(d0.get("owner_user_id") is None, "fresh parcel has no user owner")
    sc.check(d0.get("owner_organization_id") is None, "fresh parcel has no org owner")

    # 3. Assign ownership to alice --------------------------------------------
    sc.step("3. update_land_ownership -> alice owns the parcel")
    u1 = call_extension("land_registry", "update_land_ownership", {
        "land_id": land_id, "owner_user_id": alice_uid,
    })
    sc.check(u1.get("success") is True, "assign-to-alice succeeded")
    g1 = call_extension("land_registry", "get_land", {"land_id": land_id})
    d1 = g1.get("data") or {}
    sc.check(g1.get("success") is True, "get_land succeeded after assignment")
    sc.check(
        d1.get("owner_user_id") == alice_principal,
        "parcel owner reads back as alice (ManyToOne resolves)",
    )
    sc.check(d1.get("owner_organization_id") is None, "no org owner after user assignment")

    # 4. Transfer ownership to bob --------------------------------------------
    sc.step("4. update_land_ownership -> transfer to bob")
    u2 = call_extension("land_registry", "update_land_ownership", {
        "land_id": land_id, "owner_user_id": bob_uid,
    })
    sc.check(u2.get("success") is True, "transfer-to-bob succeeded")
    g2 = call_extension("land_registry", "get_land", {"land_id": land_id})
    d2 = g2.get("data") or {}
    sc.check(
        d2.get("owner_user_id") == bob_principal,
        "parcel owner now reads back as bob (transfer persisted)",
    )
    sc.check(
        d2.get("owner_user_id") != alice_principal,
        "alice is no longer the owner after transfer",
    )

    # 5. Release ownership ----------------------------------------------------
    sc.step("5. update_land_ownership -> release (no owner)")
    u3 = call_extension("land_registry", "update_land_ownership", {"land_id": land_id})
    sc.check(u3.get("success") is True, "release succeeded")
    g3 = call_extension("land_registry", "get_land", {"land_id": land_id})
    d3 = g3.get("data") or {}
    sc.check(d3.get("owner_user_id") is None, "parcel is unowned after release")

    # 6. INVARIANT: a member may own only residential land --------------------
    sc.step("6. INVARIANT: member cannot own non-residential land")
    cc = call_extension("land_registry", "create_land", {
        "x_coordinate": cx, "y_coordinate": cy, "land_type": "commercial",
        "metadata": f'{{"run_id": "{sc.run_id}"}}',
    })
    commercial_id = (cc.get("data") or {}).get("id")
    sc.check(cc.get("success") is True, f"commercial parcel created (id={commercial_id!r})")
    bad = call_extension("land_registry", "update_land_ownership", {
        "land_id": commercial_id, "owner_user_id": alice_uid,
    })
    sc.check(bad.get("success") is False, "assigning a member to commercial land is rejected")

    # 7. INVARIANT: ownership cannot be split user+org ------------------------
    sc.step("7. INVARIANT: cannot own by both user and organization")
    both = call_extension("land_registry", "update_land_ownership", {
        "land_id": land_id, "owner_user_id": alice_uid, "owner_organization_id": "1",
    })
    sc.check(both.get("success") is False, "dual user+org ownership is rejected")

    # 8. NEGATIVE: get_land on a missing parcel -------------------------------
    sc.step("8. NEGATIVE: get_land on a non-existent parcel")
    missing = call_extension("land_registry", "get_land", {"land_id": "no-such-land-zzz"})
    sc.check(missing.get("success") is False, "get_land reports failure for unknown parcel")


def main():
    sc = Scenario("land registry ownership transfer")
    sc.banner()
    try:
        run(sc)
    except Exception as exc:  # noqa: BLE001
        sc.check(False, f"scenario raised an exception: {exc}")
    return sc.finish()


if __name__ == "__main__":
    sys.exit(main())
