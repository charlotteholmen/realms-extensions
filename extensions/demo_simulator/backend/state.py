"""
Demo Simulator — State management.

Handles reading/writing the simulator's persistent state (stored as a Service
entity's description field) and checking runtime config flags.
"""

import json
import random

from .constants import (
    DEFAULT_BATCH_SIZE,
    DEFAULT_INTERVAL_SECONDS,
    MAX_ENTITIES_TOTAL,
    SCHEDULE_NAME,
    TASK_NAME,
)


def random_seed():
    """Generate a random seed from ic.time() (nanoseconds), with fallback."""
    try:
        import ic as _ic
        t = _ic.time()
        if t > 0:
            return t % 1_000_000
    except Exception:
        pass
    return random.randint(1, 999999)


def get_state():
    """Load or create the simulator state entity."""
    from ggg import Service

    state = Service["demo_simulator_state"]
    if not state:
        state = Service(
            service_id="demo_simulator_state",
            name="demo_simulator_state",
            description=json.dumps(_default_state_data()),
        )
    return state


def _default_state_data():
    return {
        "batch_number": 0,
        "total_users_created": 0,
        "total_orgs_created": 0,
        "total_proposals_created": 0,
        "total_transfers_created": 0,
        "total_disputes_created": 0,
        "total_funds_created": 0,
        "total_fiscal_periods_created": 0,
        "total_budgets_created": 0,
        "total_ledger_entries_created": 0,
        "seed": 0,
        "batch_size": DEFAULT_BATCH_SIZE,
        "max_entities": MAX_ENTITIES_TOTAL,
    }


def load_state_data(state):
    """Parse state JSON stored in the description field (2048 char limit)."""
    try:
        return json.loads(state.description) if state.description else {}
    except (json.JSONDecodeError, TypeError):
        return {}


def save_state_data(state, data):
    """Persist state JSON to the description field."""
    state.description = json.dumps(data)


def is_demo_mode_active():
    """Check if TEST_MODE and TEST_MODE_DEMO_DATA are both enabled in backend config."""
    try:
        import config
        test_mode = getattr(config, "TEST_MODE", False)
        demo_data = getattr(config, "TEST_MODE_DEMO_DATA", False)
        return bool(test_mode and demo_data)
    except ImportError:
        return False


def get_or_create_schedule():
    """Get the demo simulator schedule, creating it if missing.

    Idempotent: if a previous init failed midway (Task created but no Schedule),
    detects the orphaned state, cleans up, and retries.
    """
    from ggg import Call, Codex, Task, TaskSchedule, TaskStep

    schedule = TaskSchedule[SCHEDULE_NAME]
    if schedule:
        return schedule

    # Detect partial state from a previous failed init
    orphan_task = Task[TASK_NAME]
    if orphan_task:
        orphan_task.delete()

    codex = Codex(
        name="demo_simulator_batch",
        description="Executes one batch of demo data generation",
        code="from _runtime_ext_demo_simulator.entry import run_batch\nrun_batch('{}')",
    )

    call = Call(is_async=False, codex=codex)
    task = Task(name=TASK_NAME)
    TaskStep(call=call, status="pending", run_next_after=0, task=task)

    return TaskSchedule(
        name=SCHEDULE_NAME,
        task=task,
        repeat_every=DEFAULT_INTERVAL_SECONDS,
        run_at=0,
        last_run_at=0,
        disabled=True,
    )
