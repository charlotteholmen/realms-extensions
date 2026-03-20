<script lang="ts">
	import { onMount } from 'svelte';
	import { Spinner, Alert, Badge, Button, Modal } from 'flowbite-svelte';
	import { CreditCardOutline, RefreshOutline } from 'flowbite-svelte-icons';
	import { backend } from '$lib/canisters';
	import { realmName } from '$lib/stores/realmInfo';
	import { CONFIG } from '$lib/config.js';
	
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
	let copiedAgo = false;

	const AGO_PER_BTC = 2.0;
	
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
	
	// Format date for display
	function formatDate(dateStr) {
		if (!dateStr) return 'N/A';
		const date = new Date(dateStr);
		if (isNaN(date.getTime()) || date.getFullYear() < 2000) return 'N/A';
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'short', 
			day: 'numeric' 
		});
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
	
	// Copy to clipboard with fallback for IC Permissions-Policy
	function clipboardCopy(text) {
		try {
			const ta = document.createElement('textarea');
			ta.value = text;
			ta.style.position = 'fixed';
			ta.style.left = '-9999px';
			document.body.appendChild(ta);
			ta.select();
			document.execCommand('copy');
			document.body.removeChild(ta);
			return true;
		} catch (e) {
			console.error('Failed to copy:', e);
			return false;
		}
	}

	function copyCommand(text) {
		if (clipboardCopy(text)) {
			copied = true;
			setTimeout(() => { copied = false; }, 2000);
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
	<!-- Header -->
	<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
		<div>
			<h2 class="text-xl font-bold text-gray-900 dark:text-white">Invoices</h2>
			<p class="text-gray-500 dark:text-gray-400 mt-1 text-sm">Manage your invoices and payment records</p>
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
		<!-- Invoice Records -->
		<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
			{#if invoiceData.invoices && invoiceData.invoices.length > 0}
				<div class="overflow-x-auto">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th class="px-4 py-3">Description</th>
								<th class="px-4 py-3">Amount</th>
								<th class="px-4 py-3">Currency</th>
								<th class="px-4 py-3">Status</th>
								<th class="px-4 py-3">Actions</th>
							</tr>
						</thead>
						<tbody>
							{#each invoiceData.invoices as record}
								<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
									<td class="px-4 py-3">
										<div class="font-medium text-gray-900 dark:text-white text-sm">
											{record.metadata || 'Invoice'}
										</div>
									</td>
									<td class="px-4 py-3 font-semibold text-gray-900 dark:text-white">
										{record.amount}
									</td>
									<td class="px-4 py-3 text-gray-700 dark:text-gray-300">
										{record.currency || 'ckBTC'}
									</td>
									<td class="px-4 py-3">
										<Badge color={getStatusColor(record.status)} rounded class="px-2.5 py-0.5">{record.status}</Badge>
									</td>
									<td class="px-4 py-3">
										{#if record.status === 'Pending' || record.status === 'Overdue'}
											<div class="flex items-center gap-2">
												<Button 
													size="xs" 
													color="dark"
													class="px-3 py-1"
													on:click={() => openPaymentModal(record)}
												>
													Pay
												</Button>
												<Button 
													size="xs" 
													color="light"
													class="px-2 py-1"
													disabled={refreshingInvoiceId === record.id}
													on:click={() => refreshInvoice(record)}
												>
													{#if refreshingInvoiceId === record.id}
														<Spinner size="3" />
													{:else}
														<RefreshOutline class="w-3 h-3" />
													{/if}
												</Button>
												<Button 
													size="xs" 
													color="light"
													class="px-2 py-1 text-xs"
													disabled={demoPayingInvoiceId === record.id}
													on:click={() => demoMarkAsPaid(record)}
												>
													{#if demoPayingInvoiceId === record.id}
														<Spinner size="3" />
													{:else}
														Demo Pay
													{/if}
												</Button>
											</div>
										{:else}
											<span class="text-xs text-gray-400">{formatDate(record.paid_on)}</span>
										{/if}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{:else}
				<div class="p-6 text-center text-gray-500 dark:text-gray-400">
					No invoices yet.
				</div>
			{/if}
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
					<pre class="text-green-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">icw --token ckbtc transfer \{`\n`}  {paymentInfo.owner} {paymentInfo.amount_due} \{`\n`}  --subaccount {paymentInfo.subaccount}</pre>
					<button 
						class="absolute top-2 right-2 p-2 rounded hover:bg-gray-700 transition-colors"
						on:click={() => copyCommand(`icw --token ckbtc transfer ${paymentInfo.owner} ${paymentInfo.amount_due} --subaccount ${paymentInfo.subaccount}`)}
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

			<!-- ICW Command (AGO) -->
			<div class="space-y-3">
				<h4 class="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
					</svg>
					Or pay with AGO tokens
				</h4>
				
				<div class="bg-gray-900 rounded-lg p-4 relative">
					<pre class="text-green-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">icw transfer \{`\n`}  {paymentInfo.owner} {paymentInfo.amount_due * AGO_PER_BTC} \{`\n`}  --subaccount {paymentInfo.subaccount} \{`\n`}  --ledger {CONFIG.token_backend_canister_id}</pre>
					<button 
						class="absolute top-2 right-2 p-2 rounded hover:bg-gray-700 transition-colors"
						on:click={() => { if (clipboardCopy(`icw transfer ${paymentInfo.owner} ${paymentInfo.amount_due * AGO_PER_BTC} --subaccount ${paymentInfo.subaccount} --ledger ${CONFIG.token_backend_canister_id}`)) { copiedAgo = true; setTimeout(() => { copiedAgo = false; }, 2000); } }}
					>
						{#if copiedAgo}
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
					Run this command to transfer <strong>{paymentInfo.amount_due * AGO_PER_BTC} AGO</strong> to this invoice.
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
