<script lang="ts">
	let { ctx }: { ctx: any } = $props();

	const cn = ctx.theme?.cn ?? ((...classes: string[]) => classes.filter(Boolean).join(' '));

	interface Toast { id: number; type: 'success' | 'error'; text: string; }

	let loading = $state(false);
	let toasts: Toast[] = $state([]);
	let toastCounter = $state(0);

	// Departments
	let departments: any[] = $state([]);
	let deptLoading = $state(false);
	let showNewDept = $state(false);
	let newDeptName = $state('');
	let newDeptDesc = $state('');
	let newDeptHead = $state('');
	let expandedDept: string | null = $state(null);
	let addMemberPrincipal = $state('');
	let deptPermissions: Record<string, string[]> = $state({});
	let deptPermLoading: string | null = $state(null);
	let deptPermFilter = $state('');
	let deptPendingGrants: Set<string> = $state(new Set());
	let deptPendingRevokes: Set<string> = $state(new Set());
	let deptPermApplying = $state(false);
	let allOperations: any[] = $state([]);

	function addToast(message: string, type: 'success' | 'error' = 'success') {
		const id = ++toastCounter;
		toasts = [...toasts, { id, text: message, type }];
		setTimeout(() => { toasts = toasts.filter(t => t.id !== id); }, 4000);
	}

	async function callExt(fn: string, args: Record<string, unknown> = {}) {
		return await ctx.callSync(fn, args);
	}

	// --- Departments ---
	async function loadDepartments() {
		deptLoading = true;
		try {
			const res = await callExt('list_departments');
			departments = res?.data?.departments ?? [];
		} catch (e: any) {
			addToast(e?.message || 'Failed to load departments', 'error');
		} finally {
			deptLoading = false;
		}
	}

	async function createDepartment() {
		if (!newDeptName.trim()) return;
		try {
			const res = await callExt('create_department', {
				name: newDeptName.trim(),
				description: newDeptDesc.trim(),
				head_principal: newDeptHead.trim() || undefined,
			});
			if (res?.success) {
				addToast(`Department "${newDeptName}" created`);
				newDeptName = ''; newDeptDesc = ''; newDeptHead = '';
				showNewDept = false;
				await loadDepartments();
			} else {
				addToast(res?.error || 'Failed to create', 'error');
			}
		} catch (e: any) {
			addToast(e?.message || 'Error', 'error');
		}
	}

	async function deleteDepartment(name: string) {
		if (!confirm(`Delete department "${name}"?`)) return;
		try {
			const res = await callExt('delete_department', { name });
			if (res?.success) {
				addToast(`Department "${name}" deleted`);
				await loadDepartments();
			} else {
				addToast(res?.error || 'Failed', 'error');
			}
		} catch (e: any) {
			addToast(e?.message || 'Error', 'error');
		}
	}

	async function addMember(deptName: string) {
		if (!addMemberPrincipal.trim()) return;
		try {
			const res = await callExt('add_department_member', {
				department: deptName,
				user_principal: addMemberPrincipal.trim(),
			});
			if (res?.success) {
				addToast('Member added');
				addMemberPrincipal = '';
				await loadDepartments();
			} else {
				addToast(res?.error || 'Failed', 'error');
			}
		} catch (e: any) {
			addToast(e?.message || 'Error', 'error');
		}
	}

	async function removeMember(deptName: string, principal: string) {
		try {
			const res = await callExt('remove_department_member', {
				department: deptName,
				user_principal: principal,
			});
			if (res?.success) {
				addToast('Member removed');
				await loadDepartments();
			} else {
				addToast(res?.error || 'Failed', 'error');
			}
		} catch (e: any) {
			addToast(e?.message || 'Error', 'error');
		}
	}

	async function loadDeptPermissions(deptName: string) {
		deptPermLoading = deptName;
		try {
			const res = await callExt('get_department_permissions', { department: deptName });
			if (res?.success) {
				deptPermissions = { ...deptPermissions, [deptName]: (res.data?.permissions ?? []).map((p: any) => p.name) };
			}
		} catch (e: any) {
			addToast(e?.message || 'Failed to load permissions', 'error');
		} finally {
			deptPermLoading = null;
		}
	}

	async function loadAllOperations() {
		try {
			const res = await ctx.callSync('get_all_operations');
			if (res?.success) {
				allOperations = res.data?.operations ?? [];
			}
		} catch {
		}
	}

	async function applyDeptPermChanges(deptName: string) {
		deptPermApplying = true;
		try {
			const toGrant = [...deptPendingGrants];
			const toRevoke = [...deptPendingRevokes];
			if (toGrant.length > 0) {
				const res = await callExt('batch_grant_department_permissions', {
					department: deptName,
					permission_names: toGrant,
				});
				if (!res?.success) {
					addToast(res?.error || 'Failed to grant', 'error');
					deptPermApplying = false;
					return;
				}
			}
			if (toRevoke.length > 0) {
				const res = await callExt('batch_revoke_department_permissions', {
					department: deptName,
					permission_names: toRevoke,
				});
				if (!res?.success) {
					addToast(res?.error || 'Failed to revoke', 'error');
					deptPermApplying = false;
					return;
				}
			}
			addToast(`${toGrant.length} granted, ${toRevoke.length} revoked`);
			deptPendingGrants = new Set();
			deptPendingRevokes = new Set();
			await loadDeptPermissions(deptName);
		} catch (e: any) {
			addToast(e?.message || 'Error', 'error');
		} finally {
			deptPermApplying = false;
		}
	}

	function toggleDeptPerm(opName: string, deptName: string) {
		const current = deptPermissions[deptName] ?? [];
		const isGranted = current.includes(opName);
		if (isGranted) {
			if (deptPendingRevokes.has(opName)) {
				deptPendingRevokes = new Set([...deptPendingRevokes].filter(n => n !== opName));
			} else {
				deptPendingRevokes = new Set([...deptPendingRevokes, opName]);
				deptPendingGrants = new Set([...deptPendingGrants].filter(n => n !== opName));
			}
		} else {
			if (deptPendingGrants.has(opName)) {
				deptPendingGrants = new Set([...deptPendingGrants].filter(n => n !== opName));
			} else {
				deptPendingGrants = new Set([...deptPendingGrants, opName]);
				deptPendingRevokes = new Set([...deptPendingRevokes].filter(n => n !== opName));
			}
		}
	}

	function isDeptPermChecked(opName: string, deptName: string): boolean {
		const current = deptPermissions[deptName] ?? [];
		if (deptPendingGrants.has(opName)) return true;
		if (deptPendingRevokes.has(opName)) return false;
		return current.includes(opName);
	}

	function shortPrincipal(p: string): string {
		if (!p || p.length < 12) return p;
		return p.slice(0, 5) + '...' + p.slice(-5);
	}

	$effect(() => {
		loadDepartments();
		loadAllOperations();
	});
