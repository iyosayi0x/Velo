from django.db import models
from django.contrib.auth import get_user_model
from django.utils.text import slugify

User = get_user_model()

class Topic(models.Model):
    display = models.ImageField(upload_to='velo/learn')
    title = models.CharField(max_length=100)
    slug = models.SlugField()
    date_created = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Topic , self).save(*args, **kwargs)

class Lesson(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='topic')
    title = models.CharField(max_length=200)
    slug = models.SlugField()

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Lesson , self).save(*args, **kwargs)

class Module(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='lesson')
    content = models.TextField()
    module_id = models.PositiveBigIntegerField()
    date_created = models.DateTimeField(auto_now_add=True)

class Quiz(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='lesson')
    quiz_type = models.CharField(max_length=200)
    quiz_id = models.PositiveBigIntegerField()
    date_created = models.DateTimeField(auto_now_add=True)
    last = models.BooleanField(default=True)

class TopicProgress(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='topic')
    user = models.ForeignKey(User, on_delete=models.CASCADE , related_name='user')
    current_lesson = models.PositiveBigIntegerField(Lesson, on_delete=models.CASCADE , related_name='current_lesson')
    current_module_id = models.PositiveBigIntegerField(default=1)
    completion_percentage = models.PositiveBigIntegerField(default=0)
    date_started = models.DateTimeField(auto_now_add=True)