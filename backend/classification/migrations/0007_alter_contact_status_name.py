# Generated by Django 4.2.1 on 2023-07-02 14:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classification', '0006_contact_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact_status',
            name='name',
            field=models.CharField(verbose_name='Contract Status'),
        ),
    ]
