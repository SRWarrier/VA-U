from django.contrib import admin
from .models import *


class client_invoiceAdmin(admin.ModelAdmin):
    list_display = ("id", "invoice_number")


admin.site.register(client_invoice, client_invoiceAdmin)
admin.site.register(vendor_invoice)
admin.site.register(invoice_request)
admin.site.register(invoice_requests_trips)
admin.site.register(invoice_requests_warehouse)
