#!/usr/bin/env bash
# =============================================================================
# Local integration test for demo_simulator extension
#
# Runs the full test cycle on a local dfx replica:
#   1. Upload demo_simulator to file_registry
#   2. Install on realm_backend via install_extension_from_registry
#   3. Verify extension listed in runtime extensions
#   4. Call initialize — check response
#   5. Call get_status — verify initial state
#   6. Run 5 batches (users, orgs, proposals, transfers, disputes)
#   7. Verify counters incremented correctly
#   8. Test set_seed, update_config, toggle, reset APIs
#
# Prerequisites:
#   - dfx SDK installed
#   - Run from any directory (paths are absolute)
#   - A running local replica with file_registry + realm_backend deployed
#     OR pass --bootstrap to have this script start one
#
# Usage:
#   bash test_local.sh              # requires running replica
#   bash test_local.sh --bootstrap  # start replica + deploy canisters first
#   bash test_local.sh --keep       # don't stop replica after test (with --bootstrap)
# =============================================================================

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

PASS=0
FAIL=0

pass() { PASS=$((PASS+1)); echo -e "${GREEN}  ✓ $1${NC}"; }
fail() { FAIL=$((FAIL+1)); echo -e "${RED}  ✗ $1${NC}"; }
info() { echo -e "${BLUE}$1${NC}"; }
warn() { echo -e "${YELLOW}$1${NC}"; }

assert_contains() {
    local output="$1" expected="$2" msg="$3"
    if echo "$output" | grep -q "$expected"; then
        pass "$msg"
    else
        fail "$msg (expected '$expected' in output)"
        echo "    Output: ${output:0:500}"
    fi
}

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
EXT_DIR="$SCRIPT_DIR"
REALMS_ROOT="/srv/realms"

# dfx 0.29.0 crashes with "Failed to set stderr output color: ColorOutOfRange"
# unless TERM is unset in non-interactive shells.
unset TERM
export DFX_WARNING="-mainnet_plaintext_identity"

BOOTSTRAP=false
KEEP=false
while [[ $# -gt 0 ]]; do
  case "$1" in
    --bootstrap) BOOTSTRAP=true; shift ;;
    --keep)      KEEP=true; shift ;;
    *) echo "Usage: $0 [--bootstrap] [--keep]"; exit 1 ;;
  esac
done

cd "$REALMS_ROOT"

# ── Bootstrap (optional) ──────────────────────────────────────────────
DFX_STARTED=false
if $BOOTSTRAP; then
    info "Bootstrapping local replica..."
    dfx stop 2>/dev/null || true
    sleep 1
    dfx start --clean --background 2>&1
    DFX_STARTED=true
    sleep 3

    info "Deploying file_registry..."
    dfx deploy file_registry --yes 2>&1 | tail -3

    info "Deploying realm_backend..."
    dfx build realm_backend 2>&1 | tail -3
    dfx canister create realm_backend --yes 2>/dev/null || true
    dfx canister install realm_backend --wasm .basilisk/realm_backend/realm_backend.wasm --mode auto --yes 2>&1
fi

cleanup() {
    if $DFX_STARTED && ! $KEEP; then
        info "\n Stopping local dfx replica..."
        (cd "$REALMS_ROOT" && dfx stop 2>/dev/null) || true
    fi
}
trap cleanup EXIT

# ── Verify prerequisites ─────────────────────────────────────────────
FILE_REGISTRY=$(dfx canister id file_registry 2>/dev/null || echo "")
BACKEND=$(dfx canister id realm_backend 2>/dev/null || echo "")

if [[ -z "$FILE_REGISTRY" ]]; then
    echo "ERROR: file_registry not deployed. Run with --bootstrap or deploy manually."
    exit 1
fi
if [[ -z "$BACKEND" ]]; then
    echo "ERROR: realm_backend not deployed. Run with --bootstrap or deploy manually."
    exit 1
fi

info "╔══════════════════════════════════════════════════╗"
info "║  demo_simulator Extension — Local Integration    ║"
info "╚══════════════════════════════════════════════════╝"
info "  file_registry: $FILE_REGISTRY"
info "  realm_backend: $BACKEND"

# ── Helpers ───────────────────────────────────────────────────────────

fr_call() {
    local method="$1" json_arg="$2"
    local escaped
    escaped=$(echo "$json_arg" | sed 's/\\/\\\\/g; s/"/\\"/g')
    dfx canister call "$FILE_REGISTRY" "$method" "(\"$escaped\")" 2>&1
}

fr_store() {
    local ns="$1" rel_path="$2" file="$3"
    local b64
    b64=$(base64 -w0 "$file")
    fr_call store_file "{\"namespace\":\"$ns\",\"path\":\"$rel_path\",\"content_b64\":\"$b64\",\"content_type\":\"text/plain\"}" > /dev/null
}

# extension_sync_call(extension_name: text, function_name: text, args: text)
ext_call() {
    local method="$1" args="${2:-{}}"
    local escaped_args
    escaped_args=$(echo "$args" | sed 's/"/\\"/g')
    dfx canister call "$BACKEND" extension_sync_call "(\"demo_simulator\", \"$method\", \"$escaped_args\")" 2>&1
}

# ── Step 1: Upload extension to file_registry ─────────────────────────
info "\n Step 1: Upload demo_simulator to file_registry"

VERSION=$(python3 -c "import json; print(json.load(open('$EXT_DIR/manifest.json'))['version'])")
NS="ext/demo_simulator/${VERSION}"

