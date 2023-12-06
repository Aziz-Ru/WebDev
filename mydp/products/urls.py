from django.urls import path
from products import views


urlpatterns = [
    path('', views.products),
    path('create/', views.product_view)
]
