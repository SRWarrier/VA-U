interface RoutingInstruction {
  time: number; // Use number for time in seconds
  index: number;
}

interface Coordinate {
  lat: number;
  lng: number;
}

const calculateEstimatedLocation = (
  routingInstructions: RoutingInstruction[],
  startTime: Date,
  currentTime: Date,
  coordinates: Coordinate[]
) => {
  if (!routingInstructions || routingInstructions.length === 0) {
    return null;
  }

  const startTimeInSeconds = Math.floor(startTime.getTime() / 1000);

  for (let i = 0; i < routingInstructions.length; i++) {
    const instruction = routingInstructions[i];
    const nextInstruction = routingInstructions[i + 1];
    const { time, index } = instruction;

    const startPoint = coordinates[index];
    const endPoint = coordinates[nextInstruction?.index || index];

    const instructionTimeInSeconds = time + startTimeInSeconds;
    const nextInstructionTimeInSeconds =
      (routingInstructions[i + 1]?.time || time) + startTimeInSeconds;

    const currentTimeInSeconds = Math.floor(currentTime.getTime() / 1000);

    if (
      currentTimeInSeconds >= instructionTimeInSeconds &&
      currentTimeInSeconds < nextInstructionTimeInSeconds
    ) {
      const timeDiff = nextInstructionTimeInSeconds - instructionTimeInSeconds;
      const currentTimeDiff = currentTimeInSeconds - instructionTimeInSeconds;
      const progressRatio = currentTimeDiff / timeDiff;

      const estimatedLat =
        startPoint.lat + (endPoint.lat - startPoint.lat) * progressRatio;
      const estimatedLng =
        startPoint.lng + (endPoint.lng - startPoint.lng) * progressRatio;
      return [estimatedLat, estimatedLng];
    }
  }

  const lastInstruction = routingInstructions[routingInstructions.length - 1];
  const lastCoordinate = coordinates[lastInstruction?.index || 0];
  const { lat, lng } = lastCoordinate;
  return [lat, lng];
};

export { calculateEstimatedLocation };
