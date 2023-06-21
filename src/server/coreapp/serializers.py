from rest_framework import serializers
from .models import EntityUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntityUser
        fields = ['id', 'email', 'first_name', 'last_name', 'password', 'auth_provider', 'default_lang', 'is_active', 'is_email_confirmed', 'date_joined', 'changed_at', ]