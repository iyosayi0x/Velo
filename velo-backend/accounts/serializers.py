from rest_framework.serializers import ModelSerializer
from .models import Profile
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerialzer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class ProfileSerialzer(ModelSerializer):
    user = UserSerialzer()
    class Meta:
        model = Profile
        fields = '__all__'