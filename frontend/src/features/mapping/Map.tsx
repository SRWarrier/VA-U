import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Routing from "./Routing";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import "./maps.css";

interface MapComponentsProps {
  waypoints: LatLngExpression[][];
}

const MapComponent = ({ waypoints }: MapComponentsProps) => {
  const bounds = L.latLngBounds(waypoints);
  return (
    <MapContainer
      center={waypoints[0][0]}
      zoom={6}
      zoomControl={true}
      bounds={bounds}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing waypoints={waypoints} />
    </MapContainer>
  );
};

export default MapComponent;
