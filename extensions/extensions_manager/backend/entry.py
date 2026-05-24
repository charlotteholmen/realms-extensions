"""
Extensions Manager Extension Backend Entry Point

Provides a summary view of installed extensions and codex packages.
The actual install/uninstall operations are handled by the package_manager extension.
"""

from ic_python_logging import get_logger

logger = get_logger("extensions.extensions_manager")


def extension_sync_call(method_name: str, args: dict):
    """Synchronous extension API calls."""
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
