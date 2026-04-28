<script lang="ts">
	let { backend, extensionId = 'public_dashboard', version = '', principal = '', isAuthenticated = true }: any = $props();

	let status: any = $state(null);
	let realm: any = $state(null);
	let zones: any[] = $state([]);
	let recentUsers: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');

	async function loadPaginated(entityType: string, offset = 0, limit = 10, order = 'desc') {
		const raw = await backend.get_objects_paginated(entityType, offset, limit, order);
		const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
		return parsed?.data ?? (Array.isArray(parsed) ? parsed : []);
	}

	async function loadData() {
		loading = true;
		error = '';
		try {
			const statusRaw = await backend.status();
			const statusParsed = typeof statusRaw === 'string' ? JSON.parse(statusRaw) : statusRaw;
			status = statusParsed?.data?.status ?? statusParsed;

			const [r, z, u] = await Promise.all([
				loadPaginated('Realm', 0, 1, 'asc').catch(() => []),
				loadPaginated('Zone', 0, 100, 'asc').catch(() => []),
				loadPaginated('User', 0, 8, 'desc').catch(() => []),
			]);
			realm = r[0] ?? null;
			zones = z;
			recentUsers = u;
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	$effect(() => { void loadData(); });

	function kpi(key: string): string {
		const v = status?.[key];
		if (v === undefined || v === null) return '—';
		return String(v).replace(/"/g, '');
	}
</script>

<div class="rt-pd">
	<div class="header">
		<h2>Dashboard</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={loadData} disabled={loading}>↻</button>
	</div>

	{#if error}<div class="error">{error}</div>{/if}

	{#if loading}
		<div class="empty">Loading dashboard…</div>
	{:else}
		<div class="kpi-row">
			<div class="kpi"><span class="kpi-label">Users</span><span class="kpi-val">{kpi('users_count')}</span></div>
			<div class="kpi"><span class="kpi-label">Organizations</span><span class="kpi-val">{kpi('organizations_count')}</span></div>
			<div class="kpi"><span class="kpi-label">Proposals</span><span class="kpi-val">{kpi('proposals_count')}</span></div>
			<div class="kpi"><span class="kpi-label">Votes</span><span class="kpi-val">{kpi('votes_count')}</span></div>
			<div class="kpi"><span class="kpi-label">Tasks</span><span class="kpi-val">{kpi('tasks_count')}</span></div>
			<div class="kpi"><span class="kpi-label">Transfers</span><span class="kpi-val">{kpi('transfers_count')}</span></div>
			<div class="kpi"><span class="kpi-label">Disputes</span><span class="kpi-val">{kpi('disputes_count')}</span></div>
			<div class="kpi"><span class="kpi-label">Extensions</span><span class="kpi-val">{(status?.extensions ?? []).length}</span></div>
		</div>

		{#if realm}
			<div class="section">
				<h3>Realm</h3>
				<div class="card">
					<div class="kv"><span>Name</span><span class="fw">{realm.name || status?.realm_name || '—'}</span></div>
					{#if realm.description || status?.realm_description}
						<div class="kv"><span>Description</span><span>{realm.description || status?.realm_description}</span></div>
					{/if}
					<div class="kv"><span>Version</span><span>{status?.version || '—'}</span></div>
					<div class="kv"><span>Status</span><span class="green">{status?.status || '—'}</span></div>
				</div>
			</div>
		{/if}

		{#if zones.length > 0}
			<div class="section">
				<h3>Zones ({zones.length})</h3>
				<div class="grid">
					{#each zones.slice(0, 20) as z (z.id || z.name)}
						<div class="tag">{z.name || z.h3_index || z.id || JSON.stringify(z)}</div>
					{/each}
					{#if zones.length > 20}<div class="note">+{zones.length - 20} more</div>{/if}
				</div>
			</div>
		{/if}

		{#if recentUsers.length > 0}
			<div class="section">
				<h3>Recent Users</h3>
				<div class="table-wrap">
					<table>
						<thead><tr><th>Name</th><th>Principal</th><th>Joined</th></tr></thead>
						<tbody>
							{#each recentUsers as u}
								<tr>
									<td class="fw">{u.name || u.username || '—'}</td>
									<td class="mono">{(u.principal || u.id || '').slice(0, 16)}…</td>
									<td>{u.created_at || u.joined || '—'}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		{/if}
	{/if}
</div>

<style>
	.rt-pd { font-family: system-ui, -apple-system, sans-serif; max-width: 900px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.35rem 0.75rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.5rem; cursor: pointer; font-size: 0.8rem; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.empty { color: #6b7280; text-align: center; padding: 2rem; }
	.kpi-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem; }
	.kpi { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 0.75rem; text-align: center; }
	.kpi-label { display: block; font-size: 0.7rem; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.2rem; }
	.kpi-val { font-size: 1.5rem; font-weight: 700; color: #1f2937; }
	.section { margin-bottom: 1.5rem; }
	.section h3 { margin: 0 0 0.75rem; font-size: 1rem; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem; }
	.kv { display: flex; justify-content: space-between; padding: 0.35rem 0; border-bottom: 1px solid #f3f4f6; font-size: 0.85rem; }
	.fw { font-weight: 500; }
	.green { color: #16a34a; }
	.mono { font-family: ui-monospace, monospace; font-size: 0.75rem; }
	.grid { display: flex; flex-wrap: wrap; gap: 0.35rem; }
	.tag { background: #f0fdf4; color: #166534; padding: 0.2rem 0.5rem; border-radius: 0.375rem; font-size: 0.75rem; border: 1px solid #bbf7d0; }
	.note { color: #9ca3af; font-size: 0.75rem; padding: 0.25rem; }
	.table-wrap { overflow-x: auto; }
	table { width: 100%; border-collapse: collapse; font-size: 0.8rem; }
	th { text-align: left; padding: 0.5rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 500; }
	td { padding: 0.4rem 0.5rem; border-bottom: 1px solid #f3f4f6; }
</style>
