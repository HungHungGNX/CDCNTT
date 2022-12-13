from django.urls import path
from base.views import job_views as views

urlpatterns = [
    path('',views.getJobs,name="jobs"), 
    path('mycv/', views.getMyCv, name='mycv'),
    path('upload/cv/', views.uploadImageCv, name="image-upload-cv"),
    path('<str:pk>/',views.getJob,name="job"),
    path('<str:pk>/cv/',views.getCv,name="cv"),
    path('create/', views.createJob, name="job-create"),
    path('update/<str:pk>/', views.updateJob, name="job-update"),
    path('delete/<str:pk>/', views.deletejob, name="job-delete"),
    path('upload/', views.uploadImageJob, name="image-job-upload"),
    path('<str:pk>/create/cv/', views.createCv, name="create-cv"),
    path('<str:pk>/update/cv/', views.updateCv, name="update-cv"),
]