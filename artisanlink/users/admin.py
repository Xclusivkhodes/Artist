from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import User

class UserAdmin(BaseUserAdmin):
    # Define the fields to display in the admin list view
    list_display = ('username', 'email', 'role', 'phone_number', 'is_active', 'is_staff')
    list_filter = ('role', 'is_active', 'is_staff')

    # Add phone_number to the fieldsets for detail view
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'email', 'phone_number')}),
        (_('Profile'), {'fields': ('role', 'profile_picture')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )

    # Add phone_number to the add user form in the admin
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'phone_number', 'password1', 'password2', 'role'),
        }),
    )

    search_fields = ('username', 'email', 'phone_number')
    ordering = ('username',)

# Register the custom UserAdmin
admin.site.register(User, UserAdmin)
