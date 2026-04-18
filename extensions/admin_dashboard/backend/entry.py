"""
Admin Dashboard Backend Extension Entry Point

Provides a web UI for administrative operations: entity export/import,
registration code management, and data exploration.

Note: The Basilisk shell provides equivalent CLI access to entity
export/import via ``%db`` commands (types, list, show, search,
export, import, delete). This extension is a user-friendly wrapper
for the same underlying ic_python_db primitives.
"""

import base64
import csv
import json
import traceback
from datetime import datetime
from io import StringIO
from typing import Any, Dict, List

from ic_python_db import Database, Entity
from ic_python_logging import get_logger

from .models import VALID_PROFILES, DEFAULT_PROFILE, RegistrationCode

logger = get_logger("extensions.admin_dashboard")


def _caller_principal() -> str:
    """Return the current canister caller principal as a string, or '' on error.

    Imported lazily so unit tests that import this module outside of a
    canister runtime don't blow up on the missing _cdk shim.
    """
    try:
        from _cdk import ic  # type: ignore

        return ic.caller().to_str()
    except Exception:
        return ""


def _is_caller_admin() -> bool:
    """Best-effort check that the current caller is allowed to mint/revoke
    invitation codes.

    Order:
      1. IC-level controllers always allowed.
      2. Any User whose profile grants ``Operations.ALL`` (i.e. ``admin``)
         or the explicit ``Operations.USER_ADD`` permission.
      3. If there are zero admin Users yet (fresh realm), allow — this lets
         the bootstrap admin self-mint their first invite. The realm-side
         ``join_realm`` separately enforces that the bootstrap admin claim
         is the canister controller.
    """
    try:
        from _cdk import ic  # type: ignore
    except Exception:
        return True  # outside canister runtime (tests) — don't block

    try:
        if ic.is_controller(ic.caller()):
            return True
    except Exception:
        pass

    caller = _caller_principal()
    if not caller:
        return False

    try:
        from ggg import User  # type: ignore
        from ggg.system.user_profile import Operations  # type: ignore
    except Exception:
        return True  # ggg not importable in this context — fail open for tests

    user = User[caller]
    if user is not None:
        for profile in user.profiles:
            allowed = str(profile.allowed_to or "").split(",")
            if Operations.ALL in allowed or Operations.USER_ADD in allowed:
                return True

    try:
        any_admin = False
        for u in User.instances():
            for p in u.profiles:
                allowed = str(p.allowed_to or "").split(",")
                if Operations.ALL in allowed:
                    any_admin = True
                    break
            if any_admin:
                break
        if not any_admin:
            return True
    except Exception:
        pass

    return False


def get_entity_types(args=None):
    """Return available entity types for the admin dashboard dropdown.

    Uses ic_python_db's entity type registry directly instead of
    ggg.classes(), making this portable across any basilisk canister.
    """
    db = Database.get_instance()
    seen = set()
    types = []
    for cls in db._entity_types.values():
        name = cls.__name__
        if name not in seen:
            seen.add(name)
            types.append(name)
    return {"success": True, "data": sorted(types)}


def extension_sync_call(method_name: str, args: dict):
    """
    Synchronous extension API calls for admin operations
    """
    # Method mapping with argument requirements
    methods = {
        "import_data": (import_data, True),
        "export_data": (export_data, True),
        "delete_entity": (delete_entity, True),
        "generate_registration_url": (generate_registration_url, True),
        "validate_registration_code": (validate_registration_code, True),
        "consume_registration_code": (consume_registration_code, True),
        "revoke_registration_code": (revoke_registration_code, True),
        "get_registration_codes": (get_registration_codes, True),
        "get_entity_types": (get_entity_types, False),
    }

    if method_name not in methods:
        return {"success": False, "error": f"Unknown method: {method_name}"}

    function, requires_args = methods[method_name]

    try:
        if requires_args:
            return function(args)
        else:
            return function()
    except Exception as e:
        return {"success": False, "error": f"Error calling {method_name}: {str(e)}"}


