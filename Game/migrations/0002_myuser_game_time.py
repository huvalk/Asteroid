# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2019-09-01 18:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Game', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='myuser',
            name='game_time',
            field=models.IntegerField(default=0),
        ),
    ]
