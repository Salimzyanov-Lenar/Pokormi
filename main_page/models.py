from django.db import models

from django.db import models


class Cabin(models.Model):
    cabin_id = models.IntegerField(unique=True, null=False, blank=False)
    street_name = models.CharField(max_length=100)
    longitude = models.FloatField()
    width = models.FloatField()
    total_donations = models.IntegerField()
    setup_date = models.DateTimeField()
    status = models.BooleanField(default=False) # False - не работает, True - работает

    def __str__(self):
        return self.cabin_id
