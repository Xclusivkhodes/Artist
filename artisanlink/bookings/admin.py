from django.contrib import admin
from .models import Booking
from django.utils.translation import gettext_lazy as _

class BookingAdmin(admin.ModelAdmin):
    # Define the fields to be displayed in the list view
    list_display = ('customer', 'service', 'status', 'schedule_date', 'created_at')
    list_filter = ('status', 'customer', 'service', 'schedule_date')
    search_fields = ('customer__username', 'service__title', 'status', 'schedule_date')
    ordering = ('-created_at',)

    # Add custom fieldsets for Booking form
    fieldsets = (
        (None, {'fields': ('customer', 'service', 'status', 'schedule_date')}),
        (_('Additional Information'), {'fields': ('created_at',)}),
    )

    # Allow adding and modifying bookings
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('customer', 'service', 'status', 'schedule_date'),
        }),
    )

    # Make status field editable as a dropdown with available choices
    def get_status_display(self, obj):
        return obj.get_status_display()
    get_status_display.short_description = 'Status'

# Register the Booking model with the custom BookingAdmin
admin.site.register(Booking, BookingAdmin)
