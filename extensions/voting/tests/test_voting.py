"""
Voting Extension End-to-End Tests

Tests the full citizen voting flow against a deployed test realm:
1. Join realm as a citizen
2. Submit a proposal (verify proposer == ic.caller())
3. Start voting on the proposal
4. Cast a vote (verify voter == ic.caller())
5. Auto-approval when threshold met
6. Auto-execution: download codex, verify checksum, exec() code
7. Query proposals and votes
8. Security: verify identity spoofing is prevented

Prerequisites:
    - A deployed realm with the voting extension installed
    - dfx configured with the correct network
    - At least one test identity available
"""

import json
import os
import subprocess
import sys
import time
import traceback
import uuid

sys.path.append("/app/extension-root/_shared/testing/utils")

from test_utils import (
    call_realm_extension,
    create_test_identities,
    get_canister_id,
    get_current_principal,
    print_error,
    print_info,
    print_ok,
    print_warning,
    run_command,
    run_command_json,
    validate_json_response,
    wait_for_canister_ready,
)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def call_voting(function_name: str, args: dict) -> dict:
    """Call a voting extension function and return parsed response."""
    result = call_realm_extension("voting", function_name, json.dumps(args))
    if result is None:
        return {"success": False, "error": "Extension call returned None"}
    return result


def call_voting_async(function_name: str, args: dict) -> dict:
    """Call a voting extension async function and return parsed response."""
    result = call_realm_extension("voting", function_name, json.dumps(args), async_call=True)
    if result is None:
        return {"success": False, "error": "Extension async call returned None"}
    return result


def call_backend(method: str, candid_args: str = "()") -> str:
    """Call a realm_backend method directly via dfx and return raw output."""
    output = run_command(
        f'dfx canister call realm_backend {method} \'{candid_args}\' --output json'
    )
    return output


def join_realm_as(identity: str, profile: str = "member") -> bool:
    """Join realm using the given dfx identity."""
    run_command(f"dfx identity use {identity}")
    output = run_command(
        f'dfx canister call realm_backend join_realm \'("{profile}", "")\' --output json'
    )
    if output and "success" in output:
        return True
    return False


# ---------------------------------------------------------------------------
# Tests
# ---------------------------------------------------------------------------

def test_get_proposals_empty():
    """get_proposals should succeed even when no proposals exist."""
    print_info("Test: get_proposals (may be empty)...")
    result = call_voting("get_proposals", {})
    if not result or not result.get("success"):
        print_error(f"get_proposals failed: {result}")
        return False
    proposals = result.get("data", {}).get("proposals", [])
    print_ok(f"get_proposals returned {len(proposals)} proposals")
    return True


def test_submit_proposal():
    """Submit a proposal and verify it was created with correct proposer."""
    print_info("Test: submit_proposal...")

    principal = get_current_principal()
    if not principal:
        print_error("Cannot get current principal")
        return False

    title = f"Test Proposal {uuid.uuid4().hex[:8]}"
    result = call_voting("submit_proposal", {
        "title": title,
        "description": "Automated test proposal for voting extension E2E",
        "code_url": "https://example.com/test_codex.py",
    })

    if not result or not result.get("success"):
        print_error(f"submit_proposal failed: {result}")
        return False

    data = result.get("data", {})
    proposal_id = data.get("id")
    proposer = data.get("proposer")

    if not proposal_id:
        print_error(f"No proposal_id in response: {data}")
        return False

    if proposer != principal:
        print_error(
            f"SECURITY: proposer mismatch! Expected {principal}, got {proposer}"
        )
        return False

    if data.get("status") != "pending_review":
        print_error(f"Expected status 'pending_review', got '{data.get('status')}'")
        return False

    print_ok(f"Proposal {proposal_id} created by {proposer} (status=pending_review)")
    global _test_proposal_id
    _test_proposal_id = proposal_id
    return True


def test_get_proposal():
    """Get the proposal we just created."""
    print_info("Test: get_proposal...")
    result = call_voting("get_proposal", {"proposal_id": _test_proposal_id})
    if not result or not result.get("success"):
        print_error(f"get_proposal failed: {result}")
        return False

    data = result.get("data", {})
    print_ok(f"Got proposal: {data.get('title', 'N/A')} (status={data.get('status')})")
    return True


def test_cast_vote_before_voting_rejected():
    """Casting a vote before start_voting should fail."""
    print_info("Test: cast_vote before start_voting (should fail)...")
    result = call_voting("cast_vote", {
        "proposal_id": _test_proposal_id,
        "vote": "yes",
    })
    if result and result.get("success"):
        print_error("Expected failure: voting not yet open")
        return False
    print_ok("Vote correctly rejected: proposal not in voting status")
    return True


