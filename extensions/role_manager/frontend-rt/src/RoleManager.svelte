<script lang="ts">
	import { onMount } from 'svelte';

	let { ctx }: { ctx: any } = $props();

	type View = 'users' | 'detail' | 'assign' | 'permission';

	interface UserEntry {
		principal: string;
		nickname: string;
		profiles: string[];
		status: string;
	}

	interface ProfileDef {
		name: string;
		allowed_to: string[];
	}

	interface OperationDef {
		name: string;
		category: string;
		description: string;
	}

	let users: UserEntry[] = $state([]);
	let profiles: ProfileDef[] = $state([]);
	let allOperations: OperationDef[] = $state([]);
	let loading = $state(true);
	let error = $state('');
	let successMsg = $state('');
	let view: View = $state('users');
	let searchQuery = $state('');

	let selectedUser: UserEntry | null = $state(null);
	let userPermissions: string[] = $state([]);
	let userDirectPerms: string[] = $state([]);
	let detailLoading = $state(false);

	let assignProfileName = $state('');
	let assignLoading = $state(false);

	let permFilter = $state('');
	let permLoading = $state(false);
	let pendingGrants: Set<string> = $state(new Set());
	let pendingRevokes: Set<string> = $state(new Set());

	let filteredUsers = $derived(
		searchQuery.trim()
			? users.filter(
					(u) =>
						u.principal.toLowerCase().includes(searchQuery.toLowerCase()) ||
						u.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
						u.profiles.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())),
				)
			: users,
	);

	let filteredOperations = $derived(() => {
		const q = permFilter.trim().toLowerCase();
		const ops = q
			? allOperations.filter(
					(op) =>
						op.name.toLowerCase().includes(q) ||
						op.category.toLowerCase().includes(q) ||
						op.description.toLowerCase().includes(q),
				)
			: allOperations;

		const groups: Record<string, OperationDef[]> = {};
		for (const op of ops) {
			if (!groups[op.category]) groups[op.category] = [];
			groups[op.category].push(op);
		}
		return groups;
	});

	let hasPendingChanges = $derived(pendingGrants.size > 0 || pendingRevokes.size > 0);

	async function callSync(fn: string, args: Record<string, any> = {}) {
		const raw = await ctx.callSync(fn, args);
		return typeof raw === 'string' ? JSON.parse(raw) : raw;
	}

	async function loadUsers() {
		loading = true;
		error = '';
		try {
			const res = await callSync('list_users_with_profiles');
			if (res?.success) {
				users = res.data?.users ?? [];
			} else {
				error = res?.error || 'Failed to load users';
			}
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function loadProfiles() {
		try {
			const res = await callSync('get_available_profiles');
			if (res?.success) {
				profiles = res.data?.profiles ?? [];
			}
		} catch (e: any) {
			console.error('Failed to load profiles:', e);
		}
	}

	async function loadOperations() {
		try {
			const res = await callSync('get_all_operations');
			if (res?.success) {
				allOperations = res.data?.operations ?? [];
			}
		} catch (e: any) {
			console.error('Failed to load operations:', e);
		}
	}

	async function viewUser(user: UserEntry) {
		selectedUser = user;
		view = 'detail';
		detailLoading = true;
		userPermissions = [];
		userDirectPerms = [];
		try {
			const res = await callSync('get_user_effective_permissions', {
				target_principal: user.principal,
			});
			if (res?.success) {
				userPermissions = res.data?.effective_operations ?? [];
				userDirectPerms = res.data?.direct_permissions ?? [];
				selectedUser = {
					...user,
					profiles: res.data?.profiles ?? user.profiles,
				};
			}
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			detailLoading = false;
		}
	}

	async function handleAssign() {
		if (!selectedUser || !assignProfileName) return;
		assignLoading = true;
		error = '';
		successMsg = '';
		try {
			const res = await callSync('assign_profile', {
				target_principal: selectedUser.principal,
				profile_name: assignProfileName,
			});
			if (res?.success) {
				successMsg = res.data?.message || 'Profile assigned';
				assignProfileName = '';
				view = 'detail';
				await viewUser({ ...selectedUser!, profiles: res.data?.profiles ?? selectedUser!.profiles });
				await loadUsers();
			} else if (res?.governance_blocked) {
				error = res.error + ' Use "Propose" to create a governance proposal.';
			} else {
				error = res?.error || 'Failed to assign profile';
			}
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			assignLoading = false;
		}
	}

	async function handleRevoke(profileName: string) {
		if (!selectedUser) return;
		error = '';
		successMsg = '';
		try {
			const res = await callSync('revoke_profile', {
				target_principal: selectedUser.principal,
				profile_name: profileName,
			});
			if (res?.success) {
				successMsg = res.data?.message || 'Profile revoked';
				await viewUser({ ...selectedUser!, profiles: res.data?.profiles ?? selectedUser!.profiles });
				await loadUsers();
			} else {
				error = res?.error || 'Failed to revoke profile';
			}
		} catch (e: any) {
			error = e?.message || String(e);
		}
	}

	function togglePermission(opName: string) {
		const isCurrentlyGranted = userDirectPerms.includes(opName);

		if (isCurrentlyGranted) {
			if (pendingRevokes.has(opName)) {
				pendingRevokes = new Set([...pendingRevokes].filter(n => n !== opName));
			} else {
				pendingRevokes = new Set([...pendingRevokes, opName]);
				pendingGrants = new Set([...pendingGrants].filter(n => n !== opName));
			}
		} else {
			if (pendingGrants.has(opName)) {
				pendingGrants = new Set([...pendingGrants].filter(n => n !== opName));
			} else {
				pendingGrants = new Set([...pendingGrants, opName]);
				pendingRevokes = new Set([...pendingRevokes].filter(n => n !== opName));
			}
		}
	}

	function isChecked(opName: string): boolean {
		const isGranted = userDirectPerms.includes(opName);
		if (pendingGrants.has(opName)) return true;
		if (pendingRevokes.has(opName)) return false;
		return isGranted;
	}

	function permState(opName: string): 'granted' | 'pending-grant' | 'pending-revoke' | 'none' {
		if (pendingGrants.has(opName)) return 'pending-grant';
		if (pendingRevokes.has(opName)) return 'pending-revoke';
		if (userDirectPerms.includes(opName)) return 'granted';
		return 'none';
	}

	async function applyPermissionChanges() {
		if (!selectedUser) return;
		permLoading = true;
		error = '';
		successMsg = '';
		const toGrant = [...pendingGrants];
		const toRevoke = [...pendingRevokes];

		try {
			if (toGrant.length > 0) {
				const res = await callSync('batch_grant_permissions', {
					target_principal: selectedUser.principal,
					permission_names: toGrant,
				});
				if (!res?.success) {
					error = res?.error || 'Failed to grant permissions';
					permLoading = false;
					return;
				}
			}
			if (toRevoke.length > 0) {
				const res = await callSync('batch_revoke_permissions', {
					target_principal: selectedUser.principal,
					permission_names: toRevoke,
				});
				if (!res?.success) {
					error = res?.error || 'Failed to revoke permissions';
					permLoading = false;
					return;
				}
			}

			successMsg = `${toGrant.length} granted, ${toRevoke.length} revoked`;
			pendingGrants = new Set();
			pendingRevokes = new Set();
			await viewUser(selectedUser);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			permLoading = false;
		}
	}

	function discardPermissionChanges() {
		pendingGrants = new Set();
		pendingRevokes = new Set();
	}

	async function handlePropose() {
		if (!selectedUser || !assignProfileName) return;
		assignLoading = true;
		error = '';
		successMsg = '';
		try {
			const res = await callSync('propose_role_assignment', {
				target_principal: selectedUser.principal,
				profile_name: assignProfileName,
			});
			if (res?.success) {
				successMsg = res.data?.message || 'Governance proposal created';
				assignProfileName = '';
				view = 'detail';
			} else {
				error = res?.error || 'Failed to create proposal';
			}
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			assignLoading = false;
		}
	}

	function truncatePrincipal(id: string): string {
		if (!id || id.length <= 16) return id || 'unknown';
		return id.slice(0, 8) + '...' + id.slice(-6);
	}

	function profileColor(name: string): string {
		const colors: Record<string, string> = {
			admin: 'bg-red-100 text-red-700',
			member: 'bg-blue-100 text-blue-700',
			observer: 'bg-gray-100 text-gray-600',
			legislator: 'bg-purple-100 text-purple-700',
			executor: 'bg-amber-100 text-amber-700',
			judge: 'bg-indigo-100 text-indigo-700',
			enforcer: 'bg-orange-100 text-orange-700',
			treasurer: 'bg-emerald-100 text-emerald-700',
			merchant: 'bg-cyan-100 text-cyan-700',
			operator: 'bg-teal-100 text-teal-700',
			developer: 'bg-violet-100 text-violet-700',
			user_manager: 'bg-pink-100 text-pink-700',
		};
		return colors[name] || 'bg-gray-100 text-gray-700';
	}

	onMount(() => {
		loadUsers();
		loadProfiles();
		loadOperations();
	});
</script>

<div class="w-full px-6 pt-8 max-w-none">
	<!-- Header -->
	<div class="mb-6">
		<h1 class="text-3xl font-bold text-gray-900 mb-1">Role Manager</h1>
		<p class="text-gray-500 text-sm">Assign and manage user roles and permissions.</p>
	</div>

	<!-- Banners -->
	{#if error}
		<div class="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 flex items-start gap-2">
			<svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
			<span class="flex-1">{error}</span>
			<button onclick={() => error = ''} class="ml-auto text-red-400 hover:text-red-600">&times;</button>
		</div>
	{/if}
	{#if successMsg}
		<div class="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-center gap-2">
			<svg class="w-5 h-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
			<span>{successMsg}</span>
			<button onclick={() => successMsg = ''} class="ml-auto text-green-400 hover:text-green-600">&times;</button>
		</div>
	{/if}

	<!-- User Detail View -->
	{#if view === 'detail' && selectedUser}
		<button onclick={() => { view = 'users'; selectedUser = null; successMsg = ''; }} class="text-sm text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center gap-1">
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
			Back to users
		</button>

		<div class="space-y-5">
			<!-- User info -->
			<div class="rounded-lg border border-gray-200 bg-white p-5">
				<div class="flex items-center justify-between mb-3">
					<div>
						<h2 class="text-xl font-bold text-gray-900">{selectedUser.nickname || 'Unnamed User'}</h2>
						<code class="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{selectedUser.principal}</code>
					</div>
					<div class="flex gap-2">
						<button
							onclick={() => { view = 'assign'; assignProfileName = ''; }}
							class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors"
						>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
							Assign Role
						</button>
						<button
							onclick={() => { view = 'permission'; permFilter = ''; pendingGrants = new Set(); pendingRevokes = new Set(); }}
							class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
						>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
							Manage Permissions
						</button>
					</div>
				</div>

				<!-- Current profiles -->
				<h3 class="text-sm font-semibold text-gray-700 mb-2">Assigned Profiles</h3>
				{#if selectedUser.profiles.length === 0}
					<p class="text-sm text-gray-400 italic">No profiles assigned</p>
				{:else}
					<div class="flex flex-wrap gap-2 mb-4">
						{#each selectedUser.profiles as profile}
							<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold {profileColor(profile)}">
								{profile}
								<button
									onclick={() => handleRevoke(profile)}
									class="ml-0.5 opacity-60 hover:opacity-100"
									title="Revoke profile"
								>
									<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
								</button>
							</span>
						{/each}
					</div>
				{/if}

				<!-- Direct permissions -->
				{#if userDirectPerms.length > 0}
					<h3 class="text-sm font-semibold text-gray-700 mb-2 mt-4">Direct Permissions</h3>
					<div class="flex flex-wrap gap-2">
						{#each userDirectPerms as perm}
							<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
								{perm}
								<button
									onclick={() => handleRevokePermission(perm)}
									class="ml-0.5 opacity-60 hover:opacity-100"
									title="Revoke permission"
								>
									<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
								</button>
							</span>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Effective operations -->
			<div class="rounded-lg border border-gray-200 bg-white p-5">
				<h3 class="text-base font-semibold text-gray-900 mb-3">Effective Operations ({userPermissions.length})</h3>
				{#if detailLoading}
					<div class="flex items-center gap-2 text-gray-400 text-sm">
						<div class="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
						Loading...
					</div>
				{:else if userPermissions.length === 0}
					<p class="text-sm text-gray-400">No operations</p>
				{:else}
					<div class="flex flex-wrap gap-1.5">
						{#each userPermissions as op}
							<code class="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600">{op}</code>
						{/each}
					</div>
				{/if}
			</div>
		</div>

	<!-- Assign Profile Dialog -->
	{:else if view === 'assign' && selectedUser}
		<button onclick={() => { view = 'detail'; }} class="text-sm text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center gap-1">
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
			Back to user detail
		</button>

		<div class="rounded-lg border border-gray-200 bg-white p-6 max-w-lg">
			<h2 class="text-xl font-semibold text-gray-900 mb-1">Assign Profile</h2>
			<p class="text-sm text-gray-500 mb-4">Assign a role to <strong>{selectedUser.nickname || truncatePrincipal(selectedUser.principal)}</strong></p>

			<div class="mb-4">
				<label for="profile-select" class="block text-sm font-medium text-gray-700 mb-1">Profile</label>
				<select
					id="profile-select"
					bind:value={assignProfileName}
					class="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
				>
					<option value="">Select a profile...</option>
					{#each profiles.filter(p => !selectedUser?.profiles.includes(p.name)) as profile}
						<option value={profile.name}>{profile.name}</option>
					{/each}
				</select>
			</div>

			{#if assignProfileName}
				<div class="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
					<h4 class="text-xs font-semibold text-gray-600 mb-1">Operations granted by "{assignProfileName}":</h4>
					<div class="flex flex-wrap gap-1">
						{#each profiles.find(p => p.name === assignProfileName)?.allowed_to ?? [] as op}
							<code class="px-1.5 py-0.5 text-xs bg-white border rounded text-gray-600">{op}</code>
						{/each}
					</div>
				</div>
			{/if}

			<div class="flex gap-3">
				<button
					onclick={handleAssign}
					disabled={assignLoading || !assignProfileName}
					class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
				>
					{#if assignLoading}
						<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
					{/if}
					Assign Directly
				</button>
				<button
					onclick={handlePropose}
					disabled={assignLoading || !assignProfileName}
					class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-300 text-indigo-700 text-sm font-medium hover:bg-indigo-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
				>
					Propose (Governance Vote)
				</button>
			</div>
		</div>

	<!-- Manage Permissions View -->
	{:else if view === 'permission' && selectedUser}
		<button onclick={() => { view = 'detail'; discardPermissionChanges(); }} class="text-sm text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center gap-1">
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
			Back to user detail
		</button>

		<div class="rounded-lg border border-gray-200 bg-white">
			<div class="px-5 py-4 border-b border-gray-200">
				<h2 class="text-xl font-semibold text-gray-900 mb-1">Manage Permissions</h2>
				<p class="text-sm text-gray-500">Manage fine-grained permissions for <strong>{selectedUser.nickname || truncatePrincipal(selectedUser.principal)}</strong></p>
			</div>

			<!-- Filter + Actions Bar -->
			<div class="px-5 py-3 border-b border-gray-200 flex items-center gap-3 flex-wrap">
				<div class="flex-1 min-w-[200px]">
					<input
						type="text"
						bind:value={permFilter}
						placeholder="Filter permissions by name, category, or description..."
						class="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
					/>
				</div>
				{#if hasPendingChanges}
					<div class="flex items-center gap-2">
						<span class="text-xs text-gray-500">
							{#if pendingGrants.size > 0}<span class="text-green-600 font-medium">+{pendingGrants.size}</span>{/if}
							{#if pendingGrants.size > 0 && pendingRevokes.size > 0}&nbsp;/&nbsp;{/if}
							{#if pendingRevokes.size > 0}<span class="text-red-600 font-medium">-{pendingRevokes.size}</span>{/if}
						</span>
						<button
							onclick={discardPermissionChanges}
							class="px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
						>Discard</button>
						<button
							onclick={applyPermissionChanges}
							disabled={permLoading}
							class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-gray-900 text-white font-medium hover:bg-black disabled:opacity-40"
						>
							{#if permLoading}
								<div class="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
							{/if}
							Apply Changes
						</button>
					</div>
				{/if}
			</div>

			<!-- Permission List -->
			<div class="max-h-[480px] overflow-y-auto">
				{#each Object.entries(filteredOperations()) as [category, ops]}
					<div class="border-b border-gray-100 last:border-b-0">
						<div class="px-5 py-2 bg-gray-50 sticky top-0 z-10">
							<h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider">{category}</h3>
						</div>
						{#each ops as op}
							{@const state = permState(op.name)}
							{@const checked = isChecked(op.name)}
							{@const fromProfile = !userDirectPerms.includes(op.name) && userPermissions.includes(op.name)}
							<label
								class="flex items-start gap-3 px-5 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors {state === 'pending-grant' ? 'bg-green-50' : state === 'pending-revoke' ? 'bg-red-50' : ''}"
							>
								<input
									type="checkbox"
									checked={checked || fromProfile}
									disabled={fromProfile}
									onchange={() => { if (!fromProfile) togglePermission(op.name); }}
									class="mt-0.5 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 {fromProfile ? 'opacity-50' : ''}"
								/>
								<div class="flex-1 min-w-0">
									<div class="flex items-center gap-2">
										<code class="text-sm font-medium text-gray-900">{op.name}</code>
										{#if state === 'pending-grant'}
											<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-green-100 text-green-700">WILL GRANT</span>
										{:else if state === 'pending-revoke'}
											<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-red-100 text-red-700">WILL REVOKE</span>
										{:else if state === 'granted'}
											<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-blue-700">GRANTED</span>
										{:else if fromProfile}
											<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-500">VIA PROFILE</span>
										{/if}
									</div>
									<p class="text-xs text-gray-500 mt-0.5">{op.description}</p>
								</div>
							</label>
						{/each}
					</div>
				{:else}
					<div class="text-center py-8 text-sm text-gray-400">
						{permFilter ? 'No permissions match your filter' : 'Loading permissions...'}
					</div>
				{/each}
			</div>

			<!-- Sticky bottom bar when changes pending -->
			{#if hasPendingChanges}
				<div class="px-5 py-3 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
					<span class="text-sm text-gray-600">
						{pendingGrants.size + pendingRevokes.size} pending change{pendingGrants.size + pendingRevokes.size !== 1 ? 's' : ''}
					</span>
					<div class="flex gap-2">
						<button
							onclick={discardPermissionChanges}
							class="px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
						>Discard</button>
						<button
							onclick={applyPermissionChanges}
							disabled={permLoading}
							class="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-lg bg-gray-900 text-white font-medium hover:bg-black disabled:opacity-40"
						>
							{#if permLoading}
								<div class="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
							{/if}
							Apply Changes
						</button>
					</div>
				</div>
			{/if}
		</div>

	<!-- Users List View (default) -->
	{:else}
		<div class="rounded-lg border border-gray-200 bg-white">
			<!-- Toolbar -->
			<div class="flex items-center justify-between px-5 py-3 border-b border-gray-200">
				<div class="flex-1 max-w-sm">
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Search by principal, nickname, or profile..."
						class="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
					/>
				</div>
				<button
					onclick={loadUsers}
					disabled={loading}
					class="ml-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
				>
					{#if loading}
						<div class="w-3.5 h-3.5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
						Loading...
					{:else}
						<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
						Refresh
					{/if}
				</button>
			</div>

			<!-- Content -->
			{#if loading}
				<div class="flex items-center justify-center py-12">
					<svg class="animate-spin h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
					<span class="ml-3 text-gray-500 text-sm">Loading users...</span>
				</div>
			{:else if filteredUsers.length === 0}
				<div class="text-center py-12">
					<svg class="mx-auto h-10 w-10 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
					<p class="text-gray-500 text-sm">{searchQuery ? 'No users match your search' : 'No users found'}</p>
				</div>
			{:else}
				<div class="divide-y divide-gray-100">
					{#each filteredUsers as user}
						<div class="px-5 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between">
							<div class="flex-1 min-w-0">
								<div class="flex items-center gap-2 mb-1">
									<span class="text-sm font-medium text-gray-900 truncate">{user.nickname || 'Unnamed'}</span>
									<code class="text-xs text-gray-400">{truncatePrincipal(user.principal)}</code>
								</div>
								<div class="flex flex-wrap gap-1.5">
									{#each user.profiles as profile}
										<span class="px-2 py-0.5 rounded-full text-xs font-semibold {profileColor(profile)}">{profile}</span>
									{/each}
									{#if user.profiles.length === 0}
										<span class="text-xs text-gray-400 italic">no profiles</span>
									{/if}
								</div>
							</div>
							<button
								onclick={() => viewUser(user)}
								class="ml-3 p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
								title="View user details"
							>
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
							</button>
						</div>
					{/each}
				</div>
			{/if}

			<!-- Footer -->
			<div class="px-5 py-3 border-t border-gray-200 text-xs text-gray-400">
				{filteredUsers.length} user{filteredUsers.length !== 1 ? 's' : ''}
				{#if searchQuery}&nbsp;(filtered){/if}
			</div>
		</div>
	{/if}
</div>
