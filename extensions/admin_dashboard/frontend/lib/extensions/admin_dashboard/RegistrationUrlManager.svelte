<script>
    import { onMount } from 'svelte';
    import { backend } from '$lib/canisters';

    let userId = '';
    let email = '';
    let expiresInHours = 24;
    let maxUses = 1;
    let profile = 'member';
    let frontendUrl = typeof window !== 'undefined' ? window.location.origin : '';
    let generatedUrl = '';
    let registrationCodes = [];
    let loading = false;
    let error = '';
    let success = '';

    onMount(() => {
        loadRegistrationCodes();
    });

    function parseExtensionResponse(response) {
        try {
            return JSON.parse(response.response);
        } catch (e) {
            console.error('Failed to parse extension response:', e);
            return { success: false, error: 'Invalid response format from server' };
        }
    }

    async function generateRegistrationUrl() {
        if (!userId.trim()) {
            error = 'User ID is required';
            return;
        }
        if (!profile) {
            error = 'Please select a profile to grant';
            return;
        }
        const parsedMaxUses = parseInt(maxUses, 10);
        if (!Number.isFinite(parsedMaxUses) || parsedMaxUses < 1) {
            error = 'Max uses must be a positive integer';
            return;
        }

        loading = true;
        error = '';
        success = '';

        try {
            const response = await backend.extension_sync_call({
                extension_name: 'admin_dashboard',
                function_name: 'generate_registration_url',
                args: JSON.stringify({
                    user_id: userId,
                    email: email || null,
                    profile,
                    expires_in_hours: parseInt(expiresInHours, 10) || 24,
                    max_uses: parsedMaxUses,
                    frontend_url: frontendUrl
                })
            });

            const result = parseExtensionResponse(response);
            if (result.success) {
                generatedUrl = result.data.registration_url;
                success = `Invitation URL generated (${result.data.profile})`;
                await loadRegistrationCodes();
                userId = '';
                email = '';
            } else {
                error = result.error || 'Failed to generate registration URL';
            }
        } catch (e) {
            error = 'Network error: ' + e.message;
        } finally {
            loading = false;
        }
    }

    async function revokeCode(code) {
        if (!code) return;
        loading = true;
        error = '';
        try {
            const response = await backend.extension_sync_call({
                extension_name: 'admin_dashboard',
                function_name: 'revoke_registration_code',
                args: JSON.stringify({ code })
            });
            const result = parseExtensionResponse(response);
            if (result.success) {
                success = 'Invitation revoked';
                await loadRegistrationCodes();
            } else {
                error = result.error || 'Failed to revoke invitation';
            }
        } catch (e) {
            error = 'Network error: ' + e.message;
        } finally {
            loading = false;
        }
    }

    async function loadRegistrationCodes() {
        try {
            const response = await backend.extension_sync_call({
                extension_name: 'admin_dashboard',
                function_name: 'get_registration_codes',
                args: JSON.stringify({
                    include_used: true,
                    include_revoked: true
                })
            });
            const result = parseExtensionResponse(response);
            if (result.success) {
                registrationCodes = result.data;
            }
        } catch (e) {
            console.error('Failed to load registration codes:', e);
        }
    }

    function copyToClipboard(text) {
        if (!text) return;
        navigator.clipboard.writeText(text).then(() => {
            success = 'URL copied to clipboard!';
            setTimeout(() => success = '', 3000);
        });
    }

    function formatDate(isoString) {
        if (!isoString) return '-';
        return new Date(isoString).toLocaleString();
    }

    function statusLabel(code) {
        if (code.revoked) return 'Revoked';
        if (!code.is_valid && code.uses_count >= code.max_uses) return 'Used up';
        if (!code.is_valid) return 'Expired';
        if (code.uses_count > 0) return `${code.uses_count}/${code.max_uses} used`;
        return 'Valid';
    }

    function statusClass(code) {
        if (code.revoked) return 'invalid';
        return code.is_valid ? 'valid' : 'invalid';
    }
</script>

