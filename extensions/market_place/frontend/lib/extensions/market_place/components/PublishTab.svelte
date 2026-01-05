<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { Card, Button, Input, Textarea, Label, Select, Badge, Spinner } from 'flowbite-svelte';
	import { PlusOutline, TrashBinOutline, EditOutline } from 'flowbite-svelte-icons';
	import { marketplaceStore, loadDeveloperExtensions, publishExtension, unpublishExtension } from '../stores/marketplace';

	let showForm = false;
	let submitting = false;
	let error = '';

	let formData = {
		extension_id: '',
		name: '',
		description: '',
		version: '1.0.0',
		price_icp: 0,
		download_url: '',
		icon: 'layers',
		categories: [] as string[]
	};

	const categoryOptions = [
		{ value: 'public_services', name: 'Public Services' },
		{ value: 'finances', name: 'Finances' },
		{ value: 'governance', name: 'Governance' },
		{ value: 'other', name: 'Other' }
	];

	const iconOptions = [
		{ value: 'layers', name: 'Layers' },
		{ value: 'wallet', name: 'Wallet' },
		{ value: 'chart', name: 'Chart' },
		{ value: 'shield', name: 'Shield' },
		{ value: 'user', name: 'User' },
		{ value: 'bell', name: 'Bell' },
		{ value: 'cog', name: 'Settings' }
	];

	onMount(async () => {
		await loadDeveloperExtensions();
	});

	function resetForm() {
		formData = {
			extension_id: '',
			name: '',
			description: '',
			version: '1.0.0',
			price_icp: 0,
			download_url: '',
			icon: 'layers',
			categories: []
		};
		error = '';
	}

	async function handleSubmit() {
		submitting = true;
		error = '';

		try {
			const price_e8s = Math.floor(formData.price_icp * 100_000_000);
			const result = await publishExtension({
				extension_id: formData.extension_id,
				name: formData.name,
				description: formData.description,
				version: formData.version,
				price_e8s,
				download_url: formData.download_url,
				icon: formData.icon,
				categories: formData.categories
			});

			if (result.success) {
				showForm = false;
				resetForm();
				await loadDeveloperExtensions();
			} else {
				error = result.error || 'Failed to publish extension';
			}
		} catch (e: any) {
			error = e.message || 'An error occurred';
		} finally {
			submitting = false;
		}
	}

	async function handleUnpublish(extension_id: string) {
		if (!confirm($_('extensions.market_place.confirm_unpublish'))) return;
		
		try {
			await unpublishExtension(extension_id);
			await loadDeveloperExtensions();
		} catch (e: any) {
			error = e.message || 'Failed to unpublish';
		}
	}

	function formatPrice(e8s: number): string {
		if (e8s === 0) return 'Free';
		return `${(e8s / 100_000_000).toFixed(2)} ICP`;
	}
</script>

<div class="space-y-6">
	<div class="flex justify-between items-center">
		<div>
			<h2 class="text-xl font-semibold text-gray-900 dark:text-white">
				{$_('extensions.market_place.my_extensions')}
			</h2>
			<p class="text-sm text-gray-500 dark:text-gray-400">
				{$_('extensions.market_place.publish_description')}
			</p>
		</div>
		<Button 
			class="bg-blue-600 hover:bg-blue-700 text-white"
			on:click={() => { showForm = true; resetForm(); }}
		>
			<PlusOutline class="w-4 h-4 mr-2" />
			{$_('extensions.market_place.new_extension')}
		</Button>
	</div>

	{#if error}
		<div class="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm">
			{error}
		</div>
	{/if}

	{#if showForm}
		<Card>
			<h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
				{$_('extensions.market_place.publish_extension')}
			</h3>
			
			<form on:submit|preventDefault={handleSubmit} class="space-y-4">
				<div class="grid grid-cols-2 gap-4">
					<div>
						<Label for="extension_id">{$_('extensions.market_place.form.extension_id')}</Label>
						<Input 
							id="extension_id" 
							bind:value={formData.extension_id} 
							placeholder="my_extension"
							required
						/>
					</div>
					<div>
						<Label for="name">{$_('extensions.market_place.form.name')}</Label>
						<Input 
							id="name" 
							bind:value={formData.name} 
							placeholder="My Extension"
							required
						/>
					</div>
				</div>

				<div>
					<Label for="description">{$_('extensions.market_place.form.description')}</Label>
					<Textarea 
						id="description" 
						bind:value={formData.description}
						placeholder="Describe your extension..."
						rows={3}
						required
					/>
				</div>

				<div class="grid grid-cols-3 gap-4">
					<div>
						<Label for="version">{$_('extensions.market_place.form.version')}</Label>
						<Input 
							id="version" 
							bind:value={formData.version}
							placeholder="1.0.0"
						/>
					</div>
					<div>
						<Label for="price">{$_('extensions.market_place.form.price')}</Label>
						<Input 
							id="price" 
							type="number"
							step="0.01"
							min="0"
							bind:value={formData.price_icp}
						/>
					</div>
					<div>
						<Label for="icon">{$_('extensions.market_place.form.icon')}</Label>
						<Select id="icon" bind:value={formData.icon} items={iconOptions} />
					</div>
				</div>

				<div>
					<Label for="download_url">{$_('extensions.market_place.form.download_url')}</Label>
					<Input 
						id="download_url" 
						bind:value={formData.download_url}
						placeholder="https://..."
						required
					/>
				</div>

				<div class="flex justify-end gap-3 pt-4">
					<Button color="alternative" on:click={() => showForm = false}>
						{$_('extensions.market_place.cancel')}
					</Button>
					<Button 
						type="submit"
						class="bg-blue-600 hover:bg-blue-700 text-white"
						disabled={submitting}
					>
						{#if submitting}
							<Spinner size="4" class="mr-2" />
						{/if}
						{$_('extensions.market_place.publish')}
					</Button>
				</div>
			</form>
		</Card>
	{/if}

	{#if $marketplaceStore.loading}
		<div class="flex justify-center items-center py-12">
			<Spinner size="8" />
		</div>
	{:else if $marketplaceStore.developerExtensions.length === 0}
		<Card class="text-center py-12">
			<p class="text-gray-500 dark:text-gray-400">
				{$_('extensions.market_place.no_published')}
			</p>
		</Card>
	{:else}
		<div class="space-y-4">
			{#each $marketplaceStore.developerExtensions as ext}
				<Card class="flex items-center justify-between">
					<div class="flex items-center gap-4">
						<div class="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
							<span class="text-xl">📦</span>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900 dark:text-white">
								{ext.name}
							</h3>
							<p class="text-sm text-gray-500">v{ext.version}</p>
						</div>
					</div>
					<div class="flex items-center gap-4">
						<Badge color={ext.price_e8s === 0 ? 'green' : 'blue'}>
							{formatPrice(ext.price_e8s)}
						</Badge>
						<span class="text-sm text-gray-500">
							{ext.downloads} downloads
						</span>
						<Button size="sm" color="alternative" on:click={() => handleUnpublish(ext.extension_id)}>
							<TrashBinOutline class="w-4 h-4" />
						</Button>
					</div>
				</Card>
			{/each}
		</div>
	{/if}
</div>
