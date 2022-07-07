from django.urls import path
from .views import LessonListView, LessonDetailView

urlpatterns = [
    path('', LessonListView.as_view(), name='lesson_list'),
    path('<slug:slug>/', LessonDetailView.as_view(), name='lesson_list'),
]