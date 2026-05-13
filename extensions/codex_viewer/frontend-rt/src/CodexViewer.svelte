<script lang="ts">
	let { ctx }: { ctx: any } = $props();

	interface Codex {
		_id: string;
		id?: string;
		name: string;
		description?: string;
		code_preview?: string;
		code?: string;
		source?: string;
		version?: string;
		created_at?: number | null;
		updated_at?: number | null;
	}

	let codexes: Codex[] = $state([]);
	let loading = $state(true);
	let error = $state('');
	let searchTerm = $state('');
	let selectedCodex: Codex | null = $state(null);
	let detailLoading = $state(false);

	let filteredCodexes = $derived(
		searchTerm.trim()
			? codexes.filter((c) => {
					const term = searchTerm.toLowerCase();
					return (
						(c.name ?? '').toLowerCase().includes(term) ||
						(c.description ?? '').toLowerCase().includes(term)
					);
				})
			: codexes,
	);

	async function callExt(fn: string, args: Record<string, unknown> = {}) {
		return await ctx.callSync(fn, args);
	}

	async function loadCodexes() {
		loading = true;
		error = '';
		try {
			const res = await callExt('get_all_codexes');
			codexes = res?.codexes ?? res?.data ?? (Array.isArray(res) ? res : []);
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	async function viewCodex(codex: Codex) {
		detailLoading = true;
		error = '';
		try {
			const codexId = codex._id || codex.id || codex.name;
			const res = await callExt('get_codex_details', { codex_id: codexId });
			const detail = res?.codex ?? res?.data ?? res;
			if (detail && typeof detail === 'object' && (detail.code || detail.name)) {
				selectedCodex = detail;
			} else {
				selectedCodex = codex;
			}
		} catch {
			selectedCodex = codex;
		} finally {
			detailLoading = false;
		}
	}

	function goBack() {
		selectedCodex = null;
	}

	function formatTimestamp(timestamp: number | null | undefined): string {
		if (!timestamp) return '';
		return new Date(timestamp / 1_000_000).toLocaleString();
	}

	function unescapeCode(code: string | undefined | null): string {
		if (!code) return '';
		return code
			.replace(/\\n/g, '\n')
			.replace(/\\t/g, '\t')
			.replace(/\\"/g, '"')
			.replace(/\\\\/g, '\\')
			.replace(/^"""\s*\n?/, '')
			.replace(/\n?"""$/, '')
			.trim();
	}

	function highlightPython(code: string): string {
		const escaped = code
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');

		const lines = escaped.split('\n');
		return lines
			.map((line) => {
				let result = line;

				// Comments
				result = result.replace(/(#.*)$/gm, '<span class="hl-comment">$1</span>');

				// Strings (triple-quoted and single/double)
				result = result.replace(
					/("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g,
					'<span class="hl-string">$1</span>',
				);

				// Numbers
				result = result.replace(
					/\b(\d+\.?\d*(?:e[+-]?\d+)?)\b/g,
					'<span class="hl-number">$1</span>',
				);

				// Keywords
				const keywords =
					/\b(def|class|import|from|return|if|elif|else|for|while|try|except|finally|with|as|raise|pass|break|continue|and|or|not|in|is|None|True|False|self|lambda|yield|async|await|global|nonlocal)\b/g;
				result = result.replace(keywords, '<span class="hl-keyword">$1</span>');

				// Built-in functions
				const builtins =
					/\b(print|len|range|int|str|float|list|dict|set|tuple|type|isinstance|getattr|setattr|hasattr|sum|min|max|abs|round|enumerate|zip|map|filter|sorted|reversed|open|super)\b/g;
				result = result.replace(builtins, '<span class="hl-builtin">$1</span>');

				// Decorators
				result = result.replace(/^(\s*@\w+)/gm, '<span class="hl-decorator">$1</span>');

				// Function/class definitions
				result = result.replace(
					/\b(def|class)\b(\s+)(\w+)/g,
					'<span class="hl-keyword">$1</span>$2<span class="hl-funcname">$3</span>',
				);

				return result;
			})
			.join('\n');
	}

	function getCodexId(codex: Codex): string {
		return codex._id || codex.id || codex.name || '';
	}

	function explainWithAI() {
		if (!selectedCodex) return;
		const codexId = getCodexId(selectedCodex);
		const url = `/extensions/llm_chat?explain=codex:${encodeURIComponent(codexId)}`;
		window.open(url, '_blank');
	}

	$effect(() => {
		void loadCodexes();
	});
</script>

<div class="codex-root">
	<!-- Header -->
	<div class="header">
		<div>
			<h1 class="title">Codex Viewer</h1>
			<p class="subtitle">Browse installed codex packages</p>
		</div>
		<button class="btn-refresh" onclick={loadCodexes} disabled={loading}>
			<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
				/>
			</svg>
			Refresh
		</button>
	</div>

	{#if error}
		<div class="error-banner">{error}</div>
	{/if}

	<!-- Detail View -->
	{#if selectedCodex}
		<div>
			<button class="back-link" onclick={goBack}>← Back to list</button>

			<div class="detail-card">
				<div class="detail-header">
					<div class="detail-title-row">
						<svg
							class="icon-code"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
						<h2 class="detail-name">
							{selectedCodex.name || selectedCodex._id || 'Codex'}
						</h2>
						{#if selectedCodex.version}
							<span class="badge badge-green">v{selectedCodex.version}</span>
						{/if}
						<span class="badge badge-blue">Python</span>
					</div>

					<button class="btn-explain" onclick={explainWithAI} title="Ask AI to explain this codex in simple terms">
						<svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
							/>
						</svg>
						Explain with AI
					</button>
				</div>

				{#if selectedCodex.description}
					<p class="detail-description">{selectedCodex.description}</p>
				{/if}
				{#if formatTimestamp(selectedCodex.created_at)}
					<p class="detail-meta">Created: {formatTimestamp(selectedCodex.created_at)}</p>
				{/if}

				<!-- Code block with syntax highlighting -->
				{#if unescapeCode(selectedCodex.code || selectedCodex.source || selectedCodex.code_preview)}
				{@const rawCode = unescapeCode(selectedCodex.code || selectedCodex.source || selectedCodex.code_preview)}
					<div class="code-container">
						<div class="code-toolbar">
							<span>Python • {rawCode.split('\n').length} lines</span>
							<button
								class="btn-copy"
								onclick={() => navigator.clipboard.writeText(rawCode)}
							>
								Copy
							</button>
						</div>
						<div class="code-scroll">
							<table class="code-table">
								<tbody>
									{#each rawCode.split('\n') as line, i}
										<tr class="code-line">
											<td class="line-number">{i + 1}</td>
											<td class="line-content">{@html highlightPython(line)}</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				{:else}
					<div class="code-container">
						<div class="code-toolbar"><span>No code available</span></div>
						<pre class="code-fallback">{JSON.stringify(selectedCodex, null, 2)}</pre>
					</div>
				{/if}
			</div>
		</div>

	<!-- Loading State -->
	{:else if loading}
		<div class="center-message">
			<svg class="spinner" fill="none" viewBox="0 0 24 24">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
			</svg>
			<span>Loading codexes…</span>
		</div>

	<!-- List View -->
	{:else}
		<!-- Search -->
		<div class="search-box">
			<svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
			<input
				type="text"
				bind:value={searchTerm}
				placeholder="Search codexes…"
				class="search-input"
			/>
		</div>

		<div class="stats">
			<span>{codexes.length} total codexes</span>
			{#if searchTerm && filteredCodexes.length !== codexes.length}
				<span class="stats-filtered">({filteredCodexes.length} matching)</span>
			{/if}
		</div>

		{#if filteredCodexes.length === 0}
			<div class="empty-state">
				<svg class="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
				</svg>
				<p>{searchTerm ? 'No codexes match your search' : 'No codexes found'}</p>
			</div>
		{:else}
			<div class="grid">
				{#each filteredCodexes as codex (codex._id || codex.name)}
					<button class="card" onclick={() => viewCodex(codex)}>
						<div class="card-header">
							<div class="card-title">
								<svg class="icon-code-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
								</svg>
								<h3 class="card-name">{codex.name}</h3>
							</div>
							<span class="badge badge-blue">Python</span>
						</div>

						{#if codex.description}
							<p class="card-desc">{codex.description}</p>
						{/if}

						{#if codex.code_preview}
							<div class="card-preview">
								<pre>{codex.code_preview.split('\n').slice(0, 3).join('\n')}</pre>
							</div>
						{/if}

						<div class="card-footer">
							<span>ID: {(codex._id || '').substring(0, 12)}</span>
							<span class="view-link">View Code →</span>
						</div>
					</button>
				{/each}
			</div>
		{/if}
	{/if}

	<!-- Detail loading overlay -->
	{#if detailLoading}
		<div class="loading-overlay">
			<svg class="spinner" fill="none" viewBox="0 0 24 24">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
			</svg>
			<span>Loading details…</span>
		</div>
	{/if}
</div>

<style>
	.codex-root {
		padding: 24px;
		max-width: 1100px;
		margin: 0 auto;
		position: relative;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}
	.header {
		margin-bottom: 24px;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 16px;
	}
	.title {
		font-size: 1.5rem;
		font-weight: 700;
		color: #111827;
		margin: 0;
	}
	.subtitle {
		font-size: 0.875rem;
		color: #6b7280;
		margin: 4px 0 0;
	}
	.btn-refresh {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 6px 12px;
		font-size: 0.875rem;
		font-weight: 500;
		border-radius: 8px;
		border: 1px solid #d1d5db;
		background: #fff;
		color: #374151;
		cursor: pointer;
		transition: background 0.15s;
	}
	.btn-refresh:hover { background: #f9fafb; }
	.btn-refresh:disabled { opacity: 0.5; cursor: not-allowed; }
	.icon { width: 16px; height: 16px; }
	.icon-sm { width: 18px; height: 18px; }

	.error-banner {
		margin-bottom: 16px;
		padding: 12px 16px;
		background: #fef2f2;
		border: 1px solid #fecaca;
		color: #b91c1c;
		border-radius: 8px;
		font-size: 0.875rem;
	}

	/* Detail view */
	.back-link {
		color: #4f46e5;
		font-size: 0.875rem;
		background: none;
		border: none;
		cursor: pointer;
		margin-bottom: 16px;
		padding: 0;
	}
	.back-link:hover { text-decoration: underline; }

	.detail-card {
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 12px;
		overflow: hidden;
	}
	.detail-header {
		padding: 20px 24px;
		border-bottom: 1px solid #e5e7eb;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 12px;
	}
	.detail-title-row {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.icon-code { width: 24px; height: 24px; color: #2563eb; flex-shrink: 0; }
	.detail-name { font-size: 1.25rem; font-weight: 600; color: #111827; margin: 0; }
	.badge {
		display: inline-block;
		padding: 2px 8px;
		font-size: 0.75rem;
		font-weight: 500;
		border-radius: 9999px;
	}
	.badge-green { background: #dcfce7; color: #166534; }
	.badge-blue { background: #dbeafe; color: #1e40af; }

	.btn-explain {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 8px 14px;
		font-size: 0.875rem;
		font-weight: 500;
		border-radius: 8px;
		border: none;
		background: linear-gradient(135deg, #6366f1, #8b5cf6);
		color: #fff;
		cursor: pointer;
		transition: opacity 0.15s, transform 0.1s;
		box-shadow: 0 2px 6px rgba(99, 102, 241, 0.3);
	}
	.btn-explain:hover { opacity: 0.9; transform: translateY(-1px); }
	.btn-explain:active { transform: translateY(0); }

	.detail-description {
		padding: 12px 24px 0;
		font-size: 0.875rem;
		color: #4b5563;
		margin: 0;
	}
	.detail-meta {
		padding: 8px 24px 0;
		font-size: 0.75rem;
		color: #9ca3af;
		margin: 0;
	}

	/* Code block */
	.code-container {
		margin: 16px 24px 24px;
		border-radius: 10px;
		overflow: hidden;
		border: 1px solid #374151;
		background: #1e1e2e;
	}
	.code-toolbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 16px;
		background: #2d2d3d;
		border-bottom: 1px solid #374151;
		font-size: 0.75rem;
		color: #9ca3af;
	}
	.btn-copy {
		padding: 3px 10px;
		font-size: 0.75rem;
		border-radius: 4px;
		border: 1px solid #4b5563;
		background: #374151;
		color: #d1d5db;
		cursor: pointer;
		transition: background 0.15s;
	}
	.btn-copy:hover { background: #4b5563; }
	.code-scroll {
		overflow-x: auto;
		max-height: 600px;
		overflow-y: auto;
	}
	.code-table {
		border-collapse: collapse;
		width: 100%;
		font-family: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Menlo', monospace;
		font-size: 0.8125rem;
		line-height: 1.6;
	}
	.code-line:hover { background: rgba(255, 255, 255, 0.03); }
	.line-number {
		padding: 0 14px;
		text-align: right;
		color: #4b5563;
		user-select: none;
		white-space: nowrap;
		vertical-align: top;
		border-right: 1px solid #374151;
		width: 1%;
	}
	.line-content {
		padding: 0 16px;
		white-space: pre;
		color: #e2e8f0;
	}
	.code-fallback {
		padding: 16px;
		margin: 0;
		color: #a0aec0;
		font-size: 0.8125rem;
		font-family: 'JetBrains Mono', monospace;
		white-space: pre-wrap;
		word-break: break-word;
	}

	/* Syntax highlighting */
	:global(.hl-keyword) { color: #c678dd; font-weight: 500; }
	:global(.hl-string) { color: #98c379; }
	:global(.hl-comment) { color: #5c6370; font-style: italic; }
	:global(.hl-number) { color: #d19a66; }
	:global(.hl-builtin) { color: #61afef; }
	:global(.hl-decorator) { color: #e5c07b; }
	:global(.hl-funcname) { color: #61afef; font-weight: 500; }

	/* List view */
	.search-box { position: relative; max-width: 400px; margin-bottom: 16px; }
	.search-icon {
		position: absolute;
		left: 12px;
		top: 50%;
		transform: translateY(-50%);
		width: 20px;
		height: 20px;
		color: #9ca3af;
	}
	.search-input {
		width: 100%;
		padding: 8px 12px 8px 40px;
		border: 1px solid #d1d5db;
		border-radius: 8px;
		font-size: 0.875rem;
		outline: none;
		transition: border-color 0.15s;
	}
	.search-input:focus { border-color: #6366f1; box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15); }
	.stats { margin-bottom: 16px; font-size: 0.875rem; color: #6b7280; }
	.stats-filtered { color: #9ca3af; margin-left: 8px; }

	.empty-state {
		text-align: center;
		padding: 48px 16px;
		background: #f9fafb;
		border: 1px solid #e5e7eb;
		border-radius: 12px;
		color: #6b7280;
	}
	.empty-icon { width: 48px; height: 48px; margin: 0 auto 16px; color: #9ca3af; }

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 16px;
	}
	.card {
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 12px;
		padding: 16px;
		text-align: left;
		cursor: pointer;
		transition: box-shadow 0.2s, border-color 0.2s;
		width: 100%;
	}
	.card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-color: #a5b4fc; }
	.card-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 10px; }
	.card-title { display: flex; align-items: center; gap: 8px; min-width: 0; }
	.icon-code-sm { width: 20px; height: 20px; color: #2563eb; flex-shrink: 0; }
	.card-name { font-weight: 600; color: #111827; margin: 0; font-size: 0.95rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
	.card-desc { font-size: 0.8125rem; color: #6b7280; margin: 0 0 10px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
	.card-preview {
		background: #1e1e2e;
		border-radius: 6px;
		padding: 8px 10px;
		margin-bottom: 10px;
		overflow: hidden;
	}
	.card-preview pre { margin: 0; font-size: 0.7rem; color: #a0aec0; font-family: 'JetBrains Mono', monospace; white-space: pre; overflow: hidden; text-overflow: ellipsis; }
	.card-footer { display: flex; justify-content: space-between; font-size: 0.75rem; color: #9ca3af; }
	.view-link { color: #4f46e5; }

	.center-message { display: flex; align-items: center; justify-content: center; padding: 48px 0; gap: 12px; color: #6b7280; }
	.spinner { width: 32px; height: 32px; animation: spin 1s linear infinite; }
	@keyframes spin { to { transform: rotate(360deg); } }

	.loading-overlay {
		position: absolute;
		inset: 0;
		background: rgba(255, 255, 255, 0.85);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 12px;
		z-index: 10;
		gap: 12px;
		color: #6b7280;
	}
</style>
