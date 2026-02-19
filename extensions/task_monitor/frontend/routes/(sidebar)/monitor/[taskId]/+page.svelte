<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { page } from '$app/stores';
  import { _ } from 'svelte-i18n';
  import { backend } from '$lib/canisters';
  import { Button, Badge, Card, Spinner, Checkbox } from 'flowbite-svelte';

  interface TaskSchedule {
    _id: string;
    name: string;
    disabled: boolean;
    run_at: number;
    repeat_every: number;
    last_run_at: number;
  }

  interface TaskExecution {
    _id: string;
    name: string;
    status: string;
    result: string;
    created_at: number | null;
    updated_at: number | null;
    logger_name: string;
  }

  interface TaskDetails {
    _id: string;
    name: string;
    status: string;
    metadata: string;
    step_to_execute: number;
    steps: any[];
    schedules: TaskSchedule[];
    executions: TaskExecution[];
    created_at: number | null;
    updated_at: number | null;
  }

  interface LogEntry {
    timestamp: string;
    level: string;
    message: string;
  }

  let taskId: string;
  let task: TaskDetails | null = null;
  let logs: LogEntry[] = [];
  let rawLogs: string = '';
  let loading = true;
  let logsLoading = false;
  let error = '';
  let followLogs = false;
  let refreshInterval: ReturnType<typeof setInterval> | null = null;
  let logsContainer: HTMLElement;
  let runningTask = false;

  // Toast notification system
  interface Toast { id: number; message: string; type: 'success' | 'error' | 'info'; }
  let toasts: Toast[] = [];
  let toastCounter = 0;
  function showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
    const id = ++toastCounter;
    toasts = [...toasts, { id, message, type }];
    setTimeout(() => { toasts = toasts.filter(t => t.id !== id); }, 4000);
  }

  // Execution log viewer state
  let selectedExecution: TaskExecution | null = null;
  let executionLogs: string = '';
  let executionLogsLoading = false;

  // Execution pagination (from_id based)
  const EXEC_PAGE_SIZE = 10;
  let execFromId = 1;
  let execMaxId = 0;
  let execNextFromId: number | null = null;
  let execHasMore = false;
  let execPageHistory: number[] = [1];

  $: sortedExecutions = task?.executions || [];

  $: taskId = $page.params.taskId;

  // Auto-scroll when following and logs update
  $: if (followLogs && logsContainer) {
    const currentLogs = selectedExecution ? executionLogs : rawLogs;
    if (currentLogs) {
      setTimeout(() => {
        logsContainer.scrollTop = logsContainer.scrollHeight;
      }, 50);
    }
  }

  // Start/stop auto-refresh when followLogs changes
  $: {
    if (followLogs) {
      startAutoRefresh();
    } else {
      stopAutoRefresh();
    }
  }

  onMount(() => {
    loadAll();
  });

  onDestroy(() => {
    stopAutoRefresh();
  });

  function startAutoRefresh() {
    if (refreshInterval) return;
    refreshInterval = setInterval(loadAll, 3000);
  }

  function stopAutoRefresh() {
    if (refreshInterval) {
      clearInterval(refreshInterval);
      refreshInterval = null;
    }
  }

  async function loadAll() {
    await Promise.all([loadTaskDetails(), loadLogs()]);
  }

  async function loadTaskDetails() {
    if (!taskId) return;
    
    try {
      const response = await backend.extension_sync_call({
        extension_name: 'task_monitor',
        function_name: 'get_task_details',
        args: JSON.stringify({ task_id: taskId, exec_from_id: execFromId, exec_page_size: EXEC_PAGE_SIZE })
      });
      
      if (response.success) {
        const data = typeof response.response === 'string' ? JSON.parse(response.response) : response.response;
        if (data.success !== false) {
          task = data.task;
          execMaxId = data.task?.exec_max_id || 0;
          execNextFromId = data.task?.exec_next_from_id || null;
          execHasMore = data.task?.exec_has_more || false;
          error = '';
        } else {
          error = data.error || 'Failed to load task details';
        }
      } else {
        error = response.error || 'Failed to load task details';
      }
    } catch (e: any) {
      error = e.message || 'Error loading task details';
    } finally {
      loading = false;
    }
  }

  async function loadLogs() {
    if (!taskId) return;
    logsLoading = true;
    
    try {
      const response = await backend.extension_sync_call({
        extension_name: 'task_monitor',
        function_name: 'get_task_logs',
        args: JSON.stringify({ task_id: taskId, limit: 500 })
      });
      
      if (response.success) {
        const data = typeof response.response === 'string' ? JSON.parse(response.response) : response.response;
        if (data.success !== false) {
          rawLogs = data.logs || '';
          logs = data.parsed_logs || [];
        }
      }
    } catch (e: any) {
      console.error('Error loading logs:', e);
    } finally {
      logsLoading = false;
    }
  }

  async function loadExecutionLogs(execution: TaskExecution) {
    if (!execution.logger_name) return;
    executionLogsLoading = true;
    
    try {
      const response = await backend.extension_sync_call({
        extension_name: 'task_monitor',
        function_name: 'get_execution_logs',
        args: JSON.stringify({ logger_name: execution.logger_name, limit: 200 })
      });
      
      if (response.success) {
        const data = typeof response.response === 'string' ? JSON.parse(response.response) : response.response;
        if (data.success !== false) {
          executionLogs = data.logs || '';
        }
      }
    } catch (e: any) {
      console.error('Error loading execution logs:', e);
      executionLogs = 'Error loading logs: ' + e.message;
    } finally {
      executionLogsLoading = false;
    }
  }

  function selectExecution(execution: TaskExecution) {
    if (selectedExecution?._id === execution._id) {
      selectedExecution = null;
      executionLogs = '';
    } else {
      selectedExecution = execution;
      loadExecutionLogs(execution);
    }
  }

  function showAllLogs() {
    selectedExecution = null;
    executionLogs = '';
  }

  async function runTaskNow() {
    runningTask = true;
    
    try {
      const response = await backend.extension_sync_call({
        extension_name: 'task_monitor',
        function_name: 'run_task_now',
        args: JSON.stringify({ task_id: taskId })
      });
      
      if (response.success) {
        const data = typeof response.response === 'string' ? JSON.parse(response.response) : response.response;
        showToast(data.message || 'Task started', 'success');
        await loadAll();
      } else {
        showToast(response.error || 'Failed to run task', 'error');
      }
    } catch (e: any) {
      showToast(e.message || 'Error running task', 'error');
    } finally {
      runningTask = false;
    }
  }

  function getStatusColor(status: string): string {
    const statusMap: Record<string, string> = {
      'pending': 'yellow',
      'running': 'blue',
      'completed': 'green',
      'failed': 'red',
      'cancelled': 'gray',
      'idle': 'gray'
    };
    return statusMap[status?.toLowerCase()] || 'gray';
  }

  function formatTimestamp(timestamp: number | null): string {
    if (!timestamp) return '-';
    return new Date(timestamp).toLocaleString();
  }

  function formatDuration(startMs: number | null, endMs: number | null): string {
    if (!startMs || !endMs) return '-';
    const durationMs = endMs - startMs;
    if (durationMs < 1000) return `${Math.round(durationMs)}ms`;
    if (durationMs < 60000) return `${(durationMs / 1000).toFixed(1)}s`;
    const minutes = Math.floor(durationMs / 60000);
    const seconds = ((durationMs % 60000) / 1000).toFixed(0);
    return `${minutes}m ${seconds}s`;
  }

  function formatInterval(seconds: number): string {
    if (!seconds) return 'One-time';
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (days > 0) return `Every ${days}d ${hours}h`;
    if (hours > 0) return `Every ${hours}h ${minutes}m`;
    if (minutes > 0) return `Every ${minutes}m`;
    return `Every ${seconds}s`;
  }

  function getDescription(metadata: string): string {
    if (!metadata) return '';
    try {
      const parsed = JSON.parse(metadata);
      return parsed.description || parsed.desc || '';
    } catch {
      return metadata.length > 100 ? metadata.substring(0, 100) + '...' : metadata;
    }
  }

  function getProgressPercent(): number {
    if (!task?.steps?.length) return 0;
    return Math.round((task.step_to_execute / task.steps.length) * 100);
  }

  function truncateResult(result: string, maxLen: number = 60): string {
    if (!result) return '-';
    return result.length > maxLen ? result.substring(0, maxLen) + '...' : result;
  }
