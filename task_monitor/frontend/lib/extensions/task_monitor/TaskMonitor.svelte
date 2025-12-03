<script lang="ts">
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';
  import { goto } from '$app/navigation';
  import { backend } from '$lib/canisters';
  import { Button, Badge, Card, Spinner, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, TableBodyRow } from 'flowbite-svelte';
  
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
        args: '{}'
      });
      if (response.success) {
        const data = typeof response.response === 'string' ? JSON.parse(response.response) : response.response;
        tasks = data.tasks || [];
        error = '';
      } else {
        error = response.response || 'Failed to load tasks';
      }
    } catch (e) {
      error = 'Error loading tasks: ' + e.message;
    } finally {
      loading = false;
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
        await loadTasks();
      } else {
        alert(response.error || 'Failed to toggle schedule');
      }
    } catch (e: any) {
      alert(e.message || 'Error toggling schedule');
    }
  }
  
  async function runTaskNow(taskId: string) {
    if (!confirm($_('extensions.task_monitor.confirm_run'))) return;
    
    try {
      const response = await backend.extension_sync_call({
        extension_name: 'task_monitor',
        function_name: 'run_task_now',
        args: JSON.stringify({ task_id: taskId })
      });
      if (response.success) {
        const data = typeof response.response === 'string' ? JSON.parse(response.response) : response.response;
        alert(data.message || 'Task started');
        await loadTasks();
      } else {
        alert(response.error || 'Failed to run task');
      }
    } catch (e: any) {
      alert(e.message || 'Error running task');
    }
  }
  
  async function deleteTask(taskId: string) {
    if (!confirm($_('extensions.task_monitor.confirm_delete'))) return;
    
    try {
      const response = await backend.extension_sync_call({
        extension_name: 'task_monitor',
        function_name: 'delete_task',
        args: JSON.stringify({ task_id: taskId })
      });
      if (response.success) {
        const data = typeof response.response === 'string' ? JSON.parse(response.response) : response.response;
        alert(data.message || 'Task deleted');
        await loadTasks();
      } else {
        alert(response.error || 'Failed to delete task');
      }
    } catch (e: any) {
      alert(e.message || 'Error deleting task');
    }
  }
  
  function getStatusBadge(status: string) {
    const statusMap: Record<string, string> = {
      'pending': 'yellow',
      'running': 'blue',
      'completed': 'green',
      'failed': 'red',
      'cancelled': 'gray'
    };
    return statusMap[status.toLowerCase()] || 'gray';
  }
  
  function formatTimestamp(timestamp: number | null): string {
    if (!timestamp) return '-';
    return new Date(timestamp / 1000000).toLocaleString();
  }
  
  function formatInterval(seconds: number): string {
    if (!seconds) return 'One-time';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `Every ${hours}h ${minutes}m`;
    if (minutes > 0) return `Every ${minutes}m`;
    return `Every ${seconds}s`;
  }
</script>

<div class="p-6">
  <div class="mb-6 flex justify-between items-center">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
      {$_('extensions.task_monitor.title')}
    </h1>
    <Button on:click={loadTasks} size="sm">
      {$_('extensions.task_monitor.refresh')}
    </Button>
  </div>

  {#if error}
    <div class="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded">
      {error}
    </div>
  {/if}

  {#if loading}
    <div class="flex justify-center items-center py-12">
      <Spinner size="12" />
    </div>
  {:else if tasks.length === 0}
    <Card>
      <p class="text-gray-500 dark:text-gray-400 text-center py-8">
        {$_('extensions.task_monitor.no_tasks')}
      </p>
    </Card>
  {:else}
    <div class="overflow-x-auto">
      <Table striped={true}>
        <TableHead>
          <TableHeadCell>{$_('extensions.task_monitor.name_column')}</TableHeadCell>
          <TableHeadCell>{$_('extensions.task_monitor.status')}</TableHeadCell>
          <TableHeadCell>{$_('extensions.task_monitor.progress')}</TableHeadCell>
          <TableHeadCell>{$_('extensions.task_monitor.schedule')}</TableHeadCell>
          <TableHeadCell>{$_('extensions.task_monitor.executions')}</TableHeadCell>
          <TableHeadCell>{$_('extensions.task_monitor.actions')}</TableHeadCell>
        </TableHead>
        <TableBody>
          {#each tasks as task}
            <TableBodyRow>
              <TableBodyCell>
                <div>
                  <div class="font-medium text-gray-900 dark:text-white">{task.name}</div>
                  {#if task.metadata}
                    <div class="text-sm text-gray-500 dark:text-gray-400">{task.metadata}</div>
                  {/if}
                  <div class="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    ID: {task._id.substring(0, 8)}...
                  </div>
                </div>
              </TableBodyCell>
              <TableBodyCell>
                <Badge color={getStatusBadge(task.status)}>
                  {task.status}
                </Badge>
              </TableBodyCell>
              <TableBodyCell>
                <div class="text-sm">
                  {task.step_to_execute} / {task.total_steps} steps
                </div>
                {#if task.total_steps > 0}
                  <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mt-1">
                    <div class="bg-blue-600 h-2 rounded-full" style="width: {(task.step_to_execute / task.total_steps) * 100}%"></div>
                  </div>
                {/if}
              </TableBodyCell>
              <TableBodyCell>
                {#if task.schedules.length > 0}
                  {#each task.schedules as schedule}
                    <div class="mb-1">
                      <Badge color={schedule.disabled ? 'gray' : 'green'}>
                        {formatInterval(schedule.repeat_every)}
                      </Badge>
                      <button
                        on:click={() => toggleSchedule(schedule._id, schedule.disabled)}
                        class="ml-2 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {schedule.disabled ? 'Enable' : 'Disable'}
                      </button>
                    </div>
                  {/each}
                {:else}
                  <span class="text-gray-500 dark:text-gray-400">-</span>
                {/if}
              </TableBodyCell>
              <TableBodyCell>
                <button
                  on:click={() => viewTaskDetails(task._id)}
                  class="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {task.executions_count}
                </button>
              </TableBodyCell>
              <TableBodyCell>
                <div class="flex gap-2">
                  <Button size="xs" color="light" on:click={() => viewTaskDetails(task._id)}>
                    {$_('extensions.task_monitor.view')}
                  </Button>
                  <Button size="xs" class="bg-blue-600 text-white hover:bg-blue-700" on:click={() => runTaskNow(task._id)}>
                    {$_('extensions.task_monitor.run')}
                  </Button>
                  <Button size="xs" class="bg-red-600 text-white hover:bg-red-700" on:click={() => deleteTask(task._id)}>
                    {$_('extensions.task_monitor.delete')}
                  </Button>
                </div>
              </TableBodyCell>
            </TableBodyRow>
          {/each}
        </TableBody>
      </Table>
    </div>
  {/if}
</div>

<style>
  :global(.dark) pre {
    color: #e5e7eb;
  }
</style>
