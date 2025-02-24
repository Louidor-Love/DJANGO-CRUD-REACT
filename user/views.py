from django.shortcuts import render
from rest_framework import generics

from user.serializers import UserSerializer
from .models import User

# Create your views here.

class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer

class ListUserView(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()