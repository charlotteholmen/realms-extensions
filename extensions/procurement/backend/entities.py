"""Procurement extension entity definitions."""

from ic_python_db import Float, Integer, String
from core.extensions import create_extension_entity_class

from .constants import (
    ENCRYPTION_NONE,
    ENCRYPTION_VETKEYS,
    RFP_STATUSES,
    SEAL_REVEALED,
    SEAL_SEALED,
)

ExtensionEntity = create_extension_entity_class("procurement")


class Rfp(ExtensionEntity):
    __alias__ = "rfp_id"

    rfp_id = String(max_length=64)
    title = String(max_length=512)
    description = String(max_length=4096)
    requester_id = String(max_length=128)
    status = String(max_length=32)
    opens_at = Integer()
    closes_at = Integer()
    opened_at = Integer()
    closed_at = Integer()
    revealed_at = Integer()
    awarded_at = Integer()
    executed_at = Integer()
    rubric_json = String()
    winning_bid_id = String(max_length=64)
    metadata_json = String()


class RfpTransition(ExtensionEntity):
    __alias__ = "transition_id"

    transition_id = String(max_length=128)
    rfp_id = String(max_length=64)
    from_status = String(max_length=32)
    to_status = String(max_length=32)
    actor_id = String(max_length=128)
    timestamp = Integer()
    note = String(max_length=1024)
    metadata_json = String()


class Bid(ExtensionEntity):
    __alias__ = "bid_id"

    bid_id = String(max_length=64)
    rfp_id = String(max_length=64)
    vendor_id = String(max_length=128)
    submitted_at = Integer()
    seal_status = String(max_length=16)
    total_score = Float()
    score_breakdown_json = String()


class BidPayload(ExtensionEntity):
    __alias__ = "bid_id"

    bid_id = String(max_length=64)
    ciphertext = String()
    scope = String(max_length=512)
    encryption_mode = String(max_length=16)
    created_by = String(max_length=128)


class BidScore(ExtensionEntity):
    __alias__ = "score_id"

    score_id = String(max_length=192)
    bid_id = String(max_length=64)
    rfp_id = String(max_length=64)
    evaluator_id = String(max_length=128)
    criterion_id = String(max_length=64)
    score = Float()
    scored_at = Integer()


class VendorRecord(ExtensionEntity):
    __alias__ = "vendor_id"

    vendor_id = String(max_length=128)
    awards_count = Integer()
    last_award_at = Integer()
    last_rfp_id = String(max_length=64)
    flags_json = String()


def register_entities() -> None:
    from ic_python_db import Database

    db = Database.get_instance()
    for entity_cls in (
        Rfp,
        RfpTransition,
        Bid,
        BidPayload,
        BidScore,
        VendorRecord,
    ):
        db.register_entity_type(entity_cls)


def find_rfp(rfp_id: str):
    return Rfp[rfp_id]


def list_rfp_transitions(rfp_id: str) -> list:
    return [
        t
        for t in RfpTransition.instances()
        if getattr(t, "rfp_id", "") == rfp_id
    ]


def next_rfp_id() -> str:
    existing = Rfp.instances()
    num = len(existing) + 1
    return f"rfp_{num:03d}"


def next_transition_id(rfp_id: str) -> str:
    seq = len(list_rfp_transitions(rfp_id)) + 1
    return f"{rfp_id}:{seq:03d}"


def next_bid_id(rfp_id: str) -> str:
    count = len([b for b in Bid.instances() if getattr(b, "rfp_id", "") == rfp_id])
    return f"bid_{rfp_id}_{count + 1:03d}"


def bids_for_rfp(rfp_id: str) -> list:
    return [b for b in Bid.instances() if getattr(b, "rfp_id", "") == rfp_id]


def scores_for_rfp(rfp_id: str) -> list:
    return [s for s in BidScore.instances() if getattr(s, "rfp_id", "") == rfp_id]
