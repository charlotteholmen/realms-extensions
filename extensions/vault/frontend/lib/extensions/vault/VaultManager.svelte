<script lang="ts">
import { onMount } from 'svelte';
import { backend } from '$lib/canisters';
import { _ } from 'svelte-i18n';

let balance = 0;
let balanceObject: any = null;
let allBalances: any[] = [];
let transactions: any[] = [];
let vaultStatus: any = null;
let loading = false;
let error = '';
let transferAmount = 0;
let transferTo = '';
let transferToSubaccount = '';
let transferFromSubaccount = '';
let activeTab: 'balance' | 'transactions' | 'transfer' | 'admin' = 'balance';
let currentPrincipal: string = '';
let canisterPrincipal: string = '';
let balancePagination: any = null;
let transferPagination: any = null;
let currentPage = 0;
const pageSize = 10;
let vaultPrincipal: string = '';
let lastRefreshTime: Date | null = null;
let copiedPrincipal: string = '';
let copiedTimestamp: string = '';
let vaultBalanceLoading: boolean = false;
let tokensLoaded: boolean = false;

// Ledger canister principals - loaded dynamically from Token entity
let LEDGER_CANISTERS: Record<string, {ledger: string, indexer: string, decimals: number, symbol: string, name: string}> = {};

// Selected tokens (checkboxes) - default all selected
let selectedTokens: Record<string, boolean> = {};

// Per-token vault balances
let tokenBalances: Record<string, number> = {};

// Selected token for transfer
let transferToken: string = '';

// Load tokens from Token entity
async function loadTokens() {
	try {
		const response = await backend.get_objects_paginated('Token', 0n, 100n, 'asc');
		if (response.success && response.data?.objectsListPaginated) {
			const tokens = response.data.objectsListPaginated.objects.map((objStr: string) => JSON.parse(objStr));
			
			// Build LEDGER_CANISTERS from Token entities
			LEDGER_CANISTERS = {};
			selectedTokens = {};
			tokenBalances = {};
			
			for (const token of tokens) {
				// DB serializes _prop_enabled / _prop_symbol; default enabled=true
				const enabled = token.enabled ?? token._prop_enabled ?? 'true';
				const symbol = token.symbol ?? token._prop_symbol ?? token.name;
				const ledger = token.ledger_canister_id ?? token.ledger ?? '';
				const indexer = token.indexer_canister_id ?? token.indexer ?? '';
				if (enabled === 'true' && symbol) {
					LEDGER_CANISTERS[symbol] = {
						ledger,
						indexer,
						decimals: token.decimals || 8,
						symbol,
						name: token.name
					};
					selectedTokens[symbol] = true;
					tokenBalances[symbol] = 0;
				}
			}
			
			// Set default transfer token to first available
			const tokenSymbols = Object.keys(LEDGER_CANISTERS);
			if (tokenSymbols.length > 0 && !transferToken) {
				transferToken = tokenSymbols[0];
			}
			
			tokensLoaded = true;
			console.log('Loaded tokens:', LEDGER_CANISTERS);
		}
	} catch (e: any) {
		console.error('Failed to load tokens:', e);
		// Tokens will remain empty, UI will show "No tokens configured"
	}
}

async function loadBalance() {
loading = true;
error = '';
try {
// Get current user's principal
if (!currentPrincipal) {
currentPrincipal = await backend.get_my_principal();
}

// Fetch all WalletBalance objects using get_objects_paginated
const response = await backend.get_objects_paginated('WalletBalance', 0n, 100n, 'asc');

if (response.success && response.data?.objectsListPaginated) {
const objectsData = response.data.objectsListPaginated;
balancePagination = objectsData.pagination;

// Parse each JSON string in the objects array
allBalances = objectsData.objects.map((objStr: string) => JSON.parse(objStr));

// Find the balance for the current user (WalletBalance uses 'principal' field)
balanceObject = allBalances.find(b => b.principal === currentPrincipal || b.id === currentPrincipal || b._id === currentPrincipal);
balance = balanceObject ? (balanceObject.amount || 0) : 0;
} else {
balance = 0;
balanceObject = null;
}
} catch (e: any) {
console.error('Failed to load balance:', e);
error = e.message || 'Failed to load balance';
} finally {
loading = false;
}
}

