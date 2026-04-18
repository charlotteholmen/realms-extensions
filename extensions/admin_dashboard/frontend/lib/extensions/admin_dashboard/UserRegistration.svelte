<script>
    /**
     * Legacy "registration code landing page".
     *
     * The actual joining flow lives in the realm's main join wizard at
     * `/join`. Older invitation links (and the
     * `RegistrationCode.registration_url` property of pre-1.0.6 extension
     * versions) pointed here, so this component is kept around purely to
     * forward the `?code=…` query parameter to `/join?invite=…` so existing
     * links don't break.
     */
    import { onMount } from 'svelte';

    export let registrationCode = '';

    let target = '/join';

    onMount(() => {
        if (typeof window === 'undefined') return;

        if (!registrationCode) {
            const urlParams = new URLSearchParams(window.location.search);
            registrationCode = urlParams.get('code') || urlParams.get('invite') || '';
        }

        target = registrationCode
            ? `/join?invite=${encodeURIComponent(registrationCode)}`
            : '/join';

        // Use replace so the broken legacy URL doesn't pollute browser history.
        window.location.replace(target);
    });
</script>

<div class="redirect-screen">
    <p>Redirecting to the join page…</p>
    <p>
        If you are not redirected automatically,
        <a href={target}>click here to continue</a>.
    </p>
</div>

<style>
    .redirect-screen {
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        font-family: system-ui, -apple-system, sans-serif;
        color: #444;
    }
    .redirect-screen a {
        color: #2563eb;
        text-decoration: underline;
    }
</style>
