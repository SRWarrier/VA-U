from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('user.urls')),
    path('api/', include('dashboard.urls')),
    path('api/', include('client.urls')),
    path('api/', include('classification.urls')),
    path('api/', include('project.urls')),
    path('api/', include('hub.urls')),
    path('api/', include('invoice.urls')),
    path('api/', include('service.urls')),
]
