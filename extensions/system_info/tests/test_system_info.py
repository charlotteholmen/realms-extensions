"""
System Info Extension Tests

Tests the system_info extension against a deployed test realm:
1. get_system_info — returns full system snapshot
2. get_db_stats — entity type counts
3. get_canister_stats — cycles, memory, canister IDs
4. get_token_balances — cached wallet balances

Prerequisites:
    - A deployed realm with the system_info extension installed
    - dfx configured with the correct network
"""

import json
import os
import sys
import traceback

# Support both Docker and local development paths
_local_utils = os.path.join(
    os.path.dirname(__file__), "..", "..", "_shared", "testing", "utils"
)
sys.path.insert(0, os.path.abspath(_local_utils))
sys.path.append("/app/extension-root/_shared/testing/utils")

from test_utils import (
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

_NETWORK = os.environ.get("DFX_NETWORK", "")
_NETWORK_FLAG = f"--network {_NETWORK}" if _NETWORK else ""


def call_sync(function_name: str, args: str = "{}") -> dict:
    """Call a system_info extension function via extension_sync_call."""
    escaped_args = args.replace('"', '\\"')
    command = (
        f"dfx canister call realm_backend extension_sync_call "
        f"'(record {{ extension_name = \"system_info\"; "
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
                inner = json.loads(response_str)
                return inner  # inner already has {"success": ..., "data": ...}
            except json.JSONDecodeError:
                return {"success": success, "data": response_str}
        return {"success": success}

    return {"success": False, "error": f"Unexpected response format: {parsed}"}


# ---------------------------------------------------------------------------
# Tests
# ---------------------------------------------------------------------------


def test_get_system_info():
    """get_system_info returns a full system snapshot."""
    print_info("Testing get_system_info...")
    result = call_sync("get_system_info")
    assert result.get("success"), f"Expected success, got: {result}"
    data = result["data"]

    # Python section
    assert "python" in data, "Missing python section"
    assert "version" in data["python"], "Missing python version"
    print_ok(f"  Python: {data['python']['version'][:40]}...")

    # Basilisk section
    assert "basilisk" in data, "Missing basilisk section"
    print_ok(f"  Basilisk: {data['basilisk'].get('version', 'N/A')}")

    # Realms section
    assert "realms" in data, "Missing realms section"
    print_ok(f"  Realms: {data['realms'].get('version', 'N/A')}")

    # DB section
    assert "db" in data, "Missing db section"
    assert data["db"]["total_entities"] >= 0, "Invalid entity count"
    print_ok(
        f"  DB: {data['db']['total_entities']} entities, "
        f"{data['db']['entity_types']} types"
    )

    # Canister section
    assert "canister" in data, "Missing canister section"
    assert data["canister"]["cycles"] > 0, "Cycles should be positive"
    print_ok(f"  Cycles: {data['canister']['cycles_tc']} TC")

    # Files section
    assert "files" in data, "Missing files section"
    print_ok(
        f"  Files: {data['files']['total_files']} files, "
        f"{data['files']['total_size_mb']} MB"
    )

    # Extensions section
    assert "extensions" in data, "Missing extensions section"
    ext_count = data["extensions"]["count"]
    print_ok(f"  Extensions: {ext_count} installed")

    print_ok("get_system_info: PASSED")


def test_get_db_stats():
    """get_db_stats returns per-entity-type counts."""
    print_info("Testing get_db_stats...")
    result = call_sync("get_db_stats")
    assert result.get("success"), f"Expected success, got: {result}"
    data = result["data"]

    assert "counts" in data, "Missing counts"
    assert "entity_types" in data, "Missing entity_types"
    assert data["entity_types"] > 0, "Should have at least 1 entity type"

    # Print top 5 entity types by count
    sorted_counts = sorted(data["counts"].items(), key=lambda x: x[1], reverse=True)
    for name, count in sorted_counts[:5]:
        print_info(f"  {name}: {count}")

    print_ok("get_db_stats: PASSED")


def test_get_canister_stats():
    """get_canister_stats returns cycles, memory, IDs."""
    print_info("Testing get_canister_stats...")
    result = call_sync("get_canister_stats")
    assert result.get("success"), f"Expected success, got: {result}"
    data = result["data"]

    assert "canister_id" in data, "Missing canister_id"
    assert len(data["canister_id"]) > 10, "Invalid canister ID"
    assert data["cycles"] > 0, "Cycles should be positive"
    assert data["stable_memory_pages"] >= 0, "Invalid stable memory"

    print_ok(f"  Canister: {data['canister_id']}")
    print_ok(f"  Cycles: {data['cycles_tc']} TC")
    print_ok(f"  Stable: {data['stable_memory_mb']} MB")
    print_ok("get_canister_stats: PASSED")


def test_get_token_balances():
    """get_token_balances returns cached balances (may be empty)."""
    print_info("Testing get_token_balances...")
    result = call_sync("get_token_balances")
    assert result.get("success"), f"Expected success, got: {result}"
    data = result["data"]

    assert "tokens" in data, "Missing tokens"
    assert "count" in data, "Missing count"

    if data["count"] > 0:
        for t in data["tokens"]:
            print_info(f"  {t['name']}: {t['balance_raw']}")
    else:
        print_info("  No tokens registered (vault extension may not be installed)")

    print_ok("get_token_balances: PASSED")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    print_info("=" * 60)
    print_info("System Info Extension Tests")
    print_info("=" * 60)

    core_tests = [
        test_get_system_info,
        test_get_db_stats,
        test_get_canister_stats,
        test_get_token_balances,
    ]

    passed = 0
    failed = 0

    print_info("-" * 60)
    print_info("Core Tests")
    print_info("-" * 60)

    for test in core_tests:
        try:
            test()
            passed += 1
        except Exception as e:
            print_error(f"{test.__name__}: FAILED - {e}")
            traceback.print_exc()
            failed += 1

    print_info("=" * 60)
    print_info(f"Results: {passed} passed, {failed} failed")
    print_info("=" * 60)

    sys.exit(1 if failed > 0 else 0)
