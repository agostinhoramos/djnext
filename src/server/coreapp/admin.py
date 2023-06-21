from django.contrib import admin

# Register your models here.
from .models import EntityUser

class MyAdminSite(admin.AdminSite):
    site_header = "DjNext Admin" 
    
admin_site = MyAdminSite(name="myadmin")
admin.site.register(EntityUser)