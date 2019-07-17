from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<display_type>", views.get_display_type, name="get_display_type"),
    path("main_judgement/<an_you>", views.get_an_you_table, name="get_general_table"),
    path("main_judgement/text/<case_name>", views.get_wenshu_text, name="get_text"),
    # path("main_judgement/<.*>/<case_name>", views.get_wenshu_text, name="get_wenshu_text"),
    # path("nav/<an_you>/<case_name>", views.get_text, name="text")
]