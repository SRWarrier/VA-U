from hub.models import hub, city
from rest_framework import serializers


class HUBSerializer(serializers.ModelSerializer):

    class Meta:
        model = hub
        fields = "__all__"


class CitySerializer(serializers.ModelSerializer):
    hub = serializers.SerializerMethodField()
    hubshortcode = serializers.SerializerMethodField()

    def get_hub(self, obj):
        try:
            city_instance = city.objects.get(name=obj.name)
            return city_instance.hub.name if city_instance.hub else None
        except city.DoesNotExist:
            return None

    def get_hubshortcode(self, obj):
        try:
            city_instance = city.objects.get(name=obj.name)
            return city_instance.hub.shortname if city_instance.hub else None
        except city.DoesNotExist:
            return None

    class Meta:
        model = city
        fields = '__all__'
