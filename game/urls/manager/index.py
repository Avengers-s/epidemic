from django.urls import path,include
from game.views.manager.manager import daka
from game.views.manager.manager import lixiao_query
from game.views.manager.manager import lixiao_update
from game.views.manager.manager import weihu
from game.views.manager.manager import geli_query
from game.views.manager.manager import geli_delete
from game.views.manager.manager import geli_insert
urlpatterns = [
    path('daka/', daka, name="manager_daka"),
    path('lixiao_query/',lixiao_query, name="manager_lixiao_query"),
    path('lixiao_update/',lixiao_update, name="manager_lixiao_update"),
    path('weihu/', weihu, name="manager_weihu"),
    path('geli_query/',geli_query, name="manager_geli_query"),
    path('geli_insert/',geli_insert, name="manager_geli_insert"),
    path('geli_delete/',geli_delete, name="manager_geli_delete"),
]
