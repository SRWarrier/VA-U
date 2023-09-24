import {
  Roadways,
  Airways,
  Transport,
  Dashboard,
  DeliveryService,
  WarehouseService,
} from "../screens/services";

const ServiceRoutes = {
  path: "services",
  children: [
    {
      path: "",
      element: <Dashboard />,
    },
    {
      path: "transport",
      element: <Transport />,
    },
    {
      path: "roadways",
      element: <Roadways />,
    },
    {
      path: "airways",
      element: <Airways />,
    },
    {
      path: "delivery",
      element: <DeliveryService />,
    },
    {
      path: "warehouse",
      element: <WarehouseService />,
    },
  ],
};

export { ServiceRoutes };
