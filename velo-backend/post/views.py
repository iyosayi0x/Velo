from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from .models import Post, Profile
from .serilaizers import PostSerializer
from django.db.models import Q
from .models import Comment
# Create your views here.


class  RetrieveFeedView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def get(self, request):
        user = request.user
        try:
            user_profile = Profile.objects.get(user=user)
            if user_profile.instrests == None or user_profile.intrests.strip() == '':
                queryset= Post.objects.all()
            else :

                interest_list = user_profile.instrests.split()
                lookup = Q()
                for intrest_item in interest_list:
                    lookup |= Q(tags__icontains=intrest_item)

                queryset = Post.objects.filter(lookup)

            serializer = PostSerializer(queryset, many=True)
            return Response(serializer.data , status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class CreatePostView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        data = request.data
        user = request.user
        try:
            profile = Profile.objects.get(user=user)
        except Profile.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        text = data.get('text' , None)
        tags = data.get('tags', None)
        if text is None or tags is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        Post.objects.create(poster= profile , post_text=text, tags=tags)
        return Response(status=status.HTTP_200_OK)

class RetrievePosts(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def get(self,request):
        user = request.user
        try:
            user_profile = Profile.objects.get(user=user)
        except Profile.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        query = Post.objects.filter(poster=user_profile)
        serializer = PostSerializer(Post, many=True)
        return Response(serializer.data , status=status.HTTP_200_OK)


class CommentView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    def post(self, request):
        data = request.data
        comment = data.get('comment' , None)
        post_id = data.get('post_id' , None)
        if comment is None or post_id is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        try:
            post = Post.objects.get(id=post_id)
        except Post.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        Comment.objects.create(post=post, comment_text=comment)
        return Response(status =status.HTTP_200_OK)
