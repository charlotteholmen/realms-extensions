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


def _caller_principal() -> str:
    """Resolve the calling principal, or '' off-chain."""
    if _ic is not None:
        try:
            return _ic.caller().to_str()
        except Exception:
            pass
    return ""


def _user_id(notification) -> str:
    """Principal of a notification's target user (audience_type == 'user')."""
    try:
        u = notification.user
        if not u:
            return ""
        return getattr(u, "id", None) or getattr(u, "_id", None) or ""
    except Exception:
        return ""


def _department_name(notification) -> str:
    """Name of a notification's target department (audience_type == 'department')."""
    try:
        d = notification.department
        if not d:
            return ""
        return getattr(d, "name", "") or ""
    except Exception:
        return ""


def _is_read_by(notification, caller: str) -> bool:
    """Whether `caller` has read the notification.

    Single-user notifications use the `read` boolean; broadcasts track readers
    individually in `read_by` so they are per-user.
    """
    audience = getattr(notification, "audience_type", "user") or "user"
    if audience == "user":
        return bool(getattr(notification, "read", False))
    read_by = getattr(notification, "read_by", "") or ""
    return bool(caller) and caller in [p for p in read_by.split(",") if p]


def _notification_to_dict(notification: Notification, caller: str = "") -> Dict[str, Any]:
    """Convert Notification entity to dictionary format"""
    timestamp_ms = _get_timestamp_ms(notification)

    return {
        "id": notification._id,
        "topic": getattr(notification, "topic", "") or "",
        "title": getattr(notification, "title", "") or "",
        "message": getattr(notification, "message", "") or "",
        "sender": getattr(notification, "sender", "") or "",
        "recipient": getattr(notification, "recipient", "") or "",
        "visibility": getattr(notification, "visibility", "private") or "private",
        "audience_type": getattr(notification, "audience_type", "user") or "user",
        "department": _department_name(notification),
        "origin_realm": getattr(notification, "origin_realm", "") or "",
        "timestamp_ms": timestamp_ms,
        "read": _is_read_by(notification, caller),
        "icon": getattr(notification, "icon", "bell") or "bell",
        "href": getattr(notification, "href", "/notifications") or "/notifications",
        "color": getattr(notification, "color", "blue") or "blue",
    }


def _caller_context(caller: str):
    """Resolve the caller's department memberships, membership, and admin status."""
    is_member = False
    caller_depts = set()
    is_admin = False
    if not caller:
        return is_member, caller_depts, is_admin

    try:
        user = User[caller]
        if user:
            is_member = True
            for d in (getattr(user, "departments", None) or []):
                name = getattr(d, "name", None)
                if name:
                    caller_depts.add(name)
            for d in (getattr(user, "headed_departments", None) or []):
                name = getattr(d, "name", None)
                if name:
                    caller_depts.add(name)
    except Exception as exc:
        logger.warning(f"Error resolving caller context for {caller}: {exc}")

    try:
        from core.crypto_scopes import production_context
        is_admin = production_context().is_realm_admin(caller)
    except Exception as exc:
        logger.warning(f"Error resolving admin status for {caller}: {exc}")

    return is_member, caller_depts, is_admin


def _is_visible_to(notification, caller: str, is_member: bool, caller_depts: set) -> bool:
    """Decide whether `caller` may read `notification`.

    public        -> anyone
    private user  -> only the addressed user
    private dept  -> only members (and head) of the department
    private realm -> only registered users of this realm
    """
    visibility = getattr(notification, "visibility", "private") or "private"
    if visibility == "public":
        return True

    audience = getattr(notification, "audience_type", "user") or "user"
    if audience == "user":
        return bool(caller) and _user_id(notification) == caller
    if audience == "department":
        return _department_name(notification) in caller_depts
    if audience == "realm":
        return is_member
    return False


