"""
Justice Litigation extension entry point

Redesigned to use the modular GGG Justice System entities:
- JusticeSystem, Court, Judge, Case, Verdict, Penalty, Appeal, License
"""

import json
import traceback
from datetime import datetime
from typing import Any, Dict, List, Optional

from ggg import (
    JusticeSystem,
    JusticeSystemType,
    Court,
    CourtLevel,
    Judge,
    Case,
    CaseStatus,
    Verdict,
    Penalty,
    PenaltyType,
    Appeal,
    AppealStatus,
    License,
    LicenseType,
    User,
    Member,
    case_file,
    case_assign_judges,
    case_issue_verdict,
    penalty_execute,
    penalty_waive,
    appeal_file,
    appeal_decide,
)
from kybra_simple_logging import get_logger

logger = get_logger("extensions.justice_litigation")


# ============================================================================
# Helper Functions - Entity to Dict Converters
# ============================================================================

def _court_to_dict(court: Court) -> Dict[str, Any]:
    """Convert Court entity to dictionary format"""
    return {
        "id": court._id,
        "name": court.name,
        "description": court.description or "",
        "jurisdiction": court.jurisdiction or "",
        "level": court.level or "",
        "status": court.status or "",
        "justice_system_id": court.justice_system._id if court.justice_system else None,
        "justice_system_name": court.justice_system.name if court.justice_system else None,
        "license_valid": court.license.is_valid() if court.license else False,
        "case_count": len(list(court.cases)) if hasattr(court, 'cases') else 0,
        "judge_count": len(list(court.judges)) if hasattr(court, 'judges') else 0,
    }


def _judge_to_dict(judge: Judge) -> Dict[str, Any]:
    """Convert Judge entity to dictionary format"""
    return {
        "id": judge._id,
        "appointment_date": judge.appointment_date or "",
        "status": judge.status or "",
        "specialization": judge.specialization or "",
        "court_id": judge.court._id if judge.court else None,
        "court_name": judge.court.name if judge.court else None,
        "member_id": judge.member._id if judge.member else None,
        "is_active": judge.is_active(),
        "case_count": len(list(judge.cases_assigned)) if hasattr(judge, 'cases_assigned') else 0,
    }


def _case_to_dict(case: Case) -> Dict[str, Any]:
    """Convert Case entity to dictionary format"""
    judges = list(case.judges) if hasattr(case, 'judges') else []
    verdicts = list(case.verdicts) if hasattr(case, 'verdicts') else []
    appeals = list(case.appeals) if hasattr(case, 'appeals') else []
    
    return {
        "id": case._id,
        "case_number": case.case_number or "",
        "title": case.title or "",
        "description": case.description or "",
        "status": case.status or "",
        "filed_date": case.filed_date or "",
        "closed_date": case.closed_date or "",
        "court_id": case.court._id if case.court else None,
        "court_name": case.court.name if case.court else None,
        "plaintiff_id": case.plaintiff._id if case.plaintiff else None,
        "defendant_id": case.defendant._id if case.defendant else None,
        "judges": [{"id": j._id, "specialization": j.specialization} for j in judges],
        "verdict_count": len(verdicts),
        "appeal_count": len(appeals),
        "has_verdict": len(verdicts) > 0,
        "has_appeal": len(appeals) > 0,
    }


def _verdict_to_dict(verdict: Verdict) -> Dict[str, Any]:
    """Convert Verdict entity to dictionary format"""
    penalties = list(verdict.penalties) if hasattr(verdict, 'penalties') else []
    
    return {
        "id": verdict._id,
        "decision": verdict.decision or "",
        "reasoning": verdict.reasoning or "",
        "issued_date": verdict.issued_date or "",
        "case_id": verdict.case._id if verdict.case else None,
        "case_number": verdict.case.case_number if verdict.case else None,
        "issued_by_id": verdict.issued_by._id if verdict.issued_by else None,
        "penalties": [_penalty_to_dict(p) for p in penalties],
        "penalty_count": len(penalties),
    }


