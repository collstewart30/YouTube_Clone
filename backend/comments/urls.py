from django.urls import path
from . import views


urlpatterns = [
    path('all/<str:video_id>/', views.get_all_comments),
    path('add/', views.add_comment),
    # path('', views.user_comments),
]