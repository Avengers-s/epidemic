from django.urls import path,include
from game.views.normal.normal import daka
urlpatterns = [
    path('daka/', daka, name="normal_daka"),
]
