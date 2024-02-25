from django.urls import path
from . import views

urlpatterns = [
    path('MainPage/', views.main_page, name='main_page')
]