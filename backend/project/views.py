from django.shortcuts import render
from .models import project
from .projectserializers import ProjectSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response


class ViewProject(APIView):
    def get(self, request):
        queryset = project.objects.all()
        serializer = ProjectSerializer(queryset, many=True)
        responseData = serializer.data
        return Response(responseData, status=status.HTTP_200_OK)


class AddProject(APIView):
    def post(self, request):
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = {"status": "success",
                        'message': 'Project saved successfully', 'id': project.id}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {"status": "failed", "errors": serializer.errors}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


class DeleteProject(APIView):
    def delete(self, request):
        clientID = request.data.get('projectid')
        if clientID is not None:
            try:
                record = project.objects.get(pk=clientID)
                record.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            except project.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UpdateProject(APIView):
    def put(self, request):
        try:
            print(request.data.keys())
            updateClient = project.objects.get(pk=request.data["id"])
        except updateClient.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ProjectSerializer(updateClient, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
