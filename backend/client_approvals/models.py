from django.db import models
from invoice.models import client_invoice


class client_approvals(models.Model):
    '''
    class to link trips to each client invoices
    '''
    trip_id = models.CharField(
        verbose_name="Trip ID", max_length=32, unique=True, null=False)
    invoice_id = models.ForeignKey(
        client_invoice, verbose_name="Client Invoice ID", null=False, on_delete=models.PROTECT)

    def __str__(self):
        return self.trip_id

    class Meta:
        db_table = "client_trips"
