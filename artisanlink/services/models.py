from django.db import models
from users.models import User

class Service(models.Model):
    artisan = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'role': 'artisan'})
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title