from django.urls import path

from .models import Question
from .views import PackageCreateAPIView, PackageDetailAPIView, TagCreateAPIView, RoundCreateAPIView, ThemeCreateAPIView, \
    ThemeDetailAPIView, QuestionCreateAPIView, QuestionDetailAPIView, RoundDetailAPIView, TagDetailAPIView

urlpatterns = [
    path('packages/', PackageCreateAPIView.as_view(), name='package_create'),
    path('packages/<int:pk>/', PackageDetailAPIView.as_view(), name='package_detail'),
    path('tag/', TagCreateAPIView.as_view(), name='package_create'),
    path('tag/<int:pk>/', TagDetailAPIView.as_view(), name='package_detail'),
    path('round/', RoundCreateAPIView.as_view(), name='package_create'),
    path('round/<int:pk>/', RoundDetailAPIView.as_view(), name='package_detail'),
    path('theme/', ThemeCreateAPIView.as_view(), name='package_create'),
    path('theme/<int:pk>/', ThemeDetailAPIView.as_view(), name='package_detail'),
    path('question/', QuestionCreateAPIView.as_view(), name='package_create'),
    path('question/<int:pk>/', QuestionDetailAPIView.as_view(), name='package_detail'),
]