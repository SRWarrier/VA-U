from django.urls import path
from .views import ViewProject, AddProject, DeleteProject, UpdateProject

urlpatterns = [
    path('projects/projectlist/', ViewProject.as_view(), name='viewproject'),
    path('projects/addproject/', AddProject.as_view(), name='addprojects'),
    path('projects/deleletproject/', DeleteProject.as_view(), name='deleteproject'),
    path('projects/updateproject/', UpdateProject.as_view(), name='updateproject'),
]
