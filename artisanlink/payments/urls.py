from django.urls import path
from .views import InitiatePaymentView

urlpatterns = [
    path('initiate-payment/', InitiatePaymentView.as_view(), name='initiate-payment'),
    # Add callback URL for payment processing
]
