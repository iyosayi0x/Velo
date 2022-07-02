from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.contrib.auth import get_user_model


User = get_user_model()

class UserCreationForm(forms.ModelForm):
    password1 = forms.CharField(label='password' , widget=forms.PasswordInput)
    password2 = forms.CharField(label='re_password' , widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('email' , 'first_name', 'last_name', 'middle_name', 'email_verified' ,)

    def clean_password2(self):
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Password do not match")
        return password2

    def save(self , commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        if commit:
            user.save()
        return user

class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()
    class Meta:
        model = User
        fields = ('email' , 'first_name', 'last_name', 'middle_name', 'password' , 'email_verified' , 'superuser' , 'admin' , 'staff' , 'is_active')