<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { Tabs, TabItem, Button, Card, Spinner } from 'flowbite-svelte';
	import { ShoppingBagOutline, ArchiveOutline, CloudArrowUpOutline, WalletSolid } from 'flowbite-svelte-icons';
	import BrowseTab from './components/BrowseTab.svelte';
	import PurchasedTab from './components/PurchasedTab.svelte';
	import PublishTab from './components/PublishTab.svelte';
	import EarningsTab from './components/EarningsTab.svelte';
	import { checkDeveloperLicense, purchaseDeveloperLicense } from './stores/marketplace';

	let isDeveloper = false;
	let checkingLicense = true;
	let purchasingLicense = false;
	let licenseError = '';

	onMount(async () => {
		isDeveloper = await checkDeveloperLicense();
		checkingLicense = false;
	});

	async function handleBecomeDeveloper() {
		purchasingLicense = true;
		licenseError = '';

		try {
			const result = await purchaseDeveloperLicense();
			if (result.success) {
				isDeveloper = true;
			} else {
				licenseError = result.error || 'Failed to purchase license';
			}
		} catch (e: any) {
			licenseError = e.message || 'An error occurred';
		} finally {
			purchasingLicense = false;
		}
	}
</script>

<div class="space-y-6">
	<div class="mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
			{$_('extensions.market_place.title')}
		</h1>
		<p class="text-gray-600 dark:text-gray-400">
			{$_('extensions.market_place.description')}
		</p>
	</div>

	<Tabs style="underline" contentClass="p-4 bg-white dark:bg-gray-800 rounded-lg mt-4">
		<TabItem open>
			<span slot="title" class="flex items-center gap-2">
				<ShoppingBagOutline class="w-4 h-4" />
				{$_('extensions.market_place.tabs.browse')}
			</span>
			<BrowseTab />
		</TabItem>

		<TabItem>
			<span slot="title" class="flex items-center gap-2">
				<ArchiveOutline class="w-4 h-4" />
				{$_('extensions.market_place.tabs.purchased')}
			</span>
			<PurchasedTab />
		</TabItem>

		{#if checkingLicense}
			<TabItem>
				<span slot="title" class="flex items-center gap-2">
					<CloudArrowUpOutline class="w-4 h-4" />
					{$_('extensions.market_place.tabs.publish')}
				</span>
				<div class="flex justify-center items-center py-12">
					<Spinner size="8" />
				</div>
			</TabItem>
		{:else if isDeveloper}
			<TabItem>
				<span slot="title" class="flex items-center gap-2">
					<CloudArrowUpOutline class="w-4 h-4" />
					{$_('extensions.market_place.tabs.publish')}
				</span>
				<PublishTab />
			</TabItem>

			<TabItem>
				<span slot="title" class="flex items-center gap-2">
					<WalletSolid class="w-4 h-4" />
					{$_('extensions.market_place.tabs.earnings')}
				</span>
				<EarningsTab />
			</TabItem>
		{:else}
			<TabItem>
				<span slot="title" class="flex items-center gap-2">
					<CloudArrowUpOutline class="w-4 h-4" />
					{$_('extensions.market_place.tabs.become_developer')}
				</span>
				<div class="text-center py-12">
					<div class="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
						<CloudArrowUpOutline class="w-10 h-10 text-gray-600 dark:text-gray-400" />
					</div>
					<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
						{$_('extensions.market_place.become_developer_title')}
					</h3>
					<p class="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
						{$_('extensions.market_place.become_developer_description')}
					</p>
					<p class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
						100 ICP <span class="text-sm font-normal text-gray-500">/ {$_('extensions.market_place.year')}</span>
					</p>

					{#if licenseError}
						<div class="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm mb-4 max-w-md mx-auto">
							{licenseError}
						</div>
					{/if}

					<Button 
						class="bg-blue-600 hover:bg-blue-700 text-white"
						size="lg"
						on:click={handleBecomeDeveloper}
						disabled={purchasingLicense}
					>
						{#if purchasingLicense}
							<Spinner size="4" class="mr-2" />
						{/if}
						{$_('extensions.market_place.get_developer_license')}
					</Button>
				</div>
			</TabItem>
		{/if}
	</Tabs>
</div>
