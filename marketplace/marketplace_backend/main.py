"""
Marketplace Backend Canister - Main entry point.

Provides Candid endpoints for:
- Developer license management
- Extension listing and marketplace
- Purchase recording and verification
- Developer earnings and payouts
- Marketplace statistics
"""

from kybra import (
    Opt,
    Principal,
    StableBTreeMap,
    Vec,
    ic,
    init,
    nat64,
    post_upgrade,
    query,
    text,
    update,
    void,
)
from kybra_simple_db import Database
from kybra_simple_logging import get_logger

from api.marketplace import (
    check_developer_license,
    check_purchase,
    get_developer_extensions,
    get_developer_stats,
    get_extension,
    get_marketplace_stats,
    get_realm_purchases,
    list_extensions,
    publish_extension,
    purchase_developer_license,
    purchase_extension,
    request_payout,
    search_extensions,
    unpublish_extension,
)
from core.candid_types import (
    DeveloperLicense,
    DeveloperStats,
    ExtensionInput,
    ExtensionListing,
    ExtensionListResult,
    ExtensionResult,
    GenericResult,
    LicenseResult,
    MarketplaceStats,
    PayoutRecord,
    PayoutResult,
    Purchase,
    StatsResult,
)

# Storage for the ORM
storage = StableBTreeMap[str, str](memory_id=1, max_key_size=100, max_value_size=10000)
Database.init(db_storage=storage, audit_enabled=True)

logger = get_logger("marketplace_backend")


@init
def init_canister() -> void:
    """Initialize the marketplace backend canister"""
    logger.info("Marketplace Backend canister initialized")


@post_upgrade
def post_upgrade_canister() -> void:
    """Handle canister upgrades"""
    logger.info("Marketplace Backend canister upgraded")


# =============================================================================
# Developer License Endpoints
# =============================================================================

@query
def check_license(principal: text) -> LicenseResult:
    """Check if a principal has an active developer license"""
    try:
        result = check_developer_license(principal)
        if result["success"]:
            return {"Ok": DeveloperLicense(
                principal=result["license"]["principal"],
                created_at=nat64(result["license"]["created_at"]),
                expires_at=nat64(result["license"]["expires_at"]),
                is_active=result["license"]["is_active"]
            )}
        return {"Err": result["error"]}
    except Exception as e:
        logger.error(f"Error in check_license: {e}")
        return {"Err": str(e)}


@update
def buy_developer_license() -> GenericResult:
    """Purchase a developer license for the caller"""
    try:
        caller = str(ic.caller())
        result = purchase_developer_license(caller)
        if result["success"]:
            return {"Ok": result["message"]}
        return {"Err": result["error"]}
    except Exception as e:
        logger.error(f"Error in buy_developer_license: {e}")
        return {"Err": str(e)}


# =============================================================================
# Extension Listing Endpoints
# =============================================================================

@update
def create_extension(ext: ExtensionInput) -> GenericResult:
    """Publish a new extension (caller must have developer license)"""
    try:
        caller = str(ic.caller())
        cats = ext["categories"].split(",") if ext["categories"] else []
        result = publish_extension(
            developer=caller,
            extension_id=ext["extension_id"],
            name=ext["name"],
            description=ext["description"],
            version=ext["version"],
            price_e8s=int(ext["price_e8s"]),
            download_url=ext["download_url"],
            icon=ext["icon"],
            categories=cats
        )
        if result["success"]:
            return {"Ok": f"Extension {ext['extension_id']} published"}
        return {"Err": result["error"]}
    except Exception as e:
        logger.error(f"Error in create_extension: {e}")
        return {"Err": str(e)}


@update
def update_extension(ext: ExtensionInput) -> GenericResult:
    """Update an existing extension"""
    try:
        caller = str(ic.caller())
        cats = ext["categories"].split(",") if ext["categories"] else []
        result = publish_extension(
            developer=caller,
            extension_id=ext["extension_id"],
            name=ext["name"],
            description=ext["description"],
            version=ext["version"],
            price_e8s=int(ext["price_e8s"]),
            download_url=ext["download_url"],
            icon=ext["icon"],
            categories=cats
        )
        if result["success"]:
            return {"Ok": f"Extension {ext['extension_id']} updated"}
        return {"Err": result["error"]}
    except Exception as e:
        logger.error(f"Error in update_extension: {e}")
        return {"Err": str(e)}