B64=$(base64 -w0 "$EXT_DIR/manifest.json")
fr_call store_file "{\"namespace\":\"$NS\",\"path\":\"manifest.json\",\"content_b64\":\"$B64\",\"content_type\":\"application/json\"}" > /dev/null

for f in "$EXT_DIR/backend/"*.py; do
    REL="backend/$(basename "$f")"
    fr_store "$NS" "$REL" "$f"
done

fr_call publish_namespace "{\"namespace\":\"$NS\"}" > /dev/null
pass "demo_simulator v${VERSION} uploaded and published"

RESULT=$(dfx canister call --query "$FILE_REGISTRY" list_extensions '()' 2>&1)
assert_contains "$RESULT" "demo_simulator" "demo_simulator visible in list_extensions"

# ── Step 2: Install on realm_backend ──────────────────────────────────
info "\n Step 2: Install extension from registry"

RESULT=$(dfx canister call "$BACKEND" install_extension_from_registry \
    "(\"{ \\\"registry_canister_id\\\": \\\"$FILE_REGISTRY\\\", \\\"ext_id\\\": \\\"demo_simulator\\\" }\")" 2>&1)
assert_contains "$RESULT" "success" "install_extension_from_registry succeeded"

# ── Step 3: Verify listed ─────────────────────────────────────────────
info "\n Step 3: Verify extension listed"

RESULT=$(dfx canister call --query "$BACKEND" list_runtime_extensions '()' 2>&1)
assert_contains "$RESULT" "demo_simulator" "demo_simulator in runtime extensions"

# ── Step 4: Call initialize ───────────────────────────────────────────
info "\n Step 4: Call initialize"

RESULT=$(ext_call "initialize")
assert_contains "$RESULT" "success" "initialize returned success"
assert_contains "$RESULT" "auto_activated" "initialize reports auto_activated flag"

# ── Step 5: Get initial status ────────────────────────────────────────
info "\n Step 5: Get initial status"

RESULT=$(ext_call "get_status")
assert_contains "$RESULT" "success" "get_status returned success"
assert_contains "$RESULT" "running" "has running field"
assert_contains "$RESULT" "stats" "has stats field"
assert_contains "$RESULT" "seed" "has seed field"
assert_contains "$RESULT" "batch_number" "has batch_number field"
assert_contains "$RESULT" "demo_mode_active" "has demo_mode_active field"

# ── Step 6: Run 5 batches (one per entity type) ──────────────────────
info "\n Step 6: Run batches (users, orgs, proposals, transfers, disputes)"

RESULT=$(ext_call "run_once")
assert_contains "$RESULT" "users" "batch 1: created users"

RESULT=$(ext_call "run_once")
assert_contains "$RESULT" "organizations" "batch 2: created organizations"

RESULT=$(ext_call "run_once")
assert_contains "$RESULT" "proposals" "batch 3: created proposals"

RESULT=$(ext_call "run_once")
assert_contains "$RESULT" "transfers" "batch 4: created transfers"

RESULT=$(ext_call "run_once")
assert_contains "$RESULT" "disputes" "batch 5: created disputes"

# ── Step 7: Verify counters ──────────────────────────────────────────
info "\n Step 7: Verify counters after batches"

RESULT=$(ext_call "get_status")
assert_contains "$RESULT" "\"batch_number\":5" "batch_number is 5"
# users count should be > 0
if echo "$RESULT" | grep -q '"users":0'; then
    fail "users counter should be > 0"
else
    pass "users counter incremented"
fi

# ── Step 8: Test set_seed ─────────────────────────────────────────────
info "\n Step 8: Set seed for deterministic output"

RESULT=$(ext_call "set_seed" '{"seed": 12345}')
assert_contains "$RESULT" "success" "set_seed succeeded"
assert_contains "$RESULT" "12345" "seed value echoed back"

# ── Step 9: Test update_config ────────────────────────────────────────
info "\n Step 9: Update config"

RESULT=$(ext_call "update_config" '{"batch_size": 5, "interval_seconds": 30}')
assert_contains "$RESULT" "success" "update_config succeeded"

RESULT=$(ext_call "get_status")
assert_contains "$RESULT" "\"batch_size\":5" "batch_size updated to 5"
assert_contains "$RESULT" "\"interval_seconds\":30" "interval updated to 30"
assert_contains "$RESULT" "\"seed\":12345" "seed persisted from set_seed"

# ── Step 10: Test toggle on/off ──────────────────────────────────────
info "\n Step 10: Toggle simulator"

RESULT=$(ext_call "toggle" '{"enabled": true}')
assert_contains "$RESULT" "started" "toggle on: reported started"

RESULT=$(ext_call "toggle" '{"enabled": false}')
assert_contains "$RESULT" "stopped" "toggle off: reported stopped"

# ── Step 11: Test reset ──────────────────────────────────────────────
info "\n Step 11: Reset counters"

RESULT=$(ext_call "reset")
assert_contains "$RESULT" "success" "reset succeeded"
assert_contains "$RESULT" "reset" "reset action reported"

RESULT=$(ext_call "get_status")
assert_contains "$RESULT" "\"batch_number\":0" "batch_number reset to 0"

# ── Results ───────────────────────────────────────────────────────────
echo ""
info "══════════════════════════════════════════════"
info "Results: ${GREEN}${PASS} passed${NC}, ${RED}${FAIL} failed${NC}"
info "══════════════════════════════════════════════"

if $DFX_STARTED && $KEEP; then
    info "\n --keep flag set. Replica still running."
    info "  To stop: cd $REALMS_ROOT && dfx stop"
fi

if [[ $FAIL -gt 0 ]]; then
    exit 1
fi
