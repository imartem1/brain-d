from django.urls import path, include, re_path
from .views import HomePageView, SearchResultView, SignUpView,Get_id, index, get_file, login
from . import views

urlpatterns = [
    path('', login, name='home'),
    path('view_model', index),
    path('get_id', Get_id, name='get_id'),
    path('search', SearchResultView, name='search'),
    #path('signup/', SignUpView.as_view(), name='signup'),
    path('get_file/', get_file, name='get_file'),
    path('accounts/', include('allauth.urls')),
]

