<script lang="ts">
	let { backend, extensionId = 'erd_explorer', version = '', principal = '', isAuthenticated = true }: any = $props();

	let schema: any = $state(null);
	let entities: string[] = $state([]);
	let selectedEntity = $state('');
	let records: any[] = $state([]);
	let loading = $state(true);
	let recordsLoading = $state(false);
	let error = $state('');
	let page = $state(0);
	let pageSize = 20;

	async function callExt(fn: string, args: string = '{}') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function loadSchema() {
		loading = true;
		error = '';
		try {
			const res = await callExt('get_entity_schema', '{}');
			schema = res?.data ?? res;
			if (schema && typeof schema === 'object') {
				entities = Object.keys(schema).filter((k) => !k.startsWith('_'));
			}
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function loadRecords(entity: string, p: number = 0) {
		selectedEntity = entity;
		page = p;
		recordsLoading = true;
		try {
			const res = await callExt('get_entity_data', JSON.stringify({
				entity_type: entity,
				offset: p * pageSize,
				limit: pageSize,
			}));
			records = res?.data ?? (Array.isArray(res) ? res : []);
		} catch (e: any) {
			error = e?.message || String(e);
			records = [];
		} finally {
			recordsLoading = false;
		}
	}

	$effect(() => { void loadSchema(); });

	function fieldNames(entityName: string): string[] {
		if (!schema?.[entityName]) return [];
		const def = schema[entityName];
		if (def.fields && typeof def.fields === 'object') return Object.keys(def.fields);
		if (typeof def === 'object') return Object.keys(def).filter((k) => k !== 'relationships');
		return [];
	}

	function relationships(entityName: string): any[] {
		if (!schema?.[entityName]?.relationships) return [];
		const rels = schema[entityName].relationships;
		return Array.isArray(rels) ? rels : Object.entries(rels).map(([k, v]) => ({ name: k, ...(typeof v === 'object' ? v : { target: v }) }));
	}
</script>

<div class="rt-erd">
	<div class="header">
		<h2>ERD Explorer</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={loadSchema} disabled={loading}>↻</button>
	</div>

	{#if error}<div class="error">{error}</div>{/if}

	{#if loading}
		<div class="empty">Loading schema…</div>
	{:else}
		<div class="two-col">
			<div class="sidebar">
				<h3>Entities ({entities.length})</h3>
				{#each entities as e}
					<button class="entity-btn" class:active={e === selectedEntity} onclick={() => loadRecords(e)}>
						{e}
						<span class="field-count">{fieldNames(e).length} fields</span>
					</button>
				{/each}
			</div>

			<div class="main">
				{#if !selectedEntity}
					<div class="empty">Select an entity to explore its schema and data</div>
				{:else}
					<h3>{selectedEntity}</h3>

					<div class="section">
						<h4>Fields</h4>
						<div class="field-list">
							{#each fieldNames(selectedEntity) as f}
								<div class="field">
									<span class="fname">{f}</span>
									<span class="ftype">{schema[selectedEntity]?.fields?.[f]?.type ?? schema[selectedEntity]?.[f] ?? ''}</span>
								</div>
							{/each}
						</div>
					</div>

					{#if relationships(selectedEntity).length > 0}
						<div class="section">
							<h4>Relationships</h4>
							{#each relationships(selectedEntity) as rel}
								<div class="rel">
									<span>{rel.name || '—'}</span>
									<span>→ {rel.target || rel.entity || '—'}</span>
									{#if rel.type}<span class="tag">{rel.type}</span>{/if}
								</div>
							{/each}
						</div>
					{/if}

					<div class="section">
						<h4>Data</h4>
						{#if recordsLoading}
							<div class="empty">Loading records…</div>
						{:else if records.length === 0}
							<div class="empty">No records</div>
						{:else}
							<div class="table-wrap">
								<table>
									<thead><tr>{#each fieldNames(selectedEntity).slice(0, 6) as f}<th>{f}</th>{/each}</tr></thead>
									<tbody>
										{#each records as r, i (r.id || i)}
											<tr>{#each fieldNames(selectedEntity).slice(0, 6) as f}<td>{r[f] ?? '—'}</td>{/each}</tr>
										{/each}
									</tbody>
								</table>
							</div>
							<div class="pagination">
								<button class="pg" disabled={page === 0} onclick={() => loadRecords(selectedEntity, page - 1)}>← Prev</button>
								<span>Page {page + 1}</span>
								<button class="pg" disabled={records.length < pageSize} onclick={() => loadRecords(selectedEntity, page + 1)}>Next →</button>
							</div>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.rt-erd { font-family: system-ui, -apple-system, sans-serif; max-width: 1000px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.35rem 0.75rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.5rem; cursor: pointer; font-size: 0.8rem; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.empty { color: #6b7280; text-align: center; padding: 2rem; }
	.two-col { display: grid; grid-template-columns: 200px 1fr; gap: 1.5rem; }
	@media (max-width: 640px) { .two-col { grid-template-columns: 1fr; } }
	.sidebar h3 { margin: 0 0 0.5rem; font-size: 0.85rem; }
	.entity-btn { display: flex; justify-content: space-between; width: 100%; padding: 0.4rem 0.5rem; background: none; border: 1px solid transparent; border-radius: 0.375rem; cursor: pointer; font-size: 0.8rem; text-align: left; color: #374151; font-family: inherit; }
	.entity-btn:hover { background: #f3f4f6; }
	.entity-btn.active { background: #eef2ff; border-color: #a5b4fc; color: #4f46e5; }
	.field-count { color: #9ca3af; font-size: 0.7rem; }
	.main h3 { margin: 0 0 1rem; font-size: 1.1rem; }
	.section { margin-bottom: 1.25rem; }
	.section h4 { margin: 0 0 0.5rem; font-size: 0.85rem; color: #6b7280; }
	.field-list { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; }
	.field { display: flex; justify-content: space-between; padding: 0.35rem 0.75rem; border-bottom: 1px solid #f3f4f6; font-size: 0.8rem; }
	.fname { font-weight: 500; }
	.ftype { color: #6b7280; font-family: ui-monospace, monospace; font-size: 0.75rem; }
	.rel { display: flex; gap: 0.5rem; padding: 0.3rem 0; font-size: 0.8rem; align-items: center; }
	.tag { background: #f3f4f6; padding: 0.1rem 0.4rem; border-radius: 0.25rem; font-size: 0.7rem; }
	.table-wrap { overflow-x: auto; }
	table { width: 100%; border-collapse: collapse; font-size: 0.75rem; }
	th { text-align: left; padding: 0.4rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 500; }
	td { padding: 0.35rem 0.4rem; border-bottom: 1px solid #f3f4f6; max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
	.pagination { display: flex; align-items: center; gap: 0.75rem; margin-top: 0.75rem; font-size: 0.8rem; }
	.pg { padding: 0.25rem 0.5rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.375rem; cursor: pointer; font-size: 0.75rem; }
	.pg:disabled { opacity: 0.4; cursor: not-allowed; }
</style>
