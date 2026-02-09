"""
Task Monitor Backend Extension Entry Point
Provides task monitoring and management operations for administrators.
"""

import json
import traceback
from typing import Any, Dict, List

import ggg
from core.task_manager import TaskManager
from ggg import Codex, Task, TaskExecution, TaskSchedule
from kybra import ic
from kybra_simple_logging import get_logger

logger = get_logger("extensions.task_monitor")

DEFAULT_PAGE_SIZE = 10


def extension_sync_call(method_name: str, args: dict):
    """
    Synchronous extension API calls for task monitoring operations
    """
    methods = {
        "get_all_tasks": get_all_tasks,
        "get_task_details": get_task_details,
        "get_task_executions": get_task_executions,
        "get_execution_logs": get_execution_logs,
        "toggle_schedule": toggle_schedule,
        "run_task_now": run_task_now,
        "delete_task": delete_task,
        "get_task_logs": get_task_logs,
    }

    if method_name not in methods:
        return json.dumps({"success": False, "error": f"Unknown method: {method_name}"})

    function = methods[method_name]

    try:
        return function(args)
    except Exception as e:
        logger.error(f"Error calling {method_name}: {str(e)}")
        logger.error(traceback.format_exc())
        return json.dumps(
            {"success": False, "error": f"Error calling {method_name}: {str(e)}"}
        )


def get_all_tasks(args: str = "{}"):
    """
    Get a page of tasks with their schedules and status.
    Uses load_some for pagination to stay within IC instruction limits.
    Skips temporary _shell_* tasks.
    """
    try:
        if isinstance(args, str):
            args = json.loads(args) if args else {}
        show_shell = args.get("show_shell", False)
        from_id = int(args.get("from_id", 1))
        page_size = int(args.get("page_size", DEFAULT_PAGE_SIZE))

        max_id = Task.max_id()

        # Load one page of tasks, skipping shell tasks
        # We may need to load extra batches if shell tasks are filtered out
        tasks = []
        current_from = from_id
        attempts = 0
        while len(tasks) < page_size and current_from <= max_id and attempts < 10:
            batch = Task.load_some(from_id=current_from, count=page_size)
            if not batch:
                break
            for task in batch:
                if not show_shell and hasattr(task, "name") and task.name.startswith("Shell Task _shell_"):
                    continue

                task_id = str(task._id)
                task_data = {
                    "_id": task_id,
                    "name": task.name,
                    "status": task.status if hasattr(task, "status") else "unknown",
                    "metadata": task.metadata if hasattr(task, "metadata") else "",
                    "step_to_execute": (
                        task.step_to_execute if hasattr(task, "step_to_execute") else 0
                    ),
                    "total_steps": len(list(task.steps)) if hasattr(task, "steps") else 0,
                    "schedules": [],
                    "created_at": task.created_at if hasattr(task, "created_at") else None,
                    "updated_at": task.updated_at if hasattr(task, "updated_at") else None,
                }

                if hasattr(task, "schedules"):
                    for schedule in task.schedules:
                        task_data["schedules"].append(
                            {
                                "_id": str(schedule._id),
                                "name": schedule.name,
                                "disabled": schedule.disabled,
                                "run_at": schedule.run_at,
                                "repeat_every": schedule.repeat_every,
                                "last_run_at": schedule.last_run_at,
                            }
                        )

                tasks.append(task_data)
                if len(tasks) >= page_size:
                    break

            current_from = int(batch[-1]._id) + 1
            attempts += 1

        # Determine next_from_id for the frontend to request the next page
        next_from_id = current_from if current_from <= max_id else None

        return json.dumps({
            "success": True,
            "tasks": tasks,
            "count": len(tasks),
            "max_id": max_id,
            "next_from_id": next_from_id,
            "has_more": next_from_id is not None,
        })
    except Exception as e:
        logger.error(f"Error getting tasks: {str(e)}")
        logger.error(traceback.format_exc())
        return json.dumps({"success": False, "error": str(e)})


