"""
Vault Extension Entry Point

This extension provides treasury functionality directly embedded in the realm_backend canister.
No separate vault canister is required - all logic runs in the same canister for maximum performance.
"""

import json
import traceback
from typing import Dict

from ggg import Balance, Transfer
from basilisk import Async, Principal, ic
from basilisk.os.wallet import Wallet
from ic_python_db import Database
from ic_python_logging import get_logger

from .vault_lib import entities as vault_entities
from .vault_lib.constants import (
    CANISTER_PRINCIPALS,
    DEFAULT_TOKEN,
    MAX_ITERATION_COUNT,
    MAX_RESULTS,
    REFRESH_COOLDOWN,
)
from .vault_lib.entities import Canisters, KnownSubaccount, app_data
from .vault_lib.ic_util_calls import get_account_transactions

# Singleton Wallet instance — initialized in initialize()
_wallet = Wallet()

logger = get_logger("extensions.vault")


def format_transfer_error(error_dict: Dict) -> str:
    """
    Format ICRC transfer error into a user-friendly message.

    Args:
        error_dict: Error dictionary from ICRC transfer result

    Returns:
        Formatted error message string
    """
    if "InsufficientFunds" in error_dict:
        balance = error_dict["InsufficientFunds"].get("balance", 0)
        return f"Insufficient funds: vault balance is {balance} satoshis. A minimum of 10 satoshis is required for transaction fees."
    elif "BadFee" in error_dict:
        expected_fee = error_dict["BadFee"].get("expected_fee", "unknown")
        return f"Incorrect fee provided. Expected fee: {expected_fee} satoshis"
    elif "BadBurn" in error_dict:
        min_burn = error_dict["BadBurn"].get("min_burn_amount", "unknown")
        return f"Burn amount too low. Minimum burn amount: {min_burn} satoshis"
    elif "TooOld" in error_dict:
        return "Transaction is too old to be processed"
    elif "CreatedInFuture" in error_dict:
        return "Transaction timestamp is in the future"
    elif "Duplicate" in error_dict:
        dup_of = error_dict["Duplicate"].get("duplicate_of", "unknown")
        return f"Duplicate transaction (original tx: {dup_of})"
    elif "TemporarilyUnavailable" in error_dict:
        return "Ledger temporarily unavailable. Please try again."
    elif "GenericError" in error_dict:
        msg = error_dict["GenericError"].get("message", "Unknown error")
        return f"Transfer error: {msg}"
    else:
        return f"Transfer failed: {str(error_dict)}"


def register_entities():
    """Register vault entity types with the Database."""

    logger.info("Registering vault entity types...")

    # Import Wallet entity types so they get registered alongside vault entities
    from basilisk.os.entities import Token, WalletBalance, WalletTransfer

    vault_entity_types = [
        vault_entities.ApplicationData,
        vault_entities.TestModeData,
        vault_entities.Canisters,
        vault_entities.Category,
        # vault_entities.VaultTransaction,
        # vault_entities.Balance,
        Token,
        WalletBalance,
        WalletTransfer,
    ]

    for entity_type in vault_entity_types:
        try:
            logger.info(f"Registering vault entity type {entity_type.__name__}")
            Database.get_instance().register_entity_type(entity_type)
        except Exception as e:
            logger.error(
                f"Error registering vault entity type {entity_type.__name__}: {str(e)}\n{traceback.format_exc()}"
            )

    logger.info("✅ Vault entity types registered")


def initialize(args: str):
    logger.info("Initializing vault...")

    # Register tokens via Basilisk Wallet (replaces manual Canisters entity creation)
    for token_name, token_config in CANISTER_PRINCIPALS.items():
        _wallet.register_token(
            name=token_name,
            ledger=token_config["ledger"],
            indexer=token_config["indexer"],
        )

        # Keep legacy Canisters entities in sync for backward compatibility
        ledger_id = f"{token_name} ledger"
        indexer_id = f"{token_name} indexer"

        if not Canisters[ledger_id]:
            Canisters(_id=ledger_id, principal=token_config["ledger"])
        if not Canisters[indexer_id]:
            Canisters(_id=indexer_id, principal=token_config["indexer"])

    if not app_data().max_results:
        logger.info(f"Setting max results to {MAX_RESULTS}")
        app_data().max_results = MAX_RESULTS

    if not app_data().max_iteration_count:
        logger.info(f"Setting max iteration_count to {MAX_ITERATION_COUNT}")
        app_data().max_iteration_count = MAX_ITERATION_COUNT

    logger.info(
        f"Tokens registered: {[t['name'] for t in _wallet.list_tokens()]}"
    )
    logger.info(f"Max results: {app_data().max_results}")
    logger.info(f"Max iteration_count: {app_data().max_iteration_count}")

    logger.info("Vault initialized.")


