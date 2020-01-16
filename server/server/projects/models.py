from django.db import models

class Project(models.Model):
  name = models.CharField(max_length=100)
  pub_date = models.DateTimeField('date published', auto_now_add=True)
  summary = models.TextField()
  github = models.URLField()
  website = models.URLField()
  def __str__(self):
    return self.name

class Tag(models.Model):
  project = models.ForeignKey(Project, on_delete=models.CASCADE)
  text = models.CharField(max_length=100)
  def __str__(self):
    return self.text


# Create your models here.
