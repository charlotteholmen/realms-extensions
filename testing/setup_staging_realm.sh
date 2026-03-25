#!/usr/bin/env bash
# Setup Staging Realm for Extension Testing
#
# Downloads the realms framework at the version specified in .realms-version,
# installs the CLI, and deploys all extensions to the Dominion staging realm.
#
# Usage:
#   bash testing/setup_staging_realm.sh
#   bash testing/setup_staging_realm.sh --skip-deploy   # Only download realms, don't deploy
#   REALMS_VERSION=v0.9.2 bash testing/setup_staging_realm.sh  # Override version
#
# Environment:
#   REALMS_VERSION  - Override the version from .realms-version
#   DFX_NETWORK     - dfx network to deploy to (default: staging)
#   REALM_NUMBER    - Realm number to deploy (default: 1 = Dominion)

set -e

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
REALMS_DIR="$REPO_ROOT/.realms-framework"
REALMS_REPO="https://github.com/smart-social-contracts/realms.git"

# Dominion staging canister IDs
DOMINION_FRONTEND_ID="gzya5-jyaaa-aaaac-qai5a-cai"
DOMINION_BACKEND_ID="h5vpp-qyaaa-aaaac-qai3a-cai"
DOMINION_FRONTEND_URL="https://${DOMINION_FRONTEND_ID}.icp0.io"

# Default settings
REALM_NUMBER="${REALM_NUMBER:-1}"
SKIP_DEPLOY=false

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --skip-deploy) SKIP_DEPLOY=true; shift ;;
        --realm) REALM_NUMBER="$2"; shift 2 ;;
        -h|--help)
            echo "Usage: $0 [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  --skip-deploy    Only download realms, don't deploy to staging"
            echo "  --realm NUM      Realm number (1=Dominion, 2=Agora, 3=Syntropia). Default: 1"
            echo "  -h, --help       Show this help"
            echo ""
            echo "Environment variables:"
            echo "  REALMS_VERSION   Override version from .realms-version"
            echo "  DFX_NETWORK      dfx network (default: staging)"
            echo "  REALM_NUMBER     Realm number (default: 1 = Dominion)"
            exit 0
            ;;
        *) echo -e "${RED}Unknown option: $1${NC}"; exit 1 ;;
    esac
done

# Read version from .realms-version if not overridden
if [ -z "$REALMS_VERSION" ]; then
    if [ -f "$REPO_ROOT/.realms-version" ]; then
        REALMS_VERSION=$(grep -v '^#' "$REPO_ROOT/.realms-version" | grep -v '^$' | head -1 | tr -d '[:space:]')
    fi
fi

if [ -z "$REALMS_VERSION" ]; then
    echo -e "${RED}Error: No realms version specified. Set REALMS_VERSION or create .realms-version${NC}"
    exit 1
fi

echo -e "${BLUE}╭───────────────────────────────────────────╮${NC}"
echo -e "${BLUE}│ 🏗️  Extension Test Environment Setup       │${NC}"
echo -e "${BLUE}╰───────────────────────────────────────────╯${NC}"
echo -e "${BLUE}Realms version: ${YELLOW}${REALMS_VERSION}${NC}"
echo -e "${BLUE}Target realm:   ${YELLOW}${REALM_NUMBER} (Dominion)${NC}"
echo ""

# Step 1: Download/update realms framework
echo -e "${BLUE}📦 Step 1: Downloading realms framework...${NC}"

if [ -d "$REALMS_DIR" ]; then
    echo "  Updating existing clone..."
    cd "$REALMS_DIR"
    git fetch --all --tags 2>/dev/null
else
    echo "  Cloning realms repository..."
    git clone "$REALMS_REPO" "$REALMS_DIR" 2>/dev/null
    cd "$REALMS_DIR"
fi

# Checkout the requested version
if [ "$REALMS_VERSION" = "latest" ]; then
    echo "  Checking out latest commit on main..."
    git checkout main 2>/dev/null
    git pull origin main 2>/dev/null
    RESOLVED_VERSION=$(git rev-parse --short HEAD)
    echo -e "  ${GREEN}✅ Using latest: ${RESOLVED_VERSION}${NC}"
