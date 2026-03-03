"""
Marketplace API - Core business logic for the marketplace backend canister.

Handles:
- Developer license management
- Extension listing and management
- Purchase recording and verification
- Developer earnings and payouts
- Marketplace statistics
"""

import json
from typing import List, Optional, Dict, Any

from basilisk import ic
from ic_python_db import Entity, String, Integer, Float, Boolean
from ic_python_logging import get_logger

logger = get_logger("marketplace")

# Constants
DEVELOPER_LICENSE_PRICE_E8S = 10_000_000_000  # 100 ICP
DEVELOPER_LICENSE_DURATION_NS = 365 * 24 * 60 * 60 * 1_000_000_000  # 1 year
PLATFORM_FEE_PERCENT = 30  # Platform takes 30%
MIN_PAYOUT_E8S = 100_000_000  # Minimum 1 ICP


# =============================================================================
# Database Entities
# =============================================================================

class DeveloperLicenseEntity(Entity):
    """Entity for storing developer licenses"""
    __alias__ = "principal"
    principal = String()
    created_at = Float()
    expires_at = Float()
    is_active = Boolean()


class ExtensionListingEntity(Entity):
    """Entity for storing extension listings"""
    __alias__ = "extension_id"
    extension_id = String()
    developer = String()
    name = String()
    description = String()
    version = String()
    price_e8s = Integer()
    download_url = String()
    icon = String()
    categories = String()
    created_at = Float()
    updated_at = Float()
    downloads = Integer()
    is_active = Boolean()


class PurchaseEntity(Entity):
    """Entity for storing purchases"""
    __alias__ = "purchase_id"
    purchase_id = String()
    realm_principal = String()
    extension_id = String()
    developer = String()
    price_paid_e8s = Integer()
    purchased_at = Float()


class DeveloperBalanceEntity(Entity):
    """Entity for tracking developer balances"""
    __alias__ = "principal"
    principal = String()
    total_revenue_e8s = Integer()
    pending_payout_e8s = Integer()
    total_paid_out_e8s = Integer()


class PayoutEntity(Entity):
    """Entity for storing payout records"""
    __alias__ = "payout_id"
    payout_id = String()
    developer = String()
    amount_e8s = Integer()
    requested_at = Float()
    processed_at = Float()
    status = String()
    tx_id = String()


# =============================================================================
# Developer License Management
# =============================================================================

def check_developer_license(principal: str) -> Dict[str, Any]:
    """Check if a principal has an active developer license"""
    license_entity = DeveloperLicenseEntity[principal]
    if not license_entity:
        return {"success": False, "error": "No license found"}
    
    current_time = float(ic.time())
    if float(license_entity.expires_at) < current_time:
        return {"success": False, "error": "License expired"}
    
    if not license_entity.is_active:
        return {"success": False, "error": "License is inactive"}
    
    return {
        "success": True,
        "license": {
            "principal": str(license_entity.principal),
            "created_at": int(license_entity.created_at),
            "expires_at": int(license_entity.expires_at),
            "is_active": bool(license_entity.is_active)
        }
    }


def purchase_developer_license(principal: str) -> Dict[str, Any]:
    """Purchase or renew a developer license"""
    logger.info(f"Purchasing developer license for {principal}")
    
    current_time = float(ic.time())
    
    existing = DeveloperLicenseEntity[principal]
    if existing and float(existing.expires_at) > current_time:
        # Extend existing license
        new_expires = float(existing.expires_at) + DEVELOPER_LICENSE_DURATION_NS
        existing.expires_at = new_expires
        existing.is_active = True
        logger.info(f"Extended license for {principal} until {new_expires}")
    else:
        # Create new license
        new_expires = current_time + DEVELOPER_LICENSE_DURATION_NS
        DeveloperLicenseEntity(
            principal=principal,
            created_at=current_time,
            expires_at=new_expires,
            is_active=True
        )
        logger.info(f"Created new license for {principal}")
    
    return {
        "success": True,
        "message": "Developer license purchased successfully",
        "price_e8s": DEVELOPER_LICENSE_PRICE_E8S
    }


# =============================================================================
# Extension Listing Management
# =============================================================================

def publish_extension(
    developer: str,
    extension_id: str,
    name: str,
    description: str,
    version: str,
    price_e8s: int,
    download_url: str,
    icon: str = "layers",
    categories: List[str] = None
) -> Dict[str, Any]:
    """Publish a new extension or update existing one"""
    logger.info(f"Publishing extension {extension_id} by {developer}")
    
    # Check developer license
    license_check = check_developer_license(developer)
    if not license_check["success"]:
        return {"success": False, "error": "Valid developer license required"}
    
    current_time = float(ic.time())
    categories_str = ",".join(categories) if categories else "other"
    
    existing = ExtensionListingEntity[extension_id]
    if existing:
        if str(existing.developer) != developer:
            return {"success": False, "error": "Not the owner of this extension"}
        
        existing.name = name
        existing.description = description
        existing.version = version
        existing.price_e8s = price_e8s
        existing.download_url = download_url
        existing.icon = icon
        existing.categories = categories_str
        existing.updated_at = current_time
        existing.is_active = True
        logger.info(f"Updated extension {extension_id}")
    else:
        ExtensionListingEntity(
            extension_id=extension_id,
            developer=developer,
            name=name,
            description=description,
            version=version,
            price_e8s=price_e8s,
            download_url=download_url,
            icon=icon,
            categories=categories_str,
            created_at=current_time,
            updated_at=current_time,
            downloads=0,
            is_active=True
        )
        logger.info(f"Created new extension {extension_id}")
    
    return {"success": True, "extension_id": extension_id}


