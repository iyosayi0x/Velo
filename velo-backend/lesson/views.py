from .serializers import LessonListSerializer, LessonDetailSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Lesson

class LessonListView(APIView):
    def get(self, request):
        queryset = Lesson.objects.all()
        serializer = LessonListSerializer(queryset, many=True)
        return Response(serializer.data , status=status.HTTP_200_OK)


class LessonDetailView(APIView):
    def get(self,request, slug):
        try:
            lesson = Lesson.objects.get(slug=slug)
            serializer = LessonDetailSerializer(lesson)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Lesson.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

