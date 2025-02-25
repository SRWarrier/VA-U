# Generated by Django 4.2.1 on 2023-05-25 02:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('classification', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='vehicle_class',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32, verbose_name='Vehicle Class')),
                ('mode', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='classification.mode_of_transport', verbose_name='Mode of Transport')),
            ],
            options={
                'db_table': 'vehicle_class',
            },
        ),
        migrations.CreateModel(
            name='vehicle_manufacturers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64, verbose_name='Name')),
            ],
            options={
                'db_table': 'vehicle_manufacturers',
            },
        ),
        migrations.CreateModel(
            name='vehicle_type',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64, verbose_name='Vehicle Name')),
                ('capacity', models.FloatField(verbose_name='Vehicle Capacity (in Tonne)')),
                ('manufacturer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vehicle.vehicle_manufacturers', verbose_name='Manufacturer')),
                ('type', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='vehicle.vehicle_class', verbose_name='Vehicle Type')),
            ],
            options={
                'db_table': 'vehicle_type',
            },
        ),
    ]
