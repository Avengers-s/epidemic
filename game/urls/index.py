from django.urls import path,include
from game.views.index import index

urlpatterns = [
    path('',index,name="index"),
    path('settings/',include('game.urls.settings.index')),
    path('getinfo/',include('game.urls.getinfo.index')),
    path('normal/',include('game.urls.normal.index')),
    path('manager/',include('game.urls.manager.index')),
]
