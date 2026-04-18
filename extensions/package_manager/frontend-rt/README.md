# package_manager — runtime-loadable frontend bundle

This is the Layer-2 (runtime extension) build of the `package_manager`
admin UI. It produces a single self-contained ESM bundle (`dist/index.js`)
that is uploaded to a `file_registry` canister and dynamic-imported by
`realm_frontend` at runtime — no host WASM rebuild required.

## Build

```bash
npm install
npm run build
```

`dist/index.js` is the bundle. The `realms extension publish` /
`scripts/build_runtime_bundles.py + scripts/publish_layered.py` pipeline
builds and uploads it to `ext/package_manager/<version>/frontend/dist/index.js`.

## Mount contract

The bundle's default export matches `realm_frontend`'s extension-loader
contract:

```ts
mount(target: HTMLElement, props: {
  backend: any;          // authenticated realm_backend actor (injected by host)
  extensionId: string;   // 'package_manager'
  version: string;       // e.g. '0.1.0'
  principal?: string;    // current user's principal text
  isAuthenticated?: boolean;
}): { unmount(): void };
```

Everything host-specific (the realm_backend actor, the user's principal,
the auth state) must arrive via `props`. The bundle does not import from
the host's `$lib/canisters` or `$lib/stores/*` because those modules do
not exist inside this isolated build.

The list of registries the realm is connected to is fetched from
`backend.status()` directly inside the bundle.
