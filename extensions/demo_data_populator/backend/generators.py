"""
Entity generators for the demo data populator.

Each ``generate_*`` function creates a small batch of entities in a single
cycle.  The ``run_cycle`` orchestrator calls them in a mixed-batch pattern
so that all entity types grow together, mimicking realistic concurrent
activity in a production realm.

State is persisted in ``PopulatorState`` (a TaskEntity) so the PRNG and
cycle counter survive across canister calls.
"""

import json

from ic_basilisk_toolkit.prng import PRNG
from ic_basilisk_toolkit.date_utils import epoch_to_date_str, add_days
from ic_python_logging import get_logger

from .data_pools import (
    FIRST_NAMES, LAST_NAMES, ORGANIZATIONS, CITY_COORDINATES,
    PROPOSAL_TITLES, PROPOSAL_DESCRIPTIONS,
    NOTIFICATION_TOPICS, NOTIFICATION_TITLES,
    FUND_DEFINITIONS, BUDGET_CATEGORIES_REVENUE, BUDGET_CATEGORIES_EXPENSE,
    TRANSFER_TAGS, MANDATE_NAMES,
    RESIDENCE_PERMITS, TAX_COMPLIANCE, IDENTITY_VERIFICATION,
    VOTING_ELIGIBILITY, BENEFITS_ELIGIBILITY, CRIMINAL_RECORDS,
)

logger = get_logger("extensions.demo_data_populator.generators")

# Default batch sizes per cycle (configurable via update_config)
DEFAULT_BATCH = {
    "users": 10,
    "organizations": 1,
    "proposals": 1,
    "votes": 5,
    "transfers": 3,
    "ledger_entries": 2,
    "notifications": 3,
    "budgets": 1,
}


def _date_for_cycle(rng, base_epoch):
    """Generate a date string around the base epoch with some variance."""
    offset = rng.next_int(-90, 90)
    return epoch_to_date_str(base_epoch + offset * 86400)


def _dob_for_user(rng, base_epoch):
    """Generate a plausible date of birth (age 18-80)."""
    age_days = rng.next_int(18 * 365, 80 * 365)
    return epoch_to_date_str(base_epoch - age_days * 86400)


def generate_users(rng, cycle, count, base_epoch):
    """Create User + Human + Member triples."""
    from ggg import User, Human, Member

    created = {"users": 0, "humans": 0, "members": 0}
    for i in range(count):
        uid = f"demo_user_c{cycle:05d}_{i:03d}"

        if User[uid]:
            continue

        first = rng.choice(FIRST_NAMES)
        last = rng.choice(LAST_NAMES)
        city = rng.choice(CITY_COORDINATES)

        user = User(
            id=uid,
            nickname=f"{first} {last}",
            avatar=f"https://api.dicebear.com/7.x/personas/svg?seed={uid}",
        )
        created["users"] += 1

        lat = city["lat"] + (rng.next_float() - 0.5)
        lng = city["lng"] + (rng.next_float() - 0.5)

        Human(
            name=f"{first} {last}",
            date_of_birth=_dob_for_user(rng, base_epoch),
            user=user,
            latitude=lat,
            longitude=lng,
        )
        created["humans"] += 1

        mid = f"mem_c{cycle:05d}_{i:03d}"
        member = Member(
            id=mid,
            user=user,
            residence_permit=rng.choice(RESIDENCE_PERMITS),
            tax_compliance=rng.choice(TAX_COMPLIANCE),
            identity_verification=rng.choice(IDENTITY_VERIFICATION),
            voting_eligibility=rng.choice(VOTING_ELIGIBILITY),
            public_benefits_eligibility=rng.choice(BENEFITS_ELIGIBILITY),
            criminal_record=rng.choice(CRIMINAL_RECORDS),
        )
        # Activate most members for realistic distribution (70%)
        if rng.next_int(1, 10) <= 7:
            member.activate()
        created["members"] += 1

    return created


