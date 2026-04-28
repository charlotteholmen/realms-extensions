<script lang="ts">
	let { backend, extensionId = 'admin_dashboard', version = '', principal = '', isAuthenticated = true }: any = $props();

	let entityTypes: string[] = $state([]);
	let selectedType = $state('');
	let objects: any[] = $state([]);
	let loading = $state(true);
	let objLoading = $state(false);
	let error = $state('');
	let page = $state(0);
	let pageSize = 20;
	let expanded: Set<number> = $state(new Set());

	let extensions: any[] = $state([]);
	let codexPackages: any[] = $state([]);

	async function callExt(fn: string, args: string = '{}') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function loadEntityTypes() {
		loading = true;
		error = '';
		try {
			const res = await callExt('get_entity_types', '{}');
			entityTypes = res?.data ?? (Array.isArray(res) ? res : []);

			const [ext, cdx] = await Promise.all([
				backend.list_runtime_extensions().then((r: string) => JSON.parse(r)).catch(() => ({})),
				backend.list_codex_packages().then((r: string) => JSON.parse(r)).catch(() => ({})),
			]);
			const extManifests = ext?.all_manifests ?? {};
			extensions = Object.entries(extManifests).map(([id, m]: any) => ({ id, ...m }));
			const cdxPkgs = cdx?.packages ?? cdx?.data ?? {};
			codexPackages = Array.isArray(cdxPkgs) ? cdxPkgs : Object.entries(cdxPkgs).map(([id, m]: any) => ({ id, ...m }));
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function loadObjects(type: string, p: number = 0) {
		selectedType = type;
		page = p;
		objLoading = true;
		expanded = new Set();
		try {
			const raw = await backend.get_objects_paginated(type, p * pageSize, pageSize, 'desc');
			const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
			objects = parsed?.data ?? (Array.isArray(parsed) ? parsed : []);
		} catch (e: any) {
			error = e?.message || String(e);
			objects = [];
		} finally {
			objLoading = false;
		}
	}

	function toggleExpand(i: number) {
		const next = new Set(expanded);
		if (next.has(i)) next.delete(i); else next.add(i);
		expanded = next;
	}

	async function deleteEntity(obj: any) {
		if (!confirm(`Delete ${obj.id ?? 'this entity'}?`)) return;
		try {
			await callExt('delete_entity', JSON.stringify({ entity_type: selectedType, id: obj.id }));
			await loadObjects(selectedType, page);
		} catch (e: any) { error = e?.message || String(e); }
	}

	$effect(() => { void loadEntityTypes(); });

	function shortJson(obj: any): string {
		const s = JSON.stringify(obj);
		return s.length > 80 ? s.slice(0, 80) + '…' : s;
	}
</script>

<div class="rt-ad">
	<div class="header">
		<h2>Admin Dashboard</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={loadEntityTypes} disabled={loading}>↻</button>
	</div>

	{#if error}<div class="error">{error}</div>{/if}

	{#if loading}
		<div class="empty">Loading admin data…</div>
	{:else}
		<div class="two-col">
			<div class="sidebar">
				<h3>Packages</h3>
				<div class="pkg-info">
					<div class="kv"><span>Extensions</span><span class="fw">{extensions.length}</span></div>
					<div class="kv"><span>Codexes</span><span class="fw">{codexPackages.length}</span></div>
				</div>

				<h3>Entity Types</h3>
				{#each entityTypes as t}
					<button class="entity-btn" class:active={t === selectedType} onclick={() => loadObjects(t)}>
						{t}
					</button>
				{/each}
				{#if entityTypes.length === 0}
					<div class="empty small">No entity types</div>
				{/if}
			</div>

			<div class="main">
				{#if !selectedType}
					<div class="empty">Select an entity type to browse</div>
				{:else if objLoading}
					<div class="empty">Loading {selectedType}…</div>
				{:else}
					<h3>{selectedType} ({objects.length})</h3>
					<div class="pagination">
						<button class="pg-btn" disabled={page === 0} onclick={() => loadObjects(selectedType, page - 1)}>← Prev</button>
						<span>Page {page + 1}</span>
						<button class="pg-btn" disabled={objects.length < pageSize} onclick={() => loadObjects(selectedType, page + 1)}>Next →</button>
					</div>
					{#if objects.length === 0}
						<div class="empty">No records</div>
					{:else}
						{#each objects as obj, i (obj.id || i)}
							<div class="obj-row">
								<div class="obj-header">
									<button class="expand-btn" onclick={() => toggleExpand(i)}>
										{expanded.has(i) ? '▼' : '▶'}
									</button>
									<span class="obj-id">{obj.id || obj.name || `#${i}`}</span>
									<span class="obj-preview">{shortJson(obj)}</span>
									<button class="del-btn" onclick={() => deleteEntity(obj)}>✕</button>
								</div>
								{#if expanded.has(i)}
									<pre class="obj-json">{JSON.stringify(obj, null, 2)}</pre>
								{/if}
							</div>
						{/each}
					{/if}
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.rt-ad { font-family: system-ui, -apple-system, sans-serif; max-width: 1000px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.35rem 0.75rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.5rem; cursor: pointer; font-size: 0.8rem; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.empty { color: #6b7280; text-align: center; padding: 2rem; }
	.empty.small { padding: 0.5rem; font-size: 0.8rem; }
	.two-col { display: grid; grid-template-columns: 200px 1fr; gap: 1.5rem; }
	@media (max-width: 640px) { .two-col { grid-template-columns: 1fr; } }
	.sidebar h3 { margin: 0 0 0.5rem; font-size: 0.85rem; color: #374151; }
	.pkg-info { margin-bottom: 1rem; }
	.kv { display: flex; justify-content: space-between; padding: 0.2rem 0; font-size: 0.8rem; }
	.fw { font-weight: 500; }
	.entity-btn { display: block; width: 100%; padding: 0.35rem 0.5rem; background: none; border: 1px solid transparent; border-radius: 0.375rem; cursor: pointer; font-size: 0.8rem; text-align: left; color: #374151; font-family: inherit; }
	.entity-btn:hover { background: #f3f4f6; }
	.entity-btn.active { background: #eef2ff; border-color: #a5b4fc; color: #4f46e5; font-weight: 500; }
	.main h3 { margin: 0 0 0.75rem; font-size: 1rem; }
	.pagination { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; font-size: 0.8rem; }
	.pg-btn { padding: 0.25rem 0.5rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.375rem; cursor: pointer; font-size: 0.75rem; }
	.pg-btn:disabled { opacity: 0.4; cursor: not-allowed; }
	.obj-row { border: 1px solid #e5e7eb; border-radius: 0.5rem; margin-bottom: 0.4rem; overflow: hidden; }
	.obj-header { display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.6rem; background: #fafafa; }
	.expand-btn { background: none; border: none; cursor: pointer; padding: 0; font-size: 0.7rem; color: #6b7280; width: 1.2rem; }
	.obj-id { font-weight: 500; font-size: 0.8rem; white-space: nowrap; }
	.obj-preview { flex: 1; font-size: 0.7rem; color: #9ca3af; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ui-monospace, monospace; }
	.del-btn { background: none; border: none; color: #dc2626; cursor: pointer; font-size: 0.75rem; padding: 0.1rem 0.3rem; margin-left: auto; }
	.del-btn:hover { background: #fef2f2; border-radius: 0.25rem; }
	.obj-json { margin: 0; padding: 0.6rem; font-size: 0.7rem; font-family: ui-monospace, monospace; background: #f9fafb; max-height: 300px; overflow: auto; white-space: pre-wrap; word-break: break-word; }
</style>
