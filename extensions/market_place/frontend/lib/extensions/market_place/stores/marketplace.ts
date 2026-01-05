import { writable } from 'svelte/store';

// Types
interface ExtensionListing {
	extension_id: string;
	developer: string;
	name: string;
	description: string;
	version: string;
	price_e8s: number;
	download_url: string;
	icon: string;
	categories: string;
	created_at: number;
	updated_at: number;
	downloads: number;
	is_active: boolean;
	is_purchased?: boolean;
}

interface Purchase {
	purchase_id: string;
	realm_principal: string;
	extension_id: string;
	price_paid_e8s: number;
	purchased_at: number;
}

interface DeveloperStats {
	total_extensions: number;
	total_downloads: number;
	total_sales: number;
	total_revenue_e8s: number;
	pending_payout_e8s: number;
}

interface DeveloperLicense {
	principal: string;
	created_at: number;
	expires_at: number;
	is_active: boolean;
}

interface MarketplaceStats {
	total_developers: number;
	total_extensions: number;
	total_purchases: number;
	total_revenue_e8s: number;
	platform_earnings_e8s: number;
}

interface MarketplaceState {
	loading: boolean;
	error: string | null;
	extensions: ExtensionListing[];
	purchases: Purchase[];
	developerExtensions: ExtensionListing[];
	developerStats: DeveloperStats | null;
	developerLicense: DeveloperLicense | null;
	stats: MarketplaceStats | null;
}

// Initial state
const initialState: MarketplaceState = {
	loading: false,
	error: null,
	extensions: [],
	purchases: [],
	developerExtensions: [],
	developerStats: null,
	developerLicense: null,
	stats: null
};

// Create store
export const marketplaceStore = writable<MarketplaceState>(initialState);

// Helper to get marketplace backend actor
// Note: In production, this would use the actual marketplace canister
async function getMarketplaceBackend() {
	// For now, return a mock implementation
	// In production, you would import and use the actual canister
	return {
		list_extensions: async (page: bigint, per_page: bigint) => ({
			listings: [],
			total_count: BigInt(0),
			page,
			per_page
		}),
		search_marketplace: async (_query: string) => [],
		marketplace_stats: async () => ({
			total_developers: BigInt(0),
			total_extensions: BigInt(0),
			total_purchases: BigInt(0),
			total_revenue_e8s: BigInt(0),
			platform_earnings_e8s: BigInt(0)
		}),
		get_my_purchases: async () => [],
		buy_extension: async (_extension_id: string) => ({ Ok: null }),
		check_developer_license: async (_principal: string) => ({ Err: 'No license' }),
		purchase_developer_license: async () => ({ Ok: null }),
		get_my_developer_stats: async () => ({ Err: 'No license' }),
		publish_extension: async () => ({ Ok: null }),
		unpublish_extension: async (_extension_id: string) => ({ Ok: 'Success' }),
		request_payout: async () => ({ Ok: null })
	};
}

// Actions
export async function loadMarketplaceExtensions(page: number = 1, per_page: number = 20) {
	marketplaceStore.update(s => ({ ...s, loading: true, error: null }));
	
	try {
		const backend = await getMarketplaceBackend();
		const response = await backend.list_extensions(BigInt(page), BigInt(per_page));
		const stats = await backend.marketplace_stats();
		
		marketplaceStore.update(s => ({
			...s,
			loading: false,
			extensions: response.listings.map((l: any) => ({
				...l,
				price_e8s: Number(l.price_e8s),
				downloads: Number(l.downloads),
				created_at: Number(l.created_at),
				updated_at: Number(l.updated_at)
			})),
			stats: {
				total_developers: Number(stats.total_developers),
				total_extensions: Number(stats.total_extensions),
				total_purchases: Number(stats.total_purchases),
				total_revenue_e8s: Number(stats.total_revenue_e8s),
				platform_earnings_e8s: Number(stats.platform_earnings_e8s)
			}
		}));
	} catch (e: any) {
		marketplaceStore.update(s => ({ ...s, loading: false, error: e.message }));
	}
}

export async function searchMarketplace(query: string) {
	marketplaceStore.update(s => ({ ...s, loading: true, error: null }));
	
	try {
		const backend = await getMarketplaceBackend();
		const results = await backend.search_marketplace(query);
		
		marketplaceStore.update(s => ({
			...s,
			loading: false,
			extensions: results.map((l: any) => ({
				...l,
				price_e8s: Number(l.price_e8s),
				downloads: Number(l.downloads)
			}))
		}));
	} catch (e: any) {
		marketplaceStore.update(s => ({ ...s, loading: false, error: e.message }));
	}
}

