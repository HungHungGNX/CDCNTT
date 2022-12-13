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
    teacher = Teacher.objects.get(_id = pk)
    serializer = TeacherSerializer(teacher,many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createTeacherReview(request, pk):
    user = request.user
    teacher = Teacher.objects.get(_id=pk)
    data = request.data

    # 1 - Review already exists
    alreadyExists = teacher.reviewteacher_set.filter(user=user).exists()
    if alreadyExists:
        content = {'detail': 'Teacher already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 2 - No Rating or 0
    elif data['rating'] == 0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 3 - Create review
    else:
        review = ReviewTeacher.objects.create(
            user=user,
            teacher=teacher,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )

        reviews = teacher.reviewteacher_set.all()
        teacher.numReviews = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating

        teacher.rating = total / len(reviews)
        teacher.save()

        return Response('Review Added')
