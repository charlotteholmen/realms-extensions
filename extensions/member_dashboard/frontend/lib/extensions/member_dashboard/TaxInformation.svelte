<script lang="ts">
	import { onMount } from 'svelte';
	import { Card, Spinner, Alert, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Badge, Button, Tooltip, Modal } from 'flowbite-svelte';
	import { DollarOutline, CheckCircleOutline, ClockOutline, ExclamationCircleOutline, DownloadOutline, CreditCardOutline, RefreshOutline } from 'flowbite-svelte-icons';
	import { backend } from '$lib/canisters';
	import { realmName } from '$lib/stores/realmInfo';
	
	// Props
	export let userId: string;
	
	// Component state
	let loading = true;
	let error = '';
	let invoiceData = null;
	
	// Payment modal state
	let showPaymentModal = false;
	let paymentLoading = false;
	let paymentInfo = null;
	let selectedRecord = null;
	let copied = false;
	
	// Metadata modal state
	let showMetadataModal = false;
	let selectedMetadata = null;
	
	// Refresh state
	let refreshingInvoiceId: string | null = null;
	
	// Demo feature state
	let demoPayingInvoiceId: string | null = null;

	// Build GitHub issue URL with context
	$: supportUrl = (() => {
		let version = 'unknown';
		let commitHash = 'unknown';
		if (typeof document !== 'undefined') {
			const vMeta = document.querySelector('meta[name="version"]');
			if (vMeta) version = vMeta.getAttribute('content') || version;
			const cMeta = document.querySelector('meta[name="commit-hash"]');
			if (cMeta) commitHash = cMeta.getAttribute('content') || commitHash;
		}
		const name = $realmName || 'Unknown';
		const page = typeof window !== 'undefined' ? window.location.href : '';
		const title = encodeURIComponent(`[Support] Issue in realm ${name}`);
		const body = encodeURIComponent(
			`**Realm:** ${name}\n**Version:** ${version}\n**Commit:** ${commitHash}\n**Page:** ${page}\n\n**Description:**\n<!-- Please describe your issue here -->\n`
		);
		return `https://github.com/smart-social-contracts/realms/issues/new?title=${title}&body=${body}&labels=user-support`;
	})();
	
	// Calculate percentages for the distribution bar
	$: totalAmount = invoiceData ? (invoiceData.summary.total_paid + invoiceData.summary.total_pending + invoiceData.summary.total_overdue) : 0;
	$: paidPercentage = totalAmount > 0 ? (invoiceData.summary.total_paid / totalAmount) * 100 : 0;
	$: pendingPercentage = totalAmount > 0 ? (invoiceData.summary.total_pending / totalAmount) * 100 : 0;
	$: overduePercentage = totalAmount > 0 ? (invoiceData.summary.total_overdue / totalAmount) * 100 : 0;
	
	// Format date for display
	function formatDate(dateStr) {
		if (!dateStr) return 'N/A';
		const date = new Date(dateStr);
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'short', 
			day: 'numeric' 
		});
	}
	
	// Format currency for display
	function formatCurrency(amount) {
		if (amount === undefined || amount === null) return 'N/A';
		return new Intl.NumberFormat('en-US', { 
			style: 'currency', 
			currency: 'USD' 
		}).format(amount);
	}
	
	// Get status badge color based on status value
	function getStatusColor(status) {
		switch(status.toLowerCase()) {
			case 'paid':
				return 'green';
			case 'pending':
				return 'yellow';
			case 'overdue':
				return 'red';
			case 'processing':
				return 'purple';
			default:
				return 'blue';
		}
	}
	
	// Open metadata modal
	function openMetadataModal(record) {
		selectedMetadata = record.metadata;
		showMetadataModal = true;
	}
	
	// Get invoice information for the user
	async function getInvoiceInformation() {
		try {
			// Prepare call parameters
			const callParams = { 
				user_id: userId
			};
			
			// Log the request details
			console.log('Calling get_invoice_information with parameters:', callParams);
			
			// Use the extension_async_call API method
			const response = await backend.extension_sync_call({
				extension_name: "member_dashboard",
				function_name: "get_invoice_information",
				args: JSON.stringify(callParams)
			});
			
			console.log('Invoice information response:', response);
			
			if (response.success) {
				// Parse the JSON response
				const data = JSON.parse(response.response);
				console.log('Parsed invoice data:', data);
				
				if (data.success) {
					// Handle successful response
					invoiceData = data.data;
					console.log('Invoice data set:', invoiceData);
				} else {
					// Handle error
					error = `Failed to get invoice information: ${data.error || 'Unknown error'}`;
					console.error(error);
				}
			} else {
				error = `Failed to get invoice information: ${response.response}`;
				console.error(error);
			}
		} catch (err) {
			console.error('Error fetching invoice information:', err);
			error = `Error fetching invoice information: ${err.message || err}`;
		} finally {
			loading = false;
		}
	}
	
	// Open payment modal and fetch deposit address
	async function openPaymentModal(record) {
		selectedRecord = record;
		showPaymentModal = true;
		paymentLoading = true;
		paymentInfo = null;
		
		try {
			const response = await backend.extension_sync_call({
				extension_name: "member_dashboard",
				function_name: "get_invoice_deposit_address",
				args: JSON.stringify({ invoice_id: record.id })
			});
			
			if (response.success) {
				const data = JSON.parse(response.response);
				if (data.success) {
					paymentInfo = data.data;
				} else {
					console.error('Failed to get deposit address:', data.error);
				}
			}
		} catch (err) {
			console.error('Error fetching deposit address:', err);
		} finally {
			paymentLoading = false;
		}
	}
	
	// Copy command to clipboard
	async function copyCommand(text) {
		try {
			await navigator.clipboard.writeText(text);
			copied = true;
			setTimeout(() => { copied = false; }, 2000);
		} catch (e) {
			console.error('Failed to copy:', e);
		}
	}
	
	// Refresh invoice payment status
	async function refreshInvoice(record) {
		refreshingInvoiceId = record.id;
		try {
			const response = await backend.extension_async_call({
				extension_name: "vault",
				function_name: "refresh_invoice",
				args: JSON.stringify({ invoice_id: record.id })
			});
			
			console.log('Refresh invoice response:', response);
			
			if (response.success) {
				const data = JSON.parse(response.response);
				if (data.success && data.data?.invoice) {
					// Update the record status if it changed
					const updatedInvoice = data.data.invoice;
					if (updatedInvoice.status !== record.status) {
						// Refresh the entire invoice data to get updated summary
						await getInvoiceInformation();
					}
				}
			}
		} catch (err) {
			console.error('Error refreshing invoice:', err);
		} finally {
			refreshingInvoiceId = null;
		}
	}
	
	// Demo: Mark invoice as paid without actual payment
	async function demoMarkAsPaid(record) {
		demoPayingInvoiceId = record.id;
		try {
			const response = await backend.extension_sync_call({
				extension_name: "member_dashboard",
				function_name: "demo_mark_invoice_paid",
				args: JSON.stringify({ invoice_id: record.id })
			});
			
			console.log('Demo mark as paid response:', response);
			
			if (response.success) {
				const data = JSON.parse(response.response);
				if (data.success) {
					// Refresh the entire tax data to get updated summary
					await getTaxInformation();
				}
			}
		} catch (err) {
			console.error('Error marking invoice as paid (demo):', err);
		} finally {
			demoPayingInvoiceId = null;
		}
	}
	
	// Initialize component
	onMount(async () => {
		await getInvoiceInformation();
	});