def export_data(args):
    """Export entities from the database.

    Uses ic_python_db's entity type registry directly.  Codex entities
    are separated into their own list when ``include_codexes`` is True.

    Equivalent CLI: ``%db export <Type> [file.json]``
    """
    try:
        if isinstance(args, str):
            args = json.loads(args)

        requested_types = args.get("entity_types", None)
        include_codexes = args.get("include_codexes", True)

        logger.debug(f"Exporting data - entity_types: {requested_types}, include_codexes: {include_codexes}")

        db = Database.get_instance()
        all_entities = []
        codexes = []

        # Iterate registered entity types (de-duplicated)
        seen = set()
        for cls in db._entity_types.values():
            name = cls.__name__
            if name in seen:
                continue
            seen.add(name)

            # Filter if specific types requested
            if requested_types and name not in requested_types:
                continue

            try:
                instances = cls.instances()
                logger.debug(f"Found {len(instances)} instances of {name}")

                for instance in instances:
                    try:
                        serialized = instance.serialize()
                        if name == "Codex" and include_codexes:
                            codexes.append({
                                "name": serialized.get("name", ""),
                                "code": serialized.get("code", ""),
                                "_id": serialized.get("_id", ""),
                            })
                        else:
                            all_entities.append(serialized)
                    except Exception as e:
                        logger.error(f"Error serializing {name} instance: {e}")
            except Exception as e:
                logger.error(f"Error processing entity class {name}: {e}")

        response_data = {
            "entities": all_entities,
            "codexes": codexes,
            "total_entities": len(all_entities),
            "total_codexes": len(codexes),
        }

        logger.debug(f"Export complete - {len(all_entities)} entities, {len(codexes)} codexes")

        return {
            "success": True,
            "message": f"Successfully exported {len(all_entities)} entities and {len(codexes)} codexes",
            "data": json.dumps(response_data),
        }

    except Exception as e:
        logger.error(f"Error exporting data: {e}\n{traceback.format_exc()}")
        return {"success": False, "error": str(e)}


def import_data(args):
    """Import entities via Entity.deserialize (upsert semantics).

    Supports JSON and CSV formats.  Base64-encoded args are accepted
    to avoid shell escaping issues.

    Equivalent CLI: ``%db import <file.json>``
    """
    try:
        if isinstance(args, str):
            if args.startswith("base64:"):
                args = base64.b64decode(args[7:]).decode("utf-8")
            args = json.loads(args)

        data_format = args.get("format", "json")
        data_content = args.get("data", "")

        logger.debug(f"data_format: {data_format}")

        if not data_content:
            return {"success": False, "error": "No data provided"}

        # Parse input
        parsed_data = []
        if data_format == "csv":
            csv_reader = csv.DictReader(StringIO(data_content))
            parsed_data = list(csv_reader)
        else:
            try:
                parsed_data = json.loads(data_content) if isinstance(data_content, str) else data_content
                if not isinstance(parsed_data, list):
                    parsed_data = [parsed_data]
            except json.JSONDecodeError as e:
                return {"success": False, "error": f"Invalid JSON data: {e}"}

        logger.debug(f"Importing {len(parsed_data)} records")
        results = process_bulk_import(parsed_data)

        # Clear in-memory entity context to prevent state bloat across
        # successive canister calls (kybra persists the Python heap between calls)
        Entity._context.clear()

        return {
            "success": True,
            "message": "Successfully imported records",
            "data": {
                "total_records": len(parsed_data),
                "successful": results["successful"],
                "failed": results["failed"],
                "errors": results["errors"],
            },
        }

    except Exception as e:
        logger.error(f"Error processing import data: {e}\n{traceback.format_exc()}")
        return {"success": False, "error": str(e)}


