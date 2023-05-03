# from django.http import HttpResponse
# from django.shortcuts import render

# def my_app(request):
#     return HttpResponse("Hello world!")

from django.http import HttpResponse
from django.template import loader

def simulatorapp(request):
  template = loader.get_template('loginpage.html')
  return HttpResponse(template.render())