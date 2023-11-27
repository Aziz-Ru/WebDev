from django.http import HttpResponse
from django.shortcuts import render
def home(req):
    data={
        'Name':'MY DP',
        'title':'Home',
        'author':'Aziz'
    }
    return render(req,"index.html",data)
def about(req):
    return HttpResponse("Hello World")

def course(req):
    return HttpResponse("Here All Courses")

def coureseDetails(req,id):
    return HttpResponse("The number of course "+ str(id))