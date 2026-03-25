"""
Passport Verification Extension Tests

Tests the passport verification extension against a deployed test realm:
1. Entity registration (AppConfig persists)
2. Initialize - generates application ID
3. Self-healing get_event_id
4. Application ID CRUD (get/set)
5. create_passport_identity stub
6. get_verification_link (requires HTTP outcalls - optional)

Prerequisites:
    - A deployed realm with the passport_verification extension installed
    - dfx configured with the correct network
"""

import json
import os
import subprocess
import sys
import traceback

# Support both Docker and local development paths
_local_utils = os.path.join(
    os.path.dirname(__file__), "..", "..", "_shared", "testing", "utils"
)
sys.path.insert(0, os.path.abspath(_local_utils))
sys.path.append("/app/extension-root/_shared/testing/utils")

from test_utils import (
    get_current_principal,
    print_error,
    print_info,
    print_ok,
    print_warning,
    run_command,
    run_command_json,
    wait_for_canister_ready,
)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

# Network flag: set DFX_NETWORK=staging to test against staging
_NETWORK = os.environ.get("DFX_NETWORK", "")
_NETWORK_FLAG = f"--network {_NETWORK}" if _NETWORK else ""


def call_sync(function_name: str, args: str = "{}") -> dict:
    """Call a passport_verification extension function via extension_sync_call."""
    escaped_args = args.replace('"', '\\"')
    command = (
        f'dfx canister call realm_backend extension_sync_call '
        f"'(record {{ extension_name = \"passport_verification\"; "
        f'function_name = "{function_name}"; '
        f'args = "{escaped_args}" }})\' '
        f"{_NETWORK_FLAG} --output json"
    )
    result = run_command(command)
    if not result:
        return {"success": False, "error": "Command returned no output"}

    try:
        parsed = json.loads(result)
    except json.JSONDecodeError:
        return {"success": False, "error": f"Invalid JSON: {result}"}

    # Extract the nested response field
    if isinstance(parsed, dict):
        response_str = parsed.get("response", "")
        success = parsed.get("success", False)
        if response_str:
            try:
                return {"success": success, "data": json.loads(response_str)}
            except json.JSONDecodeError:
                return {"success": success, "data": response_str}
        return {"success": success}

    return {"success": False, "error": f"Unexpected response format: {parsed}"}


def call_async(function_name: str, args: str = "{}") -> dict:
    """Call a passport_verification extension function via extension_async_call."""
    escaped_args = args.replace('"', '\\"')
    command = (
        f'dfx canister call realm_backend extension_async_call '
        f"'(record {{ extension_name = \"passport_verification\"; "
        f'function_name = "{function_name}"; '
        f'args = "{escaped_args}" }})\' '
        f"{_NETWORK_FLAG} --output json"
    )
    result = run_command(command)
    if not result:
        return {"success": False, "error": "Command returned no output"}

    try:
        parsed = json.loads(result)
    except json.JSONDecodeError:
        return {"success": False, "error": f"Invalid JSON: {result}"}

    if isinstance(parsed, dict):
        response_str = parsed.get("response", "")
        success = parsed.get("success", False)
        if response_str:
            try:
                return {"success": success, "data": json.loads(response_str)}
            except json.JSONDecodeError:
                return {"success": success, "data": response_str}
        return {"success": success}

    return {"success": False, "error": f"Unexpected response format: {parsed}"}


# ---------------------------------------------------------------------------
# Tests
# ---------------------------------------------------------------------------

def test_initialize():
    """initialize() should succeed and generate an application ID."""
    print_info("Test: initialize...")
    result = call_sync("initialize")
    if not result.get("success"):
        print_error(f"initialize failed: {result}")
        return False
    print_ok("initialize succeeded")
    return True


