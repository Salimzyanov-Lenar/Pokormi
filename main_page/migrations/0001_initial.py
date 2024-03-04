# Generated by Django 5.0.2 on 2024-03-04 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cabin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cabin_id', models.IntegerField(unique=True)),
                ('street_name', models.CharField(max_length=100)),
                ('longitude', models.FloatField()),
                ('width', models.FloatField()),
                ('total_donations', models.IntegerField()),
                ('setup_date', models.DateTimeField()),
                ('status', models.BooleanField(default=False)),
            ],
        ),
    ]