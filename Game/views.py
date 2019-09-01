from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext, loader
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
import json

@login_required
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


def log(request):
        return render(request, 'Game/login.html', {})


def auth(request):
    # попытка авторизации
    user_name = str(request.POST['user_name'])
    user_password = str(request.POST['password'])
    user = authenticate(username=user_name, password=user_password)
    if user is None:
        response = {'status': 0, 'message': "Error"}
    else:
        if user.is_active:
            login(request, user)
            response = {'status': 1, 'message': "Ok"}
        else:
            response = {'status': 0, 'message': "Error"}
    return HttpResponse(json.dumps(response), content_type='application/json')


@login_required
def rec(request):
    user_score = str(request.POST['user_score'])
    game_time = str(request.POST['game_time'])
    user=request.user
    user.hight_score=user_score
    user.game_time=game_time


@login_required
#def info(request):



def main_paige(request, name):
    return HttpResponse("This is menu of the game named %s." % name)
