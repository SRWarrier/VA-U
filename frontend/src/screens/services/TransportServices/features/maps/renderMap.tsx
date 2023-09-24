import Routing from "./routing/routing";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useEffect, useState } from "react";
import { calculateEstimatedLocation } from "./routing/estimateLocation";
import truckIcon from "@assets/icons/truck.png";
import L, { LatLngExpression, latLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./maps.css";
const TruckIcon = new L.Icon({
  iconUrl: truckIcon,
  iconSize: [32, 32],
});

interface MapComponentProps {
  waypoints: LatLngExpression[][];
  starttime: Date;
  showlocation: boolean;
  setEstimatedLocation?: (location: LatLngExpression) => void;
}

const MapComponent = ({
  waypoints,
  starttime,
  showlocation,
  setEstimatedLocation,
}: MapComponentProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [coordinates, setCoordinates] = useState([]);
  const [routemap, setRoutemap] = useState([]);
  const bounds = L.latLngBounds(waypoints);
  const [routingStatus, setRoutingStatus] = useState(false);
  const [summary, setSummary] = useState([]);
  const [currentLocation, setCurrentLocation] = useState<LatLngExpression>(
    latLng(12.37, 73.22)
  );

  // Update Estimated Location every ten minutes
  useEffect(() => {
    if (showlocation) {
      const timer = setInterval(() => setCurrentTime(new Date()), 10000);
      return () => clearInterval(timer);
    }
  }, []);

  useEffect(() => {
    if (showlocation) {
      const newLocation = calculateEstimatedLocation(
        routemap,
        starttime,
        currentTime,
        coordinates
      );
      setCurrentLocation(newLocation || [0, 0]);
      setEstimatedLocation(newLocation);
    }
  }, [routemap, currentTime]);

  console.log("render", waypoints);

  return (
    <MapContainer
      center={currentLocation}
      zoom={6}
      zoomControl={true}
      bounds={bounds}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing
        waypoints={waypoints}
        setRouteMap={setRoutemap}
        setSummary={setSummary}
        setCoordinates={setCoordinates}
      />

      {showlocation && (
        <Marker position={currentLocation} icon={TruckIcon}>
          <Tooltip sticky={true} direction="bottom">
            Hello
          </Tooltip>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
