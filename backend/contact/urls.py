from .views import ContactList, CreateContact, EditContact, DeleteContact
from rest_framework.routers import DefaultRouter
from django.urls import path

app_name = 'contact'

router = DefaultRouter()
router.register('', ContactList, basename='contact')

urlpatterns = [
    path('create/', CreateContact.as_view(), name='createcontact'),
    path('edit/<slug:slug>/', EditContact.as_view(), name='editcontact'),
    path('delete/<slug:slug>/', DeleteContact.as_view(), name='deletecontact'),
] + router.urls



# from django.urls import path
# from django.views.generic import TemplateView
# from .views import ContactList, ContactDetail

# app_name = 'contact'

# urlpatterns = [
#     path('c/', TemplateView.as_view(template_name='contact/index.html'), name='contact'),
#     path('<int:pk>/', ContactDetail.as_view(), name='detailcreate'),
#     path('', ContactList.as_view(), name='listcreate'),
# ]
