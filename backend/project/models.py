from django.db import models
from client.models import client
from hub.models import city
from classification.models import active_status
from service.models import service_class
from django.utils import timezone


class project(models.Model):
    name = models.CharField(verbose_name="Project Name",
                            max_length=120, null=False)
    client = models.ForeignKey(
        client, verbose_name="Client", on_delete=models.CASCADE, null=False)
    city = models.ForeignKey(city, verbose_name="City",
                             on_delete=models.CASCADE, null=False)
    gstin = models.CharField(verbose_name="GSTIN", max_length=15)
    service_type = models.ForeignKey(
        service_class, on_delete=models.DO_NOTHING)
    start_date = models.DateField(
        verbose_name="Project Start Date", default=timezone.now)
    end_date = models.DateField(
        verbose_name="Project End Date", blank=True, null=True)
    status = models.ForeignKey(
        active_status, verbose_name="Active Status", default=1, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    created_by = models.CharField(max_length=32)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "project"
