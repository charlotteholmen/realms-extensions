<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { Card, Button, Badge, Spinner, Input } from 'flowbite-svelte';
	import { SearchOutline, DownloadOutline } from 'flowbite-svelte-icons';
	import ExtensionCard from './ExtensionCard.svelte';
	import PurchaseModal from './PurchaseModal.svelte';
	import { marketplaceStore, loadMarketplaceExtensions, searchMarketplace } from '../stores/marketplace';

	let searchQuery = '';
	let showPurchaseModal = false;
	let selectedExtension: any = null;

	onMount(async () => {
		await loadMarketplaceExtensions();
	});

	async function handleSearch() {
		if (searchQuery.trim()) {
			await searchMarketplace(searchQuery);
		} else {
			await loadMarketplaceExtensions();
		}
	}

	function handlePurchase(extension: any) {
		selectedExtension = extension;
		showPurchaseModal = true;
	}

	function closePurchaseModal() {
		showPurchaseModal = false;
		selectedExtension = null;
	}
</script>

<div class="space-y-6">
	<!-- Search Bar -->
	<div class="flex gap-4">
		<div class="flex-1">
			<Input
				type="text"
				placeholder={$_('extensions.market_place.search_placeholder')}
				bind:value={searchQuery}
				on:keypress={(e) => e.key === 'Enter' && handleSearch()}
			>
				<SearchOutline slot="left" class="w-5 h-5 text-gray-500" />
			</Input>
		</div>
		<Button on:click={handleSearch} class="bg-gray-800 hover:bg-gray-900">
			{$_('extensions.market_place.search')}
		</Button>
	</div>

	<!-- Stats -->
	{#if $marketplaceStore.stats}
		<div class="grid grid-cols-3 gap-4">
			<Card class="text-center">
				<p class="text-2xl font-bold text-gray-900 dark:text-white">
					{$marketplaceStore.stats.total_extensions}
				</p>
				<p class="text-sm text-gray-500">{$_('extensions.market_place.stats.extensions')}</p>
			</Card>
			<Card class="text-center">
				<p class="text-2xl font-bold text-gray-900 dark:text-white">
					{$marketplaceStore.stats.total_developers}
				</p>
				<p class="text-sm text-gray-500">{$_('extensions.market_place.stats.developers')}</p>
			</Card>
			<Card class="text-center">
				<p class="text-2xl font-bold text-gray-900 dark:text-white">
					{$marketplaceStore.stats.total_purchases}
				</p>
				<p class="text-sm text-gray-500">{$_('extensions.market_place.stats.purchases')}</p>
			</Card>
		</div>
	{/if}

	<!-- Extensions Grid -->
	{#if $marketplaceStore.loading}
		<div class="flex justify-center items-center py-12">
			<Spinner size="8" />
			<span class="ml-3 text-gray-600 dark:text-gray-400">
				{$_('extensions.market_place.loading')}
			</span>
		</div>
	{:else if $marketplaceStore.extensions.length === 0}
		<div class="text-center py-12">
			<p class="text-gray-500">{$_('extensions.market_place.no_extensions')}</p>
		</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each $marketplaceStore.extensions as extension}
				<ExtensionCard 
					{extension} 
					on:purchase={() => handlePurchase(extension)}
				/>
			{/each}
		</div>
	{/if}
</div>

{#if showPurchaseModal && selectedExtension}
	<PurchaseModal 
		extension={selectedExtension} 
		on:close={closePurchaseModal}
		on:purchased={() => { closePurchaseModal(); loadMarketplaceExtensions(); }}
	/>
{/if}
