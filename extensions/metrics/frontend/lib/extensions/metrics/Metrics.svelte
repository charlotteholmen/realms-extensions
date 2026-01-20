<script>
  import TaxAllocationChart from './TaxAllocationChart.svelte';
  import AssetPortfolioChart from './AssetPortfolioChart.svelte';
  import TaxContributionTreemap from './TaxContributionTreemap.svelte';
  import MonthlyCashFlow from './MonthlyCashFlow.svelte';
  import FinancialStatements from './FinancialStatements.svelte';
  import { _ } from 'svelte-i18n';
  import SafeText from '$lib/components/SafeText.svelte';
  import { onMount } from 'svelte';
  import { backend } from '$lib/canisters';

  // Active tab for switching between views
  let activeTab = 'accounting';
  
  // Data loading state
  let loading = true;
  let error = null;
  
  // Real data from backend
  let budgets = [];
  let ledgerEntries = [];
  let funds = [];

  // Fetch data from backend
  async function fetchData() {
    loading = true;
    error = null;
    try {
      // Fetch budgets
      const budgetResponse = await backend.get_objects_paginated('Budget', 0n, 100n, 'asc');
      if (budgetResponse.success && budgetResponse.data?.objectsListPaginated) {
        budgets = budgetResponse.data.objectsListPaginated.objects.map(objStr => JSON.parse(objStr));
      }
      
      // Fetch ledger entries
      const ledgerResponse = await backend.get_objects_paginated('LedgerEntry', 0n, 500n, 'desc');
      if (ledgerResponse.success && ledgerResponse.data?.objectsListPaginated) {
        ledgerEntries = ledgerResponse.data.objectsListPaginated.objects.map(objStr => JSON.parse(objStr));
      }
      
      // Fetch funds
      const fundResponse = await backend.get_objects_paginated('Fund', 0n, 50n, 'asc');
      if (fundResponse.success && fundResponse.data?.objectsListPaginated) {
        funds = fundResponse.data.objectsListPaginated.objects.map(objStr => JSON.parse(objStr));
      }
      
    } catch (e) {
      console.error('Failed to fetch budget data:', e);
      error = e.message || 'Failed to load data';
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    fetchData();
  });

  // Colors for different categories
  const categoryColors = {
    'tax': '#3B82F6',
    'fee': '#10B981',
    'personnel': '#F59E0B',
    'capital': '#8B5CF6',
    'grant': '#EF4444',
    'operating': '#6B7280',
    'general': '#3B82F6',
    'special_revenue': '#10B981',
    'capital_projects': '#8B5CF6'
  };

  // Process budgets for Tax Allocation chart (expense budgets by category)
  $: taxAllocationData = budgets
    .filter(b => b.budget_type === 'expense' && b.actual_amount > 0)
    .map((b, i) => ({
      category: b.name || b.category || 'Other',
      amount: b.actual_amount || 0,
      color: categoryColors[b.category] || `hsl(${i * 60}, 70%, 50%)`
    }));

  // Process funds for Asset Portfolio chart
  $: assetPortfolioData = (() => {
    // Calculate fund balances from ledger entries
    const fundBalances = {};
    funds.forEach(f => {
      fundBalances[f.code] = { 
        symbol: f.code, 
        name: f.name,
        balance: 0, 
        color: categoryColors[f.fund_type] || '#3B82F6' 
      };
    });
    
    // Sum up cash by fund
    ledgerEntries.forEach(entry => {
      if (entry.fund && entry.category === 'cash') {
        const fundCode = typeof entry.fund === 'string' ? entry.fund : entry.fund.code;
        if (fundBalances[fundCode]) {
          fundBalances[fundCode].balance += (entry.debit || 0) - (entry.credit || 0);
        }
      }
    });
    
    return Object.values(fundBalances)
      .filter(f => f.balance > 0)
      .map(f => ({
        symbol: f.symbol,
        balance: f.balance,
        value: f.balance,
        color: f.color
      }));
  })();

  // Process ledger entries for Tax Contribution treemap
  $: taxContributionData = (() => {
    // Group revenue entries by description/source
    const contributions = {};
    ledgerEntries
      .filter(e => e.entry_type === 'revenue' && e.credit > 0)
      .forEach(entry => {
        const name = entry.description || entry.category || 'Other';
        if (!contributions[name]) {
          contributions[name] = {
            name: name,
            type: entry.category === 'tax' ? 'citizen' : 'organization',
            contribution: 0,
            color: entry.category === 'tax' ? '#3B82F6' : '#10B981',
            category: entry.category || 'Other'
          };
        }
        contributions[name].contribution += entry.credit;
      });
    
    return Object.values(contributions);
  })();

  // Process ledger entries for Monthly Cash Flow
  $: cashFlowData = (() => {
    const income = [];
    const expenses = [];
    
    // Group by category for revenues
    const revenueByCategory = {};
    const expenseByCategory = {};
    
    ledgerEntries.forEach(entry => {
      if (entry.entry_type === 'revenue' && entry.credit > 0) {
        const cat = entry.category || 'other';
        if (!revenueByCategory[cat]) revenueByCategory[cat] = 0;
        revenueByCategory[cat] += entry.credit;
      } else if (entry.entry_type === 'expense' && entry.debit > 0) {
        const cat = entry.category || 'other';
        if (!expenseByCategory[cat]) expenseByCategory[cat] = 0;
        expenseByCategory[cat] += entry.debit;
      }
    });
    
    Object.entries(revenueByCategory).forEach(([cat, amount]) => {
      income.push({ category: cat.charAt(0).toUpperCase() + cat.slice(1), amount });
    });
    
    Object.entries(expenseByCategory).forEach(([cat, amount]) => {
      expenses.push({ category: cat.charAt(0).toUpperCase() + cat.slice(1), amount });
    });
    
    return { income, expenses };
  })();
