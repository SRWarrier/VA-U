import type { ColumnsType } from "antd/es/table";

const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Address",
    dataIndex: "registered_office",
    key: "address",
  },
  {
    title: "PAN",
    dataIndex: "pan",
    key: "pan",
  },
];

export { columns };
