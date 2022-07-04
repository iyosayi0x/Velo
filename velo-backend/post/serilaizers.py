from .models import Post
from rest_framework import serializers
from accounts.serializers import ProfileSerialzer
class PostSerializer(serializers.ModelSerializer):
    poster = ProfileSerialzer()
    class Meta:
        model = Post
        fields= '__all__'