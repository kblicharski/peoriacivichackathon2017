from django import forms

class RouteForm(forms.Form):
    name = forms.CharField(max_length=30, help_text='Enter a name for your route')
    kml = forms.FileField(help_text='Upload a .kml file')

