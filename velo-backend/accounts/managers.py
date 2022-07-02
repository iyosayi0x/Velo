from django.contrib.auth.models import BaseUserManager

class AccountManager(BaseUserManager):
    def create_user(self , email , first_name, last_name, middle_name , password=None):

        if not email:
            raise ValueError("Email is required")

        if not first_name :
            raise ValueError("First Name is required")

        if not last_name:
            raise ValueError('Last name is required')

        normalized_email = self.normalize_email(email)
        user = self.model(
            first_name=first_name,
            middle_name=middle_name,
            last_name=last_name,
            email=normalized_email
        )
        user.set_password(password)
        user.save()
        return user

    def create_staffuser(self , email , first_name, last_name, middle_name , password=None):
        user = self.create_user(email=email , first_name=first_name, last_name=last_name, middle_name=middle_name , password=password)
        user.staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self , email , first_name, last_name, middle_name , password=None):
        user = self.create_user(email=email , first_name=first_name, last_name=last_name, middle_name=middle_name , password=password)
        user.superuser = True
        user.admin = True
        user.staff = True
        user.save(using=self._db)
        return user