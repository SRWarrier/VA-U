import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { LatLngExpression } from "leaflet";

interface RouterProps {
  waypoints: LatLngExpression[][];
  setSummary: (summary: string) => void;
  setRouteMap: (routeMap: string[]) => void;
  setCoordinates: (coordinates: string[]) => void;
}

const buildWaypoints = (waypoints: LatLngExpression[]) => {
  return waypoints.map((wpt) => L.latLng(wpt[0], wpt[1]));
};

const createRoutingMachineLayer = ({
  waypoints,
  setSummary,
  setRouteMap,
  setCoordinates,
}: RouterProps) => {
  const routingControl = L.Routing.control({
    waypoints: buildWaypoints(waypoints),
    lineOptions: {
      styles: [{ color: "blue", weight: 4, className: "animate" }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  routingControl.on("routesfound", function (e) {
    const summary = e.routes[0].summary;
    const routeMap = e.routes[0].instructions;
    const coordinates = e.routes[0].coordinates;
    setSummary(summary);
    setRouteMap(routeMap);
    setCoordinates(coordinates);
  });

  return routingControl;
};

const RoutingControls = createControlComponent(createRoutingMachineLayer);

export default RoutingControls;
