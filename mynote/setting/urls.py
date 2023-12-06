from django.urls import path
from setting import views
urlpatterns = [
    path('',views.home),
]