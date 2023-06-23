from django.contrib import admin

# Register your models here.
from .models import EntityUser

# https://docs.djangoproject.com/en/4.2/ref/contrib/admin/#modeladmin-options
class MyAdminSite(admin.AdminSite):
    site_header = "DjNext Admin"
     
admin_site = MyAdminSite(name="myadmin")
admin.site.register(EntityUser)