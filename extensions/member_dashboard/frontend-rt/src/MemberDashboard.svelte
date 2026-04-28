<script lang="ts">
	let { backend, extensionId = 'member_dashboard', version = '', principal = '', isAuthenticated = true }: any = $props();

	let summary: any = $state(null);
	let citizenship: any = $state(null);
	let notifications: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');

	async function callExt(fn: string, args: string = '{}', ext: string = extensionId) {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: ext, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function loadData() {
		loading = true;
		error = '';
		try {
			const [sum, cit, notif] = await Promise.all([
				callExt('get_dashboard_summary', '{}').catch(() => null),
				callExt('get_citizenship_status', '{}').catch(() => null),
				callExt('get_notifications', '{}', 'notifications').catch(() => ({ data: [] })),
			]);
			summary = sum?.data ?? sum;
			citizenship = cit?.data ?? cit;
			const n = notif?.data ?? notif?.notifications ?? notif;
			notifications = Array.isArray(n) ? n : [];
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function markRead(id: string) {
		try {
			await callExt('mark_as_read', JSON.stringify({ id, read: true }), 'notifications');
			notifications = notifications.map((n) => n.id === id ? { ...n, read: true } : n);
		} catch {}
	}

	$effect(() => { void loadData(); });

	function entries(obj: any): [string, any][] {
		if (!obj || typeof obj !== 'object') return [];
		return Object.entries(obj).filter(([k]) => !k.startsWith('_'));
	}
</script>

<div class="rt-md">
	<div class="header">
		<h2>Member Dashboard</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={loadData} disabled={loading}>↻</button>
	</div>

	{#if !isAuthenticated}
		<div class="empty">Please log in to view your dashboard.</div>
	{:else if error}
		<div class="error">{error}</div>
	{:else if loading}
		<div class="empty">Loading dashboard…</div>
	{:else}
		{#if citizenship}
			<div class="section">
				<h3>Citizenship</h3>
				<div class="card">
					{#each entries(citizenship) as [k, v]}
						<div class="kv"><span class="k">{k.replace(/_/g, ' ')}</span><span class="v">{typeof v === 'object' ? JSON.stringify(v) : v}</span></div>
					{/each}
					{#if entries(citizenship).length === 0}
						<div class="empty small">No citizenship data</div>
					{/if}
				</div>
			</div>
		{/if}

		{#if summary}
			<div class="section">
				<h3>Summary</h3>
				<div class="card">
					{#each entries(summary) as [k, v]}
						<div class="kv"><span class="k">{k.replace(/_/g, ' ')}</span><span class="v">{typeof v === 'object' ? JSON.stringify(v) : v}</span></div>
					{/each}
					{#if entries(summary).length === 0}
						<div class="empty small">No summary data</div>
					{/if}
				</div>
			</div>
		{/if}

		<div class="section">
			<h3>Notifications ({notifications.filter((n) => !n.read).length} unread)</h3>
			{#if notifications.length === 0}
				<div class="empty">No notifications</div>
			{:else}
				<div class="notif-list">
					{#each notifications.slice(0, 10) as n (n.id)}
						<div class="notif" class:unread={!n.read}>
							<div class="notif-top">
								<span class="notif-title">{n.title || n.type || 'Notification'}</span>
								{#if !n.read}
									<button class="link" onclick={() => markRead(n.id)}>Mark read</button>
								{/if}
							</div>
							{#if n.message || n.body}
								<p class="notif-body">{n.message || n.body}</p>
							{/if}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.rt-md { font-family: system-ui, -apple-system, sans-serif; max-width: 760px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.35rem 0.75rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.5rem; cursor: pointer; font-size: 0.8rem; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.empty { color: #6b7280; text-align: center; padding: 2rem; }
	.empty.small { padding: 0.75rem; font-size: 0.8rem; }
	.section { margin-bottom: 1.5rem; }
	.section h3 { margin: 0 0 0.75rem; font-size: 1rem; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem 1.25rem; }
	.kv { display: flex; justify-content: space-between; padding: 0.3rem 0; border-bottom: 1px solid #f3f4f6; font-size: 0.85rem; }
	.k { color: #6b7280; text-transform: capitalize; }
	.v { font-weight: 500; max-width: 60%; text-align: right; word-break: break-word; }
	.notif-list { display: flex; flex-direction: column; gap: 0.5rem; }
	.notif { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.75rem 1rem; }
	.notif.unread { border-left: 3px solid #4f46e5; }
	.notif-top { display: flex; justify-content: space-between; align-items: center; }
	.notif-title { font-weight: 500; font-size: 0.85rem; }
	.link { background: none; border: none; color: #4f46e5; cursor: pointer; font-size: 0.75rem; padding: 0; }
	.link:hover { text-decoration: underline; }
	.notif-body { margin: 0.25rem 0 0; color: #4b5563; font-size: 0.8rem; line-height: 1.4; }
</style>
