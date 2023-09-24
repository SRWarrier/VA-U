from django.shortcuts import render
from .functions.getLatLongFromAdd import getLocationData, LocationfromLatLon
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
import json


class GetLocationData(APIView):
    def post(self, request):
        respData = request.data
        address = respData["address"]
        addressData = getLocationData(address)
        if addressData:
            return Response(addressData, status=status.HTTP_200_OK)
        else:
            response = {"status": "failed",
                        "errors": "invalid addressess or not found"}
            return Response(response)


class GetLocationfromLatLon(APIView):
    def post(self, request):
        respData = request.data
        latitude = respData["lat"]
        longitude = respData["lon"]
        addressData = LocationfromLatLon(latitude, longitude)
        if addressData:
            return Response(addressData, status=status.HTTP_200_OK)
        else:
            response = {"status": "failed",
                        "errors": "invalid addressess or not found"}
            return Response(response)
