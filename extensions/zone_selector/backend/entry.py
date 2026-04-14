"""
Zone Selector extension entry point
Allows users to set their zones of influence via geolocation or map selection
"""

import json
import traceback
from typing import Any, Dict

try:
    from core.h3 import latlng_to_cell, cell_to_latlng
    H3_AVAILABLE = True
except ImportError:
    H3_AVAILABLE = False

from ggg import Zone, User
from ic_python_logging import get_logger

logger = get_logger("extensions.zone_selector")


def get_my_zones(args: str) -> str:
    """Get zones for the current user"""
    logger.info(f"zone_selector.get_my_zones called with args: {args}")

    try:
        params = json.loads(args) if args else {}
        user_id = params.get("user_id")

        if not user_id:
            return json.dumps({"success": False, "error": "user_id is required"})

        zones = []
        for zone in Zone.instances():
            if zone.user and zone.user.id == user_id:
                zones.append({
                    "id": zone.id,
                    "h3_index": zone.h3_index,
                    "name": zone.name,
                    "description": zone.description,
                    "latitude": zone.latitude,
                    "longitude": zone.longitude,
                    "resolution": zone.resolution,
                    "metadata": zone.metadata,
                })

        return json.dumps({"success": True, "data": zones})

    except Exception as e:
        logger.error(f"Error in get_my_zones: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def add_zone(args: str) -> str:
    """Add a new zone for a user based on coordinates or H3 index"""
    logger.info(f"zone_selector.add_zone called with args: {args}")

    try:
        params = json.loads(args) if args else {}

        user_id = params.get("user_id")
        latitude = params.get("latitude")
        longitude = params.get("longitude")
        h3_index = params.get("h3_index")
        name = params.get("name", "My Zone")
        description = params.get("description", "")
        resolution = params.get("resolution", 6)

        if not user_id:
            return json.dumps({"success": False, "error": "user_id is required"})

        # Find user
        user = None
        for u in User.instances():
            if u.id == user_id:
                user = u
                break

        if not user:
            return json.dumps({"success": False, "error": "User not found"})

        # Calculate H3 index from coordinates if not provided
        if not h3_index and latitude is not None and longitude is not None:
            if H3_AVAILABLE:
                h3_index = latlng_to_cell(latitude, longitude, resolution)
            else:
                # Fallback: create a pseudo h3 index from coords
                h3_index = f"manual_{latitude:.4f}_{longitude:.4f}"
        elif h3_index and (latitude is None or longitude is None):
            # Get center of H3 cell if only h3_index provided
            if H3_AVAILABLE:
                lat, lng = cell_to_latlng(h3_index)
                latitude = lat
                longitude = lng

        if not h3_index:
            return json.dumps({
                "success": False, 
                "error": "Either h3_index or latitude/longitude is required"
            })

        # Check if user already has this zone
        for existing_zone in Zone.instances():
            if existing_zone.user and existing_zone.user.id == user_id:
                if existing_zone.h3_index == h3_index:
                    return json.dumps({
                        "success": False,
                        "error": "You already have a zone at this location"
                    })

        # Create the zone
        zone = Zone(
            h3_index=h3_index,
            name=name,
            description=description,
            latitude=latitude,
            longitude=longitude,
            resolution=float(resolution),
            metadata=json.dumps(params.get("metadata", {})),
            user=user
        )

        return json.dumps({
            "success": True,
            "data": {
                "id": zone.id,
                "h3_index": zone.h3_index,
                "name": zone.name,
                "latitude": zone.latitude,
                "longitude": zone.longitude,
                "message": "Zone added successfully"
            }
        })

    except Exception as e:
        logger.error(f"Error in add_zone: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def remove_zone(args: str) -> str:
    """Remove a zone for a user"""
    logger.info(f"zone_selector.remove_zone called with args: {args}")

    try:
        params = json.loads(args) if args else {}

        user_id = params.get("user_id")
        zone_id = params.get("zone_id")

        if not user_id:
            return json.dumps({"success": False, "error": "user_id is required"})
        if not zone_id:
            return json.dumps({"success": False, "error": "zone_id is required"})

        # Find the zone
        zone = None
        for z in Zone.instances():
            if z.id == zone_id:
                zone = z
                break

        if not zone:
            return json.dumps({"success": False, "error": "Zone not found"})

        # Verify ownership
        if not zone.user or zone.user.id != user_id:
            return json.dumps({
                "success": False, 
                "error": "You don't have permission to remove this zone"
            })

        # Delete the zone
        zone.delete()

        return json.dumps({
            "success": True,
            "data": {"message": "Zone removed successfully"}
        })

    except Exception as e:
        logger.error(f"Error in remove_zone: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_all_zones(args: str) -> str:
    """Get all zones (for map visualization)"""
    logger.info(f"zone_selector.get_all_zones called with args: {args}")

    try:
        params = json.loads(args) if args else {}

        zones = []
        for zone in Zone.instances():
            zone_data = {
                "id": zone.id,
                "h3_index": zone.h3_index,
                "name": zone.name,
                "latitude": zone.latitude,
                "longitude": zone.longitude,
                "resolution": zone.resolution,
            }
            if zone.user:
                zone_data["user_id"] = zone.user.id
            zones.append(zone_data)

        return json.dumps({"success": True, "data": zones})

    except Exception as e:
        logger.error(f"Error in get_all_zones: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})
