import {
  ClientManager,
  ContractManager,
  DashBoard,
  ProjectManager,
  Reports,
} from "../screens/client";

import AddClientPage from "@screens/client/ClientManager/AddClient/addClientView";
import AddProject from "@screens/client/ProjectManager/AddProject/addProject";
import AddClientContract from "@screens/client/ContractManager/addClientContract/addClientContract";

const ClientPageRoutes = {
  path: "clients",
  children: [
    {
      path: "",
      element: <DashBoard />,
    },
    {
      path: "register",
      element: <ClientManager />,
    },
    {
      path: "projects",
      element: <ProjectManager />,
    },
    {
      path: "contracts",
      element: <ContractManager />,
    },
    {
      path: "reports",
      element: <Reports />,
    },
    {
      path: "register/addclient",
      element: <AddClientPage />,
    },
    {
      path: "projects/addproject",
      element: <AddProject />,
    },
    {
      path: "contracts/addcontract",
      element: <AddClientContract />,
    },
  ],
};

export { ClientPageRoutes };
