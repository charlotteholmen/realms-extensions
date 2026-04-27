"""
Demo Data Populator — Extension Entry Point.

Creates a recurring task that generates realistic demo entities every cycle,
producing a mixed batch of users, organizations, proposals, votes, transfers,
ledger entries, notifications, and budgets.

Admin frontend calls:
  start_populator  — create the task + schedule and kick off the first timer
  stop_populator   — disable the schedule (task stays, data stays)
  resume_populator — re-enable a stopped schedule
  get_status       — current running state, config, and PRNG seed
  get_stats        — cumulative entity counts
  update_config    — change interval, batch sizes, seed
  reset_populator  — delete the task and all tracked state
"""

import json
import traceback

from basilisk import ic
from ic_python_logging import get_logger

logger = get_logger("extensions.demo_data_populator")

TASK_NAME = "demo_data_populator"
STATE_KEY = "populator_state"
CONFIG_KEY = "populator_config"

# Defaults
DEFAULT_INTERVAL = 60  # seconds
DEFAULT_SEED = 42


# ── Helpers ──────────────────────────────────────────────────────────

def _get_state_class():
    """Return the ExtensionEntity-based state class (lazy, avoids import at module level)."""
    from core.extensions import create_extension_entity_class
    from ic_python_db import String

    ExtEntity = create_extension_entity_class("demo_data_populator")

    class PopulatorKV(ExtEntity):
        __alias__ = "key"
        key = String(max_length=64)
        value = String(max_length=4096)

    return PopulatorKV


def _load_json(kv_cls, key, default=None):
    obj = kv_cls[key]
    if obj and obj.value:
        try:
            return json.loads(obj.value)
        except Exception:
            pass
    return default if default is not None else {}


def _save_json(kv_cls, key, data):
    obj = kv_cls[key]
    payload = json.dumps(data)
    if obj:
        obj.value = payload
    else:
        kv_cls(key=key, value=payload)


def _find_task():
    from ggg import Task
    return Task[TASK_NAME]


def _find_schedule():
    from ggg import TaskSchedule
    return TaskSchedule[f"{TASK_NAME}_schedule"]


