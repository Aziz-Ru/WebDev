from django.contrib import admin

# Register your models here.
from .models import Product
#this relative import frommodel class

admin.site.register(Product)
#this create product text field in database
