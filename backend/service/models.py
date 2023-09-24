from django.db import models


class service_class(models.Model):
    '''
    Service class includes Transportation, Warehouse, Manpower
    '''
    name = models.CharField(verbose_name="Service Class", max_length=32)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "service_class"


class service_models(models.Model):
    '''
    Service Models include Intercity, Intracity Full Warehouse etc'''
    name = models.CharField(verbose_name="Model Name", max_length=32)
    service_class = models.ForeignKey(
        service_class, verbose_name="Service Class", on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "service_models"
