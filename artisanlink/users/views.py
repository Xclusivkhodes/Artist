from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .serializers import UserSerializer
from .models import User
from django.shortcuts import render, redirect
from django.contrib import messages

class UserRegistrationView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        user = User.objects.create_user(
            username=data['username'],
            email=data['email'],
            password=data['password'],
            role=data['role'],
        )
        serializer = UserSerializer(user)
        return Response(serializer.data)

class UserProfileView(APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

def verify_email(request, token):
    try:
        user = User.objects.get(verification_token=token)
        user.verified = True
        user.verification_token = ''  # Remove the token after successful verification
        user.save()
        messages.success(request, "Your email has been verified!")
        return redirect('login')  # Redirect to the login page
    except User.DoesNotExist:
        messages.error(request, "Invalid verification link.")
        return redirect('home')  # Redirect to home or an appropriate page