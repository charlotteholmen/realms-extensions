<script lang="ts">
	let { backend, extensionId = 'passport_verification', version = '', principal = '', isAuthenticated = true }: any = $props();

	type Step = 'idle' | 'generating' | 'pending' | 'verified' | 'error';
	let step = $state<Step>('idle');
	let verificationLink = $state('');
	let applicationId = $state('');
	let statusResult: any = $state(null);
	let error = $state('');
	let loading = $state(false);

	async function callExtSync(fn: string, args: string = '') {
		const raw = await backend.extension_sync_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function callExtAsync(fn: string, args: string = '') {
		const raw = await backend.extension_async_call(JSON.stringify({
			extension_name: extensionId, function_name: fn, args,
		}));
		return JSON.parse(raw);
	}

	async function startVerification() {
		loading = true;
		error = '';
		try {
			const idRes = await callExtSync('get_current_application_id', '');
			applicationId = idRes?.data?.application_id ?? idRes?.application_id ?? '';

			if (!applicationId) {
				const createRes = await callExtSync('create_passport_identity', '');
				applicationId = createRes?.data?.application_id ?? createRes?.application_id ?? '';
			}

			const linkRes = await callExtAsync('get_verification_link', JSON.stringify({ application_id: applicationId }));
			verificationLink = linkRes?.data?.link ?? linkRes?.link ?? '';
			step = verificationLink ? 'pending' : 'error';
			if (!verificationLink) error = 'No verification link returned';
		} catch (e: any) {
			error = e?.message || String(e);
			step = 'error';
		} finally {
			loading = false;
		}
	}

	async function checkStatus() {
		loading = true;
		error = '';
		try {
			const res = await callExtAsync('check_verification_status', JSON.stringify({ application_id: applicationId }));
			statusResult = res?.data ?? res;
			const st = statusResult?.status ?? statusResult?.verification_status ?? '';
			if (st === 'verified' || st === 'approved') {
				step = 'verified';
			}
		} catch (e: any) {
			error = e?.message || String(e);
		} finally {
			loading = false;
		}
	}

	function copyLink() {
		if (verificationLink) navigator.clipboard.writeText(verificationLink);
	}
</script>

<div class="rt-pv">
	<div class="header">
		<h2>Passport Verification</h2>
		<span class="badge">v{version}</span>
	</div>

	{#if error}
		<div class="error">{error}</div>
	{/if}

	{#if step === 'idle'}
		<div class="card center">
			<p>Verify your identity using a passport or government-issued ID.</p>
			<button class="primary" onclick={startVerification} disabled={loading}>
				{loading ? 'Generating…' : 'Start Verification'}
			</button>
		</div>

	{:else if step === 'pending'}
		<div class="card">
			<h3>Verification Link</h3>
			<p>Open this link to complete verification:</p>
			<div class="link-row">
				<a href={verificationLink} target="_blank" rel="noopener">{verificationLink}</a>
				<button class="small" onclick={copyLink}>Copy</button>
			</div>
			<button class="primary" onclick={checkStatus} disabled={loading}>
				{loading ? 'Checking…' : 'Check Status'}
			</button>
			{#if statusResult}
				<pre class="output">{JSON.stringify(statusResult, null, 2)}</pre>
			{/if}
		</div>

	{:else if step === 'verified'}
		<div class="card center success-bg">
			<div class="icon">✓</div>
			<h3>Verified</h3>
			<p>Your identity has been successfully verified.</p>
			{#if statusResult}
				<pre class="output">{JSON.stringify(statusResult, null, 2)}</pre>
			{/if}
		</div>

	{:else if step === 'error'}
		<div class="card center">
			<p>Something went wrong. Please try again.</p>
			<button class="primary" onclick={() => { step = 'idle'; error = ''; }}>Retry</button>
		</div>
	{/if}
</div>

<style>
	.rt-pv { font-family: system-ui, -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 1.5rem; }
	.header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; }
	.header h2 { margin: 0; font-size: 1.5rem; }
	.badge { background: #e0e7ff; color: #3730a3; padding: 0.15rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; }
	.card { background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.5rem; }
	.center { text-align: center; }
	.success-bg { background: #f0fdf4; border-color: #bbf7d0; }
	.icon { font-size: 2.5rem; color: #16a34a; margin-bottom: 0.5rem; }
	.card h3 { margin: 0 0 0.5rem; }
	.card p { color: #4b5563; font-size: 0.875rem; margin: 0 0 1rem; line-height: 1.5; }
	.primary { padding: 0.5rem 1.25rem; background: #4f46e5; color: #fff; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 0.875rem; }
	.primary:hover:not(:disabled) { background: #4338ca; }
	.primary:disabled { opacity: 0.5; cursor: not-allowed; }
	.small { padding: 0.25rem 0.6rem; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 0.375rem; cursor: pointer; font-size: 0.75rem; }
	.link-row { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; padding: 0.5rem; background: #f9fafb; border-radius: 0.375rem; overflow: hidden; }
	.link-row a { font-size: 0.8rem; color: #4f46e5; word-break: break-all; }
	.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 1rem; font-size: 0.875rem; }
	.output { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 0.75rem; margin-top: 1rem; font-size: 0.75rem; font-family: ui-monospace, monospace; overflow-x: auto; white-space: pre-wrap; text-align: left; }
</style>
