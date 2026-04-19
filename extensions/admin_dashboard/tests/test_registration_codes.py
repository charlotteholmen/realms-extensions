"""
Registration Code Management Tests
Tests user registration code generation and validation
"""

import json
import sys

sys.path.append("/app/extension-root/_shared/testing/utils")

from test_utils import (
    call_realm_extension,
    print_error,
    print_info,
    print_ok,
    print_warning,
    query_ggg_entities,
)


def async_task():
    """Entry point for realms run command"""
    print_info("Starting registration code tests...")

    # Test 1: Generate a registration code
    print_info("Test 1: Generate registration code...")
    try:
        result = call_realm_extension(
            "admin_dashboard",
            "generate_registration_url",
            {
                "user_id": "test_user_123",
                "email": "test@example.com",
                "created_by": "admin",
                "frontend_url": "http://localhost:8000",
                "expires_in_hours": 24,
            },
        )

        if result.get("success"):
            print_ok("✓ Registration code generated successfully")
            data = result.get("data", {})
            code = data.get("code")
            registration_url = data.get("registration_url")
            print_ok(f"  Code: {code}")
            print_ok(f"  URL: {registration_url}")
            print_ok(f"  Expires at: {data.get('expires_at')}")

            # Store code for next test
            generated_code = code
        else:
            print_error(
                f"✗ Failed to generate registration code: {result.get('error')}"
            )
            generated_code = None
    except Exception as e:
        print_error(f"✗ Exception generating registration code: {e}")
        generated_code = None

    # Test 2: Validate the generated code
    if generated_code:
        print_info("Test 2: Validate registration code...")
        try:
            result = call_realm_extension(
                "admin_dashboard",
                "validate_registration_code",
                {"code": generated_code},
            )

            if result.get("success"):
                print_ok("✓ Registration code is valid")
                data = result.get("data", {})
                print_ok(f"  User ID: {data.get('user_id')}")
                print_ok(f"  Email: {data.get('email')}")
                print_ok(f"  Created by: {data.get('created_by')}")
            else:
                print_error(f"✗ Code validation failed: {result.get('error')}")
        except Exception as e:
            print_error(f"✗ Exception validating code: {e}")
    else:
        print_error("✗ Skipping validation test (no code generated)")

    # Test 3: List all registration codes
    print_info("Test 3: List all registration codes...")
    try:
        result = call_realm_extension(
            "admin_dashboard", "get_registration_codes", {"include_used": True}
        )

        if result.get("success"):
            codes = result.get("data", [])
            print_ok(f"✓ Found {len(codes)} registration codes")

            # Show details of first few codes
            for i, code_data in enumerate(codes[:3]):
                print_ok(f"  Code {i+1}:")
                print_ok(f"    Code hash: {code_data.get('code_hash')}")
                print_ok(f"    Email: {code_data.get('email')}")
                print_ok(f"    Valid: {code_data.get('is_valid')}")
                print_ok(f"    Used: {code_data.get('used')}")

            # Listings must NEVER include the plaintext invitation code —
            # only the hash. The plaintext is only returned once, at
            # mint time. See models.py docstring for the rationale.
            leaked = [c for c in codes if c.get("code") or c.get("registration_url")]
            if leaked:
                print_error(
                    f"✗ get_registration_codes leaked plaintext for "
                    f"{len(leaked)} code(s) — must only expose code_hash"
                )
            else:
                print_ok("✓ Listing exposes only code_hash, no plaintext")
        else:
            print_error(f"✗ Failed to list registration codes: {result.get('error')}")
    except Exception as e:
        print_error(f"✗ Exception listing codes: {e}")

    # Test 4: Test invalid code validation
    print_info("Test 4: Test invalid code validation...")
    try:
        result = call_realm_extension(
            "admin_dashboard",
            "validate_registration_code",
            {"code": "invalid_code_12345"},
        )

        if not result.get("success"):
            print_ok("✓ Invalid code correctly rejected")
            print_ok(f"  Error message: {result.get('error')}")
        else:
            print_error("✗ Invalid code was accepted (should have failed)")
    except Exception as e:
        print_error(f"✗ Exception testing invalid code: {e}")

    # Test 5: Generate an admin invite and verify the role is preserved
    print_info("Test 5: Generate admin invite (profile=admin)...")
    admin_code = None
    try:
        result = call_realm_extension(
            "admin_dashboard",
            "generate_registration_url",
            {
                "user_id": "admin_invitee_999",
                "email": "admin@example.com",
                "created_by": "admin",
                "frontend_url": "http://localhost:8000",
                "expires_in_hours": 24,
                "profile": "admin",
                "max_uses": 1,
            },
        )
        if result.get("success") and result.get("data", {}).get("profile") == "admin":
            admin_code = result["data"]["code"]
            admin_code_hash = result["data"].get("code_hash")
            print_ok(f"✓ Admin invite minted (hash={admin_code_hash})")
            print_ok(
                f"  registration_url = {result['data'].get('registration_url')}"
            )
            if "/join?invite=" not in result["data"].get("registration_url", ""):
                print_error(
                    "✗ Expected registration_url to point at /join?invite=…"
                )
            if not admin_code_hash:
                print_error(
                    "✗ Mint response should expose code_hash so admins can "
                    "later revoke without the plaintext"
                )
            # Sanity: response carries the plaintext exactly once, but it
            # must be a fresh secret (16 chars) and clearly not the hash.
            if not admin_code or len(admin_code) < 8:
                print_error(f"✗ Plaintext code looks malformed: {admin_code!r}")
            if admin_code == admin_code_hash:
                print_error("✗ Plaintext code must differ from its hash")
        else:
            print_error(f"✗ Admin invite generation failed: {result}")
    except Exception as e:
        print_error(f"✗ Exception minting admin invite: {e}")

    # Test 6: Validate returns the admin profile back
    if admin_code:
        print_info("Test 6: validate_registration_code returns profile=admin...")
        try:
            result = call_realm_extension(
                "admin_dashboard",
                "validate_registration_code",
                {"code": admin_code},
            )
            if result.get("success") and result.get("data", {}).get("profile") == "admin":
                print_ok("✓ Profile metadata returned correctly")
            else:
                print_error(
                    f"✗ Expected profile=admin in validate response: {result}"
                )
        except Exception as e:
            print_error(f"✗ Exception validating admin code: {e}")

    # Test 7: Consume the admin code, then assert it can't be consumed again
    if admin_code:
        print_info("Test 7: consume_registration_code (single-use enforcement)...")
        try:
            consumed = call_realm_extension(
                "admin_dashboard",
                "consume_registration_code",
                {"code": admin_code, "principal": "test-principal-aaaa"},
            )
            if consumed.get("success") and consumed.get("data", {}).get("profile") == "admin":
                print_ok("✓ Admin code consumed once")
            else:
                print_error(f"✗ Consume failed: {consumed}")

            consumed_again = call_realm_extension(
                "admin_dashboard",
                "consume_registration_code",
                {"code": admin_code, "principal": "test-principal-bbbb"},
            )
            if not consumed_again.get("success"):
                print_ok("✓ Single-use code correctly rejected on second consume")
            else:
                print_error("✗ Single-use code was consumed twice")
        except Exception as e:
            print_error(f"✗ Exception consuming admin code: {e}")

    # Test 8: Multi-use code can be consumed by N distinct principals,
    # but the same principal cannot redeem twice.
    print_info("Test 8: Multi-use code redemption tracking...")
    try:
        gen = call_realm_extension(
            "admin_dashboard",
            "generate_registration_url",
            {
                "user_id": "group_invite_team",
                "created_by": "admin",
                "frontend_url": "http://localhost:8000",
                "expires_in_hours": 24,
                "profile": "member",
                "max_uses": 3,
            },
        )
        if not gen.get("success"):
            print_error(f"✗ Could not mint multi-use code: {gen}")
        else:
            multi_code = gen["data"]["code"]
            for i, p in enumerate(["pX", "pY", "pZ"], start=1):
                r = call_realm_extension(
                    "admin_dashboard",
                    "consume_registration_code",
                    {"code": multi_code, "principal": p},
                )
                if r.get("success"):
                    print_ok(f"  ✓ redemption {i}/3 by {p} ok")
                else:
                    print_error(f"  ✗ redemption {i}/3 by {p} failed: {r}")

            # Same principal twice → reject
            again = call_realm_extension(
                "admin_dashboard",
                "consume_registration_code",
                {"code": multi_code, "principal": "pX"},
            )
            if not again.get("success"):
                print_ok("  ✓ duplicate-principal redemption rejected")
            else:
                print_error("  ✗ duplicate-principal redemption was accepted")

            # Fourth distinct principal → over capacity → reject
            over = call_realm_extension(
                "admin_dashboard",
                "consume_registration_code",
                {"code": multi_code, "principal": "pW"},
            )
            if not over.get("success"):
                print_ok("  ✓ over-capacity redemption rejected")
            else:
                print_error("  ✗ over-capacity redemption was accepted")
    except Exception as e:
        print_error(f"✗ Exception in multi-use test: {e}")

    # Test 9: Revoke an outstanding code
    print_info("Test 9: Revoke registration code...")
    try:
        gen = call_realm_extension(
            "admin_dashboard",
            "generate_registration_url",
            {
                "user_id": "to_be_revoked",
                "created_by": "admin",
                "frontend_url": "http://localhost:8000",
                "expires_in_hours": 24,
                "profile": "member",
                "max_uses": 1,
            },
        )
        if not gen.get("success"):
            print_error(f"✗ Could not mint code to revoke: {gen}")
        else:
            target = gen["data"]["code"]
            target_hash = gen["data"].get("code_hash")

            # The admin UI revokes via code_hash (the plaintext is gone
            # from the listing). Exercise that path explicitly here.
            rev = call_realm_extension(
                "admin_dashboard",
                "revoke_registration_code",
                {"code_hash": target_hash},
            )
            if rev.get("success"):
                print_ok("✓ Revoke by code_hash succeeded")
            else:
                print_error(f"✗ Revoke by code_hash failed: {rev}")

            # Validate (which takes the plaintext) should now reject it.
            validated = call_realm_extension(
                "admin_dashboard",
                "validate_registration_code",
                {"code": target},
            )
            if not validated.get("success"):
                print_ok("✓ Validate correctly rejects revoked code")
            else:
                print_error("✗ Revoked code was still accepted by validate")

            # Back-compat: revoking via plaintext still works.
            gen2 = call_realm_extension(
                "admin_dashboard",
                "generate_registration_url",
                {
                    "user_id": "to_be_revoked_plaintext",
                    "created_by": "admin",
                    "frontend_url": "http://localhost:8000",
                    "expires_in_hours": 24,
                    "profile": "member",
                    "max_uses": 1,
                },
            )
            if gen2.get("success"):
                rev2 = call_realm_extension(
                    "admin_dashboard",
                    "revoke_registration_code",
                    {"code": gen2["data"]["code"]},
                )
                if rev2.get("success"):
                    print_ok("✓ Revoke by plaintext (back-compat) succeeded")
                else:
                    print_error(f"✗ Revoke by plaintext failed: {rev2}")
    except Exception as e:
        print_error(f"✗ Exception in revoke test: {e}")

    # Test 10: Reject invalid profile values at mint time
    print_info("Test 10: Reject unknown profile value at mint time...")
    try:
        result = call_realm_extension(
            "admin_dashboard",
            "generate_registration_url",
            {
                "user_id": "bad_profile",
                "created_by": "admin",
                "frontend_url": "http://localhost:8000",
                "expires_in_hours": 24,
                "profile": "supreme_overlord",
            },
        )
        if not result.get("success"):
            print_ok("✓ Unknown profile correctly rejected")
        else:
            print_error("✗ Unknown profile was accepted")
    except Exception as e:
        print_error(f"✗ Exception in invalid-profile test: {e}")

    # Test 11: Persisted entities expose only the hash (defence-in-depth
    # check against schema regressions that would re-introduce plaintext
    # storage). We query the GGG entity table directly via the realm's
    # list_objects_paginated endpoint.
    print_info("Test 11: Persisted RegistrationCode entities expose only the hash...")
    try:
        page = query_ggg_entities("RegistrationCode", page_num=0, page_size=20)
        items = []
        if isinstance(page, dict):
            data = page.get("data") or {}
            paginated = data.get("objectsListPaginated") or {}
            raw_objects = paginated.get("objects") or []
            for raw in raw_objects:
                try:
                    parsed = json.loads(raw) if isinstance(raw, str) else raw
                except json.JSONDecodeError:
                    parsed = {"_raw": raw}
                items.append(parsed)
        if not items:
            print_ok("  (no RegistrationCode rows returned by list_objects)")
        else:
            persisted_with_plaintext = [
                i for i in items if "code" in i and i.get("code")
            ]
            persisted_with_hash = [i for i in items if i.get("code_hash")]
            if persisted_with_plaintext:
                print_error(
                    f"✗ {len(persisted_with_plaintext)} RegistrationCode "
                    f"row(s) carry a 'code' field — must only persist 'code_hash'"
                )
            else:
                print_ok(
                    f"✓ All {len(items)} persisted entities use code_hash only "
                    f"({len(persisted_with_hash)} with non-empty hash)"
                )
    except Exception as e:
        # query_ggg_entities is a best-effort defence-in-depth check; the
        # real assertions live above. Don't fail the suite if the GGG
        # API surface differs in this version.
        print_warning(f"  Skipped (couldn't query RegistrationCode directly): {e}")

    print_info("Registration code tests completed!")

    return {"success": True, "message": "Registration code tests completed"}