else
    echo "  Checking out version: $REALMS_VERSION..."
    # Try as tag first, then as branch, then as commit SHA
    if git rev-parse "refs/tags/$REALMS_VERSION" >/dev/null 2>&1; then
        git checkout "tags/$REALMS_VERSION" 2>/dev/null
    elif git rev-parse "refs/remotes/origin/$REALMS_VERSION" >/dev/null 2>&1; then
        git checkout "$REALMS_VERSION" 2>/dev/null
    else
        git checkout "$REALMS_VERSION" 2>/dev/null
    fi
    RESOLVED_VERSION="$REALMS_VERSION"
    echo -e "  ${GREEN}✅ Checked out: ${RESOLVED_VERSION}${NC}"
fi

cd "$REPO_ROOT"

# Step 2: Install realms CLI
echo ""
echo -e "${BLUE}🔧 Step 2: Installing realms CLI...${NC}"
if command -v realms &>/dev/null; then
    echo -e "  ${GREEN}✅ realms CLI already available${NC}"
else
    pip install -e "$REALMS_DIR/cli/" --quiet 2>/dev/null || pipx install -e "$REALMS_DIR/cli/" 2>/dev/null
    echo -e "  ${GREEN}✅ realms CLI installed${NC}"
fi

# Step 3: Deploy to staging
if [ "$SKIP_DEPLOY" = true ]; then
    echo ""
    echo -e "${YELLOW}⏭️  Skipping deployment (--skip-deploy)${NC}"
else
    echo ""
    echo -e "${BLUE}🚀 Step 3: Deploying to Dominion staging realm...${NC}"

    export DFX_WARNING=-mainnet_plaintext_identity

    # Use the realms deploy script
    if [ -f "$REALMS_DIR/scripts/deploy_staging_dev.sh" ]; then
        cd "$REALMS_DIR"

        # Copy extension sources from the extensions repo into the realms tree
        echo "  Copying extensions from repo into realms tree..."
        if [ -d "$REALMS_DIR/extensions/extensions" ]; then
            cp -r "$REPO_ROOT/extensions/"* "$REALMS_DIR/extensions/extensions/" 2>/dev/null || true
        fi

        echo "  Deploying frontend + backend..."
        bash scripts/deploy_staging_dev.sh -R "$REALM_NUMBER" -f -b -c

        cd "$REPO_ROOT"
        echo -e "  ${GREEN}✅ Deployed to Dominion staging${NC}"
    else
        echo -e "${RED}  Error: deploy_staging_dev.sh not found in realms framework${NC}"
        exit 1
    fi
fi

# Output test environment info
echo ""
echo -e "${GREEN}╭───────────────────────────────────────────╮${NC}"
echo -e "${GREEN}│ ✅ Test Environment Ready                  │${NC}"
echo -e "${GREEN}╰───────────────────────────────────────────╯${NC}"
echo ""
echo -e "  Realms version:  ${YELLOW}${RESOLVED_VERSION}${NC}"
echo -e "  Frontend URL:    ${YELLOW}${DOMINION_FRONTEND_URL}${NC}"
echo -e "  Backend canister:${YELLOW} ${DOMINION_BACKEND_ID}${NC}"
echo ""
echo -e "  Export for tests:"
echo -e "    export PLAYWRIGHT_BASE_URL=${DOMINION_FRONTEND_URL}"
echo -e "    export DFX_NETWORK=staging"
echo ""

# Write environment file for CI
cat > "$REPO_ROOT/.test-env" << EOF
PLAYWRIGHT_BASE_URL=${DOMINION_FRONTEND_URL}
DOMINION_FRONTEND_ID=${DOMINION_FRONTEND_ID}
DOMINION_BACKEND_ID=${DOMINION_BACKEND_ID}
DFX_NETWORK=staging
REALMS_VERSION=${RESOLVED_VERSION}
REALM_NUMBER=${REALM_NUMBER}
EOF

echo -e "  ${GREEN}Environment written to .test-env${NC}"
