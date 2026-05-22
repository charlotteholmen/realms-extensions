"""
Managed Services Extension — backend entry point.

Provides configuration, transaction history, and billing integration
for realm administrators to manage upgrades and credits.
"""

import json
import traceback

from basilisk import ic
from ic_python_logging import get_logger
from core.extensions import create_extension_entity_class
from ic_python_db import String

from _cdk import (
    Async, CallResult, Principal, Record, Service, Variant, Vec,
    float64, nat64, service_query, text,
)

logger = get_logger("extensions.managed_services")

DEFAULT_BILLING_SERVICE_URL = "https://billing.realmsgos.dev"
UPGRADE_COST_CREDITS = 5

# ---------------------------------------------------------------------------
# Extension-scoped config entity
# ---------------------------------------------------------------------------

ExtEntity = create_extension_entity_class("managed_services")


class ManagedServicesConfig(ExtEntity):
    __alias__ = "key"
    key = String()
    value = String()


def _get_cfg(key, default=""):
    cfg = ManagedServicesConfig[key]
    if cfg and cfg.value:
        return cfg.value
    return default


def _set_cfg(key, value):
    cfg = ManagedServicesConfig[key]
    if cfg:
        cfg.value = value
    else:
        ManagedServicesConfig(key=key, value=value)


# ---------------------------------------------------------------------------
# Registry inter-canister service definition
# ---------------------------------------------------------------------------

class CreditTransactionRecord(Record):
    id: text
    principal_id: text
    amount: nat64
    transaction_type: text
    description: text
    stripe_session_id: text
    timestamp: float64


class TransactionHistoryResult(Variant, total=False):
    Ok: Vec[CreditTransactionRecord]
    Err: text


class RegistryTransactionService(Service):
    @service_query
    def get_transactions(self, principal_id: text, limit: nat64) -> TransactionHistoryResult: ...


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _ok(data):
    return json.dumps({"success": True, "data": data})


def _err(msg):
    return json.dumps({"success": False, "error": msg})


def _get_registry_canister_id():
    try:
        from api.registry import get_registry_info
        info = get_registry_info()
        registries = info.get("registries", [])
        if registries:
            return registries[0].get("principal_id", "")
    except Exception:
        pass
    return ""


def _unwrap_call_result(result):
    """Unwrap CallResult[Variant{Ok, Err}] — handles double nesting."""
    def _get(obj, key):
        if isinstance(obj, dict) and key in obj:
            return obj[key]
        return getattr(obj, key, None)

    err = _get(result, "Err")
    if err is not None:
        return {"error": str(err)}
    val = _get(result, "Ok")
    if val is None:
        val = result

    inner_err = _get(val, "Err")
    if inner_err is not None:
        return {"error": str(inner_err)}
    inner_ok = _get(val, "Ok")
    if inner_ok is not None:
        return inner_ok

    return val


# ---------------------------------------------------------------------------
# Public extension functions
# ---------------------------------------------------------------------------

def get_config(args: str) -> str:
    """Return billing and realm configuration needed by the frontend."""
    try:
        billing_url = _get_cfg("billing_service_url", DEFAULT_BILLING_SERVICE_URL)
        realm_canister_id = str(ic.id())
        registry_canister_id = _get_registry_canister_id()

        current_version = ""
        try:
            from api.status import get_status
            status = get_status()
            current_version = status.get("version", "")
        except Exception:
            pass

        return _ok({
            "billing_service_url": billing_url,
            "realm_canister_id": realm_canister_id,
            "registry_canister_id": registry_canister_id,
            "current_version": current_version,
            "upgrade_cost_credits": UPGRADE_COST_CREDITS,
        })
    except Exception as e:
        logger.error(f"get_config error: {e}\n{traceback.format_exc()}")
        return _err(str(e))


def get_transactions(args: str) -> str:
    """Fetch credit transaction history from the registry (async inter-canister call)."""
    try:
        params = json.loads(args) if args else {}
    except Exception:
        params = {}
    limit = int(params.get("limit", 20))

    registry_id = _get_registry_canister_id()
    if not registry_id:
        return _err("No registry canister configured")

    realm_canister_id = str(ic.id())

    try:
        registry = RegistryTransactionService(Principal.from_str(registry_id))
        result: CallResult = yield registry.get_transactions(realm_canister_id, limit)

        inner = _unwrap_call_result(result)
        if isinstance(inner, dict) and "error" in inner:
            return _err(inner["error"])

        transactions = []
        items = inner if isinstance(inner, list) else []
        for t in items:
            if isinstance(t, dict):
                transactions.append(t)
            else:
                transactions.append({
                    "id": str(getattr(t, "id", "")),
                    "principal_id": str(getattr(t, "principal_id", "")),
                    "amount": int(getattr(t, "amount", 0)),
                    "transaction_type": str(getattr(t, "transaction_type", "")),
                    "description": str(getattr(t, "description", "")),
                    "stripe_session_id": str(getattr(t, "stripe_session_id", "")),
                    "timestamp": float(getattr(t, "timestamp", 0)),
                })

        return _ok({"transactions": transactions, "count": len(transactions)})

    except Exception as e:
        logger.error(f"get_transactions error: {e}\n{traceback.format_exc()}")
        return _err(str(e))


def set_config(args: str) -> str:
    """Update extension configuration (admin-only by manifest profile restriction)."""
    try:
        params = json.loads(args) if args else {}
    except Exception:
        return _err("Invalid JSON arguments")

    updated = {}
    if "billing_service_url" in params:
        url = str(params["billing_service_url"]).strip()
        if url:
            _set_cfg("billing_service_url", url)
            updated["billing_service_url"] = url

    if not updated:
        return _err("No valid configuration keys provided")

    return _ok({"updated": updated})
