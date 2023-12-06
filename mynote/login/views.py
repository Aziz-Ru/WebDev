from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponse

def home(req):
    return render(req,'login.html')