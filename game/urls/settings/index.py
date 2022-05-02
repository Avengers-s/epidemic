from django.urls import path,include
from game.views.settings.login import signin
urlpatterns = [
    path('login/', signin, name="settings_login"),
]