def _penalty_to_dict(penalty: Penalty) -> Dict[str, Any]:
    """Convert Penalty entity to dictionary format"""
    return {
        "id": penalty._id,
        "penalty_type": penalty.penalty_type or "",
        "amount": penalty.amount or 0,
        "currency": penalty.currency or "",
        "description": penalty.description or "",
        "status": penalty.status or "",
        "due_date": penalty.due_date or "",
        "executed_date": penalty.executed_date or "",
        "target_user_id": penalty.target_user._id if penalty.target_user else None,
        "verdict_id": penalty.verdict._id if penalty.verdict else None,
    }


def _appeal_to_dict(appeal: Appeal) -> Dict[str, Any]:
    """Convert Appeal entity to dictionary format"""
    return {
        "id": appeal._id,
        "grounds": appeal.grounds or "",
        "status": appeal.status or "",
        "filed_date": appeal.filed_date or "",
        "decision_date": appeal.decision_date or "",
        "decision": appeal.decision or "",
        "original_case_id": appeal.original_case._id if appeal.original_case else None,
        "original_case_number": appeal.original_case.case_number if appeal.original_case else None,
        "original_verdict_id": appeal.original_verdict._id if appeal.original_verdict else None,
        "appellate_court_id": appeal.appellate_court._id if appeal.appellate_court else None,
        "appellate_court_name": appeal.appellate_court.name if appeal.appellate_court else None,
        "appellant_id": appeal.appellant._id if appeal.appellant else None,
    }


def _justice_system_to_dict(js: JusticeSystem) -> Dict[str, Any]:
    """Convert JusticeSystem entity to dictionary format"""
    courts = list(js.courts) if hasattr(js, 'courts') else []
    
    return {
        "id": js._id,
        "name": js.name or "",
        "description": js.description or "",
        "system_type": js.system_type or "",
        "status": js.status or "",
        "court_count": len(courts),
    }


# ============================================================================
# Entry Points - Courts
# ============================================================================

