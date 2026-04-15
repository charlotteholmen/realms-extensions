<script lang="ts">
	import { Button, Input, Label, Card, Spinner } from 'flowbite-svelte';
	import { backend } from '$lib/canisters';

	let name = '';
	let response = '';
	let loading = false;
	let error = '';

	async function greet() {
		loading = true;
		error = '';
		response = '';
		try {
			const result = await backend.extension_sync_call({
				extension_name: 'hello_world',
				function_name: 'greet',
				args: name || ''
			});
			if (result.success) {
				response = result.response;
			} else {
				error = result.response;
			}
		} catch (e: any) {
			error = e.message ?? String(e);
		} finally {
			loading = false;
		}
	}
</script>

<Card class="max-w-md">
	<h2 class="text-2xl font-bold text-gray-900 mb-6">Hello World</h2>

	<div class="mb-4">
		<Label for="name-input" class="mb-2">Your name</Label>
		<Input
			id="name-input"
			type="text"
			placeholder="Enter your name..."
			bind:value={name}
			on:keydown={(e) => e.key === 'Enter' && greet()}
		/>
	</div>

	<Button color="blue" class="w-full" on:click={greet} disabled={loading}>
		{#if loading}
			<Spinner size="4" class="mr-2" />
			Calling backend...
		{:else}
			Say Hello
		{/if}
	</Button>

	{#if response}
		<div class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
			<p class="text-green-800 font-medium">{response}</p>
		</div>
	{/if}

	{#if error}
		<div class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
			<p class="text-red-800 text-sm">{error}</p>
		</div>
	{/if}
</Card>
