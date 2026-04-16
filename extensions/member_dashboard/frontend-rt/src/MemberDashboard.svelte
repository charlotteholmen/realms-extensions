<script lang="ts">
	import { onMount } from 'svelte';

	let {
		backend,
		extensionId,
		version,
		principal = '',
		isAuthenticated = false,
	} = $props<{
		backend: any;
		extensionId: string;
		version: string;
		principal?: string;
		isAuthenticated?: boolean;
	}>();

	type AnyObj = Record<string, any>;

	let summary = $state<AnyObj | null>(null);
	let citizenship = $state<AnyObj | null>(null);
	let invoices = $state<AnyObj[]>([]);
	let invoicesSummary = $state<AnyObj | null>(null);
	let paymentAccounts = $state<AnyObj[]>([]);
	let notifications = $state<AnyObj[]>([]);

	let loading = $state(true);
	let error = $state('');
	let notificationsAvailable = $state(true);

	// Keep the user id reactive to the prop: if the host remounts with a new
	// principal (e.g. after login), every backend call uses the fresh value.
	const getUserId = () => principal || 'demo-user';

	function getGreeting(): string {
		const h = new Date().getHours();
		if (h < 12) return 'Good morning';
		if (h < 18) return 'Good afternoon';
		return 'Good evening';
	}

	/**
	 * Unwrap the two-layer response shape used by realm_backend's
	 * extension_sync_call:
	 *   outer: { success: bool, response: string }
	 *   inner (in response): { success: bool, data: any } | { success: false, error }
	 */
	async function callExt(extName: string, fn: string, args: AnyObj): Promise<AnyObj> {
		const r = await backend.extension_sync_call({
			extension_name: extName,
			function_name: fn,
			args: JSON.stringify(args),
		});
		if (!r?.success) {
			return { success: false, error: r?.response ?? 'call failed' };
		}
		try {
			return JSON.parse(r.response);
		} catch (e: any) {
			return { success: false, error: `invalid JSON from ${extName}.${fn}: ${e.message}` };
		}
	}

	async function loadDashboardSummary() {
		const res = await callExt('member_dashboard', 'get_dashboard_summary', { user_id: getUserId() });
		if (res.success) {
			summary = res.data;
		} else {
			error = res.error ?? 'get_dashboard_summary failed';
		}
	}

	async function loadCitizenship() {
		const res = await callExt('member_dashboard', 'get_citizenship_status', { user_id: getUserId() });
		if (res.success) citizenship = res.data;
	}

	async function loadInvoices() {
		const res = await callExt('member_dashboard', 'get_tax_information', { user_id: getUserId() });
		if (res.success) {
			invoices = res.data?.invoices ?? [];
			invoicesSummary = res.data?.summary ?? null;
		}
	}

	async function loadPaymentAccounts() {
		const res = await callExt('member_dashboard', 'list_payment_accounts', { user_id: getUserId() });
		if (res.success) paymentAccounts = Array.isArray(res.data) ? res.data : [];
	}

	async function loadNotifications() {
		try {
			const res = await callExt('notifications', 'get_notifications', { user_id: getUserId() });
			if (res?.notifications) {
				notifications = res.notifications;
			} else if (res?.success && res?.data?.notifications) {
				notifications = res.data.notifications;
			} else if (!res?.success && /not installed/i.test(res?.error ?? '')) {
				notificationsAvailable = false;
			}
		} catch {
			notificationsAvailable = false;
		}
	}

	function formatAmount(v: any, currency?: string): string {
		if (v === null || v === undefined) return '—';
		const n = typeof v === 'number' ? v : Number(v);
		if (Number.isNaN(n)) return String(v);
		return `${n.toFixed(2)} ${currency ?? ''}`.trim();
	}

	function formatDate(ts: any): string {
		if (!ts) return '—';
		const n = typeof ts === 'number' ? ts : Number(ts);
		if (Number.isNaN(n)) return String(ts);
		try {
			return new Date(n).toISOString().slice(0, 10);
		} catch {
			return String(ts);
		}
	}

	function shortPrincipal(p: string): string {
		if (!p) return '';
		if (p.length <= 14) return p;
		return p.slice(0, 6) + '…' + p.slice(-4);
	}

	onMount(async () => {
		try {
			await Promise.all([
				loadDashboardSummary(),
				loadCitizenship(),
				loadInvoices(),
				loadPaymentAccounts(),
				loadNotifications(),
			]);
		} finally {
			loading = false;
		}
	});
</script>

