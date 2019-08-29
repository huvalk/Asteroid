from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.template import RequestContext, loader
from .models import Game


def index(request):
    # создаем объект шаблона
    template = loader.get_template('Game/index.html')
    # создаем переменные контекста
    context = RequestContext(request, {
        'name_of_the_game': "Asteroid",
    })
    # Вызов 404 исключения
    # if (1 == 1):
    #     raise Http404("This is test")
    # рендерим шаблон с контекстом и возвращаем в ответ
    return HttpResponse(template.render(context))
    # альтернативный вариант позволяет не подключать лишних библиотек
    # context = {'name_of_the_game': "Asteroid"}
    # return render(request, 'Game/index.html', context)




def main_paige(request, name):
    return HttpResponse("This is menu of the game named %s." % name)