def get_task_details(args):
    """
    Get detailed information about a specific task including steps and codex
    """
    try:
        logger.info("get_task_details: START")
        # Parse args if it's a string
        if isinstance(args, str):
            args = json.loads(args)
        task_id = args.get("task_id")
        if not task_id:
            return json.dumps({"success": False, "error": "task_id is required"})

        logger.info(f"get_task_details: loading task {task_id}")
        # Find task
        task = Task.load(task_id)
        if not task:
            return json.dumps({"success": False, "error": f"Task {task_id} not found"})
        logger.info(f"get_task_details: task loaded: {task.name}")

        # Build detailed task data
        task_data = {
            "_id": str(task._id),
            "name": task.name,
            "status": task.status if hasattr(task, "status") else "unknown",
            "metadata": task.metadata if hasattr(task, "metadata") else "",
            "step_to_execute": (
                task.step_to_execute if hasattr(task, "step_to_execute") else 0
            ),
            "steps": [],
            "schedules": [],
            "created_at": task.created_at if hasattr(task, "created_at") else None,
            "updated_at": task.updated_at if hasattr(task, "updated_at") else None,
        }
        logger.info("get_task_details: basic data built")

        # Get steps with their calls and codex
        logger.info("get_task_details: loading steps")
        if hasattr(task, "steps"):
            for step in task.steps:
                step_data = {
                    "_id": str(step._id),
                    "status": step.status if hasattr(step, "status") else "pending",
                    "run_next_after": (
                        step.run_next_after if hasattr(step, "run_next_after") else 0
                    ),
                    "codex": None,
                }

                # Get codex information
                if hasattr(step, "call") and step.call:
                    call = step.call
                    if hasattr(call, "codex") and call.codex:
                        codex = call.codex
                        step_data["codex"] = {
                            "_id": str(codex._id),
                            "name": codex.name,
                            "code": codex.code if hasattr(codex, "code") else "",
                            "description": (
                                codex.description
                                if hasattr(codex, "description")
                                else ""
                            ),
                        }
                    step_data["is_async"] = (
                        call.is_async if hasattr(call, "is_async") else False
                    )

                task_data["steps"].append(step_data)
        logger.info(f"get_task_details: {len(task_data['steps'])} steps loaded")

        # Get schedules
        logger.info("get_task_details: loading schedules")
        if hasattr(task, "schedules"):
            for schedule in task.schedules:
                task_data["schedules"].append(
                    {
                        "_id": str(schedule._id),
                        "name": schedule.name,
                        "disabled": schedule.disabled,
                        "run_at": schedule.run_at,
                        "repeat_every": schedule.repeat_every,
                        "last_run_at": schedule.last_run_at,
                    }
                )

        # Get executions with pagination using load_some
        # Load a page of TaskExecution filtered by task_id
        logger.info("get_task_details: starting execution scan")
        exec_from_id = int(args.get("exec_from_id", 1))
        exec_page_size = int(args.get("exec_page_size", DEFAULT_PAGE_SIZE))
        task_data["executions"] = []
        task_data["exec_max_id"] = TaskExecution.max_id()
        logger.info(f"get_task_details: exec_max_id={task_data['exec_max_id']}, exec_from_id={exec_from_id}")

        execs_found = []
        current_from = exec_from_id
        attempts = 0
        while len(execs_found) < exec_page_size and current_from <= task_data["exec_max_id"] and attempts < 20:
            logger.info(f"get_task_details: exec scan attempt={attempts}, from={current_from}, found={len(execs_found)}")
            batch = TaskExecution.load_some(from_id=current_from, count=exec_page_size)
            if not batch:
                logger.info("get_task_details: empty batch, stopping")
                break
            logger.info(f"get_task_details: loaded batch of {len(batch)}, ids {batch[0]._id}-{batch[-1]._id}")
            for exc in batch:
                if hasattr(exc, "task") and exc.task and str(exc.task._id) == task_id:
                    execs_found.append(exc)
                    if len(execs_found) >= exec_page_size:
                        break
            current_from = int(batch[-1]._id) + 1
            attempts += 1

        logger.info(f"get_task_details: exec scan done, found={len(execs_found)}, attempts={attempts}")
        task_data["exec_next_from_id"] = current_from if current_from <= task_data["exec_max_id"] else None
        task_data["exec_has_more"] = task_data["exec_next_from_id"] is not None

        for execution in execs_found:
            exec_data = {
                "_id": str(execution._id),
                "name": execution.name,
                "status": execution.status,
                "result": execution.result if hasattr(execution, "result") else "",
                "created_at": execution.created_at if hasattr(execution, "created_at") else None,
                "updated_at": execution.updated_at if hasattr(execution, "updated_at") else None,
                "logger_name": execution._logger_name() if hasattr(execution, "_logger_name") else "",
            }
            task_data["executions"].append(exec_data)

        logger.info("get_task_details: DONE, returning response")
        return json.dumps({"success": True, "task": task_data})
    except Exception as e:
        logger.error(f"Error getting task details: {str(e)}")
        logger.error(traceback.format_exc())
        return json.dumps({"success": False, "error": str(e)})


