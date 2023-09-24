from django.db import models
from classification.models import trip_status
from service.models import service_class


class trip_type(models.Model):
    '''
    Service type means adhoc regular replacement etc.
    '''
    name = models.CharField(verbose_name="Service Type", max_length=32)
    service_class = models.ForeignKey(
        service_class, verbose_name="Service Class", on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "trip_type"


class trips(models.Model):
    '''
    Trips model to record trips
    '''
    trip_type = models.ForeignKey(
        trip_type, verbose_name="Trip Type", on_delete=models.PROTECT)
    trip_reporting_time = models.DateTimeField(
        verbose_name="Reporting Time", null=False)
    trip_start_time = models.DateTimeField(
        verbose_name="Trip Start Time", blank=True)
    trip_end_time = models.DateTimeField(
        verbose_name="Trip End Time", blank=True)
    trip_start_km = models.FloatField(verbose_name="Start KM")
    trip_end_km = models.FloatField(verbose_name="End KM")
    trip_status = models.ForeignKey(
        trip_status, verbose_name="Trip Status", on_delete=models.CASCADE)
    replacement_trip_id = models.IntegerField(
        verbose_name='Replacement Trip ID', null=True)

    class Meta:
        db_table = 'trip'


class adhoc_trip_rates(models.Model):
    trip_id = models.ForeignKey(
        trips, verbose_name="Trip ID", on_delete=models.CASCADE)
    trip_client_rate = models.FloatField(verbose_name="Trip Client Rate")
    trip_Vendor_rate = models.FloatField(verbose_name="Trip Vendor Rate")
