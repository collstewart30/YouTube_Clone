from django.urls import path
from . import views


urlpatterns = [
    path('', views.get_all_comments),
    path('all/', views.user_comments),
]