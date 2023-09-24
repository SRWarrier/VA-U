import { LoginPage, HomePage, Admin, ErrorPage, Game } from "../pages";
import { ClientPageRoutes } from "./ClientPageRoutes";
import { MySpaceRoute } from "./MySpaceRoutes";
import { ServiceRoutes } from "./ServicePageRoutes";
import { FinancePageRoutes } from "./FinancePageRoutes";
import { GamePageRoutes } from "./GamePageRoutes";
import { UserRoutes } from "./UserPageRoutes";
import Playground from "@pages/playground/Playground";
import { AnalyticsRoutes } from "./AnalyticsRoutes";
const navlinks = [
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/wave",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      MySpaceRoute,
      ClientPageRoutes,
      ServiceRoutes,
      FinancePageRoutes,
      UserRoutes,
      AnalyticsRoutes,
    ],
  },
  {
    path: "/game",
    element: <Game />,
    errorElement: <ErrorPage />,
    children: [GamePageRoutes],
  },
  {
    path: "/playground",
    element: <Playground />,
    errorElement: <ErrorPage />,
  },
];

export { navlinks };
