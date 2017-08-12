from django import forms

class RouteForm(forms.Form):
    name = forms.CharField(max_length=30)
    kml = forms.FileField(help_text='Upload a .kml file')

