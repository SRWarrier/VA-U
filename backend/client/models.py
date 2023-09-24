from django.db import models
from .validators import pan_validator
from classification.models import entity_type
from classification.models import industry_type
from classification.models import active_status
from user.models import user


class client(models.Model):
    name = models.CharField(verbose_name="Client Name",
                            max_length=120, null=False)
    shortname = models.CharField(
        verbose_name="Client Short Name", max_length=4)
    registered_office = models.TextField(
        verbose_name="Registered Office Address")
    pan = models.CharField(verbose_name="PAN Number",
                           max_length=10, unique=True, validators=[pan_validator])
    registration_number = models.CharField(
        verbose_name="Registration Number", max_length=30, null=True)
    entity_type = models.ForeignKey(
        entity_type, verbose_name="Entity Type", default=1, on_delete=models.CASCADE)
    industry = models.ForeignKey(
        industry_type, verbose_name="Industry Type", on_delete=models.CASCADE)
    crf_file_id = models.FileField(upload_to='CRF', null=True)
    pan_file_id = models.FileField(upload_to='PAN', null=True)
    status = models.ForeignKey(
        active_status, verbose_name="Active Status", default=1, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        user, verbose_name="Created By", on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "client"
