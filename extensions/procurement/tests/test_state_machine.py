import sys
from pathlib import Path

BACKEND = Path(__file__).resolve().parents[1] / "backend"
sys.path.insert(0, str(BACKEND))

from constants import RFP_STATUSES, VALID_TRANSITIONS  # noqa: E402


def test_linear_lifecycle():
    assert VALID_TRANSITIONS["draft"] == {"open"}
    assert VALID_TRANSITIONS["open"] == {"closed"}
    assert VALID_TRANSITIONS["closed"] == {"evaluation"}
    assert VALID_TRANSITIONS["evaluation"] == {"award"}
    assert VALID_TRANSITIONS["award"] == {"contract_execution"}


def test_terminal_state_has_no_outgoing():
    assert VALID_TRANSITIONS.get("contract_execution", set()) == set()


def test_all_target_statuses_are_valid():
    for targets in VALID_TRANSITIONS.values():
        for target in targets:
            assert target in RFP_STATUSES
