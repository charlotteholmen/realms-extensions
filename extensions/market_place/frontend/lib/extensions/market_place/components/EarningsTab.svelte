<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { Card, Button, Spinner } from 'flowbite-svelte';
	import { WalletSolid, ArrowUpOutline, ChartLineUpOutline } from 'flowbite-svelte-icons';
	import { marketplaceStore, loadDeveloperStats, requestPayout } from '../stores/marketplace';

	let withdrawing = false;
	let error = '';
	let success = '';

	onMount(async () => {
		await loadDeveloperStats();
	});

	function formatICP(e8s: number): string {
		return `${(e8s / 100_000_000).toFixed(4)} ICP`;
	}

	async function handleWithdraw() {
		if (!confirm($_('extensions.market_place.confirm_withdraw'))) return;
		
		withdrawing = true;
		error = '';
		success = '';

		try {
			const result = await requestPayout();
			if (result.success) {
				success = $_('extensions.market_place.withdraw_success');
				await loadDeveloperStats();
			} else {
				error = result.error || 'Withdrawal failed';
			}
		} catch (e: any) {
			error = e.message || 'An error occurred';
		} finally {
			withdrawing = false;
		}
	}
</script>

<div class="space-y-6">
	<div class="mb-4">
		<h2 class="text-xl font-semibold text-gray-900 dark:text-white">
			{$_('extensions.market_place.earnings')}
		</h2>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			{$_('extensions.market_place.earnings_description')}
		</p>
	</div>

	{#if error}
		<div class="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm">
			{error}
		</div>
	{/if}

	{#if success}
		<div class="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-3 rounded-lg text-sm">
			{success}
		</div>
	{/if}

	{#if $marketplaceStore.loading}
		<div class="flex justify-center items-center py-12">
			<Spinner size="8" />
		</div>
	{:else if $marketplaceStore.developerStats}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<Card class="text-center">
				<div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
					<span class="text-2xl">📦</span>
				</div>
				<p class="text-3xl font-bold text-gray-900 dark:text-white">
					{$marketplaceStore.developerStats.total_extensions}
				</p>
				<p class="text-sm text-gray-500">
					{$_('extensions.market_place.stats.extensions')}
				</p>
			</Card>

			<Card class="text-center">
				<div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
					<ChartLineUpOutline class="w-6 h-6 text-green-600 dark:text-green-400" />
				</div>
				<p class="text-3xl font-bold text-gray-900 dark:text-white">
					{$marketplaceStore.developerStats.total_downloads}
				</p>
				<p class="text-sm text-gray-500">
					{$_('extensions.market_place.stats.downloads')}
				</p>
			</Card>

			<Card class="text-center">
				<div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
					<span class="text-2xl">🛒</span>
				</div>
				<p class="text-3xl font-bold text-gray-900 dark:text-white">
					{$marketplaceStore.developerStats.total_sales}
				</p>
				<p class="text-sm text-gray-500">
					{$_('extensions.market_place.stats.sales')}
				</p>
			</Card>

			<Card class="text-center">
				<div class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
					<WalletSolid class="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
				</div>
				<p class="text-3xl font-bold text-gray-900 dark:text-white">
					{formatICP($marketplaceStore.developerStats.total_revenue_e8s)}
				</p>
				<p class="text-sm text-gray-500">
					{$_('extensions.market_place.stats.total_revenue')}
				</p>
			</Card>
		</div>

		<!-- Pending Balance Card -->
		<Card class="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
			<div class="flex items-center justify-between">
				<div>
					<p class="text-gray-300 text-sm mb-1">
						{$_('extensions.market_place.pending_balance')}
					</p>
					<p class="text-4xl font-bold">
						{formatICP($marketplaceStore.developerStats.pending_payout_e8s)}
					</p>
					<p class="text-gray-400 text-xs mt-2">
						{$_('extensions.market_place.revenue_share_note')}
					</p>
				</div>
				<Button 
					class="bg-white text-gray-900 hover:bg-gray-100"
					disabled={withdrawing || $marketplaceStore.developerStats.pending_payout_e8s === 0}
					on:click={handleWithdraw}
				>
					{#if withdrawing}
						<Spinner size="4" class="mr-2" />
					{:else}
						<ArrowUpOutline class="w-4 h-4 mr-2" />
					{/if}
					{$_('extensions.market_place.withdraw')}
				</Button>
			</div>
		</Card>
	{:else}
		<Card class="text-center py-12">
			<p class="text-gray-500 dark:text-gray-400">
				{$_('extensions.market_place.no_stats')}
			</p>
		</Card>
	{/if}
</div>
