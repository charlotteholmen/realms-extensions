"""
Mundus Explorer Extension — View sibling realms in the same registry.

Queries the realm registry canister to discover other realms
registered in the same mundus (federation of realms).
"""

import json
import traceback

from basilisk import Async, Principal, ic
from ic_python_logging import get_logger

logger = get_logger("extensions.mundus_explorer")


def _ok(data):
    return json.dumps({"success": True, "data": data})


def _err(e):
    logger.error(f"mundus_explorer error: {e}\n{traceback.format_exc()}")
    return json.dumps({"success": False, "error": str(e)})


def get_mundus_realms(args: str) -> Async[str]:
    """Get all realms registered in the same mundus registry.

    Looks up Registry entities stored locally (populated during realm
    registration) and queries each registry canister's list_realms method.

    Returns a list of realm records with name, URL, user count, etc.
    """
    try:
        from ggg import Registry, Realm
        from _cdk import Service, service_query, text

        class RegistryQuery(Service):
            @service_query
            def list_realms(self) -> text:
                ...

        registries = list(Registry.instances())
        if not registries:
            return _ok({"realms": [], "registry_count": 0, "message": "No registry configured"})

        this_canister = ic.id().to_str()
        all_realms = []
        errors = []

        for reg in registries:
            if not reg.principal_id:
                continue
            try:
                svc = RegistryQuery(Principal.from_str(reg.principal_id))
                raw_result = yield svc.list_realms()

                # list_realms returns vec<RealmRecord> which basilisk decodes
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

        # Get local realm info for context
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

        return _ok({
            "realms": all_realms,
            "registry_count": len(registries),
            "this_canister": this_canister,
            "local_realm": local_realm,
            "errors": errors if errors else None,
        })

    except Exception as e:
        return _err(e)
