def greet(args: str) -> str:
    """Return a hello world greeting for the given name.

    Args:
        args: The name to greet (plain string).

    Returns:
        "Hello, <name>!" string.
    """
    name = (args or "").strip() or "World"
    return f"Hello, {name}!"
