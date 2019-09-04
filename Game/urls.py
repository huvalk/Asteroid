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
    # авторизация
    url(r'^auth/', views.auth, name='auth'),
    # записать новый рекорд
    url(r'^rec/', views.rec, name='rec'),
    # получить рекорды
    url(r'^info/', views.info, name='info'),
    # страница регистрации
    url('^registrate/', views.reg_page, name='registrate'),
    # регистрация
    url('^check/', views.check, name='check')
]