from django.contrib import admin
from .models import Instance, Settings, File
# Register your models here.
admin.site.register(Instance)
admin.site.register(Settings)
admin.site.register(File)
