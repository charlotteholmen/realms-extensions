<script lang="ts">
	let { ctx }: { ctx: any } = $props();

	const cn = ctx.theme?.cn ?? ((...classes: string[]) => classes.filter(Boolean).join(' '));

	type TabId = 'departments' | 'extensions' | 'users';

	interface Toast { id: number; type: 'success' | 'error'; text: string; }

	let activeTab: TabId = $state('departments');
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

	// Extensions
	let extensions: any[] = $state([]);
	let extLoading = $state(false);
	let expandedExt: string | null = $state(null);
	let grantTarget = $state('');
	let grantType: 'user' | 'department' | 'profile' = $state('user');

	// Users
	let users: any[] = $state([]);
	let userLoading = $state(false);
	let expandedUser: string | null = $state(null);
	let userSearch = $state('');
	let profiles: any[] = $state([]);
	let assignProfileName = $state('');

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

	// --- Extensions ---
	async function loadExtensions() {
		extLoading = true;
		try {
			const res = await callExt('list_extensions');
			extensions = res?.data?.extensions ?? [];
		} catch (e: any) {
			addToast(e?.message || 'Failed to load extensions', 'error');
		} finally {
			extLoading = false;
		}
	}

	async function grantExtension(extName: string) {
		if (!grantTarget.trim()) return;
		let fn = '';
		let args: Record<string, string> = { extension: extName };
		if (grantType === 'user') {
			fn = 'grant_extension_to_user';
			args.user_principal = grantTarget.trim();
		} else if (grantType === 'department') {
			fn = 'grant_extension_to_department';
			args.department = grantTarget.trim();
		} else {
			fn = 'grant_extension_to_profile';
			args.profile = grantTarget.trim();
		}
		try {
			const res = await callExt(fn, args);
			if (res?.success) {
				addToast('Access granted');
				grantTarget = '';
				await loadExtensions();
			} else {
				addToast(res?.error || 'Failed', 'error');
			}
		} catch (e: any) {
			addToast(e?.message || 'Error', 'error');
		}
	}

	async function revokeExtUser(extName: string, principal: string) {
		try {
			const res = await callExt('revoke_extension_from_user', { extension: extName, user_principal: principal });
			if (res?.success) { addToast('Revoked'); await loadExtensions(); }
			else addToast(res?.error || 'Failed', 'error');
		} catch (e: any) { addToast(e?.message || 'Error', 'error'); }
	}

	async function revokeExtDept(extName: string, deptName: string) {
		try {
			const res = await callExt('revoke_extension_from_department', { extension: extName, department: deptName });
			if (res?.success) { addToast('Revoked'); await loadExtensions(); }
			else addToast(res?.error || 'Failed', 'error');
		} catch (e: any) { addToast(e?.message || 'Error', 'error'); }
	}

	async function revokeExtProfile(extName: string, profileName: string) {
		try {
			const res = await callExt('revoke_extension_from_profile', { extension: extName, profile: profileName });
			if (res?.success) { addToast('Revoked'); await loadExtensions(); }
			else addToast(res?.error || 'Failed', 'error');
		} catch (e: any) { addToast(e?.message || 'Error', 'error'); }
	}

	// --- Users ---
	async function loadUsers() {
		userLoading = true;
		try {
			const [usersRes, profilesRes] = await Promise.all([
				callExt('list_users'),
				callExt('get_available_profiles'),
			]);
			users = usersRes?.data?.users ?? [];
			profiles = profilesRes?.data?.profiles ?? [];
		} catch (e: any) {
			addToast(e?.message || 'Failed to load users', 'error');
		} finally {
			userLoading = false;
		}
	}

	async function doAssignProfile(principal: string) {
		if (!assignProfileName) return;
		try {
			const res = await callExt('assign_profile', { target_principal: principal, profile_name: assignProfileName });
			if (res?.success) {
				addToast(`Profile "${assignProfileName}" assigned`);
				assignProfileName = '';
				await loadUsers();
			} else {
				addToast(res?.error || 'Failed', 'error');
			}
		} catch (e: any) { addToast(e?.message || 'Error', 'error'); }
	}

	async function doRevokeProfile(principal: string, profileName: string) {
		if (!confirm(`Revoke "${profileName}" from this user?`)) return;
		try {
			const res = await callExt('revoke_profile', { target_principal: principal, profile_name: profileName });
			if (res?.success) { addToast('Profile revoked'); await loadUsers(); }
			else addToast(res?.error || 'Failed', 'error');
		} catch (e: any) { addToast(e?.message || 'Error', 'error'); }
	}

	$effect(() => {
		if (activeTab === 'departments') loadDepartments();
		else if (activeTab === 'extensions') loadExtensions();
		else if (activeTab === 'users') loadUsers();
	});

	let filteredUsers = $derived(
		userSearch
			? users.filter(u =>
				u.principal.toLowerCase().includes(userSearch.toLowerCase()) ||
				(u.nickname || '').toLowerCase().includes(userSearch.toLowerCase())
			)
			: users
	);

	function shortPrincipal(p: string): string {
		if (!p || p.length < 12) return p;
		return p.slice(0, 5) + '...' + p.slice(-5);
	}
