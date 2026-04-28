<script lang="ts">
	let { backend, extensionId = 'voting', version = '', principal = '', isAuthenticated = true }: any = $props();

	let proposals: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');
	let tab = $state<'list' | 'create'>('list');

	let formTitle = $state('');
	let formDescription = $state('');
	let formCode = $state('');
	let submitting = $state(false);
	let submitMsg = $state('');

	let selectedProposal: any = $state(null);
	let detailLoading = $state(false);

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

	async function loadProposals() {
		loading = true;
		error = '';
		try {
			const res = await callExt('get_proposals', '{}');
			proposals = res?.data ?? (Array.isArray(res) ? res : []);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function viewProposal(id: string) {
		detailLoading = true;
		error = '';
		try {
			const res = await callExt('get_proposal', JSON.stringify({ proposal_id: id }));
			selectedProposal = res?.data ?? res;
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			detailLoading = false;
		}
	}

	async function castVote(proposalId: string, vote: string) {
		try {
			await callExtAsync('cast_vote', JSON.stringify({ proposal_id: proposalId, vote }));
			if (selectedProposal) await viewProposal(proposalId);
			else await loadProposals();
		} catch (e: any) {
			error = e?.message || String(e);
		}
	}

	async function submitProposal() {
		if (!formTitle.trim()) return;
		submitting = true;
		submitMsg = '';
		error = '';
		try {
			await callExtAsync('submit_proposal', JSON.stringify({
				title: formTitle,
				description: formDescription,
				code: formCode || undefined,
			}));
			submitMsg = 'Proposal submitted successfully!';
			formTitle = '';
			formDescription = '';
			formCode = '';
			await loadProposals();
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			submitting = false;
		}
	}

	function goBack() { selectedProposal = null; }

	$effect(() => { void loadProposals(); });

	function statusColor(s: string): string {
		if (!s) return '#6b7280';
		const sl = s.toLowerCase();
		if (sl.includes('active') || sl.includes('open')) return '#059669';
		if (sl.includes('passed') || sl.includes('approved') || sl.includes('executed')) return '#16a34a';
		if (sl.includes('rejected') || sl.includes('failed')) return '#dc2626';
		return '#6b7280';
	}
</script>

<div class="rt-vote">
	<div class="header">
		<h2>Voting</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={loadProposals} disabled={loading}>↻</button>
	</div>

	{#if error}
		<div class="error">{error}</div>
	{/if}
	{#if submitMsg}
		<div class="success">{submitMsg}</div>
	{/if}

	{#if selectedProposal}
		<button class="back" onclick={goBack}>← Back to proposals</button>
		<div class="card">
			<h3>{selectedProposal.title || selectedProposal.id}</h3>
			{#if selectedProposal.status}
				<span class="status" style="color:{statusColor(selectedProposal.status)}">{selectedProposal.status}</span>
			{/if}
			{#if selectedProposal.description}
				<p class="desc">{selectedProposal.description}</p>
			{/if}
			{#if selectedProposal.votes_for !== undefined || selectedProposal.votes_against !== undefined}
				<div class="vote-stats">
					<span class="for">For: {selectedProposal.votes_for ?? 0}</span>
					<span class="against">Against: {selectedProposal.votes_against ?? 0}</span>
					{#if selectedProposal.votes_abstain !== undefined}
						<span>Abstain: {selectedProposal.votes_abstain}</span>
					{/if}
				</div>
			{/if}
			<div class="vote-actions">
				<button class="btn-for" onclick={() => castVote(selectedProposal.id, 'for')}>Vote For</button>
				<button class="btn-against" onclick={() => castVote(selectedProposal.id, 'against')}>Vote Against</button>
				<button class="btn-abstain" onclick={() => castVote(selectedProposal.id, 'abstain')}>Abstain</button>
			</div>
			{#if selectedProposal.code}
				<pre class="code">{selectedProposal.code}</pre>
			{/if}
		</div>

	{:else}
		<div class="tabs">
			<button class:active={tab === 'list'} onclick={() => tab = 'list'}>Proposals ({proposals.length})</button>
			<button class:active={tab === 'create'} onclick={() => tab = 'create'}>New Proposal</button>
		</div>

		{#if tab === 'list'}
			{#if loading}
				<div class="empty">Loading proposals…</div>
			{:else if proposals.length === 0}
				<div class="empty">No proposals yet</div>
			{:else}
				<div class="list">
					{#each proposals as p (p.id || p.title)}
						<button class="card clickable" onclick={() => viewProposal(p.id)}>
							<div class="card-top">
								<span class="card-title">{p.title || p.id}</span>
								{#if p.status}
									<span class="status" style="color:{statusColor(p.status)}">{p.status}</span>
								{/if}
							</div>
							{#if p.description}
								<p class="desc">{p.description.slice(0, 120)}{p.description.length > 120 ? '…' : ''}</p>
							{/if}
						</button>
					{/each}
				</div>
			{/if}

		{:else}
			<div class="card">
				<label>Title <input type="text" bind:value={formTitle} placeholder="Proposal title" /></label>
				<label>Description <textarea bind:value={formDescription} placeholder="Describe the proposal…" rows="3"></textarea></label>
				<label>Code (optional) <textarea bind:value={formCode} placeholder="Codex code…" rows="4" class="mono"></textarea></label>
				<button class="primary" onclick={submitProposal} disabled={submitting || !formTitle.trim()}>
					{submitting ? 'Submitting…' : 'Submit Proposal'}
				</button>
			</div>
		{/if}
	{/if}
</div>

<style>
	.rt-vote { font-family: system-ui, -apple-system, sans-serif; max-width: 720px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.25rem 0.5rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.375rem; cursor: pointer; }
	.tabs { display: flex; border-bottom: 2px solid #e5e7eb; margin-bottom: 1rem; }
	.tabs button { padding: 0.5rem 1rem; background: none; border: none; border-bottom: 2px solid transparent; margin-bottom: -2px; cursor: pointer; font-size: 0.875rem; color: #6b7280; }
	.tabs button.active { border-bottom-color: #4f46e5; color: #4f46e5; font-weight: 500; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; font-size: 0.85rem; }
	.success { background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; font-size: 0.85rem; }
	.empty { color: #6b7280; text-align: center; padding: 2rem; }
	.list { display: flex; flex-direction: column; gap: 0.5rem; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem 1.25rem; width: 100%; text-align: left; font-family: inherit; }
	.clickable { cursor: pointer; }
	.clickable:hover { border-color: #a5b4fc; }
	.card-top { display: flex; justify-content: space-between; align-items: center; }
	.card-title { font-weight: 500; font-size: 0.9rem; }
	.status { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; }
	.desc { margin: 0.35rem 0 0; color: #4b5563; font-size: 0.8rem; line-height: 1.4; }
	.vote-stats { display: flex; gap: 1rem; margin: 0.75rem 0; font-size: 0.85rem; }
	.for { color: #16a34a; font-weight: 500; }
	.against { color: #dc2626; font-weight: 500; }
	.vote-actions { display: flex; gap: 0.5rem; margin: 0.75rem 0; }
	.btn-for { padding: 0.4rem 0.8rem; background: #16a34a; color: #fff; border: none; border-radius: 0.375rem; cursor: pointer; font-size: 0.8rem; }
	.btn-against { padding: 0.4rem 0.8rem; background: #dc2626; color: #fff; border: none; border-radius: 0.375rem; cursor: pointer; font-size: 0.8rem; }
	.btn-abstain { padding: 0.4rem 0.8rem; background: #6b7280; color: #fff; border: none; border-radius: 0.375rem; cursor: pointer; font-size: 0.8rem; }
	.back { background: none; border: none; color: #4f46e5; cursor: pointer; font-size: 0.85rem; padding: 0; margin-bottom: 1rem; }
	.back:hover { text-decoration: underline; }
	label { display: block; font-size: 0.8rem; font-weight: 500; color: #374151; margin-bottom: 0.75rem; }
	input, textarea { display: block; width: 100%; margin-top: 0.25rem; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.85rem; box-sizing: border-box; font-family: inherit; }
	textarea.mono { font-family: ui-monospace, monospace; font-size: 0.8rem; }
	.primary { padding: 0.5rem 1.25rem; background: #4f46e5; color: #fff; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 0.85rem; }
	.primary:hover:not(:disabled) { background: #4338ca; }
	.primary:disabled { opacity: 0.5; cursor: not-allowed; }
	.code { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.75rem; font-size: 0.75rem; font-family: ui-monospace, monospace; overflow-x: auto; white-space: pre-wrap; max-height: 300px; overflow-y: auto; margin-top: 0.75rem; }
</style>
