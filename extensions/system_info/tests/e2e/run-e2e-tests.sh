#!/usr/bin/env bash
# Run E2E tests for system_info extension
# Delegates to the shared E2E runner

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SHARED_RUNNER="$SCRIPT_DIR/../../../../_shared/testing/e2e/run-e2e-tests.sh"

if [ -f "$SHARED_RUNNER" ]; then
    export E2E_CONFIG_PATH="$SCRIPT_DIR/playwright.config.ts"
    bash "$SHARED_RUNNER" "$@"
else
    echo "Shared E2E runner not found, running directly..."
    cd "$SCRIPT_DIR"
    npx playwright test "$@"
fi
