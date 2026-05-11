"""
Demo Simulator — Entity generators.

Each generator function creates a batch of entities and updates state counters.
All generators use a seeded RNG derived from (seed + offset) so the output is
fully deterministic for a given seed value.
"""

import random
import time

from .constants import (
    CITY_COORDINATES,
    FIRST_NAMES,
    LAST_NAMES,
    ORG_NAMES,
    PROPOSAL_TITLES,
)


def generate_user_batch(state_data, count):
    """Generate a batch of users + humans + members."""
    from ggg import Human, Member, User
    from ggg.system.user_profile import Profiles

    created = []
    base_idx = state_data.get("total_users_created", 0)
    seed = state_data.get("seed", 42)
    rng = random.Random(seed + base_idx)

    for i in range(count):
        idx = base_idx + i
        first = rng.choice(FIRST_NAMES)
        last = rng.choice(LAST_NAMES)

        user = User(
            id=f"demo_user_{idx:04d}",
            profile_picture_url=f"https://api.dicebear.com/7.x/personas/svg?seed={rng.randint(1, 999999)}",
            user_profile=Profiles.MEMBER["name"],
        )

        city = rng.choice(CITY_COORDINATES)
        lat = city["lat"] + rng.uniform(-0.5, 0.5)
        lng = city["lng"] + rng.uniform(-0.5, 0.5)

        age_days = rng.randint(18 * 365, 70 * 365)
        birth_ts = int(time.time()) - age_days * 86400
        birth_year = 1970 + birth_ts // (365 * 86400)
        birth_day_of_year = (birth_ts % (365 * 86400)) // 86400
        birth_month = min(12, birth_day_of_year // 30 + 1)
        birth_day = max(1, min(28, birth_day_of_year % 30 + 1))
        dob = f"{birth_year:04d}-{birth_month:02d}-{birth_day:02d}"

        Human(
            name=f"{first} {last}",
            date_of_birth=dob,
            user_id=user.id,
            latitude=lat,
            longitude=lng,
        )

        Member(
            id=f"demo_mem_{idx:04d}",
            user=user,
            residence_permit=rng.choice(["valid", "expired", "pending"]),
            tax_compliance=rng.choice(["compliant", "delinquent", "under_review"]),
            identity_verification=rng.choice(["verified", "pending", "rejected"]),
            voting_eligibility=rng.choice(["eligible", "ineligible", "suspended"]),
            public_benefits_eligibility=rng.choice(["eligible", "ineligible", "conditional"]),
            criminal_record=rng.choice(["clean", "minor_offenses", "major_offenses"]),
        )

        created.append(user.id)

    state_data["total_users_created"] = base_idx + count
    return created


def generate_org_batch(state_data, count):
    """Generate a batch of organizations."""
    from ggg import Organization

    base_idx = state_data.get("total_orgs_created", 0)
    seed = state_data.get("seed", 42)
    rng = random.Random(seed + base_idx + 10000)

    created = []
    for i in range(count):
        idx = base_idx + i
        name = rng.choice(ORG_NAMES)
        org = Organization(name=f"{name} #{idx + 1:03d}")
        created.append(org.name)

    state_data["total_orgs_created"] = base_idx + count
    return created


def generate_proposal_batch(state_data, count):
    """Generate a batch of proposals."""
    from ggg import Proposal, User

    base_idx = state_data.get("total_proposals_created", 0)
    total_users = state_data.get("total_users_created", 0)
    seed = state_data.get("seed", 42)
    rng = random.Random(seed + base_idx + 20000)

    created = []
    for i in range(count):
        idx = base_idx + i
        title = rng.choice(PROPOSAL_TITLES)
        proposer = None
        if total_users > 0:
            proposer = User[f"demo_user_{rng.randint(0, total_users - 1):04d}"]
        Proposal(
            proposal_id=f"demo_prop_{idx:04d}",
            title=f"{title} (#{idx + 1})",
            description=f"Auto-generated demo proposal for: {title}",
            status=rng.choice(["draft", "open", "voting", "approved", "rejected"]),
            proposer=proposer,
            votes_yes=rng.randint(0, 20),
            votes_no=rng.randint(0, 10),
            votes_abstain=rng.randint(0, 5),
        )
        created.append(f"demo_prop_{idx:04d}")

    state_data["total_proposals_created"] = base_idx + count
    return created


def generate_transfer_batch(state_data, count):
    """Generate a batch of transfers between existing demo users."""
    from ggg import Transfer

    base_idx = state_data.get("total_transfers_created", 0)
    total_users = state_data.get("total_users_created", 0)
    if total_users < 2:
        return []

    seed = state_data.get("seed", 42)
    rng = random.Random(seed + base_idx + 30000)

    created = []
    for i in range(count):
        idx = base_idx + i
        from_idx = rng.randint(0, total_users - 1)
        to_idx = rng.randint(0, total_users - 2)
        if to_idx >= from_idx:
            to_idx += 1

        Transfer(
            id=f"demo_tr_{idx:04d}",
            principal_from=f"demo_user_{from_idx:04d}",
            principal_to=f"demo_user_{to_idx:04d}",
            instrument="Realm Token",
            amount=rng.randint(1, 5000),
            timestamp=str(int(time.time())),
            transfer_type="internal",
            status="completed",
        )
        created.append(f"demo_tr_{idx:04d}")

    state_data["total_transfers_created"] = base_idx + count
    return created


def generate_dispute_batch(state_data, count):
    """Generate a batch of disputes."""
    from ggg import Dispute

    base_idx = state_data.get("total_disputes_created", 0)
    seed = state_data.get("seed", 42)
    rng = random.Random(seed + base_idx + 40000)

    created = []
    for i in range(count):
        idx = base_idx + i
        Dispute(
            dispute_id=f"demo_dispute_{idx:04d}",
            status=rng.choice(["open", "investigating", "resolved", "closed", "appealed"]),
        )
        created.append(f"demo_dispute_{idx:04d}")

    state_data["total_disputes_created"] = base_idx + count
    return created
