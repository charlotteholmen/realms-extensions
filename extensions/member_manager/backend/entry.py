"""
Member Manager Extension Backend

Provides an admin API for viewing full member profiles:
  - list_members                   : summary list for the member roster
  - get_member_profile             : complete profile (User + Member + Human + Identity)
  - get_member_notifications       : notification history for a specific member
  - send_member_notification       : send an admin notification to a member
  - get_member_private_data_envelope : fetch the caller's KeyEnvelope for a member's
                                       private-data scope (consent-based sharing)
"""

import json
import traceback

from ggg import Notification, User
from ic_python_logging import get_logger

try:
    from _cdk import ic as _ic
except ImportError:
    _ic = None

logger = get_logger("extensions.member_manager")

# Scope template for a member's encrypted private data (must match the
# realm frontend's /identities scope: "user:<principal>:private").
PRIVATE_DATA_SCOPE = "user:{principal}:private"


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _parse_args(args):
    if isinstance(args, str) and args.strip():
        return json.loads(args)
    if isinstance(args, dict):
        return args
    return {}


def _caller_principal() -> str:
    if _ic is not None:
        try:
            return _ic.caller().to_str()
        except Exception:
            pass
    return ""


def _parse_timestamp_to_ms(ts_str: str) -> int:
    """Parse a 'YYYY-MM-DD HH:MM:SS[.mmm]' string to epoch milliseconds."""
    try:
        parts = str(ts_str).strip().split(" ")
        date_part = parts[0]
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

        days = 0
        for y in range(1970, year):
            days += 366 if ((y % 4 == 0 and y % 100 != 0) or (y % 400 == 0)) else 365
        for m in range(1, month):
            days += [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1]
            if m == 2 and ((year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)):
                days += 1
        days += day - 1

        return (days * 86400 + hour * 3600 + minute * 60 + second) * 1000 + millis
    except Exception:
        return 0


def _get_notification_ts(n) -> int:
    for attr in ("timestamp_created", "timestamp_updated"):
        ts_str = getattr(n, attr, None)
        if ts_str and str(ts_str) != "None":
            result = _parse_timestamp_to_ms(ts_str)
            if result:
                return result
    if _ic is not None:
        try:
            return _ic.time() // 1_000_000
        except Exception:
            pass
    return 0


def _notification_to_dict(n) -> dict:
    return {
        "id": n._id,
        "topic": getattr(n, "topic", "") or "",
        "title": getattr(n, "title", "") or "",
        "message": getattr(n, "message", "") or "",
        "sender": getattr(n, "sender", "") or "",
        "timestamp_ms": _get_notification_ts(n),
        "read": bool(getattr(n, "read", False)),
        "icon": getattr(n, "icon", "bell") or "bell",
        "color": getattr(n, "color", "blue") or "blue",
    }


def _user_principal(n) -> str | None:
    try:
        u = n.user
        if not u:
            return None
        return getattr(u, "id", None) or getattr(u, "_id", None)
    except Exception:
        return None


# ---------------------------------------------------------------------------
# API functions
# ---------------------------------------------------------------------------

