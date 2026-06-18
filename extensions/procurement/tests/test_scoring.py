import json
import sys
from pathlib import Path

BACKEND = Path(__file__).resolve().parents[1] / "backend"
sys.path.insert(0, str(BACKEND))

from scoring import parse_rubric, validate_rubric  # noqa: E402


def test_valid_rubric():
    rubric = [
        {"id": "price", "label": "Price", "weight": 0.4, "max_score": 100},
        {"id": "tech", "label": "Technical", "weight": 0.6, "max_score": 100},
    ]
    parsed, err = parse_rubric(json.dumps(rubric))
    assert err is None
    assert parsed is not None
    assert len(parsed) == 2
    assert validate_rubric(json.dumps(rubric))["valid"] is True


def test_weights_must_sum_to_one():
    rubric = [{"id": "a", "weight": 0.3, "max_score": 10}]
    _, err = parse_rubric(json.dumps(rubric))
    assert err is not None


def test_duplicate_criterion_ids():
    rubric = [
        {"id": "a", "weight": 0.5, "max_score": 10},
        {"id": "a", "weight": 0.5, "max_score": 10},
    ]
    _, err = parse_rubric(json.dumps(rubric))
    assert err is not None


def test_score_out_of_range_message():
    rubric = [{"id": "x", "weight": 1.0, "max_score": 50}]
    parsed, err = parse_rubric(json.dumps(rubric))
    assert err is None
    assert parsed[0]["max_score"] == 50
