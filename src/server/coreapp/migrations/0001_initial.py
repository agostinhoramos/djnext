# Generated by Django 4.2.2 on 2023-06-21 16:44

from django.db import migrations, models
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EntityUser',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('first_name', models.CharField(blank=True, max_length=255, verbose_name='First Name')),
                ('last_name', models.CharField(blank=True, max_length=255, verbose_name='Last Name')),
                ('password', models.CharField(max_length=750, null=True)),
                ('auth_provider', models.CharField(default=None, max_length=120, null=True)),
                ('default_lang', models.CharField(blank=True, default='PT-PT', max_length=60, null=True)),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='Active')),
                ('is_email_confirmed', models.BooleanField(default=False, verbose_name='Email Confirmed')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Date Joined')),
                ('changed_at', models.DateTimeField(blank=True, null=True)),
            ],
        ),
    ]
