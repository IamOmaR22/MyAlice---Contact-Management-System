from rest_framework import generics
from .models import Contact
from .serializers import ContactSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated

# class ContactList(generics.ListCreateAPIView):
#     queryset = Contact.contactobjects.all()
#     serializer_class = ContactSerializer

# class ContactList(viewsets.ViewSet):
#     # permission_classes = [IsAuthenticated]
#     queryset = Contact.contactobjects.all()
#     # serializer_class = ContactSerializer

#     def list(self, request):
#         serializer_class = ContactSerializer(self.queryset, many=True)
#         return Response(serializer_class.data)

#     def retrieve(self, request, pk=None):
#         contact = get_object_or_404(self.queryset, pk=pk)
#         serializer_class = ContactSerializer(contact)
#         return Response(serializer_class.data)

class ContactList(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated]
    serializer_class = ContactSerializer
    # queryset = Contact.contactobjects.all()

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Contact, slug=item)

    # Define Custom Queryset
    def get_queryset(self):
        return Contact.objects.all()

class ContactDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class CreateContact(generics.CreateAPIView):
    serializer_class = ContactSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    queryset = Contact.objects.all()

class EditContact(generics.RetrieveUpdateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    lookup_field = 'slug'

class DeleteContact(generics.DestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    lookup_field = 'slug'
