<script lang="ts">
	let { backend, extensionId = 'task_monitor', version = '', principal = '', isAuthenticated = true }: any = $props();

	let tasks: any[] = $state([]);
	let loading = $state(true);
	let error = $state('');
	let selectedTask: any = $state(null);
	let taskLogs: any[] = $state([]);
	let detailLoading = $state(false);
	let search = $state('');

	let filtered = $derived(
		search.trim()
			? tasks.filter((t) => (t.name ?? t.id ?? '').toLowerCase().includes(search.toLowerCase()))
			: tasks
	);

	async function callExt(fn: string, args: string = '{}') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function loadTasks() {
		loading = true;
		error = '';
		try {
			const res = await callExt('get_all_tasks', '{}');
			tasks = res?.data ?? (Array.isArray(res) ? res : []);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function viewTask(taskId: string) {
		detailLoading = true;
		try {
			const [det, logs] = await Promise.all([
				callExt('get_task_details', JSON.stringify({ task_id: taskId })),
				callExt('get_task_logs', JSON.stringify({ task_id: taskId })).catch(() => ({ data: [] })),
			]);
			selectedTask = det?.data ?? det;
			taskLogs = logs?.data ?? (Array.isArray(logs) ? logs : []);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			detailLoading = false;
		}
	}

	async function toggleSchedule(taskId: string) {
		try {
			await callExt('toggle_schedule', JSON.stringify({ task_id: taskId }));
			await loadTasks();
		} catch (e: any) { error = e?.message || String(e); }
	}

	async function runNow(taskId: string) {
		try {
			await callExt('run_task_now', JSON.stringify({ task_id: taskId }));
			if (selectedTask) await viewTask(taskId);
		} catch (e: any) { error = e?.message || String(e); }
	}

	async function deleteTask(taskId: string) {
		try {
			await callExt('delete_task', JSON.stringify({ task_id: taskId }));
			selectedTask = null;
			await loadTasks();
		} catch (e: any) { error = e?.message || String(e); }
	}

	function goBack() { selectedTask = null; taskLogs = []; }

	$effect(() => { void loadTasks(); });
</script>

<div class="rt-tm">
	<div class="header">
		<h2>Task Monitor</h2>
		<span class="badge">v{version}</span>
		<button class="refresh" onclick={loadTasks} disabled={loading}>↻</button>
	</div>

	{#if error}
		<div class="error">{error}</div>
	{/if}

	{#if selectedTask}
		<button class="back" onclick={goBack}>← Back to tasks</button>
		<div class="card">
			<h3>{selectedTask.name || selectedTask.id}</h3>
			<div class="meta-row">
				{#if selectedTask.status}<span class="tag">{selectedTask.status}</span>{/if}
				{#if selectedTask.schedule}<span class="tag outline">Schedule: {selectedTask.schedule}</span>{/if}
			</div>
			<div class="actions">
				<button class="btn" onclick={() => runNow(selectedTask.id)}>Run Now</button>
				<button class="btn outline" onclick={() => toggleSchedule(selectedTask.id)}>Toggle Schedule</button>
				<button class="btn danger" onclick={() => deleteTask(selectedTask.id)}>Delete</button>
			</div>
			{#if selectedTask.last_run}
				<div class="meta">Last run: {selectedTask.last_run}</div>
			{/if}
		</div>

		{#if taskLogs.length > 0}
			<div class="card">
				<h3>Logs</h3>
				<div class="log-list">
					{#each taskLogs as log}
						<div class="log-entry">
							<span class="log-time">{log.timestamp || log.time || ''}</span>
							<span class="log-msg">{log.message || log.output || JSON.stringify(log)}</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	{:else}
		{#if loading}
			<div class="empty">Loading tasks…</div>
		{:else}
			<div class="search-row">
				<input type="text" bind:value={search} placeholder="Search tasks…" />
			</div>
			{#if filtered.length === 0}
				<div class="empty">{search ? 'No matches' : 'No tasks found'}</div>
			{:else}
				<div class="list">
					{#each filtered as t (t.id || t.name)}
						<div class="card row-card">
							<button class="card-link" onclick={() => viewTask(t.id)}>
								<span class="task-name">{t.name || t.id}</span>
								{#if t.status}<span class="tag small">{t.status}</span>{/if}
							</button>
							<div class="row-actions">
								<button class="btn-sm" onclick={() => runNow(t.id)} title="Run now">▶</button>
								<button class="btn-sm" onclick={() => toggleSchedule(t.id)} title="Toggle schedule">⏯</button>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		{/if}
	{/if}
</div>

<style>
	.rt-tm { font-family: system-ui, -apple-system, sans-serif; max-width: 720px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.refresh { margin-left: auto; padding: 0.25rem 0.5rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.375rem; cursor: pointer; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; font-size: 0.85rem; }
	.empty { color: #6b7280; text-align: center; padding: 2rem; }
	.search-row { margin-bottom: 1rem; }
	.search-row input { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem; box-sizing: border-box; }
	.list { display: flex; flex-direction: column; gap: 0.5rem; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1rem 1.25rem; margin-bottom: 0.75rem; }
	.row-card { display: flex; align-items: center; justify-content: space-between; }
	.card-link { background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; padding: 0; font-family: inherit; }
	.card-link:hover .task-name { color: #4f46e5; }
	.task-name { font-weight: 500; font-size: 0.875rem; }
	.tag { background: #f3f4f6; color: #374151; padding: 0.15rem 0.5rem; border-radius: 0.375rem; font-size: 0.7rem; }
	.tag.small { font-size: 0.65rem; }
	.tag.outline { background: transparent; border: 1px solid #d1d5db; }
	.meta-row { display: flex; gap: 0.5rem; margin: 0.5rem 0; }
	.meta { font-size: 0.8rem; color: #6b7280; margin-top: 0.5rem; }
	.actions { display: flex; gap: 0.5rem; margin: 0.75rem 0; }
	.btn { padding: 0.4rem 0.8rem; background: #4f46e5; color: #fff; border: none; border-radius: 0.375rem; cursor: pointer; font-size: 0.8rem; }
	.btn.outline { background: #fff; color: #374151; border: 1px solid #d1d5db; }
	.btn.danger { background: #dc2626; }
	.row-actions { display: flex; gap: 0.25rem; }
	.btn-sm { padding: 0.25rem 0.5rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.375rem; cursor: pointer; font-size: 0.75rem; }
	.btn-sm:hover { background: #e5e7eb; }
	.back { background: none; border: none; color: #4f46e5; cursor: pointer; font-size: 0.85rem; padding: 0; margin-bottom: 1rem; }
	.back:hover { text-decoration: underline; }
	.card h3 { margin: 0 0 0.5rem; font-size: 1rem; }
	.log-list { max-height: 400px; overflow-y: auto; }
	.log-entry { display: flex; gap: 0.5rem; padding: 0.25rem 0; border-bottom: 1px solid #f3f4f6; font-size: 0.75rem; }
	.log-time { color: #9ca3af; white-space: nowrap; font-family: ui-monospace, monospace; }
	.log-msg { color: #374151; word-break: break-word; }
</style>
