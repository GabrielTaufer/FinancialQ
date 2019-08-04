from FinancialQ.main.views import Base
from django.urls import path

urlpatterns = [
    path('', Base.as_view()),
]
