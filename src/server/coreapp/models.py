import uuid

from django.db import models
from django.utils.timezone import now
from django.utils.translation import gettext_lazy as _

# Create your models here.
class EntityUser(models.Model):
    
    GENDER_CHOICE = (
        ("M", _('MALE')),
        ("F", _('FEMALE')),
    )
    
    DEFAULT_LANG = "PT-PT"
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    first_name = models.CharField(_('First Name'), max_length=255, blank=True)
    last_name = models.CharField(_('Last Name'), max_length=255, blank=True)
    password = models.CharField(max_length=750, null=True)
    auth_provider = models.CharField(max_length=120, default=None, null=True)
    default_lang = models.CharField(max_length=60, default=DEFAULT_LANG, blank=True, null=True)
    is_active = models.BooleanField(
        _('Active'),
        default=True,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )
    is_email_confirmed = models.BooleanField(
        _('Email Confirmed'),
        default=False
    )
    date_joined = models.DateTimeField(
        _('Date Joined'),
        default=now
    )
    changed_at = models.DateTimeField(blank=True, null=True)
    
    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)