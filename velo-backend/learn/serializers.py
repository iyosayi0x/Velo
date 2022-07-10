from xml.parsers.expat import model
from rest_framework import serializers
from .models import TopicProgress

class TopicProgressSerializer(serializers.ModelSerializer):

    class Meta:
        model = TopicProgress
        fields = "__all__"