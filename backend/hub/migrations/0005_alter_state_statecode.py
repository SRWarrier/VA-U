# Generated by Django 4.2.1 on 2023-07-02 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hub', '0004_state_statecode'),
    ]

    operations = [
        migrations.AlterField(
            model_name='state',
            name='statecode',
            field=models.IntegerField(verbose_name='GST State Code'),
        ),
    ]
