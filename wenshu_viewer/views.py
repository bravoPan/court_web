from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


# Create your views here.

def index(request):
    tempelate = loader.get_template("home.html")
    context = {}
    return HttpResponse(tempelate.render(context, request))


def get_table(request, an_you):
    return HttpResponse("yes, here is" + an_you)


def get_display_type(request, display_type):
    template = loader.get_template(display_type)
    context = {}
    return HttpResponse(template.render(context, request))


def get_an_you_table(request, an_you):
    template = loader.get_template("table.html")
    context = {"an_you": an_you}
    return HttpResponse(template.render(context, request))


def get_wenshu_text(request, case_name):
    template = loader.get_template("wenshu_display.html")
    context = {}
    return HttpResponse(template.render(context, request))
