import geocoder as gc
import re


def getOSMdata(address: str):
    data = gc.osm(address)
    if data:
        geojson = data.geojson
        features = geojson["features"][0]
        properties = features["properties"]
        response = prepareResponse(properties)
        return response
    return False


def prepareResponse(respData: dict):
    lat_long = [respData["lat"], respData["lng"]]
    address = respData["address"]
    loc_type = respData["type"]
    response = {"latlong": lat_long,
                "address": address,
                "type": loc_type}
    return response


def splitAddress(address: str):
    addressSplit = address.split(",")
    addressLen = len(addressSplit)
    for idx in range(addressLen):
        address = ",".join(addressSplit[idx:addressLen])
        response = getOSMdata(address)
        if response:
            return response
        if idx > 2:
            addressLen = addressLen[-3:]
    return False


def getPincode(address: str):
    PINCODE_PATTERN = "\d{6}"  # 000000
    pincode = re.search(PINCODE_PATTERN, address)
    if pincode:
        pincode = pincode.group()
        return pincode
    return False


def getLocationData(address: str):
    # specify to india
    address = ",".join([address, ",India"])
    try:
        response = splitAddress(address)
        if response:
            return response
        pincode = getPincode(address)
        if pincode:
            response = getOSMdata(pincode)
            if response:
                return response
    except IndexError:
        return False
    return False


def LocationfromLatLon(latitude, longitude):
    current_location = gc.osm([latitude, longitude], method="reverse")
    if current_location:
        location_address = current_location.current_result.address
        return location_address
    return "Location Unknown"
