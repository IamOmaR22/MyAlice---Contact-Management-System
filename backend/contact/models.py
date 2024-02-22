from django.db import models
from django.utils import timezone
from django.conf import settings

# Create your models here.

class Contact(models.Model):
    class ContactObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')
        
    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    slug = models.SlugField(max_length=250, unique_for_date='published')
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='contact_posts')
    status = models.CharField(max_length=10, choices=options, default='published')
    objects = models.Manager() # The default manager.
    contactobjects = ContactObjects() # The custom manager.

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.name