def test_start_voting():
    """Open proposal for voting."""
    print_info("Test: start_voting...")
    result = call_voting("start_voting", {"proposal_id": _test_proposal_id})
    if not result or not result.get("success"):
        print_error(f"start_voting failed: {result}")
        return False

    data = result.get("data", {})
    if data.get("status") != "voting":
        print_error(f"Expected status 'voting', got '{data.get('status')}'")
        return False

    if not data.get("voting_deadline"):
        print_error("Expected voting_deadline to be set")
        return False

    print_ok(f"Voting started, deadline={data.get('voting_deadline')}")
    return True


def test_start_voting_twice_rejected():
    """Starting voting again on an already-voting proposal should fail."""
    print_info("Test: start_voting twice (should fail)...")
    result = call_voting("start_voting", {"proposal_id": _test_proposal_id})
    if result and result.get("success"):
        print_error("Expected failure: proposal already in voting")
        return False
    print_ok("Double start_voting correctly rejected")
    return True


def test_cast_vote_yes():
    """Cast a 'yes' vote on the test proposal."""
    print_info("Test: cast_vote (yes)...")
    result = call_voting("cast_vote", {
        "proposal_id": _test_proposal_id,
        "vote": "yes",
    })
    if not result or not result.get("success"):
        print_error(f"cast_vote failed: {result}")
        return False

    data = result.get("data", {})
    print_ok(f"Vote cast successfully (auto_approved={data.get('auto_approved', 'N/A')})")
    return True


def test_get_user_vote():
    """Verify the user's vote was recorded correctly."""
    print_info("Test: get_user_vote...")
    result = call_voting("get_user_vote", {
        "proposal_id": _test_proposal_id,
    })
    if not result or not result.get("success"):
        print_error(f"get_user_vote failed: {result}")
        return False

    data = result.get("data", {})
    if not data.get("has_voted"):
        print_error("Expected has_voted=True")
        return False
    if data.get("vote_choice") != "yes":
        print_error(f"Expected vote_choice='yes', got '{data.get('vote_choice')}'")
        return False

    print_ok("User vote verified: yes")
    return True


def test_cast_vote_change():
    """Change vote from 'yes' to 'no' and verify."""
    print_info("Test: cast_vote (change to no)...")
    result = call_voting("cast_vote", {
        "proposal_id": _test_proposal_id,
        "vote": "no",
    })
    if not result or not result.get("success"):
        print_error(f"cast_vote change failed: {result}")
        return False

    check = call_voting("get_user_vote", {"proposal_id": _test_proposal_id})
    if not check or not check.get("success"):
        print_error(f"get_user_vote after change failed: {check}")
        return False

    if check.get("data", {}).get("vote_choice") != "no":
        print_error("Vote was not changed to 'no'")
        return False

    print_ok("Vote changed from yes to no successfully")
    return True


def test_cast_vote_invalid():
    """Casting a vote with invalid choice should fail."""
    print_info("Test: cast_vote (invalid choice)...")
    result = call_voting("cast_vote", {
        "proposal_id": _test_proposal_id,
        "vote": "maybe",
    })
    if result and result.get("success"):
        print_error("Expected failure for invalid vote choice 'maybe'")
        return False
    print_ok("Invalid vote choice correctly rejected")
    return True


def test_cast_vote_missing_proposal():
    """Casting a vote on nonexistent proposal should fail."""
    print_info("Test: cast_vote (nonexistent proposal)...")
    result = call_voting("cast_vote", {
        "proposal_id": "nonexistent_proposal_xyz",
        "vote": "yes",
    })
    if result and result.get("success"):
        print_error("Expected failure for nonexistent proposal")
        return False
    print_ok("Nonexistent proposal correctly rejected")
    return True


def test_submit_proposal_missing_fields():
    """Submitting proposal without required fields should fail."""
    print_info("Test: submit_proposal (missing fields)...")

    result = call_voting("submit_proposal", {
        "title": "Incomplete proposal",
        "code_url": "https://example.com/test.py",
    })
    if result and result.get("success"):
        print_error("Expected failure for missing 'description' field")
        return False
    print_ok("Missing fields correctly rejected")
    return True


def test_get_proposals_after_submit():
    """Verify proposals list includes our test proposal."""
    print_info("Test: get_proposals (after submit)...")
    result = call_voting("get_proposals", {})
    if not result or not result.get("success"):
        print_error(f"get_proposals failed: {result}")
        return False

    proposals = result.get("data", {}).get("proposals", [])
    found = any(p.get("id") == _test_proposal_id for p in proposals)
    if not found:
        print_error(f"Test proposal {_test_proposal_id} not found in proposals list")
        return False

    print_ok(f"Found test proposal in list of {len(proposals)} proposals")
    return True


