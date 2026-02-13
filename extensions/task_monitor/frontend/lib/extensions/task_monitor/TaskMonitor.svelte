<script lang="ts">
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';
  import { goto } from '$app/navigation';
  import { backend } from '$lib/canisters';
  import { Button, Badge, Card, Spinner, Input, Select } from 'flowbite-svelte';
  
  interface TaskSchedule {
    _id: string;
    name: string;
    disabled: boolean;
    run_at: number;
    repeat_every: number;
    last_run_at: number;
  }
  
  interface Task {
    _id: string;
    name: string;
    status: string;
    metadata: string;
    step_to_execute: number;
    total_steps: number;
    schedules: TaskSchedule[];
    executions_count: number;
    created_at: number | null;
    updated_at: number | null;
  }
  
  let tasks: Task[] = [];
  let loading = true;
  let error = '';
  let refreshInterval: any = null;
  let searchTerm = '';
  let statusFilter = '';

  // Toast notification system
  interface Toast { id: number; message: string; type: 'success' | 'error' | 'info'; }
  let toasts: Toast[] = [];
  let toastCounter = 0;
  function showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
    const id = ++toastCounter;
    toasts = [...toasts, { id, message, type }];
    setTimeout(() => { toasts = toasts.filter(t => t.id !== id); }, 4000);
  }

  // Per-task action loading states
  let runningTasks: Record<string, boolean> = {};
  let deletingTasks: Record<string, boolean> = {};

  // Pagination state
  const PAGE_SIZE = 10;
  let fromId = 1;
  let maxId = 0;
  let nextFromId: number | null = null;
  let hasMore = false;
  let pageHistory: number[] = [1];
  
  // Stats computed from tasks
  $: stats = {
    total: tasks.length,
    running: tasks.filter(t => t.status?.toLowerCase() === 'running').length,
    pending: tasks.filter(t => t.status?.toLowerCase() === 'pending').length,
    completed: tasks.filter(t => t.status?.toLowerCase() === 'completed').length,
    failed: tasks.filter(t => t.status?.toLowerCase() === 'failed').length
  };
  
  // Filtered tasks
  $: filteredTasks = tasks.filter(task => {
    const matchesSearch = !searchTerm || 
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      getDescription(task.metadata).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || task.status?.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });
  
  onMount(() => {
    loadTasks();
    // Auto-refresh every 10 seconds
    refreshInterval = setInterval(loadTasks, 10000);
    return () => {
      if (refreshInterval) clearInterval(refreshInterval);
    };
  });
  
  async function loadTasks() {
    try {
      const response = await backend.extension_sync_call({
        extension_name: 'task_monitor',
        function_name: 'get_all_tasks',
        args: JSON.stringify({ from_id: fromId, page_size: PAGE_SIZE })
      });
      if (response.success) {
        const data = typeof response.response === 'string' ? JSON.parse(response.response) : response.response;
        tasks = data.tasks || [];
        maxId = data.max_id || 0;
        nextFromId = data.next_from_id || null;
        hasMore = data.has_more || false;
        error = '';
      } else {
        error = response.response || 'Failed to load tasks';
      }
    } catch (e: any) {
      error = 'Error loading tasks: ' + e.message;
    } finally {
      loading = false;
    }
  }

  function goNextPage() {
    if (nextFromId) {
      pageHistory = [...pageHistory, nextFromId];
      fromId = nextFromId;
      loadTasks();
    }
  }

  function goPrevPage() {
    if (pageHistory.length > 1) {
      pageHistory = pageHistory.slice(0, -1);
      fromId = pageHistory[pageHistory.length - 1];
      loadTasks();
    }
  }
  
  function viewTaskDetails(taskId: string) {
    goto(`/monitor/${taskId}`);
  }
  
  async function toggleSchedule(scheduleId: string, disabled: boolean) {
    try {
      const response = await backend.extension_sync_call({
        extension_name: 'task_monitor',
        function_name: 'toggle_schedule',
        args: JSON.stringify({ 
          schedule_id: scheduleId, 
          disabled: !disabled 
        })
      });
      if (response.success) {
        showToast(disabled ? 'Schedule resumed' : 'Schedule paused', 'success');
        await loadTasks();
      } else {
        showToast(response.error || 'Failed to toggle schedule', 'error');
      }
    } catch (e: any) {
      showToast(e.message || 'Error toggling schedule', 'error');
    }
  }
  
  async function runTaskNow(taskId: string) {
    runningTasks[taskId] = true;
    runningTasks = runningTasks;
    
    try {
      const response = await backend.extension_sync_call({
        extension_name: 'task_monitor',
        function_name: 'run_task_now',
        args: JSON.stringify({ task_id: taskId })
      });
      if (response.success) {
        const data = typeof response.response === 'string' ? JSON.parse(response.response) : response.response;
        showToast(data.message || 'Task started', 'success');
        await loadTasks();
      } else {
        showToast(response.error || 'Failed to run task', 'error');
      }
    } catch (e: any) {
      showToast(e.message || 'Error running task', 'error');
    } finally {
      delete runningTasks[taskId];
      runningTasks = runningTasks;
    }
  }
  
  async function deleteTask(taskId: string) {
    deletingTasks[taskId] = true;
    deletingTasks = deletingTasks;
    
    try {
      const response = await backend.extension_sync_call({
        extension_name: 'task_monitor',
        function_name: 'delete_task',
        args: JSON.stringify({ task_id: taskId })
      });
      if (response.success) {
        const data = typeof response.response === 'string' ? JSON.parse(response.response) : response.response;
        showToast(data.message || 'Task deleted', 'success');
        await loadTasks();
      } else {
        showToast(response.error || 'Failed to delete task', 'error');
      }
    } catch (e: any) {
      showToast(e.message || 'Error deleting task', 'error');
    } finally {
      delete deletingTasks[taskId];
      deletingTasks = deletingTasks;
    }
  }
  
  function getStatusColor(status: string): string {
    const statusMap: Record<string, string> = {
      'pending': 'yellow',
      'running': 'blue',
      'completed': 'green',
      'failed': 'red',
      'cancelled': 'gray'
    };
    return statusMap[status?.toLowerCase()] || 'gray';
  }
  
  function getDescription(metadata: string): string {
    if (!metadata) return '';
    try {
      const parsed = JSON.parse(metadata);
      return parsed.description || parsed.desc || '';
    } catch {
      // If not JSON, return truncated raw string
      return metadata.length > 80 ? metadata.substring(0, 80) + '...' : metadata;
    }
  }
  
  function formatTimestamp(timestamp: number | null): string {
    if (!timestamp) return '-';
    const date = new Date(timestamp / 1000000);
    return date.toLocaleString();
  }
  
  function formatRelativeTime(timestamp: number | null): string {
    if (!timestamp) return '-';
    const date = new Date(timestamp / 1000000);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    
    if (diffSec < 60) return 'Just now';
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHour < 24) return `${diffHour}h ago`;
    return `${diffDay}d ago`;
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
  
  function getProgressPercent(task: Task): number {
    if (!task.total_steps || task.total_steps === 0) return 0;
    return Math.round((task.step_to_execute / task.total_steps) * 100);
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

<div class="p-6 max-w-7xl mx-auto">
  <!-- Header -->
  <div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
      {$_('extensions.task_monitor.title')}
    </h1>
    <Button on:click={loadTasks} size="sm" class="flex items-center gap-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
      {$_('extensions.task_monitor.refresh')}
    </Button>
  </div>

  {#if error}
    <div class="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg flex items-center gap-2">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
      </svg>
      {error}
    </div>
  {/if}

  {#if loading}
    <div class="flex justify-center items-center py-16">
      <Spinner size="12" />
    </div>
  {:else}
    <!-- Stats Dashboard -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <div class="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Total Tasks</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <div class="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
          {stats.running}
          {#if stats.running > 0}
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          {/if}
        </div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Running</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <div class="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{stats.pending}</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Pending</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <div class="text-2xl font-bold text-green-600 dark:text-green-400">{stats.completed}</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Completed</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <div class="text-2xl font-bold text-red-600 dark:text-red-400">{stats.failed}</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Failed</div>
      </div>
    </div>

    <!-- Search and Filter -->
    <div class="flex flex-col sm:flex-row gap-3 mb-6">
      <div class="flex-1">
        <Input 
          placeholder="Search tasks..." 
          bind:value={searchTerm}
          class="w-full"
        >
          <svg slot="left" class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </Input>
      </div>
      <Select bind:value={statusFilter} class="w-full sm:w-48">
        <option value="">All Status</option>
        <option value="running">Running</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="failed">Failed</option>
      </Select>
    </div>

    {#if filteredTasks.length === 0}
      <Card class="text-center py-12">
        <svg class="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
        <p class="text-gray-500 dark:text-gray-400">
          {$_('extensions.task_monitor.no_tasks')}
        </p>
      </Card>
    {:else}
      <!-- Task Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {#each filteredTasks as task}
          <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
            <!-- Card Header -->
            <div class="p-4 border-b border-gray-100 dark:border-gray-700">
              <div class="flex justify-between items-start gap-2">
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-gray-900 dark:text-white truncate">{task.name}</h3>
                  <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                    ID: {task._id.substring(0, 12)}
                  </p>
                </div>
                <div class="flex items-center gap-2">
                  {#if task.status?.toLowerCase() === 'running'}
                    <span class="relative flex h-2.5 w-2.5">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                    </span>
                  {/if}
                  <Badge color={getStatusColor(task.status)}>
                    {task.status || 'Unknown'}
                  </Badge>
                </div>
              </div>
            </div>
            
            <!-- Card Body -->
            <div class="p-4 space-y-4">
              <!-- Description -->
              {#if getDescription(task.metadata)}
                <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {getDescription(task.metadata)}
                </p>
              {/if}
              
              <!-- Schedule & Timing -->
              <div class="flex flex-wrap gap-3 text-sm">
                {#if task.schedules.length > 0}
                  {@const schedule = task.schedules[0]}
                  <div class="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="{schedule.disabled ? 'line-through text-gray-400' : ''}">
                      {formatInterval(schedule.repeat_every)}
                    </span>
                    {#if schedule.disabled}
                      <Badge color="gray" class="text-xs">Paused</Badge>
                    {/if}
                  </div>
                  {#if schedule.last_run_at}
                    <div class="flex items-center gap-1.5 text-gray-500 dark:text-gray-500">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>Last: {formatRelativeTime(schedule.last_run_at)}</span>
                    </div>
                  {/if}
                {:else}
                  <div class="flex items-center gap-1.5 text-gray-500 dark:text-gray-500">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>One-time task</span>
                  </div>
                {/if}
                <div class="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                  <button 
                    on:click={() => viewTaskDetails(task._id)}
                    class="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    {task.executions_count} runs
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Card Footer / Actions -->
            <div class="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 rounded-b-lg flex gap-2">
              <Button size="xs" color="light" class="flex-1" on:click={() => viewTaskDetails(task._id)}>
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                {$_('extensions.task_monitor.view')}
              </Button>
              <Button size="xs" color="green" class="flex-1" disabled={runningTasks[task._id]} on:click={() => runTaskNow(task._id)}>
                {#if runningTasks[task._id]}
                  <Spinner size="4" class="mr-1" />
                  Starting...
                {:else}
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {$_('extensions.task_monitor.run')}
                {/if}
              </Button>
              {#if task.schedules.length > 0}
                {@const schedule = task.schedules[0]}
                <Button 
                  size="xs" 
                  color={schedule.disabled ? 'blue' : 'yellow'}
                  outline
                  on:click={() => toggleSchedule(schedule._id, schedule.disabled)}
                >
                  {schedule.disabled ? 'Resume' : 'Pause'}
                </Button>
              {/if}
              <Button size="xs" color="red" outline disabled={deletingTasks[task._id]} on:click={() => deleteTask(task._id)}>
                {#if deletingTasks[task._id]}
                  <Spinner size="4" />
                {:else}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                {/if}
              </Button>
            </div>
          </div>
        {/each}
      </div>

      <!-- Pagination Controls -->
      <div class="flex items-center justify-between mt-6">
        <button
          on:click={goPrevPage}
          disabled={pageHistory.length <= 1}
          class="text-sm px-4 py-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
        >
          Previous
        </button>
        <span class="text-xs text-gray-500 dark:text-gray-400">
          Page {pageHistory.length}
        </span>
        <button
          on:click={goNextPage}
          disabled={!hasMore}
          class="text-sm px-4 py-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
        >
          Next
        </button>
      </div>
    {/if}
  {/if}
</div>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  @keyframes slide-in {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  :global(.animate-slide-in) {
    animation: slide-in 0.3s ease-out;
  }
</style>
