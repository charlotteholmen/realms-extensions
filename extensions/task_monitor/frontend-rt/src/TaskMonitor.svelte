<script lang="ts">
	let { ctx }: { ctx: any } = $props();

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

	interface Toast {
		id: number;
		message: string;
		type: 'success' | 'error' | 'info';
	}

	let tasks: Task[] = $state([]);
	let loading = $state(true);
	let error = $state('');
	let searchTerm = $state('');
	let statusFilter = $state('');
	let refreshInterval: ReturnType<typeof setInterval> | null = $state(null);

	let toasts: Toast[] = $state([]);
	let toastCounter = $state(0);

	let runningTasks: Record<string, boolean> = $state({});
	let deletingTasks: Record<string, boolean> = $state({});

	const PAGE_SIZE = 10;
	let fromId = $state(1);
	let maxId = $state(0);
	let nextFromId: number | null = $state(null);
	let hasMore = $state(false);
	let pageHistory: number[] = $state([1]);

	let selectedTask: any = $state(null);
	let taskDetail: any = $state(null);
	let taskLogs: any[] = $state([]);
	let detailLoading = $state(false);

	let stats = $derived({
		total: tasks.length,
		running: tasks.filter((t) => t.status?.toLowerCase() === 'running').length,
		pending: tasks.filter((t) => t.status?.toLowerCase() === 'pending').length,
		completed: tasks.filter((t) => t.status?.toLowerCase() === 'completed').length,
		failed: tasks.filter((t) => t.status?.toLowerCase() === 'failed').length,
	});

	let filteredTasks = $derived(
		tasks.filter((task) => {
			const matchesSearch =
				!searchTerm ||
				task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				getDescription(task.metadata).toLowerCase().includes(searchTerm.toLowerCase());
			const matchesStatus =
				!statusFilter || task.status?.toLowerCase() === statusFilter.toLowerCase();
			return matchesSearch && matchesStatus;
		}),
	);

	function showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
		const id = ++toastCounter;
		toasts = [...toasts, { id, message, type }];
		setTimeout(() => {
			toasts = toasts.filter((t) => t.id !== id);
		}, 4000);
	}

	async function callSync(fn: string, args: Record<string, any> = {}) {
		const raw = await ctx.backend.extension_sync_call(
			JSON.stringify({
				extension_name: 'task_monitor',
				function_name: fn,
				args: JSON.stringify(args),
			}),
		);
		const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
		if (parsed?.response) {
			return typeof parsed.response === 'string' ? JSON.parse(parsed.response) : parsed.response;
		}
		return parsed;
	}

	async function loadTasks() {
		try {
			const data = await callSync('get_all_tasks', { from_id: fromId, page_size: PAGE_SIZE });
			tasks = data?.tasks ?? data?.data?.tasks ?? (Array.isArray(data) ? data : []);
			maxId = data?.max_id ?? 0;
			nextFromId = data?.next_from_id ?? null;
			hasMore = data?.has_more ?? false;
			error = '';
		} catch (e: any) {
			error = 'Error loading tasks: ' + (e?.message || String(e));
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

	async function viewTaskDetails(taskId: string) {
		selectedTask = taskId;
		detailLoading = true;
		try {
			const [det, logs] = await Promise.all([
				callSync('get_task_details', { task_id: taskId }).catch(() => null),
				callSync('get_task_logs', { task_id: taskId }).catch(() => ({ data: [] })),
			]);
			taskDetail = det?.data ?? det;
			taskLogs = logs?.data ?? (Array.isArray(logs) ? logs : []);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			detailLoading = false;
		}
	}

	function goBackToList() {
		selectedTask = null;
		taskDetail = null;
		taskLogs = [];
	}

	async function toggleSchedule(scheduleId: string, disabled: boolean) {
		try {
			const res = await callSync('toggle_schedule', {
				schedule_id: scheduleId,
				disabled: !disabled,
			});
			showToast(disabled ? 'Schedule resumed' : 'Schedule paused', 'success');
			await loadTasks();
		} catch (e: any) {
			showToast(e?.message || 'Error toggling schedule', 'error');
		}
	}

	async function runTaskNow(taskId: string) {
		runningTasks[taskId] = true;
		try {
			const data = await callSync('run_task_now', { task_id: taskId });
			showToast(data?.message || 'Task started', 'success');
			await loadTasks();
			if (selectedTask === taskId) await viewTaskDetails(taskId);
		} catch (e: any) {
			showToast(e?.message || 'Error running task', 'error');
		} finally {
			delete runningTasks[taskId];
		}
	}

	async function deleteTask(taskId: string) {
		deletingTasks[taskId] = true;
		try {
			const data = await callSync('delete_task', { task_id: taskId });
			showToast(data?.message || 'Task deleted', 'success');
			if (selectedTask === taskId) goBackToList();
			await loadTasks();
		} catch (e: any) {
			showToast(e?.message || 'Error deleting task', 'error');
		} finally {
			delete deletingTasks[taskId];
		}
	}

	function getStatusColor(status: string): string {
		const s = status?.toLowerCase();
		if (s === 'running') return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
		if (s === 'pending')
			return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
		if (s === 'completed')
			return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
		if (s === 'failed') return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
		return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
	}

	function getDescription(metadata: string): string {
		if (!metadata) return '';
		try {
			const parsed = JSON.parse(metadata);
			return parsed.description || parsed.desc || '';
		} catch {
			return metadata.length > 80 ? metadata.substring(0, 80) + '...' : metadata;
		}
	}

	function formatRelativeTime(timestamp: number | null): string {
		if (!timestamp) return '-';
		const diffMs = Date.now() - new Date(timestamp).getTime();
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

	function formatTimestamp(ts: number | null): string {
		if (!ts) return '-';
		return new Date(ts).toLocaleString();
	}

	function getProgressPercent(task: Task): number {
		if (!task.total_steps || task.total_steps === 0) return 0;
		return Math.round((task.step_to_execute / task.total_steps) * 100);
	}

	$effect(() => {
		loadTasks();
		const interval = setInterval(loadTasks, 10000);
		return () => clearInterval(interval);
	});
</script>

<!-- Toast Notifications -->
{#if toasts.length > 0}
	<div class="fixed top-4 right-4 z-50 flex flex-col gap-2" style="min-width:300px">
		{#each toasts as toast (toast.id)}
			<div
				class="px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2
					{toast.type === 'success' ? 'bg-green-600 text-white' : ''}
					{toast.type === 'error' ? 'bg-red-600 text-white' : ''}
					{toast.type === 'info' ? 'bg-blue-600 text-white' : ''}"
			>
				{#if toast.type === 'success'}
					<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
				{:else if toast.type === 'error'}
					<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
				{:else}
					<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
				{/if}
				{toast.message}
			</div>
		{/each}
	</div>
{/if}

<div class="p-6 max-w-7xl mx-auto">
	<!-- Detail View -->
	{#if selectedTask}
		<div class="mb-4">
			<button
				onclick={goBackToList}
				class="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
				Back to tasks
			</button>
		</div>

		{#if detailLoading}
			<div class="flex justify-center py-16">
				<svg class="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>
			</div>
		{:else if taskDetail}
			<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
				<div class="p-6 border-b border-gray-100 dark:border-gray-700">
					<div class="flex items-start justify-between gap-4">
						<div>
							<h2 class="text-xl font-bold text-gray-900 dark:text-white">{taskDetail.name || selectedTask}</h2>
							<p class="text-xs text-gray-400 mt-1 font-mono">{selectedTask}</p>
						</div>
						{#if taskDetail.status}
							<span class="px-2.5 py-1 rounded-full text-xs font-medium {getStatusColor(taskDetail.status)}">
								{taskDetail.status}
							</span>
						{/if}
					</div>
				</div>

				<div class="p-6 space-y-4">
					{#if taskDetail.metadata}
						{@const desc = getDescription(taskDetail.metadata)}
						{#if desc}
							<p class="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
						{/if}
					{/if}

					<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
						<div>
							<span class="block text-gray-500 dark:text-gray-400">Created</span>
							<span class="font-medium text-gray-900 dark:text-white">{formatTimestamp(taskDetail.created_at)}</span>
						</div>
						<div>
							<span class="block text-gray-500 dark:text-gray-400">Updated</span>
							<span class="font-medium text-gray-900 dark:text-white">{formatTimestamp(taskDetail.updated_at)}</span>
						</div>
						<div>
							<span class="block text-gray-500 dark:text-gray-400">Executions</span>
							<span class="font-medium text-gray-900 dark:text-white">{taskDetail.executions_count ?? '-'}</span>
						</div>
						<div>
							<span class="block text-gray-500 dark:text-gray-400">Progress</span>
							<span class="font-medium text-gray-900 dark:text-white">
								{taskDetail.step_to_execute ?? 0} / {taskDetail.total_steps ?? 0}
							</span>
						</div>
					</div>

					{#if taskDetail.schedules?.length > 0}
						<div>
							<h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Schedules</h3>
							<div class="space-y-2">
								{#each taskDetail.schedules as sched}
									<div class="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg px-4 py-2 text-sm">
										<div class="flex items-center gap-2">
											<span class={sched.disabled ? 'line-through text-gray-400' : 'text-gray-700 dark:text-gray-300'}>
												{formatInterval(sched.repeat_every)}
											</span>
											{#if sched.disabled}
												<span class="px-1.5 py-0.5 rounded text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300">Paused</span>
											{/if}
										</div>
										<button
											onclick={() => toggleSchedule(sched._id, sched.disabled)}
											class="text-xs text-blue-600 dark:text-blue-400 hover:underline"
										>
											{sched.disabled ? 'Resume' : 'Pause'}
										</button>
									</div>
								{/each}
							</div>
						</div>
					{/if}
				</div>

				<div class="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 flex gap-3">
					<button
						onclick={() => runTaskNow(selectedTask)}
						disabled={runningTasks[selectedTask]}
						class="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"
					>
						{#if runningTasks[selectedTask]}
							<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>
							Starting...
						{:else}
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/></svg>
							Run Now
						{/if}
					</button>
					<button
						onclick={() => deleteTask(selectedTask)}
						disabled={deletingTasks[selectedTask]}
						class="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"
					>
						{#if deletingTasks[selectedTask]}
							<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>
						{:else}
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
						{/if}
						Delete
					</button>
				</div>
			</div>

			<!-- Execution Logs -->
			{#if taskLogs.length > 0}
				<div class="mt-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
					<div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
						<h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300">Execution History</h3>
					</div>
					<div class="max-h-96 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700">
						{#each taskLogs as log}
							<div class="px-6 py-3 flex items-start gap-3 text-sm">
								<span class="text-xs text-gray-400 font-mono whitespace-nowrap mt-0.5">
									{log.timestamp || log.time || ''}
								</span>
								<span class="text-gray-700 dark:text-gray-300 break-words">
									{log.message || log.output || JSON.stringify(log)}
								</span>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		{/if}

	<!-- List View -->
	{:else}
		<div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
			<h1 class="text-2xl font-bold text-gray-900 dark:text-white">Task Monitor</h1>
			<button
				onclick={loadTasks}
				class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
				Refresh
			</button>
		</div>

		{#if error}
			<div class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2 text-sm">
				<svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
				{error}
			</div>
		{/if}

		{#if loading}
			<div class="flex justify-center items-center py-16">
				<svg class="animate-spin h-10 w-10 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>
			</div>
		{:else}
			<!-- Stats -->
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

			<!-- Search & Filter -->
			<div class="flex flex-col sm:flex-row gap-3 mb-6">
				<div class="flex-1 relative">
					<svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
					<input
						type="text"
						bind:value={searchTerm}
						placeholder="Search tasks..."
						class="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
					/>
				</div>
				<select
					bind:value={statusFilter}
					class="w-full sm:w-48 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
				>
					<option value="">All Status</option>
					<option value="running">Running</option>
					<option value="pending">Pending</option>
					<option value="completed">Completed</option>
					<option value="failed">Failed</option>
				</select>
			</div>

			{#if filteredTasks.length === 0}
				<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center">
					<svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
					<p class="text-gray-500 dark:text-gray-400">{searchTerm || statusFilter ? 'No matching tasks' : 'No tasks found'}</p>
				</div>
			{:else}
				<!-- Task Cards Grid -->
				<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
					{#each filteredTasks as task (task._id)}
						<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 flex flex-col">
							<!-- Card Header -->
							<div class="p-4 border-b border-gray-100 dark:border-gray-700">
								<div class="flex justify-between items-start gap-2">
									<div class="flex-1 min-w-0">
										<h3 class="font-semibold text-gray-900 dark:text-white truncate">{task.name}</h3>
										<p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">ID: {task._id.substring(0, 12)}</p>
									</div>
									<div class="flex items-center gap-2">
										{#if task.status?.toLowerCase() === 'running'}
											<span class="relative flex h-2.5 w-2.5">
												<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
												<span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
											</span>
										{/if}
										<span class="px-2 py-0.5 rounded-full text-xs font-medium {getStatusColor(task.status)}">
											{task.status || 'Unknown'}
										</span>
									</div>
								</div>
							</div>

							<!-- Card Body -->
							<div class="p-4 space-y-3 flex-1">
								{#if getDescription(task.metadata)}
									<p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{getDescription(task.metadata)}</p>
								{/if}

								<div class="flex flex-wrap gap-3 text-sm">
									{#if task.schedules?.length > 0}
										{@const schedule = task.schedules[0]}
										<div class="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
											<span class={schedule.disabled ? 'line-through text-gray-400' : ''}>
												{formatInterval(schedule.repeat_every)}
											</span>
											{#if schedule.disabled}
												<span class="px-1.5 py-0.5 rounded text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">Paused</span>
											{/if}
										</div>
										{#if schedule.last_run_at}
											<div class="flex items-center gap-1.5 text-gray-500 dark:text-gray-500">
												<span>Last: {formatRelativeTime(schedule.last_run_at)}</span>
											</div>
										{/if}
									{:else}
										<div class="flex items-center gap-1.5 text-gray-500 dark:text-gray-500">
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
											<span>One-time task</span>
										</div>
									{/if}
									<button
										onclick={() => viewTaskDetails(task._id)}
										class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
										{task.executions_count} runs
									</button>
								</div>
							</div>

							<!-- Card Footer -->
							<div class="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 rounded-b-xl flex gap-2">
								<button
									onclick={() => viewTaskDetails(task._id)}
									class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
								>
									<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
									View
								</button>
								<button
									onclick={() => runTaskNow(task._id)}
									disabled={runningTasks[task._id]}
									class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded-lg transition-colors"
								>
									{#if runningTasks[task._id]}
										<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>
									{:else}
										<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/></svg>
									{/if}
									Run
								</button>
								{#if task.schedules?.length > 0}
									{@const schedule = task.schedules[0]}
									<button
										onclick={() => toggleSchedule(schedule._id, schedule.disabled)}
										class="px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors
											{schedule.disabled
												? 'text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30'
												: 'text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/30'}"
									>
										{schedule.disabled ? 'Resume' : 'Pause'}
									</button>
								{/if}
								<button
									onclick={() => deleteTask(task._id)}
									disabled={deletingTasks[task._id]}
									class="px-3 py-1.5 text-xs font-medium text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 disabled:opacity-50 transition-colors"
								>
									{#if deletingTasks[task._id]}
										<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>
									{:else}
										<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
									{/if}
								</button>
							</div>
						</div>
					{/each}
				</div>

				<!-- Pagination -->
				<div class="flex items-center justify-between mt-6">
					<button
						onclick={goPrevPage}
						disabled={pageHistory.length <= 1}
						class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
					>
						Previous
					</button>
					<span class="text-xs text-gray-500 dark:text-gray-400">Page {pageHistory.length}</span>
					<button
						onclick={goNextPage}
						disabled={!hasMore}
						class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
					>
						Next
					</button>
				</div>
			{/if}
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
</style>
