# Procurement extension

Structured public procurement for Realms: RFP lifecycle, bid storage, weighted scoring, and vendor reputation.

## Sealed bidding (vetKeys)

Bids are encrypted in the browser with a per-bid DEK wrapped via vetKeys IBE:

1. **Submit:** vendor-only envelope during the open window
2. **After close:** vendor clicks **Share with evaluators** to grant evaluator principals access
3. **Evaluators** decrypt via `ctx.crypto.decryptScope` once shared

The canister stores only opaque `enc:v=2:...` ciphertext.

## Roles

Grant extension-local permission strings via `role_manager` / `access_manager` (no realms repo `Operations` change required):

| Permission | Role |
|---|---|
| `procurement.rfp.create` | Requester |
| `procurement.rfp.publish` | Requester |
| `procurement.bid.submit` | Vendor |
| `procurement.evaluate` | Evaluator (or `Procurement` department membership) |
| `procurement.award` | Approver |
| `procurement.execute` | Approver |

Realm admins (`Operations.ALL`) bypass procurement-specific checks.

## Lifecycle

```
draft → open → closed → evaluation → award → contract_execution
```

Every transition is logged in `RfpTransition` (append-only).

## Backend RPC

Callable via `extension_sync_call('procurement', '<function>', args)`.

See [issue #12](https://github.com/smart-social-contracts/realms-extensions/issues/12) for the full API.

## Deploy

```bash
cd extensions/procurement/frontend-rt && npm run build
gh workflow run deploy-files.yml -f scope=extensions-only -f environment=test -f extensions=procurement
```
