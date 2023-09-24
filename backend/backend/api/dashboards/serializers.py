from client.models import client
from rest_framework import serializers
from django.contrib .auth import authenticate


class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = client
        fields = ['id', 'status']
        read_only_fields = ['id', 'status']
