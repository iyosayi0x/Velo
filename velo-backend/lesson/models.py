from django.db import models
from django.utils.text import slugify

# Create your models here.


class Lesson(models.Model):
    thumbnail= models.ImageField(upload_to='velo/lessons/thumbnails')
    tags = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField()

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):

        self.slug = slugify(self.title)
        super(Lesson, self).save(*args, **kwargs)