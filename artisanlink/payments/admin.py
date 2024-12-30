from django.contrib import admin
from .models import Transaction

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('user', 'amount', 'payment_method', 'status', 'created_at', 'transaction_id')
    search_fields = ('user__username', 'transaction_id')
    list_filter = ('payment_method', 'status')
    ordering = ('-created_at',)
