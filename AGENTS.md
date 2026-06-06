# Extensions — Agent Guide

## What is an extension?

An extension is a self-contained frontend (Svelte) + optional backend (Python `entry.py`) module that runs inside a realm. The frontend is mounted by the main realm shell; the backend runs as a Python module inside the realm canister.

---

## Local Dev Server (fast iteration, no deploy needed)

`dev-server/` is a lightweight local shell that mimics the realm frontend just enough to mount and run any extension locally, with live reload and a real backend connection.

**Run it:**

```bash
cd dev-server
node bin/dev.js <extension_id>
# e.g.: node bin/dev.js voting
#       node bin/dev.js public_dashboard
```

Then open `http://localhost:5555/`.

**How it works:**

- Proxies `/api` to the test canister, so backend calls are real (not mocked)
- Proxies `/custom` and `/images` to the test canister, so realm assets (logo, background) load correctly
- Provides a real `RealmExtensionContext` (backend actor, `callSync`, `callAsync`, realm info, etc.)
- Authentication is bypassed on the test canister (`TEST_MODE_SKIP_AUTHENTICATION: true`), so anonymous local calls are allowed

**No changes to extension code are needed** — extensions run in the dev server exactly as they would in production.

---

## Deploying an extension

After testing locally, deploy with:

```bash
# 1. Build the frontend
cd extensions/<ext_id>/frontend-rt && npm run build && cd -

# 2. Upload files + redeploy the realm
realms deploy-files --network test
realms deploy-mundus --descriptor deployment-descriptors/test-mundus-layered.yml --realm agora
```

See the root `AGENTS.md` for full deploy options.
