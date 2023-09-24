from django.shortcuts import render
from .models import industry_type, entity_type
from .serializers import industryNameSerializer, entityTypeSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response


class getIndustryNames(APIView):
    def get(self, request):
        queryset = industry_type.objects.all()
        serializer = industryNameSerializer(queryset, many=True)
        responseData = serializer.data
        return Response(responseData, status=status.HTTP_200_OK)


class getEntityTypes(APIView):
    def get(self, request):
        queryset = entity_type.objects.all()
        serializer = entityTypeSerializer(queryset, many=True)
        responseData = serializer.data
        return Response(responseData, status=status.HTTP_200_OK)