def get_task_executions(args):
    """
    Get execution history for a specific task
    """
    try:
        # Parse args if it's a string
        if isinstance(args, str):
            args = json.loads(args)
        task_id = args.get("task_id")
        limit = args.get("limit", 50)

        if not task_id:
            return json.dumps({"success": False, "error": "task_id is required"})

        # Find task
        task = Task.load(task_id)
        if not task:
            return json.dumps({"success": False, "error": f"Task {task_id} not found"})

        executions = []
        if hasattr(task, "executions"):
            for execution in list(task.executions)[:limit]:
                executions.append(
                    {
                        "_id": str(execution._id),
                        "name": execution.name,
                        "status": execution.status,
                        "logs": execution.logs if hasattr(execution, "logs") else "",
                        "result": (
                            execution.result if hasattr(execution, "result") else ""
                        ),
                        "created_at": (
                            execution.created_at
                            if hasattr(execution, "created_at")
                            else None
                        ),
                        "updated_at": (
                            execution.updated_at
                            if hasattr(execution, "updated_at")
                            else None
                        ),
                    }
                )

        return json.dumps(
            {
                "success": True,
                "executions": executions,
                "count": len(executions),
                "task_name": task.name,
            }
        )
    except Exception as e:
        logger.error(f"Error getting task executions: {str(e)}")
        logger.error(traceback.format_exc())
        return json.dumps({"success": False, "error": str(e)})


def get_execution_logs(args):
    """
    Get logs for a specific task execution by its logger_name
    """
    try:
        if isinstance(args, str):
            args = json.loads(args)
        logger_name = args.get("logger_name")
        limit = int(args.get("limit", 200))

        if not logger_name:
            return json.dumps({"success": False, "error": "logger_name is required"})

        from kybra_simple_logging import get_logs

        all_logs = get_logs(max_entries=limit * 10)
        exec_logs = [
            log for log in all_logs
            if log.get("logger_name", "") == logger_name
        ][:limit]

        raw_lines = []
        for log in exec_logs:
            timestamp = log.get("timestamp", 0)
            from datetime import datetime
            try:
                dt = datetime.fromtimestamp(timestamp / 1_000_000_000)
                time_str = dt.strftime("%Y-%m-%d %H:%M:%S")
            except Exception:
                time_str = str(timestamp)
            level = log.get("level", "INFO")
            message = log.get("message", "")
            raw_lines.append(f"[{time_str}] [{level}] {message}")

        return json.dumps({
            "success": True,
            "logs": "\n".join(raw_lines),
            "count": len(exec_logs),
            "logger_name": logger_name,
        })
    except Exception as e:
        logger.error(f"Error getting execution logs: {str(e)}")
        logger.error(traceback.format_exc())
        return json.dumps({"success": False, "error": str(e)})


def toggle_schedule(args):
    """
    Enable or disable a task schedule
    """
    try:
        # Parse args if it's a string
        if isinstance(args, str):
            args = json.loads(args)
        schedule_id = args.get("schedule_id")
        disabled = args.get("disabled", True)

        if not schedule_id:
            return json.dumps({"success": False, "error": "schedule_id is required"})

        # Find schedule
        schedule = TaskSchedule.load(schedule_id)
        if not schedule:
            return json.dumps(
                {"success": False, "error": f"Schedule {schedule_id} not found"}
            )

        schedule.disabled = disabled
        logger.info(
            f"Schedule {schedule.name} ({'disabled' if disabled else 'enabled'})"
        )

        return json.dumps(
            {
                "success": True,
                "message": f"Schedule {'disabled' if disabled else 'enabled'}",
                "schedule_id": str(schedule._id),
                "disabled": disabled,
            }
        )
    except Exception as e:
        logger.error(f"Error toggling schedule: {str(e)}")
        logger.error(traceback.format_exc())
        return json.dumps({"success": False, "error": str(e)})