@update
def delist_extension(extension_id: text) -> GenericResult:
    """Unpublish an extension"""
    try:
        caller = str(ic.caller())
        result = unpublish_extension(caller, extension_id)
        if result["success"]:
            return {"Ok": result["message"]}
        return {"Err": result["error"]}
    except Exception as e:
        logger.error(f"Error in delist_extension: {e}")
        return {"Err": str(e)}


@query
def get_extension_details(extension_id: text) -> ExtensionResult:
    """Get details of an extension"""
    try:
        result = get_extension(extension_id)
        if result["success"]:
            ext = result["extension"]
            return {"Ok": ExtensionListing(
                extension_id=ext["extension_id"],
                developer=ext["developer"],
                name=ext["name"],
                description=ext["description"],
                version=ext["version"],
                price_e8s=nat64(ext["price_e8s"]),
                download_url=ext["download_url"],
                icon=ext["icon"],
                categories=ext["categories"],
                created_at=nat64(ext["created_at"]),
                updated_at=nat64(ext["updated_at"]),
                downloads=nat64(ext["downloads"]),
                is_active=ext["is_active"]
            )}
        return {"Err": result["error"]}
    except Exception as e:
        logger.error(f"Error in get_extension_details: {e}")
        return {"Err": str(e)}


@query
def list_marketplace_extensions(page: nat64, per_page: nat64) -> ExtensionListResult:
    """List all extensions with pagination"""
    try:
        result = list_extensions(int(page), int(per_page))
        listings = []
        for ext in result["listings"]:
            listings.append(ExtensionListing(
                extension_id=ext["extension_id"],
                developer=ext["developer"],
                name=ext["name"],
                description=ext["description"],
                version=ext["version"],
                price_e8s=nat64(ext["price_e8s"]),
                download_url=ext["download_url"],
                icon=ext["icon"],
                categories=ext["categories"],
                created_at=nat64(ext["created_at"]),
                updated_at=nat64(ext["updated_at"]),
                downloads=nat64(ext["downloads"]),
                is_active=ext["is_active"]
            ))
        return ExtensionListResult(
            listings=listings,
            total_count=nat64(result["total_count"]),
            page=nat64(result["page"]),
            per_page=nat64(result["per_page"])
        )
    except Exception as e:
        logger.error(f"Error in list_marketplace_extensions: {e}")
        return ExtensionListResult(listings=[], total_count=nat64(0), page=page, per_page=per_page)


@query
def search_marketplace(query_text: text) -> Vec[ExtensionListing]:
    """Search extensions by name or description"""
    try:
        results = search_extensions(query_text)
        listings = []
        for ext in results:
            listings.append(ExtensionListing(
                extension_id=ext["extension_id"],
                developer=ext["developer"],
                name=ext["name"],
                description=ext["description"],
                version=ext["version"],
                price_e8s=nat64(ext["price_e8s"]),
                download_url=ext.get("download_url", ""),
                icon=ext["icon"],
                categories=ext["categories"],
                created_at=nat64(0),
                updated_at=nat64(0),
                downloads=nat64(ext["downloads"]),
                is_active=True
            ))
        return listings
    except Exception as e:
        logger.error(f"Error in search_marketplace: {e}")
        return []


# =============================================================================
# Purchase Endpoints
# =============================================================================

@update
def buy_extension(extension_id: text) -> GenericResult:
    """Purchase an extension for the caller's realm"""
    try:
        caller = str(ic.caller())
        result = purchase_extension(caller, extension_id)
        if result["success"]:
            return {"Ok": f"Purchase successful: {result['purchase_id']}"}
        return {"Err": result["error"]}
    except Exception as e:
        logger.error(f"Error in buy_extension: {e}")
        return {"Err": str(e)}


