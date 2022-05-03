from django.urls import path,include
from game.views.normal.normal import daka
from game.views.normal.normal import lixiao
from game.views.normal.normal import weihu
urlpatterns = [
    path('daka/', daka, name="normal_daka"),
    path('lixiao/', lixiao, name="normal_lixiao"),
    path('weihu/',weihu,name="normal_weihu"),
]
