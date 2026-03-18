<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { Card, Button, Badge, Alert, Spinner } from 'flowbite-svelte';
	import { LinkOutline, CalendarMonthOutline, UserCircleSolid, CodeBranchOutline, CheckCircleSolid, PlaySolid } from 'flowbite-svelte-icons';
	import { _ } from 'svelte-i18n';
	import { backend } from '$lib/canisters';
	import VotingCard from './VotingCard.svelte';
	
	export let proposal;
	
	const dispatch = createEventDispatcher();
	
	// Code fetching state
	let codeContent = '';
	let codeLoading = true;
	let codeError = '';
	let codeChecksum = '';
	
	// Demo feature state
	let approving = false;
	let executing = false;
	let actionError = '';
	let actionSuccess = '';
	
	onMount(async () => {
		await fetchCode();
	});
	
	async function fetchCode() {
		try {
			codeLoading = true;
			codeError = '';
			
			const response = await backend.extension_async_call({
				extension_name: "voting",
				function_name: "fetch_proposal_code",
				args: JSON.stringify({ proposal_id: proposal.id })
			});
			
			if (response.success) {
				const data = typeof response.response === 'string' 
					? JSON.parse(response.response) 
					: response.response;
				
				if (data.success) {
					codeContent = data.data.code;
					codeChecksum = data.data.checksum;
				} else {
					codeError = data.error || 'Failed to fetch code';
				}
			} else {
				codeError = 'Failed to communicate with backend';
			}
		} catch (e) {
			console.error('Error fetching code:', e);
			codeError = 'Error fetching code: ' + e.message;
		} finally {
			codeLoading = false;
		}
	}
	
	async function handleDemoApproveAndExecute() {
		try {
			executing = true;
			actionError = '';
			actionSuccess = '';
			
			const response = await backend.extension_async_call({
				extension_name: "voting",
				function_name: "demo_approve_and_execute",
				args: JSON.stringify({ proposal_id: proposal.id })
			});
			
			if (response.success) {
				const data = typeof response.response === 'string' 
					? JSON.parse(response.response) 
					: response.response;
				
				if (data.success) {
					actionSuccess = data.data.message;
					proposal = { ...proposal, ...data.data.proposal };
					dispatch('statusChanged', { proposal_id: proposal.id, status: proposal.status });
				} else {
					actionError = data.error || 'Failed to approve and execute proposal';
				}
			} else {
				actionError = 'Failed to communicate with backend';
			}
		} catch (e) {
			console.error('Error in demo approve & execute:', e);
			actionError = 'Error: ' + e.message;
		} finally {
			executing = false;
		}
	}
	
	function getStatusColor(status: string) {
		return 'dark';
	}
	
	function formatDate(value: any) {
		if (!value && value !== 0) return 'N/A';
		// Handle epoch seconds (number) or ISO string
		const date = typeof value === 'number' ? new Date(value * 1000) : new Date(value);
		if (isNaN(date.getTime())) return 'N/A';
		return date.toLocaleString();
	}
	
	function handleVote(event) {
		dispatch('vote', event.detail);
	}
	
	function handleClose() {
		dispatch('close');
	}
</script>

