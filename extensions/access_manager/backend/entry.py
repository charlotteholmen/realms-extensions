"""
Access Manager Extension Backend

Comprehensive admin interface for managing:
  - Departments (create, edit, hierarchy, member management)
  - Extension access (grant/revoke per user, department, or profile)
  - Profile/role assignment with scoped delegation

Supersedes the basic role_manager extension.
"""

import json
import traceback
from typing import Any, Dict, List

from ggg import Department, Extension, Permission, User, UserProfile
from ggg.system.user_profile import Operations, Profiles, OPERATIONS_SEPARATOR
from basilisk import ic
from ic_python_logging import get_logger

logger = get_logger("extensions.access_manager")


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _parse_args(args):
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
    return False


def _require_operation(user: User, operation: str):
    if not _is_allowed(user, operation):
        raise PermissionError(
            f"Access denied: user {user.id} lacks permission '{operation}'"
        )


def _is_dept_head(user: User, dept: Department) -> bool:
    """Check if user is the head of the given department."""
    try:
        return dept.head and dept.head.id == user.id
    except Exception:
        return False


def _can_manage_dept(user: User, dept: Department) -> bool:
    """Admin or department head can manage a department."""
    if _is_allowed(user, Operations.ALL):
        return True
    if _is_allowed(user, Operations.ROLE_ASSIGN):
        return True
    return _is_dept_head(user, dept)


# ---------------------------------------------------------------------------
# Department Management
# ---------------------------------------------------------------------------

