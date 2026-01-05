<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { Card, Button, Badge, Spinner } from 'flowbite-svelte';
	import { CheckCircleOutline, DownloadOutline } from 'flowbite-svelte-icons';
	import { marketplaceStore, loadMyPurchases } from '../stores/marketplace';

	onMount(async () => {
		await loadMyPurchases();
	});

	function formatDate(timestamp: number): string {
		if (!timestamp) return '-';
		const date = new Date(timestamp / 1_000_000); // Convert nanoseconds to milliseconds
		return date.toLocaleDateString();
	}

	function formatPrice(e8s: bigint | number): string {
		const value = typeof e8s === 'bigint' ? Number(e8s) : e8s;
		if (value === 0) return $_('extensions.market_place.free');
		return `${(value / 100_000_000).toFixed(2)} ICP`;
	}
</script>

<div class="space-y-6">
	<div class="mb-4">
		<h2 class="text-xl font-semibold text-gray-900 dark:text-white">
			{$_('extensions.market_place.my_purchases')}
		</h2>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			{$_('extensions.market_place.purchases_description')}
		</p>
	</div>

	{#if $marketplaceStore.loading}
		<div class="flex justify-center items-center py-12">
			<Spinner size="8" />
			<span class="ml-3 text-gray-600 dark:text-gray-400">
				{$_('extensions.market_place.loading')}
			</span>
		</div>
	{:else if $marketplaceStore.purchases.length === 0}
		<Card class="text-center py-12">
			<p class="text-gray-500 dark:text-gray-400 mb-4">
				{$_('extensions.market_place.no_purchases')}
			</p>
			<Button href="/extensions" class="bg-gray-800 hover:bg-gray-900 text-white">
				{$_('extensions.market_place.browse_marketplace')}
			</Button>
		</Card>
	{:else}
		<div class="space-y-4">
			{#each $marketplaceStore.purchases as purchase}
				<Card class="flex items-center justify-between">
					<div class="flex items-center gap-4">
						<div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
							<CheckCircleOutline class="w-5 h-5 text-green-600 dark:text-green-400" />
						</div>
						<div>
							<h3 class="font-semibold text-gray-900 dark:text-white capitalize">
								{purchase.extension_id.replace(/_/g, ' ')}
							</h3>
							<p class="text-sm text-gray-500 dark:text-gray-400">
								{$_('extensions.market_place.purchased_on')} {formatDate(purchase.purchased_at)}
							</p>
						</div>
					</div>
					<div class="flex items-center gap-4">
						<Badge color="green">
							{formatPrice(purchase.price_paid_e8s)}
						</Badge>
						<Button size="sm" class="bg-gray-800 hover:bg-gray-900 text-white">
							<DownloadOutline class="w-4 h-4 mr-1" />
							{$_('extensions.market_place.download')}
						</Button>
					</div>
				</Card>
			{/each}
		</div>
	{/if}
</div>
