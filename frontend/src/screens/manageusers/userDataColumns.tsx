import type { ColumnsType } from "antd/es/table";

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: "Employee ID",
    dataIndex: "employee_id",
    key: "employee_id",
  },
  {
    title: "Role",
    dataIndex: "userrole",
    key: "userrole",
  },
  {
    title: "HUB",
    dataIndex: "userhub",
    key: "userhub",
  },
];

export { columns };
