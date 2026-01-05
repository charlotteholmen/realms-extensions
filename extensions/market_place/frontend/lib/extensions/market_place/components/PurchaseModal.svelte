<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { Modal, Button, Spinner } from 'flowbite-svelte';
	import { purchaseExtension } from '../stores/marketplace';

	export let extension: {
		extension_id: string;
		name: string;
		description: string;
		price_e8s: bigint | number;
	};

	const dispatch = createEventDispatcher();

	let purchasing = false;
	let error = '';

	function formatPrice(e8s: bigint | number): string {
		const value = typeof e8s === 'bigint' ? Number(e8s) : e8s;
		if (value === 0) return $_('extensions.market_place.free');
		return `${(value / 100_000_000).toFixed(2)} ICP`;
	}

	async function handlePurchase() {
		purchasing = true;
		error = '';

		try {
			const result = await purchaseExtension(extension.extension_id);
			if (result.success) {
				dispatch('purchased');
			} else {
				error = result.error || 'Purchase failed';
			}
		} catch (e: any) {
			error = e.message || 'An error occurred';
		} finally {
			purchasing = false;
		}
	}

	function handleClose() {
		dispatch('close');
	}
</script>

<Modal open={true} size="md" on:close={handleClose}>
	<div slot="header">
		<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
			{Number(extension.price_e8s) === 0 
				? $_('extensions.market_place.confirm_install')
				: $_('extensions.market_place.confirm_purchase')}
		</h3>
	</div>

	<div class="space-y-4">
		<div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
			<h4 class="font-semibold text-gray-900 dark:text-white capitalize">
				{extension.name.replace(/_/g, ' ')}
			</h4>
			<p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
				{extension.description}
			</p>
		</div>

		<div class="flex justify-between items-center py-4 border-t border-b border-gray-200 dark:border-gray-700">
			<span class="text-gray-600 dark:text-gray-400">
				{$_('extensions.market_place.price')}
			</span>
			<span class="text-2xl font-bold text-gray-900 dark:text-white">
				{formatPrice(extension.price_e8s)}
			</span>
		</div>

		{#if Number(extension.price_e8s) > 0}
			<p class="text-sm text-gray-500 dark:text-gray-400">
				{$_('extensions.market_place.payment_note')}
			</p>
		{/if}

		{#if error}
			<div class="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm">
				{error}
			</div>
		{/if}
	</div>

	<div slot="footer" class="flex justify-end gap-3">
		<Button color="alternative" on:click={handleClose} disabled={purchasing}>
			{$_('extensions.market_place.cancel')}
		</Button>
		<Button 
			class="bg-blue-600 hover:bg-blue-700 text-white"
			on:click={handlePurchase} 
			disabled={purchasing}
		>
			{#if purchasing}
				<Spinner size="4" class="mr-2" />
			{/if}
			{Number(extension.price_e8s) === 0 
				? $_('extensions.market_place.install')
				: $_('extensions.market_place.purchase')}
		</Button>
	</div>
</Modal>
