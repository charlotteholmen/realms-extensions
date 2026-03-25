#!/usr/bin/env bash
# Run All Extension Tests
#
# Runs backend integration tests and Playwright E2E tests for all extensions
# that have test suites, against the Dominion staging realm.
#
# Usage:
#   bash testing/run_all_tests.sh                    # Run all tests
#   bash testing/run_all_tests.sh --backend-only     # Backend tests only
#   bash testing/run_all_tests.sh --e2e-only         # E2E tests only
#   bash testing/run_all_tests.sh --extension passport_verification  # Single extension
#
# Prerequisites:
#   - Run testing/setup_staging_realm.sh first (or set PLAYWRIGHT_BASE_URL)
#   - dfx identity configured with staging deploy permissions

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
EXTENSIONS_DIR="$REPO_ROOT/extensions"

# Default Dominion staging URL
DOMINION_FRONTEND_URL="https://gzya5-jyaaa-aaaac-qai5a-cai.icp0.io"

# Load .test-env if available
if [ -f "$REPO_ROOT/.test-env" ]; then
    echo -e "${BLUE}Loading test environment from .test-env${NC}"
    set -a
    source "$REPO_ROOT/.test-env"
    set +a
fi

export PLAYWRIGHT_BASE_URL="${PLAYWRIGHT_BASE_URL:-$DOMINION_FRONTEND_URL}"
export DFX_NETWORK="${DFX_NETWORK:-staging}"
export DFX_WARNING=-mainnet_plaintext_identity

# Parse arguments
RUN_BACKEND=true
RUN_E2E=true
TARGET_EXTENSION=""

while [[ $# -gt 0 ]]; do
    case $1 in
        --backend-only) RUN_E2E=false; shift ;;
        --e2e-only) RUN_BACKEND=false; shift ;;
        --extension) TARGET_EXTENSION="$2"; shift 2 ;;
        -h|--help)
            echo "Usage: $0 [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  --backend-only         Run only backend integration tests"
            echo "  --e2e-only             Run only Playwright E2E tests"
            echo "  --extension NAME       Test only the specified extension"
            echo "  -h, --help             Show this help"
            exit 0
            ;;
        *) echo -e "${RED}Unknown option: $1${NC}"; exit 1 ;;
    esac
done

echo -e "${BLUE}╭───────────────────────────────────────────╮${NC}"
echo -e "${BLUE}│ 🧪 Extension Test Runner                   │${NC}"
echo -e "${BLUE}╰───────────────────────────────────────────╯${NC}"
echo -e "  Base URL:  ${YELLOW}${PLAYWRIGHT_BASE_URL}${NC}"
echo -e "  Network:   ${YELLOW}${DFX_NETWORK}${NC}"
if [ -n "$TARGET_EXTENSION" ]; then
    echo -e "  Extension: ${YELLOW}${TARGET_EXTENSION}${NC}"
fi
echo ""

TOTAL_PASSED=0
TOTAL_FAILED=0
FAILED_TESTS=()

