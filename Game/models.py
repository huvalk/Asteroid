from django.db import models
from django.contrib.auth.models import User, UserManager

# создаем собственного пользователя
class MyUser(User):
    game_time = models.IntegerField(default=0)
    hight_score = models.IntegerField(default=0)

    objects = UserManager()
# можем добавлять кастомные методы


def get_records(cur_user):
    users = MyUser.objects.all().order_by('-hight_score')[:10]
    res=[]
    for user in users:
        res.append({'username': user.username, 'hight_score': user.hight_score,
                    'game_time': user.game_time})
    res.append({'username': cur_user.username, 'hight_score': cur_user.hight_score,
                'game_time': cur_user.game_time})
    return res