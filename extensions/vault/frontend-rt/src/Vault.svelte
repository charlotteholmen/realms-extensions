<script lang="ts">
	let { backend, extensionId = 'vault', version = '', principal = '', isAuthenticated = true }: any = $props();

	let tab = $state<'balances' | 'transfers' | 'send'>('balances');
	let balances: any[] = $state([]);
	let transfers: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');

	let sendToken = $state('');
	let sendTo = $state('');
	let sendAmount = $state('');
	let sending = $state(false);
	let sendMsg = $state('');

	async function callExt(fn: string, args: string = '{}') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function callExtAsync(fn: string, args: string = '{}') {
		const raw = await backend.extension_async_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function loadData() {
		loading = true;
		error = '';
		try {
			const [bal, txn] = await Promise.all([
				callExt('get_vault_balance', '{}').catch(() => null),
				backend.get_objects_paginated('WalletTransfer', 0, 50, 'desc')
					.then((r: string) => { const p = JSON.parse(r); return p?.data ?? []; })
					.catch(() => []),
			]);
			balances = bal?.data?.balances ?? bal?.balances ?? (Array.isArray(bal?.data) ? bal.data : []);
			if (!Array.isArray(balances)) {
				balances = typeof bal?.data === 'object' && bal.data
					? Object.entries(bal.data).map(([k, v]) => ({ token: k, ...(typeof v === 'object' ? v as any : { balance: v }) }))
					: [];
			}
			transfers = Array.isArray(txn) ? txn : [];
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function doTransfer() {
		if (!sendTo.trim() || !sendAmount.trim()) return;
		sending = true;
		sendMsg = '';
		error = '';
		try {
			await callExtAsync('transfer', JSON.stringify({
				token: sendToken || undefined,
				to: sendTo,
				amount: sendAmount,
			}));
			sendMsg = 'Transfer submitted!';
			sendTo = '';
			sendAmount = '';
			await loadData();
		} catch (e: any) { error = e?.message || String(e); }
		finally { sending = false; }
	}

	async function refreshBalance() {
		try {
			await callExtAsync('refresh', '{}');
			await loadData();
		} catch (e: any) { error = e?.message || String(e); }
	}

	$effect(() => { void loadData(); });
</script>

<div class="rt-vault">
	<div class="header">
		<h2>Vault</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={refreshBalance} disabled={loading}>↻ Refresh</button>
	</div>

	{#if error}<div class="error">{error}</div>{/if}
	{#if sendMsg}<div class="success">{sendMsg}</div>{/if}

	<div class="tabs">
		<button class:active={tab === 'balances'} onclick={() => tab = 'balances'}>Balances</button>
		<button class:active={tab === 'transfers'} onclick={() => tab = 'transfers'}>Transfers</button>
		<button class:active={tab === 'send'} onclick={() => tab = 'send'}>Send</button>
	</div>

	{#if loading}
		<div class="empty">Loading vault data…</div>
	{:else if tab === 'balances'}
		{#if balances.length === 0}
			<div class="empty">No balances found</div>
		{:else}
			<div class="table-wrap">
				<table>
					<thead><tr><th>Token</th><th>Balance</th><th>Available</th></tr></thead>
					<tbody>
						{#each balances as b}
							<tr>
								<td class="fw">{b.token || b.symbol || b.name || '—'}</td>
								<td>{b.balance ?? b.total ?? '—'}</td>
								<td>{b.available ?? b.balance ?? '—'}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}

	{:else if tab === 'transfers'}
		{#if transfers.length === 0}
			<div class="empty">No transfers found</div>
		{:else}
			<div class="table-wrap">
				<table>
					<thead><tr><th>From</th><th>To</th><th>Amount</th><th>Status</th></tr></thead>
					<tbody>
						{#each transfers as t}
							<tr>
								<td class="mono">{(t.from || t.sender || '').slice(0, 12)}…</td>
								<td class="mono">{(t.to || t.recipient || '').slice(0, 12)}…</td>
								<td>{t.amount ?? '—'}</td>
								<td>{t.status ?? '—'}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}

	{:else if tab === 'send'}
		<div class="card">
			<label>Token (optional) <input type="text" bind:value={sendToken} placeholder="Token symbol" /></label>
			<label>Recipient <input type="text" bind:value={sendTo} placeholder="Principal ID" /></label>
			<label>Amount <input type="text" bind:value={sendAmount} placeholder="Amount" /></label>
			<button class="primary" onclick={doTransfer} disabled={sending || !sendTo.trim() || !sendAmount.trim()}>
				{sending ? 'Sending…' : 'Send'}
			</button>
		</div>
	{/if}
</div>

<style>
	.rt-vault { font-family: system-ui, -apple-system, sans-serif; max-width: 760px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.35rem 0.75rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.5rem; cursor: pointer; font-size: 0.8rem; }
	.tabs { display: flex; border-bottom: 2px solid #e5e7eb; margin-bottom: 1rem; }
	.tabs button { padding: 0.5rem 1rem; background: none; border: none; border-bottom: 2px solid transparent; margin-bottom: -2px; cursor: pointer; font-size: 0.875rem; color: #6b7280; }
	.tabs button.active { border-bottom-color: #4f46e5; color: #4f46e5; font-weight: 500; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.success { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; }
	.empty { color: #6b7280; text-align: center; padding: 2rem; }
	.table-wrap { overflow-x: auto; }
	table { width: 100%; border-collapse: collapse; font-size: 0.8rem; }
	th { text-align: left; padding: 0.5rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 500; }
	td { padding: 0.5rem; border-bottom: 1px solid #f3f4f6; }
	.fw { font-weight: 500; }
	.mono { font-family: ui-monospace, monospace; font-size: 0.75rem; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.25rem; }
	label { display: block; font-size: 0.8rem; font-weight: 500; color: #374151; margin-bottom: 0.75rem; }
	input { display: block; width: 100%; margin-top: 0.25rem; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.85rem; box-sizing: border-box; }
	.primary { padding: 0.5rem 1.25rem; background: #4f46e5; color: #fff; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 0.85rem; }
	.primary:hover:not(:disabled) { background: #4338ca; }
	.primary:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
