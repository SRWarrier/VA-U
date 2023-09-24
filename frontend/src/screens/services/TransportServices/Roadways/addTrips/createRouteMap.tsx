import { createOperation } from "@api/apiRouters";

const RouteLocation = (locationPoints) => {
    setWaypoints([]);
    locationPoints.map((loc) =>
      createOperation({
        record: { address: loc },
        type: "latlong",
      })
        .then((response) => {
          const waypoint = response["latlong"];
          appendWaypoints(waypoint);
        })
        .catch((error) => {
          console.error("Error fetching waypoint:", error);
        })
    );
  }
};
