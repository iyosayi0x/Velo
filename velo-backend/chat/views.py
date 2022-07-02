from rest_framework.views import APIView
from .models import Message
from .serializers import MessageSerializer
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from .threads import MessageCreationThread,MessageSetSeenThread
from rest_framework.permissions import (
    IsAuthenticated , AllowAny
)

User = get_user_model()

class RetrieveMessagesView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        user = request.user
        if user.is_authenticated:
            data = Message.objects.get_messages(user)
            serializer = MessageSerializer(data, many=True)
            return Response(serializer.data , status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


class setSeenView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self , request):
        user = request.user
        data = request.data
        message_id = data.get('message_id', None)

        if user.is_anonymous:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        if message_id is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        user_messages = Message.objects.get_messages(user)
        try:
            message_inst = user_messages.get(id=message_id)
            MessageSetSeenThread(message_inst).start()
            return Response(status=status.HTTP_200_OK)
        except Message.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)