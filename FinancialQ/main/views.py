from django.shortcuts import render
from django.views.generic import TemplateView
from django.views import View
# Create your views here.


class Base(TemplateView):
    template_name = 'base.html'

    def get(self, request):
        return render(request, self.template_name, {})