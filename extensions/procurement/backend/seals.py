"""Bid shell and payload handling with vetKeys sealed bidding."""

from . import entities
from . import roles

BID_SCOPE_TEMPLATE = "procurement:rfp:{rfp_id}:bid:{bid_id}"


def create_bid_shell(rfp_id: str, vendor_id: str) -> dict:
    rfp = entities.find_rfp(rfp_id)
    if not rfp:
        return {"success": False, "error": f"RFP '{rfp_id}' not found"}
    if (rfp.status or "") != "open":
        return {"success": False, "error": "RFP is not open for bids"}

    now = roles.now_epoch()
    if rfp.closes_at and now > int(rfp.closes_at):
        return {"success": False, "error": "Bidding window has closed"}

    for existing in entities.bids_for_rfp(rfp_id):
        if str(existing.vendor_id) == vendor_id:
            return {"success": False, "error": "Vendor already has a bid on this RFP"}

    bid_id = entities.next_bid_id(rfp_id)
    scope = BID_SCOPE_TEMPLATE.format(rfp_id=rfp_id, bid_id=bid_id)

    entities.Bid(
        bid_id=bid_id,
        rfp_id=rfp_id,
        vendor_id=vendor_id,
        submitted_at=now,
        seal_status=entities.SEAL_SEALED,
        total_score=0.0,
        score_breakdown_json="",
    )
    entities.BidPayload(
        bid_id=bid_id,
        ciphertext="",
        scope=scope,
        encryption_mode=entities.ENCRYPTION_VETKEYS,
        created_by=vendor_id,
    )

    return {
        "success": True,
        "bid_id": bid_id,
        "scope": scope,
        "encryption_mode": entities.ENCRYPTION_VETKEYS,
    }


def set_bid_payload(
    bid_id: str,
    vendor_id: str,
    ciphertext: str,
    encryption_mode: str = "",
) -> dict:
    bid = entities.Bid[bid_id]
    if not bid:
        return {"success": False, "error": f"Bid '{bid_id}' not found"}
    if str(bid.vendor_id) != vendor_id:
        return {"success": False, "error": "Only the bidder may set payload"}

    rfp = entities.find_rfp(str(bid.rfp_id))
    if not rfp:
        return {"success": False, "error": "Parent RFP not found"}

    rfp_status = rfp.status or ""
    seal = bid.seal_status or entities.SEAL_SEALED

    if rfp_status == "open" and seal == entities.SEAL_SEALED:
        pass  # initial sealed submit
    elif rfp_status == "evaluation" and seal == entities.SEAL_REVEALED:
        pass  # vendor re-wrap for evaluators after reveal
    else:
        return {"success": False, "error": "Bid payload cannot be updated in this state"}

    if rfp_status == "open":
        now = roles.now_epoch()
        if rfp.closes_at and now > int(rfp.closes_at):
            return {"success": False, "error": "Bidding window has closed"}

    if not ciphertext or not str(ciphertext).strip():
        return {"success": False, "error": "ciphertext is required"}

    payload = entities.BidPayload[bid_id]
    if not payload:
        return {"success": False, "error": "Bid payload record missing"}

    payload.ciphertext = str(ciphertext)
    mode = (encryption_mode or "").strip() or entities.ENCRYPTION_VETKEYS
    payload.encryption_mode = mode

    return {"success": True, "bid_id": bid_id, "encryption_mode": mode}


def reveal_bids(rfp_id: str) -> dict:
    revealed = 0
    for bid in entities.bids_for_rfp(rfp_id):
        if (bid.seal_status or "") == entities.SEAL_SEALED:
            bid.seal_status = entities.SEAL_REVEALED
            revealed += 1
    return {"success": True, "rfp_id": rfp_id, "revealed": revealed}


def can_read_payload(bid: entities.Bid, caller: str, rfp: entities.Rfp) -> bool:
    status = rfp.status or ""
    seal = bid.seal_status or entities.SEAL_SEALED

    if str(bid.vendor_id) == caller:
        return True

    if status == "open" and seal == entities.SEAL_SEALED:
        return False

    if status in ("evaluation", "award", "contract_execution"):
        from ggg import User

        user = User[caller] if caller else None
        if user and roles.is_evaluator(user):
            return True
        if user and roles.is_approver(user):
            return True
        if roles.is_realm_admin(caller):
            return True

    return False
