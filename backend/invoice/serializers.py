from .models import client_invoice, vendor_invoice, project_billing_addresses
from rest_framework import serializers


class ClientInvoiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = client_invoice
        fields = "__all__"


class VendorInvoiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = vendor_invoice
        fields = "__all__"


class ProjectBillingAddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = project_billing_addresses
        fields = "__all__"
