from classification.models import industry_type, entity_type
from rest_framework import serializers


class industryNameSerializer(serializers.ModelSerializer):

    class Meta:
        model = industry_type
        fields = ["id", "name"]


class entityTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = entity_type
        fields = ["id", "name"]
