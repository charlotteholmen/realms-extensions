<script lang="ts">
	let { backend, extensionId = 'metrics', version = '', principal = '', isAuthenticated = true }: any = $props();

	let tab = $state<'financial' | 'budget'>('financial');
	let budgets: any[] = $state([]);
	let ledger: any[] = $state([]);
	let funds: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');

	async function loadPaginated(entityType: string, limit = 100) {
		const raw = await backend.get_objects_paginated(entityType, 0, limit, 'desc');
		const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
		return parsed?.data ?? (Array.isArray(parsed) ? parsed : []);
	}

	async function loadData() {
		loading = true;
		error = '';
		try {
			const [b, l, f] = await Promise.all([
				loadPaginated('Budget'),
				loadPaginated('LedgerEntry', 200),
				loadPaginated('Fund'),
			]);
			budgets = b;
			ledger = l;
			funds = f;
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	$effect(() => { void loadData(); });

	function fmt(n: any): string {
		if (n === null || n === undefined) return '—';
		const num = Number(n);
		if (isNaN(num)) return String(n);
		return num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
	}

	let totalIncome = $derived(
		ledger.filter((e) => (e.type || '').toLowerCase().includes('income') || Number(e.credit || 0) > 0)
			.reduce((s, e) => s + Number(e.credit || e.amount || 0), 0)
	);
	let totalExpense = $derived(
		ledger.filter((e) => (e.type || '').toLowerCase().includes('expense') || Number(e.debit || 0) > 0)
			.reduce((s, e) => s + Number(e.debit || e.amount || 0), 0)
	);
</script>

<div class="rt-met">
	<div class="header">
		<h2>Metrics</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={loadData} disabled={loading}>↻</button>
	</div>

	{#if error}<div class="error">{error}</div>{/if}

	<div class="tabs">
		<button class:active={tab === 'financial'} onclick={() => tab = 'financial'}>Financial</button>
		<button class:active={tab === 'budget'} onclick={() => tab = 'budget'}>Budgets</button>
	</div>

	{#if loading}
		<div class="empty">Loading metrics…</div>
	{:else if tab === 'financial'}
		<div class="kpi-row">
			<div class="kpi"><span class="kpi-label">Income</span><span class="kpi-val green">{fmt(totalIncome)}</span></div>
			<div class="kpi"><span class="kpi-label">Expense</span><span class="kpi-val red">{fmt(totalExpense)}</span></div>
			<div class="kpi"><span class="kpi-label">Net</span><span class="kpi-val">{fmt(totalIncome - totalExpense)}</span></div>
			<div class="kpi"><span class="kpi-label">Funds</span><span class="kpi-val">{funds.length}</span></div>
		</div>

		<div class="section">
			<h3>Ledger Entries ({ledger.length})</h3>
			{#if ledger.length === 0}
				<div class="empty">No entries</div>
			{:else}
				<div class="table-wrap">
					<table>
						<thead><tr><th>Date</th><th>Description</th><th>Debit</th><th>Credit</th></tr></thead>
						<tbody>
							{#each ledger.slice(0, 50) as e}
								<tr>
									<td class="nowrap">{e.date || e.created_at || '—'}</td>
									<td>{e.description || e.memo || e.type || '—'}</td>
									<td class="red">{e.debit ? fmt(e.debit) : ''}</td>
									<td class="green">{e.credit ? fmt(e.credit) : ''}</td>
								</tr>
							{/each}
						</tbody>
					</table>
					{#if ledger.length > 50}
						<div class="note">Showing 50 of {ledger.length} entries</div>
					{/if}
				</div>
			{/if}
		</div>

	{:else if tab === 'budget'}
		{#if budgets.length === 0}
			<div class="empty">No budgets found</div>
		{:else}
			<div class="grid">
				{#each budgets as b (b.id || b.name)}
					<div class="card">
						<h4>{b.name || b.category || b.id || 'Budget'}</h4>
						{#if b.allocated !== undefined}<div class="kv"><span>Allocated</span><span>{fmt(b.allocated)}</span></div>{/if}
						{#if b.spent !== undefined}<div class="kv"><span>Spent</span><span class="red">{fmt(b.spent)}</span></div>{/if}
						{#if b.remaining !== undefined}<div class="kv"><span>Remaining</span><span class="green">{fmt(b.remaining)}</span></div>{/if}
						{#if b.period}<div class="kv"><span>Period</span><span>{b.period}</span></div>{/if}
					</div>
				{/each}
			</div>
		{/if}
	{/if}
</div>

<style>
	.rt-met { font-family: system-ui, -apple-system, sans-serif; max-width: 900px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.25rem 0.5rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.375rem; cursor: pointer; }
	.tabs { display: flex; border-bottom: 2px solid #e5e7eb; margin-bottom: 1rem; }
	.tabs button { padding: 0.5rem 1rem; background: none; border: none; border-bottom: 2px solid transparent; margin-bottom: -2px; cursor: pointer; font-size: 0.875rem; color: #6b7280; }
	.tabs button.active { border-bottom-color: #4f46e5; color: #4f46e5; font-weight: 500; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.empty { color: #6b7280; text-align: center; padding: 2rem; }
	.kpi-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem; }
	.kpi { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem; text-align: center; }
	.kpi-label { display: block; font-size: 0.75rem; color: #6b7280; margin-bottom: 0.25rem; }
	.kpi-val { font-size: 1.25rem; font-weight: 600; }
	.green { color: #16a34a; }
	.red { color: #dc2626; }
	.section { margin-bottom: 1.5rem; }
	.section h3 { margin: 0 0 0.75rem; font-size: 1rem; }
	.table-wrap { overflow-x: auto; }
	table { width: 100%; border-collapse: collapse; font-size: 0.8rem; }
	th { text-align: left; padding: 0.5rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 500; }
	td { padding: 0.4rem 0.5rem; border-bottom: 1px solid #f3f4f6; }
	.nowrap { white-space: nowrap; }
	.note { font-size: 0.75rem; color: #9ca3af; text-align: center; padding: 0.5rem; }
	.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 0.75rem; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem; }
	.card h4 { margin: 0 0 0.5rem; font-size: 0.9rem; }
	.kv { display: flex; justify-content: space-between; padding: 0.25rem 0; font-size: 0.8rem; border-bottom: 1px solid #f9fafb; }
</style>
