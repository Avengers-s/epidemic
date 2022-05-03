from django.urls import path,include
from game.views.manager.manager import daka
urlpatterns = [
    path('daka/', daka, name="manager_daka"),
]