def get_courts(args: str) -> str:
    """Get list of courts with optional filtering"""
    logger.info(f"justice_litigation.get_courts called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        
        justice_system_id = params.get("justice_system_id")
        status = params.get("status")
        level = params.get("level")
        
        courts = list(Court.instances())
        
        # Apply filters
        if justice_system_id:
            courts = [c for c in courts if c.justice_system and c.justice_system._id == justice_system_id]
        if status:
            courts = [c for c in courts if c.status == status]
        if level:
            courts = [c for c in courts if c.level == level]
        
        return json.dumps({
            "success": True,
            "data": {
                "courts": [_court_to_dict(c) for c in courts],
                "total_count": len(courts),
            }
        })
        
    except Exception as e:
        logger.error(f"Error in get_courts: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_justice_systems(args: str) -> str:
    """Get list of justice systems"""
    logger.info(f"justice_litigation.get_justice_systems called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        system_type = params.get("system_type")
        
        systems = list(JusticeSystem.instances())
        
        if system_type:
            systems = [s for s in systems if s.system_type == system_type]
        
        return json.dumps({
            "success": True,
            "data": {
                "justice_systems": [_justice_system_to_dict(s) for s in systems],
                "total_count": len(systems),
            }
        })
        
    except Exception as e:
        logger.error(f"Error in get_justice_systems: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


# ============================================================================
# Entry Points - Judges
# ============================================================================

def get_judges(args: str) -> str:
    """Get list of judges with optional filtering"""
    logger.info(f"justice_litigation.get_judges called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        
        court_id = params.get("court_id")
        status = params.get("status")
        specialization = params.get("specialization")
        
        judges = list(Judge.instances())
        
        # Apply filters
        if court_id:
            judges = [j for j in judges if j.court and j.court._id == court_id]
        if status:
            judges = [j for j in judges if j.status == status]
        if specialization:
            judges = [j for j in judges if j.specialization and specialization.lower() in j.specialization.lower()]
        
        return json.dumps({
            "success": True,
            "data": {
                "judges": [_judge_to_dict(j) for j in judges],
                "total_count": len(judges),
            }
        })
        
    except Exception as e:
        logger.error(f"Error in get_judges: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


# ============================================================================
# Entry Points - Cases
# ============================================================================

def get_cases(args: str) -> str:
    """Get list of cases with optional filtering"""
    logger.info(f"justice_litigation.get_cases called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        
        court_id = params.get("court_id")
        status = params.get("status")
        plaintiff_id = params.get("plaintiff_id")
        defendant_id = params.get("defendant_id")
        user_id = params.get("user_id")  # Cases where user is plaintiff OR defendant
        
        cases = list(Case.instances())
        
        # Apply filters
        if court_id:
            cases = [c for c in cases if c.court and c.court._id == court_id]
        if status:
            cases = [c for c in cases if c.status == status]
        if plaintiff_id:
            cases = [c for c in cases if c.plaintiff and c.plaintiff._id == plaintiff_id]
        if defendant_id:
            cases = [c for c in cases if c.defendant and c.defendant._id == defendant_id]
        if user_id:
            cases = [c for c in cases if 
                     (c.plaintiff and c.plaintiff._id == user_id) or 
                     (c.defendant and c.defendant._id == user_id)]
        
        return json.dumps({
            "success": True,
            "data": {
                "cases": [_case_to_dict(c) for c in cases],
                "total_count": len(cases),
            }
        })
        
    except Exception as e:
        logger.error(f"Error in get_cases: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def get_case(args: str) -> str:
    """Get a single case with full details including verdicts and appeals"""
    logger.info(f"justice_litigation.get_case called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        case_id = params.get("case_id")
        
        if not case_id:
            return json.dumps({"success": False, "error": "case_id is required"})
        
        # Try to find by ID first, then by case_number
        case = None
        try:
            case = Case[case_id]
        except (KeyError, Exception):
            pass
        
        # If not found by ID, search by case_number
        if not case:
            cases = Case.find({"case_number": case_id})
            case = cases[0] if cases else None
        
        if not case:
            return json.dumps({"success": False, "error": f"Case {case_id} not found"})
        
        # Get full details
        case_data = _case_to_dict(case)
        
        # Add verdicts
        verdicts = list(case.verdicts) if hasattr(case, 'verdicts') else []
        case_data["verdicts"] = [_verdict_to_dict(v) for v in verdicts]
        
        # Add appeals
        appeals = list(case.appeals) if hasattr(case, 'appeals') else []
        case_data["appeals"] = [_appeal_to_dict(a) for a in appeals]
        
        return json.dumps({
            "success": True,
            "data": {"case": case_data}
        })
        
    except Exception as e:
        logger.error(f"Error in get_case: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def file_case(args: str) -> str:
    """File a new case"""
    logger.info(f"justice_litigation.file_case called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        
        court_id = params.get("court_id")
        plaintiff_id = params.get("plaintiff_id")
        defendant_id = params.get("defendant_id")
        title = params.get("title")
        description = params.get("description", "")
        
        if not all([court_id, plaintiff_id, defendant_id, title]):
            return json.dumps({
                "success": False,
                "error": "court_id, plaintiff_id, defendant_id, and title are required"
            })
        
        # Find entities
        court = Court.find(court_id)
        if not court:
            return json.dumps({"success": False, "error": f"Court {court_id} not found"})
        
        plaintiff = User.find(plaintiff_id)
        if not plaintiff:
            return json.dumps({"success": False, "error": f"Plaintiff user {plaintiff_id} not found"})
        
        defendant = User.find(defendant_id)
        if not defendant:
            return json.dumps({"success": False, "error": f"Defendant user {defendant_id} not found"})
        
        # File the case using GGG function
        new_case = case_file(
            court=court,
            plaintiff=plaintiff,
            defendant=defendant,
            title=title,
            description=description
        )
        
        return json.dumps({
            "success": True,
            "data": {
                "case": _case_to_dict(new_case),
                "message": f"Case {new_case.case_number} filed successfully"
            }
        })
        
    except ValueError as e:
        logger.warning(f"Validation error in file_case: {str(e)}")
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"Error in file_case: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def assign_judge(args: str) -> str:
    """Assign a judge to a case"""
    logger.info(f"justice_litigation.assign_judge called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        
        case_id = params.get("case_id")
        judge_id = params.get("judge_id")
        
        if not all([case_id, judge_id]):
            return json.dumps({
                "success": False,
                "error": "case_id and judge_id are required"
            })
        
        case = Case.find(case_id)
        if not case:
            return json.dumps({"success": False, "error": f"Case {case_id} not found"})
        
        judge = Judge.find(judge_id)
        if not judge:
            return json.dumps({"success": False, "error": f"Judge {judge_id} not found"})
        
        # Assign judge using GGG function
        updated_case = case_assign_judges(case=case, judges=[judge])
        
        return json.dumps({
            "success": True,
            "data": {
                "case": _case_to_dict(updated_case),
                "message": f"Judge {judge_id} assigned to case {case.case_number}"
            }
        })
        
    except ValueError as e:
        logger.warning(f"Validation error in assign_judge: {str(e)}")
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"Error in assign_judge: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


# ============================================================================
# Entry Points - Verdicts
# ============================================================================

def get_verdicts(args: str) -> str:
    """Get list of verdicts with optional filtering"""
    logger.info(f"justice_litigation.get_verdicts called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        case_id = params.get("case_id")
        
        verdicts = list(Verdict.instances())
        
        if case_id:
            verdicts = [v for v in verdicts if v.case and v.case._id == case_id]
        
        return json.dumps({
            "success": True,
            "data": {
                "verdicts": [_verdict_to_dict(v) for v in verdicts],
                "total_count": len(verdicts),
            }
        })
        
    except Exception as e:
        logger.error(f"Error in get_verdicts: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def issue_verdict(args: str) -> str:
    """Issue a verdict for a case"""
    logger.info(f"justice_litigation.issue_verdict called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        
        case_id = params.get("case_id")
        judge_id = params.get("judge_id")
        decision = params.get("decision")
        reasoning = params.get("reasoning", "")
        penalties = params.get("penalties", [])  # List of {type, amount, currency, description, target_user_id}
        
        if not all([case_id, judge_id, decision]):
            return json.dumps({
                "success": False,
                "error": "case_id, judge_id, and decision are required"
            })
        
        case = Case.find(case_id)
        if not case:
            return json.dumps({"success": False, "error": f"Case {case_id} not found"})
        
        judge = Judge.find(judge_id)
        if not judge:
            return json.dumps({"success": False, "error": f"Judge {judge_id} not found"})
        
        # Build penalty list
        penalty_list = []
        for p in penalties:
            target_user = User.find(p.get("target_user_id")) if p.get("target_user_id") else None
            penalty_list.append({
                "penalty_type": p.get("type", PenaltyType.FINE),
                "amount": p.get("amount", 0),
                "currency": p.get("currency", "ckBTC"),
                "description": p.get("description", ""),
                "target_user": target_user,
            })
        
        # Issue verdict using GGG function
        verdict = case_issue_verdict(
            case=case,
            judge=judge,
            decision=decision,
            reasoning=reasoning,
            penalties=penalty_list
        )
        
        return json.dumps({
            "success": True,
            "data": {
                "verdict": _verdict_to_dict(verdict),
                "message": f"Verdict issued for case {case.case_number}"
            }
        })
        
    except ValueError as e:
        logger.warning(f"Validation error in issue_verdict: {str(e)}")
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"Error in issue_verdict: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


# ============================================================================
# Entry Points - Penalties
# ============================================================================

def get_penalties(args: str) -> str:
    """Get list of penalties with optional filtering"""
    logger.info(f"justice_litigation.get_penalties called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        
        verdict_id = params.get("verdict_id")
        target_user_id = params.get("target_user_id")
        status = params.get("status")
        
        penalties = list(Penalty.instances())
        
        if verdict_id:
            penalties = [p for p in penalties if p.verdict and p.verdict._id == verdict_id]
        if target_user_id:
            penalties = [p for p in penalties if p.target_user and p.target_user._id == target_user_id]
        if status:
            penalties = [p for p in penalties if p.status == status]
        
        return json.dumps({
            "success": True,
            "data": {
                "penalties": [_penalty_to_dict(p) for p in penalties],
                "total_count": len(penalties),
            }
        })
        
    except Exception as e:
        logger.error(f"Error in get_penalties: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def execute_penalty(args: str) -> str:
    """Execute a penalty"""
    logger.info(f"justice_litigation.execute_penalty called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        
        penalty_id = params.get("penalty_id")
        executor_id = params.get("executor_id")
        
        if not penalty_id:
            return json.dumps({"success": False, "error": "penalty_id is required"})
        
        penalty = Penalty.find(penalty_id)
        if not penalty:
            return json.dumps({"success": False, "error": f"Penalty {penalty_id} not found"})
        
        # Execute penalty using GGG function
        updated_penalty = penalty_execute(penalty)
        
        return json.dumps({
            "success": True,
            "data": {
                "penalty": _penalty_to_dict(updated_penalty),
                "message": f"Penalty {penalty_id} executed successfully"
            }
        })
        
    except ValueError as e:
        logger.warning(f"Validation error in execute_penalty: {str(e)}")
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"Error in execute_penalty: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def waive_penalty(args: str) -> str:
    """Waive a penalty"""
    logger.info(f"justice_litigation.waive_penalty called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        
        penalty_id = params.get("penalty_id")
        reason = params.get("reason", "")
        
        if not penalty_id:
            return json.dumps({"success": False, "error": "penalty_id is required"})
        
        penalty = Penalty.find(penalty_id)
        if not penalty:
            return json.dumps({"success": False, "error": f"Penalty {penalty_id} not found"})
        
        # Waive penalty using GGG function
        updated_penalty = penalty_waive(penalty, reason)
        
        return json.dumps({
            "success": True,
            "data": {
                "penalty": _penalty_to_dict(updated_penalty),
                "message": f"Penalty {penalty_id} waived"
            }
        })
        
    except ValueError as e:
        logger.warning(f"Validation error in waive_penalty: {str(e)}")
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"Error in waive_penalty: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


# ============================================================================
# Entry Points - Appeals
# ============================================================================

def get_appeals(args: str) -> str:
    """Get list of appeals with optional filtering"""
    logger.info(f"justice_litigation.get_appeals called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        
        case_id = params.get("case_id")
        appellant_id = params.get("appellant_id")
        status = params.get("status")
        court_id = params.get("court_id")
        
        appeals = list(Appeal.instances())
        
        if case_id:
            appeals = [a for a in appeals if a.original_case and a.original_case._id == case_id]
        if appellant_id:
            appeals = [a for a in appeals if a.appellant and a.appellant._id == appellant_id]
        if status:
            appeals = [a for a in appeals if a.status == status]
        if court_id:
            appeals = [a for a in appeals if a.appellate_court and a.appellate_court._id == court_id]
        
        return json.dumps({
            "success": True,
            "data": {
                "appeals": [_appeal_to_dict(a) for a in appeals],
                "total_count": len(appeals),
            }
        })
        
    except Exception as e:
        logger.error(f"Error in get_appeals: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def file_appeal(args: str) -> str:
    """File an appeal for a case"""
    logger.info(f"justice_litigation.file_appeal called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        
        case_id = params.get("case_id")
        appellant_id = params.get("appellant_id")
        grounds = params.get("grounds")
        appellate_court_id = params.get("appellate_court_id")
        
        if not all([case_id, appellant_id, grounds]):
            return json.dumps({
                "success": False,
                "error": "case_id, appellant_id, and grounds are required"
            })
        
        case = Case.find(case_id)
        if not case:
            return json.dumps({"success": False, "error": f"Case {case_id} not found"})
        
        appellant = User.find(appellant_id)
        if not appellant:
            return json.dumps({"success": False, "error": f"Appellant user {appellant_id} not found"})
        
        appellate_court = Court.find(appellate_court_id) if appellate_court_id else None
        
        # Get the original verdict
        verdicts = list(case.verdicts) if hasattr(case, 'verdicts') else []
        if not verdicts:
            return json.dumps({"success": False, "error": "Cannot appeal a case without a verdict"})
        
        original_verdict = verdicts[-1]  # Most recent verdict
        
        # File appeal using GGG function
        appeal = appeal_file(
            case=case,
            verdict=original_verdict,
            appellant=appellant,
            grounds=grounds,
            appellate_court=appellate_court
        )
        
        return json.dumps({
            "success": True,
            "data": {
                "appeal": _appeal_to_dict(appeal),
                "message": f"Appeal filed for case {case.case_number}"
            }
        })
        
    except ValueError as e:
        logger.warning(f"Validation error in file_appeal: {str(e)}")
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"Error in file_appeal: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def decide_appeal(args: str) -> str:
    """Decide an appeal"""
    logger.info(f"justice_litigation.decide_appeal called with args: {args}")
    
    try:
        params = json.loads(args) if args else {}
        
        appeal_id = params.get("appeal_id")
        decision = params.get("decision")  # "upheld", "overturned", "remanded"
        reasoning = params.get("reasoning", "")
        
        if not all([appeal_id, decision]):
            return json.dumps({
                "success": False,
                "error": "appeal_id and decision are required"
            })
        
        appeal = Appeal.find(appeal_id)
        if not appeal:
            return json.dumps({"success": False, "error": f"Appeal {appeal_id} not found"})
        
        # Decide appeal using GGG function
        updated_appeal = appeal_decide(appeal, decision, reasoning)
        
        return json.dumps({
            "success": True,
            "data": {
                "appeal": _appeal_to_dict(updated_appeal),
                "message": f"Appeal {appeal_id} decided: {decision}"
            }
        })
        
    except ValueError as e:
        logger.warning(f"Validation error in decide_appeal: {str(e)}")
        return json.dumps({"success": False, "error": str(e)})
    except Exception as e:
        logger.error(f"Error in decide_appeal: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


# ============================================================================
# Entry Points - Statistics
# ============================================================================

def get_statistics(args: str) -> str:
    """Get justice system statistics"""
    logger.info(f"justice_litigation.get_statistics called with args: {args}")
    
    try:
        cases = list(Case.instances())
        verdicts = list(Verdict.instances())
        penalties = list(Penalty.instances())
        appeals = list(Appeal.instances())
        courts = list(Court.instances())
        judges = list(Judge.instances())
        
        # Case statistics by status
        case_stats = {}
        for case in cases:
            status = case.status or "unknown"
            case_stats[status] = case_stats.get(status, 0) + 1
        
        # Penalty statistics
        total_penalty_amount = sum(p.amount or 0 for p in penalties)
        pending_penalties = [p for p in penalties if p.status == "pending"]
        executed_penalties = [p for p in penalties if p.status == "executed"]
        
        # Appeal statistics
        appeal_stats = {}
        for appeal in appeals:
            status = appeal.status or "unknown"
            appeal_stats[status] = appeal_stats.get(status, 0) + 1
        
        return json.dumps({
            "success": True,
            "data": {
                "overview": {
                    "total_cases": len(cases),
                    "total_verdicts": len(verdicts),
                    "total_penalties": len(penalties),
                    "total_appeals": len(appeals),
                    "total_courts": len(courts),
                    "total_judges": len(judges),
                },
                "cases_by_status": case_stats,
                "penalties": {
                    "total_amount": total_penalty_amount,
                    "pending_count": len(pending_penalties),
                    "executed_count": len(executed_penalties),
                },
                "appeals_by_status": appeal_stats,
            }
        })
        
    except Exception as e:
        logger.error(f"Error in get_statistics: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


# ============================================================================
# Legacy Support - Deprecated functions for backwards compatibility
# ============================================================================

def get_litigations(args: str) -> str:
    """
    DEPRECATED: Use get_cases() instead.
    
    This function is kept for backwards compatibility with the old frontend.
    It maps Case entities to the old litigation format.
    """
    logger.info(f"justice_litigation.get_litigations called (DEPRECATED - use get_cases)")
    
    try:
        params = json.loads(args) if args else {}
        user_principal = params.get("user_principal")
        user_profile = params.get("user_profile", "member")
        
        # Get cases from new system
        cases = list(Case.instances())
        
        # Filter by user if not admin
        # Note: user_principal is the II principal, need to find matching User
        if user_profile != "admin" and user_principal:
            # Find Identity by principal using Entity.find()
            from ggg import Identity
            identities = Identity.find({"metadata": user_principal})
            matching_user_ids = {
                i.user._id for i in identities 
                if hasattr(i, 'user') and i.user
            }
            
            # Only filter if we found a matching user, otherwise show all (demo mode)
            if matching_user_ids:
                cases = [c for c in cases if 
                         (c.plaintiff and c.plaintiff._id in matching_user_ids) or 
                         (c.defendant and c.defendant._id in matching_user_ids)]
        
        # Map to old format for backwards compatibility
        litigations = []
        for case in cases:
            verdicts = list(case.verdicts) if hasattr(case, 'verdicts') else []
            litigations.append({
                "id": case.case_number or case._id,
                "requester_principal": case.plaintiff._id if case.plaintiff else "unknown",
                "defendant_principal": case.defendant._id if case.defendant else "unknown",
                "case_title": case.title or "",
                "description": case.description or "",
                "status": case.status or "pending",
                "requested_at": case.filed_date or "",
                "verdict": verdicts[0].decision if verdicts else None,
                "actions_taken": [],
            })
        
        return json.dumps({
            "success": True,
            "data": {
                "litigations": litigations,
                "total_count": len(litigations),
                "user_profile": user_profile,
            }
        })
        
    except Exception as e:
        logger.error(f"Error in get_litigations: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def create_litigation(args: str) -> str:
    """
    DEPRECATED: Use file_case() instead.
    
    This function is kept for backwards compatibility with the old frontend.
    """
    logger.info(f"justice_litigation.create_litigation called (DEPRECATED - use file_case)")
    
    try:
        params = json.loads(args) if args else {}
        
        # Map old params to new
        court_id = params.get("court_id")
        plaintiff_id = params.get("requester_principal")
        defendant_id = params.get("defendant_principal")
        title = params.get("case_title")
        description = params.get("description", "")
        
        # If no court specified, try to find the first available court
        if not court_id:
            courts = list(Court.instances())
            if courts:
                court_id = courts[0]._id
            else:
                return json.dumps({
                    "success": False,
                    "error": "No courts available. Please create a court first."
                })
        
        # Call the new file_case
        new_args = json.dumps({
            "court_id": court_id,
            "plaintiff_id": plaintiff_id,
            "defendant_id": defendant_id,
            "title": title,
            "description": description
        })
        
        return file_case(new_args)
        
    except Exception as e:
        logger.error(f"Error in create_litigation: {str(e)}\n{traceback.format_exc()}")
        return json.dumps({"success": False, "error": str(e)})


def execute_verdict(args: str) -> str:
    """
    DEPRECATED: Use issue_verdict() instead.
    """
    logger.info(f"justice_litigation.execute_verdict called (DEPRECATED - use issue_verdict)")
    return json.dumps({
        "success": False,
        "error": "This function is deprecated. Use issue_verdict() instead."
    })


def load_demo_litigations(args: str) -> str:
    """
    DEPRECATED: Demo data is now loaded via realm_generator.py
    """
    logger.info(f"justice_litigation.load_demo_litigations called (DEPRECATED)")
    
    cases_count = len(list(Case.instances()))
    
    return json.dumps({
        "success": True,
        "message": f"Demo data is now loaded via realm_generator.py. Current cases: {cases_count}",
        "data": {
            "total_loaded": cases_count,
            "note": "This function is deprecated."
        }
    })
