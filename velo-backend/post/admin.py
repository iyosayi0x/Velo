from re import A
from django.contrib import admin
from .models import Post, Comment


class PostAdmin(admin.ModelAdmin):
    list_display = ('poster','tags',)

class CommentAdmin(admin.ModelAdmin):
    list_display = ('post', 'comment_text',)

admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)
