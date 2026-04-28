<script lang="ts">
	let { backend, extensionId = 'notifications', version = '', principal = '', isAuthenticated = true }: any = $props();

	let notifications: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');
	let filter = $state<'all' | 'unread'>('all');

	let filtered = $derived(
		filter === 'unread' ? notifications.filter((n) => !n.read) : notifications
	);
	let unreadCount = $derived(notifications.filter((n) => !n.read).length);

	async function callExt(fn: string, args: string = '') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function loadNotifications() {
		loading = true;
		error = '';
		try {
			const res = await callExt('get_notifications', '{}');
			notifications = res?.data ?? res?.notifications ?? (Array.isArray(res) ? res : []);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function markRead(id: string) {
		try {
			await callExt('mark_as_read', JSON.stringify({ id, read: true }));
			notifications = notifications.map((n) => n.id === id ? { ...n, read: true } : n);
		} catch {}
	}

	async function markAllRead() {
		for (const n of notifications.filter((n) => !n.read)) {
			await markRead(n.id);
		}
	}

	$effect(() => { void loadNotifications(); });

	function timeAgo(ts: string | number): string {
		if (!ts) return '';
		const d = typeof ts === 'number' ? ts : Date.parse(ts);
		if (isNaN(d)) return String(ts);
		const sec = Math.floor((Date.now() - d) / 1000);
		if (sec < 60) return 'just now';
		if (sec < 3600) return `${Math.floor(sec / 60)}m ago`;
		if (sec < 86400) return `${Math.floor(sec / 3600)}h ago`;
		return `${Math.floor(sec / 86400)}d ago`;
	}
</script>

<div class="rt-notif">
	<div class="header">
		<h2>Notifications</h2>
		{#if unreadCount > 0}
			<span class="count">{unreadCount}</span>
		{/if}
		<span class="badge">v{version}</span>
		<div class="actions">
			<button class="link" onclick={markAllRead} disabled={unreadCount === 0}>Mark all read</button>
			<button class="refresh" onclick={loadNotifications} disabled={loading}>↻</button>
		</div>
	</div>

	<div class="tabs">
		<button class:active={filter === 'all'} onclick={() => filter = 'all'}>All</button>
		<button class:active={filter === 'unread'} onclick={() => filter = 'unread'}>Unread ({unreadCount})</button>
	</div>

	{#if loading}
		<div class="empty">Loading notifications…</div>
	{:else if error}
		<div class="error">{error}</div>
	{:else if filtered.length === 0}
		<div class="empty">No {filter === 'unread' ? 'unread ' : ''}notifications</div>
	{:else}
		<div class="list">
			{#each filtered as n (n.id)}
				<div class="item" class:unread={!n.read}>
					<div class="item-header">
						<span class="title">{n.title || n.type || 'Notification'}</span>
						{#if n.timestamp || n.created_at}
							<span class="time">{timeAgo(n.timestamp || n.created_at)}</span>
						{/if}
					</div>
					{#if n.message || n.body}
						<p class="body">{n.message || n.body}</p>
					{/if}
					{#if !n.read}
						<button class="link small" onclick={() => markRead(n.id)}>Mark read</button>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.rt-notif { font-family: system-ui, -apple-system, sans-serif; max-width: 640px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.count { background: #ef4444; color: #fff; padding: 0.1rem 0.45rem; border-radius: 9999px; font-size: 0.7rem; font-weight: 600; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.actions { margin-left: auto; display: flex; gap: 0.5rem; }
	.link { background: none; border: none; color: #4f46e5; cursor: pointer; font-size: 0.8rem; padding: 0; }
	.link:hover { text-decoration: underline; }
	.link:disabled { color: #9ca3af; }
	.link.small { font-size: 0.75rem; }
	.refresh { padding: 0.25rem 0.5rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.375rem; cursor: pointer; }
	.tabs { display: flex; gap: 0; border-bottom: 2px solid #e5e7eb; margin-bottom: 1rem; }
	.tabs button { padding: 0.5rem 1rem; background: none; border: none; border-bottom: 2px solid transparent; margin-bottom: -2px; cursor: pointer; font-size: 0.875rem; color: #6b7280; }
	.tabs button.active { border-bottom-color: #4f46e5; color: #4f46e5; font-weight: 500; }
	.empty { color: #6b7280; text-align: center; padding: 2rem; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; }
	.list { display: flex; flex-direction: column; gap: 0.5rem; }
	.item { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.75rem 1rem; }
	.item.unread { border-left: 3px solid #4f46e5; }
	.item-header { display: flex; justify-content: space-between; align-items: center; }
	.title { font-weight: 500; font-size: 0.875rem; }
	.time { color: #9ca3af; font-size: 0.75rem; }
	.body { margin: 0.35rem 0 0; color: #4b5563; font-size: 0.8rem; line-height: 1.4; }
</style>
