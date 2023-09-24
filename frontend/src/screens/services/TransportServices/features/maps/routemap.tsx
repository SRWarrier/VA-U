import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";
import "./maps.css";
import Route from "./routing/routing";
import TripMapSummary from "./components/tripMapSummary";
import { calculateEstimatedLocation } from "./routing/estimateLocation";
import truckIcon from "@assets/icons/truck.png";
import { TripDetailsProps } from "../../Roadways/components/tripExtendedView";
import { getLocationAddressFromLatLon } from "./routing/getLocationAddressFromLatLon";

interface RenderMapProps {
  tripdata: TripDetailsProps;
}

const TruckIcon = new L.Icon({
  iconUrl: truckIcon,
  iconSize: [32, 32],
});

const RouteMap = ({ tripdata }: RenderMapProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [estimatedLocation, setEstimatedLocation] = useState([0, 0]);
  const [estimatedAddress, setEstimatedAddress] = useState("");
  const [summary, setSummary] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [routemap, setRoutemap] = useState([]);
  const waypoints = tripdata.waypoints;
  const bounds = L.latLngBounds(waypoints);
  const { schedule } = tripdata;
  const { tripStartTime } = schedule;

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const newLocation = calculateEstimatedLocation(
      routemap,
      tripStartTime,
      currentTime,
      coordinates
    );
    setEstimatedLocation(newLocation || [0, 0]);

    const newLocationAddress = async () => {
      const address = await getLocationAddressFromLatLon(
        newLocation![0],
        newLocation![1]
      );
      setEstimatedAddress(address);
    };
    newLocationAddress();
  }, [routemap, currentTime]);

  const tripschedule = {
    ...schedule,
    currentLocation: estimatedAddress,
  };
  return (
    <div>
      <MapContainer
        center={estimatedLocation}
        zoom={6}
        zoomControl={true}
        bounds={bounds}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Route
          waypoints={waypoints}
          setRouteMap={setRoutemap}
          setSummary={setSummary}
          setCoordinates={setCoordinates}
        />
        <Marker position={estimatedLocation} keepAtCenter icon={TruckIcon}>
          <Tooltip sticky={true} direction="bottom">
            Hello
          </Tooltip>
        </Marker>
      </MapContainer>
      <TripMapSummary TripSummary={tripschedule}></TripMapSummary>
    </div>
  );
};

export default RouteMap;
