# quiz/admin.py
from django.contrib import admin
from .models import Package, Tag, Round, Theme, Question

@admin.register(Package)
class PackageAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'date', 'difficulty', 'author', 'status', 'last_modified')

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('tag_names', 'package_id')


@admin.register(Round)
class RoundAdmin(admin.ModelAdmin):
    list_display = ('round', 'package_id')

@admin.register(Theme)
class ThemeAdmin(admin.ModelAdmin):
    list_display = ('theme', 'round_id', 'comments')

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('theme_id', 'question', 'question_type', 'question_price', 'answer')
