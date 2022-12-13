from django.urls import path
from base.views import teacher_views as views

urlpatterns = [
    path('',views.getTeachers,name="teachers"), 
    path('<str:pk>/',views.getTeacher,name="teacher"),
    path('<str:pk>/reviews/', views.createTeacherReview, name="create-review-teacher"),
]