def test_proposal_vote_counts():
    """Verify proposal vote counts are correct after voting."""
    print_info("Test: proposal vote counts...")
    result = call_voting("get_proposal", {"proposal_id": _test_proposal_id})
    if not result or not result.get("success"):
        print_error(f"get_proposal failed: {result}")
        return False

    data = result.get("data", {})
    votes = data.get("votes", {})

    # After test_cast_vote_change, we should have 1 'no' vote
    if votes.get("no", 0) < 1:
        print_error(f"Expected at least 1 'no' vote, got: {votes}")
        return False

    total = data.get("total_voters", 0)
    if total < 1:
        print_error(f"Expected at least 1 total voter, got: {total}")
        return False

    print_ok(f"Vote counts: yes={votes.get('yes', 0)}, no={votes.get('no', 0)}, "
             f"abstain={votes.get('abstain', 0)}, total_voters={total}")
    return True


def test_auto_approve_and_execute():
    """Full flow: submit → start_voting → cast yes → auto-approve → auto-execute.

    Uses a real code_url pointing to a simple codex that sets a variable.
    After auto-execution the proposal status should become 'executed'.
    """
    print_info("Test: FULL FLOW - auto-approve and auto-execute...")

    # Submit a new proposal with a real downloadable codex URL
    # Using a raw GitHub URL for a simple Python script
    code_url = (
        "https://raw.githubusercontent.com/"
        "smart-social-contracts/realms/main/"
        "codices/codices/agora/satoshi_transfer_codex.py"
    )
    title = f"Auto-Execute Test {uuid.uuid4().hex[:8]}"
    result = call_voting("submit_proposal", {
        "title": title,
        "description": "Test auto-approve and auto-execute flow",
        "code_url": code_url,
        "codex_name": "test_auto_exec_codex",
    })
    if not result or not result.get("success"):
        print_error(f"submit_proposal failed: {result}")
        return False

    pid = result.get("data", {}).get("id")
    print_info(f"  Submitted proposal {pid}")

    # Start voting
    result = call_voting("start_voting", {"proposal_id": pid})
    if not result or not result.get("success"):
        print_error(f"start_voting failed: {result}")
        return False
    print_info(f"  Voting started for {pid}")

    # Cast a 'yes' vote — with only 1 voter and threshold 0.6,
    # this should auto-approve and schedule execution
    result = call_voting("cast_vote", {"proposal_id": pid, "vote": "yes"})
    if not result or not result.get("success"):
        print_error(f"cast_vote failed: {result}")
        return False

    data = result.get("data", {})
    if not data.get("auto_approved"):
        print_error(f"Expected auto_approved=True, got: {data}")
        return False
    print_info(f"  Auto-approved! Status: {data.get('proposal', {}).get('status')}")

    # Wait for the timer-triggered execution to complete
    # The timer fires at delay=0 but needs an IC round or two
    print_info("  Waiting for auto-execution (timer callback)...")
    for i in range(15):
        time.sleep(2)
        check = call_voting("get_proposal", {"proposal_id": pid})
        if check and check.get("success"):
            status = check.get("data", {}).get("status")
            print_info(f"  Poll {i+1}: status={status}")
            if status == "executed":
                print_ok(f"Proposal {pid} fully executed!")
                return True
            if status == "failed":
                meta = check.get("data", {}).get("metadata", "{}")
                print_error(f"Proposal {pid} FAILED: {meta}")
                return False

    print_error(f"Proposal {pid} did not reach 'executed' status after 30s")
    return False


def test_manual_approve_and_execute():
    """Manual flow: submit → approve_proposal → execute_proposal (async call)."""
    print_info("Test: MANUAL approve + execute...")

    code_url = (
        "https://raw.githubusercontent.com/"
        "smart-social-contracts/realms/main/"
        "codices/codices/agora/satoshi_transfer_codex.py"
    )
    title = f"Manual Execute Test {uuid.uuid4().hex[:8]}"
    result = call_voting("submit_proposal", {
        "title": title,
        "description": "Test manual approve and execute",
        "code_url": code_url,
        "codex_name": "test_manual_exec_codex",
    })
    if not result or not result.get("success"):
        print_error(f"submit_proposal failed: {result}")
        return False

    pid = result.get("data", {}).get("id")
    print_info(f"  Submitted proposal {pid}")

    # Manual approve (skips voting)
    result = call_voting("approve_proposal", {"proposal_id": pid})
    if not result or not result.get("success"):
        print_error(f"approve_proposal failed: {result}")
        return False
    print_info(f"  Approved {pid}, execution scheduled via timer")

    # Wait for timer-triggered execution
    print_info("  Waiting for execution...")
    for i in range(15):
        time.sleep(2)
        check = call_voting("get_proposal", {"proposal_id": pid})
        if check and check.get("success"):
            status = check.get("data", {}).get("status")
            print_info(f"  Poll {i+1}: status={status}")
            if status == "executed":
                print_ok(f"Proposal {pid} manually approved and executed!")
                return True
            if status == "failed":
                meta = check.get("data", {}).get("metadata", "{}")
                print_error(f"Proposal {pid} FAILED: {meta}")
                return False

    print_error(f"Proposal {pid} did not reach 'executed' status after 30s")
    return False


