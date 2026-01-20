<script lang="ts">
  import { onMount } from 'svelte';
  import { backend } from '$lib/canisters';
  import { Spinner } from 'flowbite-svelte';
  import { _ } from 'svelte-i18n';

  // State
  let loading = true;
  let error = '';
  let ledgerEntries: any[] = [];
  let funds: any[] = [];
  let fiscalPeriods: any[] = [];
  let budgets: any[] = [];

  // Computed financial statements
  let balanceSheet = { assets: {}, liabilities: {}, equity: {}, totalAssets: 0, totalLiabilities: 0, totalEquity: 0, netPosition: 0 };
  let incomeStatement = { revenues: {}, expenses: {}, totalRevenues: 0, totalExpenses: 0, netIncome: 0 };
  let cashFlowStatement = { operating: 0, investing: 0, financing: 0, netChange: 0 };

  // Category colors for charts (elegant blue theme)
  const categoryColors: Record<string, string> = {
    cash: '#1E40AF',
    receivable: '#1D4ED8',
    equipment: '#2563EB',
    land: '#3B82F6',
    bond: '#60A5FA',
    payable: '#1D4ED8',
    deferred_revenue: '#2563EB',
    fund_balance: '#1E40AF',
    tax: '#1E40AF',
    fee: '#1D4ED8',
    grant: '#2563EB',
    personnel: '#3B82F6',
    supplies: '#60A5FA',
    services: '#1D4ED8',
    debt: '#2563EB',
    capital: '#1E40AF'
  };

  // Fetch all accounting data
  async function fetchAccountingData() {
    try {
      loading = true;
      error = '';

      // Fetch LedgerEntry data
      const ledgerResponse = await backend.get_objects_paginated('LedgerEntry', 0n, 1000n, 'desc');
      if (ledgerResponse.success && ledgerResponse.data?.objectsListPaginated) {
        ledgerEntries = ledgerResponse.data.objectsListPaginated.objects.map((objStr: string) => JSON.parse(objStr));
      }

      // Fetch Fund data
      const fundResponse = await backend.get_objects_paginated('Fund', 0n, 100n, 'asc');
      if (fundResponse.success && fundResponse.data?.objectsListPaginated) {
        funds = fundResponse.data.objectsListPaginated.objects.map((objStr: string) => JSON.parse(objStr));
      }

      // Fetch FiscalPeriod data
      const periodResponse = await backend.get_objects_paginated('FiscalPeriod', 0n, 100n, 'desc');
      if (periodResponse.success && periodResponse.data?.objectsListPaginated) {
        fiscalPeriods = periodResponse.data.objectsListPaginated.objects.map((objStr: string) => JSON.parse(objStr));
      }

      // Fetch Budget data
      const budgetResponse = await backend.get_objects_paginated('Budget', 0n, 100n, 'asc');
      if (budgetResponse.success && budgetResponse.data?.objectsListPaginated) {
        budgets = budgetResponse.data.objectsListPaginated.objects.map((objStr: string) => JSON.parse(objStr));
      }

      // Calculate financial statements from ledger entries
      calculateFinancialStatements();

    } catch (err) {
      console.error('Error fetching accounting data:', err);
      error = `Failed to load accounting data: ${err.message || err}`;
    } finally {
      loading = false;
    }
  }

  // Calculate financial statements from ledger entries
  function calculateFinancialStatements() {
    // Reset
    const assets: Record<string, number> = {};
    const liabilities: Record<string, number> = {};
    const equity: Record<string, number> = {};
    const revenues: Record<string, number> = {};
    const expenses: Record<string, number> = {};

    for (const entry of ledgerEntries) {
      const entryType = entry.entry_type || '';
      const category = entry.category || 'other';
      const debit = entry.debit || 0;
      const credit = entry.credit || 0;

      switch (entryType) {
        case 'asset':
          assets[category] = (assets[category] || 0) + debit - credit;
          break;
        case 'liability':
          liabilities[category] = (liabilities[category] || 0) + credit - debit;
          break;
        case 'equity':
          equity[category] = (equity[category] || 0) + credit - debit;
          break;
        case 'revenue':
          revenues[category] = (revenues[category] || 0) + credit - debit;
          break;
        case 'expense':
          expenses[category] = (expenses[category] || 0) + debit - credit;
          break;
      }
    }

    // Calculate totals
    const totalAssets = Object.values(assets).reduce((a, b) => a + b, 0);
    const totalLiabilities = Object.values(liabilities).reduce((a, b) => a + b, 0);
    const totalEquity = Object.values(equity).reduce((a, b) => a + b, 0);
    const totalRevenues = Object.values(revenues).reduce((a, b) => a + b, 0);
    const totalExpenses = Object.values(expenses).reduce((a, b) => a + b, 0);

    balanceSheet = {
      assets,
      liabilities,
      equity,
      totalAssets,
      totalLiabilities,
      totalEquity,
      netPosition: totalAssets - totalLiabilities
    };

    incomeStatement = {
      revenues,
      expenses,
      totalRevenues,
      totalExpenses,
      netIncome: totalRevenues - totalExpenses
    };

    // Calculate cash flow (simplified - based on cash category changes)
    const cashEntries = ledgerEntries.filter(e => e.category === 'cash');
    let operating = 0, investing = 0, financing = 0;
    
    for (const entry of cashEntries) {
      const tags = entry.tags || '';
      const amount = (entry.debit || 0) - (entry.credit || 0);
      
      if (tags.includes('investing') || tags.includes('capital')) {
        investing += amount;
      } else if (tags.includes('financing') || tags.includes('bond')) {
        financing += amount;
      } else {
        operating += amount;
      }
    }

    cashFlowStatement = {
      operating,
      investing,
      financing,
      netChange: operating + investing + financing
    };
  }

  // Format currency
  function formatCurrency(amount: number): string {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(2)}M`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(1)}K`;
    }
    return amount.toLocaleString();
  }

  // Format category name
  function formatCategory(cat: string): string {
    return cat.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  onMount(() => {
    fetchAccountingData();
  });
</script>

<div class="space-y-6">
  {#if loading}
    <div class="flex justify-center items-center p-12 bg-white rounded-lg border border-gray-200">
      <Spinner size="8" />
      <span class="ml-3 text-gray-600">{$_('extensions.metrics.loading_accounting_data') || 'Loading accounting data...'}</span>
    </div>
  {:else if error}
    <div class="bg-gray-50 border border-gray-300 rounded-lg p-4 text-gray-700">
      {error}
    </div>
  {:else if ledgerEntries.length === 0}
    <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
      <p class="text-gray-700 font-medium">{$_('extensions.metrics.no_accounting_data') || 'No accounting data available yet.'}</p>
      <p class="text-gray-500 text-sm mt-2">{$_('extensions.metrics.accounting_data_hint') || 'Financial data will appear here once transactions are recorded.'}</p>
    </div>
  {:else}
    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
        <div class="text-gray-500 text-sm font-medium mb-1">Total Assets</div>
        <div class="text-2xl font-bold text-gray-800">{formatCurrency(balanceSheet.totalAssets)}</div>
      </div>
      <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
        <div class="text-gray-500 text-sm font-medium mb-1">Total Liabilities</div>
        <div class="text-2xl font-bold text-gray-600">{formatCurrency(balanceSheet.totalLiabilities)}</div>
      </div>
      <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
        <div class="text-gray-500 text-sm font-medium mb-1">Net Position</div>
        <div class="text-2xl font-bold text-gray-800">{formatCurrency(balanceSheet.netPosition)}</div>
      </div>
      <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
        <div class="text-gray-500 text-sm font-medium mb-1">Net Income</div>
        <div class="text-2xl font-bold {incomeStatement.netIncome >= 0 ? 'text-gray-800' : 'text-gray-500'}">
          {incomeStatement.netIncome >= 0 ? '+' : ''}{formatCurrency(incomeStatement.netIncome)}
        </div>
      </div>
    </div>

    <!-- Balance Sheet -->
    <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-800 flex items-center">
          📋 {$_('extensions.metrics.balance_sheet') || 'Balance Sheet'}
        </h3>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Assets -->
          <div>
            <h4 class="font-semibold text-blue-800 mb-3 flex items-center">
              <span class="w-3 h-3 bg-blue-800 rounded-full mr-2"></span>
              {$_('extensions.metrics.assets') || 'Assets'}
            </h4>
            <div class="space-y-2">
              {#each Object.entries(balanceSheet.assets) as [category, amount]}
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600">{formatCategory(category)}</span>
                  <span class="font-medium text-gray-800">{formatCurrency(amount)}</span>
                </div>
              {/each}
              <div class="border-t pt-2 mt-2 flex justify-between font-semibold">
                <span>{$_('extensions.metrics.total_assets') || 'Total Assets'}</span>
                <span class="text-blue-800">{formatCurrency(balanceSheet.totalAssets)}</span>
              </div>
            </div>
          </div>

          <!-- Liabilities -->
          <div>
            <h4 class="font-semibold text-red-600 mb-3 flex items-center">
              <span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              {$_('extensions.metrics.liabilities') || 'Liabilities'}
            </h4>
            <div class="space-y-2">
              {#each Object.entries(balanceSheet.liabilities) as [category, amount]}
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600">{formatCategory(category)}</span>
                  <span class="font-medium text-gray-800">{formatCurrency(amount)}</span>
                </div>
              {/each}
              <div class="border-t pt-2 mt-2 flex justify-between font-semibold">
                <span>{$_('extensions.metrics.total_liabilities') || 'Total Liabilities'}</span>
                <span class="text-red-600">{formatCurrency(balanceSheet.totalLiabilities)}</span>
              </div>
            </div>
          </div>

          <!-- Equity / Fund Balance -->
          <div>
            <h4 class="font-semibold text-blue-700 mb-3 flex items-center">
              <span class="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
              {$_('extensions.metrics.fund_balance') || 'Fund Balance'}
            </h4>
            <div class="space-y-2">
              {#each Object.entries(balanceSheet.equity) as [category, amount]}
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600">{formatCategory(category)}</span>
                  <span class="font-medium text-gray-800">{formatCurrency(amount)}</span>
                </div>
              {/each}
              <div class="border-t pt-2 mt-2 flex justify-between font-semibold">
                <span>{$_('extensions.metrics.net_position') || 'Net Position'}</span>
                <span class="text-blue-800">{formatCurrency(balanceSheet.netPosition)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Income Statement -->
    <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-800 flex items-center">
          📈 {$_('extensions.metrics.income_statement') || 'Income Statement'}
        </h3>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Revenues -->
          <div>
            <h4 class="font-semibold text-blue-800 mb-3 flex items-center">
              <span class="w-3 h-3 bg-blue-800 rounded-full mr-2"></span>
              {$_('extensions.metrics.revenues') || 'Revenues'}
            </h4>
            <div class="space-y-2">
              {#each Object.entries(incomeStatement.revenues) as [category, amount]}
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600">{formatCategory(category)}</span>
                  <span class="font-medium text-blue-700">+{formatCurrency(amount)}</span>
                </div>
              {/each}
              <div class="border-t pt-2 mt-2 flex justify-between font-semibold">
                <span>{$_('extensions.metrics.revenues') || 'Total Revenues'}</span>
                <span class="text-blue-800">{formatCurrency(incomeStatement.totalRevenues)}</span>
              </div>
            </div>
          </div>

          <!-- Expenses -->
          <div>
            <h4 class="font-semibold text-red-600 mb-3 flex items-center">
              <span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              {$_('extensions.metrics.expenses') || 'Expenses'}
            </h4>
            <div class="space-y-2">
              {#each Object.entries(incomeStatement.expenses) as [category, amount]}
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600">{formatCategory(category)}</span>
                  <span class="font-medium text-red-500">-{formatCurrency(amount)}</span>
                </div>
              {/each}
              <div class="border-t pt-2 mt-2 flex justify-between font-semibold">
                <span>{$_('extensions.metrics.expenses') || 'Total Expenses'}</span>
                <span class="text-red-600">{formatCurrency(incomeStatement.totalExpenses)}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Net Income -->
        <div class="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
          <div class="flex justify-between items-center">
            <span class="font-semibold text-blue-700">
              {$_('extensions.metrics.net_income') || 'Net Income'} ({incomeStatement.netIncome >= 0 ? $_('extensions.metrics.surplus') || 'Surplus' : $_('extensions.metrics.deficit') || 'Deficit'})
            </span>
            <span class="text-xl font-bold {incomeStatement.netIncome >= 0 ? 'text-blue-800' : 'text-red-600'}">
              {incomeStatement.netIncome >= 0 ? '+' : ''}{formatCurrency(incomeStatement.netIncome)}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Cash Flow Statement -->
    <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-800 flex items-center">
          💰 {$_('extensions.metrics.cash_flow_statement') || 'Cash Flow Statement'}
        </h3>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <span class="font-medium text-gray-700">{$_('extensions.metrics.operating_activities') || 'Operating Activities'}</span>
              <p class="text-xs text-gray-500">{$_('extensions.metrics.day_to_day_operations') || 'Day-to-day operations'}</p>
            </div>
            <span class="text-lg font-semibold {cashFlowStatement.operating >= 0 ? 'text-blue-800' : 'text-red-600'}">
              {cashFlowStatement.operating >= 0 ? '+' : ''}{formatCurrency(cashFlowStatement.operating)}
            </span>
          </div>
          <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <span class="font-medium text-gray-700">{$_('extensions.metrics.investing_activities') || 'Investing Activities'}</span>
              <p class="text-xs text-gray-500">{$_('extensions.metrics.capital_expenditures') || 'Capital expenditures'}</p>
            </div>
            <span class="text-lg font-semibold {cashFlowStatement.investing >= 0 ? 'text-blue-800' : 'text-red-600'}">
              {cashFlowStatement.investing >= 0 ? '+' : ''}{formatCurrency(cashFlowStatement.investing)}
            </span>
          </div>
          <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <span class="font-medium text-gray-700">{$_('extensions.metrics.financing_activities') || 'Financing Activities'}</span>
              <p class="text-xs text-gray-500">{$_('extensions.metrics.bonds_and_debt') || 'Bonds and debt'}</p>
            </div>
            <span class="text-lg font-semibold {cashFlowStatement.financing >= 0 ? 'text-blue-800' : 'text-red-600'}">
              {cashFlowStatement.financing >= 0 ? '+' : ''}{formatCurrency(cashFlowStatement.financing)}
            </span>
          </div>
          <div class="border-t pt-4 flex justify-between items-center">
            <span class="font-semibold text-gray-800">{$_('extensions.metrics.net_change_in_cash') || 'Net Change in Cash'}</span>
            <span class="text-xl font-bold {cashFlowStatement.netChange >= 0 ? 'text-blue-800' : 'text-red-600'}">
              {cashFlowStatement.netChange >= 0 ? '+' : ''}{formatCurrency(cashFlowStatement.netChange)}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Funds Overview -->
    {#if funds.length > 0}
      <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800 flex items-center">
            🏦 {$_('extensions.metrics.funds_overview') || 'Funds Overview'}
          </h3>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each funds as fund}
              <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-semibold text-gray-800">{fund.name || fund.code}</span>
                  <span class="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{fund.fund_type || 'general'}</span>
                </div>
                <p class="text-sm text-gray-600">{fund.description || $_('extensions.metrics.no_description') || 'No description'}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/if}

    <!-- Budgets Overview -->
    {#if budgets.length > 0}
      <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800 flex items-center">
            📊 {$_('extensions.metrics.budgets_overview') || 'Budget Performance'}
          </h3>
        </div>
        <div class="p-6">
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-gray-200">
                  <th class="text-left py-3 px-4 font-semibold text-gray-700">{$_('extensions.metrics.category') || 'Category'}</th>
                  <th class="text-right py-3 px-4 font-semibold text-gray-700">{$_('extensions.metrics.planned') || 'Planned'}</th>
                  <th class="text-right py-3 px-4 font-semibold text-gray-700">{$_('extensions.metrics.actual') || 'Actual'}</th>
                  <th class="text-right py-3 px-4 font-semibold text-gray-700">{$_('extensions.metrics.variance') || 'Variance'}</th>
                  <th class="text-center py-3 px-4 font-semibold text-gray-700">{$_('extensions.metrics.status') || 'Status'}</th>
                </tr>
              </thead>
              <tbody>
                {#each budgets as budget}
                  {@const variance = (budget.actual_amount || 0) - (budget.planned_amount || 0)}
                  {@const variancePercent = budget.planned_amount ? ((variance / budget.planned_amount) * 100).toFixed(1) : 0}
                  <tr class="border-b border-gray-100 hover:bg-gray-50">
                    <td class="py-3 px-4">
                      <div class="font-medium text-gray-800">{budget.name || budget.category}</div>
                      <div class="text-xs text-gray-500">{budget.budget_type || 'expense'}</div>
                    </td>
                    <td class="py-3 px-4 text-right text-gray-600">{formatCurrency(budget.planned_amount || 0)}</td>
                    <td class="py-3 px-4 text-right text-gray-800 font-medium">{formatCurrency(budget.actual_amount || 0)}</td>
                    <td class="py-3 px-4 text-right {variance >= 0 ? 'text-blue-700' : 'text-blue-500'}">
                      {variance >= 0 ? '+' : ''}{formatCurrency(variance)} ({variancePercent}%)
                    </td>
                    <td class="py-3 px-4 text-center">
                      <span class="px-2 py-1 text-xs rounded-full {
                        budget.status === 'adopted' ? 'bg-blue-100 text-blue-800' :
                        budget.status === 'draft' ? 'bg-blue-50 text-blue-600' :
                        'bg-gray-50 text-gray-500'
                      }">
                        {budget.status || 'draft'}
                      </span>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    {/if}

    <!-- Data Summary -->
    <div class="text-center text-sm text-gray-500 py-4">
      {$_('extensions.metrics.showing_entries', { values: { entries: ledgerEntries.length, funds: funds.length, budgets: budgets.length }}) || `Showing ${ledgerEntries.length} ledger entries • ${funds.length} funds • ${budgets.length} budgets`}
    </div>
  {/if}
</div>
