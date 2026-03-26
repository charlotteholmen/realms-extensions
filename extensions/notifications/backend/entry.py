import json
import traceback
from typing import Any, Dict, List

from ggg import Notification, User
from ic_python_logging import get_logger

try:
    from _cdk import ic as _ic
except ImportError:
    _ic = None

logger = get_logger("notifications.entry")


def _days_in_month(year: int, month: int) -> int:
    """Return number of days in a given month (handles leap years)."""
    if month in (1, 3, 5, 7, 8, 10, 12):
        return 31
    if month in (4, 6, 9, 11):
        return 30
    # February
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        return 29
    return 28


def _parse_timestamp_str_to_ms(ts_str: str) -> int:
    """Parse a timestamp string like '2026-03-24 21:57:23.456' to epoch ms.

    Pure arithmetic — no datetime/calendar imports needed (IC Python compat).
    """
    try:
        parts = ts_str.strip().split(" ")
        date_part = parts[0]  # YYYY-MM-DD
        time_part = parts[1] if len(parts) > 1 else "00:00:00"

        ymd = date_part.split("-")
        year, month, day = int(ymd[0]), int(ymd[1]), int(ymd[2])

        millis = 0
        if "." in time_part:
            time_part, frac = time_part.split(".", 1)
            millis = int(frac.ljust(3, "0")[:3])

        hms = time_part.split(":")
        hour = int(hms[0]) if len(hms) > 0 else 0
        minute = int(hms[1]) if len(hms) > 1 else 0
        second = int(hms[2]) if len(hms) > 2 else 0

        # Days from epoch (1970-01-01) to start of year
        days = 0
        for y in range(1970, year):
            days += 366 if ((y % 4 == 0 and y % 100 != 0) or (y % 400 == 0)) else 365
        for m in range(1, month):
            days += _days_in_month(year, m)
        days += day - 1

        epoch_s = days * 86400 + hour * 3600 + minute * 60 + second
        return epoch_s * 1000 + millis
    except Exception:
        return 0


def _ic_time_ms() -> int:
    """Get current IC canister time in milliseconds (from ic.time() nanoseconds)."""
    try:
        if _ic is not None:
            return _ic.time() // 1_000_000
    except Exception:
        pass
    return 0


def _get_timestamp_ms(notification) -> int:
    """Extract timestamp in milliseconds from a Notification entity.

    TimestampedMixin's SystemTime is broken on IC (returns epoch-0).
    Strategy: try raw attr → parse stored string → fallback to ic.time().
    """
    # 1. Raw internal attr (only non-zero if entity was just created in this call)
    raw = getattr(notification, "_timestamp_created", 0) or 0
    if raw:
        return raw

    # 2. Parse the serialized timestamp_created string
    for attr in ("timestamp_created", "timestamp_updated"):
        ts_str = getattr(notification, attr, None)
        if ts_str and ts_str != "None":
            result = _parse_timestamp_str_to_ms(ts_str)
            if result:
                return result

    # 3. Fallback: use current IC canister time (better than showing nothing)
    return _ic_time_ms()


def _notification_to_dict(notification: Notification) -> Dict[str, Any]:
    """Convert Notification entity to dictionary format"""
    timestamp_ms = _get_timestamp_ms(notification)

    return {
        "id": notification._id,
        "topic": getattr(notification, "topic", "") or "",
        "title": getattr(notification, "title", "") or "",
        "message": getattr(notification, "message", "") or "",
        "timestamp_ms": timestamp_ms,
        "read": getattr(notification, "read", False) or False,
        "icon": getattr(notification, "icon", "bell") or "bell",
        "href": getattr(notification, "href", "/notifications") or "/notifications",
        "color": getattr(notification, "color", "blue") or "blue",
    }


