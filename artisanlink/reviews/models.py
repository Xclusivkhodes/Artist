from django.db import models
from django.conf import settings

class Artisan(models.Model):
    name = models.CharField(max_length=255)
    specialty = models.CharField(max_length=255)  # e.g., plumber, carpenter
    contact = models.CharField(max_length=15)
    average_rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    total_reviews = models.PositiveIntegerField(default=0)

    def update_rating(self):
        reviews = self.reviews.all()
        total_rating = sum(review.rating for review in reviews)
        self.total_reviews = reviews.count()
        self.average_rating = total_rating / self.total_reviews if self.total_reviews > 0 else 0.0
        self.save()

    def __str__(self):
        return self.name

class Review(models.Model):
    RATING_CHOICES = [(i, i) for i in range(1, 6)]  # 1 to 5 stars

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    artisan = models.ForeignKey(Artisan, on_delete=models.CASCADE, related_name="reviews")
    rating = models.IntegerField(choices=RATING_CHOICES)
    comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('user', 'artisan')  # Prevent duplicate reviews

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.artisan.update_rating()

    def __str__(self):
        return f"{self.user.username} - {self.artisan.name} - {self.rating} stars"
