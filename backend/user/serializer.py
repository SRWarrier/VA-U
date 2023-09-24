from user.models import user
from rest_framework import serializers
from django.contrib .auth import authenticate
from customValidators.emailValidator import email_domain_validator
from classification.models import user_role
from hub.models import hub


class LoginResponseSerializer(serializers.ModelSerializer):
    userrole = serializers.StringRelatedField(source='role', read_only=True)
    userhub = serializers.StringRelatedField(
        source='user_hub', read_only=True)

    class Meta:
        model = user
        fields = ['employee_id', 'username', 'first_name', 'last_name',
                  'email', 'is_manager', 'userrole', 'userhub']
        read_only_fields = ['is_manager', 'userrole', 'userhub']


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(validators=[email_domain_validator])
    userrole = serializers.StringRelatedField(source='role', read_only=True)
    userhub = serializers.StringRelatedField(
        source='user_hub', read_only=True)
    fullname = serializers.SerializerMethodField()

    class Meta:
        model = user
        fields = ['username', 'email', 'employee_id', 'fullname',
                  'email', 'is_manager', 'role', 'userrole', 'userhub']

    def validate_email(self, value):
        return value

    def get_fullname(self, obj):
        return f"{obj.first_name} {obj.last_name}"
