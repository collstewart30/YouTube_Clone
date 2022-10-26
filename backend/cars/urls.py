from django.urls import path, include
from cars import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('all/', views.get_all_cars),
    path('', views.user_cars),
]
