# Generated by Django 4.2.1 on 2023-07-02 12:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0001_initial'),
        ('classification', '0004_user_role'),
        ('invoice', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='project_billing_addresses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32, verbose_name='Identifier')),
                ('billing_address', models.TextField(verbose_name='Billing Address')),
                ('shipping_address', models.TextField(verbose_name='Shipping Address')),
                ('active_status', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='classification.active_status', verbose_name='Active Status')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='project.project', verbose_name='Project')),
            ],
            options={
                'db_table': 'project_billing_addresses',
            },
        ),
    ]
