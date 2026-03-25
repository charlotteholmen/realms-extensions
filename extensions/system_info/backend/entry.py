"""
System Info Extension — Admin dashboard for Realms.

Provides read-only system diagnostics:
- Python / Basilisk / Realms versions and build metadata
- Installed extensions with versions
- Database entity counts
- Filesystem file counts
- Token balances (via Wallet)
- Canister cycles and memory usage
- Canister IDs and deployment info
"""

import json
import os
import sys
import traceback

from basilisk import ic
from ic_python_db import Database, Entity
from ic_python_logging import get_logger

logger = get_logger("extensions.system_info")


# ------------------------------------------------------------------
# Helpers
# ------------------------------------------------------------------


def _ok(data):
    return json.dumps({"success": True, "data": data})


def _err(e):
    logger.error(f"system_info error: {e}\n{traceback.format_exc()}")
    return json.dumps({"success": False, "error": str(e)})


def _safe(fn, default=None):
    """Run fn(), return default on any exception."""
    try:
        return fn()
    except Exception:
        return default


# ------------------------------------------------------------------
# get_system_info  —  single call that returns everything
# ------------------------------------------------------------------


def get_system_info(args: str) -> str:
    """Return a comprehensive system information snapshot."""
    try:
        data = {}

        # --- Python ---
        data["python"] = {
            "version": sys.version,
            "platform": getattr(sys, "platform", "wasm32"),
        }

        # --- Basilisk ---
        try:
            import basilisk

            data["basilisk"] = {
                "version": getattr(basilisk, "__version__", "unknown"),
                "rust_version": getattr(basilisk, "__rust_version__", "unknown"),
            }
        except Exception as e:
            data["basilisk"] = {"error": str(e)}

        # --- Realms (build-time placeholders replaced by CI) ---
        data["realms"] = {
            "version": "VERSION_PLACEHOLDER",
            "commit": "COMMIT_HASH_PLACEHOLDER",
            "commit_datetime": "COMMIT_DATETIME_PLACEHOLDER",
        }

        # --- Extensions ---
        data["extensions"] = _get_extensions_info()

        # --- DB entity stats ---
        data["db"] = _get_db_stats_inner()

        # --- Filesystem ---
        data["files"] = _get_file_stats_inner()

        # --- Canister ---
        data["canister"] = _get_canister_stats_inner()

        # --- Token balances ---
        data["tokens"] = _get_token_balances_inner()

        # --- Dependencies (build-time) ---
        data["dependencies"] = [
            "ic-basilisk==BASILISK_VERSION_PLACEHOLDER",
            "ic-python-db==IC_PYTHON_DB_VERSION_PLACEHOLDER",
            "ic-python-logging==IC_PYTHON_LOGGING_VERSION_PLACEHOLDER",
        ]

        return _ok(data)
    except Exception as e:
        return _err(e)


# ------------------------------------------------------------------
# get_db_stats  —  entity type breakdown
# ------------------------------------------------------------------


def get_db_stats(args: str) -> str:
    """Return per-entity-type counts from the database."""
    try:
        return _ok(_get_db_stats_inner())
    except Exception as e:
        return _err(e)


def _get_db_stats_inner():
    db = Database.get_instance()
    seen = set()
    entity_counts = {}
    total = 0
    for cls in db._entity_types.values():
        name = cls.__name__
        if name in seen:
            continue
        seen.add(name)
        try:
            count = cls.count()
            entity_counts[name] = count
            total += count
        except Exception:
            entity_counts[name] = -1

    return {
        "entity_types": len(entity_counts),
        "total_entities": total,
        "counts": entity_counts,
    }


# ------------------------------------------------------------------
# get_canister_stats  —  cycles, memory, IDs
# ------------------------------------------------------------------


def get_canister_stats(args: str) -> str:
    """Return canister-level metrics: cycles, memory, IDs."""
    try:
        return _ok(_get_canister_stats_inner())
    except Exception as e:
        return _err(e)


