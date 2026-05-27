<script lang="ts">
	let { ctx }: { ctx: any } = $props();

	let data: any = $state(null);
	let loading = $state(true);
	let error = $state('');
	let accessDeniedOp = $state('');
	let lastRefresh = $state('');

	const cn = $derived(ctx?.theme?.cn ?? ((...classes: string[]) => classes.filter(Boolean).join(' ')));

	async function fetchSystemInfo() {
		loading = true;
		error = '';
		accessDeniedOp = '';
		try {
			data = await ctx.callSync('get_system_info');
			lastRefresh = new Date().toLocaleString();
		} catch (e: any) {
			const op = ctx.ui?.accessDeniedOperation?.(e);
			if (op != null) {
				accessDeniedOp = op;
				error = '';
			} else {
				accessDeniedOp = '';
				error = e?.message ?? String(e);
			}
		} finally {
			loading = false;
		}
	}

	$effect(() => {
		fetchSystemInfo();
	});

	function formatCycles(tc: number): string {
		if (tc >= 1) return `${tc.toFixed(2)} TC`;
		return `${(tc * 1000).toFixed(1)} GC`;
	}

	function formatBytes(bytes: number): string {
		if (!bytes && bytes !== 0) return '—';
		if (bytes >= 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
		if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
		if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
		return `${bytes} B`;
	}

	function formatNumber(n: number): string {
		if (n == null) return '0';
		return n.toLocaleString();
	}

	function formatTimestamp(ns: number): string {
		if (!ns) return 'N/A';
		return new Date(ns / 1_000_000).toLocaleString();
	}

	function entries(obj: any): [string, any][] {
		if (!obj || typeof obj !== 'object') return [];
		return Object.entries(obj);
	}

	function sortedEntries(obj: any): [string, number][] {
		return entries(obj).sort((a, b) => (b[1] as number) - (a[1] as number));
	}
</script>

<div class="p-6 max-w-4xl mx-auto space-y-6">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-3">
			<div class="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
				<svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
				</svg>
			</div>
			<div>
				<h1 class="text-2xl font-bold text-gray-900 dark:text-white">System Info</h1>
				<p class="text-sm text-gray-500 dark:text-gray-400">Canister diagnostics & health dashboard</p>
			</div>
		</div>
		<button
			onclick={fetchSystemInfo}
			disabled={loading}
			class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
		>
			{#if loading}
				<svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
				</svg>
			{:else}
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
				</svg>
			{/if}
			Refresh
		</button>
	</div>

	{#if lastRefresh}
		<p class="text-xs text-gray-400 dark:text-gray-500">Last updated: {lastRefresh}</p>
	{/if}

	<!-- Loading state -->
	{#if loading && !data}
		<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center">
			<svg class="w-8 h-8 animate-spin text-indigo-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
			</svg>
			<p class="text-gray-500 dark:text-gray-400">Loading system information…</p>
		</div>

	<!-- Error state -->
	{:else if accessDeniedOp && !data}
		{#if ctx.ui?.AccessDenied}
			<svelte:component this={ctx.ui.AccessDenied} operation={accessDeniedOp} />
		{:else}
			<p class="text-sm text-gray-500">You need additional permissions to view this page.</p>
		{/if}
	{:else if error && !data}
		<div class="bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
			<p class="text-red-700 dark:text-red-300 font-medium">Error: {error}</p>
			<button
				onclick={fetchSystemInfo}
				class="mt-4 px-3 py-1.5 text-sm font-medium rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
			>
				Retry
			</button>
		</div>

	<!-- Data display -->
	{:else if data}

		<!-- Overview Cards -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
			<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
				<p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Cycles</p>
				<p class="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-1">
					{formatCycles(data.canister?.cycles_tc || 0)}
				</p>
				<p class="text-xs text-gray-400 mt-0.5">{formatNumber(data.canister?.cycles || 0)}</p>
			</div>
			<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
				<p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Stable Memory</p>
				<p class="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
					{data.canister?.stable_memory_mb || 0} MB
				</p>
				<p class="text-xs text-gray-400 mt-0.5">{formatNumber(data.canister?.stable_memory_pages || 0)} pages</p>
			</div>
			<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
				<p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Entities</p>
				<p class="text-xl font-bold text-amber-600 dark:text-amber-400 mt-1">
					{formatNumber(data.db?.total_entities || 0)}
				</p>
				<p class="text-xs text-gray-400 mt-0.5">{data.db?.entity_types || 0} types</p>
			</div>
			<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
				<p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Files</p>
				<p class="text-xl font-bold text-rose-600 dark:text-rose-400 mt-1">
					{formatNumber(data.files?.total_files || 0)}
				</p>
				<p class="text-xs text-gray-400 mt-0.5">{formatBytes(data.files?.total_size_bytes || 0)}</p>
			</div>
		</div>

		<!-- Versions -->
		<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
			<div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3">
				<h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Versions</h2>
			</div>
			<div class="divide-y divide-gray-100 dark:divide-gray-700">
				<div class="px-5 py-3 flex items-center justify-between">
					<div class="flex items-center gap-2">
						<span class="w-2 h-2 rounded-full bg-yellow-400"></span>
						<span class="text-sm font-medium text-gray-700 dark:text-gray-300">Python</span>
					</div>
					<span class="text-sm text-gray-500 dark:text-gray-400 font-mono">{data.python?.version || 'N/A'}</span>
				</div>
				<div class="px-5 py-3 flex items-center justify-between">
					<div class="flex items-center gap-2">
						<span class="w-2 h-2 rounded-full bg-green-400"></span>
						<span class="text-sm font-medium text-gray-700 dark:text-gray-300">Basilisk</span>
					</div>
					<div class="text-right">
						<span class="text-sm text-gray-500 dark:text-gray-400 font-mono">{data.basilisk?.version || 'N/A'}</span>
						{#if data.basilisk?.rust_version}
							<span class="text-xs text-gray-400 dark:text-gray-500 ml-2">(Rust {data.basilisk.rust_version})</span>
						{/if}
					</div>
				</div>
				<div class="px-5 py-3 flex items-center justify-between">
					<div class="flex items-center gap-2">
						<span class="w-2 h-2 rounded-full bg-blue-400"></span>
						<span class="text-sm font-medium text-gray-700 dark:text-gray-300">Realms</span>
					</div>
					<div class="text-right">
						<span class="text-sm text-gray-500 dark:text-gray-400 font-mono">{data.realms?.version || 'N/A'}</span>
						{#if data.realms?.commit && !data.realms.commit.includes('PLACEHOLDER')}
							<span class="text-xs text-gray-400 dark:text-gray-500 ml-2">({data.realms.commit.slice(0, 7)})</span>
						{/if}
					</div>
				</div>
				{#if data.realms?.commit_datetime && !data.realms.commit_datetime.includes('PLACEHOLDER')}
					<div class="px-5 py-2 flex justify-end">
						<span class="text-xs text-gray-400 dark:text-gray-500">Built: {data.realms.commit_datetime}</span>
					</div>
				{/if}
			</div>
		</div>

		<!-- Canister IDs -->
		{#if data.canister?.canisters && Object.keys(data.canister.canisters).length > 0}
			<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
				<div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3">
					<h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Canister IDs</h2>
				</div>
				<div class="divide-y divide-gray-100 dark:divide-gray-700">
					{#each entries(data.canister.canisters) as [role, id]}
						<div class="px-5 py-3 flex items-center justify-between">
							<span class="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">{role}</span>
							<span class="text-sm text-gray-500 dark:text-gray-400 font-mono">{id}</span>
						</div>
					{/each}
				</div>
				{#if data.canister?.time_ns}
					<div class="border-t border-gray-200 dark:border-gray-700 px-5 py-2">
						<p class="text-xs text-gray-400 dark:text-gray-500">Canister time: {formatTimestamp(data.canister.time_ns)}</p>
					</div>
				{/if}
			</div>
		{/if}

		<!-- Token Balances -->
		{#if data.tokens?.tokens?.length > 0}
			<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
				<div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3">
					<h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Token Balances</h2>
				</div>
				<div class="divide-y divide-gray-100 dark:divide-gray-700">
					{#each data.tokens.tokens as token}
						<div class="px-5 py-3 flex items-center justify-between">
							<div>
								<span class="text-sm font-medium text-gray-700 dark:text-gray-300">{token.name}</span>
								<span class="text-xs text-gray-400 dark:text-gray-500 ml-2 font-mono">{token.ledger?.slice(0, 10)}…</span>
							</div>
							<span class="text-sm font-mono text-gray-600 dark:text-gray-400">
								{(token.balance_raw / Math.pow(10, token.decimals || 8)).toFixed(token.decimals > 4 ? 4 : token.decimals || 8)}
							</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Extensions -->
		{#if data.extensions?.extensions?.length > 0}
			<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
				<div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3 flex items-center justify-between">
					<h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Extensions</h2>
					<span class="text-xs text-gray-400 dark:text-gray-500">{data.extensions.count} installed</span>
				</div>
				<div class="divide-y divide-gray-100 dark:divide-gray-700">
					{#each data.extensions.extensions as ext}
						<div class="px-5 py-3">
							<div class="flex items-center justify-between">
								<span class="text-sm font-medium text-gray-700 dark:text-gray-300">{ext.name}</span>
								<span class="text-xs font-mono text-gray-500 dark:text-gray-400">v{ext.version}</span>
							</div>
							{#if ext.description}
								<p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{ext.description}</p>
							{/if}
							{#if ext.commit && !ext.commit.includes('PLACEHOLDER')}
								<p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5 font-mono">{ext.commit.slice(0, 7)} — {ext.commit_datetime}</p>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Database Entities -->
		{#if data.db?.counts}
			<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
				<div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3 flex items-center justify-between">
					<h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Database Entities</h2>
					<span class="text-xs text-gray-400 dark:text-gray-500">{formatNumber(data.db.total_entities)} total</span>
				</div>
				<div class="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-100 dark:bg-gray-700">
					{#each sortedEntries(data.db.counts) as [type, count]}
						<div class="bg-white dark:bg-gray-800 px-4 py-2.5 flex items-center justify-between">
							<span class="text-xs text-gray-600 dark:text-gray-400">{type}</span>
							<span class="text-xs font-mono font-semibold {count > 0 ? 'text-gray-700 dark:text-gray-300' : 'text-gray-300 dark:text-gray-600'}">{formatNumber(count)}</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Filesystem -->
		{#if data.files?.top_extensions}
			<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
				<div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3 flex items-center justify-between">
					<h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Filesystem</h2>
					<span class="text-xs text-gray-400 dark:text-gray-500">{formatNumber(data.files.total_files)} files, {formatBytes(data.files.total_size_bytes)}</span>
				</div>
				<div class="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-100 dark:bg-gray-700">
					{#each sortedEntries(data.files.top_extensions) as [ext, count]}
						<div class="bg-white dark:bg-gray-800 px-3 py-2 text-center">
							<p class="text-xs font-mono text-gray-500 dark:text-gray-400">{ext}</p>
							<p class="text-sm font-semibold text-gray-700 dark:text-gray-300">{formatNumber(count)}</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Dependencies -->
		{#if data.dependencies?.length > 0}
			<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
				<div class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-5 py-3">
					<h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Dependencies</h2>
				</div>
				<div class="px-5 py-3 flex flex-wrap gap-x-4 gap-y-1">
					{#each data.dependencies as dep}
						<span class="text-xs font-mono text-gray-500 dark:text-gray-400">{dep}</span>
					{/each}
				</div>
			</div>
		{/if}

	{/if}
</div>
