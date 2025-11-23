import json
import traceback
from datetime import datetime, timedelta
from typing import Any, Dict

from ggg import Invoice, PaymentAccount, Service, User
from kybra import Async
from kybra_simple_logging import get_logger
import uuid
import re

# Initialize logger
logger = get_logger("member_dashboard")


def _service_to_dict(service: Service) -> Dict[str, Any]:
    """Convert Service entity to dictionary format"""
    return {
        "id": service.service_id,
        "name": service.name,
        "description": service.description,
        "provider": service.provider,
        "status": service.status,
        "due_date": service.due_date,
        "link": service.link,
    }


def _invoice_to_dict(invoice: Invoice) -> Dict[str, Any]:
    """Convert Invoice entity to dictionary format"""
    return {
        "id": invoice.id,
        "amount": invoice.amount,
        "due_date": invoice.due_date,
        "status": invoice.status,
        "metadata": invoice.metadata,
    }


def get_dashboard_summary(args: str) -> Async[str]:
    try:
        args = "{}"
        logger.info(f"get_dashboard_summary called with args: {args}")
        params = json.loads(args)
        user_id = params.get("user_id", "anonymous")

        # Get data from database
        all_services = Service.instances()
        all_invoices = Invoice.instances()

        # Filter by user if provided
        if user_id and user_id != "anonymous":
            user_services = [s for s in all_services if s.user and s.user.id == user_id]
            user_invoices = [
                i for i in all_invoices if i.user and i.user.id == user_id
            ]
        else:
            user_services = list(all_services)
            user_invoices = list(all_invoices)

        # Calculate summary
        services_approaching = len(
            [s for s in user_services if s.status == "Approaching"]
        )
        invoices_overdue = len([i for i in user_invoices if i.status == "Overdue"])

        summary_data = {
            "user_name": user_id,
            "services_count": len(user_services),
            "services_approaching": services_approaching,
            "tax_records": len(user_invoices),
            "tax_overdue": invoices_overdue,
            "personal_data_items": 0,
            "personal_data_updated": 0,
        }

        response = {"success": True, "data": summary_data}

        logger.info(f"get_dashboard_summary successful for user: {user_id}")
        return json.dumps(response)
    except Exception as e:
        logger.error(
            f"Error in get_dashboard_summary: {str(e)}\n{traceback.format_exc()}"
        )
        return json.dumps({"success": False, "error": str(e)})


def get_public_services(args: str) -> Async[str]:
    """
    Get a list of public services for the member.

    Args:
        args (str): JSON string containing user_id

    Returns:
        str: JSON string with public services data
    """
    try:
        logger.info(f"get_public_services called with args: {args}")
        params = json.loads(args)
        user_id = params.get("user_id", "anonymous")

        # Get services from database
        all_services = Service.instances()

        # Filter by user if user_id provided
        if user_id and user_id != "anonymous":
            services = [s for s in all_services if s.user and s.user.id == user_id]
        else:
            services = list(all_services)

        # Convert to dict format
        services_list = [_service_to_dict(s) for s in services]

        response = {
            "success": True,
            "data": {"services": services_list, "total_count": len(services_list)},
        }

        logger.info(f"get_public_services successful for user: {user_id}")
        return json.dumps(response)
    except Exception as e:
        logger.error(
            f"Error in get_public_services: {str(e)}\n{traceback.format_exc()}"
        )
        return json.dumps({"success": False, "error": str(e)})


def get_tax_information(args: str) -> str:
    """
    Get invoice information for the member (tax/billing data).

    Args:
        args (str): JSON string containing user_id

    Returns:
        str: JSON string with invoice information data
    """
    try:
        logger.info(f"get_tax_information called with args: {args}")
        params = json.loads(args) if args else {}
        user_id = params.get("user_id", "anonymous")

        # Get invoices from database
        all_invoices = Invoice.instances()

        # Filter by user if user_id provided
        if user_id and user_id != "anonymous":
            invoices = [
                i for i in all_invoices if i.user and i.user.id == user_id
            ]
        else:
            invoices = list(all_invoices)

        # Convert to dict format
        invoices_list = [_invoice_to_dict(i) for i in invoices]

        # Calculate summary
        total_paid = sum(
            record["amount"]
            for record in invoices_list
            if record["status"] == "Paid"
        )
        total_pending = sum(
            record["amount"]
            for record in invoices_list
            if record["status"] == "Pending"
        )
        total_overdue = sum(
            record["amount"]
            for record in invoices_list
            if record["status"] == "Overdue"
        )

        summary = {
            "total_paid": total_paid,
            "total_pending": total_pending,
            "total_overdue": total_overdue,
            "total_amount": total_paid + total_pending + total_overdue,
        }

        response = {
            "success": True,
            "data": {"tax_records": invoices_list, "summary": summary},
        }

        logger.info(f"get_tax_information successful for user: {user_id}")
        return json.dumps(response)
    except Exception as e:
        logger.error(
            f"Error in get_tax_information: {str(e)}\n{traceback.format_exc()}"
        )
        return json.dumps({"success": False, "error": str(e)})


