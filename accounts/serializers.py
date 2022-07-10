from rest_framework.serializers import ModelSerializer
from .models import Profile
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'middle_name', 'email_verified', 'id')

class ProfileSerialzer(ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = '__all__'