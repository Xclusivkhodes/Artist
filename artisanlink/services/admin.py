from django.contrib import admin
from .models import Service
from django.utils.translation import gettext_lazy as _

class ServiceAdmin(admin.ModelAdmin):
    # Define fields to display in the service list view
    list_display = ('title', 'artisan_name', 'category', 'price', 'location', 'created_at')
    list_filter = ('category', 'artisan', 'created_at')
    search_fields = ('title', 'description', 'artisan__username', 'category', 'location')
    ordering = ('-created_at',)

    # To limit choices for artisan (only show users with 'artisan' role)
    def artisan_name(self, obj):
        return obj.artisan.username
    artisan_name.admin_order_field = 'artisan'
    artisan_name.short_description = 'Artisan'

    # Add custom fieldsets for service form
    fieldsets = (
        (None, {'fields': ('title', 'description', 'price', 'category', 'location', 'artisan')}),
        (_('Additional Information'), {'fields': ('created_at',)}),
    )

    # Enable adding and modifying service objects
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('title', 'description', 'price', 'category', 'location', 'artisan'),
        }),
    )

    # Display artisan username for convenience
    list_display_links = ('title', 'artisan_name')
    
# Register the Service model with the custom ServiceAdmin
admin.site.register(Service, ServiceAdmin)
