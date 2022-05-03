from django.urls import path,include
from game.views.getinfo.getinfo import getname
urlpatterns = [
    path('getname/', getname, name="getinfo_getname"),
]