@query
def has_purchased(realm_principal: text, extension_id: text) -> bool:
    """Check if a realm has purchased an extension"""
    try:
        result = check_purchase(realm_principal, extension_id)
        return result.get("purchased", False)
    except Exception as e:
        logger.error(f"Error in has_purchased: {e}")
        return False


@query
def get_my_purchases() -> Vec[Purchase]:
    """Get all purchases for the caller"""
    try:
        caller = str(ic.caller())
        purchases = get_realm_purchases(caller)
        result = []
        for p in purchases:
            result.append(Purchase(
                purchase_id=p["purchase_id"],
                realm_principal=caller,
                extension_id=p["extension_id"],
                developer="",
                price_paid_e8s=nat64(p["price_paid_e8s"]),
                purchased_at=nat64(p["purchased_at"])
            ))
        return result
    except Exception as e:
        logger.error(f"Error in get_my_purchases: {e}")
        return []


# =============================================================================
# Developer Dashboard Endpoints
# =============================================================================

@query
def get_my_developer_stats() -> StatsResult:
    """Get statistics for the calling developer"""
    try:
        caller = str(ic.caller())
        result = get_developer_stats(caller)
        if result["success"]:
            stats = result["stats"]
            return {"Ok": DeveloperStats(
                total_extensions=nat64(stats["total_extensions"]),
                total_downloads=nat64(stats["total_downloads"]),
                total_sales=nat64(stats["total_sales"]),
                total_revenue_e8s=nat64(stats["total_revenue_e8s"]),
                pending_payout_e8s=nat64(stats["pending_payout_e8s"])
            )}
        return {"Err": result["error"]}
    except Exception as e:
        logger.error(f"Error in get_my_developer_stats: {e}")
        return {"Err": str(e)}


@query
def get_my_extensions() -> Vec[ExtensionListing]:
    """Get all extensions published by the caller"""
    try:
        caller = str(ic.caller())
        extensions = get_developer_extensions(caller)
        result = []
        for ext in extensions:
            result.append(ExtensionListing(
                extension_id=ext["extension_id"],
                developer=caller,
                name=ext["name"],
                description="",
                version=ext["version"],
                price_e8s=nat64(ext["price_e8s"]),
                download_url="",
                icon="",
                categories="",
                created_at=nat64(0),
                updated_at=nat64(0),
                downloads=nat64(ext["downloads"]),
                is_active=ext["is_active"]
            ))
        return result
    except Exception as e:
        logger.error(f"Error in get_my_extensions: {e}")
        return []


@update
def withdraw_earnings() -> PayoutResult:
    """Request a payout of pending earnings"""
    try:
        caller = str(ic.caller())
        result = request_payout(caller)
        if result["success"]:
            return {"Ok": PayoutRecord(
                payout_id=result["payout_id"],
                developer=caller,
                amount_e8s=nat64(result["amount_e8s"]),
                requested_at=nat64(0),
                processed_at=None,
                status="pending",
                tx_id=None
            )}
        return {"Err": result["error"]}
    except Exception as e:
        logger.error(f"Error in withdraw_earnings: {e}")
        return {"Err": str(e)}


# =============================================================================
# Marketplace Statistics
# =============================================================================

@query
def marketplace_stats() -> MarketplaceStats:
    """Get overall marketplace statistics"""
    try:
        stats = get_marketplace_stats()
        return MarketplaceStats(
            total_developers=nat64(stats["total_developers"]),
            total_extensions=nat64(stats["total_extensions"]),
            total_purchases=nat64(stats["total_purchases"]),
            total_revenue_e8s=nat64(stats["total_revenue_e8s"]),
            platform_earnings_e8s=nat64(stats["platform_earnings_e8s"])
        )
    except Exception as e:
        logger.error(f"Error in marketplace_stats: {e}")
        return MarketplaceStats(
            total_developers=nat64(0),
            total_extensions=nat64(0),
            total_purchases=nat64(0),
            total_revenue_e8s=nat64(0),
            platform_earnings_e8s=nat64(0)
        )


@query
def greet(name: str) -> str:
    """Simple greeting function for testing"""
    return f"Hello from Marketplace, {name}!"
