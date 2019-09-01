from django.conf.urls import url, include

from . import views

urlpatterns = [
    # index
    url(r'^$', views.index, name='index'),
    # main_paige
    url(r'^(?P<name>[a-z]+)/main/', views.main_paige, name='main'),
    # перевод
    url(r'^i18n/', include('django.conf.urls.i18n')),
    # страница входа
    url(r'^login/', views.log, name='login_page'),
    url(r'^auth/', views.auth, name='auth'),

]