def get_extension(extension_id: str) -> Dict[str, Any]:
    """Get an extension by ID"""
    ext = ExtensionListingEntity[extension_id]
    if not ext or not ext.is_active:
        return {"success": False, "error": "Extension not found"}
    
    return {
        "success": True,
        "extension": {
            "extension_id": str(ext.extension_id),
            "developer": str(ext.developer),
            "name": str(ext.name),
            "description": str(ext.description),
            "version": str(ext.version),
            "price_e8s": int(ext.price_e8s),
            "download_url": str(ext.download_url),
            "icon": str(ext.icon),
            "categories": str(ext.categories),
            "created_at": int(ext.created_at),
            "updated_at": int(ext.updated_at),
            "downloads": int(ext.downloads),
            "is_active": bool(ext.is_active)
        }
    }


def list_extensions(page: int = 1, per_page: int = 20) -> Dict[str, Any]:
    """List all active extensions with pagination"""
    all_extensions = list(ExtensionListingEntity.instances())
    active = [e for e in all_extensions if e.is_active]
    
    total = len(active)
    start = (page - 1) * per_page
    end = start + per_page
    paginated = active[start:end]
    
    listings = []
    for ext in paginated:
        listings.append({
            "extension_id": str(ext.extension_id),
            "developer": str(ext.developer),
            "name": str(ext.name),
            "description": str(ext.description),
            "version": str(ext.version),
            "price_e8s": int(ext.price_e8s),
            "download_url": str(ext.download_url),
            "icon": str(ext.icon),
            "categories": str(ext.categories),
            "created_at": int(ext.created_at),
            "updated_at": int(ext.updated_at),
            "downloads": int(ext.downloads),
            "is_active": bool(ext.is_active)
        })
    
    return {
        "listings": listings,
        "total_count": total,
        "page": page,
        "per_page": per_page
    }


def search_extensions(query: str) -> List[Dict[str, Any]]:
    """Search extensions by name or description"""
    query_lower = query.lower()
    all_extensions = list(ExtensionListingEntity.instances())
    
    results = []
    for ext in all_extensions:
        if not ext.is_active:
            continue
        name = str(ext.name) if ext.name else ""
        desc = str(ext.description) if ext.description else ""
        if query_lower in name.lower() or query_lower in desc.lower():
            results.append({
                "extension_id": str(ext.extension_id),
                "developer": str(ext.developer),
                "name": name,
                "description": desc,
                "version": str(ext.version),
                "price_e8s": int(ext.price_e8s),
                "icon": str(ext.icon),
                "categories": str(ext.categories),
                "downloads": int(ext.downloads)
            })
    
    return results


def unpublish_extension(developer: str, extension_id: str) -> Dict[str, Any]:
    """Unpublish an extension"""
    ext = ExtensionListingEntity[extension_id]
    if not ext:
        return {"success": False, "error": "Extension not found"}
    
    if str(ext.developer) != developer:
        return {"success": False, "error": "Not the owner"}
    
    ext.is_active = False
    logger.info(f"Unpublished extension {extension_id}")
    return {"success": True, "message": "Extension unpublished"}


# =============================================================================
# Purchase Management
# =============================================================================

def purchase_extension(realm_principal: str, extension_id: str) -> Dict[str, Any]:
    """Record a purchase of an extension by a realm"""
    logger.info(f"Processing purchase: {realm_principal} buying {extension_id}")
    
    ext = ExtensionListingEntity[extension_id]
    if not ext or not ext.is_active:
        return {"success": False, "error": "Extension not found"}
    
    # Check if already purchased
    all_purchases = list(PurchaseEntity.instances())
    for p in all_purchases:
        if str(p.realm_principal) == realm_principal and str(p.extension_id) == extension_id:
            return {"success": False, "error": "Already purchased"}
    
    current_time = float(ic.time())
    price = int(ext.price_e8s)
    developer = str(ext.developer)
    
    # Create purchase record
    purchase_id = f"{realm_principal}_{extension_id}_{int(current_time)}"
    PurchaseEntity(
        purchase_id=purchase_id,
        realm_principal=realm_principal,
        extension_id=extension_id,
        developer=developer,
        price_paid_e8s=price,
        purchased_at=current_time
    )
    
    # Update download count
    ext.downloads = int(ext.downloads) + 1
    
    # Update developer balance
    if price > 0:
        developer_share = int(price * (100 - PLATFORM_FEE_PERCENT) / 100)
        balance = DeveloperBalanceEntity[developer]
        if balance:
            balance.total_revenue_e8s = int(balance.total_revenue_e8s) + developer_share
            balance.pending_payout_e8s = int(balance.pending_payout_e8s) + developer_share
        else:
            DeveloperBalanceEntity(
                principal=developer,
                total_revenue_e8s=developer_share,
                pending_payout_e8s=developer_share,
                total_paid_out_e8s=0
            )
    
    logger.info(f"Purchase completed: {purchase_id}")
    return {"success": True, "purchase_id": purchase_id}