def get_notifications(args: str = "{}"):
    """Get all notifications for the current user"""
    try:
        logger.info("Fetching notifications")

        params = json.loads(args) if args else {}
        user_id = params.get("user_id")
        logger.info(f"Looking for notifications for user_id: {user_id}")

        # Get all notifications from database
        notifications = Notification.instances()
        logger.info(f"Total notifications in DB: {len(notifications)}")

        # Filter by user if user_id provided (principal string)
        if user_id:
            filtered = []
            for n in notifications:
                try:
                    u = n.user
                    if not u:
                        logger.debug(f"Notification {n._id}: no user attached, skipping")
                        continue
                    # User.id stores the principal string; also check _id as fallback
                    if (getattr(u, "id", None) == user_id or
                            getattr(u, "_id", None) == user_id):
                        filtered.append(n)
                    else:
                        logger.debug(f"Notification {n._id}: user {getattr(u, 'id', '?')} != {user_id}")
                except Exception as exc:
                    logger.warning(f"Notification {n._id}: error resolving user: {exc}")
            notifications = filtered

        # Convert to dict format
        notifications_list = [_notification_to_dict(n) for n in notifications]

        # Sort by timestamp, most recent first
        notifications_list.sort(key=lambda x: x["timestamp_ms"], reverse=True)

        unread_count = sum(1 for n in notifications if not n.read)

        response = {
            "notifications": notifications_list,
            "unread_count": unread_count,
            "total_count": len(notifications_list),
        }

        logger.info(
            f"Returning {len(notifications_list)} notifications, {unread_count} unread"
        )
        return json.dumps(response)

    except Exception as e:
        error_msg = f"Error fetching notifications: {e}\n{traceback.format_exc()}"
        logger.error(error_msg)
        return json.dumps({"error": error_msg, "notifications": [], "unread_count": 0})


def mark_as_read(args: str):
    """Mark a notification as read or unread (toggle)"""
    try:
        args_dict = json.loads(args) if args else {}
        notification_id = args_dict.get("id")
        # Allow explicit read value, default to True for backwards compatibility
        read_value = args_dict.get("read", True)

        if not notification_id:
            return json.dumps({"error": "id is required"})

        logger.info(f"Setting notification {notification_id} read={read_value}")

        # Find notification in database by _id
        notification = Notification.load(str(notification_id))

        if notification:
            notification.read = read_value
            logger.info(f"Successfully set notification {notification_id} read={read_value}")
            return json.dumps({"success": True, "id": notification_id, "read": read_value})

        logger.warning(f"Notification {notification_id} not found")
        return json.dumps({"error": f"Notification {notification_id} not found"})

    except Exception as e:
        error_msg = f"Error updating notification read status: {e}\n{traceback.format_exc()}"
        logger.error(error_msg)
        return json.dumps({"error": error_msg})


def delete_notification(args: str):
    """Delete a notification by ID"""
    try:
        args_dict = json.loads(args) if args else {}
        notification_id = args_dict.get("id")

        if not notification_id:
            return json.dumps({"error": "id is required"})

        logger.info(f"Deleting notification {notification_id}")

        notification = Notification.load(str(notification_id))
        if notification:
            notification.delete()
            logger.info(f"Successfully deleted notification {notification_id}")
            return json.dumps({"success": True, "id": notification_id})

        logger.warning(f"Notification {notification_id} not found")
        return json.dumps({"error": f"Notification {notification_id} not found"})

    except Exception as e:
        error_msg = f"Error deleting notification: {e}\n{traceback.format_exc()}"
        logger.error(error_msg)
        return json.dumps({"error": error_msg})


def create_notification(args: str):
    """Create a new notification"""
    try:
        args_dict = json.loads(args) if args else {}

        required_fields = ["title", "message"]
        for field in required_fields:
            if field not in args_dict:
                return json.dumps({"error": f"{field} is required"})

        # Get user if user_id provided
        user = None
        user_id = args_dict.get("user_id")
        if user_id:
            for u in User.instances():
                if u.id == user_id:
                    user = u
                    break

        # Create notification entity
        new_notification = Notification(
            topic=args_dict.get("topic", "general"),
            title=args_dict["title"],
            message=args_dict["message"],
            user=user,
            read=False,
            icon=args_dict.get("icon", "bell"),
            href=args_dict.get("href", "/notifications"),
            color=args_dict.get("color", "blue"),
            metadata=args_dict.get("metadata", "{}"),
        )

        logger.info(f"Created new notification: {new_notification._id}")
        return json.dumps({"success": True, "id": new_notification._id})

    except Exception as e:
        error_msg = f"Error creating notification: {e}\n{traceback.format_exc()}"
        logger.error(error_msg)
        return json.dumps({"error": error_msg})
