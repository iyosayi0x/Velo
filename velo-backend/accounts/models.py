from operator import is_
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import AccountManager
from django.db.models.signals import post_save
from django.dispatch import receiver
from .utils import send_activation_mail


class Account(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField(max_length=255, unique=True)
    email_verified = models.BooleanField(default=False)
    superuser = models.BooleanField(default=False)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
    objects = AccountManager()

    def get_full_name(self):
        return f"{self.first_name} {self.middle_name} {self.last_name}"

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email

    @property
    def is_superuser(self):
        return self.superuser

    @property
    def is_admin(self):
        return self.admin

    @property
    def is_staff(self):
        return self.staff

    @property
    def is_email_verified(self):
        return self.email_verified


@receiver(post_save, sender=Account)
def user_created_handler(sender, instance, created, *args, **kwargs):
    if created:
        send_activation_mail(instance)