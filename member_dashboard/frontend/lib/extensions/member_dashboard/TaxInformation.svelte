<script lang="ts">
	import { onMount } from 'svelte';
	import { Card, Spinner, Alert, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Badge, Button, Tooltip } from 'flowbite-svelte';
	import { DollarOutline, CheckCircleOutline, ClockOutline, ExclamationCircleOutline, DownloadOutline, CreditCardOutline } from 'flowbite-svelte-icons';
	import { backend } from '$lib/canisters';
	
	// Props
	export let userId: string;
	
	// Component state
	let loading = true;
	let error = '';
	let taxData = null;
	
	// Calculate percentages for the distribution bar
	$: totalAmount = taxData ? (taxData.summary.total_paid + taxData.summary.total_pending + taxData.summary.total_overdue) : 0;
	$: paidPercentage = totalAmount > 0 ? (taxData.summary.total_paid / totalAmount) * 100 : 0;
	$: pendingPercentage = totalAmount > 0 ? (taxData.summary.total_pending / totalAmount) * 100 : 0;
	$: overduePercentage = totalAmount > 0 ? (taxData.summary.total_overdue / totalAmount) * 100 : 0;
	
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
	
	// Get tax information for the user
	async function getTaxInformation() {
		try {
			// Prepare call parameters
			const callParams = { 
				user_id: userId
			};
			
			// Log the request details
			console.log('Calling get_tax_information with parameters:', callParams);
			
			// Use the extension_async_call API method
			const response = await backend.extension_sync_call({
				extension_name: "member_dashboard",
				function_name: "get_tax_information",
				args: JSON.stringify(callParams)
			});
			
			console.log('Tax information response:', response);
			
			if (response.success) {
				// Parse the JSON response
				const data = JSON.parse(response.response);
				console.log('Parsed tax data:', data);
				
				if (data.success) {
					// Handle successful response
					taxData = data.data;
					console.log('Tax data set:', taxData);
				} else {
					// Handle error
					error = `Failed to get tax information: ${data.error || 'Unknown error'}`;
					console.error(error);
				}
			} else {
				error = `Failed to get tax information: ${response.response}`;
				console.error(error);
			}
		} catch (err) {
			console.error('Error fetching tax information:', err);
			error = `Error fetching tax information: ${err.message || err}`;
		} finally {
			loading = false;
		}
	}
	
	// Initialize component
	onMount(async () => {
		await getTaxInformation();
	});
</script>