export async function loadMyPurchases() {
	marketplaceStore.update(s => ({ ...s, loading: true, error: null }));
	
	try {
		const backend = await getMarketplaceBackend();
		const purchases = await backend.get_my_purchases();
		
		marketplaceStore.update(s => ({
			...s,
			loading: false,
			purchases: purchases.map((p: any) => ({
				...p,
				price_paid_e8s: Number(p.price_paid_e8s),
				purchased_at: Number(p.purchased_at)
			}))
		}));
	} catch (e: any) {
		marketplaceStore.update(s => ({ ...s, loading: false, error: e.message }));
	}
}

export async function purchaseExtension(extension_id: string): Promise<{ success: boolean; error?: string }> {
	try {
		const backend = await getMarketplaceBackend();
		const result = await backend.buy_extension(extension_id);
		
		if ('Ok' in result) {
			return { success: true };
		} else {
			return { success: false, error: result.Err };
		}
	} catch (e: any) {
		return { success: false, error: e.message };
	}
}

export async function checkDeveloperLicense(): Promise<boolean> {
	try {
		const backend = await getMarketplaceBackend();
		// Would need to pass actual principal
		const result = await backend.check_developer_license('');
		
		if ('Ok' in result) {
			marketplaceStore.update(s => ({
				...s,
				developerLicense: {
					...result.Ok,
					created_at: Number(result.Ok.created_at),
					expires_at: Number(result.Ok.expires_at)
				}
			}));
			return result.Ok.is_active;
		}
		return false;
	} catch {
		return false;
	}
}

export async function purchaseDeveloperLicense(): Promise<{ success: boolean; error?: string }> {
	try {
		const backend = await getMarketplaceBackend();
		const result = await backend.purchase_developer_license();
		
		if ('Ok' in result) {
			await checkDeveloperLicense();
			return { success: true };
		} else {
			return { success: false, error: result.Err };
		}
	} catch (e: any) {
		return { success: false, error: e.message };
	}
}

export async function loadDeveloperStats() {
	marketplaceStore.update(s => ({ ...s, loading: true, error: null }));
	
	try {
		const backend = await getMarketplaceBackend();
		const result = await backend.get_my_developer_stats();
		
		if ('Ok' in result) {
			marketplaceStore.update(s => ({
				...s,
				loading: false,
				developerStats: {
					total_extensions: Number(result.Ok.total_extensions),
					total_downloads: Number(result.Ok.total_downloads),
					total_sales: Number(result.Ok.total_sales),
					total_revenue_e8s: Number(result.Ok.total_revenue_e8s),
					pending_payout_e8s: Number(result.Ok.pending_payout_e8s)
				}
			}));
		} else {
			marketplaceStore.update(s => ({ ...s, loading: false, error: result.Err }));
		}
	} catch (e: any) {
		marketplaceStore.update(s => ({ ...s, loading: false, error: e.message }));
	}
}

export async function loadDeveloperExtensions() {
	// This would filter extensions by the current developer
	// For now, just loads all extensions
	await loadMarketplaceExtensions();
}

export async function publishExtension(data: {
	extension_id: string;
	name: string;
	description: string;
	version: string;
	price_e8s: number;
	download_url: string;
	icon: string;
	categories: string[];
}): Promise<{ success: boolean; error?: string }> {
	try {
		const backend = await getMarketplaceBackend();
		const result = await backend.publish_extension();
		
		if ('Ok' in result) {
			return { success: true };
		} else {
			return { success: false, error: result.Err };
		}
	} catch (e: any) {
		return { success: false, error: e.message };
	}
}

export async function unpublishExtension(extension_id: string): Promise<{ success: boolean; error?: string }> {
	try {
		const backend = await getMarketplaceBackend();
		const result = await backend.unpublish_extension(extension_id);
		
		if ('Ok' in result) {
			return { success: true };
		} else {
			return { success: false, error: result.Err };
		}
	} catch (e: any) {
		return { success: false, error: e.message };
	}
}

export async function requestPayout(): Promise<{ success: boolean; error?: string }> {
	try {
		const backend = await getMarketplaceBackend();
		const result = await backend.request_payout();
		
		if ('Ok' in result) {
			return { success: true };
		} else {
			return { success: false, error: result.Err };
		}
	} catch (e: any) {
		return { success: false, error: e.message };
	}
}
