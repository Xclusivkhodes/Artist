from django.contrib import admin
from .models import Artisan, Review
from django.utils.translation import gettext_lazy as _

class ReviewInline(admin.TabularInline):
    model = Review
    extra = 0  # Number of empty forms to show
    readonly_fields = ('rating', 'comment', 'created_at', 'updated_at')
    can_delete = False

class ArtisanAdmin(admin.ModelAdmin):
    # Define the fields to display in the Artisan list view
    list_display = ('name', 'specialty', 'contact', 'average_rating', 'total_reviews')
    search_fields = ('name', 'specialty')
    list_filter = ('specialty',)
    ordering = ('-average_rating',)

    # Adding reviews inline to Artisan admin interface
    inlines = [ReviewInline]

    # Allow artisan's name and contact information to be clicked to view details
    list_display_links = ('name',)

    # Display rating in readable format
    def get_average_rating(self, obj):
        return f"{obj.average_rating} / 5"
    get_average_rating.short_description = _('Average Rating')

class ReviewAdmin(admin.ModelAdmin):
    list_display = ('user', 'artisan', 'rating', 'comment', 'created_at', 'updated_at')
    list_filter = ('rating', 'artisan')
    search_fields = ('user__username', 'artisan__name', 'comment')
    ordering = ('-created_at',)

    # Customizing the form layout
    fieldsets = (
        (None, {
            'fields': ('user', 'artisan', 'rating', 'comment')
        }),
        (_('Timestamps'), {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

# Registering the Artisan and Review models in the admin
admin.site.register(Artisan, ArtisanAdmin)
admin.site.register(Review, ReviewAdmin)
