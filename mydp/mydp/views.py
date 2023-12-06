from django.http import HttpResponse
from django.shortcuts import render
import datetime
def home(req):
    date=datetime.datetime.now()
    # data={
    #     'date':date,
    #     'Name':'MY DP',
    #     'title':'Home',
    #     'cName':['c++','java','js','python'],
    #     'author':'Aziz'
    # }
    # return render(req,"index.html",data)
    return render(req,"index.html")
def about(req):
    return HttpResponse("Hello World")

def course(req):
    return HttpResponse("Here All Courses")

def coureseDetails(req,id):
    return HttpResponse("The number of course "+ str(id))