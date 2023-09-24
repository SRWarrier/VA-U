from django.urls import path
from .views import *

urlpatterns = [
    path('invoice/clientinvoice/', FilterClientInvoice.as_view(),
         name='clientinvoicefilter'),
]
