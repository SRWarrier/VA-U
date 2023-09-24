from django.db import models
from client.models import client
from vendor.models import vendor
from project.models import project
from classification.models import contact_status
from service.models import service_class
from vehicle.models import vehicle_type


class ClientContractID(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 8
        kwargs['editable'] = False
        super().__init__(*args, **kwargs)

    def pre_save(self, model_instance, add):
        if add and not getattr(model_instance, self.attname):
            # Get the last created instance to determine the next value
            last_instance = model_instance.__class__.objects.last()
            if last_instance:
                last_value = getattr(last_instance, self.attname)
                prefix = last_value[:4]
                sequence_number = int(last_value[4:]) + 1
            else:
                prefix = 'CLIC'
                sequence_number = 1

            new_value = f"{prefix}{sequence_number:04}"
            setattr(model_instance, self.attname, new_value)

        return super().pre_save(model_instance, add)


class client_contract(models.Model):
    contract_id = ClientContractID()
    project = models.ForeignKey(
        project, verbose_name="Project", on_delete=models.CASCADE)
    start_date = models.DateField(verbose_name="Start Date")
    end_date = models.DateField(verbose_name="End Date")
    status = models.ForeignKey(contact_status, verbose_name="Status")

    def __str__(self):
        return self.contract_id

    class Meta:
        db_table = "client_contract"


class vehicle_client_contract_rate(models.Model):
    contract = models.ForeignKey(
        client_contract, verbose_name="Contract ID", on_delete=models.DO_NOTHING)
    vehicle_type = models.ForeignKey(
        vehicle_type, verbose_name="Vehicle Type", on_delete=models.DO_NOTHING)
    identifier = models.CharField(verbose_name="Identifier", max_length=32)
    fixed_rate = models.FloatField(verbose_name="Fixed Rate")
    fixed_km = models.FloatField(verbose_name="Fixed KM")
    fixed_hour = models.FloatField(verbose_name="Fixed Hour")
    extra_km_rate = models.FloatField(verbose_name="Extra KM Rate")
    extra_hour_rate = models.FloatField(verbose_name="Extrat Hour Rate")
    loading_unloading = models.FloatField(
        verbose_name="Loading Unloading Rate")

    def __str__(self):
        return self.contract + "_" + self.identifier

    class Meta:
        db_table = "vehicle_client_contract_rate"


class client_contract_vehicle_penalty(models.Model):
    contract = models.ForeignKey(
        client_contract, verbose_name="Contract ID", on_delete=models.DO_NOTHING)
    vehicle_type = models.ForeignKey(
        vehicle_type, verbose_name="Vehicle Type", on_delete=models.DO_NOTHING)
    penalty_table = models.JSONField(verbose_name="Penalty Table")

    def __str__(self):
        return self.contract

    class Meta:
        db_table = "vehicle_client_contract_rate"


class vehicle_vendor_contract_rate(models.Model):
    contract = models.ForeignKey(
        client_contract, verbose_name="Contract ID", on_delete=models.DO_NOTHING)
    vehicle_type = models.ForeignKey(
        vehicle_type, verbose_name="Vehicle Type", on_delete=models.DO_NOTHING)
    identifier = models.CharField(verbose_name="Identifier", max_length=32)
    fixed_rate = models.FloatField(verbose_name="Fixed Rate")
    fixed_km = models.FloatField(verbose_name="Fixed KM")
    fixed_hour = models.FloatField(verbose_name="Fixed Hour")
    extra_km_rate = models.FloatField(verbose_name="Extra KM Rate")
    extra_hour_rate = models.FloatField(verbose_name="Extrat Hour Rate")
    general_penalty_applicable = models.BooleanField(
        verbose_name="General Penalty Applicable")
    project_penalty_multiplier = models.FloatField(
        verbose_name="Project Penalty Multiplier")

    def __str__(self):
        return self.contract + "_" + self.identifier

    class Meta:
        db_table = "vehicle_vendor_contract_rate"


class general_penalty(models.Model):
    app_non_usage_penalty = models.FloatField(
        verbose_name="App Non Usage Penalty")
    app_non_usage_tolerance = models.IntegerField(
        verbose_name="App Non Usage Tolerance")
    absence_penalty = models.FloatField(verbose_name="Absence Penalty")
    absence_penalty_tolerance = models.FloatField(
        verbose_name="Absence Penalty Tolerance")
    effective_date = models.DateField(verbose_name="Effective Date")

    def __str__(self):
        return self.id

    class Meta:
        db_table = "general_penalty"
