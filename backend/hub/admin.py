from django.contrib import admin
from .models import *


class stateAdmin(admin.ModelAdmin):
    list_display = ("name", "statecode", "zone")


admin.site.register(city)
admin.site.register(hub)
admin.site.register(zones)
admin.site.register(state, stateAdmin)
