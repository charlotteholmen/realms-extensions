"""
Role Manager Extension Backend Entry Point

Provides an admin API for assigning/revoking roles (profiles) and permissions
to users, backed by codex-driven governance hooks that allow each realm to
define its own policy (admin-only, vote-required, direct democracy, etc.).

Flow:
  caller → permission check (Operations.ROLE_ASSIGN) → prehook (codex policy)
  → mutation → posthook (codex notifications/logging)
"""

import json
import traceback
from typing import Any, Dict

from ggg import Permission, Proposal, User, UserProfile
from ggg.system.user_profile import Operations, Profiles, OPERATIONS_SEPARATOR
from basilisk import ic
from ic_python_logging import get_logger

logger = get_logger("extensions.role_manager")


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _parse_args(args):
    """Parse JSON string args to dict."""
    if isinstance(args, str) and args.strip():
        return json.loads(args)
    if isinstance(args, dict):
        return args
    return {}


def _get_caller_principal() -> str:
    return ic.caller().to_str()


def _get_caller_user() -> User:
    principal = _get_caller_principal()
    user = User[principal]
    if not user:
        raise PermissionError(f"User {principal} not found")
    return user


def _is_allowed(user: User, operation: str) -> bool:
    """Check if a user holds a specific operation permission."""
    for profile in user.profiles:
        allowed = str(profile.allowed_to or "").split(OPERATIONS_SEPARATOR)
        if Operations.ALL in allowed or operation in allowed:
            return True
    try:
        for perm in user.permissions:
            if perm.name == operation:
                return True
    except Exception:
        pass
    try:
        for profile in user.profiles:
            for perm in profile.permissions:
                if perm.name == operation:
                    return True
    except Exception:
        pass
    return False


def _require_operation(user: User, operation: str):
    """Raise if user doesn't hold the operation."""
    if not _is_allowed(user, operation):
        raise PermissionError(
            f"Access denied: user {user.id} lacks permission '{operation}'"
        )


def _get_user_effective_operations(user: User) -> list:
    """Return the union of all operations a user holds (profiles + direct permissions)."""
    ops = set()
    for profile in user.profiles:
        allowed = str(profile.allowed_to or "").split(OPERATIONS_SEPARATOR)
        for op in allowed:
            if op:
                ops.add(op)
    try:
        for perm in user.permissions:
            if perm.name:
                ops.add(perm.name)
    except Exception:
        pass
    try:
        for profile in user.profiles:
            for perm in profile.permissions:
                if perm.name:
                    ops.add(perm.name)
    except Exception:
        pass
    return sorted(ops)


# ---------------------------------------------------------------------------
# Extension API functions
# ---------------------------------------------------------------------------

