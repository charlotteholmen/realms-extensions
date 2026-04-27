<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { backend } from '$lib/canisters';
  import { Button, Badge, Card, Spinner, Input, Label, Range, Toggle } from 'flowbite-svelte';

  interface StatusData {
    running: boolean;
    task_exists: boolean;
    schedule_disabled: boolean | null;
    cycle: number;
    seed: number;
    interval_seconds: number;
    batch_config: Record<string, number>;
    totals: Record<string, number>;
  }

  interface StatsData {
    cycle: number;
    generated_totals: Record<string, number>;
    live_counts: Record<string, number>;
  }

  let status: StatusData | null = null;
  let stats: StatsData | null = null;
  let loading = true;
  let actionLoading = false;
  let error = '';
  let refreshInterval: ReturnType<typeof setInterval>;

  // Config form
  let seedInput = 42;
  let intervalInput = 60;
  let showAdvanced = false;

  // Batch config inputs
  let batchUsers = 10;
  let batchOrganizations = 1;
  let batchProposals = 1;
  let batchVotes = 5;
  let batchTransfers = 3;
  let batchLedgerEntries = 2;
  let batchNotifications = 3;
  let batchBudgets = 1;

  // Toast system
  interface Toast { id: number; message: string; type: 'success' | 'error' | 'info'; }
  let toasts: Toast[] = [];
  let toastCounter = 0;
  function showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
    const id = ++toastCounter;
    toasts = [...toasts, { id, message, type }];
    setTimeout(() => { toasts = toasts.filter(t => t.id !== id); }, 4000);
  }

  async function callExtension(fn: string, args: any = {}) {
    const result = await backend.extension_sync_call({
      extension_name: 'demo_data_populator',
      function_name: fn,
      args: [{ String: JSON.stringify(args) }],
      kwargs: []
    });
    if (result.success) {
      return JSON.parse(result.response);
    }
    throw new Error(result.response);
  }

  async function loadStatus() {
    try {
      const res = await callExtension('get_status');
      if (res.success) {
        status = res.data;
        seedInput = status?.seed ?? 42;
        intervalInput = status?.interval_seconds ?? 60;
        if (status?.batch_config) {
          batchUsers = status.batch_config.users ?? 10;
          batchOrganizations = status.batch_config.organizations ?? 1;
          batchProposals = status.batch_config.proposals ?? 1;
          batchVotes = status.batch_config.votes ?? 5;
          batchTransfers = status.batch_config.transfers ?? 3;
          batchLedgerEntries = status.batch_config.ledger_entries ?? 2;
          batchNotifications = status.batch_config.notifications ?? 3;
          batchBudgets = status.batch_config.budgets ?? 1;
        }
      }
    } catch (e: any) {
      error = e.message;
    }
  }

  async function loadStats() {
    try {
      const res = await callExtension('get_stats');
      if (res.success) {
        stats = res.data;
      }
    } catch (e: any) {
      // Stats may fail if extension not fully loaded
    }
  }

  async function refresh() {
    await Promise.all([loadStatus(), loadStats()]);
    loading = false;
  }

  async function handleStart() {
    actionLoading = true;
    try {
      const batchConfig: Record<string, number> = {};
      if (showAdvanced) {
        batchConfig.users = batchUsers;
        batchConfig.organizations = batchOrganizations;
        batchConfig.proposals = batchProposals;
        batchConfig.votes = batchVotes;
        batchConfig.transfers = batchTransfers;
        batchConfig.ledger_entries = batchLedgerEntries;
        batchConfig.notifications = batchNotifications;
        batchConfig.budgets = batchBudgets;
      }
      const res = await callExtension('start_populator', {
        seed: seedInput,
        interval_seconds: intervalInput,
        batch_config: Object.keys(batchConfig).length ? batchConfig : undefined,
      });
      if (res.success) {
        showToast('Populator started', 'success');
      } else {
        showToast(res.error || 'Failed to start', 'error');
      }
    } catch (e: any) {
      showToast(e.message, 'error');
    }
    actionLoading = false;
    await refresh();
  }

  async function handleStop() {
    actionLoading = true;
    try {
      const res = await callExtension('stop_populator');
      showToast(res.success ? 'Populator stopped' : (res.error || 'Failed'), res.success ? 'success' : 'error');
    } catch (e: any) {
      showToast(e.message, 'error');
    }
    actionLoading = false;
    await refresh();
  }

  async function handleResume() {
    actionLoading = true;
    try {
      const res = await callExtension('resume_populator');
      showToast(res.success ? 'Populator resumed' : (res.error || 'Failed'), res.success ? 'success' : 'error');
    } catch (e: any) {
      showToast(e.message, 'error');
    }
    actionLoading = false;
    await refresh();
  }

  async function handleReset() {
    if (!confirm('Reset the populator? Generated entities will remain in the realm.')) return;
    actionLoading = true;
    try {
      const res = await callExtension('reset_populator');
      showToast(res.success ? 'Populator reset' : (res.error || 'Failed'), res.success ? 'success' : 'error');
    } catch (e: any) {
      showToast(e.message, 'error');
    }
    actionLoading = false;
    await refresh();
  }

  async function handleUpdateConfig() {
    actionLoading = true;
    try {
      const batchConfig: Record<string, number> = {
        users: batchUsers,
        organizations: batchOrganizations,
        proposals: batchProposals,
        votes: batchVotes,
        transfers: batchTransfers,
        ledger_entries: batchLedgerEntries,
        notifications: batchNotifications,
        budgets: batchBudgets,
      };
      const res = await callExtension('update_config', {
        seed: seedInput,
        interval_seconds: intervalInput,
        batch_config: batchConfig,
      });
      showToast(res.success ? 'Config updated' : (res.error || 'Failed'), res.success ? 'success' : 'error');
    } catch (e: any) {
      showToast(e.message, 'error');
    }
    actionLoading = false;
    await refresh();
  }

  function randomSeed() {
    seedInput = Math.floor(Math.random() * 999999) + 1;
  }

  function formatNumber(n: number): string {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return n.toString();
  }

  onMount(() => {
    refresh();
    refreshInterval = setInterval(refresh, 5000);
  });

  onDestroy(() => {
    if (refreshInterval) clearInterval(refreshInterval);
  });

  $: isRunning = status?.running ?? false;
  $: taskExists = status?.task_exists ?? false;
  $: isStopped = taskExists && !isRunning;
  $: totalEntities = stats
    ? Object.values(stats.live_counts || {}).reduce((a, b) => a + b, 0)
    : 0;
