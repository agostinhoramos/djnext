import uuid

from django.db import models
from django.utils.timezone import now
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Users must have an email address")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get('is_active') is not True:
            raise ValueError("Superuser should be active")
        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)


# Create your models here.
class EntityUser(AbstractBaseUser, PermissionsMixin):
    GENDER_CHOICE = (
        ("M", _("MALE")),
        ("F", _("FEMALE")),
    )

    DEFAULT_LANG = "PT-PT"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(_("First Name"), max_length=255)
    last_name = models.CharField(_("Last Name"), max_length=255)
    username = models.CharField(max_length=150, unique=True, null=True)
    default_lang = models.CharField(
        max_length=60, default=DEFAULT_LANG, blank=True, null=True
    )
    is_active = models.BooleanField(
        _("Active"),
        default=True,
        help_text=_(
            "Designates whether this user should be treated as active. "
            "Unselect this instead of deleting accounts."
        ),
    )
    is_staff = models.BooleanField(default=False)
    is_email_confirmed = models.BooleanField(_("Email Confirmed"), default=False)
    date_joined = models.DateTimeField(_("Date Joined"), default=now)
    changed_at = models.DateTimeField(blank=True, null=True)

    objects = UserAccountManager()

    # Required fields for creating a new user
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    def get_full_name(self):
        return "{} {}".format(self.first_name, self.last_name)

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return "{}".format(self.email)