async function loadTransactions(page: number = currentPage) {
loading = true;
error = '';
try {
// Get vault principal (realm_backend canister ID)
if (!vaultPrincipal) {
try {
if (typeof backend.get_canister_id === 'function') {
const principalResult = await backend.get_canister_id();
vaultPrincipal = principalResult || '';
} else {
// Backend not yet deployed with get_canister_id method
vaultPrincipal = 'N/A (TODO)';
}
} catch (e) {
console.warn('Could not fetch vault principal:', e);
vaultPrincipal = 'N/A (TODO)';
}
}

// Fetch WalletTransfer objects with pagination
const response = await backend.get_objects_paginated(
'WalletTransfer',
BigInt(page),
BigInt(pageSize),
'desc' // Most recent first
);

console.log('WalletTransfer response:', response);

if (response.success && response.data?.objectsListPaginated) {
const objectsData = response.data.objectsListPaginated;
transferPagination = objectsData.pagination;

// Parse each JSON string in the objects array
const parsed = objectsData.objects.map((objStr: string) => JSON.parse(objStr));
transactions = [...parsed]; // Force new array reference for Svelte reactivity
} else {
console.warn('No objectsListPaginated in WalletTransfer response');
transactions = [];
}
} catch (e: any) {
console.error('Failed to load transactions:', e);
error = e.message || 'Failed to load transactions';
} finally {
loading = false;
}
}

async function loadVaultBalance(token: string = 'REALMS') {
try {
// Call the vault extension's get_vault_balance function with token
const result = await backend.extension_sync_call({
extension_name: 'vault',
function_name: 'get_vault_balance',
args: JSON.stringify({ token })
});

// Parse the response
let response;
try {
response = JSON.parse(result.response);
} catch {
console.error('Failed to parse vault balance response');
return;
}

// Update vault balance and principal from response
if (response.success && response.data?.Balance) {
tokenBalances[token] = response.data.Balance.amount || 0;
tokenBalances = tokenBalances; // Trigger reactivity
vaultPrincipal = response.data.Balance.principal_id || '';
}
} catch (e: any) {
console.error('Failed to load vault balance:', e);
}
}

async function loadAllVaultBalances() {
for (const token of Object.keys(LEDGER_CANISTERS)) {
if (selectedTokens[token]) {
await loadVaultBalance(token);
}
}
}

async function refreshVaultBalance(token: string) {
vaultBalanceLoading = true;
error = '';
try {
// Use extension_async_call to refresh vault balance from ledger
const result = await backend.extension_async_call({
extension_name: 'vault',
function_name: 'refresh_vault_balance',
args: JSON.stringify({ token })
});

// Parse the inner JSON response from the extension
let innerResponse;
try {
innerResponse = JSON.parse(result.response);
} catch {
error = result.response || 'Refresh failed';
return;
}

// Check the inner success field from the extension
if (innerResponse.success) {
// Update vault balance from response
if (innerResponse.data?.Balance) {
tokenBalances[token] = innerResponse.data.Balance.amount || 0;
tokenBalances = tokenBalances; // Trigger reactivity
}
lastRefreshTime = new Date();
} else {
error = innerResponse.error || 'Failed to refresh vault balance';
}
} catch (e: any) {
console.error('Failed to refresh vault balance:', e);
error = e.message || 'Failed to refresh vault balance';
} finally {
vaultBalanceLoading = false;
}
}

async function refreshAllVaultBalances() {
vaultBalanceLoading = true;
for (const token of Object.keys(LEDGER_CANISTERS)) {
if (selectedTokens[token]) {
await refreshVaultBalance(token);
}
}
vaultBalanceLoading = false;
lastRefreshTime = new Date();
}

async function refreshVault() {
loading = true;
error = '';
try {
// Use extension_async_call for the refresh action
const result = await backend.extension_async_call({
extension_name: 'vault',
function_name: 'refresh',
args: '{}'
});

// Parse the inner JSON response from the extension
let innerResponse;
try {
innerResponse = JSON.parse(result.response);
} catch {
// If parsing fails, use the raw response
error = result.response || 'Refresh failed';
return;
}

// Check the inner success field from the extension
if (innerResponse.success) {
// Update last refresh time
lastRefreshTime = new Date();
// Reload data after successful refresh
await loadBalance();
await loadAllVaultBalances();
await loadTransactions(0); // Reset to first page
} else {
error = innerResponse.error || 'Refresh failed';
}
} catch (e: any) {
console.error('Failed to refresh vault:', e);
error = e.message || 'Failed to refresh vault';
} finally {
loading = false;
}
}

