from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from django.db import models
from classification.models import user_role
from django.core.validators import EmailValidator
from hub.models import hub


class user(AbstractUser):
    employee_id = models.CharField(
        primary_key=True, verbose_name="Employee ID")
    first_name = models.CharField(verbose_name="Firstname")
    last_name = models.CharField(verbose_name="Lastname")
    role = models.ForeignKey(
        user_role, verbose_name='User Role', null=True, on_delete=models.SET_NULL)
    user_hub = models.ForeignKey(
        hub, verbose_name='User HUB', null=True, on_delete=models.SET_NULL)
    is_manager = models.BooleanField(verbose_name="Manager", default=False)
    email = models.EmailField(verbose_name="Email ID")
