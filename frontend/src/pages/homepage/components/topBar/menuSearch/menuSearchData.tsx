import { ClientPageRoutes } from "@routes/ClientPageRoutes";
import { FinancePageRoutes } from "@routes/FinancePageRoutes";
import { ServiceRoutes } from "@routes/ServicePageRoutes";
import { AnalyticsRoutes } from "@routes/AnalyticsRoutes";

const routes = [
  ClientPageRoutes,
  FinancePageRoutes,
  ServiceRoutes,
  AnalyticsRoutes,
];

interface MenuSearchDataProps {
  label: string;
  options?: {
    value: string;
    label: string;
    path: string;
  }[];
}

const MenuSearchData = (): MenuSearchDataProps[] => {
  const MenuSearchItems: MenuSearchDataProps[] = routes.map((route) => {
    return {
      label: route.path,
      options: route.children
        .filter((child) => child.path.length > 0)
        .map((child) => ({
          value: child.path.split("/").slice(-1)[0],
          label: child.path.split("/").slice(-1)[0],
          path: child.path,
        })),
    };
  });
  const filteredMenuSearchItems = MenuSearchItems.filter(
    (item) => item.label && item.options && item.options.length > 0
  );

  return filteredMenuSearchItems;
};

export default MenuSearchData;
export type { MenuSearchDataProps };
