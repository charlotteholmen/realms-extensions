<script lang="ts">
	let { backend, extensionId = 'codex_viewer', version = '', principal = '', isAuthenticated = true }: any = $props();

	let codexes: any[] = $state([]);
	let selectedCodex: any = $state(null);
	let loading = $state(true);
	let detailLoading = $state(false);
	let error = $state('');
	let search = $state('');

	let filtered = $derived(
		search.trim()
			? codexes.filter((c) => {
					const s = search.toLowerCase();
					return (c.name ?? c.id ?? '').toLowerCase().includes(s) ||
						(c.description ?? '').toLowerCase().includes(s);
				})
			: codexes
	);

	async function callExt(fn: string, args: string = '{}') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function loadCodexes() {
		loading = true;
		error = '';
		try {
			const res = await callExt('get_all_codexes', '{}');
			codexes = res?.data ?? (Array.isArray(res) ? res : []);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function viewCodex(codexId: string) {
		detailLoading = true;
		error = '';
		try {
			const res = await callExt('get_codex_details', JSON.stringify({ codex_id: codexId }));
			selectedCodex = res?.data ?? res;
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			detailLoading = false;
		}
	}

	function goBack() {
		selectedCodex = null;
	}

	$effect(() => { void loadCodexes(); });
</script>

<div class="rt-cv">
	<div class="header">
		<h2>Codex Viewer</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={loadCodexes} disabled={loading}>↻ Refresh</button>
	</div>

	{#if error}
		<div class="error">{error}</div>
	{/if}

	{#if selectedCodex}
		<div class="detail">
			<button class="back" onclick={goBack}>← Back to list</button>
			<div class="card">
				<h3>{selectedCodex.name || selectedCodex.id || 'Codex'}</h3>
				{#if selectedCodex.description}
					<p class="desc">{selectedCodex.description}</p>
				{/if}
				{#if selectedCodex.version}
					<div class="meta">Version: {selectedCodex.version}</div>
				{/if}
				{#if selectedCodex.code || selectedCodex.source}
					<pre class="code">{selectedCodex.code || selectedCodex.source}</pre>
				{:else}
					<pre class="code">{JSON.stringify(selectedCodex, null, 2)}</pre>
				{/if}
			</div>
		</div>
	{:else}
		{#if loading}
			<div class="empty">Loading codexes…</div>
		{:else}
			<div class="search-row">
				<input type="text" bind:value={search} placeholder="Search codexes…" />
			</div>

			{#if filtered.length === 0}
				<div class="empty">{search ? 'No matches' : 'No codexes found'}</div>
			{:else}
				<div class="grid">
					{#each filtered as c (c.id || c.name)}
						<button class="card clickable" onclick={() => viewCodex(c.id || c.name)}>
							<h3>{c.name || c.id}</h3>
							{#if c.description}
								<p class="desc">{c.description}</p>
							{/if}
							{#if c.version}
								<span class="tag">{c.version}</span>
							{/if}
						</button>
					{/each}
				</div>
			{/if}
		{/if}
	{/if}

	{#if detailLoading}
		<div class="overlay">Loading codex details…</div>
	{/if}
</div>

<style>
	.rt-cv { font-family: system-ui, -apple-system, sans-serif; max-width: 900px; margin: 0 auto; padding: 1.5rem; position: relative; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.35rem 0.75rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.5rem; cursor: pointer; font-size: 0.8rem; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.empty { color: #6b7280; text-align: center; padding: 2rem; }
	.search-row { margin-bottom: 1rem; }
	.search-row input { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem; box-sizing: border-box; }
	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 0.75rem; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem 1.25rem; text-align: left; }
	.clickable { cursor: pointer; width: 100%; font-family: inherit; }
	.clickable:hover { border-color: #a5b4fc; background: #f5f3ff; }
	.card h3 { margin: 0 0 0.25rem; font-size: 0.95rem; }
	.desc { margin: 0.25rem 0; color: #6b7280; font-size: 0.8rem; line-height: 1.4; }
	.meta { font-size: 0.8rem; color: #6b7280; margin: 0.5rem 0; }
	.tag { background: #f0fdf4; color: #166534; padding: 0.1rem 0.4rem; border-radius: 0.25rem; font-size: 0.7rem; }
	.code { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.75rem; font-size: 0.75rem; font-family: ui-monospace, monospace; overflow-x: auto; white-space: pre-wrap; word-break: break-word; max-height: 500px; overflow-y: auto; margin-top: 1rem; }
	.back { background: none; border: none; color: #4f46e5; cursor: pointer; font-size: 0.85rem; padding: 0; margin-bottom: 1rem; }
	.back:hover { text-decoration: underline; }
	.overlay { position: absolute; inset: 0; background: rgba(255,255,255,0.8); display: flex; align-items: center; justify-content: center; color: #6b7280; border-radius: 0.75rem; }
</style>