</script>

<div class="max-w-5xl mx-auto p-4 sm:p-6">
	<!-- Header -->
	<div class="mb-6">
		<h1 class="text-2xl font-bold text-gray-900">Access Manager</h1>
		<p class="text-sm text-gray-500 mt-1">Manage departments, extension visibility, and user roles</p>
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

	<!-- Tabs -->
	<div class="border-b border-gray-200 mb-6">
		<nav class="flex gap-6">
			{#each [['departments', 'Departments'], ['extensions', 'Extensions'], ['users', 'Users']] as [id, label]}
				<button
					onclick={() => activeTab = id as TabId}
					class={cn(
						'pb-3 text-sm font-medium border-b-2 transition-colors',
						activeTab === id ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'
					)}
				>
					{label}
				</button>
			{/each}
		</nav>
	</div>

	<!-- Departments Tab -->
	{#if activeTab === 'departments'}
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
							onclick={() => expandedDept = expandedDept === dept.name ? null : dept.name}
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
								{#if dept.extensions.length > 0}
									<div class="text-sm"><span class="font-medium text-gray-700">Extensions:</span> {dept.extensions.join(', ')}</div>
								{/if}

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

	<!-- Extensions Tab -->
	{:else if activeTab === 'extensions'}
		<div class="space-y-4">
			<h2 class="text-lg font-semibold text-gray-800">Extension Access ({extensions.length})</h2>

			{#if extLoading}
				<div class="flex justify-center py-8">
					<svg class="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
						<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</svg>
				</div>
			{:else if extensions.length === 0}
				<p class="text-center text-gray-500 py-8">No Extension entities found. Extensions are seeded when installed.</p>
			{:else}
				{#each extensions as ext (ext.name)}
					<div class="border border-gray-200 rounded-xl overflow-hidden">
						<button
							onclick={() => expandedExt = expandedExt === ext.name ? null : ext.name}
							class="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 text-left"
						>
							<div>
								<span class="font-medium text-gray-900">{ext.name}</span>
								{#if ext.description}
									<span class="ml-2 text-sm text-gray-500">— {ext.description}</span>
								{/if}
							</div>
							<span class="text-xs text-gray-500">{expandedExt === ext.name ? '▲' : '▼'}</span>
						</button>

						{#if expandedExt === ext.name}
							<div class="px-4 py-3 border-t border-gray-100 bg-gray-50 space-y-3">
								<!-- Profiles -->
								<div>
									<div class="text-sm font-medium text-gray-700 mb-1">Profile-level access (from manifest):</div>
									{#if ext.profiles.length === 0}
										<span class="text-sm text-gray-400">None</span>
									{:else}
										<div class="flex flex-wrap gap-1">
											{#each ext.profiles as p}
												<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">
													{p}
													<button onclick={() => revokeExtProfile(ext.name, p)} class="text-blue-400 hover:text-blue-600">&times;</button>
												</span>
											{/each}
										</div>
									{/if}
								</div>

								<!-- Departments -->
								<div>
									<div class="text-sm font-medium text-gray-700 mb-1">Department access:</div>
									{#if ext.departments.length === 0}
										<span class="text-sm text-gray-400">None</span>
									{:else}
										<div class="flex flex-wrap gap-1">
											{#each ext.departments as d}
												<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-50 text-purple-700 text-xs rounded-full">
													{d}
													<button onclick={() => revokeExtDept(ext.name, d)} class="text-purple-400 hover:text-purple-600">&times;</button>
												</span>
											{/each}
										</div>
									{/if}
								</div>

								<!-- Users -->
								<div>
									<div class="text-sm font-medium text-gray-700 mb-1">Direct user access:</div>
									{#if ext.users.length === 0}
										<span class="text-sm text-gray-400">None</span>
									{:else}
										<div class="flex flex-wrap gap-1">
											{#each ext.users as u}
												<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">
													{u.nickname || shortPrincipal(u.principal)}
													<button onclick={() => revokeExtUser(ext.name, u.principal)} class="text-green-400 hover:text-green-600">&times;</button>
												</span>
											{/each}
										</div>
									{/if}
								</div>

								<!-- Grant form -->
								<div class="pt-2 border-t border-gray-200">
									<div class="text-sm font-medium text-gray-700 mb-2">Grant access:</div>
									<div class="flex gap-2 flex-wrap">
										<select bind:value={grantType} class="px-2 py-1.5 border border-gray-300 rounded-lg text-sm">
											<option value="user">User</option>
											<option value="department">Department</option>
											<option value="profile">Profile</option>
										</select>
										<input
											bind:value={grantTarget}
											placeholder={grantType === 'user' ? 'Principal' : grantType === 'department' ? 'Dept name' : 'Profile name'}
											class="flex-1 min-w-0 px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
										/>
										<button onclick={() => grantExtension(ext.name)} class="px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">Grant</button>
									</div>
								</div>
							</div>
						{/if}
					</div>
				{/each}
			{/if}
		</div>

	<!-- Users Tab -->
	{:else if activeTab === 'users'}
		<div class="space-y-4">
			<div class="flex items-center justify-between gap-4">
				<h2 class="text-lg font-semibold text-gray-800">Users ({users.length})</h2>
				<input bind:value={userSearch} placeholder="Search..." class="px-3 py-1.5 border border-gray-300 rounded-lg text-sm w-48" />
			</div>

			{#if userLoading}
				<div class="flex justify-center py-8">
					<svg class="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
						<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</svg>
				</div>
			{:else if filteredUsers.length === 0}
				<p class="text-center text-gray-500 py-8">No users found.</p>
			{:else}
				{#each filteredUsers as user (user.principal)}
					<div class="border border-gray-200 rounded-xl overflow-hidden">
						<button
							onclick={() => expandedUser = expandedUser === user.principal ? null : user.principal}
							class="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 text-left"
						>
							<div>
								<span class="font-medium text-gray-900">{user.nickname || shortPrincipal(user.principal)}</span>
								{#if user.nickname}
									<span class="ml-2 text-xs text-gray-400">{shortPrincipal(user.principal)}</span>
								{/if}
							</div>
							<div class="flex items-center gap-2">
								{#each user.profiles as p}
									<span class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">{p}</span>
								{/each}
								<span class="text-xs text-gray-500">{expandedUser === user.principal ? '▲' : '▼'}</span>
							</div>
						</button>

						{#if expandedUser === user.principal}
							<div class="px-4 py-3 border-t border-gray-100 bg-gray-50 space-y-3">
								<div class="text-xs text-gray-500 font-mono break-all">{user.principal}</div>

								<!-- Profiles -->
								<div>
									<div class="text-sm font-medium text-gray-700 mb-1">Profiles:</div>
									<div class="flex flex-wrap gap-1">
										{#each user.profiles as p}
											<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full">
												{p}
												<button onclick={() => doRevokeProfile(user.principal, p)} class="text-gray-400 hover:text-red-600">&times;</button>
											</span>
										{/each}
									</div>
									<div class="flex gap-2 mt-2">
										<select bind:value={assignProfileName} class="px-2 py-1.5 border border-gray-300 rounded-lg text-sm">
											<option value="">Assign profile...</option>
											{#each profiles as p}
												{#if !user.profiles.includes(p.name)}
													<option value={p.name}>{p.name}</option>
												{/if}
											{/each}
										</select>
										<button onclick={() => doAssignProfile(user.principal)} disabled={!assignProfileName} class="px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 disabled:opacity-50">Assign</button>
									</div>
								</div>

								<!-- Departments -->
								{#if user.departments?.length > 0}
									<div>
										<div class="text-sm font-medium text-gray-700 mb-1">Departments:</div>
										<div class="flex flex-wrap gap-1">
											{#each user.departments as d}
												<span class="px-2 py-0.5 bg-purple-50 text-purple-700 text-xs rounded-full">{d}</span>
											{/each}
										</div>
									</div>
								{/if}

								<!-- Direct extensions -->
								{#if user.direct_extensions?.length > 0}
									<div>
										<div class="text-sm font-medium text-gray-700 mb-1">Direct extension access:</div>
										<div class="flex flex-wrap gap-1">
											{#each user.direct_extensions as e}
												<span class="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">{e}</span>
											{/each}
										</div>
									</div>
								{/if}
							</div>
						{/if}
					</div>
				{/each}
			{/if}
		</div>
	{/if}
</div>
