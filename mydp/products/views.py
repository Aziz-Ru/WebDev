from django.shortcuts import render
from django.http import HttpResponse
from .models import Product
from .form import ProductForm,RawProductForm




def product_view(request):
    my_form=RawProductForm()
    context={
        'form':my_form
    }
    return render(request, 'product/create.html',context)



# this is poor method to fetch data
# def product_view(request):
#     if request.method=='POST':
#         my_title=request.POST.get('title')
#         print(my_title)
#     return render(request, 'product/create.html')

# def product_view(request):
#     form=ProductForm(request.POST or None)
#     if form.is_valid():
#         form.save()
#         form=ProductForm()

#     context={
#         'form':form
#     }
#     return render(request, 'product/create.html',context)

def products(req):
    # obj=Product.objects.get(id=1)
    # constext={
    #     'title':obj.title,
    #     'descrip':obj.descrip,
    #     'price':obj.price,
    # }

    # return render(req, 'index.html' {})
    return render(req, 'product/index.html',)