def generate_organizations(rng, cycle, count):
    """Create Organization entities."""
    from ggg import Organization

    created = 0
    for i in range(count):
        name = f"{rng.choice(ORGANIZATIONS)} #{cycle:04d}-{i}"
        Organization(name=name)
        created += 1
    return {"organizations": created}


def generate_proposals(rng, cycle, count, base_epoch):
    """Create Proposal entities with realistic statuses."""
    from ggg import Proposal, User

    created = 0
    users = list(User.instances())
    if not users:
        return {"proposals": 0}

    for i in range(count):
        pid = f"demo_prop_c{cycle:05d}_{i:03d}"
        if Proposal[pid]:
            continue

        proposer = rng.choice(users)
        status = rng.weighted_choice(
            ["pending_review", "voting", "approved", "rejected", "executed"],
            [0.2, 0.3, 0.2, 0.15, 0.15],
        )
        threshold = rng.choice([0.5, 0.6, 0.67, 0.75])

        yes = rng.next_int(0, 20)
        no = rng.next_int(0, 10)
        abstain = rng.next_int(0, 5)

        Proposal(
            proposal_id=pid,
            title=rng.choice(PROPOSAL_TITLES),
            description=rng.choice(PROPOSAL_DESCRIPTIONS),
            code_url="",
            code_checksum="",
            proposer=proposer,
            status=status,
            voting_deadline="",
            votes_yes=float(yes),
            votes_no=float(no),
            votes_abstain=float(abstain),
            total_voters=float(yes + no + abstain),
            required_threshold=threshold,
            metadata="{}",
        )
        created += 1

    return {"proposals": created}


def generate_votes(rng, cycle, count):
    """Cast Vote entities on existing proposals that are in voting status."""
    from ggg import Proposal, User, Vote

    created = 0
    proposals = [p for p in Proposal.instances() if p.status == "voting"]
    users = list(User.instances())
    if not proposals or not users:
        return {"votes": 0}

    for _ in range(count):
        proposal = rng.choice(proposals)
        voter = rng.choice(users)
        choice = rng.weighted_choice(["yes", "no", "abstain"], [0.6, 0.25, 0.15])

        Vote(
            proposal=proposal,
            voter=voter,
            vote_choice=choice,
            metadata="{}",
        )
        created += 1

    return {"votes": created}


def generate_transfers(rng, cycle, count, base_epoch):
    """Create Transfer entities between random users."""
    from ggg import Transfer, User

    created = 0
    users = list(User.instances())
    if len(users) < 2:
        return {"transfers": 0}

    instruments = ["ckBTC", "REALMS", "RLM"]

    for i in range(count):
        sender, receiver = rng.sample(users, 2)
        tid = f"demo_tr_c{cycle:05d}_{i:03d}"
        if Transfer[tid]:
            continue

        Transfer(
            id=tid,
            principal_from=sender.id,
            principal_to=receiver.id,
            instrument=rng.choice(instruments),
            amount=rng.next_int(10, 100000),
            timestamp=_date_for_cycle(rng, base_epoch),
            tags=rng.choice(TRANSFER_TAGS),
            status="completed",
        )
        created += 1

    return {"transfers": created}


