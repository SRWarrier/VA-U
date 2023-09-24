from project.models import project
from hub.models import city, hub
from rest_framework import serializers


class ProjectSerializer(serializers.ModelSerializer):
    client = serializers.StringRelatedField()
    city = serializers.StringRelatedField()
    status = serializers.StringRelatedField()
    hub = serializers.SerializerMethodField()

    def get_hub(self, obj):
        try:
            city_instance = city.objects.get(name=obj.city)
            return city_instance.hub.name if city_instance.hub else None
        except city.DoesNotExist:
            return None

    class Meta:
        model = project
        fields = "__all__"
