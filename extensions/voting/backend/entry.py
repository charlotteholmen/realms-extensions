"""
Voting Extension Backend Entry Point
Governance voting system using GGG entities

Flow:
  submit_proposal → start_voting → cast_vote (auto-approve on threshold)
  → auto-execute: download codex, verify checksum, exec() the code
"""

import hashlib
import json
import traceback
from typing import Any, Dict

from ggg import Proposal, User, Vote, Codex
from basilisk import Async, ic
from basilisk.canisters.management import management_canister
from ic_python_logging import get_logger

logger = get_logger("extensions.voting")


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _parse_args(args):
    """Parse JSON string args to dict."""
    if isinstance(args, str) and args.strip():
        return json.loads(args)
    if isinstance(args, dict):
        return args
    return {}


def _proposal_to_dict(proposal: Proposal) -> Dict[str, Any]:
    """Convert Proposal entity to dictionary."""
    timestamps = proposal.serialize() if hasattr(proposal, 'serialize') else {}
    # Return epoch seconds as numbers — frontend handles formatting
    raw_created = timestamps.get("timestamp_created", "")
    created_at = None
    if raw_created and str(raw_created) not in ("None", ""):
        try:
            created_at = float(raw_created)
        except (ValueError, TypeError):
            created_at = None
    deadline_str = proposal.voting_deadline or ""
    voting_deadline = None
    if deadline_str and str(deadline_str) not in ("None", ""):
        try:
            voting_deadline = float(deadline_str)
        except (ValueError, TypeError):
            voting_deadline = None
    return {
        "id": proposal.proposal_id,
        "title": proposal.title,
        "description": proposal.description,
        "code_url": proposal.code_url,
        "code_checksum": proposal.code_checksum,
        "proposer": proposal.proposer.id if proposal.proposer else "unknown",
        "status": proposal.status,
        "created_at": created_at,
        "voting_deadline": voting_deadline,
        "votes": {
            "yes": int(proposal.votes_yes or 0),
            "no": int(proposal.votes_no or 0),
            "abstain": int(proposal.votes_abstain or 0),
        },
        "total_voters": int(proposal.total_voters or 0),
        "required_threshold": proposal.required_threshold,
        "metadata": proposal.metadata or "{}",
    }


def _find_proposal(proposal_id: str):
    """Find a Proposal by proposal_id alias."""
    return Proposal[proposal_id]


def _find_user(user_id: str):
    """Find a User by id alias."""
    return User[user_id]


def _check_threshold(proposal: Proposal) -> bool:
    """Check if yes votes meet the required threshold.

    Threshold is computed over decisive votes (yes + no), ignoring abstains.
    Returns True if the proposal should be auto-approved.
    """
    yes = int(proposal.votes_yes or 0)
    no = int(proposal.votes_no or 0)
    decisive = yes + no
    if decisive == 0:
        return False
    threshold = proposal.required_threshold or 0.6
    return (yes / decisive) >= threshold


def _http_download(url: str, max_bytes: int = 2_000_000, cycles: int = 30_000_000_000):
    """Generator: download a URL via IC HTTP outcall. Yields a _ServiceCall.

    Returns the response body as a string on success, raises on failure.
    """
    resp = yield management_canister.http_request({
        "url": url,
        "max_response_bytes": max_bytes,
        "method": {"get": None},
        "headers": [
            {"name": "User-Agent", "value": "Basilisk/1.0"},
            {"name": "Accept-Encoding", "value": "identity"},
        ],
        "body": None,
        "transform": {
            "function": (ic.id(), "http_transform"),
            "context": bytes(),
        },
    }).with_cycles(cycles)

    if "Ok" in resp:
        body = resp["Ok"]["body"]
        if isinstance(body, bytes):
            return body.decode("utf-8")
        return body
    else:
        raise RuntimeError(f"HTTP download failed: {resp}")


def _schedule_execution(proposal_id: str):
    """Schedule async proposal execution via a one-shot timer."""
    def _exec_callback():
        return _do_execute_proposal(proposal_id)
    ic.set_timer(0, _exec_callback)
    logger.info(f"Scheduled execution for proposal {proposal_id}")


