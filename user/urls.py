from django.urls import path
from  user import views

urlpatterns = [
    path('create_users/', views.CreateUserView.as_view()),
    path('users/', views.RetreiveUpdateUserView.as_view()),
    path('token/', views.CreateTokenView.as_view()),
]