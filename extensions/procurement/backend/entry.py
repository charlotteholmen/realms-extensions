"""Procurement extension — RFP lifecycle, bid storage, scoring, vendor reputation.

v1 note: bids use encryption_mode=none (plaintext JSON in BidPayload.ciphertext).
This is structured storage pending vetKeys — not confidential sealed bidding.
"""

import json
import traceback
from typing import Any, Dict, Optional

from ic_python_logging import get_logger

from core.crypto_scopes import ScopeAuthContext, scope_kind

from . import entities
from . import roles
from . import scoring
from . import seals
from . import state_machine
from . import vendors

logger = get_logger("extensions.procurement")


def register_entities() -> None:
    entities.register_entities()


@scope_kind("procurement")
def _manage_procurement_bid_scope(parts, caller, ctx: ScopeAuthContext) -> bool:
    """procurement:rfp:<rfp_id>:bid:<bid_id> — bidder, dept head, or admin may grant."""
    if len(parts) < 5 or not parts[4]:
        return False
    bid_id = parts[4]
    payload = entities.BidPayload[bid_id]
    if payload and caller == getattr(payload, "created_by", ""):
        return True
    if ctx.is_realm_admin(caller):
        return True
    return ctx.is_department_head(roles.PROCUREMENT_DEPARTMENT, caller)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def _parse_args(args) -> dict:
    if isinstance(args, str) and args.strip():
        return json.loads(args)
    if isinstance(args, dict):
        return args
    return {}


def _ok(data: dict) -> str:
    return json.dumps({"success": True, **data})


def _err(message: str) -> str:
    return json.dumps({"success": False, "error": message})


def _rfp_to_dict(rfp: entities.Rfp, include_transitions: bool = False) -> dict:
    out = {
        "rfp_id": rfp.rfp_id,
        "title": rfp.title or "",
        "description": rfp.description or "",
        "requester_id": rfp.requester_id or "",
        "status": rfp.status or "draft",
        "opens_at": int(rfp.opens_at or 0),
        "closes_at": int(rfp.closes_at or 0),
        "opened_at": int(rfp.opened_at or 0),
        "closed_at": int(rfp.closed_at or 0),
        "revealed_at": int(rfp.revealed_at or 0),
        "awarded_at": int(rfp.awarded_at or 0),
        "executed_at": int(rfp.executed_at or 0),
        "rubric_json": rfp.rubric_json or "[]",
        "winning_bid_id": rfp.winning_bid_id or "",
        "metadata_json": rfp.metadata_json or "{}",
    }
    if include_transitions:
        out["transitions"] = [
            _transition_to_dict(t)
            for t in sorted(
                entities.list_rfp_transitions(str(rfp.rfp_id)),
                key=lambda x: int(getattr(x, "timestamp", 0) or 0),
            )
        ]
    return out


def _transition_to_dict(t: entities.RfpTransition) -> dict:
    return {
        "transition_id": t.transition_id,
        "rfp_id": t.rfp_id,
        "from_status": t.from_status,
        "to_status": t.to_status,
        "actor_id": t.actor_id,
        "timestamp": int(t.timestamp or 0),
        "note": t.note or "",
        "metadata_json": t.metadata_json or "{}",
    }


def _bid_to_dict(bid: entities.Bid, include_payload: bool = False, caller: str = "") -> dict:
    out = {
        "bid_id": bid.bid_id,
        "rfp_id": bid.rfp_id,
        "vendor_id": bid.vendor_id,
        "submitted_at": int(bid.submitted_at or 0),
        "seal_status": bid.seal_status or entities.SEAL_SEALED,
        "total_score": float(bid.total_score or 0),
        "score_breakdown_json": bid.score_breakdown_json or "",
    }
    if include_payload:
        rfp = entities.find_rfp(str(bid.rfp_id))
        if rfp and seals.can_read_payload(bid, caller, rfp):
            payload = entities.BidPayload[str(bid.bid_id)]
            if payload:
                out["ciphertext"] = payload.ciphertext or ""
                out["encryption_mode"] = payload.encryption_mode or entities.ENCRYPTION_NONE
                out["scope"] = payload.scope or ""
    return out


def _handle(fn):
    def wrapper(args: str) -> str:
        try:
            return fn(args)
        except PermissionError as e:
            return _err(str(e))
        except Exception as e:
            logger.error(f"{fn.__name__} error: {e}\n{traceback.format_exc()}")
            return _err(str(e))

    wrapper.__name__ = fn.__name__
    return wrapper


# ---------------------------------------------------------------------------
# RPC — health
# ---------------------------------------------------------------------------


