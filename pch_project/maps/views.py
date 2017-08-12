from django.shortcuts import render
from django.contrib import messages
from .forms import RouteForm
from .models import Route

def index(request):
    context = {}
    if request.method == 'POST':
        form = RouteForm(request.POST, request.FILES)
        if form.is_valid():
            instance = Route(name=request.POST['name'], kml=request.FILES['kml'])
            instance.save()
            messages.add_message(request, messages.SUCCESS, 'Successful upload!')
            context['kml_url'] = instance.kml
    else:
        form = RouteForm()
    context['form'] = form
    return render(request, 'maps/index.html', context)
