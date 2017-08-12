from django import forms
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit

class RouteForm(forms.Form):
    name = forms.CharField(max_length=30)
    kml_url = forms.URLField()

    def __init__(self, *args, **kwargs):
        super(RouteForm, self).__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_class = 'form-horizontal'
        self.helper.form_method = 'post'
        self.helper.form_action = ''
        self.helper.add_input(Submit('submit', 'Submit'))


class DirectionsForm(forms.Form):
    start = forms.CharField()
