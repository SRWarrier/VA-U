# Generated by Django 4.2.1 on 2023-05-28 10:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classification', '0003_trip_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='user_role',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32, verbose_name='Role')),
            ],
            options={
                'db_table': 'user_roles',
            },
        ),
    ]