def _do_execute_proposal(proposal_id: str):
    """Internal generator: download codex, verify checksum, exec() the code.

    This is called from a timer callback so it runs as an async generator
    driven by Rust's drive_generator.
    """
    proposal = _find_proposal(proposal_id)
    if not proposal:
        logger.error(f"Execute: proposal {proposal_id} not found")
        return

    if proposal.status not in ("accepted",):
        logger.error(f"Execute: proposal {proposal_id} status is {proposal.status}, expected accepted")
        return

    code_url = proposal.code_url
    if not code_url:
        proposal.status = "failed"
        proposal.metadata = json.dumps({**_load_metadata(proposal),
                                         "error": "No code URL"})
        logger.error(f"Execute: proposal {proposal_id} has no code URL")
        return

    proposal.status = "executing"
    logger.info(f"Executing proposal {proposal_id}: downloading {code_url}")

    try:
        code_content = yield from _http_download(code_url)
    except Exception as e:
        proposal.status = "failed"
        proposal.metadata = json.dumps({**_load_metadata(proposal),
                                         "error": f"Download failed: {e}"})
        logger.error(f"Execute: download failed for {proposal_id}: {e}")
        return

    # Verify checksum if provided
    expected_checksum = proposal.code_checksum
    if expected_checksum:
        actual_hash = hashlib.sha256(code_content.encode("utf-8")).hexdigest()
        actual_checksum = f"sha256:{actual_hash}"
        if expected_checksum != actual_checksum:
            proposal.status = "failed"
            proposal.metadata = json.dumps({
                **_load_metadata(proposal),
                "error": f"Checksum mismatch: expected {expected_checksum}, got {actual_checksum}"
            })
            logger.error(f"Execute: checksum mismatch for {proposal_id}")
            return
        logger.info(f"Checksum verified for {proposal_id}: {actual_checksum}")
    else:
        logger.warning(f"No checksum provided for {proposal_id}, skipping verification")

    # Create or update the Codex entity
    metadata = _load_metadata(proposal)
    codex_name = metadata.get("codex_name", f"proposal_{proposal_id}_codex")

    existing_codex = Codex[codex_name]
    if existing_codex:
        existing_codex.code = code_content
        existing_codex.description = f"Updated by proposal {proposal_id}: {proposal.title}"
        action = "updated"
    else:
        existing_codex = Codex(
            name=codex_name,
            description=f"Created by proposal {proposal_id}: {proposal.title}",
            code=code_content,
        )
        action = "created"

    logger.info(f"Codex '{codex_name}' {action} for proposal {proposal_id}")

    # Refresh entity method overrides that may reference this codex
    try:
        from main import reload_entity_method_overrides
        reload_entity_method_overrides()
        logger.info(f"Entity method overrides refreshed after codex '{codex_name}' update")
    except Exception as e:
        logger.warning(f"Could not refresh entity method overrides: {e}")

    # Execute the codex code
    # Build a rich exec environment with GGG entities available
    try:
        from ggg import Transfer, Treasury, User, Budget, Fund, LedgerEntry, Realm
        extra_globals = {
            "Transfer": Transfer, "Treasury": Treasury, "User": User,
            "Budget": Budget, "Fund": Fund, "LedgerEntry": LedgerEntry,
            "Realm": Realm, "Proposal": Proposal, "Vote": Vote,
        }
    except ImportError:
        extra_globals = {}
    exec_globals = {"ic": ic, "logger": logger, "Codex": Codex, "json": json, **extra_globals}

    try:
        exec(code_content, exec_globals)

        # If the code defines a main() generator, drive it for async operations
        main_fn = exec_globals.get("main")
        if main_fn and callable(main_fn):
            result = main_fn()
            # Check if it's a generator (async code using yield)
            if hasattr(result, '__next__'):
                logger.info(f"Driving async main() for proposal {proposal_id}")
                yield from result
            else:
                logger.info(f"main() returned (sync) for proposal {proposal_id}")

        logger.info(f"Codex code executed successfully for proposal {proposal_id}")
    except Exception as e:
        proposal.status = "failed"
        proposal.metadata = json.dumps({
            **metadata,
            "error": f"Code execution failed: {e}",
            "codex_name": codex_name,
            "codex_action": action,
        })
        logger.error(f"Execute: code exec failed for {proposal_id}: {e}\n{traceback.format_exc()}")
        return

    proposal.status = "executed"
    proposal.metadata = json.dumps({
        **metadata,
        "codex_name": codex_name,
        "codex_action": action,
    })
    logger.info(f"Proposal {proposal_id} fully executed: codex '{codex_name}' {action} and code ran")


def _load_metadata(proposal: Proposal) -> dict:
    """Safely load proposal.metadata as a dict."""
    try:
        return json.loads(proposal.metadata) if proposal.metadata else {}
    except Exception:
        return {}


