from django.shortcuts import render
from .forms import RouteForm

def index(request):
    return render(request, 'maps/base.html')
