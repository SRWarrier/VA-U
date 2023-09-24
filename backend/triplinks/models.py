from django.db import models
from invoice.models import client_invoice
from trips.models import trips
from invoice.models import vendor_invoice
from classification.models import trip_invoice_status


class client_triplink(models.Model):
    '''
    class to link trips to each client invoices
    '''
    trip_id = models.OneToOneField(trips,
                                   verbose_name="Trip ID", max_length=32, on_delete=models.PROTECT)
    invoice_id = models.OneToOneField(
        client_invoice, verbose_name="Client Invoice ID", null=False, on_delete=models.PROTECT)

    def __str__(self):
        return self.trip_id

    class Meta:
        db_table = "client_triplink"


class vendor_triplink(models.Model):
    '''
    Triplink for the Vendor Invoices
    '''
    trip_id = models.OneToOneField(trips,
                                   verbose_name="Trip ID", max_length=32, on_delete=models.PROTECT)
    invoice_id = models.OneToOneField(
        client_invoice, verbose_name="Vendor Invoice ID", null=False, on_delete=models.PROTECT)

    def __str__(self):
        return self.trip_id

    class Meta:
        db_table = "vendor_triplink"
