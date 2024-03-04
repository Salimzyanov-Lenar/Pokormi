from django.urls import path
from main_page.views import CabinAPIView

urlpatterns = [
    path('', CabinAPIView.as_view(), name='main_page')
]
# http://127.0.0.1:8000/main_page/