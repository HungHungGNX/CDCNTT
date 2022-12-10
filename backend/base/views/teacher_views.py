from email.mime import message
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import *
from base.serializers import TeacherSerializer,UserSerializer , UserSerializerWithToken
from rest_framework import status


@api_view(['GET'])
def getTeachers(request):
    query = request.query_params.get('keyword')
    if(query == 'null' or query == None):
        query = ''
    teachers = Teacher.objects.filter(
        name__icontains=query)
    serializer = TeacherSerializer(teachers,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTeacher(request,pk):
    teacher = Product.objects.get(_id = pk)
    serializer = TeacherSerializer(teacher,many=False)
    return Response(serializer.data)
