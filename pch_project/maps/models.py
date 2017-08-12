from django.db import models

class Route(models.Model):
    kml = models.URLField()
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name