def list_departments(args) -> str:
    """List all departments with member counts."""
    try:
        _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_VIEW)

        depts = []
        for dept in Department.instances():
            members = []
            try:
                for m in dept.members:
                    members.append({"principal": m.id, "nickname": m.nickname or ""})
            except Exception:
                pass

            extensions = []
            try:
                for ext in dept.extensions:
                    extensions.append(ext.name)
            except Exception:
                pass

            head_info = None
            try:
                if dept.head:
                    head_info = {"principal": dept.head.id, "nickname": dept.head.nickname or ""}
            except Exception:
                pass

            parent_name = None
            try:
                if dept.parent:
                    parent_name = dept.parent.name
            except Exception:
                pass

            permissions = []
            try:
                for perm in dept.permissions:
                    permissions.append(perm.name)
            except Exception:
                pass

            depts.append({
                "name": dept.name,
                "description": dept.description or "",
                "head": head_info,
                "parent": parent_name,
                "member_count": len(members),
                "members": members,
                "extensions": extensions,
                "permissions": permissions,
            })

        return json.dumps({"success": True, "data": {"departments": depts, "total": len(depts)}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"list_departments error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def create_department(args) -> str:
    """Create a new department."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.ROLE_ASSIGN)

        name = args_dict.get("name")
        description = args_dict.get("description", "")
        head_principal = args_dict.get("head_principal")
        parent_name = args_dict.get("parent")

        if not name:
            return json.dumps({"success": False, "error": "name is required"})

        existing = Department[name]
        if existing:
            return json.dumps({"success": False, "error": f"Department '{name}' already exists"})

        dept = Department(name=name, description=description)

        if head_principal:
            head_user = User[head_principal]
            if head_user:
                dept.head = head_user

        if parent_name:
            parent_dept = Department[parent_name]
            if parent_dept:
                dept.parent = parent_dept

        logger.info(f"Department '{name}' created by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"name": name, "message": f"Department '{name}' created"}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"create_department error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def update_department(args) -> str:
    """Update a department's description or head."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()

        name = args_dict.get("name")
        if not name:
            return json.dumps({"success": False, "error": "name is required"})

        dept = Department[name]
        if not dept:
            return json.dumps({"success": False, "error": f"Department '{name}' not found"})

        if not _can_manage_dept(caller, dept):
            return json.dumps({"success": False, "error": "Access denied"})

        if "description" in args_dict:
            dept.description = args_dict["description"]
        if "head_principal" in args_dict:
            head_user = User[args_dict["head_principal"]]
            if head_user:
                dept.head = head_user
        if "parent" in args_dict:
            if args_dict["parent"]:
                parent_dept = Department[args_dict["parent"]]
                if parent_dept:
                    dept.parent = parent_dept
            else:
                dept.parent = None

        logger.info(f"Department '{name}' updated by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"name": name, "message": f"Department '{name}' updated"}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"update_department error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def delete_department(args) -> str:
    """Delete a department."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.ROLE_ASSIGN)

        name = args_dict.get("name")
        if not name:
            return json.dumps({"success": False, "error": "name is required"})

        dept = Department[name]
        if not dept:
            return json.dumps({"success": False, "error": f"Department '{name}' not found"})

        dept.delete()
        logger.info(f"Department '{name}' deleted by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"message": f"Department '{name}' deleted"}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"delete_department error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def add_department_member(args) -> str:
    """Add a user to a department."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()

        dept_name = args_dict.get("department")
        user_principal = args_dict.get("user_principal")
        if not dept_name or not user_principal:
            return json.dumps({"success": False, "error": "department and user_principal are required"})

        dept = Department[dept_name]
        if not dept:
            return json.dumps({"success": False, "error": f"Department '{dept_name}' not found"})

        if not _can_manage_dept(caller, dept):
            return json.dumps({"success": False, "error": "Access denied"})

        user = User[user_principal]
        if not user:
            return json.dumps({"success": False, "error": f"User '{user_principal}' not found"})

        dept.members.add(user)
        logger.info(f"User {user_principal} added to department '{dept_name}' by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"message": f"User added to '{dept_name}'"}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"add_department_member error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def remove_department_member(args) -> str:
    """Remove a user from a department."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()

        dept_name = args_dict.get("department")
        user_principal = args_dict.get("user_principal")
        if not dept_name or not user_principal:
            return json.dumps({"success": False, "error": "department and user_principal are required"})

        dept = Department[dept_name]
        if not dept:
            return json.dumps({"success": False, "error": f"Department '{dept_name}' not found"})

        if not _can_manage_dept(caller, dept):
            return json.dumps({"success": False, "error": "Access denied"})

        user = User[user_principal]
        if not user:
            return json.dumps({"success": False, "error": f"User '{user_principal}' not found"})

        dept.members.remove(user)
        logger.info(f"User {user_principal} removed from department '{dept_name}' by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"message": f"User removed from '{dept_name}'"}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"remove_department_member error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


# ---------------------------------------------------------------------------
# Department Permission Management
# ---------------------------------------------------------------------------

def get_department_permissions(args) -> str:
    """Returns all permissions attached to a department."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_VIEW)

        dept_name = args_dict.get("department")
        if not dept_name:
            return json.dumps({"success": False, "error": "department is required"})

        dept = Department[dept_name]
        if not dept:
            return json.dumps({"success": False, "error": f"Department '{dept_name}' not found"})

        permissions = []
        for p in dept.permissions:
            permissions.append({
                "name": p.name,
                "description": p.description or "",
                "category": p.category or "",
            })

        return json.dumps({
            "success": True,
            "data": {"department": dept_name, "permissions": permissions},
        })
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"get_department_permissions error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def grant_department_permission(args) -> str:
    """Grants a permission to a department."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_GRANT)

        dept_name = args_dict.get("department")
        permission_name = args_dict.get("permission_name")
        if not dept_name or not permission_name:
            return json.dumps({"success": False, "error": "department and permission_name are required"})

        dept = Department[dept_name]
        if not dept:
            return json.dumps({"success": False, "error": f"Department '{dept_name}' not found"})

        perm = Permission[permission_name]
        if not perm:
            perm = Permission(name=permission_name)

        for existing in dept.permissions:
            if existing.name == permission_name:
                return json.dumps({"success": False, "error": f"Permission '{permission_name}' already granted to department '{dept_name}'"})

        dept.permissions.add(perm)
        logger.info(f"Permission '{permission_name}' granted to department '{dept_name}' by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"message": f"Permission '{permission_name}' granted to department '{dept_name}'"}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"grant_department_permission error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def revoke_department_permission(args) -> str:
    """Revokes a permission from a department."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_REVOKE)

        dept_name = args_dict.get("department")
        permission_name = args_dict.get("permission_name")
        if not dept_name or not permission_name:
            return json.dumps({"success": False, "error": "department and permission_name are required"})

        dept = Department[dept_name]
        if not dept:
            return json.dumps({"success": False, "error": f"Department '{dept_name}' not found"})

        target_perm = None
        for p in dept.permissions:
            if p.name == permission_name:
                target_perm = p
                break

        if not target_perm:
            return json.dumps({"success": False, "error": f"Permission '{permission_name}' not found on department '{dept_name}'"})

        dept.permissions.remove(target_perm)
        logger.info(f"Permission '{permission_name}' revoked from department '{dept_name}' by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"message": f"Permission '{permission_name}' revoked from department '{dept_name}'"}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"revoke_department_permission error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def batch_grant_department_permissions(args) -> str:
    """Grant multiple permissions to a department at once."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_GRANT)

        dept_name = args_dict.get("department")
        permission_names = args_dict.get("permission_names", [])
        if not dept_name or not permission_names:
            return json.dumps({"success": False, "error": "department and permission_names are required"})

        dept = Department[dept_name]
        if not dept:
            return json.dumps({"success": False, "error": f"Department '{dept_name}' not found"})

        has_all = _is_allowed(caller, Operations.ALL)
        existing_names = {p.name for p in dept.permissions}

        granted = 0
        skipped = 0
        for perm_name in permission_names:
            if perm_name in existing_names:
                skipped += 1
                continue
            if not has_all and not _is_allowed(caller, perm_name):
                skipped += 1
                continue
            perm = Permission[perm_name]
            if not perm:
                perm = Permission(name=perm_name)
            dept.permissions.add(perm)
            granted += 1

        logger.info(f"Batch grant to department '{dept_name}': {granted} granted, {skipped} skipped by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"department": dept_name, "granted": granted, "skipped": skipped}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"batch_grant_department_permissions error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def batch_revoke_department_permissions(args) -> str:
    """Revoke multiple permissions from a department at once."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_REVOKE)

        dept_name = args_dict.get("department")
        permission_names = args_dict.get("permission_names", [])
        if not dept_name or not permission_names:
            return json.dumps({"success": False, "error": "department and permission_names are required"})

        dept = Department[dept_name]
        if not dept:
            return json.dumps({"success": False, "error": f"Department '{dept_name}' not found"})

        revoked = 0
        skipped = 0
        for perm_name in permission_names:
            target_perm = None
            for p in dept.permissions:
                if p.name == perm_name:
                    target_perm = p
                    break
            if not target_perm:
                skipped += 1
                continue
            dept.permissions.remove(target_perm)
            revoked += 1

        logger.info(f"Batch revoke from department '{dept_name}': {revoked} revoked, {skipped} skipped by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"department": dept_name, "revoked": revoked, "skipped": skipped}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"batch_revoke_department_permissions error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


# ---------------------------------------------------------------------------
# Extension Access Management
# ---------------------------------------------------------------------------

def list_extensions(args) -> str:
    """List all Extension entities with their access grants."""
    try:
        _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_VIEW)

        extensions = []
        for ext in Extension.instances():
            users = []
            try:
                for u in ext.users:
                    users.append({"principal": u.id, "nickname": u.nickname or ""})
            except Exception:
                pass

            departments = []
            try:
                for d in ext.departments:
                    departments.append(d.name)
            except Exception:
                pass

            profiles = []
            try:
                for p in ext.profiles:
                    profiles.append(p.name)
            except Exception:
                pass

            extensions.append({
                "name": ext.name,
                "description": ext.description or "",
                "users": users,
                "departments": departments,
                "profiles": profiles,
            })

        return json.dumps({"success": True, "data": {"extensions": extensions, "total": len(extensions)}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"list_extensions error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def grant_extension_to_user(args) -> str:
    """Grant direct extension access to a user."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.ROLE_ASSIGN)

        ext_name = args_dict.get("extension")
        user_principal = args_dict.get("user_principal")
        if not ext_name or not user_principal:
            return json.dumps({"success": False, "error": "extension and user_principal are required"})

        ext = Extension[ext_name]
        if not ext:
            return json.dumps({"success": False, "error": f"Extension '{ext_name}' not found"})

        user = User[user_principal]
        if not user:
            return json.dumps({"success": False, "error": f"User '{user_principal}' not found"})

        ext.users.add(user)
        logger.info(f"Extension '{ext_name}' granted to user {user_principal} by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"message": f"Extension '{ext_name}' granted to user"}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"grant_extension_to_user error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def revoke_extension_from_user(args) -> str:
    """Revoke direct extension access from a user."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.ROLE_ASSIGN)

        ext_name = args_dict.get("extension")
        user_principal = args_dict.get("user_principal")
        if not ext_name or not user_principal:
            return json.dumps({"success": False, "error": "extension and user_principal are required"})

        ext = Extension[ext_name]
        if not ext:
            return json.dumps({"success": False, "error": f"Extension '{ext_name}' not found"})

        user = User[user_principal]
        if not user:
            return json.dumps({"success": False, "error": f"User '{user_principal}' not found"})

        ext.users.remove(user)
        logger.info(f"Extension '{ext_name}' revoked from user {user_principal} by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"message": f"Extension '{ext_name}' revoked from user"}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"revoke_extension_from_user error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def grant_extension_to_department(args) -> str:
    """Grant extension access to an entire department."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.ROLE_ASSIGN)

        ext_name = args_dict.get("extension")
        dept_name = args_dict.get("department")
        if not ext_name or not dept_name:
            return json.dumps({"success": False, "error": "extension and department are required"})

        ext = Extension[ext_name]
        if not ext:
            return json.dumps({"success": False, "error": f"Extension '{ext_name}' not found"})

        dept = Department[dept_name]
        if not dept:
            return json.dumps({"success": False, "error": f"Department '{dept_name}' not found"})

        ext.departments.add(dept)
        logger.info(f"Extension '{ext_name}' granted to department '{dept_name}' by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"message": f"Extension '{ext_name}' granted to department '{dept_name}'"}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"grant_extension_to_department error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def revoke_extension_from_department(args) -> str:
    """Revoke extension access from a department."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.ROLE_ASSIGN)

        ext_name = args_dict.get("extension")
        dept_name = args_dict.get("department")
        if not ext_name or not dept_name:
            return json.dumps({"success": False, "error": "extension and department are required"})

        ext = Extension[ext_name]
        if not ext:
            return json.dumps({"success": False, "error": f"Extension '{ext_name}' not found"})

        dept = Department[dept_name]
        if not dept:
            return json.dumps({"success": False, "error": f"Department '{dept_name}' not found"})

        ext.departments.remove(dept)
        logger.info(f"Extension '{ext_name}' revoked from department '{dept_name}' by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"message": f"Extension '{ext_name}' revoked from department '{dept_name}'"}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"revoke_extension_from_department error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def grant_extension_to_profile(args) -> str:
    """Grant extension access at the profile level."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.ROLE_ASSIGN)

        ext_name = args_dict.get("extension")
        profile_name = args_dict.get("profile")
        if not ext_name or not profile_name:
            return json.dumps({"success": False, "error": "extension and profile are required"})

        ext = Extension[ext_name]
        if not ext:
            return json.dumps({"success": False, "error": f"Extension '{ext_name}' not found"})

        profile = UserProfile[profile_name]
        if not profile:
            return json.dumps({"success": False, "error": f"Profile '{profile_name}' not found"})

        ext.profiles.add(profile)
        logger.info(f"Extension '{ext_name}' granted to profile '{profile_name}' by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"message": f"Extension '{ext_name}' granted to profile '{profile_name}'"}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"grant_extension_to_profile error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def revoke_extension_from_profile(args) -> str:
    """Revoke extension access from a profile."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.ROLE_ASSIGN)

        ext_name = args_dict.get("extension")
        profile_name = args_dict.get("profile")
        if not ext_name or not profile_name:
            return json.dumps({"success": False, "error": "extension and profile are required"})

        ext = Extension[ext_name]
        if not ext:
            return json.dumps({"success": False, "error": f"Extension '{ext_name}' not found"})

        profile = UserProfile[profile_name]
        if not profile:
            return json.dumps({"success": False, "error": f"Profile '{profile_name}' not found"})

        ext.profiles.remove(profile)
        logger.info(f"Extension '{ext_name}' revoked from profile '{profile_name}' by {_get_caller_principal()}")
        return json.dumps({"success": True, "data": {"message": f"Extension '{ext_name}' revoked from profile '{profile_name}'"}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"revoke_extension_from_profile error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


# ---------------------------------------------------------------------------
# Profile/Role Management (carries forward from role_manager)
# ---------------------------------------------------------------------------

def list_users(args) -> str:
    """List all users with their profiles, departments, and extensions."""
    try:
        _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_VIEW)

        users = []
        for user in User.instances():
            profiles = [p.name for p in user.profiles]

            departments = []
            try:
                for d in user.departments:
                    departments.append(d.name)
            except Exception:
                pass

            direct_extensions = []
            try:
                for ext in user.extensions:
                    direct_extensions.append(ext.name)
            except Exception:
                pass

            users.append({
                "principal": user.id,
                "nickname": user.nickname or "",
                "profiles": profiles,
                "departments": departments,
                "direct_extensions": direct_extensions,
            })

        return json.dumps({"success": True, "data": {"users": users, "total": len(users)}})
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"list_users error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_user_access_summary(args) -> str:
    """Full access picture for a single user: profiles, departments, extensions with reasons."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        _require_operation(caller, Operations.PERMISSION_VIEW)

        user_principal = args_dict.get("user_principal")
        if not user_principal:
            return json.dumps({"success": False, "error": "user_principal is required"})

        user = User[user_principal]
        if not user:
            return json.dumps({"success": False, "error": f"User '{user_principal}' not found"})

        profiles = [p.name for p in user.profiles]

        departments = []
        try:
            for d in user.departments:
                departments.append({"name": d.name, "is_head": _is_dept_head(user, d)})
        except Exception:
            pass

        # Build extension visibility with reasons
        ext_map = {}

        try:
            for ext in user.extensions:
                ext_map.setdefault(ext.name, []).append("direct")
        except Exception:
            pass

        try:
            for dept in user.departments:
                for ext in dept.extensions:
                    ext_map.setdefault(ext.name, []).append(f"department:{dept.name}")
        except Exception:
            pass

        try:
            for profile in user.profiles:
                for ext in profile.extensions:
                    ext_map.setdefault(ext.name, []).append(f"profile:{profile.name}")
        except Exception:
            pass

        extensions = [{"name": k, "reasons": v} for k, v in sorted(ext_map.items())]

        return json.dumps({
            "success": True,
            "data": {
                "principal": user_principal,
                "nickname": user.nickname or "",
                "profiles": profiles,
                "departments": departments,
                "extensions": extensions,
            },
        })
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"get_user_access_summary error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def assign_profile(args) -> str:
    """Assign a profile to a user. Supports scoped delegation for dept heads."""
    try:
        args_dict = _parse_args(args)
        caller = _get_caller_user()
        caller_principal = _get_caller_principal()

        target_principal = args_dict.get("target_principal")
        profile_name = args_dict.get("profile_name")
        if not target_principal or not profile_name:
            return json.dumps({"success": False, "error": "target_principal and profile_name are required"})

        # Check permission: global ROLE_ASSIGN or scoped dept head delegation
        if not _is_allowed(caller, Operations.ROLE_ASSIGN):
            # Check scoped delegation: is caller head of a dept that has this profile?
            can_delegate = False
            try:
                for dept in caller.headed_departments:
                    for perm in dept.permissions:
                        if perm.name == f"delegate:{profile_name}":
                            can_delegate = True
                            break
                    if can_delegate:
                        break
            except Exception:
                pass
            if not can_delegate:
                raise PermissionError(f"Access denied: cannot assign profile '{profile_name}'")

        target_user = User[target_principal]
        if not target_user:
            return json.dumps({"success": False, "error": f"User {target_principal} not found"})

        profile = UserProfile[profile_name]
        if not profile:
            return json.dumps({"success": False, "error": f"Profile '{profile_name}' not found"})

        current_profiles = [p.name for p in target_user.profiles]
        if profile_name in current_profiles:
            return json.dumps({"success": False, "error": f"User already has profile '{profile_name}'"})

        target_user.profiles.add(profile)
        logger.info(f"Profile '{profile_name}' assigned to {target_principal} by {caller_principal}")

        return json.dumps({
            "success": True,
            "data": {
                "message": f"Profile '{profile_name}' assigned",
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
    """Revoke a profile from a user."""
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

        current_profiles = [p.name for p in target_user.profiles]
        if profile_name not in current_profiles:
            return json.dumps({"success": False, "error": f"User does not have profile '{profile_name}'"})

        target_user.profiles.remove(profile)
        logger.info(f"Profile '{profile_name}' revoked from {target_principal} by {caller_principal}")

        return json.dumps({
            "success": True,
            "data": {
                "message": f"Profile '{profile_name}' revoked",
                "principal": target_principal,
                "profiles": [p.name for p in target_user.profiles],
            },
        })
    except PermissionError as e:
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"revoke_profile error: {e}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_available_profiles(args) -> str:
    """List all defined profiles."""
    try:
        _parse_args(args)
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


# ---------------------------------------------------------------------------
# Extension API registry
# ---------------------------------------------------------------------------

EXTENSION_FUNCTIONS = {
    # Departments
    "list_departments": list_departments,
    "create_department": create_department,
    "update_department": update_department,
    "delete_department": delete_department,
    "add_department_member": add_department_member,
    "remove_department_member": remove_department_member,
    # Department permissions
    "get_department_permissions": get_department_permissions,
    "grant_department_permission": grant_department_permission,
    "revoke_department_permission": revoke_department_permission,
    "batch_grant_department_permissions": batch_grant_department_permissions,
    "batch_revoke_department_permissions": batch_revoke_department_permissions,
    # Extension access
    "list_extensions": list_extensions,
    "grant_extension_to_user": grant_extension_to_user,
    "revoke_extension_from_user": revoke_extension_from_user,
    "grant_extension_to_department": grant_extension_to_department,
    "revoke_extension_from_department": revoke_extension_from_department,
    "grant_extension_to_profile": grant_extension_to_profile,
    "revoke_extension_from_profile": revoke_extension_from_profile,
    # Users & profiles
    "list_users": list_users,
    "get_user_access_summary": get_user_access_summary,
    "assign_profile": assign_profile,
    "revoke_profile": revoke_profile,
    "get_available_profiles": get_available_profiles,
}


def extension_sync_call(method_name: str, args: dict):
    """Synchronous extension API dispatch."""
    if method_name not in EXTENSION_FUNCTIONS:
        return json.dumps({"success": False, "error": f"Unknown method: {method_name}"})
    return EXTENSION_FUNCTIONS[method_name](args)