def _get_canister_stats_inner():
    canister_id = _safe(lambda: ic.id().to_str(), "unknown")
    cycles = _safe(lambda: ic.canister_balance128(), 0)
    time_ns = _safe(lambda: ic.time(), 0)

    # Stable memory pages (each page = 64 KiB)
    stable_size_pages = _safe(lambda: ic.stable_size(), 0)
    stable_size_bytes = stable_size_pages * 65536

    # Canister IDs from Realm entity
    canisters = {}
    try:
        from ggg import Realm

        realm = Realm.load("1")
        if realm:
            canisters["backend"] = canister_id
            if getattr(realm, "frontend_canister_id", None):
                canisters["frontend"] = realm.frontend_canister_id
            if getattr(realm, "token_canister_id", None):
                canisters["token"] = realm.token_canister_id
            if getattr(realm, "nft_canister_id", None):
                canisters["nft"] = realm.nft_canister_id
    except Exception:
        canisters["backend"] = canister_id

    return {
        "canister_id": canister_id,
        "cycles": cycles,
        "cycles_tc": round(cycles / 1_000_000_000_000, 4),
        "time_ns": time_ns,
        "stable_memory_pages": stable_size_pages,
        "stable_memory_bytes": stable_size_bytes,
        "stable_memory_mb": round(stable_size_bytes / (1024 * 1024), 2),
        "canisters": canisters,
    }


# ------------------------------------------------------------------
# get_token_balances  —  cached wallet balances
# ------------------------------------------------------------------


def get_token_balances(args: str) -> str:
    """Return cached token balances from the Wallet (no inter-canister calls)."""
    try:
        return _ok(_get_token_balances_inner())
    except Exception as e:
        return _err(e)


def _get_token_balances_inner():
    tokens = []
    try:
        from basilisk.os.wallet import Wallet
        from basilisk.os.entities import Token

        wallet = Wallet()
        for token in Token.instances():
            wallet.register_token(
                name=token.name,
                ledger=token.ledger,
                indexer=getattr(token, "indexer", "") or "",
                decimals=getattr(token, "decimals", 8) or 8,
                fee=getattr(token, "fee", 10) or 10,
            )

        for t in wallet.list_tokens():
            name = t["name"]
            balance = wallet.cached_balance(name)
            tokens.append(
                {
                    "name": name,
                    "ledger": t.get("ledger", ""),
                    "balance_raw": balance,
                    "decimals": t.get("decimals", 8),
                }
            )
    except Exception as e:
        logger.debug(f"Token balance lookup: {e}")

    return {"tokens": tokens, "count": len(tokens)}


# ------------------------------------------------------------------
# Extension info
# ------------------------------------------------------------------


def _get_extensions_info():
    extensions = []
    extensions_commit = "EXTENSIONS_COMMIT_HASH_PLACEHOLDER"
    extensions_commit_datetime = "EXTENSIONS_COMMIT_DATETIME_PLACEHOLDER"
    try:
        from api.extensions import get_all_extension_manifests

        manifests = get_all_extension_manifests()
        for ext_name, manifest in manifests.items():
            extensions.append(
                {
                    "name": ext_name,
                    "version": manifest.get("version", ""),
                    "description": manifest.get("description", ""),
                    "commit": extensions_commit,
                    "commit_datetime": extensions_commit_datetime,
                }
            )
    except Exception as e:
        logger.debug(f"Extension info lookup: {e}")

    return {"extensions": extensions, "count": len(extensions)}


# ------------------------------------------------------------------
# Filesystem stats
# ------------------------------------------------------------------


def _get_file_stats_inner():
    total_files = 0
    total_size = 0
    by_extension = {}

    try:
        for root, dirs, files in os.walk("/"):
            # Skip proc/sys virtual filesystems
            if root.startswith(("/proc", "/sys", "/dev")):
                continue
            for f in files:
                total_files += 1
                ext = os.path.splitext(f)[1].lower() or "(no ext)"
                by_extension[ext] = by_extension.get(ext, 0) + 1
                try:
                    total_size += os.path.getsize(os.path.join(root, f))
                except OSError:
                    pass
    except Exception:
        pass

    # Top 10 extensions by count
    top_extensions = dict(
        sorted(by_extension.items(), key=lambda x: x[1], reverse=True)[:10]
    )

    return {
        "total_files": total_files,
        "total_size_bytes": total_size,
        "total_size_mb": round(total_size / (1024 * 1024), 2),
        "top_extensions": top_extensions,
    }
