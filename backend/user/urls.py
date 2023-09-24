from django.urls import path
from .views import login_view, FilterUser, ViewUser, AddUser, DeleteUser, UpdateUser

urlpatterns = [
    path('login/', login_view, name='login'),
    path('user/filteruser/',
         FilterUser.as_view(), name='filteruser'),
    path('user/userslist/', ViewUser.as_view(), name='viewusers'),
    path('user/adduser/', AddUser.as_view(), name='addusers'),
    path('user/deleteuser/', DeleteUser.as_view(), name='deleteuser'),
    path('user/updateuser/', UpdateUser.as_view(), name='updateuser'),
]
