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

from .models import RegistrationCode

logger = get_logger("extensions.admin_dashboard")


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
        "generate_registration_url": (generate_registration_url, True),
        "validate_registration_code": (validate_registration_code, True),
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


def generate_registration_url(args: dict):
    """Generate a registration URL for a user"""
    try:
        user_id = args.get("user_id")
        created_by = args.get("created_by", "admin")
        frontend_url = args.get("frontend_url", "https://localhost:3000")
        email = args["email"]
        expires_in_hours = args.get("expires_in_hours", 24)

        if not user_id:
            return {"success": False, "error": "user_id is required"}

        # Create registration code
        reg_code = RegistrationCode.create(
            user_id=user_id,
            created_by=created_by,
            frontend_url=frontend_url,
            email=email,
            expires_in_hours=expires_in_hours,
        )

        return {
            "success": True,
            "data": {
                "code": reg_code.code,
                "registration_url": reg_code.registration_url,
                "expires_at": datetime.fromtimestamp(reg_code.expires_at).isoformat(),
                "user_id": reg_code.user_id,
            },
        }
    except Exception as e:
        return {"success": False, "error": str(e)}


def validate_registration_code(args: dict):
    """Validate a registration code"""
    try:
        code = args.get("code")
        if not code:
            return {"success": False, "error": "code is required"}

        # Find registration code
        reg_code = RegistrationCode.find_by_code(code)
        if not reg_code:
            return {"success": False, "error": "Invalid registration code"}

        # Check if valid
        if not reg_code.is_valid():
            current_timestamp = int(datetime.utcnow().timestamp())
            reason = (
                "expired" if reg_code.expires_at < current_timestamp else "already used"
            )
            return {"success": False, "error": f"Registration code is {reason}"}

        return {
            "success": True,
            "data": {
                "user_id": reg_code.user_id,
                "email": reg_code.email,
                "expires_at": datetime.fromtimestamp(reg_code.expires_at).isoformat(),
                "created_by": reg_code.created_by,
            },
        }
    except Exception as e:
        return {"success": False, "error": str(e)}


def get_registration_codes(args: dict):
    """Get registration codes with optional filtering"""
    try:
        user_id = args.get("user_id")
        include_used = args.get("include_used", False)

        if user_id:
            codes = RegistrationCode.find_by_user_id(user_id)
        else:
            codes = RegistrationCode.instances()

        # Filter out used codes if requested
        if not include_used:
            codes = [code for code in codes if code.used == 0]

        return {
            "success": True,
            "data": [
                {
                    "code": code.code,
                    "user_id": code.user_id,
                    "email": code.email,
                    "registration_url": code.registration_url,
                    "expires_at": datetime.fromtimestamp(code.expires_at).isoformat(),
                    "used": code.used == 1,
                    "used_at": (
                        datetime.fromtimestamp(code.used_at).isoformat()
                        if code.used_at > 0
                        else None
                    ),
                    "created_by": code.created_by,
                    "is_valid": code.is_valid(),
                }
                for code in codes
            ],
        }
    except Exception as e:
        return {"success": False, "error": str(e)}
