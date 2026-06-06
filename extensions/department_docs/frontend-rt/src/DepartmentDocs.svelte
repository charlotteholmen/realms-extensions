<script lang="ts">
	let { ctx }: { ctx: any } = $props();

	interface DeptInfo {
		name: string;
		description: string;
		can_manage: boolean;
		members: string[];
	}

	interface DocMeta {
		id: string;
		title: string;
		department: string;
		scope: string;
		created_by: string;
		created_at: string;
		can_manage: boolean;
	}

	const principalStore = ctx.principal;
	let me = $state('');
	principalStore?.subscribe?.((v: string) => (me = v || ''));

	let departments = $state<DeptInfo[]>([]);
	let documents = $state<DocMeta[]>([]);
	let loading = $state(true);
	let error = $state('');

	let selectedDept = $state<string>('');

	// Viewer state
	let openDoc = $state<DocMeta | null>(null);
	let openState = $state<'idle' | 'loading' | 'no_access' | 'ready' | 'error'>('idle');
	let openContent = $state<{ title: string; body: string } | null>(null);
	let openError = $state('');

	// Composer state
	let composing = $state(false);
	let newTitle = $state('');
	let newBody = $state('');
	let saving = $state(false);
	let saveError = $state('');

	const visibleDocs = $derived(
		selectedDept ? documents.filter((d) => d.department === selectedDept) : documents,
	);
	const currentDept = $derived(departments.find((d) => d.name === selectedDept) || null);
	const canManageSelected = $derived(!!currentDept?.can_manage);

	async function loadAll() {
		loading = true;
		error = '';
		try {
			const dres: any = await ctx.callSync('list_departments');
			if (!dres?.success) throw new Error(dres?.error || 'Failed to load departments');
			departments = dres.data?.departments ?? [];
			if (!selectedDept && departments.length) selectedDept = departments[0].name;

			const lres: any = await ctx.callSync('list_documents');
			if (!lres?.success) throw new Error(lres?.error || 'Failed to load documents');
			documents = lres.data?.documents ?? [];
		} catch (e: any) {
			error = String(e?.message ?? e);
		} finally {
			loading = false;
		}
	}

	async function openDocument(doc: DocMeta) {
		openDoc = doc;
		openContent = null;
		openError = '';
		openState = 'loading';
		try {
			const res: any = await ctx.callSync('get_document', { id: doc.id });
			if (!res?.success) throw new Error(res?.error || 'Failed to load document');
			const ciphertext = res.data?.ciphertext || '';
			if (!ciphertext) {
				openState = 'ready';
				openContent = { title: doc.title, body: '(empty document)' };
				return;
			}
			const decrypted = await ctx.crypto.decryptScope(doc.scope, ciphertext);
			if (!decrypted) {
				openState = 'no_access';
				return;
			}
			openContent = { title: decrypted.title ?? doc.title, body: decrypted.body ?? '' };
			openState = 'ready';
		} catch (e: any) {
			openError = String(e?.message ?? e);
			openState = 'error';
		}
	}

	function startCompose() {
		composing = true;
		newTitle = '';
		newBody = '';
		saveError = '';
	}

	async function createDocument() {
		if (!selectedDept) return;
		if (!newTitle.trim()) {
			saveError = 'Title is required';
			return;
		}
		saving = true;
		saveError = '';
		try {
			// 1. Reserve a document id + scope on the backend.
			const created: any = await ctx.callSync('create_document', {
				department: selectedDept,
				title: newTitle.trim(),
			});
			if (!created?.success) throw new Error(created?.error || 'Failed to create document');
			const { id, scope } = created.data;

			// 2. Recipients: every department member + head + the author.
			const recipients = Array.from(
				new Set([...(currentDept?.members ?? []), me].filter(Boolean)),
			);

			// 3. Encrypt locally (fresh DEK, IBE-wrapped per recipient) via the host.
			const { ciphertext, wrappedDeks } = await ctx.crypto.encryptForRecipients(recipients, {
				title: newTitle.trim(),
				body: newBody,
			});

			// 4. Persist the ciphertext and grant the wrapped DEKs for the scope.
			const setRes: any = await ctx.callSync('set_document_ciphertext', { id, ciphertext });
			if (!setRes?.success) throw new Error(setRes?.error || 'Failed to store document');
			await ctx.crypto.grantScope(scope, wrappedDeks);

			composing = false;
			await loadAll();
		} catch (e: any) {
			saveError = String(e?.message ?? e);
		} finally {
			saving = false;
		}
	}

	async function deleteDocument(doc: DocMeta) {
		try {
			const res: any = await ctx.callSync('delete_document', { id: doc.id });
			if (!res?.success) throw new Error(res?.error || 'Failed to delete');
			if (openDoc?.id === doc.id) openDoc = null;
			await loadAll();
		} catch (e: any) {
			error = String(e?.message ?? e);
		}
	}

	loadAll();
