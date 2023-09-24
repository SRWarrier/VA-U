from django.shortcuts import render
from .models import hub, city
from .serializers import HUBSerializer, CitySerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response


class ViewHUB(APIView):
    def get(self, request):
        queryset = hub.objects.all()
        serializer = HUBSerializer(queryset, many=True)
        responseData = serializer.data
        return Response(responseData, status=status.HTTP_200_OK)


class AddHUB(APIView):
    def post(self, request):
        serializer = HUBSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = {"status": "success",
                        'message': 'HUB saved successfully', 'id': hub.id}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {"status": "failed", "errors": serializer.errors}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


class DeleteHUB(APIView):
    def delete(self, request):
        HubID = request.data.get('id')
        if HubID is not None:
            try:
                record = hub.objects.get(pk=HubID)
                record.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            except hub.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UpdateHUB(APIView):
    def put(self, request):
        try:
            print(request.data.keys())
            updateClient = hub.objects.get(pk=request.data["id"])
        except updateClient.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = HUBSerializer(updateClient, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# CITY Views
class ViewCity(APIView):
    def get(self, request):
        queryset = city.objects.all()
        serializer = CitySerializer(queryset, many=True)
        responseData = serializer.data
        return Response(responseData, status=status.HTTP_200_OK)


class AddCity(APIView):
    def post(self, request):
        serializer = CitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = {"status": "success",
                        'message': 'City saved successfully', 'id': city.id}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {"status": "failed", "errors": serializer.errors}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


class DeleteCity(APIView):
    def delete(self, request):
        cityID = request.data.get('id')
        if cityID is not None:
            try:
                record = city.objects.get(pk=cityID)
                record.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            except city.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UpdateCity(APIView):
    def put(self, request):
        try:
            print(request.data.keys())
            updateClient = city.objects.get(pk=request.data["id"])
        except updateClient.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = CitySerializer(updateClient, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