def get_personal_data(args: str) -> str:
    """
    Get personal data for the member.

    Args:
        args (str): JSON string containing user_id

    Returns:
        str: JSON string with personal data
    """
    try:
        args = "{}"
        logger.info(f"get_personal_data called with args: {args}")
        params = json.loads(args)
        user_id = params.get("user_id", "anonymous")

        # Get user from database
        user = None
        for u in User.instances():
            if u.id == user_id:
                user = u
                break

        if not user:
            return json.dumps({"success": False, "error": "User not found"})

        personal_data = {
            "name": user.name or "",
            "id_number": user.id or "",
            "date_of_birth": "",
            "citizenship_status": (
                "Full Membership"
                if user.profiles and "member" in user.profiles
                else "Pending"
            ),
            "registration_date": (
                str(user.timestamp_created)
                if hasattr(user, "timestamp_created")
                else ""
            ),
            "address": "",
            "email": user.email or "",
            "phone": "",
        }

        response = {"success": True, "data": {"personal_data": personal_data}}

        logger.info(f"get_personal_data successful for user: {user_id}")
        return json.dumps(response)
    except Exception as e:
        logger.error(f"Error in get_personal_data: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def _validate_address(address: str, network: str) -> tuple[bool, str]:
    """Validate address format based on network"""
    if not address or len(address) == 0:
        return False, "Address cannot be empty"
    
    if network == "ICP":
        # ICP principals: one or more 5-char segments, ending with 3-char checksum
        pattern = r"^([a-z0-9]{5}-)+[a-z0-9]{3}$"
        if not re.match(pattern, address):
            return False, "Invalid ICP principal format"
    elif network == "Bitcoin":
        if not ((address.startswith("1") and 26 <= len(address) <= 35) or
                (address.startswith("3") and 26 <= len(address) <= 35) or
                (address.startswith("bc1") and len(address) >= 42)):
            return False, "Invalid Bitcoin address format"
    elif network == "Ethereum":
        if not re.match(r"^0x[a-fA-F0-9]{40}$", address):
            return False, "Invalid Ethereum address format"
    elif network == "SEPA":
        if not re.match(r"^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$", address.upper()):
            return False, "Invalid IBAN format"
    
    return True, ""


def add_payment_account(args: str) -> str:
    """
    Add a new payment account for a user.
    
    Args:
        args (str): JSON string containing user_id, address, label, network, currency
        
    Returns:
        str: JSON string with success status and account data
    """
    try:
        logger.info(f"add_payment_account called with args: {args}")
        params = json.loads(args)
        user_id = params.get("user_id")
        address = params.get("address")
        label = params.get("label")
        network = params.get("network")
        currency = params.get("currency")
        
        if not all([user_id, address, label, network, currency]):
            return json.dumps({"success": False, "error": "Missing required fields"})
        
        # Get user
        user = User[user_id]
        if not user:
            return json.dumps({"success": False, "error": "User not found"})
        
        # Validate address
        is_valid, error_msg = _validate_address(address, network)
        if not is_valid:
            return json.dumps({"success": False, "error": error_msg})
        
        # Check for duplicates
        existing = [pa for pa in list(user.payment_accounts) if pa.address == address and pa.is_active]
        if existing:
            return json.dumps({"success": False, "error": "Payment account with this address already exists"})
        
        # Create payment account
        account_id = str(uuid.uuid4())
        payment_account = PaymentAccount(
            id=account_id,
            address=address,
            label=label,
            network=network,
            currency=currency,
            user=user,
            is_active=True,
            is_verified=False,
            metadata="{}"
        )
        
        logger.info(f"Created payment account {account_id} for user {user_id}")
        
        return json.dumps({
            "success": True,
            "data": payment_account.serialize()
        })
    except Exception as e:
        logger.error(f"Error in add_payment_account: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def list_payment_accounts(args: str) -> str:
    """
    List payment accounts for a user.
    
    Args:
        args (str): JSON string containing user_id (principal)
        
    Returns:
        str: JSON string with success status and accounts list
    """
    try:
        params = json.loads(args)
        user_id = params.get("user_id")
        
        if not user_id:
            return json.dumps({"success": False, "error": "Missing user_id"})
        
        # Get user
        user = User[user_id]
        if not user:
            return json.dumps({"success": False, "error": "User not found"})
        
        # Get active payment accounts
        accounts = [
            pa.serialize() 
            for pa in list(user.payment_accounts) 
            if pa.is_active
        ]
        
        return json.dumps({
            "success": True,
            "data": accounts
        })
        
    except Exception as e:
        logger.error(f"Error listing payment accounts: {str(e)}")
        return json.dumps({"success": False, "error": str(e)})


def remove_payment_account(args: str) -> str:
    """
    Remove a payment account (soft delete).
    
    Args:
        args (str): JSON string containing user_id and account_id
        
    Returns:
        str: JSON string with success status
    """
    try:
        params = json.loads(args)
        user_id = params.get("user_id")
        account_id = params.get("account_id")
        
        if not all([user_id, account_id]):
            return json.dumps({"success": False, "error": "Missing required fields"})
        
        # Get user
        user = User[user_id]
        if not user:
            return json.dumps({"success": False, "error": "User not found"})
        
        # Find account
        account = PaymentAccount[account_id]
        if not account or account.user != user:
            return json.dumps({"success": False, "error": "Payment account not found"})
        
        # Soft delete
        account.is_active = False
        
        return json.dumps({"success": True})
        
    except Exception as e:
        logger.error(f"Error removing payment account: {str(e)}")
        return json.dumps({"success": False, "error": str(e)})      