def process_bulk_import(data: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Deserialize a list of entity dicts via Entity.deserialize (upsert).

    Handles Codex entities specially: decodes base64-encoded code fields.
    """
    successful = 0
    failed = 0
    errors = []

    for record in data:
        try:
            entity = Entity.deserialize(record, level=1)

            # Codex entities may have base64-encoded code
            if record.get("_type") == "Codex" and "code" in record:
                code_val = record["code"]
                if isinstance(code_val, str) and code_val.startswith("base64:"):
                    entity.code = base64.b64decode(code_val[7:]).decode()

            successful += 1
        except Exception as e:
            logger.error(f"Error creating entity: {e}\n{traceback.format_exc()}")
            failed += 1
            errors.append(f"{record.get('_type', '?')}#{record.get('_id', '?')}: {e}")

    return {
        "successful": successful,
        "failed": failed,
        "errors": errors[:10],
    }


def delete_entity(args):
    """Delete a single entity by type and id.

    Equivalent CLI: ``%db delete <Type> <id>``
    """
    try:
        if isinstance(args, str):
            args = json.loads(args)

        entity_type = args.get("entity_type")
        entity_id = args.get("entity_id")

        if not entity_type or entity_id is None:
            return {"success": False, "error": "entity_type and entity_id are required"}

        db = Database.get_instance()
        cls = db._entity_types.get(entity_type)
        if not cls:
            return {"success": False, "error": f"Unknown entity type: {entity_type}"}

        instance = cls.load(entity_id)
        if instance is None:
            return {"success": False, "error": f"{entity_type}#{entity_id} not found"}

        instance.delete()
        Entity._context.clear()

        return {
            "success": True,
            "message": f"Deleted {entity_type}#{entity_id}",
        }
    except Exception as e:
        logger.error(f"Error deleting entity: {e}\n{traceback.format_exc()}")
        return {"success": False, "error": str(e)}


def _coerce_args(args):
    """Accept either a dict or a JSON-encoded string and return a dict."""
    if isinstance(args, str):
        try:
            return json.loads(args)
        except Exception:
            return {}
    return args or {}


def _serialize_code(code: "RegistrationCode") -> dict:
    return {
        "code": code.code,
        "user_id": code.user_id,
        "email": code.email,
        "profile": code.profile or DEFAULT_PROFILE,
        "registration_url": code.registration_url,
        "expires_at": datetime.fromtimestamp(int(code.expires_at or 0)).isoformat(),
        "max_uses": int(code.max_uses or 1),
        "uses_count": int(code.uses_count or 0),
        "revoked": bool(code.revoked),
        "used": bool(code.used),
        "used_at": (
            datetime.fromtimestamp(int(code.used_at)).isoformat()
            if int(code.used_at or 0) > 0
            else None
        ),
        "created_by": code.created_by,
        "is_valid": code.is_valid(),
    }


def generate_registration_url(args: dict):
    """Mint a new invitation code.

    Required:
      ``user_id`` — friendly invitee identifier (free-form).

    Optional:
      ``profile`` — "member" (default) or "admin".
      ``email`` — invitee email.
      ``expires_in_hours`` — code lifetime, default 24.
      ``max_uses`` — distinct redemptions allowed, default 1.
      ``frontend_url`` — base URL used to build the join link.
      ``created_by`` — overrides the caller principal in the audit field.

    Only realm admins (or the canister controller, or the very first
    invite on a fresh realm with no admin yet) may call this.
    """
    try:
        args = _coerce_args(args)
        user_id = args.get("user_id")
        profile = args.get("profile") or DEFAULT_PROFILE
        if profile not in VALID_PROFILES:
            return {
                "success": False,
                "error": f"Invalid profile '{profile}'. Must be one of {list(VALID_PROFILES)}.",
            }

        if not _is_caller_admin():
            return {
                "success": False,
                "error": "Only realm administrators can create registration codes",
            }

        created_by = args.get("created_by") or _caller_principal() or "admin"
        frontend_url = args.get("frontend_url", "https://localhost:3000")
        email = args.get("email")
        expires_in_hours = int(args.get("expires_in_hours", 24) or 24)
        max_uses = int(args.get("max_uses", 1) or 1)

        if not user_id:
            return {"success": False, "error": "user_id is required"}
        if max_uses < 1:
            return {"success": False, "error": "max_uses must be >= 1"}

        reg_code = RegistrationCode.create(
            user_id=user_id,
            created_by=created_by,
            frontend_url=frontend_url,
            email=email,
            expires_in_hours=expires_in_hours,
            profile=profile,
            max_uses=max_uses,
        )

        return {
            "success": True,
            "data": {
                "code": reg_code.code,
                "registration_url": reg_code.registration_url,
                "expires_at": datetime.fromtimestamp(int(reg_code.expires_at)).isoformat(),
                "user_id": reg_code.user_id,
                "profile": reg_code.profile,
                "max_uses": int(reg_code.max_uses),
            },
        }
    except Exception as e:
        return {"success": False, "error": str(e)}


def _invalidity_reason(reg_code: "RegistrationCode") -> str:
    if reg_code.revoked:
        return "revoked"
    if int(reg_code.uses_count or 0) >= int(reg_code.max_uses or 1):
        return "already used"
    current_timestamp = int(datetime.utcnow().timestamp())
    if int(reg_code.expires_at or 0) <= current_timestamp:
        return "expired"
    return "invalid"


def validate_registration_code(args: dict):
    """Inspect a code without consuming it.

    Returns the profile + invitee metadata so the join wizard can render
    the correct profile card before the user completes Internet Identity
    sign-in. Does **not** modify state.
    """
    try:
        args = _coerce_args(args)
        code = args.get("code")
        if not code:
            return {"success": False, "error": "code is required"}

        reg_code = RegistrationCode.find_by_code(code)
        if not reg_code:
            return {"success": False, "error": "Invalid registration code"}

        if not reg_code.is_valid():
            return {
                "success": False,
                "error": f"Registration code is {_invalidity_reason(reg_code)}",
            }

        return {
            "success": True,
            "data": {
                "user_id": reg_code.user_id,
                "email": reg_code.email,
                "profile": reg_code.profile or DEFAULT_PROFILE,
                "expires_at": datetime.fromtimestamp(int(reg_code.expires_at)).isoformat(),
                "created_by": reg_code.created_by,
                "max_uses": int(reg_code.max_uses or 1),
                "uses_count": int(reg_code.uses_count or 0),
            },
        }
    except Exception as e:
        return {"success": False, "error": str(e)}


def consume_registration_code(args: dict):
    """Atomically validate **and** redeem a code for the calling principal.

    Used by the realm backend's ``join_realm`` endpoint to authorize an
    admin (or member) join. Required arg: ``code``. Optional arg:
    ``principal`` (defaults to ``ic.caller()``). The same principal can
    only redeem a given code once, even if ``max_uses > 1``.

    Returns the granted ``profile`` on success.
    """
    try:
        args = _coerce_args(args)
        code = args.get("code")
        principal = args.get("principal") or _caller_principal()
        if not code:
            return {"success": False, "error": "code is required"}
        if not principal:
            return {"success": False, "error": "principal is required"}

        reg_code = RegistrationCode.find_by_code(code)
        if not reg_code:
            return {"success": False, "error": "Invalid registration code"}

        if not reg_code.is_valid():
            return {
                "success": False,
                "error": f"Registration code is {_invalidity_reason(reg_code)}",
            }

        if reg_code.has_been_redeemed_by(principal):
            return {
                "success": False,
                "error": "This principal has already redeemed this code",
            }

        reg_code.redeem(principal)

        return {
            "success": True,
            "data": {
                "profile": reg_code.profile or DEFAULT_PROFILE,
                "user_id": reg_code.user_id,
                "uses_count": int(reg_code.uses_count),
                "max_uses": int(reg_code.max_uses or 1),
            },
        }
    except Exception as e:
        logger.error(f"consume_registration_code error: {e}\n{traceback.format_exc()}")
        return {"success": False, "error": str(e)}


def revoke_registration_code(args: dict):
    """Revoke an outstanding code. Admin-only."""
    try:
        args = _coerce_args(args)
        code = args.get("code")
        if not code:
            return {"success": False, "error": "code is required"}
        if not _is_caller_admin():
            return {
                "success": False,
                "error": "Only realm administrators can revoke registration codes",
            }

        reg_code = RegistrationCode.find_by_code(code)
        if not reg_code:
            return {"success": False, "error": "Invalid registration code"}

        reg_code.revoke()
        return {"success": True, "data": _serialize_code(reg_code)}
    except Exception as e:
        return {"success": False, "error": str(e)}


def get_registration_codes(args: dict):
    """List registration codes with optional filtering.

    Args:
        user_id: filter to codes minted for this invitee.
        include_used: include fully-redeemed codes (default False).
        include_revoked: include revoked codes (default True).
    """
    try:
        args = _coerce_args(args)
        user_id = args.get("user_id")
        include_used = bool(args.get("include_used", False))
        include_revoked = bool(args.get("include_revoked", True))

        if user_id:
            codes = RegistrationCode.find_by_user_id(user_id)
        else:
            codes = list(RegistrationCode.instances())

        if not include_used:
            codes = [
                c
                for c in codes
                if int(c.uses_count or 0) < int(c.max_uses or 1)
            ]
        if not include_revoked:
            codes = [c for c in codes if not c.revoked]

        return {
            "success": True,
            "data": [_serialize_code(c) for c in codes],
        }
    except Exception as e:
        return {"success": False, "error": str(e)}
