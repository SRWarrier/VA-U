from django.shortcuts import render
from .models import client_invoice, vendor_invoice, project_billing_addresses
from .serializers import ClientInvoiceSerializer, VendorInvoiceSerializer, ProjectBillingAddressSerializer
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework import filters, generics


class FilterClientInvoice(generics.ListAPIView):
    queryset = client_invoice.objects.all()
    serializer_class = ClientInvoiceSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['project', 'client',
                     "service_month", "invoice_date", "invoice_number"]
    ordering_fields = ['project', 'client',
                       "service_month", "invoice_date", "invoice_number"]

    def get_queryset(self):
        queryset = super().get_queryset()
        for param in self.request.query_params:
            if param in self.search_fields:
                value = self.request.query_params[param]
                queryset = queryset.filter(**{param: value})

        return queryset