</script>

<!-- Toast Notifications -->
{#if toasts.length > 0}
  <div class="fixed top-4 right-4 z-50 flex flex-col gap-2" style="min-width: 300px;">
    {#each toasts as toast (toast.id)}
      <div
        class="px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2 animate-slide-in
          {toast.type === 'success' ? 'bg-green-600 text-white' : ''}
          {toast.type === 'error' ? 'bg-red-600 text-white' : ''}
          {toast.type === 'info' ? 'bg-blue-600 text-white' : ''}"
      >
        {#if toast.type === 'success'}
          <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        {:else if toast.type === 'error'}
          <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        {:else}
          <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        {/if}
        {toast.message}
      </div>
    {/each}
  </div>
{/if}

<div class="p-6 max-w-6xl mx-auto">
  <!-- Header -->
  <div class="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
    <a href="/monitor" class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
      </svg>
      <span>Back</span>
    </a>
    <div class="flex-1">
      <div class="flex items-center gap-3">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          {task?.name || 'Task Details'}
        </h1>
        {#if task}
          {#if task.status?.toLowerCase() === 'running'}
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          {/if}
          <Badge color={getStatusColor(task.status)}>{task.status}</Badge>
        {/if}
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">ID: {taskId}</p>
    </div>
    <div class="flex gap-2">
      <Button color="green" size="sm" disabled={runningTask} on:click={runTaskNow}>
        {#if runningTask}
          <Spinner size="4" class="mr-1" />
          Starting...
        {:else}
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Run Now
        {/if}
      </Button>
    </div>
  </div>

  {#if loading}
    <div class="flex justify-center items-center py-20">
      <Spinner size="12" />
      <span class="ml-3 text-gray-600 dark:text-gray-400">Loading...</span>
    </div>
  {:else if error}
    <Card class="text-center py-8">
      <p class="text-red-600 dark:text-red-400 mb-4">{error}</p>
      <Button color="light" on:click={loadAll}>Try Again</Button>
    </Card>
  {:else if task}
    <!-- Task Info Summary -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <!-- Schedule Card -->
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <span class="text-sm text-gray-500 dark:text-gray-400">Schedule</span>
        {#if task.schedules?.length > 0}
          {@const schedule = task.schedules[0]}
          <div class="mt-1">
            <p class="font-medium text-gray-900 dark:text-white">{formatInterval(schedule.repeat_every)}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Last: {formatTimestamp(schedule.last_run_at)}
            </p>
          </div>
        {:else}
          <p class="font-medium text-gray-900 dark:text-white mt-1">One-time task</p>
        {/if}
      </div>

      <!-- Description Card -->
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <span class="text-sm text-gray-500 dark:text-gray-400">Description</span>
        <p class="font-medium text-gray-900 dark:text-white mt-1 text-sm">
          {getDescription(task.metadata) || 'No description'}
        </p>
      </div>
    </div>

    <!-- Executions Table -->
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
      <div class="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Executions
        </h2>
        <Button size="xs" color="light" on:click={loadTaskDetails}>
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          Refresh
        </Button>
      </div>
      {#if sortedExecutions.length > 0}
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="text-xs text-gray-500 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-900">
              <tr>
                <th class="px-4 py-2 text-left">ID</th>
                <th class="px-4 py-2 text-left">Started</th>
                <th class="px-4 py-2 text-left">Runtime</th>
                <th class="px-4 py-2 text-left">Status</th>
                <th class="px-4 py-2 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              {#each sortedExecutions as execution}
                <tr 
                  on:click={() => selectExecution(execution)}
                  class="border-t border-gray-100 dark:border-gray-700 cursor-pointer transition-colors
                    {selectedExecution?._id === execution._id ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-blue-500' : 'hover:bg-gray-50 dark:hover:bg-gray-750'}"
                >
                  <td class="px-4 py-2 text-gray-500 dark:text-gray-400 font-mono text-xs">
                    {execution._id}
                  </td>
                  <td class="px-4 py-2 text-gray-900 dark:text-white whitespace-nowrap text-xs">
                    {formatTimestamp(execution.created_at)}
                  </td>
                  <td class="px-4 py-2 text-gray-900 dark:text-white whitespace-nowrap font-mono text-xs">
                    {formatDuration(execution.created_at, execution.updated_at)}
                  </td>
                  <td class="px-4 py-2">
                    <Badge color={getStatusColor(execution.status)} class="text-xs">{execution.status}</Badge>
                  </td>
                  <td class="px-4 py-2 text-gray-600 dark:text-gray-400 text-xs max-w-xs truncate" title={execution.result || ''}>
                    {truncateResult(execution.result)}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
        <div class="flex items-center justify-between px-4 py-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <button
            on:click={() => { if (execPageHistory.length > 1) { execPageHistory = execPageHistory.slice(0, -1); execFromId = execPageHistory[execPageHistory.length - 1]; loadTaskDetails(); } }}
            disabled={execPageHistory.length <= 1}
            class="text-sm px-3 py-1 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            Prev
          </button>
          <span class="text-xs text-gray-500 dark:text-gray-400">
            Page {execPageHistory.length}
          </span>
          <button
            on:click={() => { if (execNextFromId) { execPageHistory = [...execPageHistory, execNextFromId]; execFromId = execNextFromId; loadTaskDetails(); } }}
            disabled={!execHasMore}
            class="text-sm px-3 py-1 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            Next
          </button>
        </div>
      {:else}
        <div class="text-center py-8 text-gray-500 dark:text-gray-400">
          No executions yet. Click <strong>Run Now</strong> to execute this task.
        </div>
      {/if}
    </div>

    <!-- Execution Logs Section (shown when an execution is selected) -->
    {#if selectedExecution}
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Execution #{selectedExecution._id} Logs
            <Badge color={getStatusColor(selectedExecution.status)} class="text-xs">{selectedExecution.status}</Badge>
            {#if executionLogsLoading}
              <Spinner size="4" class="ml-2" />
            {/if}
          </h2>
          <div class="flex items-center gap-4">
            <label class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
              <Checkbox bind:checked={followLogs} />
              <span>Follow</span>
            </label>
            <Button size="xs" color="light" on:click={() => loadExecutionLogs(selectedExecution)}>
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Refresh
            </Button>
          </div>
        </div>
        
        <div 
          bind:this={logsContainer}
          class="bg-gray-900 text-gray-100 p-4 font-mono text-sm overflow-auto"
          style="height: 400px; max-height: 60vh;"
        >
          {#if executionLogsLoading}
            <div class="text-gray-500 italic text-center py-8">Loading execution logs...</div>
          {:else if executionLogs}
            <pre class="whitespace-pre-wrap break-words">{executionLogs}</pre>
          {:else}
            <div class="text-gray-500 italic text-center py-8">
              No logs for this execution.
            </div>
          {/if}
        </div>
      </div>
    {:else}
      <div class="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
        Select an execution above to view its logs.
      </div>
    {/if}

    <!-- Steps Preview (collapsed) -->
    {#if task.steps?.length > 0}
      <details class="mt-6">
        <summary class="cursor-pointer text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
          View {task.steps.length} step(s)
        </summary>
        <div class="mt-3 space-y-2">
          {#each task.steps as step, i}
            <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div class="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium">
                {i + 1}
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  {step.codex?.name || `Step ${i + 1}`}
                </p>
              </div>
              <Badge color={getStatusColor(step.status)} class="text-xs">{step.status}</Badge>
              {#if step.codex?.name}
                <a 
                  href="/extensions/codex_viewer/{step.codex.name}" 
                  class="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                  View Code
                </a>
              {/if}
            </div>
          {/each}
        </div>
      </details>
    {/if}
  {:else}
    <Card class="text-center py-8">
      <p class="text-gray-500 dark:text-gray-400">Task not found.</p>
    </Card>
  {/if}
</div>

<style>
  pre {
    margin: 0;
  }
  @keyframes slide-in {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  :global(.animate-slide-in) {
    animation: slide-in 0.3s ease-out;
  }
</style>
