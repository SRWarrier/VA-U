from client.models import client
from rest_framework import serializers


class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = client
        fields = '__all__'
