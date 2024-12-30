from django.db import models
from users.models import User
from services.models import Service

class Booking(models.Model):
    PENDING = 'pending'
    CONFIRMED = 'confirmed'
    COMPLETED = 'completed'

    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (CONFIRMED, 'Confirmed'),
        (COMPLETED, 'Completed'),
    ]

    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookings')
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=PENDING)
    schedule_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
