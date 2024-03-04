from rest_framework import generics
from .models import Cabin
from .serializers import CabinSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


class CabinAPIView(APIView):
    def get(self, request, *args, **kwargs):
        cabins = Cabin.objects.all()
        serializer = CabinSerializer(cabins, many=True)
        return Response(serializer.data)