from django.urls import path
from .views import GetLocationData, GetLocationfromLatLon


urlpatterns = [
    path('services/getlocation/',
         GetLocationData.as_view(), name='getLocation'),
    path('services/getcurrentlocation/',
         GetLocationfromLatLon.as_view(), name='getCurrentLocation'),
]
