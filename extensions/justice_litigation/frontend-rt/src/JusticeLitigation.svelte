<script lang="ts">
	let { backend, extensionId = 'justice_litigation', version = '', principal = '', isAuthenticated = true }: any = $props();

	let cases: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');
	let tab = $state<'list' | 'create'>('list');

	let formTitle = $state('');
	let formDescription = $state('');
	let formDefendant = $state('');
	let submitting = $state(false);
	let submitMsg = $state('');

	let selectedCase: any = $state(null);
	let detailLoading = $state(false);

	async function callExt(fn: string, args: string = '{}') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function loadCases() {
		loading = true;
		error = '';
		try {
			const res = await callExt('get_litigations', '{}');
			cases = res?.data ?? (Array.isArray(res) ? res : []);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function viewCase(id: string) {
		detailLoading = true;
		try {
			const res = await callExt('get_case', JSON.stringify({ case_id: id }));
			selectedCase = res?.data ?? res;
		} catch (e: any) { error = e?.message || String(e); }
		finally { detailLoading = false; }
	}

	async function createCase() {
		if (!formTitle.trim()) return;
		submitting = true;
		submitMsg = '';
		error = '';
		try {
			await callExt('create_litigation', JSON.stringify({
				title: formTitle,
				description: formDescription,
				defendant: formDefendant || undefined,
			}));
			submitMsg = 'Case filed successfully!';
			formTitle = '';
			formDescription = '';
			formDefendant = '';
			await loadCases();
		} catch (e: any) { error = e?.message || String(e); }
		finally { submitting = false; }
	}

	async function executeVerdict(caseId: string) {
		try {
			await callExt('execute_verdict', JSON.stringify({ case_id: caseId }));
			if (selectedCase) await viewCase(caseId);
			await loadCases();
		} catch (e: any) { error = e?.message || String(e); }
	}

	function goBack() { selectedCase = null; }

	$effect(() => { void loadCases(); });

	function statusColor(s: string): string {
		if (!s) return '#6b7280';
		const sl = s.toLowerCase();
		if (sl.includes('open') || sl.includes('active')) return '#059669';
		if (sl.includes('resolved') || sl.includes('closed')) return '#16a34a';
		if (sl.includes('dismissed')) return '#dc2626';
		return '#6b7280';
	}
</script>

<div class="rt-jl">
	<div class="header">
		<h2>Justice & Litigation</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={loadCases} disabled={loading}>↻</button>
	</div>

	{#if error}<div class="error">{error}</div>{/if}
	{#if submitMsg}<div class="success">{submitMsg}</div>{/if}

	{#if selectedCase}
		<button class="back" onclick={goBack}>← Back</button>
		<div class="card">
			<h3>{selectedCase.title || selectedCase.id}</h3>
			{#if selectedCase.status}
				<span class="status" style="color:{statusColor(selectedCase.status)}">{selectedCase.status}</span>
			{/if}
			{#if selectedCase.description}<p class="desc">{selectedCase.description}</p>{/if}
			{#if selectedCase.plaintiff}<div class="meta">Plaintiff: {selectedCase.plaintiff}</div>{/if}
			{#if selectedCase.defendant}<div class="meta">Defendant: {selectedCase.defendant}</div>{/if}
			{#if selectedCase.verdict}<div class="meta">Verdict: {selectedCase.verdict}</div>{/if}
			<div class="actions">
				<button class="btn" onclick={() => executeVerdict(selectedCase.id)}>Execute Verdict</button>
			</div>
			<pre class="output">{JSON.stringify(selectedCase, null, 2)}</pre>
		</div>
	{:else}
		<div class="tabs">
			<button class:active={tab === 'list'} onclick={() => tab = 'list'}>Cases ({cases.length})</button>
			<button class:active={tab === 'create'} onclick={() => tab = 'create'}>File New Case</button>
		</div>

		{#if tab === 'list'}
			{#if loading}
				<div class="empty">Loading cases…</div>
			{:else if cases.length === 0}
				<div class="empty">No cases filed</div>
			{:else}
				<div class="list">
					{#each cases as c (c.id || c.title)}
						<button class="card clickable" onclick={() => viewCase(c.id)}>
							<div class="row-top"><span class="title">{c.title || c.id}</span>
								{#if c.status}<span class="status" style="color:{statusColor(c.status)}">{c.status}</span>{/if}
							</div>
							{#if c.description}<p class="desc">{c.description.slice(0, 100)}{c.description.length > 100 ? '…' : ''}</p>{/if}
						</button>
					{/each}
				</div>
			{/if}
		{:else}
			<div class="card">
				<label>Title <input type="text" bind:value={formTitle} placeholder="Case title" /></label>
				<label>Description <textarea bind:value={formDescription} rows="3" placeholder="Describe the dispute…"></textarea></label>
				<label>Defendant (optional) <input type="text" bind:value={formDefendant} placeholder="Principal or name" /></label>
				<button class="primary" onclick={createCase} disabled={submitting || !formTitle.trim()}>
					{submitting ? 'Filing…' : 'File Case'}
				</button>
			</div>
		{/if}
	{/if}
</div>

<style>
	.rt-jl { font-family: system-ui, -apple-system, sans-serif; max-width: 720px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.25rem 0.5rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.375rem; cursor: pointer; }
	.tabs { display: flex; border-bottom: 2px solid #e5e7eb; margin-bottom: 1rem; }
	.tabs button { padding: 0.5rem 1rem; background: none; border: none; border-bottom: 2px solid transparent; margin-bottom: -2px; cursor: pointer; font-size: 0.875rem; color: #6b7280; }
	.tabs button.active { border-bottom-color: #4f46e5; color: #4f46e5; font-weight: 500; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.success { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.empty { color: #6b7280; text-align: center; padding: 2rem; }
	.list { display: flex; flex-direction: column; gap: 0.5rem; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem 1.25rem; margin-bottom: 0.75rem; width: 100%; text-align: left; font-family: inherit; }
	.clickable { cursor: pointer; }
	.clickable:hover { border-color: #a5b4fc; }
	.row-top { display: flex; justify-content: space-between; align-items: center; }
	.title { font-weight: 500; font-size: 0.9rem; }
	.status { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; }
	.desc { margin: 0.35rem 0 0; color: #4b5563; font-size: 0.8rem; line-height: 1.4; }
	.meta { font-size: 0.8rem; color: #6b7280; margin: 0.25rem 0; }
	.actions { display: flex; gap: 0.5rem; margin: 0.75rem 0; }
	.btn { padding: 0.4rem 0.8rem; background: #4f46e5; color: #fff; border: none; border-radius: 0.375rem; cursor: pointer; font-size: 0.8rem; }
	.back { background: none; border: none; color: #4f46e5; cursor: pointer; font-size: 0.85rem; padding: 0; margin-bottom: 1rem; }
	.back:hover { text-decoration: underline; }
	label { display: block; font-size: 0.8rem; font-weight: 500; color: #374151; margin-bottom: 0.75rem; }
	input, textarea { display: block; width: 100%; margin-top: 0.25rem; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.85rem; box-sizing: border-box; font-family: inherit; }
	.primary { padding: 0.5rem 1.25rem; background: #4f46e5; color: #fff; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 0.85rem; }
	.primary:hover:not(:disabled) { background: #4338ca; }
	.primary:disabled { opacity: 0.5; cursor: not-allowed; }
	.output { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.75rem; font-size: 0.7rem; font-family: ui-monospace, monospace; overflow-x: auto; white-space: pre-wrap; max-height: 300px; overflow-y: auto; margin-top: 0.5rem; }
</style>
