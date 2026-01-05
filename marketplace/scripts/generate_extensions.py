#!/usr/bin/env python3
"""
Generate extension data for the Marketplace from extension manifest files.

This script:
1. Reads all manifest.json files from the extensions directory
2. Generates a JSON file with extension metadata for the frontend
3. Creates seed data for the backend to initialize the marketplace
"""

import json
import os
import sys
from pathlib import Path
from typing import Any

# Extensions directory relative to this script
SCRIPT_DIR = Path(__file__).parent
MARKETPLACE_DIR = SCRIPT_DIR.parent
EXTENSIONS_DIR = MARKETPLACE_DIR.parent / "extensions"

# Output files
FRONTEND_EXTENSIONS_FILE = MARKETPLACE_DIR / "marketplace_frontend" / "src" / "lib" / "extensions.json"
BACKEND_SEED_FILE = MARKETPLACE_DIR / "marketplace_backend" / "seed_data.json"

# Category icons mapping
CATEGORY_ICONS = {
    "public_services": "🏛️",
    "finances": "💰",
    "governance": "⚖️",
    "oversight": "👁️",
    "other": "📦",
}

# Default icon for extensions without one
DEFAULT_ICON = "📦"


def find_manifest_files() -> list[Path]:
    """Find all manifest.json files in the extensions directory."""
    manifests = []
    if not EXTENSIONS_DIR.exists():
        print(f"⚠️  Extensions directory not found: {EXTENSIONS_DIR}")
        return manifests
    
    for item in EXTENSIONS_DIR.iterdir():
        if item.is_dir() and not item.name.startswith((".", "_")):
            manifest_path = item / "manifest.json"
            if manifest_path.exists():
                manifests.append(manifest_path)
    
    return sorted(manifests)


def load_manifest(path: Path) -> dict[str, Any] | None:
    """Load and parse a manifest.json file."""
    try:
        with open(path, "r") as f:
            return json.load(f)
    except json.JSONDecodeError as e:
        print(f"⚠️  Error parsing {path}: {e}")
        return None
    except Exception as e:
        print(f"⚠️  Error reading {path}: {e}")
        return None


def get_extension_icon(manifest: dict[str, Any]) -> str:
    """Get icon for extension from manifest or category."""
    if "icon" in manifest:
        icon_name = manifest["icon"]
        # Map common icon names to emojis
        icon_map = {
            "wallet": "💰",
            "brain": "🧠",
            "chart": "📊",
            "users": "👥",
            "shield": "🛡️",
            "globe": "🌐",
            "bell": "🔔",
            "document": "📄",
            "gavel": "⚖️",
            "map": "🗺️",
            "home": "🏠",
            "settings": "⚙️",
            "code": "💻",
            "eye": "👁️",
        }
        return icon_map.get(icon_name, DEFAULT_ICON)
    
    # Use category-based icon
    categories = manifest.get("categories", [])
    if categories:
        return CATEGORY_ICONS.get(categories[0], DEFAULT_ICON)
    
    return DEFAULT_ICON


def determine_price(manifest: dict[str, Any]) -> int:
    """Determine price for extension (0 = free)."""
    # For now, all extensions are free
    # In the future, this could read from manifest["price_e8s"]
    return manifest.get("price_e8s", 0)


def process_extensions() -> tuple[list[dict], list[dict]]:
    """Process all extension manifests and generate data."""
    manifests = find_manifest_files()
    print(f"📁 Found {len(manifests)} extensions")
    
    frontend_data = []
    backend_data = []
    
    for manifest_path in manifests:
        manifest = load_manifest(manifest_path)
        if not manifest:
            continue
        
        extension_id = manifest.get("name", manifest_path.parent.name)
        
        # Skip internal/hidden extensions
        if manifest.get("url_path") is None and not manifest.get("show_in_sidebar", True):
            print(f"  ⏭️  Skipping hidden extension: {extension_id}")
            continue
        
        # Frontend data structure
        frontend_ext = {
            "id": extension_id,
            "name": extension_id.replace("_", " ").title(),
            "description": manifest.get("description", "No description available"),
            "version": manifest.get("version", "1.0.0"),
            "author": manifest.get("author", "Realms Community"),
            "icon": get_extension_icon(manifest),
            "categories": manifest.get("categories", ["other"]),
            "price_e8s": determine_price(manifest),
            "downloads": 0,
            "repository": manifest.get("repository", ""),
            "doc_url": manifest.get("doc_url", ""),
            "license": manifest.get("license", "MIT"),
        }
        frontend_data.append(frontend_ext)
        
        # Backend seed data structure
        backend_ext = {
            "extension_id": extension_id,
            "developer": manifest.get("author", "Realms Community"),
            "name": extension_id.replace("_", " ").title(),
            "description": manifest.get("description", ""),
            "version": manifest.get("version", "1.0.0"),
            "price_e8s": determine_price(manifest),
            "download_url": manifest.get("repository", ""),
            "icon": get_extension_icon(manifest),
            "categories": ",".join(manifest.get("categories", ["other"])),
            "is_active": True,
        }
        backend_data.append(backend_ext)
        
        print(f"  ✅ {extension_id}: {manifest.get('description', '')[:50]}...")
    
    return frontend_data, backend_data


def write_frontend_data(data: list[dict]) -> None:
    """Write extension data for frontend."""
    # Ensure directory exists
    FRONTEND_EXTENSIONS_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    output = {
        "extensions": data,
        "generated_at": __import__("datetime").datetime.now().isoformat(),
        "total_count": len(data),
    }
    
    with open(FRONTEND_EXTENSIONS_FILE, "w") as f:
        json.dump(output, f, indent=2)
    
    print(f"📝 Frontend data written to: {FRONTEND_EXTENSIONS_FILE}")


def write_backend_seed(data: list[dict]) -> None:
    """Write seed data for backend initialization."""
    # Ensure directory exists
    BACKEND_SEED_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    output = {
        "extensions": data,
        "generated_at": __import__("datetime").datetime.now().isoformat(),
    }
    
    with open(BACKEND_SEED_FILE, "w") as f:
        json.dump(output, f, indent=2)
    
    print(f"📝 Backend seed data written to: {BACKEND_SEED_FILE}")


def main():
    print("🔄 Generating extension data for Marketplace...")
    print(f"   Extensions directory: {EXTENSIONS_DIR}")
    print()
    
    frontend_data, backend_data = process_extensions()
    
    print()
    write_frontend_data(frontend_data)
    write_backend_seed(backend_data)
    
    print()
    print(f"✅ Generated data for {len(frontend_data)} extensions")


if __name__ == "__main__":
    main()
