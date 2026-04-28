<script lang="ts">
	let { ctx }: { ctx: any } = $props();

	interface Codex {
		_id: string;
		id?: string;
		name: string;
		description?: string;
		code_preview?: string;
		code?: string;
		source?: string;
		version?: string;
		created_at?: number | null;
		updated_at?: number | null;
	}

	let codexes: Codex[] = $state([]);
	let loading = $state(true);
	let error = $state('');
	let searchTerm = $state('');
	let selectedCodex: Codex | null = $state(null);
	let detailLoading = $state(false);

	let filteredCodexes = $derived(
		searchTerm.trim()
			? codexes.filter((c) => {
					const term = searchTerm.toLowerCase();
					return (
						(c.name ?? '').toLowerCase().includes(term) ||
						(c.description ?? '').toLowerCase().includes(term)
					);
				})
			: codexes,
	);

	async function callExt(fn: string, args: string = '{}') {
		const raw = await ctx.backend.extension_sync_call(
			JSON.stringify({ extension_name: 'codex_viewer', function_name: fn, args }),
		);
		const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
		if (parsed?.success === false) throw new Error(parsed.error || 'Request failed');
		return parsed;
	}

	async function loadCodexes() {
		loading = true;
		error = '';
		try {
			const res = await callExt('get_all_codexes', '{}');
			codexes = res?.codexes ?? res?.data ?? (Array.isArray(res) ? res : []);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function viewCodex(codex: Codex) {
		detailLoading = true;
		error = '';
		try {
			const codexId = codex._id || codex.id || codex.name;
			const res = await callExt('get_codex_details', JSON.stringify({ codex_id: codexId }));
			selectedCodex = res?.data ?? res;
		} catch {
			selectedCodex = codex;
		} finally {
			detailLoading = false;
		}
	}

	function goBack() {
		selectedCodex = null;
	}

	function formatTimestamp(timestamp: number | null | undefined): string {
		if (!timestamp) return '';
		return new Date(timestamp / 1_000_000).toLocaleString();
	}

	$effect(() => {
		void loadCodexes();
	});
</script>

<div class="p-6 max-w-6xl mx-auto relative">
	<!-- Header -->
	<div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
		<div>
			<h1 class="text-2xl font-bold text-gray-900 dark:text-white">Codex Viewer</h1>
			<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
				Browse installed codex packages
			</p>
		</div>
		<button
			class="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
			onclick={loadCodexes}
			disabled={loading}
		>
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
				/>
			</svg>
			Refresh
		</button>
	</div>

	{#if error}
		<div
			class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"
		>
			{error}
		</div>
	{/if}

	<!-- Detail View -->
	{#if selectedCodex}
		<div>
			<button
				class="text-indigo-600 dark:text-indigo-400 text-sm hover:underline mb-4 inline-block"
				onclick={goBack}
			>
				← Back to list
			</button>
			<div
				class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6"
			>
				<div class="flex items-center gap-3 mb-4">
					<svg
						class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
						/>
					</svg>
					<h2 class="text-xl font-semibold text-gray-900 dark:text-white">
						{selectedCodex.name || selectedCodex._id || 'Codex'}
					</h2>
					{#if selectedCodex.version}
						<span
							class="px-2 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full"
						>
							v{selectedCodex.version}
						</span>
					{/if}
					<span
						class="px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full"
					>
						Python
					</span>
				</div>
				{#if selectedCodex.description}
					<p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
						{selectedCodex.description}
					</p>
				{/if}
				{#if formatTimestamp(selectedCodex.created_at)}
					<p class="text-xs text-gray-500 dark:text-gray-500 mb-4">
						Created: {formatTimestamp(selectedCodex.created_at)}
					</p>
				{/if}
				<div class="bg-gray-900 rounded-lg p-4 overflow-auto max-h-[500px]">
					<pre class="text-sm text-gray-300 font-mono whitespace-pre-wrap break-words">{selectedCodex.code || selectedCodex.source || selectedCodex.code_preview || JSON.stringify(selectedCodex, null, 2)}</pre>
				</div>
			</div>
		</div>

	<!-- Loading State -->
	{:else if loading}
		<div class="flex items-center justify-center py-16">
			<svg
				class="animate-spin h-8 w-8 text-gray-400"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle
					class="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					stroke-width="4"
				></circle>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
			<span class="ml-3 text-gray-500 dark:text-gray-400">Loading codexes…</span>
		</div>

	<!-- List View -->
	{:else}
		<!-- Search -->
		<div class="mb-4">
			<div class="relative max-w-md">
				<svg
					class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
				<input
					type="text"
					bind:value={searchTerm}
					placeholder="Search codexes…"
					class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
				/>
			</div>
		</div>

		<!-- Stats -->
		<div class="mb-4 flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
			<span>{codexes.length} total codexes</span>
			{#if searchTerm && filteredCodexes.length !== codexes.length}
				<span class="text-gray-400 dark:text-gray-500">
					({filteredCodexes.length} matching)
				</span>
			{/if}
		</div>

		{#if filteredCodexes.length === 0}
			<div
				class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl py-12 text-center"
			>
				<svg
					class="w-12 h-12 mx-auto text-gray-400 mb-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
					/>
				</svg>
				<p class="text-gray-500 dark:text-gray-400">
					{searchTerm ? 'No codexes match your search' : 'No codexes found'}
				</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each filteredCodexes as codex (codex._id || codex.name)}
					<button
						class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-left hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 cursor-pointer w-full"
						onclick={() => viewCodex(codex)}
					>
						<div class="flex items-start justify-between mb-3">
							<div class="flex items-center gap-2 min-w-0">
								<svg
									class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
									/>
								</svg>
								<h3 class="font-semibold text-gray-900 dark:text-white truncate">
									{codex.name}
								</h3>
							</div>
							<span
								class="ml-2 flex-shrink-0 px-2 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full"
							>
								Python
							</span>
						</div>

						{#if codex.description}
							<p
								class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 overflow-hidden"
							>
								{codex.description}
							</p>
						{/if}

						{#if codex.code_preview}
							<div class="bg-gray-900 rounded-lg p-2 mb-3 overflow-hidden">
								<pre class="text-xs text-gray-300 font-mono truncate">{codex.code_preview.split('\n').slice(0, 3).join('\n')}</pre>
							</div>
						{/if}

						<div
							class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500"
						>
							<span>ID: {(codex._id || '').substring(0, 8)}</span>
							<span class="text-blue-600 dark:text-blue-400">View Code →</span>
						</div>
					</button>
				{/each}
			</div>
		{/if}
	{/if}

	<!-- Detail loading overlay -->
	{#if detailLoading}
		<div
			class="absolute inset-0 bg-white/80 dark:bg-gray-900/80 flex items-center justify-center rounded-lg z-10"
		>
			<svg
				class="animate-spin h-8 w-8 text-gray-400"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle
					class="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					stroke-width="4"
				></circle>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
			<span class="ml-3 text-gray-500 dark:text-gray-400">Loading details…</span>
		</div>
	{/if}
</div>