def list_members(args=None) -> str:
    """Return a summary list of all users with their member status.

    Suitable for the member roster view — lightweight, no heavy relations.
    """
    try:
        result = []
        for user in User.instances():
            profiles = []
            try:
                profiles = [p.name for p in user.profiles]
            except Exception:
                pass

            identity_verification = ""
            tax_compliance = ""
            is_active = False
            has_member = False
            try:
                member = user.member
                if member:
                    has_member = True
                    identity_verification = getattr(member, "identity_verification", "") or ""
                    tax_compliance = getattr(member, "tax_compliance", "") or ""
                    is_active = member.is_active() if hasattr(member, "is_active") else False
            except Exception:
                pass

            human_name = ""
            try:
                human = user.human
                if human:
                    human_name = getattr(human, "name", "") or ""
            except Exception:
                pass

            result.append({
                "principal": user.id,
                "nickname": getattr(user, "nickname", "") or "",
                "avatar": getattr(user, "avatar", "") or "",
                "human_name": human_name,
                "profiles": profiles,
                "has_member": has_member,
                "identity_verification": identity_verification,
                "tax_compliance": tax_compliance,
                "is_active": is_active,
            })

        return json.dumps({"success": True, "data": {"members": result, "total": len(result)}})
    except Exception as e:
        logger.error(f"list_members error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_member_profile(args) -> str:
    """Return the complete profile for a single member principal.

    Combines User + Member + Human + Identity data.

    Note: User.private_data is encrypted (vetKeys). It is only readable when the
    member has shared their data-encryption key with an admin crypto group; in
    that case the admin's browser decrypts it client-side using the envelope
    returned by ``get_member_private_data_envelope``. This method does not return
    the plaintext private data.
    """
    try:
        args_dict = _parse_args(args)
        principal = args_dict.get("principal")
        if not principal:
            return json.dumps({"success": False, "error": "principal is required"})

        user = User[principal]
        if not user:
            return json.dumps({"success": False, "error": f"User '{principal}' not found"})

        profiles = []
        try:
            profiles = [p.name for p in user.profiles]
        except Exception:
            pass

        member_data = None
        try:
            member = user.member
            if member:
                cr = getattr(member, "criminal_record", "") or ""
                has_zk_passport = cr.startswith("clean|zk:") or "|zk:" in cr
                member_data = {
                    "id": member._id,
                    "identity_verification": getattr(member, "identity_verification", "") or "",
                    "tax_compliance": getattr(member, "tax_compliance", "") or "",
                    "residence_permit": getattr(member, "residence_permit", "") or "",
                    "voting_eligibility": getattr(member, "voting_eligibility", "") or "",
                    "public_benefits_eligibility": getattr(member, "public_benefits_eligibility", "") or "",
                    "has_zk_passport": has_zk_passport,
                    "is_active": member.is_active() if hasattr(member, "is_active") else False,
                }
        except Exception:
            pass

        human_data = None
        identities = []
        try:
            human = user.human
            if human:
                human_data = {
                    "name": getattr(human, "name", "") or "",
                    "date_of_birth": getattr(human, "date_of_birth", "") or "",
                    "latitude": getattr(human, "latitude", None),
                    "longitude": getattr(human, "longitude", None),
                }
                try:
                    for identity in human.identities:
                        identities.append({
                            "type": getattr(identity, "type", "") or "",
                        })
                except Exception:
                    pass
        except Exception:
            pass

        notification_count = 0
        try:
            for n in Notification.instances():
                if _user_principal(n) == principal:
                    notification_count += 1
        except Exception:
            pass

        # The encrypted private-data ciphertext (opaque to the canister). The
        # admin frontend decrypts it only if it also holds a valid envelope.
        private_data_ciphertext = getattr(user, "private_data", "") or ""

        return json.dumps({
            "success": True,
            "data": {
                "principal": user.id,
                "nickname": getattr(user, "nickname", "") or "",
                "avatar": getattr(user, "avatar", "") or "",
                "home_quarter": getattr(user, "home_quarter", "") or "",
                "profiles": profiles,
                "member": member_data,
                "human": human_data,
                "identities": identities,
                "notification_count": notification_count,
                "private_data_ciphertext": private_data_ciphertext,
                "private_data_scope": PRIVATE_DATA_SCOPE.format(principal=principal),
            },
        })
    except Exception as e:
        logger.error(f"get_member_profile error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_member_private_data_envelope(args) -> str:
    """Return the caller's KeyEnvelope (if any) for a member's private-data scope.

    The envelope contains the member's data-encryption key (DEK) wrapped for the
    calling admin's vetKey. If present, the admin shared-data flow can unwrap the
    DEK client-side and decrypt the member's ``private_data`` ciphertext.

    Returns ``{"success": True, "has_access": bool, "wrapped_dek": str|None,
    "scope": str}``.
    """
    try:
        args_dict = _parse_args(args)
        principal = args_dict.get("principal")
        if not principal:
            return json.dumps({"success": False, "error": "principal is required"})

        caller = _caller_principal()
        if not caller:
            return json.dumps({"success": False, "error": "Unable to resolve caller principal"})

        scope = PRIVATE_DATA_SCOPE.format(principal=principal)

        from api.crypto import get_envelope

        result = get_envelope(caller, scope)
        if result.get("success") and result.get("wrapped_dek"):
            return json.dumps({
                "success": True,
                "has_access": True,
                "wrapped_dek": result["wrapped_dek"],
                "scope": scope,
            })

        return json.dumps({
            "success": True,
            "has_access": False,
            "wrapped_dek": None,
            "scope": scope,
        })
    except Exception as e:
        logger.error(f"get_member_private_data_envelope error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_member_notifications(args) -> str:
    """Return the notification history for a specific member, newest first."""
    try:
        args_dict = _parse_args(args)
        principal = args_dict.get("principal")
        if not principal:
            return json.dumps({"success": False, "error": "principal is required"})

        notifications = []
        for n in Notification.instances():
            try:
                if _user_principal(n) == principal:
                    notifications.append(_notification_to_dict(n))
            except Exception as exc:
                logger.warning(f"Skipping notification {n._id}: {exc}")

        notifications.sort(key=lambda x: x["timestamp_ms"], reverse=True)
        return json.dumps({
            "success": True,
            "data": {"notifications": notifications, "total": len(notifications)},
        })
    except Exception as e:
        logger.error(f"get_member_notifications error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def send_member_notification(args) -> str:
    """Send an admin notification to a specific member."""
    try:
        args_dict = _parse_args(args)
        principal = args_dict.get("principal", "").strip()
        title = args_dict.get("title", "").strip()
        message = args_dict.get("message", "").strip()

        if not principal:
            return json.dumps({"success": False, "error": "principal is required"})
        if not title:
            return json.dumps({"success": False, "error": "title is required"})
        if not message:
            return json.dumps({"success": False, "error": "message is required"})

        user = User[principal]
        if not user:
            return json.dumps({"success": False, "error": f"User '{principal}' not found"})

        sender = _caller_principal()

        notification = Notification(
            topic=args_dict.get("topic", "admin"),
            title=title,
            message=message,
            user=user,
            sender=sender,
            read=False,
            icon=args_dict.get("icon", "bell"),
            href=args_dict.get("href", "/notifications"),
            color=args_dict.get("color", "blue"),
            metadata="{}",
        )

        logger.info(f"Admin notification sent to {principal} by {sender}: {title!r}")
        return json.dumps({"success": True, "data": {"id": notification._id}})
    except Exception as e:
        logger.error(f"send_member_notification error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


# ---------------------------------------------------------------------------
# Extension API registry
# ---------------------------------------------------------------------------

EXTENSION_FUNCTIONS = {
    "list_members": list_members,
    "get_member_profile": get_member_profile,
    "get_member_private_data_envelope": get_member_private_data_envelope,
    "get_member_notifications": get_member_notifications,
    "send_member_notification": send_member_notification,
}


def extension_sync_call(method_name: str, args: dict):
    """Synchronous extension API dispatch."""
    if method_name not in EXTENSION_FUNCTIONS:
        return json.dumps({"success": False, "error": f"Unknown method: {method_name}"})
    return EXTENSION_FUNCTIONS[method_name](args)
