from django import forms
from django.forms import CheckboxInput, Select
from .models import Instance

class InstanceForm(forms.ModelForm):
    class Meta:
        model = Instance
        fields = ['id',
                  'anterior_segment',
                  'posterior_segment',
                  'long_segment',
                  'fronto_occipital_fasciculus',
                  'inferior_longitudinal_fasciculus',
                  'uncinate_fasciculus',
                  'frontal_aslant_tract',]




