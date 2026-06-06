# Role Management Hook Codex Examples

These are example codex implementations for the `role_management_hook` that define per-realm governance policy for role assignment and revocation.

To install a codex, create a `Codex` entity named `role_management_hook` with the code from one of these files.

## Governance Models

| File | Model | Trust Level | Description |
|------|-------|-------------|-------------|
| `role_management_hook_dominion.py` | Dominion | Representative | Full power on elected admins, no vote required |
| `role_management_hook_agora.py` | Agora | Semi-Direct | Swiss model — sensitive roles require a vote, routine roles assigned directly |
| `role_management_hook_syntropia.py` | Syntropia | Direct Democracy | Every role assignment requires collective approval |

## Hook Functions

Each codex can implement any combination of:

- `role_assign_prehook(user, profile_name, assigner_principal)` — Called before assignment. Raise `PermissionError` to reject.
- `role_assign_posthook(user, profile_name, assigner_principal)` — Called after successful assignment.
- `role_revoke_prehook(user, profile_name, revoker_principal)` — Called before revocation. Raise `PermissionError` to reject.
- `role_revoke_posthook(user, profile_name, revoker_principal)` — Called after successful revocation.
- `get_governance_params(proposal_type, requested_permissions)` — Returns `{"quorum": %, "threshold": 0-1, "notice_hours": int}` for the voting extension.

## Governance Parameters

| Parameter | Description | Dominion | Agora | Syntropia |
|-----------|-------------|----------|-------|-----------|
| `quorum` | % of active members that must vote | 10% | 25% | 66% |
| `threshold` | Approval ratio (yes/decisive) | 50% | 60% | 75% |
| `notice_hours` | Minimum voting window | 24h | 72h | 168h (7d) |