def test_get_current_application_id():
    """get_current_application_id should return a valid ID after initialization."""
    print_info("Test: get_current_application_id...")
    result = call_sync("get_current_application_id")
    if not result.get("success"):
        print_error(f"get_current_application_id failed: {result}")
        return False

    data = result.get("data", {})
    app_id = data.get("application_id")
    status = data.get("status")

    if not app_id:
        print_error(f"application_id is empty: {data}")
        return False

    if status != "initialized":
        print_error(f"Expected status 'initialized', got '{status}'")
        return False

    # App ID should be a numeric string (unix timestamp)
    if not app_id.isdigit():
        print_warning(f"application_id '{app_id}' is not purely numeric (may be legacy format)")

    print_ok(f"application_id = {app_id}, status = {status}")
    return True


def test_set_application_id():
    """set_application_id should update the ID and persist it."""
    print_info("Test: set_application_id...")

    test_id = "9999999999"
    result = call_sync("set_application_id", test_id)
    if not result.get("success"):
        print_error(f"set_application_id failed: {result}")
        return False

    # Verify persistence
    check = call_sync("get_current_application_id")
    if not check.get("success"):
        print_error(f"get_current_application_id after set failed: {check}")
        return False

    data = check.get("data", {})
    if data.get("application_id") != test_id:
        print_error(
            f"Expected application_id '{test_id}', got '{data.get('application_id')}'"
        )
        return False

    print_ok(f"set_application_id to {test_id} and verified persistence")
    return True


def test_set_application_id_restore():
    """Restore a realistic application ID after the set test."""
    print_info("Test: restore application_id to realistic value...")

    restore_id = "1700000000"
    result = call_sync("set_application_id", restore_id)
    if not result.get("success"):
        print_error(f"set_application_id restore failed: {result}")
        return False

    print_ok(f"Restored application_id to {restore_id}")
    return True


def test_get_event_id_returns_value():
    """get_event_id should return the current application ID (plain string)."""
    print_info("Test: get_event_id returns value...")
    result = call_sync("get_event_id")
    if not result.get("success"):
        print_error(f"get_event_id failed: {result}")
        return False

    # get_event_id returns a plain string, which ends up in "data" after parsing
    data = result.get("data")
    if data:
        print_ok(f"get_event_id returned: {data}")
        return True

    print_error(f"get_event_id returned empty/falsy data: {result}")
    return False


def test_create_passport_identity():
    """create_passport_identity should return success (currently a stub)."""
    print_info("Test: create_passport_identity...")
    result = call_sync("create_passport_identity", json.dumps({"test": True}))
    if not result.get("success"):
        print_error(f"create_passport_identity failed: {result}")
        return False

    data = result.get("data", {})
    if not data.get("success"):
        print_error(f"create_passport_identity response not successful: {data}")
        return False

    if not data.get("identity_created"):
        print_error(f"identity_created not True: {data}")
        return False

    print_ok(f"create_passport_identity succeeded (session_id={data.get('session_id', 'N/A')})")
    return True


def test_get_verification_link_http_outcall():
    """
    get_verification_link makes an HTTP outcall to Rarimo API.

    This test may fail on local replicas without HTTP outcall support.
    Marked as optional - failure is a warning, not an error.
    """
    print_info("Test: get_verification_link (HTTP outcall, optional)...")
    result = call_async("get_verification_link")

    if not result.get("success"):
        error = result.get("error", result.get("data", ""))
        # HTTP outcalls may not work on local replica
        if "Http" in str(error) or "reject" in str(error).lower():
            print_warning(
                f"get_verification_link failed (expected on local replica): {error}"
            )
            return True  # Not a test failure - just environment limitation
        print_error(f"get_verification_link failed unexpectedly: {result}")
        return False

    data = result.get("data", {})

    # Check for Rarimo response structure
    if "data" in data and "attributes" in data.get("data", {}):
        attrs = data["data"]["attributes"]
        has_proof_params = "get_proof_params" in attrs
        has_rarime_url = "rarime_app_url" in attrs
        if has_proof_params and has_rarime_url:
            print_ok("get_verification_link returned valid Rarimo response with URLs")
            return True
        print_warning(f"Response missing expected attributes: {list(attrs.keys())}")

    print_ok(f"get_verification_link returned response: {str(data)[:200]}")
    return True


