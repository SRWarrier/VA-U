from django.db import models
from django.core.validators import RegexValidator
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


class gst_status(models.Model):
    name = models.CharField(verbose_name="GST Status", max_length=32)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "gst_status"


class entity_type(models.Model):
    name = models.CharField(verbose_name="Entity Type", max_length=32)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "entity_type"


class active_status(models.Model):
    name = models.CharField(verbose_name="Active Status", max_length=32)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "active_status"


class industry_type(models.Model):
    name = models.CharField(verbose_name="Industry Name",
                            max_length=64, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "industry_type"


class mode_of_transport(models.Model):
    '''
    Mode of Transport such as Road, Air etc.
    '''
    name = models.CharField(verbose_name="Mode of Transport", max_length=32)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "mode_of_transport"


class trip_invoice_status(models.Model):
    '''
    Trip Status for invoicing
    '''
    name = models.CharField(verbose_name="Status", max_length=32)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "trip_invoice_status"


class trip_status(models.Model):
    '''
    Trip Status
    '''
    name = models.CharField(verbose_name="Trip Status", max_length=32)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "trip_status"


class user_role(models.Model):
    '''
    user roles for permission management
    '''
    name = models.CharField(verbose_name="Role", max_length=32)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "user_roles"


class document_status(models.Model):
    '''
    document Status Codes
    '''
    name = models.CharField(verbose_name="Document Status")

    def __str__(self):
        return self.name

    class Meta:
        db_table = "document_status"


class contact_status(models.Model):
    name = models.CharField(verbose_name="Contract Status")

    def __str__(self):
        return self.name

    class Meta:
        db_table = "contract_status"
