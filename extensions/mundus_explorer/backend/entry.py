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


def _ok(data):
    return json.dumps({"success": True, "data": data})


def _err(e):
    logger.error(f"mundus_explorer error: {e}\n{traceback.format_exc()}")
    return json.dumps({"success": False, "error": str(e)})


def get_mundus_realms(args: str) -> str:
    """Get all realms registered in the same mundus registry.

    Returns local registry info and realm metadata. The inter-canister
    call to the registry's list_realms is handled via the async variant
    (get_mundus_realms_async) when needed.
    """
    try:
        from ggg import Registry, Realm

        registries = list(Registry.instances())
        this_canister = ic.id().to_str()

        # Get local realm info
        local_realm = None
        try:
            realms = list(Realm.instances())
            if realms:
                r = realms[0]
                local_realm = {
                    "name": r.name,
                    "status": r.status,
                    "network": r.network,
                }
        except Exception:
            pass

        if not registries:
            return _ok({
                "realms": [],
                "registry_count": 0,
                "this_canister": this_canister,
                "local_realm": local_realm,
                "registries": [],
                "message": "No registry configured. Register this realm with a registry to see sibling realms.",
            })

        registry_info = []
        for reg in registries:
            registry_info.append({
                "name": reg.name,
                "principal_id": reg.principal_id,
            })

        return _ok({
            "realms": [],
            "registry_count": len(registries),
            "this_canister": this_canister,
            "local_realm": local_realm,
            "registries": registry_info,
            "message": "Registry found. Use fetch_realms to load sibling realms.",
        })

    except Exception as e:
        return _err(e)


def fetch_realms_from_registry(args: str) -> str:
    """Fetch realms from registry via inter-canister call (async).

    This is called as an async extension call by the frontend
    after the initial sync call returns registry info.
    """
    from basilisk import Async, Principal
    from _cdk import Service, service_query, text

    class RegistryQuery(Service):
        @service_query
        def list_realms(self) -> text:
            ...

    try:
        from ggg import Registry

        registries = list(Registry.instances())
        if not registries:
            return _ok({"realms": [], "message": "No registry configured"})

        this_canister = ic.id().to_str()
        all_realms = []
        errors = []

        for reg in registries:
            if not reg.principal_id:
                continue
            try:
                svc = RegistryQuery(Principal.from_str(reg.principal_id))
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
                errors.append(f"Registry {reg.principal_id}: {str(e)}")
                logger.error(f"Error querying registry {reg.principal_id}: {e}")

        return _ok({
            "realms": all_realms,
            "this_canister": this_canister,
            "errors": errors if errors else None,
        })

    except Exception as e:
        return _err(e)
