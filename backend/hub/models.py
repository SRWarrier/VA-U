from django.db import models


class hub(models.Model):
    name = models.CharField(verbose_name='Hub Name',
                            max_length=120, null=False, unique=True)
    shortname = models.CharField(verbose_name="Hub Short Name", unique=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "hub"


class city(models.Model):
    name = models.CharField(verbose_name="City Name",
                            max_length=32, unique=True)
    hub = models.ForeignKey(hub, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "city"


class zones(models.Model):
    name = models.CharField(verbose_name="Zone",
                            max_length=32, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "zones"


class state(models.Model):
    name = models.CharField(verbose_name='State',
                            max_length=120, null=False, unique=True)
    statecode = models.IntegerField(
        verbose_name="GST State Code")
    zone = models.ForeignKey(zones, verbose_name="Zone",
                             on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "state"
