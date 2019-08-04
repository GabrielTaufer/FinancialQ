from FinancialQ.login.views import LoginView, CreateAccountView
from django.urls            import path

urlpatterns = [
    path('', LoginView.as_view()),
    path('new', CreateAccountView.as_view()),
]