</script>

<!-- Toast notifications -->
{#if toasts.length > 0}
  <div class="fixed top-4 right-4 z-50 flex flex-col gap-2">
    {#each toasts as toast}
      <div class="px-4 py-2 rounded-lg shadow-lg text-white text-sm
        {toast.type === 'success' ? 'bg-green-600' : toast.type === 'error' ? 'bg-red-600' : 'bg-blue-600'}">
        {toast.message}
      </div>
    {/each}
  </div>
{/if}

<div class="p-6 max-w-4xl mx-auto">
  <div class="flex items-center justify-between mb-6">
    <div>
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Demo Data Populator</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Continuously generates realistic entities for stress testing
      </p>
    </div>
    {#if isRunning}
      <Badge color="green" large>Running</Badge>
    {:else if isStopped}
      <Badge color="yellow" large>Stopped</Badge>
    {:else}
      <Badge color="dark" large>Idle</Badge>
    {/if}
  </div>

  {#if loading}
    <div class="flex justify-center py-12">
      <Spinner size="8" />
    </div>
  {:else}

    <!-- Stats cards -->
    {#if stats}
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <Card padding="sm">
          <p class="text-xs text-gray-500 dark:text-gray-400">Cycles</p>
          <p class="text-2xl font-bold text-gray-900 dark:text-white">{formatNumber(stats.cycle)}</p>
        </Card>
        <Card padding="sm">
          <p class="text-xs text-gray-500 dark:text-gray-400">Total Entities</p>
          <p class="text-2xl font-bold text-gray-900 dark:text-white">{formatNumber(totalEntities)}</p>
        </Card>
        <Card padding="sm">
          <p class="text-xs text-gray-500 dark:text-gray-400">Seed</p>
          <p class="text-2xl font-bold text-gray-900 dark:text-white">{status?.seed ?? '-'}</p>
        </Card>
        <Card padding="sm">
          <p class="text-xs text-gray-500 dark:text-gray-400">Interval</p>
          <p class="text-2xl font-bold text-gray-900 dark:text-white">{status?.interval_seconds ?? '-'}s</p>
        </Card>
      </div>
    {/if}

    <!-- Entity breakdown -->
    {#if stats && stats.live_counts && Object.keys(stats.live_counts).length > 0}
      <Card class="mb-6">
        <h3 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Entity Counts</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {#each Object.entries(stats.live_counts) as [entity, count]}
            <div class="flex justify-between items-center px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded">
              <span class="text-sm text-gray-600 dark:text-gray-300 capitalize">{entity.replace('_', ' ')}</span>
              <span class="text-sm font-mono font-bold text-gray-900 dark:text-white">{formatNumber(count)}</span>
            </div>
          {/each}
        </div>
      </Card>
    {/if}

    <!-- Controls -->
    <Card class="mb-6">
      <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Controls</h3>

      {#if !taskExists}
        <!-- Start form -->
        <div class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label class="mb-1">Seed</Label>
              <div class="flex gap-2">
                <Input type="number" bind:value={seedInput} min={1} max={999999} />
                <Button color="alternative" size="sm" on:click={randomSeed}>Dice</Button>
              </div>
              <p class="text-xs text-gray-400 mt-1">Same seed = same data every time</p>
            </div>
            <div>
              <Label class="mb-1">Interval (seconds)</Label>
              <Input type="number" bind:value={intervalInput} min={5} max={3600} />
              <p class="text-xs text-gray-400 mt-1">Time between generation cycles</p>
            </div>
          </div>

          <div>
            <Toggle bind:checked={showAdvanced}>Advanced batch config</Toggle>
          </div>

          {#if showAdvanced}
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div>
                <Label class="text-xs">Users/cycle</Label>
                <Input type="number" size="sm" bind:value={batchUsers} min={0} max={100} />
              </div>
              <div>
                <Label class="text-xs">Orgs/cycle</Label>
                <Input type="number" size="sm" bind:value={batchOrganizations} min={0} max={20} />
              </div>
              <div>
                <Label class="text-xs">Proposals/cycle</Label>
                <Input type="number" size="sm" bind:value={batchProposals} min={0} max={20} />
              </div>
              <div>
                <Label class="text-xs">Votes/cycle</Label>
                <Input type="number" size="sm" bind:value={batchVotes} min={0} max={50} />
              </div>
              <div>
                <Label class="text-xs">Transfers/cycle</Label>
                <Input type="number" size="sm" bind:value={batchTransfers} min={0} max={50} />
              </div>
              <div>
                <Label class="text-xs">Ledger entries/cycle</Label>
                <Input type="number" size="sm" bind:value={batchLedgerEntries} min={0} max={20} />
              </div>
              <div>
                <Label class="text-xs">Notifications/cycle</Label>
                <Input type="number" size="sm" bind:value={batchNotifications} min={0} max={50} />
              </div>
              <div>
                <Label class="text-xs">Budgets/cycle</Label>
                <Input type="number" size="sm" bind:value={batchBudgets} min={0} max={10} />
              </div>
            </div>
          {/if}

          <Button color="green" on:click={handleStart} disabled={actionLoading}>
            {#if actionLoading}<Spinner size="4" class="mr-2" />{/if}
            Start Populator
          </Button>
        </div>

      {:else}
        <!-- Running/stopped controls -->
        <div class="flex flex-wrap gap-3">
          {#if isRunning}
            <Button color="yellow" on:click={handleStop} disabled={actionLoading}>
              {#if actionLoading}<Spinner size="4" class="mr-2" />{/if}
              Stop
            </Button>
          {:else}
            <Button color="green" on:click={handleResume} disabled={actionLoading}>
              {#if actionLoading}<Spinner size="4" class="mr-2" />{/if}
              Resume
            </Button>
          {/if}
          <Button color="alternative" on:click={handleUpdateConfig} disabled={actionLoading}>
            Save Config
          </Button>
          <Button color="red" outline on:click={handleReset} disabled={actionLoading}>
            Reset
          </Button>
        </div>

        <!-- Editable config when task exists -->
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label class="mb-1">Seed</Label>
            <div class="flex gap-2">
              <Input type="number" bind:value={seedInput} min={1} max={999999} />
              <Button color="alternative" size="sm" on:click={randomSeed}>Dice</Button>
            </div>
          </div>
          <div>
            <Label class="mb-1">Interval (seconds)</Label>
            <Input type="number" bind:value={intervalInput} min={5} max={3600} />
          </div>
        </div>
      {/if}
    </Card>

    <!-- Generated totals breakdown -->
    {#if stats && stats.generated_totals && Object.keys(stats.generated_totals).length > 0}
      <Card>
        <h3 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Generated by Populator</h3>
        <p class="text-xs text-gray-400 mb-3">Entities created by the populator (subset of total realm entities)</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {#each Object.entries(stats.generated_totals) as [entity, count]}
            <div class="flex justify-between items-center px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded">
              <span class="text-sm text-gray-600 dark:text-gray-300 capitalize">{entity.replace('_', ' ')}</span>
              <span class="text-sm font-mono font-bold text-blue-600 dark:text-blue-400">{formatNumber(count)}</span>
            </div>
          {/each}
        </div>
      </Card>
    {/if}

  {/if}
</div>