</script>

<div class="p-4 space-y-4">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-xl font-semibold text-gray-900 dark:text-white">Department Documents</h1>
			<p class="text-sm text-gray-500 dark:text-gray-400">
				End-to-end encrypted documents shared with your department.
			</p>
		</div>
		{#if canManageSelected}
			<button
				class="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
				onclick={startCompose}
			>
				+ New document
			</button>
		{/if}
	</div>

	{#if loading}
		<p class="text-gray-500">Loading…</p>
	{:else if error}
		<div class="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/30 dark:text-red-300">
			{error}
		</div>
	{:else if departments.length === 0}
		<p class="text-gray-500">You are not a member of any department yet.</p>
	{:else}
		<div class="flex flex-wrap gap-2">
			{#each departments as d}
				<button
					class="rounded-full px-3 py-1 text-sm {selectedDept === d.name
						? 'bg-blue-600 text-white'
						: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200'}"
					onclick={() => (selectedDept = d.name)}
				>
					{d.name}
					{#if d.can_manage}<span class="ml-1 text-xs opacity-70">(head)</span>{/if}
				</button>
			{/each}
		</div>

		<div class="grid gap-4 md:grid-cols-2">
			<div class="space-y-2">
				{#if visibleDocs.length === 0}
					<p class="text-sm text-gray-500">No documents in this department.</p>
				{/if}
				{#each visibleDocs as doc}
					<div
						class="flex items-center justify-between rounded-lg border border-gray-200 p-3 dark:border-gray-700 {openDoc?.id ===
						doc.id
							? 'bg-blue-50 dark:bg-blue-900/20'
							: ''}"
					>
						<button class="flex-1 text-left" onclick={() => openDocument(doc)}>
							<div class="font-medium text-gray-900 dark:text-white">{doc.title}</div>
							<div class="text-xs text-gray-500">
								{doc.department} · by {doc.created_by.slice(0, 8)}…
							</div>
						</button>
						{#if doc.can_manage}
							<button
								class="ml-2 text-xs text-red-600 hover:underline"
								onclick={() => deleteDocument(doc)}
							>
								Delete
							</button>
						{/if}
					</div>
				{/each}
			</div>

			<div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
				{#if composing}
					<h2 class="mb-2 font-semibold text-gray-900 dark:text-white">
						New document in {selectedDept}
					</h2>
					<input
						class="mb-2 w-full rounded border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
						placeholder="Title"
						bind:value={newTitle}
					/>
					<textarea
						class="mb-2 h-40 w-full rounded border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
						placeholder="Document body (encrypted before it leaves your browser)"
						bind:value={newBody}
					></textarea>
					{#if saveError}
						<p class="mb-2 text-sm text-red-600">{saveError}</p>
					{/if}
					<div class="flex gap-2">
						<button
							class="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
							onclick={createDocument}
							disabled={saving}
						>
							{saving ? 'Encrypting & sharing…' : 'Encrypt & share'}
						</button>
						<button
							class="rounded-lg px-3 py-2 text-sm text-gray-600 hover:underline"
							onclick={() => (composing = false)}
						>
							Cancel
						</button>
					</div>
					<p class="mt-2 text-xs text-gray-400">
						Shared with {currentDept?.members.length ?? 0} department member(s).
					</p>
				{:else if openDoc}
					{#if openState === 'loading'}
						<p class="text-gray-500">Decrypting…</p>
					{:else if openState === 'no_access'}
						<div class="text-sm text-amber-700 dark:text-amber-300">
							This document is encrypted and you don't have a key for it.
						</div>
					{:else if openState === 'error'}
						<p class="text-sm text-red-600">{openError}</p>
					{:else if openState === 'ready' && openContent}
						<h2 class="mb-2 font-semibold text-gray-900 dark:text-white">{openContent.title}</h2>
						<pre class="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-200">{openContent.body}</pre>
					{/if}
				{:else}
					<p class="text-sm text-gray-400">Select a document to view, or create a new one.</p>
				{/if}
			</div>
		</div>
	{/if}
</div>