def test_check_verification_status_http_outcall():
    """
    check_verification_status makes an HTTP outcall to Rarimo API.

    Optional test - may fail on local replicas.
    """
    print_info("Test: check_verification_status (HTTP outcall, optional)...")
    result = call_async("check_verification_status")

    if not result.get("success"):
        error = result.get("error", result.get("data", ""))
        if "Http" in str(error) or "reject" in str(error).lower():
            print_warning(
                f"check_verification_status failed (expected on local replica): {error}"
            )
            return True
        print_error(f"check_verification_status failed unexpectedly: {result}")
        return False

    print_ok(f"check_verification_status returned response")
    return True


def test_initialize_idempotent():
    """Calling initialize twice should not change the application ID."""
    print_info("Test: initialize is idempotent...")

    # Get current ID
    before = call_sync("get_current_application_id")
    if not before.get("success"):
        print_error(f"get_current_application_id (before) failed: {before}")
        return False
    id_before = before.get("data", {}).get("application_id")

    # Call initialize again
    result = call_sync("initialize")
    if not result.get("success"):
        print_error(f"initialize (second call) failed: {result}")
        return False

    # Get ID again
    after = call_sync("get_current_application_id")
    if not after.get("success"):
        print_error(f"get_current_application_id (after) failed: {after}")
        return False
    id_after = after.get("data", {}).get("application_id")

    if id_before != id_after:
        print_error(
            f"initialize changed application_id! Before: {id_before}, After: {id_after}"
        )
        return False

    print_ok(f"initialize is idempotent (ID unchanged: {id_before})")
    return True


# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------

def async_task():
    """Entry point for realms run command."""
    print_info("=" * 60)
    print_info("Passport Verification Extension Tests")
    print_info("=" * 60)

    principal = get_current_principal()
    if principal:
        print_info(f"Running as: {principal}")

    # Core tests (must pass)
    core_tests = [
        test_initialize,
        test_get_current_application_id,
        test_set_application_id,
        test_set_application_id_restore,
        test_get_event_id_returns_value,
        test_initialize_idempotent,
    ]

    # Tests that require a real user context (optional in Docker/CI environments)
    # create_passport_identity does User[session_id] lookup which requires
    # the calling principal to be a registered citizen in the realm.
    # HTTP outcall tests may fail on local replicas without HTTP outcall support.
    optional_tests = [
        test_create_passport_identity,
        test_get_verification_link_http_outcall,
        test_check_verification_status_http_outcall,
    ]

    passed = 0
    failed = 0

    print_info("-" * 60)
    print_info("Core Tests")
    print_info("-" * 60)

    for test in core_tests:
        try:
            if test():
                passed += 1
            else:
                failed += 1
        except Exception as e:
            print_error(f"Exception in {test.__name__}: {e}")
            print_error(traceback.format_exc())
            failed += 1

    print_info("-" * 60)
    print_info("Optional Tests (user context / HTTP outcalls)")
    print_info("-" * 60)

    optional_passed = 0
    for test in optional_tests:
        try:
            if test():
                optional_passed += 1
        except Exception as e:
            print_warning(f"Optional test {test.__name__} exception: {e}")

    print_info("=" * 60)
    if failed == 0:
        print_ok(
            f"All {passed} core tests passed! "
            f"({optional_passed}/{len(optional_tests)} optional tests passed)"
        )
    else:
        print_error(f"{failed} core test(s) failed, {passed} passed")
    print_info("=" * 60)

    return {"success": failed == 0, "passed": passed, "failed": failed}


if __name__ == "__main__":
    result = async_task()
    sys.exit(0 if result.get("success") else 1)
