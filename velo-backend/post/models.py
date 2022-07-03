from django.db import models
from accounts.models import Profile


class Post(models.Model):
    poster = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='poster')
    post_text = models.TextField(max_length=200)
    tags = models.CharField(max_length=200)
    date_posted = models.DateTimeField(auto_now_add=True)

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post')
    comment_text = models.CharField(max_length=200)
    date_commented = models.DateTimeField(auto_now_add=True)