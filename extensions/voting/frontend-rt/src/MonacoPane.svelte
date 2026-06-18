<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import loader from '@monaco-editor/loader';
	import type * as Monaco from 'monaco-editor';

	let {
		code = '',
		language = 'python',
		readOnly = true,
		theme = 'vs',
	}: {
		code?: string;
		language?: string;
		readOnly?: boolean;
		theme?: string;
	} = $props();

	let container: HTMLDivElement | undefined = $state();
	let editor: Monaco.editor.IStandaloneCodeEditor | undefined = $state();
	let monacoApi: typeof Monaco | undefined = $state();
	let loadError = $state('');

	const MONACO_VERSION = '0.52.2';
	const MONACO_VS = `https://unpkg.com/monaco-editor@${MONACO_VERSION}/min/vs`;

	function formatLoadError(e: unknown): string {
		if (e instanceof Error) return e.message;
		if (e && typeof e === 'object' && 'type' in e) {
			return 'Failed to load the code editor script (check Content Security Policy or network).';
		}
		return String(e);
	}

	onMount(() => {
		let disposed = false;

		(async () => {
			if (!container) return;
			try {
				loader.config({ paths: { vs: MONACO_VS } });
				const monaco = await loader.init();
				if (disposed || !container) return;

				monacoApi = monaco;
				monaco.editor.setTheme(theme);

				editor = monaco.editor.create(container, {
					value: code,
					language,
					readOnly,
					theme,
					automaticLayout: true,
					minimap: { enabled: true },
					scrollBeyondLastLine: false,
					fontSize: 13,
					lineNumbers: 'on',
					renderLineHighlight: 'all',
					wordWrap: 'off',
					padding: { top: 12, bottom: 12 },
					scrollbar: {
						verticalScrollbarSize: 10,
						horizontalScrollbarSize: 10,
					},
				});
				editor.layout();
				requestAnimationFrame(() => editor?.layout());
			} catch (e: unknown) {
				loadError = formatLoadError(e);
			}
		})();

		return () => {
			disposed = true;
		};
	});

	$effect(() => {
		if (!editor) return;
		const model = editor.getModel();
		if (model && code !== model.getValue()) {
			editor.setValue(code);
		}
	});

	$effect(() => {
		if (!editor || !monacoApi) return;
		const model = editor.getModel();
		if (!model) return;
		const currentLanguage =
			typeof model.getLanguageId === 'function'
				? model.getLanguageId()
				: (monacoApi.editor as { getModelLanguage?: (m: Monaco.editor.ITextModel) => string })
						.getModelLanguage?.(model);
		if (currentLanguage && currentLanguage !== language) {
			monacoApi.editor.setModelLanguage(model, language);
		}
	});

	$effect(() => {
		editor?.updateOptions({ readOnly });
	});

	$effect(() => {
		monacoApi?.editor.setTheme(theme);
	});

	onDestroy(() => {
		editor?.dispose();
		editor = undefined;
	});
</script>

{#if loadError}
	<div class="monaco-error">
		<p>Failed to load code editor.</p>
		<pre>{loadError}</pre>
	</div>
{:else}
	<div class="monaco-host" bind:this={container}></div>
{/if}

<style>
	.monaco-host {
		width: 100%;
		height: 28rem;
		min-height: 28rem;
	}

	.monaco-error {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		min-height: 12rem;
		padding: 24px;
		background: #f3f3f3;
		color: #b91c1c;
		font-size: 0.875rem;
		text-align: center;
	}

	.monaco-error pre {
		margin-top: 8px;
		font-size: 0.75rem;
		color: #6b7280;
		white-space: pre-wrap;
		max-width: 100%;
	}
</style>
