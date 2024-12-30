from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid
from django.core.mail import send_mail
from django.conf import settings

class User(AbstractUser):
    ARTISAN = 'artisan'
    CUSTOMER = 'customer'

    ROLE_CHOICES = [
        (ARTISAN, 'Artisan'),
        (CUSTOMER, 'Customer'),
    ]

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default=CUSTOMER)
    profile_picture = models.ImageField(upload_to='profiles/', blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    verified = models.BooleanField(default=False)  # Email verified or not
    verification_token = models.CharField(max_length=36, blank=True, null=True)  # Store verification token

    def generate_verification_token(self):
        """Generate a unique token for email verification."""
        self.verification_token = str(uuid.uuid4())
        self.save()

    def send_verification_email(self):
        """Send email to user for email verification."""
        verification_link = f"http://example.com/verify-email/{self.verification_token}/"
        subject = "Email Verification for ArtisanLink"
        message = f"Hello {self.username},\n\nPlease verify your email by clicking the following link:\n{verification_link}\n\nThanks,\nArtisanLink Team"
        from_email = 'elifelixgbewonyo0@gmail.com'
        send_mail(subject, message, from_email, [self.email])

    def __str__(self):
        return self.username

    def save(self, *args, **kwargs):
        # Generate verification token when a new user is created
        if not self.pk:  # This means it's a new user
            self.generate_verification_token()
            self.send_verification_email()
        super().save(*args, **kwargs)
