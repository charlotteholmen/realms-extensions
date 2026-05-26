"""
Mundus Explorer Extension — View sibling realms in the same registry.

Queries the realm registry canister to discover other realms
registered in the same mundus (federation of realms).
"""

import json
import traceback

from basilisk import ic
from ic_python_logging import get_logger

logger = get_logger("extensions.mundus_explorer")

_REGISTRY_BY_NETWORK = {
    "test": "yhw3g-fyaaa-aaaas-qgorq-cai",
    "staging": "7wzxh-wyaaa-aaaau-aggyq-cai",
    "demo": "rhw4p-gqaaa-aaaac-qbw7q-cai",
}


def _ok(data):
    return json.dumps({"success": True, "data": data})


def _err(e):
    logger.error(f"mundus_explorer error: {e}\n{traceback.format_exc()}")
    return json.dumps({"success": False, "error": str(e)})


def _discover_registry_ids():
    """Discover registry canister IDs from local DB entities or network config."""
    registry_ids = []
    try:
        from ggg import Registry
        for reg in Registry.instances():
            if reg.principal_id:
                registry_ids.append(reg.principal_id)
    except Exception:
        pass

    if not registry_ids:
        try:
            from ggg import Realm
            realms = list(Realm.instances())
            if realms:
                network = getattr(realms[0], "network", "") or ""
                fallback = _REGISTRY_BY_NETWORK.get(network)
                if fallback:
                    registry_ids.append(fallback)
        except Exception:
            pass

    return registry_ids


def get_mundus_realms(args: str) -> str:
    """Get local realm/registry metadata (sync call).

    The frontend uses the returned registry info to decide whether
    to issue the follow-up async call to fetch_realms_from_registry.
    """
    try:
        from ggg import Realm

        this_canister = ic.id().to_str()

        local_realm = None
        try:
            realms = list(Realm.instances())
            if realms:
                r = realms[0]
                local_realm = {
                    "name": r.name,
                    "status": r.status,
                    "network": getattr(r, "network", "") or "",
                }
        except Exception:
            pass

        registry_ids = _discover_registry_ids()

        registry_info = [{"principal_id": rid} for rid in registry_ids]

        return _ok({
            "realms": [],
            "registry_count": len(registry_ids),
            "this_canister": this_canister,
            "local_realm": local_realm,
            "registries": registry_info,
        })

    except Exception as e:
        return _err(e)


def fetch_realms_from_registry(args: str) -> str:
    """Fetch realms from registry via inter-canister call (async).

    Called by the frontend after the sync call confirms registries exist.
    """
    from basilisk import Principal
    from _cdk import Record, Service, Vec, float64, nat64, service_query, text

    class RealmRecord(Record):
        id: text
        name: text
        url: text
        backend_url: text
        logo: text
        users_count: nat64
        created_at: float64
        frontend_canister_id: text

    class RegistryQuery(Service):
        @service_query
        def list_realms(self) -> Vec[RealmRecord]:
            ...

    try:
        registry_ids = _discover_registry_ids()
        if not registry_ids:
            return _ok({"realms": [], "message": "No registry configured"})

        this_canister = ic.id().to_str()
        all_realms = []
        errors = []

        for reg_id in registry_ids:
            try:
                svc = RegistryQuery(Principal.from_str(reg_id))
                raw_result = yield svc.list_realms()

                if hasattr(raw_result, "Ok"):
                    realms_list = raw_result.Ok
                else:
                    realms_list = raw_result

                if isinstance(realms_list, str):
                    realms_list = json.loads(realms_list)

                for r in (realms_list or []):
                    if isinstance(r, dict):
                        realm_data = r
                    else:
                        realm_data = {
                            "id": getattr(r, "id", ""),
                            "name": getattr(r, "name", ""),
                            "url": getattr(r, "url", ""),
                            "backend_url": getattr(r, "backend_url", ""),
                            "logo": getattr(r, "logo", ""),
                            "users_count": int(getattr(r, "users_count", 0)),
                            "created_at": float(getattr(r, "created_at", 0)),
                            "frontend_canister_id": getattr(r, "frontend_canister_id", ""),
                        }
                    realm_data["is_self"] = (realm_data.get("id", "") == this_canister)
                    all_realms.append(realm_data)

            except Exception as e:
                errors.append(f"Registry {reg_id}: {str(e)}")
                logger.error(f"Error querying registry {reg_id}: {e}")

        return _ok({
            "realms": all_realms,
            "this_canister": this_canister,
            "errors": errors if errors else None,
        })

    except Exception as e:
        return _err(e)
