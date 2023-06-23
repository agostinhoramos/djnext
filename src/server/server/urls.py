"""
URL configuration for server project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView

from coreapp.views import GoogleAuthView

urlpatterns = [
    path('_api/', include('coreapp.urls')),
]

from coreapp.admin import admin_site

urlpatterns += [
    #path('dn-admin/', admin_site.urls),
    path('dn-admin/', admin.site.urls),
    
    path('_api/auth/', include('djoser.urls')),
    path('_api/auth/', include('djoser.urls.jwt')),
    path('_api/auth/', include('djoser.social.urls')),
    path('_api/auth/', include('djoser.urls.authtoken')),

    path('_api/auth/', include('djoser.social.urls')),  # URLs for social authentication
    path('_api/auth/google/callback', GoogleAuthView, name='google-auth-view'),
]