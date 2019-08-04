from django.shortcuts       import render
from django.views.generic   import TemplateView
from django.views           import View


class LoginView(View):
    template_name = 'login.html'

    def get(self, request):
        return render(request, self.template_name, {})

class CreateAccountView(View):
    template_name = 'create_account.html'

    def get(self, request):
        return render(request, self.template_name, {})