<div class="registration-url-manager">
    <h2>Invitation Links</h2>
    <p class="lede">
        Mint a one-time (or multi-use) link that lets a new user join this realm
        with the role you choose. Anyone visiting the realm without an invite
        link can only join as a <strong>Member</strong>.
    </p>

    <!-- Generate New URL Form -->
    <div class="form-section">
        <h3>Generate new invitation</h3>

        <div class="form-row">
            <div class="form-group">
                <label for="userId">Invitee identifier *</label>
                <input
                    id="userId"
                    type="text"
                    bind:value={userId}
                    placeholder="Free-form identifier (e.g. 'alice')"
                    disabled={loading}
                />
            </div>

            <div class="form-group">
                <label for="email">Email (optional)</label>
                <input
                    id="email"
                    type="email"
                    bind:value={email}
                    placeholder="user@example.com"
                    disabled={loading}
                />
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label for="profile">Role granted *</label>
                <select id="profile" bind:value={profile} disabled={loading}>
                    <option value="member">Member</option>
                    <option value="admin">Administrator</option>
                </select>
            </div>

            <div class="form-group">
                <label for="expires">Expires in (hours)</label>
                <input
                    id="expires"
                    type="number"
                    bind:value={expiresInHours}
                    min="1"
                    max="8760"
                    disabled={loading}
                />
            </div>

            <div class="form-group">
                <label for="maxUses">Max uses</label>
                <input
                    id="maxUses"
                    type="number"
                    bind:value={maxUses}
                    min="1"
                    max="10000"
                    disabled={loading}
                />
            </div>
        </div>

        <div class="form-group">
            <label for="frontendUrl">Frontend URL</label>
            <input
                id="frontendUrl"
                type="url"
                bind:value={frontendUrl}
                disabled={loading}
            />
        </div>

        <button
            class="btn-primary"
            on:click={generateRegistrationUrl}
            disabled={loading || !userId.trim()}
        >
            {loading ? 'Generating...' : 'Generate invitation URL'}
        </button>

        {#if error}
            <div class="alert alert-error">{error}</div>
        {/if}

        {#if success}
            <div class="alert alert-success">{success}</div>
        {/if}

        {#if generatedUrl}
            <div class="generated-url">
                <h4>Generated URL</h4>
                <p class="hint">
                    Send this link to the invitee. They will be taken to the
                    realm's join wizard with the role pre-selected.
                </p>
                <div class="url-container">
                    <input
                        type="text"
                        value={generatedUrl}
                        readonly
                        class="url-input"
                    />
                    <button
                        class="btn-copy"
                        on:click={() => copyToClipboard(generatedUrl)}
                    >
                        Copy
                    </button>
                </div>
            </div>
        {/if}
    </div>

    <!-- Existing codes -->
    <div class="codes-section">
        <h3>Existing invitations</h3>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Invitee</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Code</th>
                        <th>Expires</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {#each registrationCodes as code (code.code)}
                        <tr class:expired={!code.is_valid} class:used={code.uses_count > 0 && code.uses_count >= code.max_uses}>
                            <td>{code.user_id || '-'}</td>
                            <td>{code.email || '-'}</td>
                            <td>
                                <span class="role-badge role-{(code.profile || 'member')}">
                                    {(code.profile || 'member')}
                                </span>
                            </td>
                            <td class="code-cell">{code.code}</td>
                            <td>{formatDate(code.expires_at)}</td>
                            <td>
                                <span class="status-badge {statusClass(code)}">
                                    {statusLabel(code)}
                                </span>
                            </td>
                            <td class="actions-cell">
                                <button
                                    class="btn-small"
                                    on:click={() => copyToClipboard(code.registration_url)}
                                >
                                    Copy URL
                                </button>
                                {#if code.is_valid}
                                    <button
                                        class="btn-small btn-danger"
                                        on:click={() => revokeCode(code.code)}
                                        disabled={loading}
                                    >
                                        Revoke
                                    </button>
                                {/if}
                            </td>
                        </tr>
                    {/each}
                    {#if registrationCodes.length === 0}
                        <tr>
                            <td colspan="7" class="empty">No invitations yet.</td>
                        </tr>
                    {/if}
                </tbody>
            </table>
        </div>
    </div>
</div>

<style>
    .registration-url-manager {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .lede {
        color: #555;
        margin-bottom: 20px;
    }

    .form-section, .codes-section {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .form-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 15px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: 500;
    }

    input, select {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
        background: white;
    }

    input:disabled, select:disabled {
        background-color: #f5f5f5;
    }

    .btn-primary {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
    }

    .btn-primary:hover:not(:disabled) {
        background-color: #0056b3;
    }

    .btn-primary:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
    }

    .btn-copy, .btn-small {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 3px;
        cursor: pointer;
        font-size: 12px;
        margin-right: 4px;
    }

    .btn-copy:hover, .btn-small:hover {
        background-color: #218838;
    }

    .btn-danger {
        background-color: #dc3545;
    }

    .btn-danger:hover {
        background-color: #b02a37;
    }

    .alert {
        padding: 10px;
        border-radius: 4px;
        margin-top: 10px;
    }

    .alert-error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }

    .alert-success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }

    .generated-url {
        margin-top: 20px;
        padding: 15px;
        background-color: #f8f9fa;
        border-radius: 4px;
    }

    .hint {
        font-size: 12px;
        color: #666;
        margin-top: 4px;
        margin-bottom: 8px;
    }

    .url-container {
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }

    .url-input {
        flex: 1;
        font-family: monospace;
    }

    .table-container {
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
    }

    th, td {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f8f9fa;
        font-weight: 600;
    }

    .code-cell {
        font-family: monospace;
        font-size: 12px;
    }

    .role-badge {
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
    }

    .role-badge.role-admin {
        background-color: #f5d976;
        color: #5a4500;
    }

    .role-badge.role-member {
        background-color: #d4e7ff;
        color: #1a3a66;
    }

    .status-badge {
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 500;
    }

    .status-badge.valid {
        background-color: #d4edda;
        color: #155724;
    }

    .status-badge.invalid {
        background-color: #f8d7da;
        color: #721c24;
    }

    tr.expired {
        opacity: 0.6;
    }

    tr.used {
        background-color: #f8f9fa;
    }

    td.empty {
        text-align: center;
        color: #888;
        font-style: italic;
        padding: 24px;
    }

    .actions-cell {
        white-space: nowrap;
    }
</style>
