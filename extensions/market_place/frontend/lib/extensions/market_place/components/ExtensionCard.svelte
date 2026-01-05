<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { Card, Button, Badge } from 'flowbite-svelte';
	import { DownloadOutline, ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';

	export let extension: {
		extension_id: string;
		name: string;
		description: string;
		version: string;
		price_e8s: bigint | number;
		developer: string;
		downloads: bigint | number;
		icon: string;
		categories: string;
		is_purchased?: boolean;
	};

	const dispatch = createEventDispatcher();

	function formatPrice(e8s: bigint | number): string {
		const value = typeof e8s === 'bigint' ? Number(e8s) : e8s;
		if (value === 0) return $_('extensions.market_place.free');
		return `${(value / 100_000_000).toFixed(2)} ICP`;
	}

	function formatDownloads(count: bigint | number): string {
		const value = typeof count === 'bigint' ? Number(count) : count;
		if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;
		return value.toString();
	}

	function getCategories(): string[] {
		try {
			return JSON.parse(extension.categories || '[]');
		} catch {
			return [];
		}
	}

	function getCategoryName(category: string): string {
		const categoryMap: Record<string, string> = {
			public_services: 'Public Services',
			finances: 'Finances',
			governance: 'Governance',
			other: 'Other'
		};
		return categoryMap[category] || category;
	}

	function handlePurchase() {
		dispatch('purchase', extension);
	}
</script>

<Card class="h-full flex flex-col">
	<div class="flex justify-between items-start mb-4">
		<div class="flex items-center">
			<div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mr-3">
				<span class="text-2xl">📦</span>
			</div>
			<div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">
					{extension.name.replace(/_/g, ' ')}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400">v{extension.version}</p>
			</div>
		</div>
		<Badge color={Number(extension.price_e8s) === 0 ? 'green' : 'blue'}>
			{formatPrice(extension.price_e8s)}
		</Badge>
	</div>

	<p class="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
		{extension.description}
	</p>

	<div class="space-y-3">
		{#if getCategories().length > 0}
			<div class="flex flex-wrap gap-1">
				{#each getCategories() as category}
					<Badge color="dark" class="text-xs">
						{getCategoryName(category)}
					</Badge>
				{/each}
			</div>
		{/if}

		<div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
			<span>
				<DownloadOutline class="w-3 h-3 inline mr-1" />
				{formatDownloads(extension.downloads)} {$_('extensions.market_place.downloads')}
			</span>
			<span class="truncate max-w-[120px]" title={extension.developer}>
				{extension.developer.slice(0, 8)}...
			</span>
		</div>

		<div class="flex gap-2 pt-2">
			{#if extension.is_purchased}
				<Button color="green" disabled class="flex-1">
					{$_('extensions.market_place.purchased')}
				</Button>
			{:else if Number(extension.price_e8s) === 0}
				<Button 
					class="flex-1 bg-gray-800 hover:bg-gray-900 text-white"
					on:click={handlePurchase}
				>
					{$_('extensions.market_place.install')}
				</Button>
			{:else}
				<Button 
					class="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
					on:click={handlePurchase}
				>
					{$_('extensions.market_place.purchase')}
				</Button>
			{/if}
		</div>
	</div>
</Card>
