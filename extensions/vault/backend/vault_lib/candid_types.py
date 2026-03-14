"""
Vault Candid types — re-exports from basilisk.canisters.icrc.

All ICRC-1/ICRC-2 Candid types, service definitions, and error variants
are now provided by ``basilisk.canisters.icrc`` (ic-basilisk >= 0.10.0).
This module re-exports them for backward compatibility.
"""

# Re-export every ICRC type from basilisk so existing imports keep working.
from basilisk.canisters.icrc import (  # noqa: F401
    Account,
    Approve,
    BurnTx as Burn,
    Duplicate,
    GenericError,
    GetAccountTransactionsRequest,
    GetAccountTransactionsResponse,
    GetTransactionsResult,
    ICRCIndexer,
    ICRCLedger,
    InsufficientFunds,
    MintTx as Mint,
    Spender,
    TransferArg,
    TransferError,
    TransferResult,
    TransferTx as Transfer,
    Transaction,
    AccountTransaction,
    BadFee,
    BadBurn,
)
