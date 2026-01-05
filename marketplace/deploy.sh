#!/bin/bash
# Deploy Marketplace Script
# Usage: ./deploy.sh [--network local|staging|ic]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Default network
NETWORK="local"

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --network|-n)
            NETWORK="$2"
            shift 2
            ;;
        --help|-h)
            echo "Usage: $0 [--network local|staging|ic]"
            echo ""
            echo "Options:"
            echo "  --network, -n    Network to deploy to (local, staging, ic). Default: local"
            echo "  --help, -h       Show this help message"
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done

# Validate network
if [[ "$NETWORK" != "local" && "$NETWORK" != "staging" && "$NETWORK" != "ic" ]]; then
    echo "❌ Invalid network: $NETWORK"
    echo "   Valid options: local, staging, ic"
    exit 1
fi

echo "🚀 Deploying Marketplace to $NETWORK network..."

# Check if venv exists
if [ ! -d "venv" ]; then
    echo "📦 Creating Python virtual environment..."
    python3 -m venv venv
fi

# Activate venv
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install dependencies
if [ -f "requirements.txt" ]; then
    echo "📥 Installing Python dependencies..."
    pip install -q -r requirements.txt
fi

# Generate extension data from manifests
echo "📊 Generating extension data from manifests..."
python3 scripts/generate_extensions.py

# Build frontend
echo "🏗️  Building frontend..."
cd marketplace_frontend
if [ ! -d "node_modules" ]; then
    npm install
fi
npm run build
cd ..

# Deploy based on network
echo "🌐 Deploying canisters to $NETWORK..."
if [ "$NETWORK" == "local" ]; then
    # Check if dfx is running locally
    if ! dfx ping 2>/dev/null; then
        echo "⚠️  Local dfx not running. Starting dfx..."
        dfx start --background --clean
        sleep 3
    fi
    dfx deploy
else
    dfx deploy --network "$NETWORK"
fi

echo ""
echo "✅ Marketplace deployed successfully!"
echo ""

# Get canister IDs
if [ "$NETWORK" == "local" ]; then
    FRONTEND_ID=$(dfx canister id marketplace_frontend 2>/dev/null || echo "unknown")
    BACKEND_ID=$(dfx canister id marketplace_backend 2>/dev/null || echo "unknown")
    echo "📍 Frontend URL: http://${FRONTEND_ID}.localhost:8000/"
    echo "📍 Backend Candid: http://127.0.0.1:8000/?canisterId=isncp-tx777-77777-aaalq-cai&id=${BACKEND_ID}"
else
    FRONTEND_ID=$(dfx canister id marketplace_frontend --network "$NETWORK" 2>/dev/null || echo "unknown")
    BACKEND_ID=$(dfx canister id marketplace_backend --network "$NETWORK" 2>/dev/null || echo "unknown")
    if [ "$NETWORK" == "ic" ]; then
        echo "📍 Frontend URL: https://${FRONTEND_ID}.icp0.io/"
        echo "📍 Backend Candid: https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=${BACKEND_ID}"
    else
        echo "📍 Frontend ID: ${FRONTEND_ID}"
        echo "📍 Backend ID: ${BACKEND_ID}"
    fi
fi
