from django.db import models

# Create your models here.
class Product(models.Model):
    title   =models.CharField(max_length=100) #max_length=required
    descrip =models.TextField(blank=True, null=True)
    price   =models.DecimalField(decimal_places=2, max_digits=10000)
    # active  =models.BooleanField() #default=true null=true
    #jodi new kono object modde add krte cao tahole default equal
    #  tru kore dite hbe nahole data all clear krbe
    
