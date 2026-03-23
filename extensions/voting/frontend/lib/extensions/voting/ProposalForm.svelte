<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button, Input, Label, Textarea, Alert } from 'flowbite-svelte';
	import { CheckOutline, CloseOutline, PlusOutline } from 'flowbite-svelte-icons';
	import { backend } from '$lib/canisters';
	import { principal } from '$lib/stores/auth';
	import { _ } from 'svelte-i18n';
	
	const dispatch = createEventDispatcher();

	interface CodexEntry {
		url: string;
		name: string;
		checksum: string;
		calculating: boolean;
	}
	
	let title = '';
	let description = '';
	let codexEntries: CodexEntry[] = [{ url: '', name: '', checksum: '', calculating: false }];
	let submitting = false;
	let error = '';
	let success = '';
	
	function addCodexEntry() {
		codexEntries = [...codexEntries, { url: '', name: '', checksum: '', calculating: false }];
	}

	function removeCodexEntry(index: number) {
		if (codexEntries.length <= 1) return;
		codexEntries = codexEntries.filter((_, i) => i !== index);
	}

	function extractCodexName(url: string): string {
		try {
			const path = new URL(url).pathname;
			const filename = path.split('/').pop() || '';
			if (filename.endsWith('.py')) {
				return filename.slice(0, -3);
			}
			return filename;
		} catch (_) {
			return '';
		}
	}

	function onUrlChange(index: number) {
		const entry = codexEntries[index];
		if (entry.url && isValidUrl(entry.url) && !entry.name) {
			codexEntries[index].name = extractCodexName(entry.url);
			codexEntries = codexEntries;
		}
	}
	
	function isValidUrl(string: string) {
		try {
			new URL(string);
			return true;
		} catch (_) {
			return false;
		}
	}

	function hasValidCodex(): boolean {
		return codexEntries.some(e => e.url.trim() && isValidUrl(e.url.trim()));
	}

	async function calculateChecksum(index: number) {
		const entry = codexEntries[index];
		if (!entry.url.trim() || !isValidUrl(entry.url)) {
			error = $_('extensions.voting.form.validation.invalid_url');
			return;
		}
		try {
			codexEntries[index].calculating = true;
			codexEntries = codexEntries;
			error = '';
			
			const response = await backend.extension_async_call({
				extension_name: "voting",
				function_name: "fetch_proposal_code",
				args: JSON.stringify({ code_url: entry.url.trim() })
			});
			
			if (response.success) {
				const data = typeof response.response === 'string'
					? JSON.parse(response.response)
					: response.response;
				
				if (data.success) {
					codexEntries[index].checksum = data.data.checksum;
					codexEntries = codexEntries;
				} else {
					error = data.error || 'Failed to fetch code for checksum';
				}
			} else {
				error = 'Failed to communicate with backend';
			}
		} catch (e) {
			console.error('Error calculating checksum:', e);
			error = 'Error: ' + e.message;
		} finally {
			codexEntries[index].calculating = false;
			codexEntries = codexEntries;
		}
	}

	async function handleSubmit() {
		if (!title.trim() || !description.trim()) {
			error = $_('extensions.voting.form.validation.required_fields');
			return;
		}

		// Filter to valid entries
		const validEntries = codexEntries.filter(e => e.url.trim() && e.name.trim());
		if (validEntries.length === 0) {
			error = $_('extensions.voting.form.validation.required_fields');
			return;
		}

		for (const entry of validEntries) {
			if (!isValidUrl(entry.url)) {
				error = $_('extensions.voting.form.validation.invalid_url');
				return;
			}
		}
		
		try {
			submitting = true;
			error = '';
			success = '';

			const submitArgs: Record<string, any> = {
				title: title.trim(),
				description: description.trim(),
				proposer: $principal || 'anonymous',
			};

			if (validEntries.length === 1) {
				// Single codex: backward-compatible path
				submitArgs.code_url = validEntries[0].url.trim();
				submitArgs.code_checksum = validEntries[0].checksum.trim();
				submitArgs.codex_name = validEntries[0].name.trim();
			} else {
				// Multi-codex path
				submitArgs.codices = validEntries.map(e => ({
					url: e.url.trim(),
					name: e.name.trim(),
					checksum: e.checksum.trim(),
				}));
			}

			const response = await backend.extension_sync_call({
				extension_name: "voting",
				function_name: "submit_proposal",
				args: JSON.stringify(submitArgs)
			});
			
			console.log('Submit proposal response:', response);
			
			if (response.success) {
				const data = JSON.parse(response.response);
				if (data.success) {
					success = $_('extensions.voting.form.success');
					title = '';
					description = '';
					codexEntries = [{ url: '', name: '', checksum: '', calculating: false }];
					setTimeout(() => {
						dispatch('submitted', data.data);
					}, 1500);
				} else {
					error = data.error || $_('extensions.voting.form.error.submit_failed');
				}
			} else {
				error = $_('extensions.voting.form.error.backend_error');
			}
		} catch (e) {
			console.error('Error submitting proposal:', e);
			error = $_('extensions.voting.form.error.network_error');
		} finally {
			submitting = false;
		}
	}
	
	function handleCancel() {
		title = '';
		description = '';
		codexEntries = [{ url: '', name: '', checksum: '', calculating: false }];
		error = '';
		success = '';
		dispatch('cancelled');
	}