@_handle
def health(args: str) -> str:
    return _ok(
        {
            "status": "ok",
            "extension": "procurement",
            "encryption_default": entities.ENCRYPTION_VETKEYS,
            "sealed_bidding": True,
        }
    )


# ---------------------------------------------------------------------------
# RPC — RFP
# ---------------------------------------------------------------------------


@_handle
def create_rfp(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    roles.require_op(user, roles.PROCUREMENT_RFP_CREATE)

    title = str(params.get("title", "")).strip()
    if not title:
        return _err("title is required")

    rubric_json = params.get("rubric_json", "[]")
    if isinstance(rubric_json, (list, dict)):
        rubric_json = json.dumps(rubric_json)
    valid = scoring.validate_rubric(str(rubric_json))
    if not valid.get("valid"):
        return _err(valid.get("error", "Invalid rubric"))

    try:
        opens_at = int(params.get("opens_at", 0))
        closes_at = int(params.get("closes_at", 0))
    except (TypeError, ValueError):
        return _err("opens_at and closes_at must be integers (epoch seconds)")

    if closes_at <= opens_at:
        return _err("closes_at must be after opens_at")

    rfp_id = entities.next_rfp_id()
    rfp = entities.Rfp(
        rfp_id=rfp_id,
        title=title,
        description=str(params.get("description", "")),
        requester_id=str(user.id),
        status="draft",
        opens_at=opens_at,
        closes_at=closes_at,
        rubric_json=str(rubric_json),
        winning_bid_id="",
        metadata_json="{}",
    )

    state_machine.log_created(rfp_id, str(user.id))

    return _ok({"rfp": _rfp_to_dict(rfp)})


@_handle
def update_rfp(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    rfp_id = str(params.get("rfp_id", "")).strip()
    rfp = entities.find_rfp(rfp_id)
    if not rfp:
        return _err(f"RFP '{rfp_id}' not found")
    if (rfp.status or "") != "draft":
        return _err("Only draft RFPs may be edited")
    if str(rfp.requester_id) != str(user.id) and not roles.is_realm_admin(str(user.id)):
        return _err("Only the requester or admin may edit this RFP")

    if "title" in params:
        title = str(params["title"]).strip()
        if title:
            rfp.title = title
    if "description" in params:
        rfp.description = str(params["description"])
    if "opens_at" in params:
        rfp.opens_at = int(params["opens_at"])
    if "closes_at" in params:
        rfp.closes_at = int(params["closes_at"])
    if "rubric_json" in params:
        rubric_json = params["rubric_json"]
        if isinstance(rubric_json, (list, dict)):
            rubric_json = json.dumps(rubric_json)
        valid = scoring.validate_rubric(str(rubric_json))
        if not valid.get("valid"):
            return _err(valid.get("error", "Invalid rubric"))
        rfp.rubric_json = str(rubric_json)

    return _ok({"rfp": _rfp_to_dict(rfp)})


@_handle
def publish_rfp(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    roles.require_op(user, roles.PROCUREMENT_RFP_PUBLISH)
    rfp_id = str(params.get("rfp_id", "")).strip()
    rfp = entities.find_rfp(rfp_id)
    if not rfp:
        return _err(f"RFP '{rfp_id}' not found")

    valid = scoring.validate_rubric(str(rfp.rubric_json or ""))
    if not valid.get("valid"):
        return _err(valid.get("error", "Invalid rubric"))

    result = state_machine.transition_rfp(
        rfp_id,
        "open",
        str(user.id),
        note="RFP published for bidding",
        user=user,
    )
    if not result.get("success"):
        return json.dumps(result)
    rfp = entities.find_rfp(rfp_id)
    return _ok({"rfp": _rfp_to_dict(rfp), "transition": result})


@_handle
def get_rfp(args: str) -> str:
    params = _parse_args(args)
    roles.get_caller_user()
    rfp_id = str(params.get("rfp_id", "")).strip()
    rfp = entities.find_rfp(rfp_id)
    if not rfp:
        return _err(f"RFP '{rfp_id}' not found")
    return _ok({"rfp": _rfp_to_dict(rfp, include_transitions=True)})


@_handle
def list_rfps(args: str) -> str:
    params = _parse_args(args)
    roles.get_caller_user()
    status_filter = str(params.get("status", "")).strip()
    rfps = []
    for rfp in entities.Rfp.instances():
        if status_filter and (rfp.status or "") != status_filter:
            continue
        rfps.append(_rfp_to_dict(rfp))
    rfps.sort(key=lambda r: r.get("rfp_id", ""))
    return _ok({"rfps": rfps, "count": len(rfps)})


@_handle
def close_rfp(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    if not roles.is_realm_admin(str(user.id)) and str(params.get("force", "")).lower() != "true":
        return _err("Admin required to close RFP manually")
    rfp_id = str(params.get("rfp_id", "")).strip()
    result = state_machine.close_and_evaluate(rfp_id, str(user.id))
    if not result.get("success"):
        return json.dumps(result)
    rfp = entities.find_rfp(rfp_id)
    return _ok({"rfp": _rfp_to_dict(rfp), "transition": result})


@_handle
def get_rfp_transitions(args: str) -> str:
    params = _parse_args(args)
    roles.get_caller_user()
    rfp_id = str(params.get("rfp_id", "")).strip()
    transitions = [
        _transition_to_dict(t)
        for t in sorted(
            entities.list_rfp_transitions(rfp_id),
            key=lambda x: int(getattr(x, "timestamp", 0) or 0),
        )
    ]
    return _ok({"rfp_id": rfp_id, "transitions": transitions})


# ---------------------------------------------------------------------------
# RPC — Bidding
# ---------------------------------------------------------------------------


@_handle
def create_bid_shell(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    roles.require_op(user, roles.PROCUREMENT_BID_SUBMIT)
    rfp_id = str(params.get("rfp_id", "")).strip()
    result = seals.create_bid_shell(rfp_id, str(user.id))
    return json.dumps(result)


@_handle
def get_evaluator_principals(args: str) -> str:
    roles.get_caller_user()
    principals = roles.list_evaluator_principals()
    return _ok({"principals": principals, "count": len(principals)})


@_handle
def set_bid_payload(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    bid_id = str(params.get("bid_id", "")).strip()
    ciphertext = params.get("ciphertext", "")
    encryption_mode = str(params.get("encryption_mode", "")).strip()
    result = seals.set_bid_payload(
        bid_id, str(user.id), str(ciphertext), encryption_mode=encryption_mode
    )
    return json.dumps(result)


@_handle
def list_bids(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    caller = str(user.id)
    rfp_id = str(params.get("rfp_id", "")).strip()
    rfp = entities.find_rfp(rfp_id)
    if not rfp:
        return _err(f"RFP '{rfp_id}' not found")

    include_payload = bool(params.get("include_payload", False))
    if include_payload and not (
        roles.is_evaluator(user) or roles.is_approver(user) or roles.is_realm_admin(caller)
    ):
        include_payload = False

    bids = [
        _bid_to_dict(b, include_payload=include_payload, caller=caller)
        for b in entities.bids_for_rfp(rfp_id)
    ]
    return _ok({"rfp_id": rfp_id, "bids": bids})


@_handle
def get_bid_payload(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    caller = str(user.id)
    bid_id = str(params.get("bid_id", "")).strip()
    bid = entities.Bid[bid_id]
    if not bid:
        return _err(f"Bid '{bid_id}' not found")
    rfp = entities.find_rfp(str(bid.rfp_id))
    if not rfp:
        return _err("Parent RFP not found")
    if not seals.can_read_payload(bid, caller, rfp):
        return _err("Not allowed to read bid payload")
    payload = entities.BidPayload[bid_id]
    if not payload:
        return _err("Payload not found")
    return _ok(
        {
            "bid_id": bid_id,
            "ciphertext": payload.ciphertext or "",
            "encryption_mode": payload.encryption_mode or entities.ENCRYPTION_NONE,
            "scope": payload.scope or "",
            "seal_status": bid.seal_status or "",
        }
    )


# ---------------------------------------------------------------------------
# RPC — Scoring
# ---------------------------------------------------------------------------


@_handle
def submit_scores(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    if not roles.is_evaluator(user):
        return _err("Evaluator role required")
    bid_id = str(params.get("bid_id", "")).strip()
    scores = params.get("scores", {})
    result = scoring.submit_scores(bid_id, str(user.id), scores)
    return json.dumps(result)


@_handle
def compute_totals(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    if not (roles.is_evaluator(user) or roles.is_realm_admin(str(user.id))):
        return _err("Evaluator or admin required")
    rfp_id = str(params.get("rfp_id", "")).strip()
    result = scoring.compute_totals(rfp_id)
    return json.dumps(result)


@_handle
def list_scores(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    if not (roles.is_evaluator(user) or roles.is_approver(user) or roles.is_realm_admin(str(user.id))):
        return _err("Not allowed")
    rfp_id = str(params.get("rfp_id", "")).strip()
    rows = []
    for row in entities.scores_for_rfp(rfp_id):
        rows.append(
            {
                "score_id": row.score_id,
                "bid_id": row.bid_id,
                "evaluator_id": row.evaluator_id,
                "criterion_id": row.criterion_id,
                "score": float(row.score or 0),
                "scored_at": int(row.scored_at or 0),
            }
        )
    return _ok({"rfp_id": rfp_id, "scores": rows})


# ---------------------------------------------------------------------------
# RPC — Award & execution
# ---------------------------------------------------------------------------


@_handle
def award_rfp(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    if not roles.is_approver(user):
        return _err("Approver role required")
    rfp_id = str(params.get("rfp_id", "")).strip()
    winning_bid_id = str(params.get("winning_bid_id", "")).strip()
    if not winning_bid_id:
        return _err("winning_bid_id is required")

    rfp = entities.find_rfp(rfp_id)
    if not rfp:
        return _err(f"RFP '{rfp_id}' not found")
    bid = entities.Bid[winning_bid_id]
    if not bid or str(bid.rfp_id) != rfp_id:
        return _err("winning_bid_id does not belong to this RFP")

    rfp.winning_bid_id = winning_bid_id
    result = state_machine.transition_rfp(
        rfp_id,
        "award",
        str(user.id),
        note=f"Awarded to bid {winning_bid_id}",
        user=user,
        metadata={"winning_bid_id": winning_bid_id},
    )
    if not result.get("success"):
        return json.dumps(result)
    rfp = entities.find_rfp(rfp_id)
    return _ok({"rfp": _rfp_to_dict(rfp), "transition": result})


@_handle
def execute_contract(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    roles.require_op(user, roles.PROCUREMENT_EXECUTE)
    if not roles.is_approver(user):
        return _err("Approver role required")
    rfp_id = str(params.get("rfp_id", "")).strip()
    note = str(params.get("note", "Contract execution stub (vault integration pending)"))

    result = state_machine.transition_rfp(
        rfp_id,
        "contract_execution",
        str(user.id),
        note=note,
        user=user,
    )
    if not result.get("success"):
        return json.dumps(result)
    rfp = entities.find_rfp(rfp_id)
    return _ok({"rfp": _rfp_to_dict(rfp), "transition": result})


@_handle
def flag_vendor(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    if not roles.is_realm_admin(str(user.id)):
        return _err("Admin required")
    vendor_id = str(params.get("vendor_id", "")).strip()
    code = str(params.get("code", "")).strip()
    if not vendor_id or not code:
        return _err("vendor_id and code are required")
    result = vendors.flag_vendor(
        vendor_id,
        code,
        str(params.get("note", "")),
        str(params.get("rfp_id", "")),
        str(params.get("bid_id", "")),
        roles.now_epoch(),
    )
    return json.dumps(result)


# ---------------------------------------------------------------------------
# RPC — Vendor queries
# ---------------------------------------------------------------------------


@_handle
def get_vendor_record(args: str) -> str:
    params = _parse_args(args)
    roles.get_caller_user()
    vendor_id = str(params.get("vendor_id", "")).strip()
    record = entities.VendorRecord[vendor_id]
    if not record:
        return _ok({"vendor": None})
    return _ok({"vendor": vendors.vendor_to_dict(record)})


@_handle
def list_vendor_records(args: str) -> str:
    params = _parse_args(args)
    user = roles.get_caller_user()
    if not roles.is_realm_admin(str(user.id)):
        return _err("Admin required")
    records = [vendors.vendor_to_dict(v) for v in entities.VendorRecord.instances()]
    return _ok({"vendors": records, "count": len(records)})


@_handle
def demo_advance_rfp(args: str) -> str:
    """Test-mode only: advance the request to the next lifecycle stage (demo / QA)."""
    params = _parse_args(args)
    user = roles.get_caller_user()
    rfp_id = str(params.get("rfp_id", "")).strip()
    if not rfp_id:
        return _err("rfp_id is required")
    result = state_machine.demo_advance_rfp(rfp_id, str(user.id), user=user)
    if not result.get("success"):
        return json.dumps(result)
    rfp = entities.find_rfp(rfp_id)
    return _ok({"rfp": _rfp_to_dict(rfp), "transition": result})


# ---------------------------------------------------------------------------
# Scheduled task
# ---------------------------------------------------------------------------


def async_task(args: str = "{}") -> str:
    """Close RFPs whose bidding window has ended."""
    now = roles.now_epoch()
    processed = 0
    errors = []
    for rfp in entities.Rfp.instances():
        if (rfp.status or "") != "open":
            continue
        if not rfp.closes_at or now < int(rfp.closes_at):
            continue
        result = state_machine.close_and_evaluate(str(rfp.rfp_id), roles.SYSTEM_ACTOR)
        if result.get("success"):
            processed += 1
        else:
            errors.append({"rfp_id": rfp.rfp_id, "error": result.get("error")})
    return json.dumps({"success": True, "processed": processed, "errors": errors})

