from rest_framework import serializers
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model
        fields = ['email','password','name']
        extra_kwargs = {
            "password": {"write_only": True},  # No se devuelve en la respuesta
            "email": {"required": True},       # El email es obligatorio
        }

    def create_user(self,validated_data):
        return get_user_model.objects.create(**validated_data)   
    
    
    def update_user(self,validated_data,instance):
        password = validated_data.pop('password',None) # Extrae la contraseña si está en los datos validados
        user = super().update(instance, validated_data)  # Llama a la implementación original de 'update'

        if password:
            user.set_password(password)  # Si hay contraseña, la encripta correctamente
            user.save() #Guarda los cambios en la base de datos
        return user    # Retorna el usuario actualizado