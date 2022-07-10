from django.urls import path
from .views import CreatePostView , RetrieveFeedView, RetrievePosts, CommentView

urlpatterns = [
    path('create/', CreatePostView.as_view(), name='create_post_view'),
    path('feed/', RetrieveFeedView.as_view(), name='create_post_view'),
    path('comment/', CommentView.as_view(), name='create_post_view'),
    path('', RetrievePosts.as_view(), name='create_post_view'),
]