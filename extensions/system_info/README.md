# System Info Extension

Admin dashboard showing system health, versions, entity counts, token balances, cycles, and canister metadata.

## Features

- **Python / Basilisk / Realms** version and build info
- **Installed extensions** with version, commit, and datetime
- **Database entities** — per-type counts
- **Filesystem** — file counts by extension type
- **Token balances** — cached balances from the Wallet (ckBTC, ckUSD, ICP, etc.)
- **Canister metrics** — cycles (TC), stable memory (MB), canister IDs
- **Dependencies** — build-time dependency versions

## Backend Functions

| Function | Type | Description |
|---|---|---|
| `get_system_info` | sync | Full system snapshot (all sections) |
| `get_db_stats` | sync | Per-entity-type counts |
| `get_canister_stats` | sync | Cycles, memory, canister IDs |
| `get_token_balances` | sync | Cached wallet balances |

## Access

Admin-only (`profiles: ["admin"]`). Available at `/extensions/system_info`.
