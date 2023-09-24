from django.core.exceptions import ValidationError
from django.conf import settings


def email_domain_validator(value):
    allowed_domains = getattr(settings, 'ALLOWED_EMAIL_DOMAINS', [])
    domain = value.split('@')[1] if '@' in value else None

    if domain not in allowed_domains:
        raise ValidationError(f"Email domain '{domain}' is not allowed.")
