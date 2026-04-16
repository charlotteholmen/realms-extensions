# member_dashboard frontend (runtime-loaded ESM bundle)

This directory contains the **per-extension frontend build** for the
`member_dashboard` extension, produced by `vite build --lib --format es`.

The output (`dist/index.js`) is a single self-contained ESM bundle that is
uploaded to the `file_registry` canister under

```
ext/member_dashboard/<version>/frontend/dist/index.js
```

and dynamic-imported by `realm_frontend` at runtime via its
`/extensions/[id]` route — without rebuilding the `realm_frontend` WASM.

Compare with `../test_bench/frontend-rt/` — the reference implementation of
**Layer 2 (runtime extensions — frontend half)** from
[smart-social-contracts/realms#168](https://github.com/smart-social-contracts/realms/issues/168).

## Build

```bash
npm install
npm run build
# → dist/index.js   (self-contained ESM; Svelte runtime inlined; CSS inlined)
```

## Bundle contract

The default export must be a `mount` function:

```ts
export default function mount(
  target: HTMLElement,
  props: {
    backend: any;           // authenticated realm_backend actor
    extensionId: string;    // "member_dashboard"
    version: string;        // e.g. "1.0.4"
    principal: string;      // logged-in user principal (may be empty if anonymous)
    isAuthenticated: boolean;
  },
): { unmount(): void };
```

The `backend` actor is used to make `extension_sync_call` requests to
`realm_backend` for:

- `member_dashboard.get_dashboard_summary(user_id)`
- `member_dashboard.get_citizenship_status(user_id)`
- `member_dashboard.get_personal_data(user_id)`
- `notifications.get_notifications(user_id)` — only if notifications ext is installed

## Scope vs build-time frontend

This runtime bundle is a **pragmatic subset** of the SvelteKit build-time
frontend at `../frontend/`. It intentionally drops:

- Tailwind / flowbite UI primitives (uses inline styles instead)
- `svelte-i18n` translations (uses English strings)
- The `PaymentAccounts` add/remove forms (read-only list only)
- The `demo_mark_invoice_paid` action button

Future iterations can port more surface in; all backend functions are
already wired on the realm_backend side via `../backend/entry.py`.
