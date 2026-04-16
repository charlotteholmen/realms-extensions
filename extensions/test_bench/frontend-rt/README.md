# test_bench frontend (runtime-loaded ESM bundle)

This directory contains the **per-extension frontend build** for the
`test_bench` extension, produced by `vite build --lib --format es`.

The output (`dist/index.js`) is a single self-contained ESM bundle that is
uploaded to the `file_registry` canister under

```
ext/test_bench/<version>/frontend/dist/index.js
```

and dynamic-imported by `realm_frontend` at runtime via its
`/extensions/[id]` route — without rebuilding the `realm_frontend` WASM.

This is the reference implementation of **Layer 2 (runtime extensions —
frontend half)** from
[smart-social-contracts/realms#168](https://github.com/smart-social-contracts/realms/issues/168).

## Build

```bash
npm install
npm run build
# → dist/index.js   (≈64 KB ESM, Svelte runtime inlined, CSS inlined)
```

## Bundle contract

The default export must be a `mount` function:

```ts
export default function mount(
  target: HTMLElement,
  props: { backend: any; extensionId: string; version: string }
): { unmount(): void };
```

`props.backend` is the authenticated `realm_backend` actor injected by the
host page; the extension can use it to make inter-canister calls
(`extension_sync_call`, etc.) without managing identity itself.
