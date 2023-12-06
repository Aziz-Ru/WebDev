# Installing process of Django in Linux

1.check python version: ` python3 --version`

2.django install cmd: `sudo apt install python3-django`

3.check django version: `django-admin --version`

4.to create a project (project Name mysite):  ` django-admin startproject mysite`

5.to run the server: `python3 manage.py runserver` 

6.to migrate database in your server run this cmd: `python3 manage.py migrate`

7.to create super user run this cmd: `python3 manage.py createsuperuser`

# How does Django Work?

Django follows the MVT design pattern (Model View Template).

Model - The data you want to present, usually data from a database.The models are usually located in a file called models.py.

View - A request handler that returns the relevant template and content - based on the request from the user.The views are usually located in a file called views.py.

Template - A text file (like an HTML file) containing the layout of the web page, with logic on how to display the data.

Urls - Django also provides a way to navigate around the different pages in a website.When a user requests a URL, Django decides which view it will send it to.This is done in a file called urls.py.


# File structure 
1.The outer mysite/ root directory is a container for your project. Its name doesn’t matter to Django; you can rename it to anything you like.

2.manage.py: A command-line utility that lets you interact with this Django project in various ways. 

3.The inner mysite/ directory is the actual Python package for your project. Its name is the Python package name you’ll need to use to import anything inside it (e.g. mysite.urls).

4.mysite/settings.py: Settings/configuration for this Django project.

5.mysite/urls.py: The URL declarations for this Django project; a “table of contents” of your Django-powered site. 

# Create App
What’s the difference between a project and an app? An app is a Web application that does something – e.g., a Weblog
system, a database of public records or a small poll app. A project is a collection of configuration and apps for a
particular website. A project can contain multiple apps. An app can be in multiple projects.
Creating app in pyhton project `python3 startapp app_name`

# Django Views

open the `app/views.py` . Django views are Python functions that takes http requests and returns http response, like HTML documents.
Views are usually put in a file called views.py located on your app's folder.


```bash
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello World")
```

To create a URLconf in the polls directory, create a file called `app/urls.py` include these code

```bash
from django.urls import path
from mydp import views

urlpatterns = [
    path('',views.home),
]

```

The next step is to point the root URLconf at the polls.urls module. In `mysite/urls.py`, add an import for
django.urls.include and insert an include() in the urlpatterns list, so you have:
```
from django.contrib import admin
from django.urls import include, path
urlpatterns = [
path('polls/', include('polls.urls')),
path('admin/', admin.site.urls),
]
```

The include() function allows referencing other URLconfs.

Now Run server `python manage.py runserver` you can see page not found. Go to http://localhost:8000/app/ then you get hello world.
# path
The path() function is passed four arguments, two required: route and view, and two optional: kwargs, and name.

`route` is a string that contains a URL pattern.When processing a request, Django starts at the first pattern in
urlpatterns and makes its way down the list, comparing the requested URL against each pattern until it finds one
that matches.Patterns don’t search GET and POST parameters, or the domain name.
`view `When Django finds a matching pattern, it calls the specified view function with an HttpRequest object as the first argument and any “captured” values from the route as keyword arguments.
`kwargs` Arbitrary keyword arguments can be passed in a dictionary to the target view.
`name` Naming your URL lets you refer to it unambiguously from elsewhere in Django, especially from within templates.
This powerful feature allows you to make global changes to the URL patterns of your project while only touching a
single file.


# Database 