def get_notifications(args: str = "{}"):
    """Get notifications visible to the current caller (visibility-aware)."""
    try:
        logger.info("Fetching notifications")

        params = json.loads(args) if args else {}
        caller = params.get("user_id")
        if not caller and _ic is not None:
            caller = _ic.caller().to_str()
        logger.info(f"Resolving visible notifications for caller: {caller}")

        is_member, caller_depts, _is_admin = _caller_context(caller)

        notifications = Notification.instances()
        logger.info(f"Total notifications in DB: {len(notifications)}")

        visible = []
        for n in notifications:
            try:
                if _is_visible_to(n, caller, is_member, caller_depts):
                    visible.append(n)
            except Exception as exc:
                logger.warning(f"Notification {n._id}: visibility error: {exc}")

        notifications_list = [_notification_to_dict(n, caller) for n in visible]
        notifications_list.sort(key=lambda x: x["timestamp_ms"], reverse=True)

        unread_count = sum(1 for n in notifications_list if not n["read"])

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
    """Mark a notification as read or unread (toggle) for the calling user.

    Single-user notifications flip the shared `read` flag; broadcast
    notifications track the caller individually in `read_by` so marking one
    user's copy as read does not affect everyone else.
    """
    try:
        args_dict = json.loads(args) if args else {}
        notification_id = args_dict.get("id")
        # Allow explicit read value, default to True for backwards compatibility
        read_value = bool(args_dict.get("read", True))

        if not notification_id:
            return json.dumps({"error": "id is required"})

        logger.info(f"Setting notification {notification_id} read={read_value}")

        # Find notification in database by _id
        notification = Notification.load(str(notification_id))

        if not notification:
            logger.warning(f"Notification {notification_id} not found")
            return json.dumps({"error": f"Notification {notification_id} not found"})

        audience = getattr(notification, "audience_type", "user") or "user"
        if audience == "user":
            notification.read = read_value
        else:
            caller = _caller_principal()
            readers = [p for p in (getattr(notification, "read_by", "") or "").split(",") if p]
            if read_value and caller and caller not in readers:
                readers.append(caller)
            elif not read_value and caller in readers:
                readers.remove(caller)
            notification.read_by = ",".join(readers)

        logger.info(f"Successfully set notification {notification_id} read={read_value}")
        return json.dumps({"success": True, "id": notification_id, "read": read_value})

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
    """Create a notification / message.

    Args (JSON):
      title, message            : required
      audience_type             : "user" (default) | "department" | "realm"
      visibility                : "private" (default) | "public"
      user_id                   : target principal (audience_type == "user")
      department                : target department name (audience_type == "department")
      topic, icon, href, color  : optional presentation fields

    Authorization:
      * user / department messages — any registered user may send.
      * realm-wide messages — only a realm admin or the system (controller /
        trusted principal) may send.
    """
    try:
        args_dict = json.loads(args) if args else {}

        required_fields = ["title", "message"]
        for field in required_fields:
            if field not in args_dict:
                return json.dumps({"error": f"{field} is required"})

        caller = _caller_principal()

        # Infer audience: an explicit department implies a department broadcast.
        audience_type = args_dict.get("audience_type")
        if not audience_type:
            audience_type = "department" if args_dict.get("department") else "user"
        if audience_type not in ("user", "department", "realm"):
            return json.dumps({"error": f"Invalid audience_type: {audience_type}"})

        visibility = args_dict.get("visibility", "private")
        if visibility not in ("private", "public"):
            return json.dumps({"error": f"Invalid visibility: {visibility}"})

        user = None
        department = None

        if audience_type == "user":
            user_id = args_dict.get("user_id")
            if user_id:
                user = User[user_id]
                if not user:
                    return json.dumps({"error": f"User '{user_id}' not found"})

        elif audience_type == "department":
            dept_name = (args_dict.get("department") or "").strip()
            if not dept_name:
                return json.dumps({"error": "department is required for a department message"})
            from ggg import Department
            department = Department[dept_name]
            if not department:
                return json.dumps({"error": f"Department '{dept_name}' not found"})

        elif audience_type == "realm":
            # Only admins or the system may broadcast to the whole realm.
            is_admin = False
            try:
                from core.crypto_scopes import production_context
                is_admin = production_context().is_realm_admin(caller)
            except Exception as exc:
                logger.warning(f"Admin check failed for {caller}: {exc}")
            if not is_admin:
                return json.dumps({
                    "error": "Only a realm admin or the system may send realm-wide messages",
                })

        new_notification = Notification(
            topic=args_dict.get("topic", "general"),
            title=args_dict["title"],
            message=args_dict["message"],
            sender=caller,
            visibility=visibility,
            audience_type=audience_type,
            user=user,
            department=department,
            read=False,
            read_by="",
            icon=args_dict.get("icon", "bell"),
            href=args_dict.get("href", "/notifications"),
            color=args_dict.get("color", "blue"),
            metadata=args_dict.get("metadata", "{}"),
        )

        logger.info(
            f"Created notification {new_notification._id} "
            f"(audience={audience_type}, visibility={visibility}, sender={caller})"
        )
        return json.dumps({"success": True, "id": new_notification._id})

    except Exception as e:
        error_msg = f"Error creating notification: {e}\n{traceback.format_exc()}"
        logger.error(error_msg)
        return json.dumps({"error": error_msg})


def list_departments(args: str = "{}"):
    """Return the realm's departments for use as message recipients."""
    try:
        from ggg import Department

        departments = []
        for d in Department.instances():
            try:
                members = list(getattr(d, "members", None) or [])
            except Exception:
                members = []
            departments.append({
                "name": getattr(d, "name", "") or "",
                "description": getattr(d, "description", "") or "",
                "member_count": len(members),
            })

        departments.sort(key=lambda x: x["name"].lower())
        return json.dumps({"success": True, "departments": departments})

    except Exception as e:
        error_msg = f"Error listing departments: {e}\n{traceback.format_exc()}"
        logger.error(error_msg)
        return json.dumps({"success": False, "error": error_msg, "departments": []})