</script>

<div class="w-full">
		<div class="mb-6">
			<h2 class="text-xl font-semibold text-gray-900 mb-2">
				{$_('extensions.voting.form.title')}
			</h2>
			<p class="text-gray-600">
				{$_('extensions.voting.form.description')}
			</p>
		</div>

		{#if error}
			<Alert color="red" class="mb-4">
				<span class="font-medium">{$_('extensions.voting.error')}</span>
				{error}
			</Alert>
		{/if}

		{#if success}
			<Alert color="green" class="mb-4">
				<CheckOutline class="w-4 h-4 mr-2 inline" />
				<span class="font-medium">{success}</span>
			</Alert>
		{/if}

		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<div>
				<Label for="proposal-title" class="mb-2">
					{$_('extensions.voting.form.fields.title')} *
				</Label>
				<Input
					id="proposal-title"
					bind:value={title}
					placeholder={$_('extensions.voting.form.placeholders.title')}
					required
					disabled={submitting}
				/>
			</div>

			<div>
				<Label for="proposal-description" class="mb-2">
					{$_('extensions.voting.form.fields.description')} *
				</Label>
				<Textarea
					id="proposal-description"
					bind:value={description}
					placeholder={$_('extensions.voting.form.placeholders.description')}
					rows="6"
					required
					disabled={submitting}
				/>
			</div>

				<div>
				<div class="flex items-center justify-between mb-2">
					<Label class="mb-0">
						{$_('extensions.voting.form.fields.codices')} *
					</Label>
					<Button
						color="light"
						size="xs"
						on:click={addCodexEntry}
						disabled={submitting}
					>
						<PlusOutline class="w-3 h-3 mr-1" />
						{$_('extensions.voting.form.buttons.add_codex')}
					</Button>
				</div>
				<p class="text-sm text-gray-500 mb-3">
					{$_('extensions.voting.form.help.codices')}
				</p>

				{#each codexEntries as entry, i}
					<div class="border border-gray-200 rounded-lg p-3 mb-3 {codexEntries.length > 1 ? 'bg-gray-50' : ''}">
						{#if codexEntries.length > 1}
							<div class="flex items-center justify-between mb-2">
								<span class="text-xs font-medium text-gray-500">
									{$_('extensions.voting.form.codex_entry')} {i + 1}
								</span>
								<button
									type="button"
									class="text-red-400 hover:text-red-600 text-sm"
									on:click={() => removeCodexEntry(i)}
									disabled={submitting}
								>
									<CloseOutline class="w-4 h-4" />
								</button>
							</div>
						{/if}

						<div class="space-y-2">
							<div>
								<Label for="codex-url-{i}" class="mb-1 text-sm">
									{$_('extensions.voting.form.fields.code_url')}
								</Label>
								<Input
									id="codex-url-{i}"
									type="url"
									bind:value={entry.url}
									on:change={() => onUrlChange(i)}
									placeholder={$_('extensions.voting.form.placeholders.code_url')}
									disabled={submitting}
								/>
							</div>

							<div class="grid grid-cols-2 gap-2">
								<div>
									<Label for="codex-name-{i}" class="mb-1 text-sm">
										{$_('extensions.voting.form.fields.codex_name')}
									</Label>
									<Input
										id="codex-name-{i}"
										bind:value={entry.name}
										placeholder={$_('extensions.voting.form.placeholders.codex_name')}
										disabled={submitting}
									/>
								</div>
								<div>
									<Label for="codex-checksum-{i}" class="mb-1 text-sm">
										{$_('extensions.voting.form.fields.code_checksum')}
									</Label>
									<div class="flex gap-1">
										<div class="flex-1">
											<Input
												id="codex-checksum-{i}"
												bind:value={entry.checksum}
												placeholder={$_('extensions.voting.form.placeholders.code_checksum')}
												disabled={submitting || entry.calculating}
											/>
										</div>
										<Button
											color="light"
											size="xs"
											on:click={() => calculateChecksum(i)}
											disabled={submitting || entry.calculating || !entry.url.trim()}
											class="whitespace-nowrap"
										>
											{#if entry.calculating}
												<div class="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
											{:else}
												<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
												</svg>
											{/if}
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

		<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
				<h4 class="font-medium text-yellow-800 mb-2">
					{$_('extensions.voting.form.security.title')}
				</h4>
				<ul class="text-sm text-yellow-700 space-y-1">
					<li>• {$_('extensions.voting.form.security.point1')}</li>
					<li>• {$_('extensions.voting.form.security.point2')}</li>
					<li>• {$_('extensions.voting.form.security.point3')}</li>
				</ul>
			</div>

			<div class="flex justify-end space-x-3 pt-4">
				<Button 
					color="alternative"
					on:click={handleCancel}
					disabled={submitting}
				>
					<CloseOutline class="w-4 h-4 mr-2" />
					{$_('extensions.voting.form.buttons.cancel')}
				</Button>
				<Button 
					type="submit"
					disabled={submitting || !title.trim() || !description.trim() || !hasValidCodex()}
				>
					{#if submitting}
						<div class="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
						{$_('extensions.voting.form.buttons.submitting')}
					{:else}
						<CheckOutline class="w-4 h-4 mr-2" />
						{$_('extensions.voting.form.buttons.submit')}
					{/if}
				</Button>
			</div>
		</form>
</div>