def run_task_now(args):
    """
    Immediately execute a task by triggering the task manager
    """
    try:
        # Parse args if it's a string
        if isinstance(args, str):
            args = json.loads(args)
        task_id = args.get("task_id")

        if not task_id:
            return json.dumps({"success": False, "error": "task_id is required"})

        # Find task
        task = Task.load(task_id)
        if not task:
            return json.dumps({"success": False, "error": f"Task {task_id} not found"})

        # Reset task to pending state
        if hasattr(task, "status"):
            task.status = "pending"
        if hasattr(task, "step_to_execute"):
            task.step_to_execute = 0

        # Reset step statuses
        if hasattr(task, "steps"):
            for step in task.steps:
                if hasattr(step, "status"):
                    step.status = "pending"

        # Trigger task manager
        manager = TaskManager()
        manager.add_task(task)
        manager.run()

        logger.info(f"Task {task.name} triggered manually")

        return json.dumps(
            {
                "success": True,
                "message": f"Task {task.name} started",
                "task_id": str(task._id),
            }
        )
    except Exception as e:
        logger.error(f"Error running task: {str(e)}")
        logger.error(traceback.format_exc())
        return json.dumps({"success": False, "error": str(e)})


def delete_task(args):
    """
    Delete a task and its associated schedules and executions
    """
    try:
        # Parse args if it's a string
        if isinstance(args, str):
            args = json.loads(args)
        task_id = args.get("task_id")

        if not task_id:
            return json.dumps({"success": False, "error": "task_id is required"})

        # Find task
        task = Task.load(task_id)
        if not task:
            return json.dumps({"success": False, "error": f"Task {task_id} not found"})

        task_name = task.name

        # Delete associated schedules
        if hasattr(task, "schedules"):
            for schedule in list(task.schedules):
                schedule.delete()

        # Delete associated executions
        if hasattr(task, "executions"):
            for execution in list(task.executions):
                execution.delete()

        # Delete task steps
        if hasattr(task, "steps"):
            for step in list(task.steps):
                if hasattr(step, "call") and step.call:
                    step.call.delete()
                step.delete()

        # Delete task
        task.delete()

        logger.info(f"Task {task_name} deleted")

        return json.dumps(
            {
                "success": True,
                "message": f"Task {task_name} deleted successfully",
                "task_id": task_id,
            }
        )
    except Exception as e:
        logger.error(f"Error deleting task: {str(e)}")
        logger.error(traceback.format_exc())
        return json.dumps({"success": False, "error": str(e)})


def get_task_logs(args):
    """
    Get recent logs from kybra-simple-logging for a specific task
    """
    try:
        # Parse args if it's a string
        if isinstance(args, str):
            args = json.loads(args)
        task_id = args.get("task_id")
        limit = int(args.get("limit", 100))

        if not task_id:
            return json.dumps({"success": False, "error": "task_id is required"})

        # Import the logging module to access logs
        from kybra_simple_logging import get_logs

        # Get logs for this task - logs are stored with pattern task_{task_id}_{execution_id}
        # We need to search for all logs that start with task_{task_id}_
        logger_prefix = f"task_{task_id}_"
        
        # Get all logs and filter by prefix
        # get_logs signature: (from_entry, max_entries, min_level, logger_name)
        all_logs = get_logs(max_entries=limit * 10)  # Get more to filter
        task_logs = [
            log for log in all_logs 
            if log.get("logger_name", "").startswith(logger_prefix)
        ][:limit]

        # Format as raw logs string for display
        raw_lines = []
        for log in task_logs:
            timestamp = log.get("timestamp", 0)
            # Convert nanoseconds to readable format
            from datetime import datetime
            try:
                dt = datetime.fromtimestamp(timestamp / 1_000_000_000)
                time_str = dt.strftime("%Y-%m-%d %H:%M:%S")
            except:
                time_str = str(timestamp)
            level = log.get("level", "INFO")
            message = log.get("message", "")
            raw_lines.append(f"[{time_str}] [{level}] {message}")
        
        raw_logs = "\n".join(raw_lines)

        return json.dumps({
            "success": True, 
            "logs": raw_logs,
            "parsed_logs": task_logs,
            "count": len(task_logs)
        })
    except Exception as e:
        # Fallback if get_logs doesn't exist
        logger.error(f"Error getting task logs: {traceback.format_exc()}")
        return json.dumps(
            {
                "success": False,
                "error": "Log retrieval not available",
                "message": "Check TaskExecution records for execution logs",
            }
        )


def extension_async_call(method_name: str, args: dict):
    """
    Async extension API calls (reserved for future use)
    """
    return json.dumps({"success": False, "error": "No async methods available"})
