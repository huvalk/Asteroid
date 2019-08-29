from django.db import models

# создаем таблицу в бд
class Game(models.Model):
    game_date = models.DateTimeField
    score = models.IntegerField(default=0)
# метод выводит текстовую информацию об объекте
    def __str__(self):
        return self.score
# можем добавлять кастомные методы