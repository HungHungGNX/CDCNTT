from django.urls import path
from base.views import job_views as views

urlpatterns = [
    path('',views.getJobs,name="jobs"), 
    path('mycv/', views.getMyCv, name='mycv'),
    path('upload/cv/', views.uploadImageCv, name="image-upload-cv"),
    path('<str:pk>/',views.getJob,name="job"),
    path('<str:pk>/cv/',views.getCv,name="cv"),
    path('<str:pk>/create/cv/', views.createCv, name="create-cv"),
    path('<str:pk>/update/cv/', views.updateCv, name="update-cv"),
]