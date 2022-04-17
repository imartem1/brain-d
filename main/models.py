from django.db import models
from django.contrib.auth.models import User


class Instance(models.Model):
    id = models.CharField('ID',   max_length=10, primary_key=True, )
    anterior_segment = models.BooleanField('anterior_segment', default=None)
    posterior_segment = models.BooleanField('posterior_segment', default=None)
    long_segment = models.BooleanField('long_segment', default=None)
    fronto_occipital_fasciculus = models.BooleanField('fronto_occipital_fasciculus', default=None)
    inferior_longitudinal_fasciculus = models.BooleanField('inferior_longitudinal_fasciculus', default=None)
    uncinate_fasciculus = models.BooleanField('uncinate_fasciculus', default=None)
    frontal_aslant_tract = models.BooleanField('frontal_aslant_tract',default=None)


    def __str__(self):
        return self.id
    class Meta:
        verbose_name = 'Экземпляр'
        verbose_name_plural = 'Экземпляры'


# Create your models here.
class Settings(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=None)
    instance = models.OneToOneField(Instance, on_delete=models.CASCADE, default=None)
    transparency = models.JSONField('Прозрачность')
    brightness = models.JSONField('Яркость')
    visibility = models.JSONField('Видимость')

    class Meta:
        verbose_name = 'Настройки отображения'
        verbose_name_plural = 'Настройки отображения'

class File(models.Model):
    file_name = models.CharField('name', max_length=50)
    file = models.FileField(upload_to = 'uploads/')

    class Meta:
        verbose_name = 'Файл'
        verbose_name_plural = 'Файлы'

    def __str__(self):
        return self.file_name
