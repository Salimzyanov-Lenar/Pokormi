from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_page, name='main_page')
]

# http://127.0.0.1:8000/main_page/