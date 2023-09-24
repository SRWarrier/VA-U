from django.shortcuts import render
from rest_framework.decorators import api_view

from .serializer import ClientSerializer
from client.models import client


@api_view(['GET'])
def activeClients(request):
    queryset = client.objects.all()
    serializer_class = ClientSerializer

    def get_queryset(self):
        user = 3
        print(user)
        return client.objects.filter(id=user)
