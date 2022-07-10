from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from .models import TopicProgress, Topic, Lesson
from .serializers import TopicProgressSerializer


class StartTopicView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request,topic_id):
        user = request.user
        try:
            topic = Topic.objects.get(id=topic_id)
        except Topic.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        try:
            first_lesson = Lesson.objects.get(topic=topic, id=1)
        except Lesson.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        TopicProgress.objects.create(topic=topic, user=user, current_lesson=first_lesson)
        return Response(status=status.HTTP_200_OK)


class GetLesson(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def get(self,request, topic_id, lesson_id):
        pass

class GetTopicProgess(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def get(self,request, topic_id):
        user = request.user
        try:
            topic = Topic.objects.get(id=topic_id)
        except Topic.DoesNotExist:
            pass

        try:
            first_lesson = Lesson.objects.get(topic=topic, id=1)
            topic_progess = TopicProgress.objects.get(topic=topic, user=user)
        except TopicProgress.DoesNotExist:
            topic_progess = TopicProgress.objects.create(topic=topic, user=user, current_lesson=first_lesson)

        serializer = TopicProgressSerializer(topic_progess)
        return Response(serializer.data, status=status.HTTP_200_OK)


