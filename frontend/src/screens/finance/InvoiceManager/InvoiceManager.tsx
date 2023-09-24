import DataTable from "@features/createTable/DataTable";
import { columns } from "./InvoiceManagerTableColumns";

const InvoiceManager = () => {
  return (
    <DataTable
      datasource={[{}]}
      tableColumns={columns}
      addItemLink="addinvoice"
    />
  );
};

export default InvoiceManager;
