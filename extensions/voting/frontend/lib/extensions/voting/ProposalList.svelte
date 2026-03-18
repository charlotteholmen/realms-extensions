<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	import { Card, Badge, Button, Spinner, Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell } from 'flowbite-svelte';
	import { EyeSolid, ClockSolid, UserSolid, ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
	import { _ } from 'svelte-i18n';
	import VotingCard from './VotingCard.svelte';
	
	export let proposals = [];
	export let loading = false;
	
	const dispatch = createEventDispatcher();
	
	// Pagination
	let currentPage = 1;
	const pageSize = 10;
	
	// Sort proposals by created_at descending (newest first)
	$: sortedProposals = [...proposals].sort((a, b) => {
		const aTime = a.created_at || 0;
		const bTime = b.created_at || 0;
		return bTime - aTime;
	});
	
	$: totalPages = Math.max(1, Math.ceil(sortedProposals.length / pageSize));
	$: pagedProposals = sortedProposals.slice((currentPage - 1) * pageSize, currentPage * pageSize);
	// Reset to page 1 when proposals change
	$: if (proposals) currentPage = 1;
	
	function getStatusColor(status: string) {
		switch (status) {
			case 'pending_review': return 'yellow';
			case 'pending_vote': return 'blue';
			case 'voting': return 'green';
			case 'accepted': return 'green';
			case 'executing': return 'purple';
			case 'executed': return 'indigo';
			case 'failed': return 'red';
			case 'rejected': return 'red';
			default: return 'gray';
		}
	}
	
	function formatDate(value: any) {
		if (!value && value !== 0) return 'N/A';
		const date = typeof value === 'number' ? new Date(value * 1000) : new Date(value);
		if (isNaN(date.getTime())) return 'N/A';
		return date.toLocaleDateString();
	}
	
	function truncatePrincipal(id: string): string {
		if (!id || id.length <= 16) return id || 'unknown';
		return id.slice(0, 8) + '...' + id.slice(-6);
	}
	
	function handleViewDetails(proposal) {
		goto(`/extensions/voting/${proposal.id}`);
	}
	
	function handleVote(event) {
		dispatch('vote', event.detail);
	}
</script>

{#if loading}
	<div class="flex justify-center items-center py-8">
		<Spinner size="8" />
		<span class="ml-3">{$_('extensions.voting.loading_proposals')}</span>
	</div>
{:else if proposals.length === 0}
	<div class="text-center py-8">
		<p class="text-gray-500 text-lg">{$_('extensions.voting.no_proposals')}</p>
		<p class="text-gray-400 text-sm mt-2">{$_('extensions.voting.no_proposals_hint')}</p>
	</div>
{:else}
	<!-- Desktop Table View -->
		<div class="hidden lg:block overflow-x-auto">
			<Table hoverable={true} class="w-full table-fixed">
				<TableHead>
					<TableHeadCell class="w-[28%]">{$_('extensions.voting.table.title')}</TableHeadCell>
					<TableHeadCell class="w-[12%]">{$_('extensions.voting.table.status')}</TableHeadCell>
					<TableHeadCell class="w-[16%]">{$_('extensions.voting.table.proposer')}</TableHeadCell>
					<TableHeadCell class="w-[10%]">{$_('extensions.voting.table.created')}</TableHeadCell>
					<TableHeadCell class="w-[12%]">{$_('extensions.voting.table.votes')}</TableHeadCell>
					<TableHeadCell class="w-[22%]">{$_('extensions.voting.table.actions')}</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each pagedProposals as proposal}
						<TableBodyRow class="hover:bg-gray-50">
							<TableBodyCell class="font-medium max-w-0">
								<div class="truncate">
									<h3 class="text-sm font-semibold text-gray-900 mb-1 truncate">
										{proposal.title}
									</h3>
									<p class="text-xs text-gray-600 truncate">
										{proposal.description}
									</p>
								</div>
							</TableBodyCell>
							<TableBodyCell>
								<Badge color={getStatusColor(proposal.status)} class="text-xs">
									{$_(`extensions.voting.status.${proposal.status}`)}
								</Badge>
							</TableBodyCell>
							<TableBodyCell class="text-sm text-gray-600 max-w-0 truncate" title={proposal.proposer}>
								<code class="text-xs">{truncatePrincipal(proposal.proposer)}</code>
							</TableBodyCell>
							<TableBodyCell class="text-sm text-gray-600">
								{formatDate(proposal.created_at)}
							</TableBodyCell>
							<TableBodyCell>
								{#if proposal.status === 'voting'}
									<div class="text-xs space-y-1">
										<div class="flex gap-2">
											<span class="text-green-600">Y: {proposal.votes.yes}</span>
											<span class="text-red-600">N: {proposal.votes.no}</span>
											<span class="text-gray-600">A: {proposal.votes.abstain}</span>
										</div>
										<div class="w-full bg-gray-200 rounded-full h-1">
											<div 
												class="bg-green-600 h-1 rounded-full" 
												style="width: {(proposal.votes.yes / Math.max(proposal.total_voters, 1)) * 100}%"
											></div>
										</div>
									</div>
								{:else}
									<span class="text-xs text-gray-400">-</span>
								{/if}
							</TableBodyCell>
							<TableBodyCell>
								<div class="flex flex-wrap gap-1">
									<Button 
										size="xs" 
										color="dark"
										outline
										on:click={() => handleViewDetails(proposal)}
									>
										<EyeSolid class="w-3 h-3 mr-1" />
										{$_('extensions.voting.view')}
									</Button>
									{#if proposal.status === 'voting'}
										<VotingCard 
											{proposal}
											compact={true}
											on:vote={handleVote}
										/>
									{/if}
								</div>
							</TableBodyCell>
						</TableBodyRow>
					{/each}
				</TableBody>
			</Table>
		</div>

		<!-- Mobile Card View -->
		<div class="lg:hidden space-y-3">
			{#each pagedProposals as proposal}
				<Card class="hover:shadow-md transition-shadow p-4">
					<div class="space-y-3">
						<div class="flex items-start justify-between">
							<div class="flex-1 min-w-0">
								<h3 class="text-base font-semibold text-gray-900 truncate">
									{proposal.title}
								</h3>
								<Badge color={getStatusColor(proposal.status)} class="text-xs mt-1">
									{$_(`extensions.voting.status.${proposal.status}`)}
								</Badge>
							</div>
							<Button 
								size="xs" 
								color="dark"
								outline
								on:click={() => handleViewDetails(proposal)}
								class="ml-2"
							>
								<EyeSolid class="w-3 h-3" />
							</Button>
						</div>
						
						<p class="text-sm text-gray-600 line-clamp-2">
							{proposal.description}
						</p>
						
						<div class="flex items-center justify-between text-xs text-gray-500">
							<code>{truncatePrincipal(proposal.proposer)}</code>
							<span>{formatDate(proposal.created_at)}</span>
						</div>
						
						{#if proposal.status === 'voting'}
							<div class="pt-2 border-t border-gray-100">
								<div class="flex justify-between items-center mb-2">
									<div class="flex gap-3 text-xs">
										<span class="text-green-600">Y: {proposal.votes.yes}</span>
										<span class="text-red-600">N: {proposal.votes.no}</span>
										<span class="text-gray-600">A: {proposal.votes.abstain}</span>
									</div>
									<VotingCard 
										{proposal}
										compact={true}
										on:vote={handleVote}
									/>
								</div>
								<div class="w-full bg-gray-200 rounded-full h-1.5">
									<div 
										class="bg-green-600 h-1.5 rounded-full" 
										style="width: {(proposal.votes.yes / Math.max(proposal.total_voters, 1)) * 100}%"
									></div>
								</div>
							</div>
						{/if}
					</div>
				</Card>
			{/each}
		</div>

		<!-- Pagination -->
		{#if totalPages > 1}
			<div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
				<span class="text-sm text-gray-600">
					{$_('extensions.voting.pagination.showing')} {(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, sortedProposals.length)} {$_('extensions.voting.pagination.of')} {sortedProposals.length}
				</span>
				<div class="flex gap-2">
					<Button
						size="xs"
						color="alternative"
						disabled={currentPage <= 1}
						on:click={() => currentPage--}
					>
						<ChevronLeftOutline class="w-3 h-3 mr-1" />
						{$_('extensions.voting.pagination.prev')}
					</Button>
					<span class="flex items-center text-sm text-gray-600 px-2">
						{currentPage} / {totalPages}
					</span>
					<Button
						size="xs"
						color="alternative"
						disabled={currentPage >= totalPages}
						on:click={() => currentPage++}
					>
						{$_('extensions.voting.pagination.next')}
						<ChevronRightOutline class="w-3 h-3 ml-1" />
					</Button>
				</div>
			</div>
		{/if}
{/if}
