from django import forms

from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model=Product
        fields=[
            'title',
            'descrip',
            'price',
        ]

class RawProductForm(forms.Form):
    title   =forms.CharField()
    descrip =forms.CharField()
    price   =forms.DecimalField()