# Generated by Django 4.2.1 on 2023-07-02 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hub', '0003_state'),
    ]

    operations = [
        migrations.AddField(
            model_name='state',
            name='statecode',
            field=models.IntegerField(default=29, max_length=2, verbose_name='GST State Code'),
            preserve_default=False,
        ),
    ]
