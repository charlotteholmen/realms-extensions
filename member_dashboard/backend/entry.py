import json
import traceback
from datetime import datetime, timedelta
from typing import Any, Dict

from ggg import Invoice, Service, User
from kybra import Async
from kybra_simple_logging import get_logger

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
