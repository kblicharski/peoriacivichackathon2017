from django.forms import ModelForm
from .models import Route

class RouteForm(ModelForm):
    class Meta:
        model = Route
        fields = ['name', 'kml']

