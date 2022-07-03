from django.urls import path
from .views import EmailVerificationView, PasswordResetView, PasswordResetConfirmView, RetriveProfileView, RetriveUsers
from rest_framework_simplejwt.views import (
    TokenRefreshView
)
from .views import AuthTokenObtainPairView, SignUpView

urlpatterns = [
    path('verify_mail/<str:uidb64>/<str:token>/',
            EmailVerificationView.as_view(), name='verify_mail'),
    path('token/', AuthTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('signup/', SignUpView.as_view(), name='sign_up_view'),
    path('password_reset/', PasswordResetView.as_view(), name='password_reset'),
    path('password_reset_confirm/<str:uidb64>/<str:token>/',
        PasswordResetConfirmView.as_view(), name='password_rest_confirm'),
    path('profile', RetriveProfileView.as_view(), name='retrieve_profile'),
    path('retrieve-users/', RetriveUsers.as_view(), name='retrieve_user')
]