def greet(args: str) -> str:
    """Return a hello world greeting for the given name.

    Args:
        args: JSON string, e.g. '{"name": "Alice"}'.

    Returns:
        JSON string with the greeting, e.g. '{"greeting": "Hello, Alice!"}'.
    """
    import json
    try:
        data = json.loads(args) if args else {}
        name = data.get("name", "").strip() if isinstance(data, dict) else ""
    except (json.JSONDecodeError, AttributeError):
        name = (args or "").strip()
    name = name or "World"
    return json.dumps(f"Hello, {name}!")
