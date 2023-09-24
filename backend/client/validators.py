from django.core.validators import RegexValidator

# Validators
pan_validator = RegexValidator("[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}")
