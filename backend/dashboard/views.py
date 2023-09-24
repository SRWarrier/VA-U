from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
import json as js

from client.models import client


class ClientDashboard(APIView):

    def get(self, request):
        active_clients_count = client.objects.filter(status=1).count()
        suspended_clients_count = client.objects.filter(status=3).count()
        inactive_clients_count = client.objects.filter(status=2).count()
        total_client_count = sum(
            [active_clients_count, suspended_clients_count, inactive_clients_count])
        responseData = js.dumps(
            {
                "Active Clients": active_clients_count,
                "Inactive Clients": inactive_clients_count,
                "Suspended Clients": suspended_clients_count,
                "Total Clients": total_client_count
            }
        )
        return Response(responseData, status=status.HTTP_200_OK)