def check_purchase(realm_principal: str, extension_id: str) -> Dict[str, Any]:
    """Check if a realm has purchased an extension"""
    all_purchases = list(PurchaseEntity.instances())
    for p in all_purchases:
        if str(p.realm_principal) == realm_principal and str(p.extension_id) == extension_id:
            return {
                "success": True,
                "purchased": True,
                "purchase": {
                    "purchase_id": str(p.purchase_id),
                    "price_paid_e8s": int(p.price_paid_e8s),
                    "purchased_at": int(p.purchased_at)
                }
            }
    return {"success": True, "purchased": False}


def get_realm_purchases(realm_principal: str) -> List[Dict[str, Any]]:
    """Get all purchases for a realm"""
    all_purchases = list(PurchaseEntity.instances())
    results = []
    for p in all_purchases:
        if str(p.realm_principal) == realm_principal:
            results.append({
                "purchase_id": str(p.purchase_id),
                "extension_id": str(p.extension_id),
                "price_paid_e8s": int(p.price_paid_e8s),
                "purchased_at": int(p.purchased_at)
            })
    return results


# =============================================================================
# Developer Stats and Payouts
# =============================================================================

def get_developer_stats(principal: str) -> Dict[str, Any]:
    """Get statistics for a developer"""
    license_check = check_developer_license(principal)
    if not license_check["success"]:
        return {"success": False, "error": "No valid developer license"}
    
    # Count extensions
    all_extensions = list(ExtensionListingEntity.instances())
    dev_extensions = [e for e in all_extensions if str(e.developer) == principal]
    
    total_downloads = sum(int(e.downloads) for e in dev_extensions)
    
    # Get balance
    balance = DeveloperBalanceEntity[principal]
    total_revenue = int(balance.total_revenue_e8s) if balance else 0
    pending = int(balance.pending_payout_e8s) if balance else 0
    
    # Count sales
    all_purchases = list(PurchaseEntity.instances())
    sales = len([p for p in all_purchases if str(p.developer) == principal])
    
    return {
        "success": True,
        "stats": {
            "total_extensions": len(dev_extensions),
            "total_downloads": total_downloads,
            "total_sales": sales,
            "total_revenue_e8s": total_revenue,
            "pending_payout_e8s": pending
        }
    }


def get_developer_extensions(principal: str) -> List[Dict[str, Any]]:
    """Get all extensions by a developer"""
    all_extensions = list(ExtensionListingEntity.instances())
    results = []
    for ext in all_extensions:
        if str(ext.developer) == principal:
            results.append({
                "extension_id": str(ext.extension_id),
                "name": str(ext.name),
                "version": str(ext.version),
                "price_e8s": int(ext.price_e8s),
                "downloads": int(ext.downloads),
                "is_active": bool(ext.is_active)
            })
    return results


def request_payout(principal: str) -> Dict[str, Any]:
    """Request a payout for pending earnings"""
    balance = DeveloperBalanceEntity[principal]
    if not balance:
        return {"success": False, "error": "No balance found"}
    
    pending = int(balance.pending_payout_e8s)
    if pending < MIN_PAYOUT_E8S:
        return {"success": False, "error": f"Minimum payout is {MIN_PAYOUT_E8S / 100_000_000} ICP"}
    
    current_time = float(ic.time())
    payout_id = f"payout_{principal}_{int(current_time)}"
    
    PayoutEntity(
        payout_id=payout_id,
        developer=principal,
        amount_e8s=pending,
        requested_at=current_time,
        processed_at=0,
        status="pending",
        tx_id=""
    )
    
    balance.pending_payout_e8s = 0
    
    logger.info(f"Payout requested: {payout_id} for {pending} e8s")
    return {"success": True, "payout_id": payout_id, "amount_e8s": pending}


# =============================================================================
# Marketplace Stats
# =============================================================================

def get_marketplace_stats() -> Dict[str, Any]:
    """Get overall marketplace statistics"""
    all_licenses = list(DeveloperLicenseEntity.instances())
    all_extensions = list(ExtensionListingEntity.instances())
    all_purchases = list(PurchaseEntity.instances())
    
    active_devs = len([l for l in all_licenses if l.is_active])
    active_exts = len([e for e in all_extensions if e.is_active])
    
    total_revenue = sum(int(p.price_paid_e8s) for p in all_purchases)
    platform_earnings = int(total_revenue * PLATFORM_FEE_PERCENT / 100)
    
    return {
        "total_developers": active_devs,
        "total_extensions": active_exts,
        "total_purchases": len(all_purchases),
        "total_revenue_e8s": total_revenue,
        "platform_earnings_e8s": platform_earnings
    }
