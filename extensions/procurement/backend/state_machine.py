"""RFP lifecycle state machine with append-only transition logging."""

import json
from typing import Callable, Dict, Optional

from . import entities
from . import roles
from .constants import VALID_TRANSITIONS


def _status_timestamps(rfp: entities.Rfp, to_status: str, ts: int) -> None:
    if to_status == "open":
        rfp.opened_at = ts
    elif to_status == "closed":
        rfp.closed_at = ts
    elif to_status == "evaluation":
        rfp.revealed_at = ts
    elif to_status == "award":
        rfp.awarded_at = ts
    elif to_status == "contract_execution":
        rfp.executed_at = ts


def _check_preconditions(
    rfp: entities.Rfp,
    to_status: str,
    actor_id: str,
    user,
) -> Optional[str]:
    now = roles.now_epoch()
    from_status = rfp.status or "draft"

    if to_status == "open":
        if from_status != "draft":
            return "Can only publish from draft"
        if actor_id != rfp.requester_id and not roles.is_realm_admin(actor_id):
            return "Only the requester or an admin may publish"
        if rfp.opens_at and now < int(rfp.opens_at):
            return "Cannot publish before opens_at"
        if rfp.closes_at and now > int(rfp.closes_at):
            return "Cannot publish after closes_at"

    elif to_status == "closed":
        if from_status != "open":
            return "Can only close from open"
        if rfp.closes_at and now < int(rfp.closes_at):
            return "Bidding window has not ended"
        if actor_id != roles.SYSTEM_ACTOR and not roles.is_realm_admin(actor_id):
            return "Admin or scheduled task required to close RFP"

    elif to_status == "evaluation":
        if from_status != "closed":
            return "Can only enter evaluation from closed"

    elif to_status == "award":
        if from_status != "evaluation":
            return "Can only award from evaluation"
        if user and not roles.is_approver(user):
            return "Approver role required"
        if not (rfp.winning_bid_id or "").strip():
            return "winning_bid_id must be set before award transition"

    elif to_status == "contract_execution":
        if from_status != "award":
            return "Can only execute from award"
        if user and not roles.is_approver(user):
            return "Approver role required"

    return None


def transition_rfp(
    rfp_id: str,
    to_status: str,
    actor_id: str,
    note: str = "",
    metadata: Optional[dict] = None,
    user=None,
    on_enter: Optional[Callable[[entities.Rfp, str], None]] = None,
    skip_preconditions: bool = False,
) -> dict:
    """Single entry point for all RFP status changes."""
    if to_status not in entities.RFP_STATUSES:
        return {"success": False, "error": f"Unknown status '{to_status}'"}

    rfp = entities.find_rfp(rfp_id)
    if not rfp:
        return {"success": False, "error": f"RFP '{rfp_id}' not found"}

    from_status = rfp.status or "draft"
    allowed = VALID_TRANSITIONS.get(from_status, set())
    if to_status not in allowed:
        return {
            "success": False,
            "error": f"Invalid transition {from_status} → {to_status}",
        }

    if not skip_preconditions:
        err = _check_preconditions(rfp, to_status, actor_id, user)
        if err:
            return {"success": False, "error": err}

    ts = roles.now_epoch()
    transition_id = entities.next_transition_id(rfp_id)
    meta_json = json.dumps(metadata or {}, separators=(",", ":"))

    entities.RfpTransition(
        transition_id=transition_id,
        rfp_id=rfp_id,
        from_status=from_status,
        to_status=to_status,
        actor_id=actor_id,
        timestamp=ts,
        note=note or "",
        metadata_json=meta_json,
    )

    rfp.status = to_status
    _status_timestamps(rfp, to_status, ts)

    if on_enter:
        on_enter(rfp, actor_id)

    if to_status == "evaluation":
        from . import seals

        seals.reveal_bids(rfp_id)

    if to_status == "award" and rfp.winning_bid_id:
        from . import vendors

        vendors.update_on_award(str(rfp.winning_bid_id), rfp_id, ts)

    return {
        "success": True,
        "rfp_id": rfp_id,
        "transition_id": transition_id,
        "from_status": from_status,
        "to_status": to_status,
    }


def log_created(rfp_id: str, actor_id: str, note: str = "RFP created") -> dict:
    """Append-only audit entry when an RFP is first created (already in draft)."""
    ts = roles.now_epoch()
    transition_id = entities.next_transition_id(rfp_id)
    entities.RfpTransition(
        transition_id=transition_id,
        rfp_id=rfp_id,
        from_status="",
        to_status="draft",
        actor_id=actor_id,
        timestamp=ts,
        note=note,
        metadata_json="{}",
    )
    return {"success": True, "transition_id": transition_id}


def close_and_evaluate(
    rfp_id: str,
    actor_id: str = roles.SYSTEM_ACTOR,
    *,
    skip_preconditions: bool = False,
) -> dict:
    """Close an open RFP and move it into evaluation."""
    closed = transition_rfp(
        rfp_id,
        "closed",
        actor_id,
        note="Bidding window closed",
        skip_preconditions=skip_preconditions,
    )
    if not closed.get("success"):
        return closed
    return transition_rfp(
        rfp_id,
        "evaluation",
        actor_id,
        note="Bids revealed for evaluation",
        skip_preconditions=skip_preconditions,
    )


def demo_advance_rfp(rfp_id: str, actor_id: str, user=None) -> dict:
    """Advance one lifecycle stage, bypassing time/role gates (test mode only)."""
    try:
        from core.runtime_flags import is_test_mode
    except ImportError:
        is_test_mode = lambda: False  # type: ignore

    if not is_test_mode():
        return {"success": False, "error": "Demo advance is only available in test mode"}

    rfp = entities.find_rfp(rfp_id)
    if not rfp:
        return {"success": False, "error": f"RFP '{rfp_id}' not found"}

    if actor_id != rfp.requester_id and not roles.is_realm_admin(actor_id):
        return {
            "success": False,
            "error": "Only the requester or an admin may demo-advance this request",
        }

    from_status = rfp.status or "draft"
    if from_status == "draft":
        return transition_rfp(
            rfp_id,
            "open",
            actor_id,
            note="Demo: published for bidding",
            user=user,
            skip_preconditions=True,
        )
    if from_status == "open":
        return close_and_evaluate(rfp_id, actor_id, skip_preconditions=True)
    if from_status == "closed":
        return transition_rfp(
            rfp_id,
            "evaluation",
            actor_id,
            note="Demo: bids revealed for evaluation",
            user=user,
            skip_preconditions=True,
        )
    if from_status == "evaluation":
        if not (rfp.winning_bid_id or "").strip():
            first_bid = None
            for bid in entities.Bid.instances():
                if str(bid.rfp_id) == rfp_id:
                    first_bid = bid
                    break
            if first_bid:
                rfp.winning_bid_id = str(first_bid.bid_id)
            else:
                return {
                    "success": False,
                    "error": "Add at least one bid before demo-advancing to award",
                }
        return transition_rfp(
            rfp_id,
            "award",
            actor_id,
            note=f"Demo: awarded to bid {rfp.winning_bid_id}",
            user=user,
            metadata={"winning_bid_id": rfp.winning_bid_id},
            skip_preconditions=True,
        )
    if from_status == "award":
        return transition_rfp(
            rfp_id,
            "contract_execution",
            actor_id,
            note="Demo: contract execution recorded",
            user=user,
            skip_preconditions=True,
        )
    return {"success": False, "error": "Already at the final stage"}
