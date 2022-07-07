from .models import Lesson
from rest_framework import serializers

class LessonListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ('thumbnail' ,'title', 'date_created', 'tags',)

class LessonDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'