def _get_base_epoch():
    """Current IC time as epoch seconds — used as the 'now' anchor for date generation."""
    try:
        return int(ic.time() // 1_000_000_000)
    except Exception:
        return 1700000000


# ── Codex code that runs each cycle ─────────────────────────────────
# This is a self-contained string because it gets stored in a Codex entity
# and executed by the TaskManager in its own scope.

CYCLE_CODEX_CODE = '''
import json
from ic_python_logging import get_logger

logger = get_logger("demo_data_populator.cycle")

try:
    from core.extensions import create_extension_entity_class
    from ic_python_db import String

    _ExtEntity = create_extension_entity_class("demo_data_populator")

    class _KV(_ExtEntity):
        __alias__ = "key"
        key = String(max_length=64)
        value = String(max_length=4096)

    def _load(key, default=None):
        obj = _KV[key]
        if obj and obj.value:
            try:
                return json.loads(obj.value)
            except Exception:
                pass
        return default if default is not None else {}

    def _save(key, data):
        obj = _KV[key]
        payload = json.dumps(data)
        if obj:
            obj.value = payload
        else:
            _KV(key=key, value=payload)

    state = _load("populator_state", {
        "seed": 42,
        "cycle": 0,
        "prng_state": 0,
        "base_epoch": 1700000000,
        "totals": {},
    })
    config = _load("populator_config", {})
    batch_config = config.get("batch_config")

    from _runtime_ext_demo_data_populator.generators import run_cycle

    result = run_cycle(state, batch_config=batch_config)
    _save("populator_state", state)

    logger.info(f"Demo data cycle {state['cycle'] - 1} done: {result}")
except Exception as e:
    import traceback
    logger.error(f"Demo data populator cycle failed: {e}")
    logger.error(traceback.format_exc())
'''


# ── Extension API ────────────────────────────────────────────────────

def start_populator(args: str) -> str:
    """Create the recurring task and start the first timer.

    Accepts JSON: {"seed": int, "interval_seconds": int, "batch_config": {...}}
    """
    try:
        params = json.loads(args) if args else {}

        if _find_task():
            return json.dumps({
                "success": False,
                "error": "Populator is already running. Use stop/resume or reset first.",
            })

        seed = params.get("seed", DEFAULT_SEED)
        interval = params.get("interval_seconds", DEFAULT_INTERVAL)
        batch_config = params.get("batch_config")

        KV = _get_state_class()

        # Persist initial state
        _save_json(KV, STATE_KEY, {
            "seed": seed,
            "cycle": 0,
            "prng_state": 0,
            "base_epoch": _get_base_epoch(),
            "totals": {},
        })
        _save_json(KV, CONFIG_KEY, {
            "seed": seed,
            "interval_seconds": interval,
            "batch_config": batch_config or {},
        })

        # Create Task infrastructure
        from ic_basilisk_toolkit.entities import (
            Call as OSCall,
            Codex as OSCodex,
            Task as OSTask,
            TaskStep as OSTaskStep,
            TaskSchedule as OSTaskSchedule,
        )
        from ic_basilisk_toolkit.task_manager import _create_timer_callback
        from ic_basilisk_toolkit.status import TaskStatus

        codex = OSCodex(name=f"_{TASK_NAME}_codex")
        codex.code = CYCLE_CODEX_CODE

        call = OSCall(is_async=False, codex=codex)
        task = OSTask(name=TASK_NAME, status=TaskStatus.PENDING, step_to_execute=0)
        OSTaskStep(call=call, task=task, status=TaskStatus.PENDING, run_next_after=0)

        OSTaskSchedule(
            name=f"{TASK_NAME}_schedule",
            task=task,
            run_at=0,
            repeat_every=interval,
            disabled=False,
        )

        # Kick off first execution immediately
        steps = list(task.steps)
        if steps:
            first_step = steps[0]
            callback = _create_timer_callback(first_step, task)
            first_step.status = TaskStatus.RUNNING
            task.status = TaskStatus.RUNNING
            task.step_to_execute = 1
            ic.set_timer(0, callback)

        logger.info(
            f"Populator started: seed={seed}, interval={interval}s"
        )
        return json.dumps({
            "success": True,
            "message": f"Populator started (seed={seed}, interval={interval}s)",
            "seed": seed,
            "interval_seconds": interval,
        })

    except Exception as e:
        logger.error(f"start_populator failed: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def stop_populator(args: str) -> str:
    """Disable the populator schedule (keeps task + data)."""
    try:
        schedule = _find_schedule()
        if not schedule:
            return json.dumps({"success": False, "error": "Populator not found"})
        schedule.disabled = True
        logger.info("Populator stopped")
        return json.dumps({"success": True, "message": "Populator stopped"})
    except Exception as e:
        logger.error(f"stop_populator failed: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def resume_populator(args: str) -> str:
    """Re-enable the populator schedule."""
    try:
        schedule = _find_schedule()
        if not schedule:
            return json.dumps({"success": False, "error": "Populator not found"})

        task = _find_task()
        if not task:
            return json.dumps({"success": False, "error": "Task not found"})

        schedule.disabled = False
        schedule.last_run_at = 0  # trigger immediate re-evaluation

        from ic_basilisk_toolkit.entities import TaskStep as OSTaskStep
        from ic_basilisk_toolkit.task_manager import _create_timer_callback
        from ic_basilisk_toolkit.status import TaskStatus

        task.status = TaskStatus.PENDING
        task.step_to_execute = 0
        for step in task.steps:
            step.status = TaskStatus.PENDING

        steps = list(task.steps)
        if steps:
            first_step = steps[0]
            callback = _create_timer_callback(first_step, task)
            first_step.status = TaskStatus.RUNNING
            task.status = TaskStatus.RUNNING
            task.step_to_execute = 1
            ic.set_timer(0, callback)

        logger.info("Populator resumed")
        return json.dumps({"success": True, "message": "Populator resumed"})
    except Exception as e:
        logger.error(f"resume_populator failed: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_status(args: str) -> str:
    """Return current populator status."""
    try:
        KV = _get_state_class()
        state = _load_json(KV, STATE_KEY, {})
        config = _load_json(KV, CONFIG_KEY, {})

        task = _find_task()
        schedule = _find_schedule()

        running = False
        if task and schedule:
            running = not schedule.disabled and task.status in ("running", "pending")

        return json.dumps({
            "success": True,
            "data": {
                "running": running,
                "task_exists": task is not None,
                "schedule_disabled": schedule.disabled if schedule else None,
                "cycle": state.get("cycle", 0),
                "seed": config.get("seed", DEFAULT_SEED),
                "interval_seconds": config.get("interval_seconds", DEFAULT_INTERVAL),
                "batch_config": config.get("batch_config", {}),
                "totals": state.get("totals", {}),
            },
        })
    except Exception as e:
        logger.error(f"get_status failed: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_stats(args: str) -> str:
    """Return cumulative entity counts and live entity counts."""
    try:
        KV = _get_state_class()
        state = _load_json(KV, STATE_KEY, {})

        live_counts = {}
        try:
            from ggg import (
                User, Human, Member, Organization, Proposal, Vote,
                Transfer, LedgerEntry, Notification, Budget,
                Fund, FiscalPeriod,
            )
            for cls_name, cls in [
                ("users", User), ("humans", Human), ("members", Member),
                ("organizations", Organization), ("proposals", Proposal),
                ("votes", Vote), ("transfers", Transfer),
                ("ledger_entries", LedgerEntry), ("notifications", Notification),
                ("budgets", Budget), ("funds", Fund),
                ("fiscal_periods", FiscalPeriod),
            ]:
                try:
                    live_counts[cls_name] = cls.max_id()
                except Exception:
                    live_counts[cls_name] = len(list(cls.instances()))
        except Exception as e:
            logger.warning(f"Could not count live entities: {e}")

        return json.dumps({
            "success": True,
            "data": {
                "cycle": state.get("cycle", 0),
                "generated_totals": state.get("totals", {}),
                "live_counts": live_counts,
            },
        })
    except Exception as e:
        logger.error(f"get_stats failed: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def update_config(args: str) -> str:
    """Update populator configuration (seed, interval, batch sizes).

    Accepts JSON: {"seed": int, "interval_seconds": int, "batch_config": {...}}
    Only provided keys are updated.
    """
    try:
        params = json.loads(args) if args else {}
        KV = _get_state_class()
        config = _load_json(KV, CONFIG_KEY, {
            "seed": DEFAULT_SEED,
            "interval_seconds": DEFAULT_INTERVAL,
            "batch_config": {},
        })

        if "seed" in params:
            config["seed"] = params["seed"]
            # Reset PRNG state so new seed takes effect
            state = _load_json(KV, STATE_KEY, {})
            state["seed"] = params["seed"]
            state["prng_state"] = 0
            _save_json(KV, STATE_KEY, state)

        if "interval_seconds" in params:
            config["interval_seconds"] = params["interval_seconds"]
            schedule = _find_schedule()
            if schedule:
                schedule.repeat_every = params["interval_seconds"]

        if "batch_config" in params:
            config["batch_config"] = params["batch_config"]

        _save_json(KV, CONFIG_KEY, config)

        logger.info(f"Config updated: {config}")
        return json.dumps({"success": True, "config": config})
    except Exception as e:
        logger.error(f"update_config failed: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def reset_populator(args: str) -> str:
    """Delete the populator task and clear state. Generated entities remain."""
    try:
        task = _find_task()
        if task:
            if hasattr(task, "schedules"):
                for s in list(task.schedules):
                    s.delete()
            if hasattr(task, "executions"):
                for ex in list(task.executions):
                    ex.delete()
            if hasattr(task, "steps"):
                for step in list(task.steps):
                    if hasattr(step, "call") and step.call:
                        if hasattr(step.call, "codex") and step.call.codex:
                            step.call.codex.delete()
                        step.call.delete()
                    step.delete()
            task.delete()

        KV = _get_state_class()
        for key in [STATE_KEY, CONFIG_KEY]:
            obj = KV[key]
            if obj:
                obj.delete()

        logger.info("Populator reset")
        return json.dumps({
            "success": True,
            "message": "Populator reset. Generated entities remain in the realm.",
        })
    except Exception as e:
        logger.error(f"reset_populator failed: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})
