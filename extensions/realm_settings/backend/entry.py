"""
Realm Settings Extension Backend Entry Point

Realm settings are managed directly via the backend's update_realm_config
and status endpoints. This extension provides a minimal backend to satisfy
the extension contract but delegates all work to the core realm backend.
"""

from ic_python_logging import get_logger

logger = get_logger("extensions.realm_settings")


def extension_sync_call(method_name: str, args: dict):
    """Synchronous extension API calls for realm settings.

    Most settings operations use the core backend directly
    (update_realm_config, status) rather than extension calls.
    This entry point exists for extensibility.
    """
    methods = {
        "health": (health, False),
    }

    if method_name not in methods:
        return {"success": False, "error": f"Unknown method: {method_name}"}

    function, requires_args = methods[method_name]

    try:
        if requires_args:
            return function(args)
        else:
            return function()
    except Exception as e:
        return {"success": False, "error": f"Error calling {method_name}: {str(e)}"}


def health(args=None):
    """Health check."""
    return {"success": True, "data": {"status": "ok"}}