<div class="w-full">
	<!-- Header with Actions -->
	<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
		<div>
			<h3 class="text-2xl font-bold text-gray-900 dark:text-white">Tax Overview</h3>
			<p class="text-gray-500 dark:text-gray-400 mt-1">Manage your tax payments and records</p>
		</div>
		<div class="flex items-center space-x-3 mt-4 sm:mt-0">
			<Button color="light" size="sm" class="flex items-center">
				<DownloadOutline class="w-4 h-4 mr-2" />
				Download Statement
			</Button>
			<Button color="blue" size="sm" class="flex items-center">
				<CreditCardOutline class="w-4 h-4 mr-2" />
				Pay Now
			</Button>
		</div>
	</div>
	
	{#if loading}
		<div class="flex flex-col justify-center items-center p-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
			<Spinner size="10" />
			<p class="mt-4 text-gray-500 dark:text-gray-400">Loading tax information...</p>
		</div>
	{:else if error}
		<Alert color="red" class="mb-4 rounded-xl">
			<span class="font-medium">Error:</span> {error}
		</Alert>
	{:else if taxData}
		<!-- Payment Distribution Visual -->
		<div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700">
			<div class="flex items-center justify-between mb-4">
				<h4 class="text-lg font-semibold text-gray-900 dark:text-white">Payment Distribution</h4>
				<span class="text-sm text-gray-500 dark:text-gray-400">Total: {formatCurrency(totalAmount)}</span>
			</div>
			
			<!-- Visual Progress Bar -->
			<div class="h-4 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex mb-4">
				{#if paidPercentage > 0}
					<div class="bg-emerald-500 h-full transition-all duration-500" style="width: {paidPercentage}%"></div>
				{/if}
				{#if pendingPercentage > 0}
					<div class="bg-amber-500 h-full transition-all duration-500" style="width: {pendingPercentage}%"></div>
				{/if}
				{#if overduePercentage > 0}
					<div class="bg-red-500 h-full transition-all duration-500" style="width: {overduePercentage}%"></div>
				{/if}
			</div>
			
			<!-- Legend Cards -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<!-- Paid -->
				<div class="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
					<div class="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-3">
						<CheckCircleOutline class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
					</div>
					<div class="flex-1">
						<p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Paid</p>
						<p class="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(taxData.summary.total_paid)}</p>
					</div>
					<div class="text-right">
						<span class="text-sm font-medium text-emerald-600 dark:text-emerald-400">{paidPercentage.toFixed(0)}%</span>
					</div>
				</div>
				
				<!-- Pending -->
				<div class="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
					<div class="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg mr-3">
						<ClockOutline class="w-5 h-5 text-amber-600 dark:text-amber-400" />
					</div>
					<div class="flex-1">
						<p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Pending</p>
						<p class="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(taxData.summary.total_pending)}</p>
					</div>
					<div class="text-right">
						<span class="text-sm font-medium text-amber-600 dark:text-amber-400">{pendingPercentage.toFixed(0)}%</span>
					</div>
				</div>
				
				<!-- Overdue -->
				<div class="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 {taxData.summary.total_overdue > 0 ? 'ring-2 ring-red-200 dark:ring-red-900' : ''}">
					<div class="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3">
						<ExclamationCircleOutline class="w-5 h-5 text-red-600 dark:text-red-400" />
					</div>
					<div class="flex-1">
						<p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Overdue</p>
						<p class="text-xl font-bold text-gray-900 dark:text-white">{formatCurrency(taxData.summary.total_overdue)}</p>
					</div>
					<div class="text-right">
						<span class="text-sm font-medium text-red-600 dark:text-red-400">{overduePercentage.toFixed(0)}%</span>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Tax Records Table -->
		<div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
			<div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
				<h4 class="text-lg font-semibold text-gray-900 dark:text-white">Recent Tax Records</h4>
			</div>
			<Table hoverable={true}>
				<TableHead class="bg-gray-50 dark:bg-gray-900">
					<TableHeadCell class="font-semibold">Tax Type</TableHeadCell>
					<TableHeadCell class="font-semibold">Period</TableHeadCell>
					<TableHeadCell class="font-semibold">Amount</TableHeadCell>
					<TableHeadCell class="font-semibold">Due Date</TableHeadCell>
					<TableHeadCell class="font-semibold">Status</TableHeadCell>
					<TableHeadCell class="font-semibold text-right">Action</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each taxData.tax_records as record}
						<TableBodyRow class="hover:bg-gray-50 dark:hover:bg-gray-700/50">
							<TableBodyCell>
								<div class="font-medium text-gray-900 dark:text-white">{record.tax_type}</div>
								<div class="text-sm text-gray-500 dark:text-gray-400">{record.description}</div>
							</TableBodyCell>
							<TableBodyCell class="text-gray-700 dark:text-gray-300">
								{record.period}
							</TableBodyCell>
							<TableBodyCell class="font-semibold text-gray-900 dark:text-white">
								{formatCurrency(record.amount)}
							</TableBodyCell>
							<TableBodyCell class="text-gray-700 dark:text-gray-300">
								{formatDate(record.due_date)}
							</TableBodyCell>
							<TableBodyCell>
								<Badge color={getStatusColor(record.status)} rounded class="px-3 py-1">{record.status}</Badge>
							</TableBodyCell>
							<TableBodyCell class="text-right">
								{#if record.status === 'Pending' || record.status === 'Overdue'}
									<Button size="xs" color="blue" class="px-3">Pay</Button>
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
		<div class="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
			<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
				<div class="mb-4 sm:mb-0">
					<h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Need help with your taxes?</h4>
					<p class="text-gray-600 dark:text-gray-400">Our tax help desk is available Monday-Friday, 9am-5pm</p>
				</div>
				<div class="flex items-center space-x-3">
					<Button color="light" size="sm">View FAQ</Button>
					<Button color="blue" size="sm">Contact Support</Button>
				</div>
			</div>
		</div>
	{:else}
		<Alert color="blue" class="mb-4">
			No tax information available at this time.
		</Alert>
	{/if}
</div>
