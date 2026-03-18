#!/usr/bin/env bash
# Passport Verification E2E Test Runner
# Delegates to the shared E2E runner with extension-specific config
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Support both Docker (/app/extension-root/_shared/) and local (../../_shared/) paths
if [ -f /app/extension-root/_shared/testing/e2e/run-e2e-tests.sh ]; then
    SHARED_RUNNER=/app/extension-root/_shared/testing/e2e/run-e2e-tests.sh
    CONFIG_PATH=/app/extension-root/tests/e2e/playwright.config.ts
elif [ -f "$SCRIPT_DIR/../../../_shared/testing/e2e/run-e2e-tests.sh" ]; then
    SHARED_RUNNER="$SCRIPT_DIR/../../../_shared/testing/e2e/run-e2e-tests.sh"
    CONFIG_PATH="$SCRIPT_DIR/playwright.config.ts"
else
    echo "[ERROR] Shared E2E runner not found"
    exit 1
fi

# Install extension-specific npm dependencies
if [ -f "$SCRIPT_DIR/package.json" ]; then
    echo "📦 Installing extension E2E dependencies..."
    cd "$SCRIPT_DIR" && npm install 2>/dev/null
fi

bash "$SHARED_RUNNER" --config "$CONFIG_PATH" "$@"