def generate_ledger_entries(rng, cycle, count, base_epoch):
    """Create balanced double-entry LedgerEntry pairs."""
    from ggg import LedgerEntry, Fund, FiscalPeriod, EntryType, Category

    created = 0
    funds = list(Fund.instances())
    periods = list(FiscalPeriod.instances())
    if not funds or not periods:
        return {"ledger_entries": 0}

    revenue_categories = [Category.TAX, Category.FEE, Category.GRANT, Category.SERVICE]
    expense_categories = [Category.PERSONNEL, Category.SUPPLIES, Category.SERVICES]

    for i in range(count):
        fund = rng.choice(funds)
        period = rng.choice(periods)
        amount = rng.next_int(1000, 500000)
        tx_id = f"demo_tx_c{cycle:05d}_{i:03d}"
        date = _date_for_cycle(rng, base_epoch)

        is_revenue = rng.next_int(0, 1) == 0
        if is_revenue:
            cat = rng.choice(revenue_categories)
            LedgerEntry(
                id=f"{tx_id}_d",
                transaction_id=tx_id,
                entry_type=EntryType.ASSET,
                category=Category.CASH,
                debit=amount,
                credit=0,
                entry_date=date,
                fund=fund,
                fiscal_period=period,
                description=f"Demo revenue: {cat}",
                tags="operating,demo",
            )
            LedgerEntry(
                id=f"{tx_id}_c",
                transaction_id=tx_id,
                entry_type=EntryType.REVENUE,
                category=cat,
                debit=0,
                credit=amount,
                entry_date=date,
                fund=fund,
                fiscal_period=period,
                description=f"Demo revenue: {cat}",
                tags="operating,demo",
            )
        else:
            cat = rng.choice(expense_categories)
            LedgerEntry(
                id=f"{tx_id}_d",
                transaction_id=tx_id,
                entry_type=EntryType.EXPENSE,
                category=cat,
                debit=amount,
                credit=0,
                entry_date=date,
                fund=fund,
                fiscal_period=period,
                description=f"Demo expense: {cat}",
                tags="operating,demo",
            )
            LedgerEntry(
                id=f"{tx_id}_c",
                transaction_id=tx_id,
                entry_type=EntryType.ASSET,
                category=Category.CASH,
                debit=0,
                credit=amount,
                entry_date=date,
                fund=fund,
                fiscal_period=period,
                description=f"Demo expense: {cat}",
                tags="operating,demo",
            )
        created += 2

    return {"ledger_entries": created}


def generate_notifications(rng, cycle, count):
    """Create Notification entities for random users."""
    from ggg import Notification, User

    created = 0
    users = list(User.instances())
    if not users:
        return {"notifications": 0}

    colors = ["blue", "green", "yellow", "red", "purple"]
    icons = ["bell", "info", "warning", "check", "star"]

    for _ in range(count):
        user = rng.choice(users)
        Notification(
            topic=rng.choice(NOTIFICATION_TOPICS),
            title=rng.choice(NOTIFICATION_TITLES),
            message=f"Demo notification for cycle {cycle}",
            user=user,
            read=rng.next_int(0, 1) == 0,
            icon=rng.choice(icons),
            href="/notifications",
            color=rng.choice(colors),
        )
        created += 1

    return {"notifications": created}


