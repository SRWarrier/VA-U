from django.db import models
from classification.models import mode_of_transport


class vehicle_manufacturers(models.Model):
    name = models.CharField(verbose_name="Name", max_length=64)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "vehicle_manufacturers"


class vehicle_class(models.Model):
    '''
    Vehicle class include Truck, bike, auto etc
    '''
    name = models.CharField(verbose_name="Vehicle Class", max_length=32)
    mode = models.ForeignKey(
        mode_of_transport, verbose_name="Mode of Transport", on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "vehicle_class"


class vehicle_type(models.Model):
    name = models.CharField(verbose_name="Vehicle Name", max_length=64)
    manufacturer = models.ForeignKey(
        vehicle_manufacturers, verbose_name="Manufacturer", on_delete=models.CASCADE)
    capacity = models.FloatField(verbose_name="Vehicle Capacity (in Tonne)")
    type = models.ForeignKey(
        vehicle_class, verbose_name="Vehicle Type", on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "vehicle_type"
