from django.urls import path
from . import views


urlpatterns = [
    path('all/<str:video_id>/', views.get_all_comments),
    path('', views.user_comments),
]