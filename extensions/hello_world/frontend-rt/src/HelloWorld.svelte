<script lang="ts">
	let { ctx }: { ctx: any } = $props();

	let name = $state('');
	let response = $state('');
	let loading = $state(false);
	let error = $state('');

	let canSubmit = $derived(!loading && name.trim().length > 0);

	async function greet() {
		loading = true;
		error = '';
		response = '';
		try {
			const result = await ctx.backend.extension_sync_call({
				extension_name: 'hello_world',
				function_name: 'greet',
				args: name || '',
			});
			if (result.success) {
				response = result.response;
			} else {
				error = result.response;
			}
		} catch (e: any) {
			error = e?.message ?? String(e);
		} finally {
			loading = false;
		}
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && canSubmit) greet();
	}
</script>

<div class="max-w-md mx-auto p-6">
	<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Hello World</h2>

	<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
		<label for="hw-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
			Your name
		</label>
		<input
			id="hw-name"
			type="text"
			placeholder="Enter your name..."
			bind:value={name}
			onkeydown={onKeydown}
			class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg
				bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
				placeholder-gray-400 dark:placeholder-gray-500
				focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500
				transition-colors"
		/>

		<button
			onclick={greet}
			disabled={!canSubmit}
			class="mt-4 w-full px-4 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg
				hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40
				disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
		>
			{#if loading}
				<svg class="inline-block w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24" fill="none">
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
				</svg>
				Calling backend…
			{:else}
				Say Hello
			{/if}
		</button>

		{#if response}
			<div class="mt-4 p-3.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
				<p class="text-sm font-medium text-green-800 dark:text-green-300">{response}</p>
			</div>
		{/if}

		{#if error}
			<div class="mt-4 p-3.5 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
				<p class="text-sm text-red-800 dark:text-red-300">{error}</p>
			</div>
		{/if}
	</div>
</div>
