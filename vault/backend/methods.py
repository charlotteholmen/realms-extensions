"""Vault Entity Method Implementations.

Provides override implementations for core GGG entity methods:
- Transfer.execute() - Execute external blockchain transfers
- Balance.refresh() - Sync balance with vault state

These methods are registered via the vault extension manifest and
dynamically bound to the core entities at runtime.
"""

import json
from datetime import datetime

from kybra import Async
from kybra_simple_logging import get_logger

logger = get_logger("vault.methods")


def execute_transfer(self) -> Async[dict]:
    logger.info("Executing transfer...")
    return {}


# def execute_transfer(self) -> Async[dict]:
#     """Execute a transfer through the vault extension.

#     This method is dynamically bound to Transfer.execute() via manifest.
#     It handles external blockchain transfers by calling the vault extension.

#     Args:
#         self: The Transfer entity instance

#     Returns:
#         Async[dict]: Result with success status and details
#     """
#     logger.info(f"Executing transfer {self.id}...")

#     try:
#         # Only process external transfers
#         if self.transfer_type != "external":
#             logger.info(f"Transfer {self.id} is internal, skipping vault execution")
#             return {
#                 "success": True,
#                 "type": "internal",
#                 "message": "Internal transfer, no vault action needed"
#             }

#         # Check if already executed
#         if self.status == "completed":
#             logger.info(f"Transfer {self.id} already completed")
#             vault_tx_id = self.get_metadata("vault_tx_id") if hasattr(self, "get_metadata") else None
#             return {
#                 "success": True,
#                 "type": "external",
#                 "message": "Transfer already completed",
#                 "tx_id": vault_tx_id
#             }

#         # Update status to processing
#         self.status = "processing"
#         if hasattr(self, "update_metadata"):
#             self.update_metadata("vault_processing_started", datetime.now().isoformat())

#         # Call vault transfer function
#         from extension_packages.vault.backend import entry as vault_entry

#         vault_args = json.dumps({
#             "to_principal": self.principal_to,
#             "amount": self.amount
#         })

#         logger.info(f"Calling vault.transfer for {self.amount} to {self.principal_to}")

#         # Execute async vault transfer
#         vault_response = yield vault_entry.transfer(vault_args)
#         response_data = json.loads(vault_response)

#         if response_data.get("success"):
#             # Extract transaction ID
#             tx_data = response_data.get("data", {})
#             tx_id = str(tx_data.get("TransactionId", {}).get("transaction_id", ""))

#             # Update transfer status
#             self.status = "completed"
#             if hasattr(self, "update_metadata"):
#                 self.update_metadata("vault_tx_id", tx_id)
#                 self.update_metadata("vault_completed_at", datetime.now().isoformat())

#             logger.info(f"Transfer {self.id} completed successfully, tx_id: {tx_id}")

#             return {
#                 "success": True,
#                 "type": "external",
#                 "tx_id": tx_id,
#                 "message": "External transfer completed"
#             }
#         else:
#             # Transfer failed
#             error_msg = response_data.get("error", "Unknown error")
#             self.status = "failed"
#             if hasattr(self, "update_metadata"):
#                 self.update_metadata("vault_error", error_msg)
#                 self.update_metadata("vault_failed_at", datetime.now().isoformat())

#             logger.error(f"Transfer {self.id} failed: {error_msg}")

#             return {
#                 "success": False,
#                 "type": "external",
#                 "error": error_msg
#             }

#     except Exception as e:
#         logger.error(f"Error executing transfer {self.id}: {str(e)}")
#         self.status = "error"
#         if hasattr(self, "update_metadata"):
#             self.update_metadata("vault_error", str(e))

#         return {
#             "success": False,
#             "error": str(e)
#         }


def refresh_balance(self) -> dict:
    logger.info(f"Refreshing balance...")
    return {}


# def refresh_balance(self) -> dict:
#     """Refresh balance by syncing with vault state.

#     This method is dynamically bound to Balance.refresh() via manifest.
#     It syncs the internal balance with the vault's ckBTC tracking.

#     Args:
#         self: The Balance entity instance

#     Returns:
#         dict: Result with updated balance info
#     """
#     logger.info(f"Refreshing balance {self.id}...")

#     try:
#         from extension_packages.vault.backend.vault_lib.entities import VaultBalance

#         # Extract principal from balance ID (format: principal_instrument)
#         principal = self.id.split("_")[0] if "_" in self.id else self.id

#         # Get vault balance
#         vault_balance = VaultBalance[principal]

#         if vault_balance:
#             old_amount = self.amount
#             self.amount = vault_balance.amount

#             if hasattr(self, "update_metadata"):
#                 self.update_metadata("last_refreshed", datetime.now().isoformat())
#                 self.update_metadata("vault_synced", True)

#             logger.info(f"Balance {self.id} refreshed: {old_amount} -> {vault_balance.amount}")

#             return {
#                 "success": True,
#                 "old_amount": old_amount,
#                 "new_amount": vault_balance.amount,
#                 "synced": True
#             }
#         else:
#             logger.info(f"No vault balance found for {principal}")

#             if hasattr(self, "update_metadata"):
#                 self.update_metadata("last_refreshed", datetime.now().isoformat())
#                 self.update_metadata("vault_synced", False)

#             return {
#                 "success": True,
#                 "amount": self.amount,
#                 "synced": False,
#                 "message": "No vault balance to sync"
#             }

#     except Exception as e:
#         logger.error(f"Error refreshing balance {self.id}: {str(e)}")
#         return {
#             "success": False,
#             "error": str(e)
#         }