# Discover extensions with tests
discover_extensions() {
    if [ -n "$TARGET_EXTENSION" ]; then
        if [ -d "$EXTENSIONS_DIR/$TARGET_EXTENSION" ]; then
            echo "$TARGET_EXTENSION"
        else
            echo -e "${RED}Extension not found: $TARGET_EXTENSION${NC}" >&2
            exit 1
        fi
    else
        for ext_dir in "$EXTENSIONS_DIR"/*/; do
            local ext_name=$(basename "$ext_dir")
            # Skip _shared and hidden dirs
            [[ "$ext_name" == _* ]] && continue
            [[ "$ext_name" == .* ]] && continue
            echo "$ext_name"
        done
    fi
}

# Run backend tests for an extension
run_backend_tests() {
    local ext_name=$1
    local test_dir="$EXTENSIONS_DIR/$ext_name/tests"

    if [ ! -d "$test_dir" ]; then
        return 0
    fi

    # Find Python test files (exclude e2e directory)
    local test_files=$(find "$test_dir" -maxdepth 1 -name "test_*.py" -type f 2>/dev/null)
    if [ -z "$test_files" ]; then
        return 0
    fi

    echo -e "${BLUE}  📋 Backend tests for ${ext_name}${NC}"

    for test_file in $test_files; do
        local test_name=$(basename "$test_file")
        echo -n "     Running $test_name... "

        if DFX_NETWORK="$DFX_NETWORK" python3 "$test_file" > /tmp/test_output_$$.txt 2>&1; then
            echo -e "${GREEN}✓${NC}"
            TOTAL_PASSED=$((TOTAL_PASSED + 1))
        else
            echo -e "${RED}✗${NC}"
            TOTAL_FAILED=$((TOTAL_FAILED + 1))
            FAILED_TESTS+=("$ext_name/$test_name (backend)")
            # Show last few lines of output on failure
            tail -5 /tmp/test_output_$$.txt | sed 's/^/       /'
        fi
        rm -f /tmp/test_output_$$.txt
    done
}

# Run E2E tests for an extension
run_e2e_tests() {
    local ext_name=$1
    local e2e_dir="$EXTENSIONS_DIR/$ext_name/tests/e2e"
    local config_file="$EXTENSIONS_DIR/$ext_name/test_config.json"

    if [ ! -d "$e2e_dir" ] || [ ! -f "$e2e_dir/playwright.config.ts" ]; then
        return 0
    fi

    # Only run E2E tests if test_config.json explicitly enables them
    if [ ! -f "$config_file" ]; then
        return 0
    fi
    local e2e_enabled=$(jq -r '.e2e_tests.enabled // false' "$config_file" 2>/dev/null)
    if [ "$e2e_enabled" != "true" ]; then
        return 0
    fi

    echo -e "${BLUE}  🎭 E2E tests for ${ext_name}${NC}"

    cd "$e2e_dir"

    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        echo "     Installing npm dependencies..."
        npm install --silent 2>/dev/null
    fi

    # Ensure Playwright is available (use shared node_modules or install)
    if ! npx playwright --version >/dev/null 2>&1; then
        echo "     Installing Playwright..."
        npm install @playwright/test --silent 2>/dev/null
        npx playwright install chromium --with-deps 2>/dev/null
    fi

    echo -n "     Running Playwright tests... "

    if PLAYWRIGHT_BASE_URL="$PLAYWRIGHT_BASE_URL" npx playwright test > /tmp/e2e_output_$$.txt 2>&1; then
        echo -e "${GREEN}✓${NC}"
        TOTAL_PASSED=$((TOTAL_PASSED + 1))
    else
        echo -e "${RED}✗${NC}"
        TOTAL_FAILED=$((TOTAL_FAILED + 1))
        FAILED_TESTS+=("$ext_name (e2e)")
        # Show last few lines of output on failure
        tail -10 /tmp/e2e_output_$$.txt | sed 's/^/       /'
    fi
    rm -f /tmp/e2e_output_$$.txt

    cd "$REPO_ROOT"
}

# Main test loop
EXTENSIONS=$(discover_extensions)

for ext_name in $EXTENSIONS; do
    echo -e "${BLUE}━━━ ${ext_name} ━━━${NC}"

    if [ "$RUN_BACKEND" = true ]; then
        run_backend_tests "$ext_name"
    fi

    if [ "$RUN_E2E" = true ]; then
        run_e2e_tests "$ext_name"
    fi

    echo ""
done

# Summary
echo -e "${BLUE}╭───────────────────────────────────────────╮${NC}"
if [ $TOTAL_FAILED -eq 0 ]; then
    echo -e "${GREEN}│ ✅ All tests passed (${TOTAL_PASSED} suites)            │${NC}"
    echo -e "${GREEN}╰───────────────────────────────────────────╯${NC}"
else
    echo -e "${RED}│ ❌ ${TOTAL_FAILED} test suite(s) failed                  │${NC}"
    echo -e "${RED}╰───────────────────────────────────────────╯${NC}"
    echo ""
    echo -e "${RED}Failed tests:${NC}"
    for t in "${FAILED_TESTS[@]}"; do
        echo -e "  ${RED}✗ $t${NC}"
    done
fi

echo ""
echo -e "  Passed: ${GREEN}${TOTAL_PASSED}${NC}  Failed: ${RED}${TOTAL_FAILED}${NC}"

exit $TOTAL_FAILED
