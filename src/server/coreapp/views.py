#!/usr/bin/python3

from rest_framework import viewsets, response, status
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.http import HttpResponseRedirect
import io, jwt, sys, datetime, json, math
from django.contrib.auth import get_user_model

from django.conf import settings
import requests


@api_view(["GET"])
@authentication_classes([])
@permission_classes([])
def GoogleAuthView(request):
    state = request.GET.get("state")
    code = request.GET.get("code")

    details = {"state": state, "code": code}

    cookie_header = request.META.get("HTTP_COOKIE", "")
    form_body = "&".join([f"{key}={value}" for key, value in details.items()])

    config = {
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": cookie_header,
        }
    }

    response = HttpResponseRedirect("/?rf=43")

    try:
        res = requests.post(
            "http://localhost:8000/_api/auth/o/google-oauth2/?{}".format(form_body),
            headers=config["headers"],
        )

        config = {
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Cookie": cookie_header,
            }
        }
        res=res.json()
        
        user=res.get("user")
        
        if user is None:
            return response
        
        prv_email = user
        tmp_password="new.pass{}".format(code)
        
        user = get_user_model().objects.get(email=prv_email)
        user.set_password(tmp_password)
        user.save()

        try:
            res = requests.post(
                "http://localhost:8000/_api/auth/token/login/",
                headers=config["headers"],
                data={
                    "password": tmp_password,
                    "email": prv_email,
                },
            )
            
            jsData=res.json()
            auth_token=jsData.get("auth_token")
            response.set_cookie("token", auth_token, max_age=3600)
        except requests.exceptions.RequestException as e:
            print({
                "error": str(e),
            })
        
        return response
    except requests.exceptions.RequestException as e:
        print(
            {
                "type": "GOOGLE_AUTH_FAIL",
                "error": str(e),
            }
        )
    return response
