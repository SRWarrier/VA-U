from django.shortcuts import render
from .models import client
from .serializer import ClientSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework import filters, generics


class FilterClients(generics.ListAPIView):
    queryset = client.objects.all()
    serializer_class = ClientSerializer

    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'shortname', "entity_type", "industry"]
    ordering_fields = ['name', 'shortname', "entity_type", "industry"]

    def get_queryset(self):
        queryset = super().get_queryset()
        for param in self.request.query_params:
            if param in self.search_fields:
                value = self.request.query_params[param]
                queryset = queryset.filter(**{param: value})

        return queryset


class ViewClients(APIView):
    def get(self, request):
        queryset = client.objects.all()
        serializer = ClientSerializer(queryset, many=True)
        responseData = serializer.data
        return Response(responseData, status=status.HTTP_200_OK)


class AddClients(APIView):
    def post(self, request):
        print("before", request.FILES)
        serializer = ClientSerializer(data=request.data)
        print("seralize", serializer)
        if serializer.is_valid():
            serializer.save()
            response = {"status": "success",
                        'message': 'Client saved successfully'}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {"status": "failed", "errors": serializer.errors}
            return Response(response)


class DeleteClient(APIView):
    def delete(self, request):
        clientID = request.data.get('clientid')
        if clientID is not None:
            try:
                record = client.objects.get(pk=clientID)
                record.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            except client.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UpdateClient(APIView):
    def put(self, request):
        try:
            print(request.data.keys())
            updateClient = client.objects.get(pk=request.data["id"])
        except updateClient.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ClientSerializer(updateClient, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
