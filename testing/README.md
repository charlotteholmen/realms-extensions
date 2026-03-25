# Extension Integration Testing

Runs backend and frontend E2E tests for all extensions against a staging realm on the Internet Computer.

## Architecture

The extensions repo is **independent** from the realms repo. Tests download a specific version of the realms framework (specified in `.realms-version`) and deploy to the **Dominion** staging realm.

```
.realms-version          ← Pinned realms version (tag, SHA, or "latest")
testing/
├── setup_staging_realm.sh   ← Downloads realms, deploys to Dominion
├── run_all_tests.sh         ← Runs backend + E2E tests for all extensions
└── README.md
```

### Staging Realms

| # | Name | Use | Frontend URL |
|---|------|-----|-------------|
| 1 | **Dominion** | Extension testing | `https://gzya5-jyaaa-aaaac-qai5a-cai.icp0.io` |
| 2 | Agora | Realms repo development | `https://3gpbx-xaaaa-aaaac-qcylq-cai.icp0.io` |
| 3 | Syntropia | Reserved | — |

## Quick Start

### 1. Set realms version

Edit `.realms-version` in the repo root:

```
# Use a specific release
v0.9.2

# Or use the latest commit on main
latest

# Or a specific commit SHA
abc1234def
```

### 2. Deploy to staging

```bash
bash testing/setup_staging_realm.sh
```

This will:
- Clone/update the realms framework at the specified version
- Install the `realms` CLI
- Copy extensions into the realms tree
- Deploy frontend + backend to Dominion (`-R 1`)

### 3. Run tests

```bash
# All tests (backend + E2E)
bash testing/run_all_tests.sh

# Backend only
bash testing/run_all_tests.sh --backend-only

# E2E only
bash testing/run_all_tests.sh --e2e-only

# Single extension
bash testing/run_all_tests.sh --extension passport_verification
```

### 4. Run E2E tests manually

```bash
export PLAYWRIGHT_BASE_URL=https://gzya5-jyaaa-aaaac-qai5a-cai.icp0.io
cd extensions/passport_verification/tests/e2e
npm install
npx playwright install chromium
npx playwright test
npx playwright test --headed  # Watch in browser
```

## CI/CD

The `integration-test.yml` workflow needs an `IC_IDENTITY_PEM` secret in the GitHub repo settings containing the PEM key for the dfx identity that has controller access to the Dominion canisters.

The workflow runs automatically on push/PR to main:

1. **Setup job**: Clones realms at pinned version, deploys to Dominion
2. **Backend tests**: Runs `test_*.py` for each extension via `dfx canister call`
3. **E2E tests**: Runs Playwright specs against Dominion frontend URL

### Manual trigger

The workflow supports `workflow_dispatch` with optional overrides:
- `realms_version`: Override `.realms-version` (e.g., test against a specific commit)
- `extension`: Test a single extension instead of all

## Adding Tests to an Extension

### Backend tests

Create `extensions/<name>/tests/test_<name>.py`:
- Use `_shared/testing/utils/test_utils.py` helpers
- Tests run via `dfx canister call` against the deployed realm
- Define `async_task()` as the entry point

### E2E tests

Create `extensions/<name>/tests/e2e/`:
- `playwright.config.ts` — Playwright configuration
- `package.json` — Node dependencies
- `specs/<name>.spec.ts` — Test specs
- `run-e2e-tests.sh` — Runner script (delegates to shared runner)

The `PLAYWRIGHT_BASE_URL` environment variable points to the Dominion frontend.

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `REALMS_VERSION` | from `.realms-version` | Override realms framework version |
| `PLAYWRIGHT_BASE_URL` | Dominion URL | Frontend URL for E2E tests |
| `DFX_NETWORK` | `staging` | dfx network for backend tests |
| `REALM_NUMBER` | `1` | Realm number (1=Dominion) |