</script>

<div class="max-w-5xl mx-auto p-4 sm:p-6">
	<!-- Header -->
	<div class="mb-6">
		<h1 class="text-2xl font-bold text-gray-900">Departments</h1>
		<p class="text-sm text-gray-500 mt-1">Manage departments and membership</p>
	</div>

	<!-- Toasts -->
	{#if toasts.length > 0}
		<div class="fixed top-4 right-4 z-50 space-y-2">
			{#each toasts as toast (toast.id)}
				<div class={cn(
					'px-4 py-2 rounded-lg shadow-lg text-sm font-medium transition-all',
					toast.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
				)}>
					{toast.text}
				</div>
			{/each}
		</div>
	{/if}

	<div class="space-y-4">
		<div class="flex items-center justify-between">
			<h2 class="text-lg font-semibold text-gray-800">Departments ({departments.length})</h2>
			<button onclick={() => showNewDept = !showNewDept} class="px-3 py-1.5 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800">
				{showNewDept ? 'Cancel' : '+ New Department'}
			</button>
		</div>

		{#if showNewDept}
			<div class="p-4 border border-gray-200 rounded-xl bg-gray-50 space-y-3">
				<input bind:value={newDeptName} placeholder="Department name" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
				<input bind:value={newDeptDesc} placeholder="Description (optional)" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
				<input bind:value={newDeptHead} placeholder="Head principal (optional)" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
				<button onclick={createDepartment} disabled={!newDeptName.trim()} class="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 disabled:opacity-50">
					Create
				</button>
			</div>
		{/if}

		{#if deptLoading}
			<div class="flex justify-center py-8">
				<svg class="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</svg>
			</div>
		{:else if departments.length === 0}
			<p class="text-center text-gray-500 py-8">No departments yet. Create one to get started.</p>
		{:else}
			{#each departments as dept (dept.name)}
				<div class="border border-gray-200 rounded-xl overflow-hidden">
					<button
						onclick={() => {
							const next = expandedDept === dept.name ? null : dept.name;
							expandedDept = next;
							if (next) { loadDeptPermissions(next); deptPermFilter = ''; deptPendingGrants = new Set(); deptPendingRevokes = new Set(); }
						}}
						class="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 text-left"
					>
						<div>
							<span class="font-medium text-gray-900">{dept.name}</span>
							{#if dept.description}
								<span class="ml-2 text-sm text-gray-500">— {dept.description}</span>
							{/if}
						</div>
						<div class="flex items-center gap-3 text-sm text-gray-500">
							<span>{dept.member_count} members</span>
							<span class="text-xs">{expandedDept === dept.name ? '▲' : '▼'}</span>
						</div>
					</button>

					{#if expandedDept === dept.name}
						<div class="px-4 py-3 border-t border-gray-100 bg-gray-50 space-y-3">
							{#if dept.head}
								<div class="text-sm"><span class="font-medium text-gray-700">Head:</span> {dept.head.nickname || shortPrincipal(dept.head.principal)}</div>
							{/if}
							{#if dept.extensions?.length > 0}
								<div class="text-sm"><span class="font-medium text-gray-700">Extensions:</span> {dept.extensions.join(', ')}</div>
							{/if}

							<!-- Permissions -->
							<div class="mt-3 pt-3 border-t border-gray-200">
								<div class="flex items-center justify-between mb-2">
									<div class="text-sm font-medium text-gray-700">Permissions ({(deptPermissions[dept.name] ?? []).length})</div>
									{#if deptPendingGrants.size > 0 || deptPendingRevokes.size > 0}
										<div class="flex items-center gap-2">
											<span class="text-xs text-gray-500">
												{#if deptPendingGrants.size > 0}<span class="text-green-600 font-medium">+{deptPendingGrants.size}</span>{/if}
												{#if deptPendingGrants.size > 0 && deptPendingRevokes.size > 0}&nbsp;/&nbsp;{/if}
												{#if deptPendingRevokes.size > 0}<span class="text-red-600 font-medium">-{deptPendingRevokes.size}</span>{/if}
											</span>
											<button onclick={() => { deptPendingGrants = new Set(); deptPendingRevokes = new Set(); }} class="text-xs text-gray-500 hover:text-gray-700">Discard</button>
											<button onclick={() => applyDeptPermChanges(dept.name)} disabled={deptPermApplying} class="px-2 py-1 text-xs bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50">Apply</button>
										</div>
									{/if}
								</div>

								{#if (deptPermissions[dept.name] ?? []).length > 0}
									<div class="flex flex-wrap gap-1 mb-2">
										{#each deptPermissions[dept.name] ?? [] as perm}
											<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 text-amber-700 text-xs rounded-full font-medium">
												{perm}
												<button onclick={() => toggleDeptPerm(perm, dept.name)} class="text-amber-400 hover:text-red-600" title="Revoke">&times;</button>
											</span>
										{/each}
									</div>
								{/if}

								<input
									type="text"
									bind:value={deptPermFilter}
									placeholder="Search permissions to add..."
									class="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm mb-2"
								/>

								{#if deptPermFilter.trim()}
									{@const q = deptPermFilter.trim().toLowerCase()}
									{@const filtered = allOperations.filter((op: any) =>
										op.name.toLowerCase().includes(q) ||
										(op.category || '').toLowerCase().includes(q) ||
										(op.description || '').toLowerCase().includes(q)
									).slice(0, 15)}
									<div class="max-h-48 overflow-y-auto border border-gray-200 rounded-lg bg-white">
										{#each filtered as op}
											{@const checked = isDeptPermChecked(op.name, dept.name)}
											<label class="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 cursor-pointer text-sm border-b border-gray-100 last:border-b-0">
												<input
													type="checkbox"
													checked={checked}
													onchange={() => toggleDeptPerm(op.name, dept.name)}
													class="h-3.5 w-3.5 rounded border-gray-300 text-indigo-600"
												/>
												<code class="text-xs font-medium text-gray-800">{op.name}</code>
												<span class="text-xs text-gray-400 truncate">{op.description || ''}</span>
											</label>
										{/each}
										{#if filtered.length === 0}
											<div class="px-3 py-2 text-xs text-gray-400">No matching permissions</div>
										{/if}
									</div>
								{/if}
							</div>

							<div class="text-sm font-medium text-gray-700 mt-2">Members:</div>
							{#if dept.members.length === 0}
								<p class="text-sm text-gray-400">No members</p>
							{:else}
								<div class="space-y-1">
									{#each dept.members as m}
										<div class="flex items-center justify-between text-sm bg-white px-3 py-1.5 rounded-lg">
											<span>{m.nickname || shortPrincipal(m.principal)}</span>
											<button onclick={() => removeMember(dept.name, m.principal)} class="text-red-500 hover:text-red-700 text-xs">Remove</button>
										</div>
									{/each}
								</div>
							{/if}

							<div class="flex gap-2 mt-2">
								<input bind:value={addMemberPrincipal} placeholder="User principal" class="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm" />
								<button onclick={() => addMember(dept.name)} class="px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">Add</button>
							</div>

							<button onclick={() => deleteDepartment(dept.name)} class="mt-2 text-sm text-red-600 hover:text-red-800">Delete department</button>
						</div>
					{/if}
				</div>
			{/each}
		{/if}
	</div>
</div>
