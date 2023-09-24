import { ColumnsType } from "antd/es/table";

const columns: ColumnsType<any> = [
  {
    title: "Contract ID",
    dataIndex: "contract_id",
    key: "contract_id",
  },
  {
    title: "Project",
    dataIndex: "project",
    key: "project",
  },
  {
    title: "Service Type",
    dataIndex: "service_type",
    key: "service_type",
  },
];

export { columns };
