from django.db import models
from classification.models import gst_status
from django.core.validators import RegexValidator
from classification.models import active_status


class vendor(models.Model):
    name = models.CharField(verbose_name="Vendor Name",
                            max_length=120, null=False)
    address = models.TextField(verbose_name="Address")
    phone = models.CharField(verbose_name="Telephone Number", max_length=10)
    email = models.EmailField(verbose_name="Email ID")
    pan = models.CharField(verbose_name="PAN Number", max_length=10)
    gst_registration_status = models.ForeignKey(
        gst_status, verbose_name="GST Status", on_delete=models.PROTECT)
    gstin = models.CharField(verbose_name="GSTIN", max_length=15)
    tds_exemption = models.BooleanField(
        verbose_name="Apply TDS Exemption", default=False)
    bank_name = models.CharField(verbose_name="Bank Name", max_length=32)
    branch_name = models.CharField(verbose_name="Branch Name", max_length=32)
    ifsc = models.CharField(verbose_name="IFSC Code", max_length=11, validators=[
                            RegexValidator('[^\s-]', "Invalid IFSC Code")])
    account_number = models.CharField(
        verbose_name="Account Number", max_length=32)
    status = models.ForeignKey(
        active_status, verbose_name="Active Status", default=1, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=32)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "vendor"


class driver(models.Model):
    name = models.CharField(verbose_name="Vendor Name",
                            max_length=120, null=False)
    licence_number = models.CharField(
        verbose_name="Licence Number", max_length=32)
    is_blacklisted = models.BooleanField(verbose_name="Blacklisted")

    def __str__(self):
        return self.name

    class Meta:
        db_table = "driver"
