from django.shortcuts import render
from rest_framework import generics, authentication,permissions
from rest_framework.authtoken.views import ObtainAuthToken 

from user.serializers import UserSerializer,AuthTokenSerializer
from user.models import User



#crear usuario
class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer

#ver usuario y actualizarlo
class RetreiveUpdateUserView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    authentication_classes =[authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    
    # este metodo sirve para ver el usuario q hace el request
    def get_object(self): 
        return self.request.user

#crear token   
class CreateTokenView(ObtainAuthToken):    
    serializer_class = AuthTokenSerializer