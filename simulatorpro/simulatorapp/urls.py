from django.urls import path
from . import views

urlpatterns = [
    path ('simulatorapp/', views.simulatorapp, name='login'),
]