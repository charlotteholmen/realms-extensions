<script lang="ts">
	import { onMount } from 'svelte';

	let { ctx }: { ctx: any } = $props();

	type View = 'list' | 'form' | 'detail';

	let proposals: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');
	let view: View = $state('list');

	let formTitle = $state('');
	let formDescription = $state('');
	let codexEntries: { url: string; name: string; checksum: string; calculating: boolean }[] = $state([
		{ url: '', name: '', checksum: '', calculating: false },
	]);
	let submitting = $state(false);
	let submitMsg = $state('');

	let selectedProposal: any = $state(null);
	let detailLoading = $state(false);
	let codeContent = $state('');
	let codeChecksum = $state('');
	let codeLoading = $state(false);
	let codeError = $state('');
	let executing = $state(false);
	let actionMsg = $state('');
	let actionError = $state('');

	let votingInProgress = $state('');

	let currentPage = $state(1);
	const pageSize = 10;

	let sortedProposals = $derived(
		[...proposals].sort((a, b) => (b.created_at || 0) - (a.created_at || 0)),
	);
	let totalPages = $derived(Math.max(1, Math.ceil(sortedProposals.length / pageSize)));
	let pagedProposals = $derived(
		sortedProposals.slice((currentPage - 1) * pageSize, currentPage * pageSize),
	);

	$effect(() => {
		if (proposals.length >= 0) currentPage = 1;
	});

	async function callSync(fn: string, args: Record<string, any> = {}) {
		const raw = await ctx.callSync(fn, args);
		return typeof raw === 'string' ? JSON.parse(raw) : raw;
	}

	async function callAsync(fn: string, args: Record<string, any> = {}) {
		const raw = await ctx.callAsync(fn, args);
		return typeof raw === 'string' ? JSON.parse(raw) : raw;
	}

	async function loadProposals() {
		loading = true;
		error = '';
		try {
			const res = await callSync('get_proposals');
			if (res?.success) {
				proposals = res.data?.proposals ?? res.data ?? [];
			} else if (res?.data) {
				proposals = Array.isArray(res.data) ? res.data : res.data.proposals ?? [];
			} else if (Array.isArray(res)) {
				proposals = res;
			} else {
				error = res?.error || 'Failed to load proposals';
			}
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function viewProposal(proposal: any) {
		selectedProposal = proposal;
		view = 'detail';
		codeContent = '';
		codeChecksum = '';
		codeError = '';
		actionMsg = '';
		actionError = '';
		await fetchCode(proposal);
	}

	async function fetchCode(proposal: any) {
		codeLoading = true;
		codeError = '';
		try {
			const res = await callAsync('fetch_proposal_code', { proposal_id: proposal.id });
			if (res?.success) {
				codeContent = res.data?.code ?? '';
				codeChecksum = res.data?.checksum ?? '';
			} else {
				codeError = res?.error || 'Failed to fetch code';
			}
		} catch (e: any) {
			codeError = e?.message || String(e);
		} finally {
			codeLoading = false;
		}
	}

	async function castVote(proposalId: string, vote: string) {
		votingInProgress = proposalId + vote;
		error = '';
		try {
			const voter = ctx.principal || 'anonymous';
			const res = await callSync('cast_vote', { proposal_id: proposalId, vote, voter });
			if (res?.success) {
				if (selectedProposal?.id === proposalId) {
					const detail = await callSync('get_proposal', { proposal_id: proposalId });
					if (detail?.success) selectedProposal = detail.data ?? detail;
					else selectedProposal = detail?.data ?? selectedProposal;
				}
				await loadProposals();
			} else {
				error = res?.error || 'Failed to cast vote';
			}
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			votingInProgress = '';
		}
	}

	async function handleDemoApproveAndExecute() {
		if (!selectedProposal) return;
		executing = true;
		actionError = '';
		actionMsg = '';
		try {
			const res = await callAsync('demo_approve_and_execute', { proposal_id: selectedProposal.id });
			if (res?.success) {
				actionMsg = res.data?.message || 'Proposal approved and executed';
				if (res.data?.proposal) selectedProposal = { ...selectedProposal, ...res.data.proposal };
				await loadProposals();
			} else {
				actionError = res?.error || 'Failed to approve and execute';
			}
		} catch (e: any) {
			actionError = e?.message || String(e);
		} finally {
			executing = false;
		}
	}

	function extractCodexName(url: string): string {
		try {
			const filename = new URL(url).pathname.split('/').pop() || '';
			return filename.endsWith('.py') ? filename.slice(0, -3) : filename;
		} catch {
			return '';
		}
	}

	function isValidUrl(s: string): boolean {
		try {
			new URL(s);
			return true;
		} catch {
			return false;
		}
	}

	function onUrlChange(i: number) {
		const entry = codexEntries[i];
		if (entry.url && isValidUrl(entry.url) && !entry.name) {
			codexEntries[i].name = extractCodexName(entry.url);
		}
	}

	function addCodexEntry() {
		codexEntries = [...codexEntries, { url: '', name: '', checksum: '', calculating: false }];
	}

	function removeCodexEntry(i: number) {
		if (codexEntries.length <= 1) return;
		codexEntries = codexEntries.filter((_, idx) => idx !== i);
	}

	async function calculateChecksum(i: number) {
		const entry = codexEntries[i];
		if (!entry.url.trim() || !isValidUrl(entry.url)) {
			error = 'Please enter a valid URL';
			return;
		}
		codexEntries[i].calculating = true;
		error = '';
		try {
			const res = await callAsync('fetch_proposal_code', { code_url: entry.url.trim() });
			if (res?.success) {
				codexEntries[i].checksum = res.data?.checksum ?? '';
			} else {
				error = res?.error || 'Failed to fetch checksum';
			}
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			codexEntries[i].calculating = false;
		}
	}

	function hasValidCodex(): boolean {
		return codexEntries.some((e) => e.url.trim() && isValidUrl(e.url.trim()));
	}

	async function submitProposal() {
		if (!formTitle.trim() || !formDescription.trim()) {
			error = 'Title and description are required';
			return;
		}
		const validEntries = codexEntries.filter((e) => e.url.trim() && e.name.trim());
		if (validEntries.length === 0) {
			error = 'At least one codex entry with URL and name is required';
			return;
		}
		for (const entry of validEntries) {
			if (!isValidUrl(entry.url)) {
				error = 'One or more codex URLs are invalid';
				return;
			}
		}
		submitting = true;
		error = '';
		submitMsg = '';
		try {
			const args: Record<string, any> = {
				title: formTitle.trim(),
				description: formDescription.trim(),
				proposer: ctx.principal || 'anonymous',
			};
			if (validEntries.length === 1) {
				args.code_url = validEntries[0].url.trim();
				args.code_checksum = validEntries[0].checksum.trim();
				args.codex_name = validEntries[0].name.trim();
			} else {
				args.codices = validEntries.map((e) => ({
					url: e.url.trim(),
					name: e.name.trim(),
					checksum: e.checksum.trim(),
				}));
			}
			const res = await callSync('submit_proposal', args);
			if (res?.success) {
				submitMsg = 'Proposal submitted successfully!';
				formTitle = '';
				formDescription = '';
				codexEntries = [{ url: '', name: '', checksum: '', calculating: false }];
				await loadProposals();
				setTimeout(() => {
					submitMsg = '';
					view = 'list';
				}, 1500);
			} else {
				error = res?.error || 'Failed to submit proposal';
			}
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			submitting = false;
		}
	}

	function cancelForm() {
		formTitle = '';
		formDescription = '';
		codexEntries = [{ url: '', name: '', checksum: '', calculating: false }];
		error = '';
		submitMsg = '';
		view = 'list';
	}

	function statusColor(s: string): string {
		if (!s) return 'bg-gray-100 text-gray-700';
		const sl = s.toLowerCase();
		if (sl === 'voting') return 'bg-emerald-100 text-emerald-700';
		if (sl === 'pending_review' || sl === 'pending_vote') return 'bg-amber-100 text-amber-700';
		if (sl === 'accepted' || sl === 'executed' || sl === 'passed') return 'bg-green-100 text-green-700';
		if (sl === 'executing') return 'bg-purple-100 text-purple-700';
		if (sl === 'rejected' || sl === 'failed') return 'bg-red-100 text-red-700';
		return 'bg-gray-100 text-gray-700';
	}

	function statusLabel(s: string): string {
		if (!s) return 'Unknown';
		return s.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
	}

	function formatDate(value: any): string {
		if (!value && value !== 0) return 'N/A';
		const date = typeof value === 'number' ? new Date(value * 1000) : new Date(value);
		if (isNaN(date.getTime())) return 'N/A';
		return date.toLocaleDateString();
	}

	function formatDateTime(value: any): string {
		if (!value && value !== 0) return 'N/A';
		const date = typeof value === 'number' ? new Date(value * 1000) : new Date(value);
		if (isNaN(date.getTime())) return 'N/A';
		return date.toLocaleString();
	}

	function truncatePrincipal(id: string): string {
		if (!id || id.length <= 16) return id || 'unknown';
		return id.slice(0, 8) + '...' + id.slice(-6);
	}

	function parseCodices(proposal: any): any[] {
		try {
			const meta = typeof proposal.metadata === 'string' ? JSON.parse(proposal.metadata) : (proposal.metadata || {});
			return meta.codices || [];
		} catch {
			return [];
		}
	}

	onMount(() => {
		loadProposals();
	});
</script>

<div class="w-full px-6 pt-8 max-w-none">
	<!-- Header -->
	<div class="mb-6">
		<h1 class="text-3xl font-bold text-gray-900 mb-1">Voting</h1>
		<p class="text-gray-500 text-sm">Create proposals, review code changes, and vote on governance decisions.</p>
	</div>

	<!-- Error / Success banners -->
	{#if error}
		<div class="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 flex items-start gap-2">
			<svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
			<span>{error}</span>
			<button onclick={() => error = ''} class="ml-auto text-red-400 hover:text-red-600">&times;</button>
		</div>
	{/if}
	{#if submitMsg}
		<div class="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-center gap-2">
			<svg class="w-5 h-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
			<span>{submitMsg}</span>
		</div>
	{/if}

	<!-- Proposal Detail View -->
	{#if view === 'detail' && selectedProposal}
		<button onclick={() => { view = 'list'; selectedProposal = null; }} class="text-sm text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center gap-1">
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
			Back to proposals
		</button>

		<div class="space-y-5">
			<!-- Title & Meta -->
			<div>
				<div class="flex items-center gap-3 mb-2 flex-wrap">
					<h2 class="text-2xl font-bold text-gray-900">{selectedProposal.title}</h2>
					<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold {statusColor(selectedProposal.status)}">
						{statusLabel(selectedProposal.status)}
					</span>
				</div>
				<div class="flex flex-wrap gap-4 text-sm text-gray-500">
					<span>Proposer: <code class="text-xs bg-gray-100 px-1.5 py-0.5 rounded">{truncatePrincipal(selectedProposal.proposer)}</code></span>
					<span>Created: {formatDateTime(selectedProposal.created_at)}</span>
					{#if selectedProposal.voting_deadline}
						<span>Deadline: {formatDateTime(selectedProposal.voting_deadline)}</span>
					{/if}
				</div>
			</div>

			<!-- Description -->
			<div class="rounded-lg border border-gray-200 bg-white p-5">
				<h3 class="text-base font-semibold text-gray-900 mb-2">Description</h3>
				<p class="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">{selectedProposal.description}</p>
			</div>

			<!-- Voting Info -->
			{#if selectedProposal.status === 'voting' || selectedProposal.total_voters > 0}
				<div class="rounded-lg border border-gray-200 bg-white p-5">
					<h3 class="text-base font-semibold text-gray-900 mb-3">Voting Results</h3>
					<div class="grid grid-cols-4 gap-4 mb-4">
						<div class="text-center">
							<div class="text-2xl font-bold text-green-600">{selectedProposal.votes?.yes ?? 0}</div>
							<div class="text-xs text-gray-500">Yes</div>
						</div>
						<div class="text-center">
							<div class="text-2xl font-bold text-red-600">{selectedProposal.votes?.no ?? 0}</div>
							<div class="text-xs text-gray-500">No</div>
						</div>
						<div class="text-center">
							<div class="text-2xl font-bold text-gray-500">{selectedProposal.votes?.abstain ?? 0}</div>
							<div class="text-xs text-gray-500">Abstain</div>
						</div>
						<div class="text-center">
							<div class="text-2xl font-bold text-gray-900">{selectedProposal.total_voters ?? 0}</div>
							<div class="text-xs text-gray-500">Total</div>
						</div>
					</div>

					{#if selectedProposal.total_voters > 0}
						<div class="mb-4">
							<div class="flex justify-between text-xs text-gray-500 mb-1">
								<span>Approval</span>
								<span>{((selectedProposal.votes?.yes ?? 0) / Math.max(selectedProposal.total_voters, 1) * 100).toFixed(1)}%</span>
							</div>
							<div class="w-full bg-gray-200 rounded-full h-2.5">
								<div
									class="bg-green-500 h-2.5 rounded-full transition-all duration-300"
									style="width: {((selectedProposal.votes?.yes ?? 0) / Math.max(selectedProposal.total_voters, 1)) * 100}%"
								></div>
							</div>
							{#if selectedProposal.required_threshold}
								<div class="text-xs text-gray-400 mt-1">Threshold: {(selectedProposal.required_threshold * 100).toFixed(0)}%</div>
							{/if}
						</div>
					{/if}

					{#if selectedProposal.status === 'voting'}
						<div class="flex gap-2 pt-2">
							<button
								onclick={() => castVote(selectedProposal.id, 'yes')}
								disabled={!!votingInProgress}
								class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-green-300 text-green-700 text-sm font-medium hover:bg-green-50 disabled:opacity-50 transition-colors"
							>
								{#if votingInProgress === selectedProposal.id + 'yes'}
									<div class="w-3.5 h-3.5 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
								{:else}
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
								{/if}
								Yes
							</button>
							<button
								onclick={() => castVote(selectedProposal.id, 'no')}
								disabled={!!votingInProgress}
								class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-red-300 text-red-700 text-sm font-medium hover:bg-red-50 disabled:opacity-50 transition-colors"
							>
								{#if votingInProgress === selectedProposal.id + 'no'}
									<div class="w-3.5 h-3.5 border-2 border-red-400 border-t-transparent rounded-full animate-spin"></div>
								{:else}
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
								{/if}
								No
							</button>
							<button
								onclick={() => castVote(selectedProposal.id, 'abstain')}
								disabled={!!votingInProgress}
								class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 transition-colors"
							>
								{#if votingInProgress === selectedProposal.id + 'abstain'}
									<div class="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
								{:else}
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
								{/if}
								Abstain
							</button>
						</div>
					{/if}
				</div>
			{/if}

			<!-- Actions -->
			<div class="flex flex-wrap gap-3 items-center">
				<button
					onclick={handleDemoApproveAndExecute}
					disabled={executing}
					class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black disabled:opacity-50 transition-colors"
				>
					{#if executing}
						<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
						Executing…
					{:else}
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
						Approve & Execute
					{/if}
				</button>
				<span class="text-xs text-gray-400">Demo feature</span>
			</div>

			{#if actionError}
				<div class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{actionError}</div>
			{/if}
			{#if actionMsg}
				<div class="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-center gap-2">
					<svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
					{actionMsg}
				</div>
			{/if}

		<!-- Multi-codex list -->
		{#if parseCodices(selectedProposal).length > 1}
		{@const codicesList = parseCodices(selectedProposal)}
				<div class="rounded-lg border border-gray-200 bg-white p-5">
					<h3 class="text-base font-semibold text-gray-900 mb-3">Codices ({codicesList.length})</h3>
					<div class="space-y-2">
						{#each codicesList as entry, i}
							<div class="flex items-center gap-3 p-2 bg-gray-50 rounded text-sm">
								<span class="font-mono font-medium text-gray-800 min-w-[140px]">{entry.name}</span>
								<a href={entry.url} target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:underline truncate flex-1 text-xs">
									{entry.url.split('/').pop()}
								</a>
								{#if entry.checksum}
									<code class="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{entry.checksum.slice(0, 20)}…</code>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Code Content -->
			<div class="rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
				<div class="bg-gray-100 px-4 py-2.5 border-b flex items-center justify-between">
					<div class="flex items-center gap-2">
						<svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
						<h3 class="font-semibold text-sm text-gray-800">Proposal Code</h3>
					</div>
					<div class="flex items-center gap-2">
						{#if selectedProposal.code_url}
							<a href={selectedProposal.code_url} target="_blank" rel="noopener noreferrer" class="text-xs text-indigo-600 hover:underline">View source</a>
						{/if}
						<span class="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-xs">
							{selectedProposal.code_url ? selectedProposal.code_url.split('/').pop() : 'proposal.py'}
						</span>
					</div>
				</div>
				<div class="p-4">
					{#if codeLoading}
						<div class="flex items-center justify-center py-8">
							<svg class="animate-spin h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
							<span class="ml-3 text-gray-500 text-sm">Loading code…</span>
						</div>
					{:else if codeError}
						<div class="text-sm text-red-600 mb-3">{codeError}</div>
						<button onclick={() => fetchCode(selectedProposal)} class="text-sm px-3 py-1.5 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">Retry</button>
					{:else if codeContent}
						<div class="bg-gray-900 rounded-lg overflow-hidden">
							<pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-100">{codeContent}</code></pre>
						</div>
						{#if codeChecksum}
							<div class="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
								<span>Checksum: <code class="bg-gray-100 px-1.5 py-0.5 rounded">{codeChecksum}</code></span>
								<span>{codeContent.split('\n').length} lines</span>
							</div>
						{/if}
					{:else}
						<div class="text-center py-8 text-gray-400 text-sm">No code available for this proposal.</div>
					{/if}
				</div>
			</div>

			<div class="text-xs text-gray-400 pb-4">
				<span class="font-medium">Security note:</span> Always review proposal code carefully before voting.
			</div>
		</div>

	<!-- Submit Proposal Form View -->
	{:else if view === 'form'}
		<div class="rounded-lg border border-gray-200 bg-white p-6">
			<div class="mb-5">
				<h2 class="text-xl font-semibold text-gray-900 mb-1">Submit a Proposal</h2>
				<p class="text-sm text-gray-500">Propose a new codex or code change for the realm.</p>
			</div>

			<form onsubmit={(e) => { e.preventDefault(); submitProposal(); }} class="space-y-4">
				<div>
					<label for="rt-title" class="block text-sm font-medium text-gray-700 mb-1">Title *</label>
					<input
						id="rt-title"
						type="text"
						bind:value={formTitle}
						placeholder="Proposal title"
						required
						disabled={submitting}
						class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none disabled:bg-gray-50 disabled:text-gray-400"
					/>
				</div>

				<div>
					<label for="rt-desc" class="block text-sm font-medium text-gray-700 mb-1">Description *</label>
					<textarea
						id="rt-desc"
						bind:value={formDescription}
						placeholder="Describe what this proposal does and why…"
						rows="5"
						required
						disabled={submitting}
						class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-y disabled:bg-gray-50 disabled:text-gray-400"
					></textarea>
				</div>

				<!-- Codex Entries -->
				<div>
					<div class="flex items-center justify-between mb-2">
						<label class="block text-sm font-medium text-gray-700">Codex Files *</label>
						<button
							type="button"
							onclick={addCodexEntry}
							disabled={submitting}
							class="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
						>
							<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
							Add codex
						</button>
					</div>
					<p class="text-xs text-gray-400 mb-3">Provide URLs to Python codex files for governance review.</p>

					{#each codexEntries as entry, i}
						<div class="border border-gray-200 rounded-lg p-3 mb-3 {codexEntries.length > 1 ? 'bg-gray-50' : ''}">
							{#if codexEntries.length > 1}
								<div class="flex items-center justify-between mb-2">
									<span class="text-xs font-medium text-gray-400">Codex {i + 1}</span>
									<button type="button" onclick={() => removeCodexEntry(i)} disabled={submitting} class="text-red-400 hover:text-red-600 text-xs">&times;</button>
								</div>
							{/if}
							<div class="space-y-2">
								<div>
									<label for="codex-url-{i}" class="block text-xs font-medium text-gray-600 mb-0.5">Code URL</label>
									<input
										id="codex-url-{i}"
										type="url"
										bind:value={entry.url}
										onchange={() => onUrlChange(i)}
										placeholder="https://example.com/codex.py"
										disabled={submitting}
										class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none disabled:bg-gray-50"
									/>
								</div>
								<div class="grid grid-cols-2 gap-2">
									<div>
										<label for="codex-name-{i}" class="block text-xs font-medium text-gray-600 mb-0.5">Codex Name</label>
										<input
											id="codex-name-{i}"
											bind:value={entry.name}
											placeholder="my_codex"
											disabled={submitting}
											class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none disabled:bg-gray-50"
										/>
									</div>
									<div>
										<label for="codex-cksum-{i}" class="block text-xs font-medium text-gray-600 mb-0.5">Checksum</label>
										<div class="flex gap-1">
											<input
												id="codex-cksum-{i}"
												bind:value={entry.checksum}
												placeholder="Auto-calculated"
												disabled={submitting || entry.calculating}
												class="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none disabled:bg-gray-50"
											/>
											<button
												type="button"
												onclick={() => calculateChecksum(i)}
												disabled={submitting || entry.calculating || !entry.url.trim()}
												class="px-2.5 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-40"
											>
												{#if entry.calculating}
													<div class="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
												{:else}
													<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
												{/if}
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- Security Warning -->
				<div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
					<h4 class="font-medium text-amber-800 text-sm mb-1">Security Notice</h4>
					<ul class="text-xs text-amber-700 space-y-0.5">
						<li>• All proposals are publicly visible to realm members</li>
						<li>• Code is fetched and checksummed for integrity verification</li>
						<li>• Approved codices will be executed on the realm backend</li>
					</ul>
				</div>

				<div class="flex justify-end gap-3 pt-2">
					<button
						type="button"
						onclick={cancelForm}
						disabled={submitting}
						class="px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50"
					>
						Cancel
					</button>
					<button
						type="submit"
						disabled={submitting || !formTitle.trim() || !formDescription.trim() || !hasValidCodex()}
						class="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
					>
						{#if submitting}
							<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
							Submitting…
						{:else}
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
							Submit Proposal
						{/if}
					</button>
				</div>
			</form>
		</div>

	<!-- Proposals List View (default) -->
	{:else}
		<div class="rounded-lg border border-gray-200 bg-white">
			<!-- Tab bar & refresh -->
			<div class="flex items-center justify-between px-5 py-3 border-b border-gray-200">
				<div class="flex gap-1">
					<button
						onclick={() => view = 'list'}
						class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium {view === 'list' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'}"
					>
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
						Proposals
					</button>
					<button
						onclick={() => view = 'form'}
						class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100"
					>
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
						Submit Proposal
					</button>
				</div>
				<button
					onclick={loadProposals}
					disabled={loading}
					class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
				>
					{#if loading}
						<div class="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
						Loading…
					{:else}
						<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
						Refresh
					{/if}
				</button>
			</div>

			<!-- Content -->
			{#if loading}
				<div class="flex items-center justify-center py-12">
					<svg class="animate-spin h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
					<span class="ml-3 text-gray-500 text-sm">Loading proposals…</span>
				</div>
			{:else if proposals.length === 0}
				<div class="text-center py-12">
					<svg class="mx-auto h-10 w-10 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
					<p class="text-gray-500 text-sm">No proposals yet</p>
					<p class="text-gray-400 text-xs mt-1">Be the first to submit a proposal for this realm.</p>
				</div>
			{:else}
			<div class="divide-y divide-gray-100">
					{#each pagedProposals as proposal}
						<div class="p-4 hover:bg-gray-50 transition-colors">
							<div class="flex items-start justify-between mb-2">
								<div class="flex-1 min-w-0">
									<h3 class="text-sm font-medium text-gray-900 truncate">{proposal.title}</h3>
									<span class="inline-flex mt-1 px-2 py-0.5 rounded-full text-xs font-semibold {statusColor(proposal.status)}">
										{statusLabel(proposal.status)}
									</span>
								</div>
								<button
									onclick={() => viewProposal(proposal)}
									class="ml-2 p-1.5 rounded border border-gray-300 text-gray-500 hover:bg-gray-100"
								>
									<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
								</button>
							</div>
							<p class="text-xs text-gray-500 line-clamp-2 mb-2">{proposal.description}</p>
							<div class="flex items-center justify-between text-xs text-gray-400 mb-2">
								<code>{truncatePrincipal(proposal.proposer)}</code>
								<span>{formatDate(proposal.created_at)}</span>
							</div>
							{#if proposal.status === 'voting'}
								<div class="pt-2 border-t border-gray-100">
									<div class="flex justify-between items-center mb-2">
										<div class="flex gap-3 text-xs">
											<span class="text-green-600">Y:{proposal.votes?.yes ?? 0}</span>
											<span class="text-red-600">N:{proposal.votes?.no ?? 0}</span>
											<span class="text-gray-500">A:{proposal.votes?.abstain ?? 0}</span>
										</div>
									</div>
									<div class="w-full bg-gray-200 rounded-full h-1.5 mb-2">
										<div class="bg-green-500 h-1.5 rounded-full" style="width: {((proposal.votes?.yes ?? 0) / Math.max(proposal.total_voters, 1)) * 100}%"></div>
									</div>
									<div class="flex gap-1">
										<button onclick={() => castVote(proposal.id, 'yes')} disabled={!!votingInProgress} class="flex-1 py-1.5 rounded border border-green-300 text-xs text-green-700 hover:bg-green-50 disabled:opacity-50">Yes</button>
										<button onclick={() => castVote(proposal.id, 'no')} disabled={!!votingInProgress} class="flex-1 py-1.5 rounded border border-red-300 text-xs text-red-700 hover:bg-red-50 disabled:opacity-50">No</button>
										<button onclick={() => castVote(proposal.id, 'abstain')} disabled={!!votingInProgress} class="flex-1 py-1.5 rounded border border-gray-300 text-xs text-gray-600 hover:bg-gray-50 disabled:opacity-50">Abstain</button>
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div>

				<!-- Pagination -->
				{#if totalPages > 1}
					<div class="flex items-center justify-between px-5 py-3 border-t border-gray-200">
						<span class="text-xs text-gray-500">
							{(currentPage - 1) * pageSize + 1}–{Math.min(currentPage * pageSize, sortedProposals.length)} of {sortedProposals.length}
						</span>
						<div class="flex items-center gap-2">
							<button
								onclick={() => currentPage--}
								disabled={currentPage <= 1}
								class="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40"
							>
								<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
								Prev
							</button>
							<span class="text-xs text-gray-500">{currentPage} / {totalPages}</span>
							<button
								onclick={() => currentPage++}
								disabled={currentPage >= totalPages}
								class="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40"
							>
								Next
								<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
							</button>
						</div>
					</div>
				{/if}
			{/if}
		</div>
	{/if}
</div>
