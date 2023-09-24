from django.urls import path
from .views import getIndustryNames, getEntityTypes

urlpatterns = [
    path('classification/industrytypes/',
         getIndustryNames.as_view(), name='Types'),
    path('classification/entitytypes/',
         getEntityTypes.as_view(), name='EntityTypes'),
]
