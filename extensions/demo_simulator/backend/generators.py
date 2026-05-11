"""
Demo Simulator — Entity generators.

Each generator function creates a batch of entities and updates state counters.
All generators use a seeded RNG derived from (seed + offset) so the output is
fully deterministic for a given seed value.
"""

import random
import time

from .constants import (
    CASE_TITLES,
    CITY_COORDINATES,
    COURT_NAMES,
    FIRST_NAMES,
    JUDGE_SPECIALIZATIONS,
    LAND_TYPES,
    LAST_NAMES,
    ORG_NAMES,
    PROPOSAL_TITLES,
    VERDICT_DECISIONS,
    ZONE_NAMES,
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
        p = Proposal(
            proposal_id=f"demo_prop_{idx:04d}",
            title=f"{title} (#{idx + 1})",
            description=f"Auto-generated demo proposal for: {title}",
            status=rng.choice(["draft", "open", "voting", "approved", "rejected"]),
            proposer=proposer,
        )
        p.votes_yes = float(rng.randint(0, 20))
        p.votes_no = float(rng.randint(0, 10))
        p.votes_abstain = float(rng.randint(0, 5))
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


def generate_vote_batch(state_data, count):
    """Generate votes on existing proposals."""
    from ggg import Proposal, User, Vote

    total_users = state_data.get("total_users_created", 0)
    total_proposals = state_data.get("total_proposals_created", 0)
    if total_users < 1 or total_proposals < 1:
        return []

    base_idx = state_data.get("total_votes_created", 0)
    seed = state_data.get("seed", 42)
    rng = random.Random(seed + base_idx + 50000)

    created = []
    for i in range(count):
        prop_idx = rng.randint(0, total_proposals - 1)
        user_idx = rng.randint(0, total_users - 1)
        proposal = Proposal[f"demo_prop_{prop_idx:04d}"]
        voter = User[f"demo_user_{user_idx:04d}"]
        if not proposal or not voter:
            continue
        Vote(
            proposal=proposal,
            voter=voter,
            vote_choice=rng.choice(["yes", "yes", "yes", "no", "no", "abstain"]),
        )
        created.append(f"vote_{base_idx + i}")

    state_data["total_votes_created"] = base_idx + len(created)
    return created


def generate_land_batch(state_data, count):
    """Generate land parcels with zones."""
    from ggg import Land, User, Zone

    def _make_h3(lat, lng, res):
        """Generate a plausible H3-like index from coordinates."""
        try:
            from core.h3 import latlng_to_cell
            return latlng_to_cell(lat, lng, res)
        except Exception:
            lat_hex = abs(int(lat * 10000)) & 0xFFFFFF
            lng_hex = abs(int(lng * 10000)) & 0xFFFFFF
            return f"8{res}{lat_hex:06x}{lng_hex:06x}f"

    total_users = state_data.get("total_users_created", 0)
    base_idx = state_data.get("total_lands_created", 0)
    seed = state_data.get("seed", 42)
    rng = random.Random(seed + base_idx + 60000)

    created = []
    for i in range(count):
        idx = base_idx + i
        city = rng.choice(CITY_COORDINATES)
        lat = city["lat"] + rng.uniform(-0.5, 0.5)
        lng = city["lng"] + rng.uniform(-0.5, 0.5)

        owner = None
        if total_users > 0 and rng.random() > 0.3:
            owner = User[f"demo_user_{rng.randint(0, total_users - 1):04d}"]

        land = Land(
            id=f"demo_land_{idx:04d}",
            x_coordinate=int(lat * 1000),
            y_coordinate=int(lng * 1000),
            land_type=rng.choice(LAND_TYPES),
            size_width=rng.randint(1, 10),
            size_height=rng.randint(1, 10),
            status="active",
        )
        if owner:
            try:
                land.owner_user = owner
            except Exception:
                pass

        zone_name = rng.choice(ZONE_NAMES)
        h3_idx = _make_h3(lat, lng, 9)

        zone = Zone(
            h3_index=h3_idx,
            name=f"{zone_name} {idx + 1}",
            description=f"Land parcel in {city['name']}",
            latitude=lat,
            longitude=lng,
            resolution=9.0,
        )
        try:
            zone.land = land
            if owner:
                zone.user = owner
        except Exception:
            pass
        created.append(f"demo_land_{idx:04d}")

    state_data["total_lands_created"] = base_idx + count
    return created


def generate_court_batch(state_data, count):
    """Generate courts and judges."""
    from ggg import Court, Judge, Member

    base_idx = state_data.get("total_courts_created", 0)
    total_members = state_data.get("total_users_created", 0)
    seed = state_data.get("seed", 42)
    rng = random.Random(seed + base_idx + 70000)

    created = []
    for i in range(count):
        idx = base_idx + i
        court_name = COURT_NAMES[idx % len(COURT_NAMES)]
        level = rng.choice(["first_instance", "first_instance", "appellate", "specialized"])

        court = Court(
            name=f"{court_name} #{idx + 1}",
            description=f"Demo court for {JUDGE_SPECIALIZATIONS[idx % len(JUDGE_SPECIALIZATIONS)]}",
            jurisdiction="General",
            level=level,
            status="active",
        )

        if total_members > 2:
            judge_member_idx = rng.randint(0, total_members - 1)
            member = Member[f"demo_mem_{judge_member_idx:04d}"]
            if member:
                judge = Judge(
                    id=f"demo_judge_{idx:04d}",
                    appointment_date="2026-01-01",
                    status="active",
                    specialization=JUDGE_SPECIALIZATIONS[idx % len(JUDGE_SPECIALIZATIONS)],
                )
                try:
                    judge.member = member
                    judge.court = court
                except Exception:
                    pass

        created.append(court.name)

    state_data["total_courts_created"] = base_idx + count
    return created


def generate_case_batch(state_data, count):
    """Generate cases with verdicts."""
    from ggg import Case, Court, User, Verdict

    total_users = state_data.get("total_users_created", 0)
    total_courts = state_data.get("total_courts_created", 0)
    if total_users < 2 or total_courts < 1:
        return []

    base_idx = state_data.get("total_cases_created", 0)
    seed = state_data.get("seed", 42)
    rng = random.Random(seed + base_idx + 80000)

    created = []
    for i in range(count):
        idx = base_idx + i
        plaintiff_idx = rng.randint(0, total_users - 1)
        defendant_idx = rng.randint(0, total_users - 2)
        if defendant_idx >= plaintiff_idx:
            defendant_idx += 1

        plaintiff = User[f"demo_user_{plaintiff_idx:04d}"]
        defendant = User[f"demo_user_{defendant_idx:04d}"]
        if not plaintiff or not defendant:
            continue

        status = rng.choice(["filed", "assigned", "in_progress", "verdict_issued", "closed"])
        case = Case(
            case_number=f"DEMO-2026-{idx:04d}",
            title=rng.choice(CASE_TITLES),
            description=f"Auto-generated demo case #{idx + 1}",
            status=status,
            filed_date="2026-01-15",
        )
        try:
            case.plaintiff = plaintiff
            case.defendant = defendant
        except Exception:
            pass

        if status in ("verdict_issued", "closed"):
            verdict = Verdict(
                id=f"demo_verdict_{idx:04d}",
                decision=rng.choice(VERDICT_DECISIONS),
                reasoning=f"Based on evidence presented in case DEMO-2026-{idx:04d}",
                issued_date="2026-03-01",
            )
            try:
                verdict.case = case
            except Exception:
                pass

        created.append(case.case_number)

    state_data["total_cases_created"] = base_idx + count
    return created