def set_canister(args: str) -> str:
    """
    Set or update the principal ID for a specific canister in the Canisters entity.

    Args:
        args: JSON string with {"canister_name": "xxx", "principal_id": "yyy"}
              canister_name examples: "ckBTC ledger", "ckBTC indexer"

    Returns:
        JSON string with success status
    """
    logger.info(f"vault.set_canister called with args: {args}")

    try:
        # Parse args
        params = json.loads(args) if isinstance(args, str) else args
        canister_name = params.get("canister_name")
        principal_id = params.get("principal_id")

        if not canister_name or not principal_id:
            return json.dumps(
                {
                    "success": False,
                    "error": "canister_name and principal_id are required",
                }
            )

        logger.info(f"Setting canister '{canister_name}' to principal: {principal_id}")

        # Check if the canister already exists
        existing_canister = Canisters[canister_name]
        if existing_canister:
            # Update the existing canister record
            existing_canister.principal = principal_id
            logger.info(
                f"Updated existing canister '{canister_name}' with new principal."
            )
        else:
            # Create a new canister record
            Canisters(_id=canister_name, principal=principal_id)
            logger.info(f"Created new canister '{canister_name}' with principal.")

        return json.dumps(
            {
                "success": True,
                "data": {"canister_name": canister_name, "principal_id": principal_id},
            }
        )

    except Exception as e:
        logger.error(f"Error setting canister: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def convert_principals_to_strings(obj):
    """Recursively convert Principal objects to strings for JSON serialization"""

    if isinstance(obj, Principal):
        return obj.to_str()
    elif isinstance(obj, dict):
        return {key: convert_principals_to_strings(value) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [convert_principals_to_strings(item) for item in obj]
    else:
        return obj


def get_balance(args: str) -> str:
    """
    Get balance for a principal.

    Args:
        args: JSON string with {"principal_id": "xxx"}

    Returns:
        JSON string with {"success": bool, "data": {"Balance": {...}}}
    """
    logger.info(f"vault.get_balance called with args: {args}")

    try:
        # Parse args
        params = json.loads(args) if isinstance(args, str) else args
        principal_id = params.get("principal_id")

        if not principal_id:
            return json.dumps({"success": False, "error": "principal_id is required"})

        # Get balance from entity
        balance_entity = Balance[principal_id]
        amount = balance_entity.amount if balance_entity else 0

        balance_dict = {
            "principal_id": principal_id,
            "amount": amount,
        }

        logger.info(f"Successfully retrieved balance: {balance_dict}")
        return json.dumps({"success": True, "data": {"Balance": balance_dict}})

    except Exception as e:
        logger.error(f"Error in get_balance: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_status(args: str) -> str:
    """
    Get vault status and statistics.

    Args:
        args: JSON string (can be empty dict)

    Returns:
        JSON string with vault stats
    """
    logger.info("vault.get_status called")

    try:
        # Gather stats
        app = app_data()
        balances = [
            {"principal_id": b._id, "amount": b.amount} for b in Balance.instances()
        ]
        canisters = [
            {"id": c._id, "principal": c.principal} for c in Canisters.instances()
        ]

        status_dict = {
            "app_data": {
                "admin_principal": app.admin_principal or "",
                "max_results": app.max_results or 20,
                "max_iteration_count": app.max_iteration_count or 5,
                "scan_end_tx_id": app.scan_end_tx_id,
                "scan_start_tx_id": app.scan_start_tx_id,
                "scan_oldest_tx_id": app.scan_oldest_tx_id,
                "sync_status": "Embedded",  # No separate canister sync needed
                "sync_tx_id": 0,
            },
            "balances": balances,
            "canisters": canisters,
        }

        logger.info("Successfully retrieved vault status")
        return json.dumps({"success": True, "data": {"Stats": status_dict}})

    except Exception as e:
        logger.error(f"Error in get_status: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_transactions(args: str) -> str:
    """
    Get transaction history for a principal.

    Args:
        args: JSON string with {"principal_id": "xxx"}

    Returns:
        JSON string with transaction list
    """
    logger.info(f"vault.get_transactions called with args: {args}")

    try:
        # Parse args
        params = json.loads(args) if isinstance(args, str) else args
        principal_id = params.get("principal_id")

        if not principal_id:
            return json.dumps({"success": False, "error": "principal_id is required"})

        # Get transactions involving this principal
        all_txs = Transfer.instances()
        relevant_txs = [
            tx
            for tx in all_txs
            if tx.principal_from == principal_id or tx.principal_to == principal_id
        ]

        transactions_list = [
            {
                "id": int(tx._id),
                "amount": tx.amount,
                "timestamp": tx.timestamp,
                "principal_from": tx.principal_from,
                "principal_to": tx.principal_to,
                "kind": tx.kind,
            }
            for tx in relevant_txs
        ]

        logger.info(f"Successfully retrieved {len(transactions_list)} transactions")
        return json.dumps(
            {"success": True, "data": {"Transactions": transactions_list}}
        )

    except Exception as e:
        logger.error(f"Error in get_transactions: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def _transfer(
    to_principal: str,
    amount: int,
    to_subaccount_hex: str = None,
    from_subaccount_hex: str = None,
    token: str = None,
) -> Async[dict]:
    """
    Perform an ICRC-1 transfer from the vault.

    Delegates the inter-canister call to ``basilisk.os.Wallet.transfer()``
    while keeping Realms-specific admin checks and entity updates.

    Args:
        to_principal: Recipient's principal ID
        amount: Amount to transfer in smallest units (e.g., satoshis for ckBTC)
        to_subaccount_hex: Optional 64-char hex string for recipient's subaccount
        from_subaccount_hex: Optional 64-char hex string for vault's source subaccount
        token: Token symbol (e.g., "ckBTC", "REALM"). Defaults to DEFAULT_TOKEN.
    """
    try:
        token = token or DEFAULT_TOKEN
        logger.info(
            f"vault._transfer called with to_principal: {to_principal}, amount: {amount}, "
            f"to_subaccount: {to_subaccount_hex}, from_subaccount: {from_subaccount_hex}, token: {token}"
        )

        if not to_principal or amount is None:
            return {"success": False, "error": "to_principal and amount are required"}

        # Validate token
        if token not in CANISTER_PRINCIPALS:
            return {"success": False, "error": f"Unknown token: {token}. Supported: {list(CANISTER_PRINCIPALS.keys())}"}

        # Check admin
        app = app_data()
        caller = ic.caller().to_str()
        if app.admin_principal and caller != app.admin_principal:
            return {"success": False, "error": "Only admin can transfer"}

        # Convert subaccount hex strings to bytes if provided
        to_subaccount = bytes.fromhex(to_subaccount_hex) if to_subaccount_hex else None
        from_subaccount = bytes.fromhex(from_subaccount_hex) if from_subaccount_hex else None

        # Delegate to Basilisk Wallet
        result = yield _wallet.transfer(
            token_name=token,
            to_principal=to_principal,
            amount=amount,
            from_subaccount=from_subaccount,
            to_subaccount=to_subaccount,
        )

        if "ok" in result:
            tx_id = str(result["ok"])

            # Create Realms Transfer entity for accounting
            Transfer(
                id=tx_id,
                principal_from=ic.id().to_str(),
                principal_to=to_principal,
                amount=amount,
                timestamp=str(ic.time()),
            )

            # Update Realms Balance entity
            balance = Balance[to_principal] or Balance(id=to_principal, amount=0)
            balance.amount -= amount

            logger.info(
                f"Successfully transferred {amount} to {to_principal}, tx_id: {tx_id}"
            )
            return {
                "success": True,
                "data": {"TransactionId": {"transaction_id": int(tx_id)}},
            }
        elif "err" in result:
            error = result["err"]
            logger.error(f"Transfer failed: {error}")
            user_friendly_error = format_transfer_error(error)
            return {"success": False, "error": user_friendly_error}
        else:
            logger.error(f"Unexpected transfer result: {result}")
            return {"success": False, "error": f"Unexpected result: {result}"}

    except Exception as e:
        logger.error(f"Error in transfer: {str(e)}\n{traceback.format_exc()}")
        return {"success": False, "error": str(e), "traceback": traceback.format_exc()}


def transfer(args: str) -> Async[str]:
    """
    Transfer tokens to a principal (admin only).

    Args:
        args: JSON string with:
            - to_principal: str - Recipient's principal ID (required)
            - amount: int - Amount in smallest units (required)
            - to_subaccount: str - Optional 64-char hex subaccount for recipient
            - from_subaccount: str - Optional 64-char hex subaccount to send from
            - token: str - Token symbol (e.g., "ckBTC", "REALM"). Defaults to DEFAULT_TOKEN.

    Returns:
        JSON string with transaction ID
    """
    logger.info(f"vault.transfer called with args: {args}")

    try:
        # Parse args
        params = json.loads(args) if isinstance(args, str) else args
        to_principal = params.get("to_principal")
        amount = params.get("amount")
        to_subaccount_hex = params.get("to_subaccount")
        from_subaccount_hex = params.get("from_subaccount")
        token = params.get("token")

        result = yield _transfer(
            to_principal,
            amount,
            to_subaccount_hex=to_subaccount_hex,
            from_subaccount_hex=from_subaccount_hex,
            token=token,
        )
        return json.dumps(result)

    except Exception as e:
        logger.error(f"Error in transfer: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def _refresh_subaccount(
    indexer_principal: str,
    vault_principal: str,
    max_results: int,
    subaccount_bytes: bytes = None,
    subaccount_hex: str = None,
) -> Async[dict]:
    """
    Refresh transactions for a specific subaccount.

    Args:
        indexer_principal: Principal of the indexer canister
        vault_principal: Principal of the vault canister
        max_results: Maximum number of transactions to fetch
        subaccount_bytes: Subaccount as list of bytes (for indexer query)
        subaccount_hex: Subaccount as hex string (for logging/storage)

    Returns:
        Dict with new_tx_count and any errors
    """
    from ggg import Invoice

    try:
        response = yield get_account_transactions(
            canister_id=indexer_principal,
            owner_principal=vault_principal,
            max_results=max_results,
            subaccount=subaccount_bytes,
            start_tx_id=None,
        )

        # Handle both attribute and dict-style access for kybra Records
        if hasattr(response, "transactions"):
            transactions = response.transactions
        elif isinstance(response, dict) and "transactions" in response:
            transactions = response["transactions"]
        else:
            transactions = []
        logger.info(
            f"Retrieved {len(transactions)} transactions for subaccount {subaccount_hex or 'default'}"
        )

        sorted_transactions = sorted(transactions, key=lambda tx: tx["id"])
        new_tx_count = 0

        for account_tx in sorted_transactions:
            tx_id = str(account_tx["id"])
            tx = account_tx["transaction"]
            logger.info(f"Processing tx_id={tx_id}, kind={tx.get('kind')}")

            # Skip if already exists (lookup by 'id' field, not '_id')
            if Transfer["id", tx_id]:
                logger.info(f"Skipping tx_id={tx_id} - already exists")
                continue

            # Handle transfer transactions
            if "transfer" in tx and tx["transfer"]:
                transfer_data = tx["transfer"]
                principal_from = transfer_data["from_"]["owner"].to_str()
                principal_to = transfer_data["to"]["owner"].to_str()
                amount = transfer_data["amount"]
                to_subaccount = transfer_data["to"].get("subaccount")
            # Handle mint transactions (used by local test ledgers)
            elif "mint" in tx and tx["mint"]:
                mint_data = tx["mint"]
                principal_from = "minter"  # Mints don't have a from
                principal_to = mint_data["to"]["owner"].to_str()
                amount = mint_data["amount"]
                to_subaccount = mint_data["to"].get("subaccount")
            else:
                # Skip other transaction types (burn, approve)
                continue

            tx_subaccount_hex = None
            matched_invoice = None

            if to_subaccount:
                subaccount_bytes_tx = bytes(to_subaccount)
                tx_subaccount_hex = subaccount_bytes_tx.hex()

                # Check if this deposit matches a pending invoice
                if principal_to == vault_principal:
                    invoice = Invoice.from_subaccount(subaccount_bytes_tx)

                    if invoice and invoice.status == "Pending":
                        amount_required = int(invoice.amount * 100_000_000)

                        if amount >= amount_required:
                            invoice.status = "Paid"
                            invoice.paid_at = str(ic.time())
                            matched_invoice = invoice
                            logger.info(
                                f"Invoice {invoice.id} marked as Paid via tx {tx_id} "
                                f"(received: {amount}, required: {amount_required})"
                            )

            # Create transaction record
            transfer = Transfer(
                id=tx_id,
                principal_from=principal_from,
                principal_to=principal_to,
                subaccount=tx_subaccount_hex,
                amount=amount,
                timestamp=str(tx["timestamp"]),
            )
            if matched_invoice:
                transfer.invoice = matched_invoice
            logger.info(
                f"Created transfer record for tx {tx_id}: {transfer.serialize()}"
            )

            # Update balances
            if principal_to == vault_principal:
                balance = Balance[principal_from] or Balance(
                    id=principal_from, amount=0
                )
                balance.amount += amount
            elif principal_from == vault_principal:
                balance = Balance[principal_to] or Balance(id=principal_to, amount=0)
                balance.amount -= amount

            new_tx_count += 1

        return {
            "new_tx_count": new_tx_count,
            "oldest_tx_id": response.get("oldest_tx_id"),
            "highest_tx_id": (
                max((int(tx["id"]) for tx in sorted_transactions), default=0)
                if sorted_transactions
                else 0
            ),
        }

    except Exception as e:
        logger.error(
            f"Error refreshing subaccount {subaccount_hex or 'default'}: {str(e)}"
        )
        return {"new_tx_count": 0, "error": str(e)}


def _refresh(force: bool = False, subaccount_hex: str = None, token: str = None) -> Async[dict]:
    """
    Sync transaction history from ICRC ledger.

    Args:
        force: Skip cooldown check
        subaccount_hex: Optional specific subaccount to refresh (64-char hex string).
                       If None, refreshes default subaccount + all known subaccounts.
        token: Token symbol (e.g., "ckBTC", "REALM"). Defaults to DEFAULT_TOKEN.

    Returns:
        Dict with sync summary
    """
    token = token or DEFAULT_TOKEN
    logger.info(f"vault.refresh called (force={force}, subaccount={subaccount_hex}, token={token})")

    try:
        app = app_data()

        if not force:
            current_time = ic.time()
            last_refresh_time = getattr(app, "last_refresh_time", None)

            if (
                last_refresh_time
                and (current_time - last_refresh_time)
                < REFRESH_COOLDOWN * 1_000_000_000
            ):
                time_since_refresh = (current_time - last_refresh_time) // 1_000_000_000
                logger.info(
                    f"Refresh skipped: last refresh was {time_since_refresh}s ago (cooldown: {REFRESH_COOLDOWN}s)"
                )
                return {
                    "success": True,
                    "data": {
                        "TransactionSummary": {
                            "new_txs_count": 0,
                            "sync_status": "Skipped (cooldown)",
                            "time_since_last_refresh_seconds": time_since_refresh,
                            "cooldown_seconds": REFRESH_COOLDOWN,
                        }
                    },
                    "cached": True,
                }

        # Validate token
        if token not in CANISTER_PRINCIPALS:
            return {"success": False, "error": f"Unknown token: {token}. Supported: {list(CANISTER_PRINCIPALS.keys())}"}

        indexer_id = f"{token} indexer"
        indexer_canister = Canisters[indexer_id]

        if not indexer_canister:
            return {"success": False, "error": f"{token} indexer not configured"}

        logger.info(f"Using indexer canister: {indexer_canister.principal}")

        vault_principal = ic.id().to_str()
        max_results = app.max_results or 20
        total_new_tx_count = 0
        subaccounts_refreshed = []

        # Build list of subaccounts to refresh
        if subaccount_hex:
            # Refresh only the specified subaccount
            subaccount_bytes = bytes.fromhex(subaccount_hex)
            subaccounts_to_refresh = [(subaccount_hex, subaccount_bytes)]
        else:
            # Refresh default subaccount + all known subaccounts
            subaccounts_to_refresh = [(None, None)]  # Default subaccount
            for known_sa in KnownSubaccount.instances():
                sa_hex = known_sa.subaccount_hex
                sa_bytes = bytes.fromhex(sa_hex)
                subaccounts_to_refresh.append((sa_hex, sa_bytes))

        # Refresh each subaccount
        for sa_hex, sa_bytes in subaccounts_to_refresh:
            result = yield _refresh_subaccount(
                indexer_principal=indexer_canister.principal,
                vault_principal=vault_principal,
                max_results=max_results,
                subaccount_bytes=sa_bytes,
                subaccount_hex=sa_hex,
            )

            total_new_tx_count += result.get("new_tx_count", 0)
            subaccounts_refreshed.append(sa_hex or "default")

            # Update KnownSubaccount scan position if applicable
            if sa_hex and result.get("highest_tx_id", 0) > 0:
                known_sa = KnownSubaccount[sa_hex]
                if known_sa:
                    highest = result["highest_tx_id"]
                    if highest > (known_sa.scan_end_tx_id or 0):
                        known_sa.scan_end_tx_id = highest

        # Update default subaccount tracking in app_data
        if not subaccount_hex:  # Only update app-level tracking for full refresh
            app.last_refresh_time = ic.time()

        logger.info(
            f"Successfully synced {total_new_tx_count} new transactions across {len(subaccounts_refreshed)} subaccounts"
        )
        return {
            "success": True,
            "data": {
                "TransactionSummary": {
                    "new_txs_count": total_new_tx_count,
                    "sync_status": "Synced",
                    "subaccounts_refreshed": subaccounts_refreshed,
                    "scan_end_tx_id": app.scan_end_tx_id or 0,
                }
            },
        }

    except Exception as e:
        logger.error(f"Error in refresh: {str(e)}\n{traceback.format_exc()}")
        return {"success": False, "error": str(e), "traceback": traceback.format_exc()}


def refresh(args: str) -> Async[str]:
    """
    Refresh transactions from ICRC ledger.

    Args:
        args: JSON string with optional parameters:
            - force: bool - Skip cooldown check
            - subaccount: str - Optional 64-char hex subaccount to refresh
            - token: str - Token symbol (e.g., "ckBTC", "REALM"). Defaults to DEFAULT_TOKEN.
    """
    try:
        params = json.loads(args) if args else {}
        force = params.get("force", False)
        subaccount_hex = params.get("subaccount")
        token = params.get("token")

        result = yield _refresh(force=force, subaccount_hex=subaccount_hex, token=token)
        return json.dumps(result)
    except Exception as e:
        logger.error(f"Error in refresh: {str(e)}")
        return json.dumps({"success": False, "error": str(e)})


def refresh_invoice(args: str) -> Async[str]:
    """
    Refresh transactions for a specific invoice's subaccount.

    This is called when a user clicks the "Refresh" button next to an invoice
    to check if payment has been received.

    Args:
        args: JSON string with:
            - invoice_id: str - The invoice ID to refresh

    Returns:
        JSON string with refresh result and updated invoice status
    """
    from ggg import Invoice

    try:
        params = json.loads(args) if args else {}
        invoice_id = params.get("invoice_id")

        if not invoice_id:
            return json.dumps({"success": False, "error": "invoice_id is required"})

        # Get the invoice
        invoice = Invoice[invoice_id]
        if not invoice:
            return json.dumps(
                {"success": False, "error": f"Invoice {invoice_id} not found"}
            )

        # Get the subaccount from the invoice using its method
        subaccount_hex = invoice.get_subaccount_hex()

        # Ensure this subaccount is registered as known
        if not KnownSubaccount[subaccount_hex]:
            KnownSubaccount(
                _id=subaccount_hex,
                subaccount_hex=subaccount_hex,
                source="invoice",
                invoice_id=invoice_id,
            )

        # Refresh this specific subaccount via indexer (skip cooldown)
        result = yield _refresh(force=True, subaccount_hex=subaccount_hex)

        # Re-fetch invoice to get updated status
        invoice = Invoice[invoice_id]

        # If still Pending after indexer refresh, directly check balances
        # on both ckBTC and AGO/REALMS ledgers
        if invoice.status == "Pending":
            from .vault_lib.candid_types import ICRCLedger, Account

            vault_principal = ic.id()
            subaccount_bytes = invoice.get_subaccount()
            amount_required = int(invoice.amount * 100_000_000)
            AGO_PER_BTC = 2.0

            for token_name, token_config in CANISTER_PRINCIPALS.items():
                try:
                    ledger = ICRCLedger(Principal.from_str(token_config["ledger"]))
                    balance = yield ledger.icrc1_balance_of(
                        Account(owner=vault_principal, subaccount=list(subaccount_bytes))
                    )
                    if hasattr(balance, "Ok"):
                        balance = balance.Ok

                    # For AGO/REALMS token, adjust the required amount
                    if token_name in ("REALMS", "AGO"):
                        required = int(invoice.amount * AGO_PER_BTC * 100_000_000)
                    else:
                        required = amount_required

                    logger.info(
                        f"Invoice {invoice_id} balance check: {token_name} "
                        f"balance={balance}, required={required}"
                    )

                    if balance >= required:
                        invoice.status = "Paid"
                        invoice.paid_at = str(ic.time())
                        logger.info(
                            f"Invoice {invoice_id} marked as Paid via {token_name} "
                            f"balance ({balance} >= {required})"
                        )
                        break
                except Exception as ledger_err:
                    logger.warning(
                        f"Failed to check {token_name} balance for invoice "
                        f"{invoice_id}: {ledger_err}"
                    )

        return json.dumps(
            {
                "success": True,
                "data": {
                    "refresh_result": result.get("data", {}),
                    "invoice": {
                        "id": invoice.id,
                        "status": invoice.status,
                        "amount": invoice.amount,
                        "paid_at": getattr(invoice, "paid_at", None),
                    },
                },
            }
        )

    except Exception as e:
        logger.error(f"Error in refresh_invoice: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def _get_vault_balance_amount() -> int:
    """Internal helper to get vault balance amount."""
    vault_principal_str = ic.id().to_str()
    balance = Balance[vault_principal_str]
    if not balance:
        return 0
    return balance.amount


def get_vault_balance(args: str) -> str:
    """
    Get the vault's current balance from local storage.
    This reads the cached balance without querying the ledger.
    Use refresh_vault_balance() to update from the ledger.

    Returns:
        JSON string with vault balance information
    """
    try:
        vault_principal_str = ic.id().to_str()
        balance = Balance[vault_principal_str]

        balance_dict = {
            "principal_id": vault_principal_str,
            "amount": balance.amount if balance else 0,
        }
        return json.dumps({"success": True, "data": {"Balance": balance_dict}})
    except Exception as e:
        logger.error(f"Error getting vault balance: {str(e)}")
        return json.dumps({"success": False, "error": str(e)})


def refresh_vault_balance(args: str) -> Async[str]:
    """
    Refresh the vault's balance from the ledger.

    Delegates to ``Wallet.balance_of()`` which queries the ledger and
    updates the cached WalletBalance entity automatically.

    Args:
        args: JSON string with optional parameters:
            - token: str - Token symbol (e.g., "ckBTC", "REALM"). Defaults to DEFAULT_TOKEN.
    """
    try:
        params = json.loads(args) if args else {}
        token = params.get("token") or DEFAULT_TOKEN

        logger.info(f"vault.refresh_vault_balance called for token: {token}")

        # Validate token
        if token not in CANISTER_PRINCIPALS:
            return json.dumps(
                {"success": False, "error": f"Unknown token: {token}. Supported: {list(CANISTER_PRINCIPALS.keys())}"}
            )

        # Delegate to Basilisk Wallet — queries ledger and caches result
        vault_principal_str = ic.id().to_str()
        balance_amount_int = yield _wallet.balance_of(token)

        # Also update Realms Balance entity for backward compatibility
        balance_key = f"{vault_principal_str}:{token}"
        balance = Balance[balance_key]
        if not balance:
            logger.info(f"Creating vault balance record for {token}")
            Balance(_id=balance_key, amount=balance_amount_int)
        else:
            balance.amount = balance_amount_int

        logger.info(f"Vault {token} balance updated: {balance_amount_int}")
        balance_dict = {
            "principal_id": vault_principal_str,
            "token": token,
            "amount": balance_amount_int,
        }
        return json.dumps({"success": True, "data": {"Balance": balance_dict}})

    except Exception as e:
        logger.error(f"Error getting vault balance: {str(e)}\n{traceback.format_exc()}")
        return json.dumps(
            {"success": False, "error": str(e), "traceback": traceback.format_exc()}
        )
