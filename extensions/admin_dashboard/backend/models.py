"""
Admin Dashboard Models

This module contains database models specific to the admin dashboard
extension.

Note on the invitation-code secret model
----------------------------------------
Canister state is replicated to every node in the subnet, so anything
written to stable storage is in principle visible to a node operator
with disk access. To make sure a leaked state dump cannot be turned
into an admin takeover, this module **never persists the invitation
code in plaintext**: only its SHA-256 hash is stored. The plaintext
secret is generated in the canister's call-execution memory, returned
**once** in the response of ``RegistrationCode.create``, and then
forgotten.

This is the standard "store the hash, not the password" pattern. The
remaining residual risk is that the plaintext code is briefly visible
in transit during the redemption update call (``join_realm_with_invite``);
that exposure is the same as for every other authenticated update call
on the IC and is mitigated by the single-use guard, the per-principal
binding (``principals_redeemed``) and the short ``expires_at`` TTL.
"""

import hashlib
import secrets
import string
from datetime import datetime, timedelta

from ic_python_db import Entity, TimestampedMixin
from ic_python_db.properties import Integer, String


VALID_PROFILES = ("member", "admin")
DEFAULT_PROFILE = "member"


def hash_code(code: str) -> str:
    """Hex-encoded SHA-256 of the plaintext code.

    Codes are mid-entropy (16 chars from [A-Za-z0-9]) so a plain salt-less
    SHA-256 is sufficient: the search space is ~95 bits, well beyond the
    reach of any offline brute-force even if a node operator captured the
    full state dump.
    """
    return hashlib.sha256(code.encode("utf-8")).hexdigest()


def generate_secret_code() -> str:
    """Generate a fresh 16-char alphanumeric invitation secret."""
    alphabet = string.ascii_letters + string.digits
    return "".join(secrets.choice(alphabet) for _ in range(16))


class RegistrationCode(Entity, TimestampedMixin):
    """
    Invitation/registration code used to onboard a new user into the realm.

    Each code carries the *profile* the joiner will be granted when they
    redeem it (today: ``member`` or ``admin``). A code can be single-use
    (``max_uses=1``, the default) or multi-use (``max_uses>1``); once
    ``uses_count`` reaches ``max_uses`` the code is no longer valid.
    A code can also be revoked explicitly.

    The plaintext secret is **not** persisted: only ``code_hash`` is.
    Callers see the plaintext exactly once, in the response of
    :meth:`create` (used by ``generate_registration_url`` to build the
    join URL handed to the invitee). After that, the only way to refer
    to a particular invitation in the API is via its ``code_hash``.

    Attributes:
        code_hash (str):           Hex SHA-256 of the plaintext invitation
                                   code (indexed alias). The plaintext
                                   itself is **never** persisted.
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

    __alias__ = "code_hash"

    code_hash = String(max_length=64)
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
    ) -> tuple["RegistrationCode", str]:
        """Mint a new invitation code.

        Generates a fresh random secret, persists **only its hash**, and
        returns ``(entity, plaintext_secret)``. The caller is expected
        to use ``plaintext_secret`` exactly once — to build the join
        URL returned in the API response — and then discard it.

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

        plaintext = generate_secret_code()
        digest = hash_code(plaintext)

        expires_timestamp = int(
            (datetime.utcnow() + timedelta(hours=int(expires_in_hours))).timestamp()
        )

        entity = cls(
            code_hash=digest,
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
        return entity, plaintext

    def build_registration_url(self, plaintext_code: str) -> str:
        """Build the join URL for ``plaintext_code``.

        Must be called with the plaintext secret returned by :meth:`create`
        because the entity itself does not retain the plaintext.
        """
        base = (self.frontend_url or "").rstrip("/")
        return f"{base}/join?invite={plaintext_code}"

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

    @classmethod
    def find_by_plaintext(cls, plaintext_code: str) -> "RegistrationCode":
        """Look up the entity by **plaintext** code.

        Hashes the plaintext on the fly and indexes via ``code_hash``.
        Returns ``None`` if no matching entity exists.
        """
        if not plaintext_code:
            return None
        return cls[hash_code(plaintext_code)]

    @classmethod
    def find_by_hash(cls, code_hash: str) -> "RegistrationCode":
        """Look up the entity by its stored hash (e.g. for revocation)."""
        if not code_hash:
            return None
        return cls[code_hash]

    @classmethod
    def find_by_user_id(cls, user_id: str) -> list["RegistrationCode"]:
        return [code for code in cls.instances() if code.user_id == user_id]
