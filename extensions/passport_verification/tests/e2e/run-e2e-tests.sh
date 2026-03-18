#!/usr/bin/env bash
# Passport Verification E2E Test Runner
# Delegates to the shared E2E runner
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Support both Docker (/app/extension-root/_shared/) and local (../../_shared/) paths
if [ -f /app/extension-root/_shared/testing/e2e/run-e2e-tests.sh ]; then
    bash /app/extension-root/_shared/testing/e2e/run-e2e-tests.sh "$@"
elif [ -f "$SCRIPT_DIR/../../../_shared/testing/e2e/run-e2e-tests.sh" ]; then
    bash "$SCRIPT_DIR/../../../_shared/testing/e2e/run-e2e-tests.sh" "$@"
else
    echo "[ERROR] Shared E2E runner not found"
    exit 1
fi
