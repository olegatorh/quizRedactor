from rest_framework import generics
from .models import Package, Tag, Round, Theme, Question
from .serializers import PackageSerializer, TagSerializer, RoundSerializer, ThemeSerializer, QuestionSerializer


class BaseDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'pk'


class PackageCreateAPIView(generics.CreateAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class PackageDetailAPIView(BaseDetailAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer


class TagCreateAPIView(generics.CreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class TagDetailAPIView(BaseDetailAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class RoundCreateAPIView(generics.CreateAPIView):
    queryset = Round.objects.all()
    serializer_class = RoundSerializer


class RoundDetailAPIView(BaseDetailAPIView):
    queryset = Round.objects.all()
    serializer_class = RoundSerializer


class ThemeCreateAPIView(generics.CreateAPIView):
    queryset = Theme.objects.all()
    serializer_class = ThemeSerializer


class ThemeDetailAPIView(BaseDetailAPIView):
    queryset = Theme.objects.all()
    serializer_class = ThemeSerializer


class QuestionCreateAPIView(generics.CreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class QuestionDetailAPIView(BaseDetailAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
