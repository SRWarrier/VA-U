import UserStat from "@screens/user/myPerformance";
import { ErrorPage } from "@pages/index";

const AnalyticsRoutes = {
  path: "analytics",
  errorElement: <ErrorPage />,
  children: [
    {
      path: "myperformance",
      element: <UserStat />,
    },
  ],
};

export { AnalyticsRoutes };