def generate_budgets(rng, cycle, count, base_epoch):
    """Create Budget entities linked to existing Funds and FiscalPeriods."""
    from ggg import Budget, Fund, FiscalPeriod, BudgetStatus

    created = 0
    funds = list(Fund.instances())
    periods = list(FiscalPeriod.instances())
    if not funds or not periods:
        return {"budgets": 0}

    statuses = [BudgetStatus.DRAFT, BudgetStatus.PROPOSED, BudgetStatus.ADOPTED]

    for i in range(count):
        bid = f"demo_bud_c{cycle:05d}_{i:03d}"
        if Budget[bid]:
            continue

        is_revenue = rng.next_int(0, 1) == 0
        if is_revenue:
            cat = rng.choice(BUDGET_CATEGORIES_REVENUE)
            btype = "revenue"
        else:
            cat = rng.choice(BUDGET_CATEGORIES_EXPENSE)
            btype = "expense"

        planned = rng.next_int(10000, 1000000)
        variance_pct = rng.next_int(-20, 20)
        actual = max(0, planned + planned * variance_pct // 100)

        Budget(
            id=bid,
            name=f"Demo {cat} budget #{cycle}-{i}",
            fund=rng.choice(funds),
            fiscal_period=rng.choice(periods),
            category=cat,
            budget_type=btype,
            planned_amount=planned,
            actual_amount=actual,
            status=rng.choice(statuses),
            description=f"Auto-generated budget for {cat}",
        )
        created += 1

    return {"budgets": created}


def ensure_base_entities(rng, base_epoch):
    """Create one-time foundational entities (funds, fiscal periods) if missing."""
    from ggg import Fund, FiscalPeriod, FiscalPeriodStatus

    created = {}

    existing_funds = list(Fund.instances())
    if not existing_funds:
        for fdef in FUND_DEFINITIONS:
            Fund(
                code=fdef["code"],
                name=fdef["name"],
                fund_type=fdef["fund_type"],
                description=fdef["description"],
            )
        created["funds"] = len(FUND_DEFINITIONS)

    existing_periods = list(FiscalPeriod.instances())
    if not existing_periods:
        year_str = epoch_to_date_str(base_epoch)[:4]
        year = int(year_str)
        for y in [year - 1, year, year + 1]:
            FiscalPeriod(
                id=f"FY{y}",
                name=f"Fiscal Year {y}",
                start_date=f"{y}-01-01",
                end_date=f"{y}-12-31",
                status=(
                    FiscalPeriodStatus.OPEN if y == year
                    else FiscalPeriodStatus.CLOSED
                ),
            )
        created["fiscal_periods"] = 3

    return created


def run_cycle(state_dict, batch_config=None):
    """Execute one generation cycle producing a mixed batch of entities.

    Args:
        state_dict: Mutable dict with keys ``seed``, ``cycle``, ``prng_state``,
                    ``base_epoch``, ``totals``.
        batch_config: Optional dict overriding DEFAULT_BATCH sizes.

    Returns:
        Dict summarising what was created in this cycle.
    """
    batch = dict(DEFAULT_BATCH)
    if batch_config:
        batch.update(batch_config)

    seed = state_dict.get("seed", 42)
    cycle = state_dict.get("cycle", 0)
    prng_state = state_dict.get("prng_state", 0)
    base_epoch = state_dict.get("base_epoch", 1700000000)

    rng = PRNG(seed)
    if prng_state:
        rng.state = prng_state

    # Advance rng by cycle to get unique sequence per cycle
    for _ in range(cycle % 64):
        rng._next_raw()

    cycle_results = {}

    # Ensure foundational entities exist on first cycle
    if cycle == 0:
        base = ensure_base_entities(rng, base_epoch)
        cycle_results.update(base)

    # Mixed-batch: generate all entity types each cycle
    r = generate_users(rng, cycle, batch.get("users", 10), base_epoch)
    cycle_results.update(r)

    r = generate_organizations(rng, cycle, batch.get("organizations", 1))
    cycle_results.update(r)

    r = generate_proposals(rng, cycle, batch.get("proposals", 1), base_epoch)
    cycle_results.update(r)

    r = generate_votes(rng, cycle, batch.get("votes", 5))
    cycle_results.update(r)

    r = generate_transfers(rng, cycle, batch.get("transfers", 3), base_epoch)
    cycle_results.update(r)

    r = generate_ledger_entries(rng, cycle, batch.get("ledger_entries", 2), base_epoch)
    cycle_results.update(r)

    r = generate_notifications(rng, cycle, batch.get("notifications", 3))
    cycle_results.update(r)

    r = generate_budgets(rng, cycle, batch.get("budgets", 1), base_epoch)
    cycle_results.update(r)

    # Update state for next cycle
    state_dict["cycle"] = cycle + 1
    state_dict["prng_state"] = rng.state

    # Accumulate totals
    totals = state_dict.get("totals", {})
    for k, v in cycle_results.items():
        totals[k] = totals.get(k, 0) + v
    state_dict["totals"] = totals

    logger.info(
        f"Cycle {cycle} complete: {cycle_results}"
    )
    return cycle_results
