from django.shortcuts import render
from .forms import RouteForm
from .models import Route

def index(request):
    if request.method == 'POST':
        form = RouteForm(request.POST, request.FILES)
        if form.is_valid():
            instance = Route(name=request.POST['name'], kml=request.FILES['kml'])
            instance.save()
    else:
        form = RouteForm()
    return render(request, 'maps/base.html', {'form': form})