<div class="space-y-6">
	<!-- Full-width Header -->
	<div>
		<div class="flex items-center gap-3 mb-3">
			<h2 class="text-2xl font-bold text-gray-900">
				{proposal.title}
			</h2>
			<Badge color={getStatusColor(proposal.status)} size="lg">
				{$_(`extensions.voting.status.${proposal.status}`)}
			</Badge>
		</div>
		
		<div class="flex flex-wrap items-center gap-4 text-sm text-gray-600">
			<div class="flex items-center gap-1">
				<UserCircleSolid class="w-4 h-4" />
				<span>{$_('extensions.voting.detail.proposer')}: {proposal.proposer}</span>
			</div>
			<div class="flex items-center gap-1">
				<CalendarMonthOutline class="w-4 h-4" />
				<span>{$_('extensions.voting.detail.created')}: {formatDate(proposal.created_at)}</span>
			</div>
			{#if proposal.voting_deadline}
				<div class="flex items-center gap-1">
					<CalendarMonthOutline class="w-4 h-4" />
					<span>{$_('extensions.voting.detail.deadline')}: {formatDate(proposal.voting_deadline)}</span>
				</div>
			{/if}
		</div>
	</div>

	<!-- Description (full width) -->
	<div class="w-full border rounded-lg shadow-sm p-5 bg-white">
		<h3 class="text-lg font-semibold mb-3">{$_('extensions.voting.detail.description')}</h3>
		<p class="text-gray-700 whitespace-pre-wrap">{proposal.description}</p>
	</div>

	<!-- Voting Information -->
	{#if proposal.status === 'voting' || proposal.total_voters > 0}
		<div class="w-full border rounded-lg shadow-sm p-5 bg-white">
			<h3 class="text-lg font-semibold mb-3">{$_('extensions.voting.detail.voting_info')}</h3>
			
			<div class="grid grid-cols-4 gap-4 mb-4">
				<div class="text-center">
					<div class="text-2xl font-bold text-gray-900">{proposal.votes.yes}</div>
					<div class="text-sm text-gray-500">{$_('extensions.voting.votes.yes')}</div>
				</div>
				<div class="text-center">
					<div class="text-2xl font-bold text-gray-900">{proposal.votes.no}</div>
					<div class="text-sm text-gray-500">{$_('extensions.voting.votes.no')}</div>
				</div>
				<div class="text-center">
					<div class="text-2xl font-bold text-gray-900">{proposal.votes.abstain}</div>
					<div class="text-sm text-gray-500">{$_('extensions.voting.votes.abstain')}</div>
				</div>
				<div class="text-center">
					<div class="text-2xl font-bold text-gray-900">{proposal.total_voters}</div>
					<div class="text-sm text-gray-500">{$_('extensions.voting.total_votes')}</div>
				</div>
			</div>
			
			{#if proposal.total_voters > 0}
				<div class="mb-4">
					<div class="flex justify-between text-sm text-gray-600 mb-1">
						<span>{$_('extensions.voting.approval_progress')}</span>
						<span>{((proposal.votes.yes / proposal.total_voters) * 100).toFixed(1)}%</span>
					</div>
					<div class="w-full bg-gray-200 rounded-full h-3">
						<div 
							class="bg-gray-900 h-3 rounded-full transition-all duration-300" 
							style="width: {(proposal.votes.yes / proposal.total_voters) * 100}%"
						></div>
					</div>
					<div class="text-xs text-gray-500 mt-1">
						{$_('extensions.voting.threshold_required')}: {(proposal.required_threshold * 100).toFixed(0)}%
					</div>
				</div>
			{/if}
			
			{#if proposal.status === 'voting'}
				<VotingCard 
					{proposal}
					on:vote={handleVote}
				/>
			{/if}
		</div>
	{/if}

	<!-- Actions row -->
	<div class="flex flex-wrap gap-3 items-center">
		<a href="/extensions/llm_chat?explain=proposal:{proposal.id}" target="_blank">
			<Button color="light" size="md">
				<svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
				</svg>
				{$_('extensions.voting.explain_ai')}
			</Button>
		</a>

		<Button 
			color="dark"
			size="md"
			on:click={handleDemoApproveAndExecute}
			disabled={executing}
		>
			{#if executing}
				<Spinner size="4" class="mr-2" />
				{$_('extensions.voting.demo_feature.executing')}
			{:else}
				<PlaySolid class="w-4 h-4 mr-2" />
				{$_('extensions.voting.demo_feature.approve_and_execute')}
			{/if}
		</Button>

		<span class="text-xs text-gray-400">{$_('extensions.voting.demo_feature.badge')}</span>
	</div>

	{#if actionError}
		<div class="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-sm text-gray-700">
			<span class="font-medium">{$_('extensions.voting.error')}</span> {actionError}
		</div>
	{/if}
	
	{#if actionSuccess}
		<div class="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-sm text-gray-700">
			<CheckCircleSolid class="w-4 h-4 mr-2 inline" />
			<span class="font-medium">{actionSuccess}</span>
		</div>
	{/if}

	<!-- Security Warning -->
	<div class="text-xs text-gray-400">
		<span class="font-medium">{$_('extensions.voting.detail.security_warning.title')}</span>
		{$_('extensions.voting.detail.security_warning.message')}
	</div>

	<!-- Proposal Code (full width) -->
	<div class="w-full bg-gray-50 rounded-lg border overflow-hidden">
		<div class="bg-gray-100 px-4 py-2 border-b flex items-center justify-between">
			<div class="flex items-center gap-2">
				<CodeBranchOutline class="w-4 h-4 text-gray-600" />
				<h3 class="font-semibold text-gray-800">{$_('extensions.voting.detail.code_content')}</h3>
			</div>
			<div class="flex items-center gap-2">
				{#if proposal.code_url}
					<a href={proposal.code_url} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 hover:underline text-xs flex items-center gap-1">
						<LinkOutline class="w-3 h-3" />
						{$_('extensions.voting.detail.view_code')}
					</a>
				{/if}
				<span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
					{proposal.code_url ? proposal.code_url.split('/').pop() : 'proposal.py'}
				</span>
			</div>
		</div>
		
		<div class="p-4">
			{#if codeLoading}
				<div class="flex items-center justify-center py-8">
					<Spinner size="8" />
					<span class="ml-3 text-gray-600">{$_('extensions.voting.loading_code')}</span>
				</div>
			{:else if codeError}
				<div class="border border-gray-300 rounded-lg p-3 bg-white text-sm text-gray-700 mb-4">
					<span class="font-medium">{$_('extensions.voting.error')}</span> {codeError}
				</div>
				<div class="text-center">
					<Button size="sm" color="light" on:click={fetchCode}>
						{$_('extensions.voting.retry')}
					</Button>
				</div>
			{:else if codeContent}
				<div class="font-mono text-sm">
					<div class="bg-gray-900 rounded-lg overflow-hidden">
						<pre class="p-4 overflow-x-auto"><code class="text-gray-100">{codeContent}</code></pre>
					</div>
					
					{#if codeChecksum}
						<div class="mt-4 pt-3 border-t border-gray-200">
							<div class="text-xs text-gray-500">
								<div class="flex justify-between items-center">
									<span class="font-medium">{$_('extensions.voting.detail.checksum')}:</span>
									<code class="bg-gray-100 px-2 py-1 rounded text-xs break-all ml-2">
										{codeChecksum}
									</code>
								</div>
								<div class="flex justify-between mt-2">
									<span>{$_('extensions.voting.lines')}:</span>
									<span class="font-medium">{codeContent.split('\n').length}</span>
								</div>
							</div>
						</div>
					{/if}
				</div>
			{:else}
				<div class="text-center py-8 text-gray-500">
					{$_('extensions.voting.no_code')}
				</div>
			{/if}
		</div>
	</div>
</div>
