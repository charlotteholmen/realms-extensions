"""
Admin Dashboard Models

RegistrationCode has moved to ggg.system.registration_code.
This module re-exports it for backward compatibility.
"""

from ggg.system.registration_code import RegistrationCode

__all__ = ["RegistrationCode"]
