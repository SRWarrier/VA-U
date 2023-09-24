from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, login
from rest_framework import filters, generics
from .serializer import LoginResponseSerializer, UserSerializer
from .models import user
from rest_framework import status


@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request, user)
        serializer = LoginResponseSerializer(user)
        return Response(serializer.data, status=200)
    else:
        return Response({'message': 'Invalid credentials.'}, status=400)


class FilterUser(generics.ListAPIView):
    queryset = user.objects.all()
    serializer_class = UserSerializer

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


class ViewUser(APIView):
    def get(self, request):
        queryset = user.objects.all()
        serializer = UserSerializer(queryset, many=True)
        responseData = serializer.data
        return Response(responseData, status=status.HTTP_200_OK)


class AddUser(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = {"status": "success",
                        'message': 'User created successfully', 'id': user.id}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {"status": "failed", "errors": serializer.errors}
            return Response(response)


class DeleteUser(APIView):
    def delete(self, request):
        clientID = request.data.get('clientid')
        if clientID is not None:
            try:
                record = user.objects.get(pk=clientID)
                record.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            except user.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UpdateUser(APIView):
    def put(self, request):
        try:
            print(request.data.keys())
            updateClient = user.objects.get(pk=request.data["id"])
        except UpdateUser.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(updateClient, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
