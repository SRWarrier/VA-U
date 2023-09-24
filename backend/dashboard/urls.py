from django.urls import path
from . import views

urlpatterns = [
    path('getClientDashboardData/',
         views.ClientDashboard.as_view(), name='activeclient')
]
