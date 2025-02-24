from django.urls import path
from  user import views

urlpatterns = [
    path('list_users/', views.ListUserView.as_view()),
]