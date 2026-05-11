"""
Demo Simulator Extension — API Entry Point

Thin dispatch layer that wires the frontend API and canister lifecycle hooks
to the generator and state modules.
"""

import json
import random
import traceback

from ic_python_logging import get_logger

from .constants import DEFAULT_BATCH_SIZE, DEFAULT_INTERVAL_SECONDS, MAX_ENTITIES_TOTAL, SCHEDULE_NAME
from .generators import (
    generate_dispute_batch,
    generate_org_batch,
    generate_proposal_batch,
    generate_transfer_batch,
    generate_user_batch,
)
from .state import (
    get_or_create_schedule,
    get_state,
    is_demo_mode_active,
    load_state_data,
    save_state_data,
)

logger = get_logger("extensions.demo_simulator")


# ── Core batch runner ────────────────────────────────────────────────────────

def run_batch(args: str = "{}"):
    """Execute one batch of demo data generation.

    Called by the TaskSchedule every interval. Each batch creates a mix of
    entity types to simulate realistic activity over time.
    """
    from ggg import TaskSchedule

    state = get_state()
    state_data = load_state_data(state)
    batch_size = state_data.get("batch_size", DEFAULT_BATCH_SIZE)
    max_entities = state_data.get("max_entities", MAX_ENTITIES_TOTAL)
    batch_number = state_data.get("batch_number", 0)

    total_created = sum([
        state_data.get("total_users_created", 0),
        state_data.get("total_orgs_created", 0),
        state_data.get("total_proposals_created", 0),
        state_data.get("total_transfers_created", 0),
        state_data.get("total_disputes_created", 0),
    ])

    if total_created >= max_entities:
        logger.info(f"Demo simulator reached max entities ({max_entities}), pausing.")
        schedule = TaskSchedule[SCHEDULE_NAME]
        if schedule:
            schedule.disabled = True
        return json.dumps({"status": "paused", "reason": "max_entities_reached", "total": total_created})

    batch_type = batch_number % 5
    results = {}

    try:
        if batch_type == 0:
            results["users"] = generate_user_batch(state_data, batch_size)
        elif batch_type == 1:
            results["organizations"] = generate_org_batch(state_data, max(1, batch_size // 2))
        elif batch_type == 2:
            results["proposals"] = generate_proposal_batch(state_data, max(1, batch_size // 2))
        elif batch_type == 3:
            results["transfers"] = generate_transfer_batch(state_data, batch_size)
        elif batch_type == 4:
            results["disputes"] = generate_dispute_batch(state_data, max(1, batch_size // 3))
    except Exception as e:
        logger.error(f"Demo simulator batch {batch_number} failed: {e}")
        logger.error(traceback.format_exc())
        results["error"] = str(e)

    state_data["batch_number"] = batch_number + 1
    save_state_data(state, state_data)

    logger.info(f"Demo simulator batch {batch_number + 1} complete: {results}")
    return json.dumps({"status": "ok", "batch": batch_number + 1, "created": results})


# ── Extension API ────────────────────────────────────────────────────────────

def extension_sync_call(method_name: str, args: dict):
    """Synchronous extension API — called by the extension runtime."""
    methods = {
        "initialize": initialize,
        "get_status": get_status,
        "toggle": toggle,
        "update_config": update_config,
        "set_seed": set_seed,
        "reset": reset,
        "run_once": run_once,
    }

    if method_name not in methods:
        return json.dumps({"success": False, "error": f"Unknown method: {method_name}"})

    try:
        return methods[method_name](args)
    except Exception as e:
        logger.error(f"demo_simulator.{method_name} error: {e}")
        logger.error(traceback.format_exc())
        return json.dumps({"success": False, "error": str(e)})


def initialize(args):
    """Called by the canister on every start/upgrade.

    Creates the TaskSchedule if needed and auto-enables it when
    TEST_MODE + TEST_MODE_DEMO_DATA are both True.  Also restarts
    the TaskManager so that IC timers are registered for the schedule
    (timers are only set during canister init or explicit restart).
    """
    schedule = get_or_create_schedule()

    if is_demo_mode_active():
        schedule.disabled = False
        logger.info("Demo simulator auto-activated (TEST_MODE + TEST_MODE_DEMO_DATA = true)")
    else:
        logger.info("Demo simulator initialized (schedule disabled — demo mode flags not set)")

    _restart_task_manager()

    return json.dumps({
        "success": True,
        "auto_activated": is_demo_mode_active(),
        "running": not schedule.disabled,
    })


def _restart_task_manager():
    """Re-initialize the TaskManager so IC timers are set for our schedule."""
    try:
        from ggg import Call, Task, TaskSchedule, TaskStep
        from core.task_manager import TaskManager

        list(Task.instances())
        list(Call.instances())
        list(TaskStep.instances())
        list(TaskSchedule.instances())

        manager = TaskManager()
        for t in Task.instances():
            if t.status and t.status != "completed":
                t.status = "pending"
                t.step_to_execute = 0
                for step in t.steps:
                    step.status = "pending"
                    step.timer_id = None
            manager.add_task(t)
        manager.run()
        logger.info("TaskManager restarted — demo_simulator schedule registered")
    except Exception as e:
        logger.error(f"Failed to restart TaskManager: {e}\n{traceback.format_exc()}")


def get_status(args):
    """Return current simulator status: running/paused, stats, config."""
    from ggg import TaskSchedule

    state = get_state()
    state_data = load_state_data(state)

    schedule = TaskSchedule[SCHEDULE_NAME]
    is_running = bool(schedule and not schedule.disabled)
    interval = schedule.repeat_every if schedule else DEFAULT_INTERVAL_SECONDS

    return json.dumps({
        "success": True,
        "running": is_running,
        "interval_seconds": interval,
        "batch_size": state_data.get("batch_size", DEFAULT_BATCH_SIZE),
        "max_entities": state_data.get("max_entities", MAX_ENTITIES_TOTAL),
        "batch_number": state_data.get("batch_number", 0),
        "seed": state_data.get("seed", 0),
        "stats": {
            "users": state_data.get("total_users_created", 0),
            "organizations": state_data.get("total_orgs_created", 0),
            "proposals": state_data.get("total_proposals_created", 0),
            "transfers": state_data.get("total_transfers_created", 0),
            "disputes": state_data.get("total_disputes_created", 0),
        },
        "demo_mode_active": is_demo_mode_active(),
    })


def toggle(args):
    """Enable or disable the simulator schedule."""
    from ggg import TaskSchedule

    if isinstance(args, str):
        args = json.loads(args) if args else {}

    enabled = args.get("enabled")
    if enabled is None:
        schedule = TaskSchedule[SCHEDULE_NAME]
        enabled = bool(schedule and schedule.disabled)

    schedule = get_or_create_schedule()
    schedule.disabled = not enabled

    action = "started" if enabled else "stopped"
    logger.info(f"Demo simulator {action}")
    return json.dumps({"success": True, "running": enabled, "action": action})


def update_config(args):
    """Update simulator parameters (interval, batch_size, max_entities)."""
    if isinstance(args, str):
        args = json.loads(args) if args else {}

    state = get_state()
    state_data = load_state_data(state)

    if "batch_size" in args:
        state_data["batch_size"] = max(1, min(20, int(args["batch_size"])))
    if "max_entities" in args:
        state_data["max_entities"] = max(10, int(args["max_entities"]))
    if "seed" in args:
        state_data["seed"] = int(args["seed"])

    save_state_data(state, state_data)

    if "interval_seconds" in args:
        schedule = get_or_create_schedule()
        schedule.repeat_every = max(10, int(args["interval_seconds"]))

    return json.dumps({"success": True, "config": state_data})


def set_seed(args):
    """Set the random seed. When set, all subsequent batches are deterministic.

    Pass {"seed": <integer>} to lock the seed, or {"seed": null} to randomize.
    """
    if isinstance(args, str):
        args = json.loads(args) if args else {}

    state = get_state()
    state_data = load_state_data(state)

    seed_value = args.get("seed")
    if seed_value is None:
        state_data["seed"] = random.randint(1, 999999)
    else:
        state_data["seed"] = int(seed_value)

    save_state_data(state, state_data)
    return json.dumps({"success": True, "seed": state_data["seed"]})


def reset(args):
    """Reset all demo data counters (does not delete created entities).

    Generates a new random seed unless one was explicitly set by the user.
    """
    if isinstance(args, str):
        args = json.loads(args) if args else {}

    state = get_state()
    state_data = load_state_data(state)

    keep_seed = args.get("keep_seed", False)
    old_seed = state_data.get("seed", 0)

    state_data["batch_number"] = 0
    state_data["total_users_created"] = 0
    state_data["total_orgs_created"] = 0
    state_data["total_proposals_created"] = 0
    state_data["total_transfers_created"] = 0
    state_data["total_disputes_created"] = 0

    if not keep_seed:
        state_data["seed"] = random.randint(1, 999999)

    save_state_data(state, state_data)
    return json.dumps({"success": True, "action": "reset", "seed": state_data["seed"]})


def run_once(args):
    """Manually trigger a single batch (regardless of schedule state)."""
    return run_batch(json.dumps(args) if isinstance(args, dict) else args or "{}")
