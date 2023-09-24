from django.db import models
from project.models import project
from client.models import client
from classification.models import active_status, document_status
from trips.models import trips


class invoice_request(models.Model):
    request_project = models.ForeignKey(
        project, verbose_name="Request Project", on_delete=models.CASCADE)
    request_date = models.DateField(verbose_name="Request Date")
    request_status = models.ForeignKey(
        document_status, verbose_name="Request Status", on_delete=models.DO_NOTHING)
    request_remarks = models.TextField(verbose_name="Request Remark")

    def __str__(self):
        return str(self.pk)

    class Meta:
        db_table = "invoice_request_projects"


class invoice_requests_trips(models.Model):
    request_id = models.ForeignKey(
        invoice_request, verbose_name="Invoice Request ID", on_delete=models.DO_NOTHING)
    request_trips = models.ForeignKey(
        trips, verbose_name="Trip ID", on_delete=models.DO_NOTHING)
    trip_value = models.FloatField(verbose_name="Trip Value")
    loading_unloading_unit = models.FloatField(
        verbose_name="Loading Unloading Unit")
    loading_unloading_rate = models.FloatField(
        verbose_name="Loading Unloading Rate")
    extra_KM_unit = models.FloatField(verbose_name="Extra KM Unit")
    extra_KM_rate = models.FloatField(verbose_name="Extra KM Rate")
    extra_HR_unit = models.FloatField(verbose_name="Extra Hour Unit")
    extra_HR_rate = models.FloatField(verbose_name="Extra Hour Rate")
    toll_charges = models.FloatField(verbose_name="Toll Charges")

    def __str__(self):
        return self.request_id

    class Meta:
        db_table = "invoice_request_trips"


class invoice_requests_warehouse(models.Model):
    request_id = models.ForeignKey(
        invoice_request, verbose_name="Invoice Request ID", on_delete=models.DO_NOTHING)
    request_trips = models.ForeignKey(
        trips, verbose_name="Trip ID", on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.request_id

    class Meta:
        db_table = "invoice_request_warehouse"


class client_invoice(models.Model):
    invoice_number = models.CharField(verbose_name='Invoice Number',
                                      max_length=16, null=False, unique=True)
    invoice_date = models.DateField(verbose_name="Invoice Date")
    invoice_request_number = models.ForeignKey(
        invoice_request, on_delete=models.DO_NOTHING)
    taxable_value = models.FloatField(
        verbose_name="Taxable Value", blank=False)
    cgst = models.FloatField(verbose_name="CGST", blank=False)
    sgst = models.FloatField(verbose_name="SGST", blank=False)
    igst = models.FloatField(verbose_name="IGST", blank=False)
    invoice_value = models.FloatField(
        verbose_name="Invoice Value", blank=False)

    def __str__(self):
        return self.invoice_number

    class Meta:
        db_table = "client_invoice"


class vendor_invoice(models.Model):
    number = models.CharField(verbose_name='Number',
                              max_length=16, null=False, unique=True)
    taxable_value = models.FloatField(
        verbose_name="Taxable Value", blank=False)
    cgst = models.FloatField(verbose_name="CGST", blank=False)
    sgst = models.FloatField(verbose_name="SGST", blank=False)
    igst = models.FloatField(verbose_name="IGST", blank=False)
    invoice_value = models.FloatField(
        verbose_name="Invoice Value", blank=False)

    def __str__(self):
        return self.number

    class Meta:
        db_table = "vendor_invoice"


class project_billing_addresses(models.Model):

    name = models.CharField(verbose_name='Identifier',
                            max_length=32)
    project = models.ForeignKey(
        project, verbose_name="Project", on_delete=models.CASCADE)
    billing_address = models.TextField(verbose_name="Billing Address")
    shipping_address = models.TextField(verbose_name="Shipping Address")
    active_status = models.ForeignKey(
        active_status, verbose_name="Active Status", on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "project_billing_addresses"