# ---------------------------------------------------------------------------
# Extension API functions
# ---------------------------------------------------------------------------

def get_proposals(args: str) -> str:
    """Get all proposals with optional status filtering."""
    try:
        args_dict = _parse_args(args)
        status_filter = args_dict.get("status")

        all_proposals = Proposal.instances()
        if status_filter:
            all_proposals = [p for p in all_proposals if p.status == status_filter]

        return json.dumps({
            "success": True,
            "data": {
                "proposals": [_proposal_to_dict(p) for p in all_proposals],
                "total": len(all_proposals),
            }
        })
    except Exception as e:
        logger.error(f"get_proposals error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_proposal(args: str) -> str:
    """Get a specific proposal by ID."""
    try:
        args_dict = _parse_args(args)
        proposal_id = args_dict.get("proposal_id")
        if not proposal_id:
            return json.dumps({"success": False, "error": "proposal_id is required"})

        proposal = _find_proposal(proposal_id)
        if not proposal:
            return json.dumps({"success": False, "error": "Proposal not found"})

        return json.dumps({"success": True, "data": _proposal_to_dict(proposal)})
    except Exception as e:
        logger.error(f"get_proposal error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def submit_proposal(args: str) -> str:
    """Submit a new proposal.

    Required: title, description, code_url
    Optional: code_checksum (sha256:<hex>), codex_name, required_threshold
    """
    try:
        args_dict = _parse_args(args)

        for field in ("title", "description", "code_url"):
            if field not in args_dict:
                return json.dumps({"success": False, "error": f"{field} is required"})

        # Security: always use ic.caller() as the proposer identity
        proposer_id = ic.caller().to_str()
        proposer = _find_user(proposer_id)
        if not proposer:
            return json.dumps({"success": False, "error": f"User {proposer_id} not found"})

        # Generate proposal ID
        existing = Proposal.instances()
        proposal_num = len(existing) + 1
        proposal_id = f"prop_{proposal_num:03d}"

        # Store codex_name in metadata if provided
        metadata = {}
        if args_dict.get("codex_name"):
            metadata["codex_name"] = args_dict["codex_name"]

        proposal = Proposal(
            proposal_id=proposal_id,
            title=args_dict["title"],
            description=args_dict["description"],
            code_url=args_dict["code_url"],
            code_checksum=args_dict.get("code_checksum", ""),
            proposer=proposer,
            status="pending_review",
            voting_deadline="",
            votes_yes=0.0,
            votes_no=0.0,
            votes_abstain=0.0,
            total_voters=0.0,
            required_threshold=args_dict.get("required_threshold", 0.6),
            metadata=json.dumps(metadata),
        )

        logger.info(f"Proposal {proposal_id} submitted by {proposer_id}")
        return json.dumps({"success": True, "data": _proposal_to_dict(proposal)})
    except Exception as e:
        logger.error(f"submit_proposal error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def start_voting(args: str) -> str:
    """Open a proposal for voting.

    Sets status to 'voting' and computes voting_deadline from Calendar.voting_window.
    """
    try:
        args_dict = _parse_args(args)
        proposal_id = args_dict.get("proposal_id")
        if not proposal_id:
            return json.dumps({"success": False, "error": "proposal_id is required"})

        proposal = _find_proposal(proposal_id)
        if not proposal:
            return json.dumps({"success": False, "error": "Proposal not found"})

        if proposal.status != "pending_review":
            return json.dumps({
                "success": False,
                "error": f"Can only start voting on pending_review proposals. Current: {proposal.status}"
            })

        # Get voting window from Calendar (default 7 days = 604800s)
        voting_window = 604_800
        try:
            from ggg import Realm
            realm = Realm[1]
            if realm and realm.calendar:
                cal_window = realm.calendar.voting_window
                if cal_window:
                    voting_window = int(cal_window)
        except Exception as e:
            logger.warning(f"Could not load Calendar voting_window, using default: {e}")

        now_ns = ic.time()
        now_s = now_ns // 1_000_000_000
        deadline_s = now_s + voting_window

        proposal.status = "voting"
        proposal.voting_deadline = str(deadline_s)

        logger.info(f"Voting started for {proposal_id}, deadline in {voting_window}s (epoch {deadline_s})")
        return json.dumps({"success": True, "data": _proposal_to_dict(proposal)})
    except Exception as e:
        logger.error(f"start_voting error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def cast_vote(args: str) -> str:
    """Cast a vote on a proposal. Auto-approves and schedules execution if threshold met."""
    try:
        args_dict = _parse_args(args)

        proposal_id = args_dict.get("proposal_id")
        vote_choice = args_dict.get("vote")
        # Security: always use ic.caller() as the voter identity
        voter_id = ic.caller().to_str()

        if not all([proposal_id, vote_choice]):
            return json.dumps({"success": False, "error": "proposal_id and vote are required"})

        if vote_choice not in ("yes", "no", "abstain"):
            return json.dumps({"success": False, "error": "vote must be 'yes', 'no', or 'abstain'"})

        proposal = _find_proposal(proposal_id)
        if not proposal:
            return json.dumps({"success": False, "error": "Proposal not found"})

        if proposal.status not in ("voting", "pending_vote"):
            return json.dumps({
                "success": False,
                "error": f"Proposal is not open for voting. Status: {proposal.status}"
            })

        voter = _find_user(voter_id)
        if not voter:
            return json.dumps({"success": False, "error": f"User {voter_id} not found"})

        # Check for existing vote by this user on this proposal
        existing_vote = None
        for v in Vote.instances():
            if (v.proposal and v.voter
                    and v.proposal.proposal_id == proposal.proposal_id
                    and v.voter.id == voter.id):
                existing_vote = v
                break

        if existing_vote:
            # Undo previous vote count
            old_choice = existing_vote.vote_choice
            if old_choice == "yes":
                proposal.votes_yes = (proposal.votes_yes or 0.0) - 1.0
            elif old_choice == "no":
                proposal.votes_no = (proposal.votes_no or 0.0) - 1.0
            elif old_choice == "abstain":
                proposal.votes_abstain = (proposal.votes_abstain or 0.0) - 1.0
            existing_vote.vote_choice = vote_choice
        else:
            Vote(proposal=proposal, voter=voter, vote_choice=vote_choice, metadata="{}")
            proposal.total_voters = (proposal.total_voters or 0.0) + 1.0

        # Update counts for the new vote
        if vote_choice == "yes":
            proposal.votes_yes = (proposal.votes_yes or 0.0) + 1.0
        elif vote_choice == "no":
            proposal.votes_no = (proposal.votes_no or 0.0) + 1.0
        elif vote_choice == "abstain":
            proposal.votes_abstain = (proposal.votes_abstain or 0.0) + 1.0

        # Check threshold for auto-approval
        auto_approved = False
        if _check_threshold(proposal):
            proposal.status = "accepted"
            auto_approved = True
            logger.info(f"Proposal {proposal_id} auto-approved (threshold met)")
            _schedule_execution(proposal_id)

        return json.dumps({
            "success": True,
            "data": {
                "message": "Vote cast successfully",
                "auto_approved": auto_approved,
                "proposal": _proposal_to_dict(proposal),
            }
        })
    except Exception as e:
        logger.error(f"cast_vote error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def approve_proposal(args: str) -> str:
    """Manually approve a proposal and schedule execution."""
    try:
        args_dict = _parse_args(args)
        proposal_id = args_dict.get("proposal_id")
        if not proposal_id:
            return json.dumps({"success": False, "error": "proposal_id is required"})

        proposal = _find_proposal(proposal_id)
        if not proposal:
            return json.dumps({"success": False, "error": "Proposal not found"})

        if proposal.status in ("accepted", "executing", "executed"):
            return json.dumps({"success": False, "error": f"Proposal already {proposal.status}"})

        proposal.status = "accepted"
        logger.info(f"Proposal {proposal_id} manually approved")

        _schedule_execution(proposal_id)

        return json.dumps({
            "success": True,
            "data": {
                "message": "Proposal approved, execution scheduled",
                "proposal": _proposal_to_dict(proposal),
            }
        })
    except Exception as e:
        logger.error(f"approve_proposal error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def execute_proposal(args: str) -> Async[str]:
    """Manually trigger proposal execution (download, verify checksum, exec).

    Normally called automatically after approval, but available for manual use.
    """
    try:
        args_dict = _parse_args(args)
        proposal_id = args_dict.get("proposal_id")
        if not proposal_id:
            return json.dumps({"success": False, "error": "proposal_id is required"})

        proposal = _find_proposal(proposal_id)
        if not proposal:
            return json.dumps({"success": False, "error": "Proposal not found"})

        if proposal.status not in ("accepted",):
            return json.dumps({
                "success": False,
                "error": f"Proposal must be accepted before execution. Current: {proposal.status}"
            })

        yield from _do_execute_proposal(proposal_id)

        # Re-load to get updated status
        proposal = _find_proposal(proposal_id)
        return json.dumps({
            "success": proposal.status == "executed",
            "data": _proposal_to_dict(proposal),
        })
    except Exception as e:
        logger.error(f"execute_proposal error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def fetch_proposal_code(args: str) -> Async[str]:
    """Fetch and preview the code from a proposal's code_url (read-only).

    Accepts either proposal_id (looks up the URL from the proposal) or
    code_url directly (useful for checksum calculation before submission).
    """
    try:
        args_dict = _parse_args(args)
        proposal_id = args_dict.get("proposal_id")
        code_url = args_dict.get("code_url")
        stored_checksum = None

        if proposal_id:
            proposal = _find_proposal(proposal_id)
            if not proposal:
                return json.dumps({"success": False, "error": "Proposal not found"})
            if not proposal.code_url:
                return json.dumps({"success": False, "error": "Proposal has no code URL"})
            code_url = proposal.code_url
            stored_checksum = proposal.code_checksum
        elif not code_url:
            return json.dumps({"success": False, "error": "proposal_id or code_url is required"})

        logger.info(f"Fetching code preview from: {code_url}")
        code_content = yield from _http_download(code_url)

        actual_hash = hashlib.sha256(code_content.encode("utf-8")).hexdigest()
        actual_checksum = f"sha256:{actual_hash}"

        checksum_match = None
        if stored_checksum:
            checksum_match = (stored_checksum == actual_checksum)

        return json.dumps({
            "success": True,
            "data": {
                "code": code_content,
                "code_url": code_url,
                "checksum": actual_checksum,
                "checksum_match": checksum_match,
            }
        })
    except Exception as e:
        logger.error(f"fetch_proposal_code error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_user_vote(args: str) -> str:
    """Get the current user's vote on a proposal."""
    try:
        args_dict = _parse_args(args)
        proposal_id = args_dict.get("proposal_id")
        # Security: always use ic.caller() as the voter identity
        voter_id = ic.caller().to_str()

        if not proposal_id:
            return json.dumps({"success": False, "error": "proposal_id is required"})

        proposal = _find_proposal(proposal_id)
        if not proposal:
            return json.dumps({"success": False, "error": "Proposal not found"})

        # Find user's vote on this proposal
        user_vote = None
        for v in Vote.instances():
            if (v.proposal and v.voter
                    and v.proposal.proposal_id == proposal.proposal_id
                    and v.voter.id == voter_id):
                user_vote = v
                break

        if user_vote:
            return json.dumps({
                "success": True,
                "data": {"has_voted": True, "vote_choice": user_vote.vote_choice}
            })
        else:
            return json.dumps({
                "success": True,
                "data": {"has_voted": False, "vote_choice": None}
            })
    except Exception as e:
        logger.error(f"get_user_vote error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def demo_approve_and_execute(args: str) -> Async[str]:
    """Demo-only: Force-approve and execute a proposal regardless of current status.

    Resets the proposal to 'accepted', then runs the full execution pipeline
    (download codex, verify checksum, exec).  Available only for demonstration
    purposes so that testers can re-run execution on any proposal.
    """
    try:
        args_dict = _parse_args(args)
        proposal_id = args_dict.get("proposal_id")
        if not proposal_id:
            return json.dumps({"success": False, "error": "proposal_id is required"})

        proposal = _find_proposal(proposal_id)
        if not proposal:
            return json.dumps({"success": False, "error": "Proposal not found"})

        old_status = proposal.status
        proposal.status = "accepted"
        logger.info(f"[DEMO] Proposal {proposal_id} force-approved (was {old_status})")

        yield from _do_execute_proposal(proposal_id)

        proposal = _find_proposal(proposal_id)
        return json.dumps({
            "success": proposal.status == "executed",
            "data": {
                "message": f"Demo: proposal force-approved and executed (was {old_status})",
                "proposal": _proposal_to_dict(proposal),
            }
        })
    except Exception as e:
        logger.error(f"demo_approve_and_execute error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


# ---------------------------------------------------------------------------
# Extension API registry
# ---------------------------------------------------------------------------

EXTENSION_FUNCTIONS = {
    "get_proposals": get_proposals,
    "get_proposal": get_proposal,
    "submit_proposal": submit_proposal,
    "start_voting": start_voting,
    "cast_vote": cast_vote,
    "approve_proposal": approve_proposal,
    "execute_proposal": execute_proposal,
    "fetch_proposal_code": fetch_proposal_code,
    "get_user_vote": get_user_vote,
    "demo_approve_and_execute": demo_approve_and_execute,
}
