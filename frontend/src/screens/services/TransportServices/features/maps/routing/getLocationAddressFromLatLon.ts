import { createOperation } from "@api/apiRouters";

const getLocationAddressFromLatLon = async (lat: number, lng: number) => {
  const address = await createOperation({
    record: { lat: lat, lon: lng },
    type: "latlongadd",
  });
  return address;
};

export { getLocationAddressFromLatLon };
