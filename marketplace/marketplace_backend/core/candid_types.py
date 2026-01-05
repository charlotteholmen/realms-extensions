"""
Candid types for the Marketplace Backend Canister.
Defines all record types for licenses, listings, purchases, and payouts.
"""

from kybra import Record, Variant, Vec, Opt, nat64, text


class DeveloperLicense(Record):
    principal: text
    created_at: nat64
    expires_at: nat64
    is_active: bool


class ExtensionListing(Record):
    extension_id: text
    developer: text
    name: text
    description: text
    version: text
    price_e8s: nat64
    download_url: text
    icon: text
    categories: text
    created_at: nat64
    updated_at: nat64
    downloads: nat64
    is_active: bool


class Purchase(Record):
    purchase_id: text
    realm_principal: text
    extension_id: text
    developer: text
    price_paid_e8s: nat64
    purchased_at: nat64


class DeveloperStats(Record):
    total_extensions: nat64
    total_downloads: nat64
    total_sales: nat64
    total_revenue_e8s: nat64
    pending_payout_e8s: nat64


class PayoutRecord(Record):
    payout_id: text
    developer: text
    amount_e8s: nat64
    requested_at: nat64
    processed_at: Opt[nat64]
    status: text
    tx_id: Opt[text]


class MarketplaceStats(Record):
    total_developers: nat64
    total_extensions: nat64
    total_purchases: nat64
    total_revenue_e8s: nat64
    platform_earnings_e8s: nat64


class ExtensionListResult(Record):
    listings: Vec[ExtensionListing]
    total_count: nat64
    page: nat64
    per_page: nat64


# Input types for methods with many parameters
class ExtensionInput(Record):
    extension_id: text
    name: text
    description: text
    version: text
    price_e8s: nat64
    download_url: text
    icon: text
    categories: text


# Result variants
class GenericResult(Variant, total=False):
    Ok: text
    Err: text


class LicenseResult(Variant, total=False):
    Ok: DeveloperLicense
    Err: text


class ExtensionResult(Variant, total=False):
    Ok: ExtensionListing
    Err: text


class StatsResult(Variant, total=False):
    Ok: DeveloperStats
    Err: text


class PayoutResult(Variant, total=False):
    Ok: PayoutRecord
    Err: text
