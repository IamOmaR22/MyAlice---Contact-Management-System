from django.urls import path
from django.views.generic import TemplateView
from .views import ContactList, ContactDetail

app_name = 'contact'

urlpatterns = [
    path('c/', TemplateView.as_view(template_name='contact/index.html'), name='contact'),
    path('<int:pk>/', ContactDetail.as_view(), name='detailcreate'),
    path('', ContactList.as_view(), name='listcreate'),
]
