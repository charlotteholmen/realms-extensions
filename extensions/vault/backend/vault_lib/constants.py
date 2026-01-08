# Canister Configuration and System Limits

# Import canister IDs from central config (updated during deployment)
try:
    from config import CANISTER_IDS

    _ckbtc_ledger = CANISTER_IDS.get("ckbtc_ledger", "mxzaz-hqaaa-aaaar-qaada-cai")
    _ckbtc_indexer = CANISTER_IDS.get("ckbtc_indexer", "n5wcd-faaaa-aaaar-qaaea-cai")
    _realm_token_ledger = CANISTER_IDS.get("realm_token_ledger", "xbkkh-syaaa-aaaah-qq3ya-cai")
    _realm_token_indexer = CANISTER_IDS.get("realm_token_indexer", "xbkkh-syaaa-aaaah-qq3ya-cai")
except ImportError:
    # Fallback to IC mainnet defaults if config not available
    _ckbtc_ledger = "mxzaz-hqaaa-aaaar-qaada-cai"
    _ckbtc_indexer = "n5wcd-faaaa-aaaar-qaaea-cai"
    _realm_token_ledger = "xbkkh-syaaa-aaaah-qq3ya-cai"
    _realm_token_indexer = "xbkkh-syaaa-aaaah-qq3ya-cai"

# Dictionary of canister principal IDs implementing ICRC-1 tokens
# Each token has a corresponding ledger canister for token operations
# and an indexer canister for transaction history and queries
CANISTER_PRINCIPALS = {
    "ckBTC": {
        "ledger": _ckbtc_ledger,
        "indexer": _ckbtc_indexer,
    },
    "REALMS": {
        "ledger": _realm_token_ledger,
        "indexer": _realm_token_indexer,
    },
}

# Default token to use for operations
DEFAULT_TOKEN = "REALMS"

# Maximum number of results to return in paginated responses
# Used to limit the size of transaction history and other list responses
MAX_RESULTS = 20

# Maximum number of iterations for operations that process data in batches
# Prevents infinite loops and excessive resource consumption
MAX_ITERATION_COUNT = 5

# Refresh cooldown: prevent refresh if last one was less than X seconds ago
REFRESH_COOLDOWN = 30
