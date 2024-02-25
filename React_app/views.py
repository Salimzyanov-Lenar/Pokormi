from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return HttpResponse('React') # заглушка
#   return render(request, 'React_app/..')
# вместо точек шаблон лежит в templates/React_app/..