<div class="md-root">
	<header class="hero">
		<div class="hero-left">
			<span class="badge">v{version}</span>
			<h1>
				{getGreeting()}, <span class="muted-strong">{summary?.user_name ? shortPrincipal(summary.user_name) : 'member'}</span>
			</h1>
			<p class="sub">
				{extensionId} <small>(runtime-loaded)</small> — this dashboard was fetched from
				<code>file_registry</code> and mounted at runtime.
			</p>
		</div>
		{#if citizenship}
			<div class="hero-right">
				<div class="status-pill status-{citizenship.status}">
					<span class="dot"></span>
					{citizenship.status_label}
				</div>
				<div class="status-meta">
					{citizenship.paid_invoices}/{citizenship.total_invoices} invoices paid
				</div>
			</div>
		{/if}
	</header>

	{#if !isAuthenticated && !principal}
		<div class="info-card warn">
			You are not logged in — showing anonymous view. Log in to see your own data.
		</div>
	{/if}

	{#if loading}
		<div class="info-card">Loading dashboard…</div>
	{:else if error}
		<div class="info-card error">Error: {error}</div>
	{/if}

	{#if summary}
		<section class="stats">
			<div class="stat">
				<div class="stat-label">Services</div>
				<div class="stat-value">{summary.services_count ?? 0}</div>
				<div class="stat-foot">{summary.services_approaching ?? 0} approaching</div>
			</div>
			<div class="stat">
				<div class="stat-label">Invoices</div>
				<div class="stat-value">{summary.tax_records ?? 0}</div>
				<div class="stat-foot">{summary.tax_overdue ?? 0} overdue</div>
			</div>
			<div class="stat">
				<div class="stat-label">Personal data</div>
				<div class="stat-value">{summary.personal_data_items ?? 0}</div>
				<div class="stat-foot">{summary.personal_data_updated ?? 0} updated</div>
			</div>
		</section>
	{/if}

	{#if invoicesSummary}
		<section class="card">
			<header class="card-head">
				<h2>Invoices</h2>
				<div class="totals">
					<span class="chip chip-ok">paid {formatAmount(invoicesSummary.total_paid)}</span>
					<span class="chip chip-warn">pending {formatAmount(invoicesSummary.total_pending)}</span>
					<span class="chip chip-bad">overdue {formatAmount(invoicesSummary.total_overdue)}</span>
				</div>
			</header>
			{#if invoices.length === 0}
				<p class="empty">No invoices on file.</p>
			{:else}
				<table class="grid">
					<thead>
						<tr>
							<th>ID</th>
							<th>Type</th>
							<th>Amount</th>
							<th>Due</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{#each invoices as inv}
							<tr>
								<td class="mono">{inv.id}</td>
								<td>{inv.type ?? '—'}</td>
								<td>{formatAmount(inv.amount, inv.currency)}</td>
								<td>{formatDate(inv.due_on)}</td>
								<td>
									<span class="chip chip-{inv.status?.toLowerCase?.() ?? 'info'}">
										{inv.status ?? '—'}
									</span>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}
		</section>
	{/if}

	<section class="card">
		<header class="card-head">
			<h2>Notifications</h2>
			{#if !notificationsAvailable}
				<span class="chip chip-info">notifications ext not installed</span>
			{:else if notifications.length > 0}
				<span class="chip chip-info">{notifications.length}</span>
			{/if}
		</header>
		{#if !notificationsAvailable}
			<p class="empty">
				The <code>notifications</code> extension is not installed on this realm. Once it
				is, messages for this user will appear here.
			</p>
		{:else if notifications.length === 0}
			<p class="empty">No notifications.</p>
		{:else}
			<ul class="notifs">
				{#each notifications as n}
					<li class={n.read ? 'read' : 'unread'}>
						<div class="n-title">{n.title ?? '(no subject)'}</div>
						{#if n.message}
							<div class="n-body">{n.message}</div>
						{/if}
						<div class="n-meta">{n.sender ?? ''} · {formatDate(n.timestamp_ms)}</div>
					</li>
				{/each}
			</ul>
		{/if}
	</section>

	<section class="card">
		<header class="card-head">
			<h2>Payment accounts</h2>
			<span class="chip chip-info">{paymentAccounts.length}</span>
		</header>
		{#if paymentAccounts.length === 0}
			<p class="empty">No payment accounts configured.</p>
		{:else}
			<table class="grid">
				<thead>
					<tr>
						<th>Label</th>
						<th>Network</th>
						<th>Address</th>
					</tr>
				</thead>
				<tbody>
					{#each paymentAccounts as pa}
						<tr>
							<td>{pa.label ?? pa.name ?? '—'}</td>
							<td>{pa.network ?? pa.chain ?? '—'}</td>
							<td class="mono">{shortPrincipal(pa.address ?? pa.account ?? '')}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</section>

	<footer class="rt-foot">
		Bundle: <code>ext/{extensionId}/{version}/frontend/dist/index.js</code> — extension_sync_call
	</footer>
</div>

<style>
	.md-root {
		font-family:
			system-ui,
			-apple-system,
			Segoe UI,
			Roboto,
			sans-serif;
		color: #0f172a;
		max-width: 960px;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
	.hero {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 16px;
		border: 2px solid #10b981;
		border-radius: 12px;
		padding: 18px 20px;
		background: linear-gradient(180deg, #ecfdf5 0%, #d1fae5 100%);
		color: #064e3b;
	}
	.hero h1 {
		margin: 4px 0 2px;
		font-size: 22px;
	}
	.sub {
		margin: 4px 0 0;
		font-size: 13px;
		opacity: 0.85;
	}
	.sub small {
		opacity: 0.7;
	}
	.muted-strong {
		color: #047857;
	}
	.badge {
		display: inline-block;
		background: #047857;
		color: #fff;
		padding: 2px 8px;
		border-radius: 10px;
		font-size: 12px;
	}
	.hero-right {
		text-align: right;
		display: flex;
		flex-direction: column;
		gap: 6px;
		align-items: flex-end;
	}
	.status-pill {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 4px 10px;
		border-radius: 999px;
		font-size: 13px;
		font-weight: 600;
	}
	.status-pill .dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: currentColor;
	}
	.status-active {
		background: #d1fae5;
		color: #065f46;
	}
	.status-pending {
		background: #fef3c7;
		color: #92400e;
	}
	.status-meta {
		font-size: 12px;
		opacity: 0.75;
	}
	.info-card {
		border: 1px solid #e2e8f0;
		border-radius: 10px;
		padding: 12px 14px;
		background: #f8fafc;
		font-size: 14px;
	}
	.info-card.warn {
		border-color: #fcd34d;
		background: #fffbeb;
		color: #78350f;
	}
	.info-card.error {
		border-color: #fca5a5;
		background: #fef2f2;
		color: #7f1d1d;
	}
	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 12px;
	}
	.stat {
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 10px;
		padding: 12px 14px;
	}
	.stat-label {
		font-size: 12px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #64748b;
	}
	.stat-value {
		font-size: 28px;
		font-weight: 700;
		color: #0f172a;
	}
	.stat-foot {
		font-size: 12px;
		color: #64748b;
	}
	.card {
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		padding: 14px 16px;
	}
	.card-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		margin-bottom: 10px;
		flex-wrap: wrap;
	}
	.card-head h2 {
		margin: 0;
		font-size: 16px;
	}
	.empty {
		color: #64748b;
		font-size: 14px;
		margin: 6px 0 2px;
	}
	.totals {
		display: flex;
		gap: 6px;
		flex-wrap: wrap;
	}
	.chip {
		display: inline-block;
		padding: 2px 8px;
		border-radius: 10px;
		font-size: 12px;
		background: #e2e8f0;
		color: #334155;
	}
	.chip-ok,
	.chip-paid {
		background: #d1fae5;
		color: #065f46;
	}
	.chip-warn,
	.chip-pending {
		background: #fef3c7;
		color: #92400e;
	}
	.chip-bad,
	.chip-overdue {
		background: #fee2e2;
		color: #991b1b;
	}
	.chip-info {
		background: #dbeafe;
		color: #1e3a8a;
	}
	table.grid {
		width: 100%;
		border-collapse: collapse;
		font-size: 13px;
	}
	table.grid th,
	table.grid td {
		text-align: left;
		padding: 6px 8px;
		border-bottom: 1px solid #f1f5f9;
	}
	table.grid th {
		font-size: 11px;
		color: #64748b;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}
	.mono {
		font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
	}
	code {
		background: rgba(0, 0, 0, 0.06);
		padding: 1px 5px;
		border-radius: 4px;
		font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
		font-size: 0.92em;
	}
	.notifs {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.notifs li {
		border: 1px solid #e2e8f0;
		border-left: 4px solid #e2e8f0;
		border-radius: 8px;
		padding: 8px 12px;
		background: #f8fafc;
	}
	.notifs li.unread {
		border-left-color: #3b82f6;
		background: #eff6ff;
	}
	.n-title {
		font-weight: 600;
		font-size: 14px;
	}
	.n-body {
		font-size: 13px;
		color: #334155;
		margin-top: 2px;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.n-meta {
		font-size: 11px;
		color: #64748b;
		margin-top: 4px;
	}
	.rt-foot {
		font-size: 11px;
		color: #94a3b8;
		text-align: center;
		padding-top: 4px;
	}
</style>