</script>

<div class="charts-extension">
  <!-- Tab Navigation -->
  <div class="mb-6 border-b border-gray-200">
    <nav class="flex space-x-8" aria-label="Tabs">
      <button
        on:click={() => activeTab = 'accounting'}
        class="py-4 px-1 border-b-2 font-medium text-sm transition-colors {
          activeTab === 'accounting' 
            ? 'border-blue-500 text-blue-600' 
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }"
      >
        📊 {$_('extensions.metrics.financial_statements') || 'Financial Statements'}
      </button>
      <button
        on:click={() => activeTab = 'visualizations'}
        class="py-4 px-1 border-b-2 font-medium text-sm transition-colors {
          activeTab === 'visualizations' 
            ? 'border-blue-500 text-blue-600' 
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }"
      >
        📈 {$_('extensions.metrics.budget_visualizations') || 'Budget Visualizations'}
      </button>
    </nav>
  </div>

  {#if activeTab === 'accounting'}
    <!-- Financial Statements (Real Accounting Data) -->
    <FinancialStatements />
  {:else}
    <!-- Budget Visualization Charts -->
    {#if loading}
      <div class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span class="ml-3 text-gray-600">{$_('extensions.metrics.loading') || 'Loading...'}</span>
      </div>
    {:else if error}
      <div class="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
        {$_('extensions.metrics.error_loading') || 'Error loading data'}: {error}
      </div>
    {:else}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <!-- Tax Allocation Pie Chart -->
        <TaxAllocationChart data={taxAllocationData} />
        
        <!-- Asset Portfolio Donut Chart -->
        <AssetPortfolioChart data={assetPortfolioData} />
      </div>
      
      <!-- Tax Contribution Treemap -->
      <div class="mt-6">
        <TaxContributionTreemap data={taxContributionData} />
      </div>
      
      <!-- Monthly Cash Flow -->
      <div class="mt-6">
        <MonthlyCashFlow data={cashFlowData} />
      </div>
    {/if}
  {/if}
</div>

<style>
  .charts-extension {
    width: 100%;
  }
</style>
