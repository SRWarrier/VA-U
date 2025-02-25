# Generated by Django 4.2.1 on 2023-07-02 15:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('trips', '0003_alter_trips_table'),
        ('project', '0002_remove_project_billing_address_and_more'),
        ('classification', '0007_alter_contact_status_name'),
        ('invoice', '0002_project_billing_addresses'),
    ]

    operations = [
        migrations.CreateModel(
            name='invoice_request',
            fields=[
                ('id', models.BigAutoField(auto_created=True,
                 primary_key=True, serialize=False, verbose_name='ID')),
                ('request_date', models.DateField(verbose_name='Request Date')),
                ('request_project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE,
                 to='project.project', verbose_name='Request Project')),
                ('request_status', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING,
                 to='classification.document_status', verbose_name='Request Status')),
            ],
            options={
                'db_table': 'invoice_request_projects',
            },
        ),
        migrations.RemoveField(
            model_name='client_invoice',
            name='number',
        ),
        migrations.AddField(
            model_name='client_invoice',
            name='invoice_date',
            field=models.DateField(default="2023-01-01",
                                   verbose_name='Invoice Date'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='client_invoice',
            name='invoice_number',
            field=models.CharField(
                default=1, max_length=16, unique=True, verbose_name='Invoice Number'),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='invoice_requests_warehouse',
            fields=[
                ('id', models.BigAutoField(auto_created=True,
                 primary_key=True, serialize=False, verbose_name='ID')),
                ('request_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING,
                 to='invoice.invoice_request', verbose_name='Invoice Request ID')),
                ('request_trips', models.ForeignKey(
                    on_delete=django.db.models.deletion.DO_NOTHING, to='trips.trips', verbose_name='Trip ID')),
            ],
            options={
                'db_table': 'invoice_request_warehouse',
            },
        ),
        migrations.CreateModel(
            name='invoice_requests_trips',
            fields=[
                ('id', models.BigAutoField(auto_created=True,
                 primary_key=True, serialize=False, verbose_name='ID')),
                ('request_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING,
                 to='invoice.invoice_request', verbose_name='Invoice Request ID')),
                ('request_trips', models.ForeignKey(
                    on_delete=django.db.models.deletion.DO_NOTHING, to='trips.trips', verbose_name='Trip ID')),
            ],
            options={
                'db_table': 'invoice_request_trips',
            },
        ),
        migrations.AddField(
            model_name='client_invoice',
            name='invoice_request_number',
            field=models.ForeignKey(
                default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='invoice.invoice_request'),
            preserve_default=False,
        ),
    ]
