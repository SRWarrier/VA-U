from django.urls import path
from .views import ViewClients, AddClients, DeleteClient, UpdateClient, FilterClients

urlpatterns = [
    path('clients/filterclient/',
         FilterClients.as_view(), name='filterClient'),
    path('clients/clientslist/', ViewClients.as_view(), name='viewClients'),
    path('clients/addclient/', AddClients.as_view(), name='addClients'),
    path('clients/deleteclient/', DeleteClient.as_view(), name='deleteClient'),
    path('clients/updateclient/', UpdateClient.as_view(), name='updateClient'),
]
