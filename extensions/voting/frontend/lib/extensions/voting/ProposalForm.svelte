<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button, Input, Label, Textarea, Alert } from 'flowbite-svelte';
	import { CheckOutline, CloseOutline } from 'flowbite-svelte-icons';
	import { backend } from '$lib/canisters';
	import { principal } from '$lib/stores/auth';
	import { _ } from 'svelte-i18n';
	
	const dispatch = createEventDispatcher();
	
	let title = '';
	let description = '';
	let codeUrl = '';
	let codeChecksum = '';
	let codexName = '';
	let submitting = false;
	let calculatingChecksum = false;
	let error = '';
	let success = '';
	
	async function handleSubmit() {
		if (!title.trim() || !description.trim() || !codeUrl.trim()) {
			error = $_('extensions.voting.form.validation.required_fields');
			return;
		}
		
		if (!isValidUrl(codeUrl)) {
			error = $_('extensions.voting.form.validation.invalid_url');
			return;
		}
		
		try {
			submitting = true;
			error = '';
			success = '';
			
			const submitArgs: Record<string, string> = {
				title: title.trim(),
				description: description.trim(),
				code_url: codeUrl.trim(),
				code_checksum: codeChecksum.trim(),
				proposer: $principal || 'anonymous'
			};
			if (codexName.trim()) {
				submitArgs.codex_name = codexName.trim();
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
					// Reset form
					title = '';
					description = '';
					codeUrl = '';
					codeChecksum = '';
					codexName = '';
					// Notify parent component
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
		codeUrl = '';
		codeChecksum = '';
		codexName = '';
		error = '';
		success = '';
		dispatch('cancelled');
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
	
	$: if (codeUrl && isValidUrl(codeUrl) && !codexName) {
		codexName = extractCodexName(codeUrl);
	}
	
	function isValidUrl(string: string) {
		try {
			new URL(string);
			return true;
		} catch (_) {
			return false;
		}
	}
	
	async function calculateChecksum() {
		if (!codeUrl.trim() || !isValidUrl(codeUrl)) {
			error = $_('extensions.voting.form.validation.invalid_url');
			return;
		}
		try {
			calculatingChecksum = true;
			error = '';
			
			const response = await backend.extension_async_call({
				extension_name: "voting",
				function_name: "fetch_proposal_code",
				args: JSON.stringify({ code_url: codeUrl.trim() })
			});
			
			if (response.success) {
				const data = typeof response.response === 'string'
					? JSON.parse(response.response)
					: response.response;
				
				if (data.success) {
					codeChecksum = data.data.checksum;
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
			calculatingChecksum = false;
		}
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
				<Label for="code-url" class="mb-2">
					{$_('extensions.voting.form.fields.code_url')} *
				</Label>
				<Input
					id="code-url"
					type="url"
					bind:value={codeUrl}
					placeholder={$_('extensions.voting.form.placeholders.code_url')}
					required
					disabled={submitting}
				/>
				<p class="text-sm text-gray-500 mt-1">
					{$_('extensions.voting.form.help.code_url')}
				</p>
			</div>

			<div>
				<Label for="code-checksum" class="mb-2">
					{$_('extensions.voting.form.fields.code_checksum')} *
				</Label>
				<div class="flex gap-2">
					<div class="flex-1">
						<Input
							id="code-checksum"
							bind:value={codeChecksum}
							placeholder={$_('extensions.voting.form.placeholders.code_checksum')}
							disabled={submitting || calculatingChecksum}
						/>
					</div>
					<Button
						color="light"
						size="sm"
						on:click={calculateChecksum}
						disabled={submitting || calculatingChecksum || !codeUrl.trim()}
						class="whitespace-nowrap"
					>
						{#if calculatingChecksum}
							<div class="w-4 h-4 mr-1 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
							{$_('extensions.voting.form.buttons.calculating')}
						{:else}
							<svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
							</svg>
							{$_('extensions.voting.form.buttons.calculate_checksum')}
						{/if}
					</Button>
				</div>
				<p class="text-sm text-gray-500 mt-1">
					{$_('extensions.voting.form.help.code_checksum')}
				</p>
			</div>

			<div>
			<Label for="codex-name" class="mb-2">
				{$_('extensions.voting.form.fields.codex_name')}
			</Label>
			<Input
				id="codex-name"
				bind:value={codexName}
				placeholder={$_('extensions.voting.form.placeholders.codex_name')}
				disabled={submitting}
			/>
			<p class="text-sm text-gray-500 mt-1">
				{$_('extensions.voting.form.help.codex_name')}
			</p>
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
					disabled={submitting || !title.trim() || !description.trim() || !codeUrl.trim()}
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
