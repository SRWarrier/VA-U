from django.urls import path
from .views import *

urlpatterns = [
    path('hub/hublist/', ViewHUB.as_view(), name='viewHUBS'),
    path('hub/addhub/', AddHUB.as_view(), name='addhub'),
    path('hub/deletehub/', DeleteHUB.as_view(), name='deletehub'),
    path('hub/updatehub/', UpdateHUB.as_view(), name='updatehub'),
    # CityAPI
    path('hub/citylist/', ViewCity.as_view(), name='viewCity'),
    path('hub/addcity/', AddCity.as_view(), name='addcity'),
    path('hub/deletecity/', DeleteCity.as_view(), name='deletecity'),
    path('hub/updatecity/', UpdateCity.as_view(), name='updatecity'),
]
