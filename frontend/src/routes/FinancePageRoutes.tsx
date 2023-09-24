import { InvoiceManager, Dashboard, AddInvoice } from "../screens/finance";

const FinancePageRoutes = {
  path: "finance",
  children: [
    {
      path: "",
      element: <Dashboard />,
    },
    {
      path: "invoicemanager",
      element: <InvoiceManager />,
    },
    {
      path: "invoicemanager/addinvoice",
      element: <AddInvoice />,
    },
  ],
};

export { FinancePageRoutes };