async function performTransfer() {
if (!transferTo || transferAmount <= 0) {
error = 'Please enter valid recipient and amount';
return;
}

loading = true;
error = '';
try {
// Build transfer args with optional subaccounts
const transferArgs: any = {
to_principal: transferTo,
amount: transferAmount
};
if (transferToSubaccount.trim()) {
transferArgs.to_subaccount = transferToSubaccount.trim();
}
if (transferFromSubaccount.trim()) {
transferArgs.from_subaccount = transferFromSubaccount.trim();
}

// Use extension_async_call for the transfer action
const result = await backend.extension_async_call({
extension_name: 'vault',
function_name: 'transfer',
args: JSON.stringify(transferArgs)
});

// Parse the inner JSON response from the extension
let innerResponse;
try {
innerResponse = JSON.parse(result.response);
} catch {
// If parsing fails, use the raw response
error = result.response || 'Transfer failed';
return;
}

// Check the inner success field from the extension
if (innerResponse.success) {
transferTo = '';
transferAmount = 0;
await loadBalance();
await loadTransactions();
} else {
error = innerResponse.error || 'Transfer failed';
}
} catch (e: any) {
console.error('Failed to perform transfer:', e);
error = e.message || 'Failed to perform transfer';
} finally {
loading = false;
}
}

// Helper function to format time ago
function timeAgo(date: Date): string {
const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
if (seconds < 60) return `${seconds}s ago`;
const minutes = Math.floor(seconds / 60);
if (minutes < 60) return `${minutes}m ago`;
const hours = Math.floor(minutes / 60);
if (hours < 24) return `${hours}h ago`;
const days = Math.floor(hours / 24);
return `${days}d ago`;
}

// Helper function to copy text to clipboard
async function copyToClipboard(text: string) {
try {
await navigator.clipboard.writeText(text);
copiedPrincipal = text;
setTimeout(() => copiedPrincipal = '', 2000);
} catch (e) {
console.error('Failed to copy:', e);
}
}

// Helper function to copy timestamp
async function copyTimestamp(timestamp: string) {
try {
await navigator.clipboard.writeText(timestamp);
copiedTimestamp = timestamp;
setTimeout(() => copiedTimestamp = '', 2000);
} catch (e) {
console.error('Failed to copy:', e);
}
}

// Convert nanosecond timestamp to Date
function parseTimestamp(timestamp: string | number): Date {
const ts = String(timestamp);
// Check if timestamp is in ISO format (contains 'T', '-', or ':')
if (ts.includes('T') || ts.includes('-') || ts.includes(':')) {
// Parse as ISO format timestamp
return new Date(ts);
}

// Otherwise, parse as nanosecond timestamp
try {
const nanos = BigInt(ts);
const millis = Number(nanos / BigInt(1000000));
return new Date(millis);
} catch (e) {
// If parsing fails, return current date as fallback
console.error('Failed to parse timestamp:', ts, e);
return new Date();
}
}

// Pagination helpers
async function goToPage(page: number) {
currentPage = page;
await loadTransactions(page);
}

async function nextPage() {
if (transferPagination && currentPage < Number(transferPagination.total_pages) - 1) {
await goToPage(currentPage + 1);
}
}

async function previousPage() {
if (currentPage > 0) {
await goToPage(currentPage - 1);
}
}

onMount(async () => {
await loadTokens();  // Load tokens first from Token entity
await loadBalance();
await loadAllVaultBalances();
await loadTransactions(0);
});
</script>

