const getRandomCords = (touchpoints: number) => {
  const cordsArr = [];

  for (let n = 0; n < touchpoints; n++) {
    const latCords = Math.random() * (30.6 - 12.4) + 12.4;
    const longCords = Math.random() * (97.4 - 68.7) + 68.7;
    cordsArr.push([latCords, longCords]);
  }

  return cordsArr;
};

const getStartTime = (hours: number) => {
  const date = new Date();
  date.setHours(date.getHours() - hours);

  return date;
};

export const TripDetailsDemo = {
  schedule: {
    clientName: "Delightful Gourmet Private Limited",
    projectName: "Licious Hoskote",
    tripStartTime: getStartTime(0.2),
    cityName: "Bengaluru",
    vehicleType: "Mahendra Bolero",
    containerType: "Reefer",
    tripType: "Adhoc",
    tripRange: "Intercity",
    vendorName: "Suguna Logistics",
    driverName: "Kumaravel Sangameshwar",
    vehicleNumber: "KA 04 4523",
    estimatedTimeToReach: "12 Hours",
    totalTripTime: "24 Hours",
    tripStatus: "Running",
    currentLocation: "Chennai",
    tourchPoints: 2,
    haltings: [{ location: "Hosur Road", duration: "2 Hours" }],
    breakdowns: [],
    runKilometer: 230,
  },
  waypoints: getRandomCords(2),
};