def list_users_with_profiles(args) -> str:
    """List all users with their profile names and effective permissions."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_VIEW)

        users = User.instances()
        result = []
        for user in users:
            profiles = [p.name for p in user.profiles]
            result.append({
                "principal": user.id,
                "nickname": user.nickname or "",
                "profiles": profiles,
                "status": "active",
            })

        return json.dumps({
            "success": True,
            "data": {"users": result, "total": len(result)},
        })
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"list_users_with_profiles error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_available_profiles(args) -> str:
    """Enumerate all defined profiles with their operations."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_VIEW)

        profiles = []
        for profile_def in Profiles.ALL_PROFILES:
            profiles.append({
                "name": profile_def["name"],
                "allowed_to": profile_def["allowed_to"],
            })

        return json.dumps({"success": True, "data": {"profiles": profiles}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"get_available_profiles error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_user_effective_permissions(args) -> str:
    """Get the union of all profile operations + Permission entities for a user."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_VIEW)

        target_principal = args_dict.get("target_principal")
        if not target_principal:
            return json.dumps({"success": False, "error": "target_principal is required"})

        target_user = User[target_principal]
        if not target_user:
            return json.dumps({"success": False, "error": f"User {target_principal} not found"})

        profiles = [p.name for p in target_user.profiles]
        operations = _get_user_effective_operations(target_user)

        direct_permissions = []
        try:
            for perm in target_user.permissions:
                direct_permissions.append(perm.name)
        except Exception:
            pass

        return json.dumps({
            "success": True,
            "data": {
                "principal": target_principal,
                "nickname": target_user.nickname or "",
                "profiles": profiles,
                "effective_operations": operations,
                "direct_permissions": direct_permissions,
            },
        })
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"get_user_effective_permissions error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def assign_profile(args) -> str:
    """Assign a profile to a user.

    Checks Operations.ROLE_ASSIGN, calls prehook (codex policy), assigns, calls posthook.
    """
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        caller_principal = _get_caller_principal()
        _require_operation(caller, Operations.ROLE_ASSIGN)

        target_principal = args_dict.get("target_principal")
        profile_name = args_dict.get("profile_name")
        if not target_principal or not profile_name:
            return json.dumps({"success": False, "error": "target_principal and profile_name are required"})

        target_user = User[target_principal]
        if not target_user:
            return json.dumps({"success": False, "error": f"User {target_principal} not found"})

        profile = UserProfile[profile_name]
        if not profile:
            return json.dumps({"success": False, "error": f"Profile '{profile_name}' not found"})

        # Check if already assigned
        current_profiles = [p.name for p in target_user.profiles]
        if profile_name in current_profiles:
            return json.dumps({"success": False, "error": f"User already has profile '{profile_name}'"})

        # Prehook: codex governance policy can reject
        try:
            User.role_assign_prehook(target_user, profile_name, caller_principal)
        except PermissionError as e:
            return json.dumps({"success": False, "error": str(e), "governance_blocked": True})

        # Perform the assignment
        target_user.profiles.add(profile)
        logger.info(f"Profile '{profile_name}' assigned to {target_principal} by {caller_principal}")

        # Posthook: notifications, logging
        User.role_assign_posthook(target_user, profile_name, caller_principal)

        return json.dumps({
            "success": True,
            "data": {
                "message": f"Profile '{profile_name}' assigned to user",
                "principal": target_principal,
                "profiles": [p.name for p in target_user.profiles],
            },
        })
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"assign_profile error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def revoke_profile(args) -> str:
    """Revoke a profile from a user.

    Checks Operations.ROLE_REVOKE, calls prehook (codex policy), revokes, calls posthook.
    """
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        caller_principal = _get_caller_principal()
        _require_operation(caller, Operations.ROLE_REVOKE)

        target_principal = args_dict.get("target_principal")
        profile_name = args_dict.get("profile_name")
        if not target_principal or not profile_name:
            return json.dumps({"success": False, "error": "target_principal and profile_name are required"})

        target_user = User[target_principal]
        if not target_user:
            return json.dumps({"success": False, "error": f"User {target_principal} not found"})

        profile = UserProfile[profile_name]
        if not profile:
            return json.dumps({"success": False, "error": f"Profile '{profile_name}' not found"})

        # Check if actually assigned
        current_profiles = [p.name for p in target_user.profiles]
        if profile_name not in current_profiles:
            return json.dumps({"success": False, "error": f"User does not have profile '{profile_name}'"})

        # Prehook: codex governance policy can reject
        try:
            User.role_revoke_prehook(target_user, profile_name, caller_principal)
        except PermissionError as e:
            return json.dumps({"success": False, "error": str(e), "governance_blocked": True})

        # Perform the revocation
        target_user.profiles.remove(profile)
        logger.info(f"Profile '{profile_name}' revoked from {target_principal} by {caller_principal}")

        # Posthook: notifications, logging
        User.role_revoke_posthook(target_user, profile_name, caller_principal)

        return json.dumps({
            "success": True,
            "data": {
                "message": f"Profile '{profile_name}' revoked from user",
                "principal": target_principal,
                "profiles": [p.name for p in target_user.profiles],
            },
        })
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"revoke_profile error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def grant_permission(args) -> str:
    """Attach a fine-grained Permission entity to a user."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_GRANT)

        target_principal = args_dict.get("target_principal")
        permission_name = args_dict.get("permission_name")
        if not target_principal or not permission_name:
            return json.dumps({"success": False, "error": "target_principal and permission_name are required"})

        target_user = User[target_principal]
        if not target_user:
            return json.dumps({"success": False, "error": f"User {target_principal} not found"})

        # Check if already granted
        try:
            for perm in target_user.permissions:
                if perm.name == permission_name:
                    return json.dumps({"success": False, "error": f"User already has permission '{permission_name}'"})
        except Exception:
            pass

        # Create and attach the permission
        perm = Permission(name=permission_name)
        target_user.permissions.add(perm)
        logger.info(f"Permission '{permission_name}' granted to {target_principal} by {_get_caller_principal()}")

        return json.dumps({
            "success": True,
            "data": {
                "message": f"Permission '{permission_name}' granted to user",
                "principal": target_principal,
                "permission": permission_name,
            },
        })
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"grant_permission error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def revoke_permission(args) -> str:
    """Remove a fine-grained Permission entity from a user."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_REVOKE)

        target_principal = args_dict.get("target_principal")
        permission_name = args_dict.get("permission_name")
        if not target_principal or not permission_name:
            return json.dumps({"success": False, "error": "target_principal and permission_name are required"})

        target_user = User[target_principal]
        if not target_user:
            return json.dumps({"success": False, "error": f"User {target_principal} not found"})

        # Find and remove the permission
        found = None
        try:
            for perm in target_user.permissions:
                if perm.name == permission_name:
                    found = perm
                    break
        except Exception:
            pass

        if not found:
            return json.dumps({"success": False, "error": f"User does not have permission '{permission_name}'"})

        target_user.permissions.remove(found)
        found.delete()
        logger.info(f"Permission '{permission_name}' revoked from {target_principal} by {_get_caller_principal()}")

        return json.dumps({
            "success": True,
            "data": {
                "message": f"Permission '{permission_name}' revoked from user",
                "principal": target_principal,
                "permission": permission_name,
            },
        })
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"revoke_permission error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def propose_role_assignment(args) -> str:
    """Create a typed governance proposal for role assignment.

    Used in realms where the prehook rejects direct assignment and requires a vote.
    The proposal carries structured metadata with proposal_type and requested_permissions.
    """
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        caller_principal = _get_caller_principal()

        target_principal = args_dict.get("target_principal")
        profile_name = args_dict.get("profile_name")
        if not target_principal or not profile_name:
            return json.dumps({"success": False, "error": "target_principal and profile_name are required"})

        target_user = User[target_principal]
        if not target_user:
            return json.dumps({"success": False, "error": f"User {target_principal} not found"})

        profile = UserProfile[profile_name]
        if not profile:
            return json.dumps({"success": False, "error": f"Profile '{profile_name}' not found"})

        # Generate proposal ID
        existing = Proposal.instances()
        proposal_num = len(existing) + 1
        proposal_id = f"prop_{proposal_num:03d}"

        target_nickname = target_user.nickname or target_principal[:8]
        metadata = json.dumps({
            "proposal_type": "role_assignment",
            "requested_permissions": [Operations.ROLE_ASSIGN],
            "target_principal": target_principal,
            "profile_name": profile_name,
        })

        proposal = Proposal(
            proposal_id=proposal_id,
            title=f"Assign '{profile_name}' to {target_nickname}",
            description=f"Governance proposal to assign the '{profile_name}' profile to user {target_principal}.",
            code_url="",
            code_checksum="",
            proposer=caller,
            status="pending_review",
            voting_deadline="",
            votes_yes=0.0,
            votes_no=0.0,
            votes_abstain=0.0,
            total_voters=0.0,
            required_threshold=0.6,
            metadata=metadata,
        )

        logger.info(f"Role assignment proposal {proposal_id} created by {caller_principal}: "
                    f"assign '{profile_name}' to {target_principal}")

        return json.dumps({
            "success": True,
            "data": {
                "proposal_id": proposal_id,
                "message": f"Governance proposal created to assign '{profile_name}' to user",
            },
        })
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"propose_role_assignment error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


# ---------------------------------------------------------------------------
# Extension API registry
# ---------------------------------------------------------------------------

EXTENSION_FUNCTIONS = {
    "list_users_with_profiles": list_users_with_profiles,
    "get_available_profiles": get_available_profiles,
    "get_user_effective_permissions": get_user_effective_permissions,
    "assign_profile": assign_profile,
    "revoke_profile": revoke_profile,
    "grant_permission": grant_permission,
    "revoke_permission": revoke_permission,
    "propose_role_assignment": propose_role_assignment,
}


def extension_sync_call(method_name: str, args: dict):
    """Synchronous extension API dispatch."""
    if method_name not in EXTENSION_FUNCTIONS:
        return json.dumps({"success": False, "error": f"Unknown method: {method_name}"})

    return EXTENSION_FUNCTIONS[method_name](args)