<div class="p-6 space-y-6 mb-64">
<div class="space-y-4">
<div class="flex justify-between items-center">
<h1 class="text-3xl font-bold">{$_('extensions.vault.title')}</h1>
<button
on:click={refreshAllVaultBalances}
disabled={loading || vaultBalanceLoading}
class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
>
{#if loading || vaultBalanceLoading}
<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>
{/if}
{loading || vaultBalanceLoading ? 'Refreshing...' : 'Refresh'}
</button>
</div>

<!-- Vault Balances Card -->
<div class="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-6">
<h3 class="text-sm font-semibold text-blue-800 mb-4">{$_('extensions.vault.vault_balance.title')}</h3>
<div class="space-y-3">
{#each Object.keys(LEDGER_CANISTERS) as token}
{#if selectedTokens[token]}
<div class="flex items-center justify-between bg-white/50 rounded-lg p-3">
<div class="flex items-center gap-3">
<span class="text-lg font-semibold text-blue-900">{LEDGER_CANISTERS[token].symbol}</span>
</div>
<div class="text-right">
<div class="text-2xl font-bold text-blue-900">
{(tokenBalances[token] / Math.pow(10, LEDGER_CANISTERS[token].decimals)).toFixed(LEDGER_CANISTERS[token].decimals)}
</div>
<div class="text-xs text-blue-600">
{tokenBalances[token].toLocaleString()} {$_('extensions.vault.vault_balance.units')}
</div>
</div>
</div>
{/if}
{/each}
{#if !Object.values(selectedTokens).some(v => v)}
<div class="text-sm text-gray-500 italic">{$_('extensions.vault.vault_balance.no_tokens_selected')}</div>
{/if}
</div>
<div class="mt-3 text-xs text-blue-600">
<span class="font-medium">{$_('extensions.vault.vault_balance.description')}</span>
</div>
</div>

<!-- Vault Info Card -->
<div class="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
<div class="flex items-center justify-between">
<div>
<span class="text-sm font-medium text-gray-600">Vault Principal:</span>
<button
on:click={() => copyToClipboard(vaultPrincipal)}
class="ml-2 font-mono text-xs text-blue-600 hover:text-blue-800 underline"
title="Click to copy"
>
{vaultPrincipal || 'Loading...'}
</button>
{#if copiedPrincipal === vaultPrincipal}
<span class="ml-2 text-xs text-green-600">✓ Copied!</span>
{/if}
</div>
</div>
{#if lastRefreshTime}
<div>
<span class="text-sm font-medium text-gray-600">Last Refresh:</span>
<span class="ml-2 text-sm text-gray-700">
{lastRefreshTime.toLocaleString()} ({timeAgo(lastRefreshTime)})
</span>
</div>
{/if}
</div>
</div>

<!-- Token Selector (Checkboxes) -->
<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
<h3 class="text-sm font-semibold text-gray-700">{$_('extensions.vault.token_selector.title')}</h3>
<div class="flex flex-wrap gap-4">
{#each Object.keys(LEDGER_CANISTERS) as token}
<label class="flex items-center gap-2 cursor-pointer">
<input
type="checkbox"
bind:checked={selectedTokens[token]}
class="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
/>
<span class="text-sm font-medium text-gray-700">{LEDGER_CANISTERS[token].symbol}</span>
</label>
{/each}
</div>
</div>

<!-- Ledger Canisters Info Card -->
<div class="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
<h3 class="text-sm font-semibold text-gray-700">{$_('extensions.vault.ledger_canisters.title')}</h3>
<div class="space-y-3">
{#each Object.keys(LEDGER_CANISTERS) as token}
{#if selectedTokens[token]}
<div class="border-b border-gray-200 pb-2 last:border-b-0 last:pb-0">
<div class="text-xs font-semibold text-gray-500 mb-1">{LEDGER_CANISTERS[token].symbol}</div>
<div class="flex items-center justify-between text-xs">
<span class="text-gray-600">Ledger:</span>
<button
on:click={() => copyToClipboard(LEDGER_CANISTERS[token].ledger)}
class="font-mono text-blue-600 hover:text-blue-800 underline"
title={$_('extensions.vault.ledger_canisters.copy_tooltip')}
>
{LEDGER_CANISTERS[token].ledger}
</button>
</div>
<div class="flex items-center justify-between text-xs mt-1">
<span class="text-gray-600">Indexer:</span>
<button
on:click={() => copyToClipboard(LEDGER_CANISTERS[token].indexer)}
class="font-mono text-blue-600 hover:text-blue-800 underline"
title={$_('extensions.vault.ledger_canisters.copy_tooltip')}
>
{LEDGER_CANISTERS[token].indexer}
</button>
</div>
</div>
{/if}
{/each}
</div>
</div>

{#if error}
<div class="p-4 bg-red-50 border border-red-200 rounded text-red-800">
{error}
</div>
{/if}

<!-- Tabs -->
<div class="flex space-x-4 border-b">
<button
on:click={() => activeTab = 'balance'}
class="px-4 py-2 {activeTab === 'balance' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}"
>
Balance
</button>
<button
on:click={() => activeTab = 'transactions'}
class="px-4 py-2 {activeTab === 'transactions' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}"
>
Transactions
</button>
<button
on:click={() => activeTab = 'transfer'}
class="px-4 py-2 {activeTab === 'transfer' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}"
>
Transfer
</button>
<button
on:click={() => activeTab = 'admin'}
class="px-4 py-2 {activeTab === 'admin' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}"
>
Admin
</button>
</div>

<!-- Tab Content -->
<div class="mt-6">
{#if activeTab === 'balance'}
<div class="bg-white rounded-lg shadow p-6">
<h2 class="text-xl font-semibold mb-4">Your Balance</h2>
<div class="space-y-3">
{#each Object.keys(LEDGER_CANISTERS) as token}
{#if selectedTokens[token]}
<div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
<span class="text-lg font-semibold text-gray-700">{LEDGER_CANISTERS[token].symbol}</span>
<div class="text-right">
<div class="text-2xl font-bold text-blue-600">
{(balance / Math.pow(10, LEDGER_CANISTERS[token].decimals)).toFixed(LEDGER_CANISTERS[token].decimals)}
</div>
<div class="text-xs text-gray-500">{balance.toLocaleString()} units</div>
</div>
</div>
{/if}
{/each}
{#if !Object.values(selectedTokens).some(v => v)}
<div class="text-sm text-gray-500 italic">Select at least one token to view balances</div>
{/if}
</div>
{#if balanceObject}
<div class="mt-4 p-4 bg-gray-50 rounded">
<p class="text-sm text-gray-600"><span class="font-medium">Principal:</span> <span class="font-mono text-xs">{balanceObject._id || balanceObject.id}</span></p>
</div>
{/if}
{#if balancePagination}
<div class="mt-3 text-xs text-gray-500">
Showing {allBalances.length} balance(s) (Page {Number(balancePagination.page_num) + 1} of {balancePagination.total_pages})
</div>
{/if}
</div>
{:else if activeTab === 'transactions'}
<div class="bg-white rounded-lg shadow overflow-hidden">
<h2 class="text-xl font-semibold p-6 border-b">Vault Transaction History</h2>
<div class="overflow-x-auto">
<table class="w-full">
<thead class="bg-gray-50">
<tr>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Token</th>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">From</th>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">To</th>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">When</th>
<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-200">
{#each transactions as tx (tx._id || tx.tx_id)}
<tr>
<td class="px-6 py-4 text-sm">{tx.tx_id || tx._id}</td>
<td class="px-6 py-4 text-sm">
<span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-medium">
{tx.token || '—'}
</span>
</td>
<td class="px-6 py-4 text-sm font-mono text-xs">
{#if tx.principal_from}
<button
on:click={() => copyToClipboard(tx.principal_from)}
class="text-blue-600 hover:text-blue-800 hover:underline text-left"
title="Click to copy full principal"
>
{tx.principal_from.substring(0, 20)}...
</button>
{#if copiedPrincipal === tx.principal_from}
<span class="ml-1 text-xs text-green-600">✓</span>
{/if}
{:else}
<span class="text-gray-400">N/A</span>
{/if}
</td>
<td class="px-6 py-4 text-sm font-mono text-xs">
{#if tx.principal_to}
<button
on:click={() => copyToClipboard(tx.principal_to)}
class="text-blue-600 hover:text-blue-800 hover:underline text-left"
title="Click to copy full principal"
>
{tx.principal_to.substring(0, 20)}...
</button>
{#if copiedPrincipal === tx.principal_to}
<span class="ml-1 text-xs text-green-600">✓</span>
{/if}
{:else}
<span class="text-gray-400">N/A</span>
{/if}
</td>
<td class="px-6 py-4 text-sm">{(tx.amount || 0).toLocaleString()}</td>
<td class="px-6 py-4 text-sm">
{#if tx.timestamp}
{@const txDate = parseTimestamp(tx.timestamp)}
<button
on:click={() => copyTimestamp(txDate.toLocaleString())}
class="text-gray-700 hover:text-blue-600 hover:underline text-left"
title="Click to copy: {txDate.toLocaleString()}"
>
{timeAgo(txDate)}
</button>
{#if copiedTimestamp === txDate.toLocaleString()}
<span class="ml-1 text-xs text-green-600">✓</span>
{/if}
{:else}
<span class="text-gray-400">N/A</span>
{/if}
</td>
<td class="px-6 py-4 text-sm"><span class="px-2 py-1 bg-blue-100 text-blue-800 rounded">{tx.kind || 'transfer'}</span></td>
</tr>
{:else}
<tr>
<td colspan="7" class="px-6 py-4 text-center text-gray-500">No transactions found</td>
</tr>
{/each}
</tbody>
</table>
</div>
{#if transferPagination}
<div class="p-4 border-t space-y-3">
<div class="text-sm text-gray-600">
Showing {transactions.length} of {transferPagination.total_items_count} transfers
(Page {currentPage + 1} of {transferPagination.total_pages})
</div>
<!-- Pagination Controls -->
<div class="flex items-center justify-center space-x-2">
<button
on:click={previousPage}
disabled={currentPage === 0}
class="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
>
← Previous
</button>
{#each Array(Number(transferPagination.total_pages)) as _, i}
{#if i < 10 || i === currentPage || Math.abs(i - currentPage) < 2 || i >= Number(transferPagination.total_pages) - 2}
<button
on:click={() => goToPage(i)}
class="px-3 py-1 border rounded {currentPage === i ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'}"
>
{i + 1}
</button>
{:else if i === 10 || (i === currentPage - 2 && currentPage > 10) || (i === currentPage + 2 && currentPage < Number(transferPagination.total_pages) - 3)}
<span class="px-2">...</span>
{/if}
{/each}
<button
on:click={nextPage}
disabled={currentPage >= Number(transferPagination.total_pages) - 1}
class="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
>
Next →
</button>
</div>
</div>
{/if}
</div>
{:else if activeTab === 'transfer'}
<div class="bg-white rounded-lg shadow p-6">
<h2 class="text-xl font-semibold mb-4">Transfer Tokens (Admin Only)</h2>
<form on:submit|preventDefault={performTransfer} class="space-y-4">
<div>
<label for="transfer-token" class="block text-sm font-medium text-gray-700 mb-2">
Token
</label>
<select
id="transfer-token"
bind:value={transferToken}
class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
>
{#each Object.keys(LEDGER_CANISTERS) as token}
<option value={token}>{LEDGER_CANISTERS[token].symbol}</option>
{/each}
</select>
</div>
<div>
<label for="transfer-recipient" class="block text-sm font-medium text-gray-700 mb-2">
Recipient Principal
</label>
<input
id="transfer-recipient"
type="text"
bind:value={transferTo}
placeholder="xxxxx-xxxxx-xxxxx-xxxxx-xxx"
class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
/>
</div>
<div>
<label for="transfer-amount" class="block text-sm font-medium text-gray-700 mb-2">
Amount ({LEDGER_CANISTERS[transferToken]?.symbol || transferToken || ''} units)
</label>
<input
id="transfer-amount"
type="number"
bind:value={transferAmount}
placeholder="100000000"
class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
/>
</div>
<div>
<label for="transfer-to-subaccount" class="block text-sm font-medium text-gray-700 mb-2">
To Subaccount (optional, 64-char hex)
</label>
<input
id="transfer-to-subaccount"
type="text"
bind:value={transferToSubaccount}
placeholder="0000000000000000000000000000000000000000000000000000000000000000"
class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 font-mono text-sm"
/>
</div>
<div>
<label for="transfer-from-subaccount" class="block text-sm font-medium text-gray-700 mb-2">
From Subaccount (optional, 64-char hex)
</label>
<input
id="transfer-from-subaccount"
type="text"
bind:value={transferFromSubaccount}
placeholder="0000000000000000000000000000000000000000000000000000000000000000"
class="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 font-mono text-sm"
/>
</div>
<button
type="submit"
disabled={loading || !transferTo || transferAmount <= 0}
class="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
>
{loading ? 'Processing...' : 'Transfer'}
</button>
</form>
</div>
{:else if activeTab === 'admin'}
<div class="bg-white rounded-lg shadow p-6">
<h2 class="text-xl font-semibold mb-4">Vault Admin</h2>
<div class="space-y-4">
<div>
<h3 class="font-semibold text-gray-700">All Balances in System ({allBalances.length})</h3>
{#if allBalances.length > 0}
<div class="mt-2 space-y-2">
{#each allBalances as bal}
<div class="p-3 bg-gray-50 rounded">
<div class="font-mono text-xs mb-1">Principal: {bal.principal || bal._id || bal.id}</div>
<div class="text-sm font-semibold">{(bal.amount || 0).toLocaleString()} units</div>
{#if bal.token}
<div class="text-xs text-gray-500 mt-1">Token: {bal.token}</div>
{/if}
</div>
{/each}
</div>
{:else}
<p class="text-gray-500 mt-2">No balances found in system</p>
{/if}
</div>
<div class="mt-6">
<h3 class="font-semibold text-gray-700">All Transfers in System</h3>
{#if transferPagination}
<p class="text-sm text-gray-600 mt-2">Total transfers: {transferPagination.total_items_count}</p>
{:else}
<p class="text-gray-500 mt-2">No transfer data available</p>
{/if}
</div>
</div>
</div>
{/if}
</div>
</div>
