"""
Land Registry extension entry point
"""

import json
import traceback
from typing import Any, Dict

from ggg import Land, LandType, LandStatus, Organization, User
from kybra_simple_logging import get_logger

logger = get_logger("extensions.land_registry")


def get_lands(args: str) -> str:
    """Get all land parcels with optional filtering"""
    logger.info(f"land_registry.get_lands called with args: {args}")

    try:
        params = json.loads(args) if args else {}

        lands = Land.instances()

        land_data = []
        for land in lands:
            land_dict = {
                "id": land.id,
                "x_coordinate": land.x_coordinate,
                "y_coordinate": land.y_coordinate,
                "land_type": land.land_type,
                "status": land.status,
                "size_width": land.size_width,
                "size_height": land.size_height,
                "metadata": land.metadata,
                "registered_by": land.registered_by,
                "nft_token_id": land.nft_token_id,
                "owner_user_id": land.owner_user.id if land.owner_user else None,
                "owner_organization_id": (
                    land.owner_organization.id if land.owner_organization else None
                ),
            }
            land_data.append(land_dict)

        return json.dumps({"success": True, "data": land_data})

    except Exception as e:
        logger.error(f"Error in get_lands: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def create_land(args: str) -> str:
    """Create a new land parcel"""
    logger.info(f"land_registry.create_land called with args: {args}")

    try:
        params = json.loads(args) if args else {}

        x_coord = params.get("x_coordinate")
        y_coord = params.get("y_coordinate")
        land_type = params.get("land_type", LandType.UNASSIGNED)

        if x_coord is None or y_coord is None:
            return json.dumps(
                {
                    "success": False,
                    "error": "x_coordinate and y_coordinate are required",
                }
            )

        existing_lands = Land.instances()
        for existing_land in existing_lands:
            if (
                existing_land.x_coordinate == x_coord
                and existing_land.y_coordinate == y_coord
            ):
                return json.dumps(
                    {
                        "success": False,
                        "error": "Land already exists at these coordinates",
                    }
                )

        land = Land(
            x_coordinate=x_coord,
            y_coordinate=y_coord,
            land_type=land_type,
            size_width=params.get("size_width", 1),
            size_height=params.get("size_height", 1),
            metadata=params.get("metadata", "{}"),
        )

        return json.dumps(
            {
                "success": True,
                "data": {"id": land.id, "message": "Land created successfully"},
            }
        )

    except Exception as e:
        logger.error(f"Error in create_land: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def update_land_ownership(args: str) -> str:
    """Update land ownership"""
    logger.info(f"land_registry.update_land_ownership called with args: {args}")

    try:
        params = json.loads(args) if args else {}

        land_id = params.get("land_id")
        owner_user_id = params.get("owner_user_id")
        owner_organization_id = params.get("owner_organization_id")

        if not land_id:
            return json.dumps({"success": False, "error": "land_id is required"})

        land = None
        for existing_land in Land.instances():
            if existing_land.id == land_id:
                land = existing_land
                break

        if not land:
            return json.dumps({"success": False, "error": "Land not found"})

        if owner_user_id and owner_organization_id:
            return json.dumps(
                {
                    "success": False,
                    "error": "Land cannot be owned by both user and organization",
                }
            )

        if owner_user_id:
            if land.land_type != LandType.RESIDENTIAL:
                return json.dumps(
                    {
                        "success": False,
                        "error": "Members can only own residential land",
                    }
                )

            user = None
            for existing_user in User.instances():
                if existing_user.id == owner_user_id:
                    user = existing_user
                    break

            if not user:
                return json.dumps({"success": False, "error": "User not found"})

            land.owner_user = user
            land.owner_organization = None

        elif owner_organization_id:
            if land.land_type == LandType.RESIDENTIAL:
                return json.dumps(
                    {
                        "success": False,
                        "error": "Organizations cannot own residential land",
                    }
                )

            org = None
            for existing_org in Organization.instances():
                if existing_org.id == owner_organization_id:
                    org = existing_org
                    break

            if not org:
                return json.dumps({"success": False, "error": "Organization not found"})

            land.owner_organization = org
            land.owner_user = None

        else:
            land.owner_user = None
            land.owner_organization = None

        land.save()

        return json.dumps(
            {"success": True, "data": {"message": "Ownership updated successfully"}}
        )

    except Exception as e:
        logger.error(
            f"Error in update_land_ownership: {str(e)}\n{traceback.format_exc()}"
        )
        return json.dumps({"success": False, "error": str(e)})


def get_land_map(args: str) -> str:
    """Get land map data for visualization"""
    logger.info(f"land_registry.get_land_map called with args: {args}")

    try:
        params = json.loads(args) if args else {}

        min_x = params.get("min_x", 0)
        max_x = params.get("max_x", 20)
        min_y = params.get("min_y", 0)
        max_y = params.get("max_y", 20)

        lands = Land.instances()
        map_data = {}

        for land in lands:
            if (
                min_x <= land.x_coordinate <= max_x
                and min_y <= land.y_coordinate <= max_y
            ):
                key = f"{land.x_coordinate},{land.y_coordinate}"
                map_data[key] = {
                    "id": land.id,
                    "x": land.x_coordinate,
                    "y": land.y_coordinate,
                    "type": land.land_type,
                    "owner_type": (
                        "user"
                        if land.owner_user
                        else "organization" if land.owner_organization else "none"
                    ),
                    "owner_name": (
                        land.owner_user.id
                        if land.owner_user
                        else (
                            land.owner_organization.name
                            if land.owner_organization
                            else None
                        )
                    ),
                }

        return json.dumps(
            {
                "success": True,
                "data": {
                    "bounds": {
                        "min_x": min_x,
                        "max_x": max_x,
                        "min_y": min_y,
                        "max_y": max_y,
                    },
                    "lands": map_data,
                },
            }
        )

    except Exception as e:
        logger.error(f"Error in get_land_map: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_land(args: str) -> str:
    """Get a single land parcel by ID with all details"""
    logger.info(f"land_registry.get_land called with args: {args}")

    try:
        params = json.loads(args) if args else {}
        land_id = params.get("land_id")

        if not land_id:
            return json.dumps({"success": False, "error": "land_id is required"})

        land = Land[land_id]
        if not land:
            return json.dumps({"success": False, "error": "Land not found"})

        land_data = {
            "id": land.id,
            "x_coordinate": land.x_coordinate,
            "y_coordinate": land.y_coordinate,
            "land_type": land.land_type,
            "status": land.status,
            "size_width": land.size_width,
            "size_height": land.size_height,
            "metadata": land.metadata,
            "registered_by": land.registered_by,
            "nft_token_id": land.nft_token_id,
            "owner_user_id": land.owner_user.id if land.owner_user else None,
            "owner_organization_id": (
                land.owner_organization.id if land.owner_organization else None
            ),
            "owner_user_name": land.owner_user.name if land.owner_user else None,
            "owner_organization_name": (
                land.owner_organization.name if land.owner_organization else None
            ),
        }
        return json.dumps({"success": True, "data": land_data})

    except Exception as e:
        logger.error(f"Error in get_land: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def update_land(args: str) -> str:
    """Update land parcel properties (type, status, metadata)"""
    logger.info(f"land_registry.update_land called with args: {args}")

    try:
        params = json.loads(args) if args else {}
        land_id = params.get("land_id")

        if not land_id:
            return json.dumps({"success": False, "error": "land_id is required"})

        land = Land[land_id]
        if not land:
            return json.dumps({"success": False, "error": "Land not found"})

        updated_fields = []

        if "land_type" in params:
            land.land_type = params["land_type"]
            updated_fields.append("land_type")
        if "status" in params:
            land.status = params["status"]
            updated_fields.append("status")
        if "metadata" in params:
            land.metadata = params["metadata"]
            updated_fields.append("metadata")
        if "registered_by" in params:
            land.registered_by = params["registered_by"]
            updated_fields.append("registered_by")

        return json.dumps({
            "success": True,
            "data": {
                "message": f"Land updated successfully. Fields: {', '.join(updated_fields)}",
                "updated_fields": updated_fields
            }
        })

    except Exception as e:
        logger.error(f"Error in update_land: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def register_land_nft(args: str) -> str:
    """
    Prepare a land parcel for NFT registration.
    Returns info needed for frontend to call mint_land_nft_for_parcel on backend.
    """
    logger.info(f"land_registry.register_land_nft called with args: {args}")

    try:
        params = json.loads(args) if args else {}
        land_id = params.get("land_id")
        owner_principal = params.get("owner_principal")
        registered_by = params.get("registered_by", "")

        if not land_id:
            return json.dumps({"success": False, "error": "land_id is required"})

        if not owner_principal:
            return json.dumps({"success": False, "error": "owner_principal is required"})

        land = Land[land_id]
        if not land:
            return json.dumps({"success": False, "error": "Land not found"})

        if land.nft_token_id:
            return json.dumps({
                "success": False,
                "error": f"Land already has NFT minted (token_id: {land.nft_token_id})"
            })

        # Update registration info
        if registered_by:
            land.registered_by = registered_by
        land.status = LandStatus.ACTIVE

        # Generate a token_id based on coordinates (unique per land)
        token_id = land.x_coordinate * 10000 + land.y_coordinate

        return json.dumps({
            "success": True,
            "data": {
                "land_id": land_id,
                "owner_principal": owner_principal,
                "token_id": token_id,
                "x_coordinate": land.x_coordinate,
                "y_coordinate": land.y_coordinate,
                "message": "Land prepared for NFT minting. Call mint_land_nft_for_parcel.",
                "requires_mint": True
            }
        })

    except Exception as e:
        logger.error(f"Error in register_land_nft: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def update_land_nft_token(args: str) -> str:
    """Update the NFT token ID for a land parcel after minting"""
    logger.info(f"land_registry.update_land_nft_token called with args: {args}")

    try:
        params = json.loads(args) if args else {}
        land_id = params.get("land_id")
        nft_token_id = params.get("nft_token_id")

        if not land_id:
            return json.dumps({"success": False, "error": "land_id is required"})

        if not nft_token_id:
            return json.dumps({"success": False, "error": "nft_token_id is required"})

        land = Land[land_id]
        if not land:
            return json.dumps({"success": False, "error": "Land not found"})

        land.nft_token_id = str(nft_token_id)

        return json.dumps({
            "success": True,
            "data": {
                "message": f"NFT token ID updated for land {land_id}",
                "land_id": land_id,
                "nft_token_id": nft_token_id
            }
        })

    except Exception as e:
        logger.error(f"Error in update_land_nft_token: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})
