# Realms Marketplace

An independent marketplace canister system for the Realms platform, enabling developers to publish and sell extensions, and realms to discover and purchase them.

## Architecture

```
extensions/marketplace/
├── marketplace_backend/     # Python/Kybra backend canister
│   ├── api/                # Business logic
│   ├── core/               # Candid types and entities
│   ├── main.py            # Canister entry point
│   └── marketplace_backend.did
├── marketplace_frontend/    # SvelteKit frontend canister
│   └── src/
├── dfx.json                # Deployment configuration
└── README.md
```

## Features

### For Developers
- **Developer License**: Purchase an annual license (100 ICP) to publish extensions
- **Extension Publishing**: List extensions with pricing, descriptions, and download URLs
- **Revenue Tracking**: Monitor downloads, sales, and earnings
- **Payouts**: Request withdrawals of accumulated earnings (70% revenue share)

### For Realms
- **Browse Marketplace**: Discover extensions by category or search
- **Purchase Extensions**: Buy extensions to use in your realm
- **Manage Purchases**: View and download purchased extensions

### Marketplace Statistics
- Total developers, extensions, and purchases
- Platform-wide revenue tracking
- 30% platform fee, 70% to developers

## Development

### Prerequisites
- dfx (Internet Computer SDK)
- Python 3.10+ with Kybra
- Node.js 18+

### Local Development

```bash
cd extensions/marketplace

# Start local replica
dfx start --clean --background

# Deploy canisters
dfx deploy

# Frontend development
cd marketplace_frontend
npm install
npm run start
```

### Build Commands

```bash
# Build backend
dfx build marketplace_backend

# Build frontend
cd marketplace_frontend
npm run build
dfx build marketplace_frontend
```

## API Reference

### Developer License
- `check_license(principal)` - Check if principal has active license
- `buy_developer_license()` - Purchase/renew developer license

### Extension Management
- `create_extension(...)` - Publish a new extension
- `update_extension(...)` - Update existing extension
- `delist_extension(extension_id)` - Unpublish extension
- `get_extension_details(extension_id)` - Get extension info
- `list_marketplace_extensions(page, per_page)` - List all extensions
- `search_marketplace(query)` - Search extensions

### Purchases
- `buy_extension(extension_id)` - Purchase an extension
- `has_purchased(realm_principal, extension_id)` - Check purchase status
- `get_my_purchases()` - Get caller's purchases

### Developer Dashboard
- `get_my_developer_stats()` - Get developer statistics
- `get_my_extensions()` - Get developer's extensions
- `withdraw_earnings()` - Request payout

### Statistics
- `marketplace_stats()` - Get marketplace statistics

## Deployment

### To IC Mainnet

```bash
dfx deploy --network ic
```

### Canister IDs
After deployment, canister IDs will be stored in `canister_ids.json`.

## Business Model

- **Developer License**: 100 ICP/year
- **Revenue Share**: 70% to developer, 30% platform fee
- **Minimum Payout**: 1 ICP
- **Free Extensions**: Supported (price = 0)

## License

MIT License - Smart Social Contracts
