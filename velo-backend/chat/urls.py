from django.urls import path
from .views import RetrieveMessagesView, setSeenView

urlpatterns = [
    path('retrieve-messages/' , RetrieveMessagesView.as_view(), name='retrieve_message'),
    path('set-seen/' , setSeenView.as_view(), name='set_seen'),
]