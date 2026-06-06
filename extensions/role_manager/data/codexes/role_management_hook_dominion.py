"""
Role Management Hook — Dominion (Representative Democracy)

Governance model: Full power delegated to elected admins.
Role assignments are immediate — no vote required for any role.
The admin/user_manager decides, and the system trusts that authority.
"""

from ic_python_logging import get_logger

logger = get_logger("codex.role_management_hook")


def role_assign_prehook(user, profile_name, assigner_principal):
    """Dominion: admin decides, no further checks needed."""
    logger.info(
        f"[Dominion] Role assignment approved: '{profile_name}' → {user.id} "
        f"(assigned by {assigner_principal})"
    )
    return True


def role_revoke_prehook(user, profile_name, revoker_principal):
    """Dominion: admin decides revocations directly."""
    logger.info(
        f"[Dominion] Role revocation approved: '{profile_name}' from {user.id} "
        f"(revoked by {revoker_principal})"
    )
    return True


def role_assign_posthook(user, profile_name, assigner_principal):
    """Post-assignment logging."""
    logger.info(f"[Dominion] Profile '{profile_name}' assigned to {user.id}")


def role_revoke_posthook(user, profile_name, revoker_principal):
    """Post-revocation logging."""
    logger.info(f"[Dominion] Profile '{profile_name}' revoked from {user.id}")


def get_governance_params(proposal_type, requested_permissions):
    """Dominion: low governance friction — quick approvals, modest quorum."""
    return {"quorum": 10, "threshold": 0.5, "notice_hours": 24}
