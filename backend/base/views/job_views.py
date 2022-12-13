from email.mime import message
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import *
from base.serializers import JobSerializer,UserSerializer , UserSerializerWithToken,CvSerializer
from rest_framework import status


@api_view(['GET'])
def getJobs(request):
    query = request.query_params.get('keyword')
    if(query == 'null' or query == None):
        query = ''
    jobs = Job.objects.filter(
        name__icontains=query)
    serializer = JobSerializer(jobs,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getJob(request,pk):
    job = Job.objects.get(_id = pk)
    serializer = JobSerializer(job,many=False)
    return Response(serializer.data)


@api_view(['POST'])
def uploadImageJob(request):
    data = request.data

    job_id = data['job_id']
    job = Job.objects.get(_id=job_id)

    job.image = request.FILES.get('image')
    job.save()

    return Response('Image was uploaded')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createCv(request, pk):
    user = request.user
    job = Job.objects.get(_id=pk)


    cv = Cv.objects.create(
            user=user,
            job=job,
            name=user.first_name,
            description='',
     )


    serializer = CvSerializer(cv, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createJob(request):
    user = request.user

    product = Job.objects.create(
        user=user,
        name='Sample Name',
        countInStock=50,
        description=''
    )

    serializer = JobSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateJob(request, pk):
    data = request.data
    job = Job.objects.get(_id=pk)
    job.name = data['name']
    job.countInStock = data['countInStock']
    job.description = data['description']
    job.save()
    serializer = JobSerializer(job, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deletejob(request, pk):
    job = Job.objects.get(_id=pk)
    job.delete()
    return Response('Job Deleted')

@api_view(['POST'])
def uploadImageCv(request):
    data = request.data

    cv_id = data['cv_id']
    cv = Cv.objects.get(_id=cv_id)

    cv.image = request.FILES.get('image')
    cv.save()

    return Response('Image was uploaded')


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCv(request,pk):
    cv = Cv.objects.get(_id = pk)
    serializer = CvSerializer(cv,many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def updateCv(request, pk):
    data = request.data
    cv = Cv.objects.get(_id=pk)

    cv.name = data['name']
    cv.description = data['description']
    cv.save()

    serializer = CvSerializer(cv, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyCv(request):
    user = request.user
    cv = user.cv_set.all()
    serializer = CvSerializer(cv, many=True)
    return Response(serializer.data)