def test_security_voter_identity():
    """
    Security test: verify that the voter field from args is ignored
    and ic.caller() is used instead.
    """
    print_info("Test: SECURITY - voter identity cannot be spoofed...")

    principal = get_current_principal()
    if not principal:
        print_error("Cannot get current principal")
        return False

    result = call_voting("cast_vote", {
        "proposal_id": _test_proposal_id,
        "vote": "abstain",
        "voter": "fake_voter_id_should_be_ignored",
    })

    if not result or not result.get("success"):
        print_error(f"cast_vote with spoofed voter failed unexpectedly: {result}")
        return False

    check = call_voting("get_user_vote", {"proposal_id": _test_proposal_id})
    if not check or not check.get("success"):
        print_error(f"get_user_vote failed: {check}")
        return False

    data = check.get("data", {})
    if not data.get("has_voted"):
        print_error("Vote not found for actual caller after spoofed cast_vote")
        return False

    if data.get("vote_choice") != "abstain":
        print_error(f"Expected 'abstain', got '{data.get('vote_choice')}'")
        return False

    print_ok(f"Voter identity verified: vote recorded under {principal}, "
             "spoofed 'fake_voter_id' was correctly ignored")
    return True


def test_security_proposer_identity():
    """
    Security test: verify that the proposer field from args is ignored
    and ic.caller() is used instead.
    """
    print_info("Test: SECURITY - proposer identity cannot be spoofed...")

    principal = get_current_principal()
    if not principal:
        print_error("Cannot get current principal")
        return False

    title = f"Security Test Proposal {uuid.uuid4().hex[:8]}"
    result = call_voting("submit_proposal", {
        "title": title,
        "description": "Testing that proposer cannot be spoofed",
        "code_url": "https://example.com/security_test.py",
        "proposer": "fake_proposer_should_be_ignored",
    })

    if not result or not result.get("success"):
        print_error(f"submit_proposal failed: {result}")
        return False

    data = result.get("data", {})
    proposer = data.get("proposer")

    if proposer == "fake_proposer_should_be_ignored":
        print_error("SECURITY FAILURE: proposer was spoofed!")
        return False

    if proposer != principal:
        print_error(f"Proposer mismatch: expected {principal}, got {proposer}")
        return False

    print_ok(f"Proposer identity verified: {proposer} (spoofed value ignored)")
    return True


# ---------------------------------------------------------------------------
# Runner
# ---------------------------------------------------------------------------

_test_proposal_id = None


def async_task():
    """Entry point for realms run command."""
    print_info("=" * 60)
    print_info("Voting Extension E2E Tests")
    print_info("=" * 60)

    # Ensure we're joined to the realm
    principal = get_current_principal()
    if principal:
        print_info(f"Running as: {principal}")
        join_realm_as(run_command("dfx identity whoami") or "default")

    tests = [
        test_get_proposals_empty,
        test_submit_proposal,
        test_get_proposal,
        test_cast_vote_before_voting_rejected,
        test_start_voting,
        test_start_voting_twice_rejected,
        test_cast_vote_yes,
        test_get_user_vote,
        test_cast_vote_change,
        test_cast_vote_invalid,
        test_cast_vote_missing_proposal,
        test_submit_proposal_missing_fields,
        test_get_proposals_after_submit,
        test_proposal_vote_counts,
        test_security_voter_identity,
        test_security_proposer_identity,
        test_auto_approve_and_execute,
        test_manual_approve_and_execute,
    ]

    passed = 0
    failed = 0

    for test in tests:
        try:
            if test():
                passed += 1
            else:
                failed += 1
        except Exception as e:
            print_error(f"Exception in {test.__name__}: {e}")
            print_error(traceback.format_exc())
            failed += 1

    print_info("=" * 60)
    if failed == 0:
        print_ok(f"All {passed} tests passed!")
    else:
        print_error(f"{failed} test(s) failed, {passed} passed")
    print_info("=" * 60)

    return {"success": failed == 0, "passed": passed, "failed": failed}


if __name__ == "__main__":
    result = async_task()
    sys.exit(0 if result.get("success") else 1)
