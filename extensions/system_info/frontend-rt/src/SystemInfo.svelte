<script lang="ts">
	let { backend, extensionId = 'system_info', version = '', principal = '', isAuthenticated = true }: any = $props();

	let info: any = $state(null);
	let loading = $state(true);
	let error = $state('');

	async function callExt(fn: string, args: string = '') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function loadInfo() {
		loading = true;
		error = '';
		try {
			const res = await callExt('get_system_info', '');
			info = res?.data ?? res;
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	$effect(() => { void loadInfo(); });

	function formatBytes(b: number): string {
		if (!b && b !== 0) return '—';
		if (b < 1024) return `${b} B`;
		if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
		return `${(b / 1048576).toFixed(1)} MB`;
	}

	function entries(obj: any): [string, any][] {
		if (!obj || typeof obj !== 'object') return [];
		return Object.entries(obj);
	}
</script>

<div class="rt-si">
	<div class="header">
		<h2>System Info</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={loadInfo} disabled={loading}>↻ Refresh</button>
	</div>

	{#if loading}
		<div class="loading">Loading system information…</div>
	{:else if error}
		<div class="error">{error}</div>
	{:else if info}
		{#if info.version || info.commit}
			<div class="section">
				<h3>Version</h3>
				<div class="grid">
					{#if info.version}<div class="kv"><span class="k">Version</span><span class="v">{info.version}</span></div>{/if}
					{#if info.commit}<div class="kv"><span class="k">Commit</span><span class="v mono">{info.commit}</span></div>{/if}
				</div>
			</div>
		{/if}

		{#if info.canister_ids && typeof info.canister_ids === 'object'}
			<div class="section">
				<h3>Canister IDs</h3>
				<div class="grid">
					{#each entries(info.canister_ids) as [k, v]}
						<div class="kv"><span class="k">{k}</span><span class="v mono">{v}</span></div>
					{/each}
				</div>
			</div>
		{/if}

		{#if info.memory || info.stable_memory || info.heap_memory}
			<div class="section">
				<h3>Memory</h3>
				<div class="grid">
					{#if info.memory}<div class="kv"><span class="k">Total</span><span class="v">{formatBytes(info.memory)}</span></div>{/if}
					{#if info.heap_memory}<div class="kv"><span class="k">Heap</span><span class="v">{formatBytes(info.heap_memory)}</span></div>{/if}
					{#if info.stable_memory}<div class="kv"><span class="k">Stable</span><span class="v">{formatBytes(info.stable_memory)}</span></div>{/if}
				</div>
			</div>
		{/if}

		{#if info.extensions && Array.isArray(info.extensions)}
			<div class="section">
				<h3>Extensions ({info.extensions.length})</h3>
				<div class="tags">
					{#each info.extensions as ext}
						<span class="tag">{typeof ext === 'string' ? ext : ext.name ?? JSON.stringify(ext)}</span>
					{/each}
				</div>
			</div>
		{/if}

		{#if info.entity_counts && typeof info.entity_counts === 'object'}
			<div class="section">
				<h3>Entity Counts</h3>
				<div class="grid">
					{#each entries(info.entity_counts) as [k, v]}
						<div class="kv"><span class="k">{k}</span><span class="v">{v}</span></div>
					{/each}
				</div>
			</div>
		{/if}

		{#if info.tokens && typeof info.tokens === 'object'}
			<div class="section">
				<h3>Token Balances</h3>
				<div class="grid">
					{#each entries(info.tokens) as [k, v]}
						<div class="kv"><span class="k">{k}</span><span class="v">{v}</span></div>
					{/each}
				</div>
			</div>
		{/if}
	{/if}
</div>

<style>
	.rt-si { font-family: system-ui, -apple-system, sans-serif; max-width: 800px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.35rem 0.75rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.5rem; cursor: pointer; font-size: 0.8rem; }
	.refresh:hover:not(:disabled) { background: #e5e7eb; }
	.loading { color: #6b7280; padding: 2rem; text-align: center; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; }
	.section { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem 1.25rem; margin-bottom: 1rem; }
	.section h3 { margin: 0 0 0.75rem; font-size: 1rem; color: #1f2937; }
	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 0.5rem; }
	.kv { display: flex; justify-content: space-between; padding: 0.35rem 0; border-bottom: 1px solid #f3f4f6; }
	.k { color: #6b7280; font-size: 0.8rem; }
	.v { font-weight: 500; font-size: 0.8rem; }
	.mono { font-family: ui-monospace, monospace; font-size: 0.75rem; word-break: break-all; }
	.tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
	.tag { background: #f0fdf4; color: #166534; padding: 0.2rem 0.5rem; border-radius: 0.375rem; font-size: 0.75rem; border: 1px solid #bbf7d0; }
</style>
