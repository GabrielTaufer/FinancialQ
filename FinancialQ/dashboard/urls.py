from FinancialQ.dashboard.views import DashboardView
from django.urls import path

urlpatterns = [
    path('', DashboardView.as_view()),
]
