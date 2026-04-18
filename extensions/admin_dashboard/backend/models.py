"""
Admin Dashboard Models

This module contains database models specific to the admin dashboard extension.
"""

import secrets
import string
from datetime import datetime, timedelta

from ic_python_db import Entity, TimestampedMixin
from ic_python_db.properties import Integer, String


VALID_PROFILES = ("member", "admin")
DEFAULT_PROFILE = "member"


class RegistrationCode(Entity, TimestampedMixin):
    """
    Invitation/registration code used to onboard a new user into the realm.

    Each code carries the *profile* the joiner will be granted when they
    redeem it (today: ``member`` or ``admin``). A code can be single-use
    (``max_uses=1``, the default) or multi-use (``max_uses>1``); once
    ``uses_count`` reaches ``max_uses`` the code is no longer valid.
    A code can also be revoked explicitly.

    Attributes:
        code (str):                Random URL-safe code (indexed alias).
        user_id (str):             Optional friendly id of the invitee.
        email (str):               Optional email of the invitee.
        profile (str):             Profile granted on redemption
                                   ("member" | "admin").
        expires_at (int):          Unix-seconds expiry timestamp.
        max_uses (int):            How many distinct redemptions are allowed.
        uses_count (int):          How many redemptions have happened.
        principals_redeemed (str): Comma-separated list of II principals that
                                   already redeemed this code (prevents the
                                   same caller from burning multi-use codes).
        revoked (int):             0 = active, 1 = revoked.
        used (int):                Legacy single-use boolean (kept for
                                   backwards compatibility; mirrors
                                   ``uses_count >= max_uses``).
        used_at (int):             Unix-seconds first redemption (0 if none).
        created_by (str):          Principal of the admin who minted the code.
        frontend_url (str):        Base URL for building the redemption link.
    """

    __alias__ = "code"

    code = String(max_length=64)
    user_id = String(max_length=64)
    email = String(max_length=255)
    profile = String(max_length=32, default=DEFAULT_PROFILE)
    expires_at = Integer()
    max_uses = Integer(default=1)
    uses_count = Integer(default=0)
    principals_redeemed = String(max_length=4096, default="")
    revoked = Integer(default=0)
    used = Integer(default=0)
    used_at = Integer()
    created_by = String(max_length=64)
    frontend_url = String(max_length=512)

    @classmethod
    def create(
        cls,
        user_id: str,
        created_by: str,
        frontend_url: str,
        email: str = None,
        expires_in_hours: int = 24,
        profile: str = DEFAULT_PROFILE,
        max_uses: int = 1,
    ) -> "RegistrationCode":
        """Mint a new invitation code.

        Args:
            user_id: Friendly identifier for the invitee (free-form).
            created_by: Principal of the admin minting the code.
            frontend_url: Base URL of the realm frontend (used to build
                the join URL).
            email: Optional invitee email.
            expires_in_hours: Lifetime of the code in hours.
            profile: Profile to grant on redemption (``"member"`` or
                ``"admin"``). Defaults to ``"member"``.
            max_uses: Maximum number of distinct principals that can
                redeem this code. Defaults to single-use.
        """
        if profile not in VALID_PROFILES:
            raise ValueError(
                f"Invalid profile '{profile}'. Must be one of {VALID_PROFILES}."
            )
        if max_uses is None or int(max_uses) < 1:
            raise ValueError("max_uses must be >= 1")

        alphabet = string.ascii_letters + string.digits
        code = "".join(secrets.choice(alphabet) for _ in range(16))

        expires_timestamp = int(
            (datetime.utcnow() + timedelta(hours=int(expires_in_hours))).timestamp()
        )

        return cls(
            code=code,
            user_id=user_id or "",
            email=email or "",
            profile=profile,
            expires_at=expires_timestamp,
            max_uses=int(max_uses),
            uses_count=0,
            principals_redeemed="",
            revoked=0,
            used=0,
            used_at=0,
            created_by=created_by,
            frontend_url=(frontend_url or "").rstrip("/"),
        )

    @property
    def registration_url(self) -> str:
        """Full URL to redeem this code via the realm's join wizard."""
        base = (self.frontend_url or "").rstrip("/")
        return f"{base}/join?invite={self.code}"

    def is_valid(self) -> bool:
        """True iff the code is active, unredeemed-enough, and not expired."""
        if self.revoked:
            return False
        if int(self.uses_count or 0) >= int(self.max_uses or 1):
            return False
        current_timestamp = int(datetime.utcnow().timestamp())
        return current_timestamp < int(self.expires_at or 0)

    def _principals_list(self) -> list:
        raw = str(self.principals_redeemed or "")
        return [p for p in raw.split(",") if p]

    def has_been_redeemed_by(self, principal: str) -> bool:
        if not principal:
            return False
        return principal in self._principals_list()

    def redeem(self, principal: str) -> None:
        """Mark this code as consumed by ``principal``.

        Caller is expected to have already checked ``is_valid()`` and
        ``not has_been_redeemed_by(principal)``. Increments ``uses_count``,
        appends the principal to ``principals_redeemed``, and updates the
        legacy ``used`` / ``used_at`` fields.
        """
        principals = self._principals_list()
        if principal and principal not in principals:
            principals.append(principal)
        self.principals_redeemed = ",".join(principals)
        self.uses_count = int(self.uses_count or 0) + 1
        if int(self.used_at or 0) == 0:
            self.used_at = int(datetime.utcnow().timestamp())
        if int(self.uses_count) >= int(self.max_uses or 1):
            self.used = 1

    def revoke(self) -> None:
        self.revoked = 1

    def mark_used(self):
        """Legacy helper kept for backwards compatibility.

        Prefer :meth:`redeem` which also tracks the redeeming principal.
        """
        self.used = 1
        self.used_at = int(datetime.utcnow().timestamp())
        self.uses_count = max(int(self.uses_count or 0), 1)

    @classmethod
    def find_by_code(cls, code: str) -> "RegistrationCode":
        return cls[code]

    @classmethod
    def find_by_user_id(cls, user_id: str) -> list["RegistrationCode"]:
        return [code for code in cls.instances() if code.user_id == user_id]
