from django.db import models
from django.contrib.auth.models import User, UserManager

# создаем собственного пользователя
class MyUser(User):
    game_time = models.TimeField
    hight_score = models.IntegerField(default=0)

    objects = UserManager()
# можем добавлять кастомные методы