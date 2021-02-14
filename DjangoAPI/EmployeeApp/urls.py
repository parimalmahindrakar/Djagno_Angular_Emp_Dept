from django.urls import path, include
from .views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [

    path('department', departmentApi),
    path("department/<int:id>", departmentApi),

    path('employee', employeeApi),
    path("employee/<int:id>", employeeApi),

    path("save_file", SaveFile)
    
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
