import json
import traceback
from datetime import datetime
from typing import Any, Dict, List

from ggg import Notification, User
from ic_python_logging import get_logger

logger = get_logger("notifications.entry")


def _notification_to_dict(notification: Notification) -> Dict[str, Any]:
    """Convert Notification entity to dictionary format"""
    # Handle timestamp - try multiple attribute names
    timestamp = getattr(notification, "timestamp_created", None) or getattr(notification, "created_at", None) or ""
    if hasattr(timestamp, "strftime"):
        timestamp_str = timestamp.strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]
    else:
        timestamp_str = str(timestamp) if timestamp else ""

    return {
        "id": notification._id,
        "topic": getattr(notification, "topic", "") or "",
        "title": getattr(notification, "title", "") or "",
        "message": getattr(notification, "message", "") or "",
        "timestamp": timestamp_str,
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

        # Filter by user if user_id provided (could be principal or _id)
        if user_id:
            notifications = [
                n for n in notifications if n.user and (
                    getattr(n.user, "principal", None) == user_id or 
                    n.user.id == user_id or
                    n.user._id == user_id
                )
            ]

        # Convert to dict format
        notifications_list = [_notification_to_dict(n) for n in notifications]

        # Sort by timestamp, most recent first
        notifications_list.sort(key=lambda x: x["timestamp"], reverse=True)

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
        notification = Notification.get(notification_id)

        if notification:
            notification.read = read_value
            notification.save()
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

        notification = Notification.get(notification_id)
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