</script>

<div class="w-full">
	<!-- Header with Actions -->
	<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
		<div>
			<h3 class="text-2xl font-bold text-gray-900 dark:text-white">Invoice Overview</h3>
			<p class="text-gray-500 dark:text-gray-400 mt-1">Manage your invoices and payment records</p>
		</div>
		<div class="flex items-center space-x-3 mt-4 sm:mt-0">
			<Button color="light" size="sm" class="flex items-center">
				<DownloadOutline class="w-4 h-4 mr-2" />
				Download Statement
			</Button>
			<Button color="dark" size="sm" class="flex items-center">
				<CreditCardOutline class="w-4 h-4 mr-2" />
				Pay Now
			</Button>
		</div>
	</div>
	
	{#if loading}
		<div class="flex flex-col justify-center items-center p-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
			<Spinner size="10" />
			<p class="mt-4 text-gray-500 dark:text-gray-400">Loading invoice information...</p>
		</div>
	{:else if error}
		<Alert color="red" class="mb-4 rounded-xl">
			<span class="font-medium">Error:</span> {error}
		</Alert>
	{:else if invoiceData}
		<!-- Payment Distribution Visual -->
		<div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700">
			<div class="flex items-center justify-between mb-4">
				<h4 class="text-lg font-semibold text-gray-900 dark:text-white">Payment Distribution</h4>
				<span class="text-sm text-gray-500 dark:text-gray-400">Total: {formatCurrency(totalAmount)}</span>
			</div>
			
			<!-- Visual Progress Bar -->
			<div class="h-4 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex mb-4">
				{#if paidPercentage > 0}
					<div class="bg-gray-900 dark:bg-white h-full transition-all duration-500" style="width: {paidPercentage}%"></div>
				{/if}
				{#if pendingPercentage > 0}
					<div class="bg-gray-500 h-full transition-all duration-500" style="width: {pendingPercentage}%"></div>
				{/if}
				{#if overduePercentage > 0}
					<div class="bg-gray-300 dark:bg-gray-600 h-full transition-all duration-500" style="width: {overduePercentage}%"></div>
				{/if}
			</div>
			
			<!-- Legend Cards -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<!-- Paid -->
				<div class="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
					<div class="p-2 bg-gray-900 dark:bg-white rounded-lg mr-3">
						<CheckCircleOutline class="w-5 h-5 text-white dark:text-gray-900" />
					</div>
					<div class="flex-1">
						<p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Paid</p>
						<p class="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(invoiceData.summary.total_paid)}</p>
					</div>
					<div class="text-right">
						<span class="text-sm font-medium text-gray-900 dark:text-white">{paidPercentage.toFixed(0)}%</span>
					</div>
				</div>
				
				<!-- Pending -->
				<div class="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
					<div class="p-2 bg-gray-500 rounded-lg mr-3">
						<ClockOutline class="w-5 h-5 text-white" />
					</div>
					<div class="flex-1">
						<p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Pending</p>
						<p class="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(invoiceData.summary.total_pending)}</p>
					</div>
					<div class="text-right">
						<span class="text-sm font-medium text-gray-500">{pendingPercentage.toFixed(0)}%</span>
					</div>
				</div>
				
				<!-- Overdue -->
				<div class="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 {invoiceData.summary.total_overdue > 0 ? 'ring-2 ring-gray-300 dark:ring-gray-600' : ''}">
					<div class="p-2 bg-gray-300 dark:bg-gray-600 rounded-lg mr-3">
						<ExclamationCircleOutline class="w-5 h-5 text-gray-700 dark:text-gray-300" />
					</div>
					<div class="flex-1">
						<p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Overdue</p>
						<p class="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(invoiceData.summary.total_overdue)}</p>
					</div>
					<div class="text-right">
						<span class="text-sm font-medium text-gray-400">{overduePercentage.toFixed(0)}%</span>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Invoice Records Table -->
		<div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
			<div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
				<h4 class="text-lg font-semibold text-gray-900 dark:text-white">Recent Invoices</h4>
			</div>
			<Table hoverable={true}>
				<TableHead class="bg-gray-50 dark:bg-gray-900">
					<TableHeadCell class="font-semibold">Recipient</TableHeadCell>
					<TableHeadCell class="font-semibold">Amount</TableHeadCell>
					<TableHeadCell class="font-semibold">Currency</TableHeadCell>
					<TableHeadCell class="font-semibold">Due On</TableHeadCell>
					<TableHeadCell class="font-semibold">Type</TableHeadCell>
					<TableHeadCell class="font-semibold">Metadata</TableHeadCell>
					<TableHeadCell class="font-semibold">Status</TableHeadCell>
					<TableHeadCell class="font-semibold">Paid On</TableHeadCell>
					<TableHeadCell class="font-semibold text-right">Action</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each invoiceData.invoices as record}
						<TableBodyRow class="hover:bg-gray-50 dark:hover:bg-gray-700/50">
							<TableBodyCell>
								<div class="font-medium text-gray-900 dark:text-white">{record.recipient || 'N/A'}</div>
							</TableBodyCell>
							<TableBodyCell class="font-semibold text-gray-900 dark:text-white">
								{record.amount}
							</TableBodyCell>
							<TableBodyCell class="text-gray-700 dark:text-gray-300">
								{record.currency || 'ckBTC'}
							</TableBodyCell>
							<TableBodyCell class="text-gray-700 dark:text-gray-300">
								{formatDate(record.due_on)}
							</TableBodyCell>
							<TableBodyCell class="text-gray-700 dark:text-gray-300">
								{record.type || 'N/A'}
							</TableBodyCell>
							<TableBodyCell>
								{#if record.metadata}
									<button 
										class="text-gray-600 dark:text-gray-300 underline hover:text-gray-900 dark:hover:text-white cursor-pointer text-sm"
										on:click={() => openMetadataModal(record)}
									>
										View
									</button>
								{:else}
									<span class="text-gray-400">—</span>
								{/if}
							</TableBodyCell>
							<TableBodyCell>
								<Badge color={getStatusColor(record.status)} rounded class="px-3 py-1">{record.status}</Badge>
							</TableBodyCell>
							<TableBodyCell class="text-gray-700 dark:text-gray-300">
								{formatDate(record.paid_on)}
							</TableBodyCell>
							<TableBodyCell class="text-right">
								{#if record.status === 'Pending' || record.status === 'Overdue'}
									<div class="flex items-center justify-end gap-2">
										<Button 
											size="xs" 
											color="light"
											class="px-3 py-1.5"
											disabled={refreshingInvoiceId === record.id}
											on:click={() => refreshInvoice(record)}
										>
											{#if refreshingInvoiceId === record.id}
												<Spinner size="3" class="mr-1.5" />
											{:else}
												<RefreshOutline class="w-3.5 h-3.5 mr-1.5" />
											{/if}
											Refresh
										</Button>
										<Button 
											size="xs" 
											color="dark"
											class="px-4 py-1.5"
											on:click={() => openPaymentModal(record)}
										>
											<CreditCardOutline class="w-3.5 h-3.5 mr-1.5" />
											Pay
										</Button>
										<Button 
											size="xs" 
											color="light"
											class="px-3 py-1.5 text-xs"
											disabled={demoPayingInvoiceId === record.id}
											on:click={() => demoMarkAsPaid(record)}
										>
											{#if demoPayingInvoiceId === record.id}
												<Spinner size="3" class="mr-1" />
											{/if}
											Demo: Set as paid
										</Button>
									</div>
								{:else}
									<Button size="xs" color="light" class="px-3">View</Button>
								{/if}
							</TableBodyCell>
						</TableBodyRow>
					{/each}
				</TableBody>
			</Table>
		</div>
		
		<!-- Help Section -->
		<div class="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
			<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
				<div class="mb-4 sm:mb-0">
					<h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Need help with your invoices?</h4>
					<p class="text-gray-600 dark:text-gray-400">Our invoice help desk is available Monday-Friday, 9am-5pm</p>
				</div>
				<div class="flex items-center space-x-3">
					<Button color="light" size="sm">View FAQ</Button>
					<a href={supportUrl} target="_blank" rel="noopener noreferrer"><Button color="dark" size="sm">Contact Support</Button></a>
				</div>
			</div>
		</div>
	{:else}
		<Alert color="dark" class="mb-4">
			No invoice information available at this time.
		</Alert>
	{/if}
</div>

<!-- Payment Instructions Modal -->
<Modal bind:open={showPaymentModal} size="lg" class="w-full">
	<div slot="header" class="flex items-center gap-2">
		<CreditCardOutline class="w-5 h-5 text-gray-700 dark:text-gray-300" />
		<span class="text-lg font-semibold">Payment Instructions</span>
	</div>
	
	{#if paymentLoading}
		<div class="flex justify-center items-center py-12">
			<Spinner size="8" />
			<span class="ml-3 text-gray-600">Loading payment details...</span>
		</div>
	{:else if paymentInfo}
		<div class="space-y-6">
			<!-- Invoice Summary -->
			<div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
				<div class="grid grid-cols-2 gap-4 text-sm">
					<div>
						<span class="text-gray-500">Invoice ID:</span>
						<span class="ml-2 font-medium text-gray-900 dark:text-white">{paymentInfo.invoice_id}</span>
					</div>
					<div>
						<span class="text-gray-500">Amount Due:</span>
						<span class="ml-2 font-bold text-gray-900 dark:text-white">{paymentInfo.amount_due} {paymentInfo.currency}</span>
					</div>
				</div>
			</div>
			
			<!-- Payment Details -->
			<div class="space-y-4">
				<h4 class="font-semibold text-gray-900 dark:text-white">Transfer Details</h4>
				
				<div class="space-y-3">
					<div>
						<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Owner (Canister ID)</label>
						<div class="flex items-center gap-2">
							<code class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-sm break-all">{paymentInfo.owner}</code>
						</div>
					</div>
					
					<div>
						<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subaccount (Hex)</label>
						<div class="flex items-center gap-2">
							<code class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-xs break-all">{paymentInfo.subaccount}</code>
						</div>
					</div>
				</div>
			</div>
			
			<!-- ICW Command -->
			<div class="space-y-3">
				<h4 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
					</svg>
					Transfer using ICW CLI
				</h4>
				
				<div class="bg-gray-900 rounded-lg p-4 relative">
					<pre class="text-green-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">icw transfer {paymentInfo.amount_due} \{`\n`}  --to {paymentInfo.owner} \{`\n`}  --subaccount {paymentInfo.subaccount}</pre>
					<button 
						class="absolute top-2 right-2 p-2 rounded hover:bg-gray-700 transition-colors"
						on:click={() => copyCommand(`icw transfer ${paymentInfo.amount_due} --to ${paymentInfo.owner} --subaccount ${paymentInfo.subaccount}`)}
					>
						{#if copied}
							<svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
							</svg>
						{:else}
							<svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
							</svg>
						{/if}
					</button>
				</div>
				
				<p class="text-sm text-gray-500 dark:text-gray-400">
					Run this command in your terminal to transfer <strong>{paymentInfo.amount_due} {paymentInfo.currency}</strong> to this invoice.
				</p>
			</div>
			
			<!-- Help Text -->
			<div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm">
				<p class="text-gray-700 dark:text-gray-300">
					<strong>Need the ICW tool?</strong> Install it with: <code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">pip install icw</code>
				</p>
			</div>
		</div>
	{:else}
		<Alert color="red">Failed to load payment details. Please try again.</Alert>
	{/if}
	
	<div slot="footer" class="flex justify-end gap-3">
		<Button color="light" on:click={() => showPaymentModal = false}>Close</Button>
	</div>
</Modal>

<!-- Metadata Modal -->
<Modal bind:open={showMetadataModal} size="md" class="w-full">
	<div slot="header" class="flex items-center gap-2">
		<svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
		</svg>
		<span class="text-lg font-semibold">Invoice Metadata</span>
	</div>
	
	<div class="space-y-4">
		{#if selectedMetadata}
			<div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
				<pre class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words font-mono">{typeof selectedMetadata === 'object' ? JSON.stringify(selectedMetadata, null, 2) : selectedMetadata}</pre>
			</div>
		{:else}
			<p class="text-gray-500 dark:text-gray-400">No metadata available.</p>
		{/if}
	</div>
	
	<div slot="footer" class="flex justify-end gap-3">
		<Button color="light" on:click={() => showMetadataModal = false}>Close</Button>
	</div>
</Modal>
