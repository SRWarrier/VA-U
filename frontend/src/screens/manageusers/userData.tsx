import { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { returnOperation } from "@api/apiRouters"; // Import the API function from the separate file

interface DataType {
  key: string;
  name: string;
  address: number;
  pan: string;
}

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
];

const useData = () => {
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await returnOperation({ type: "user" });
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      console.error(error);
      return [];
    }
  };

  return { isLoading, fetchData };
};

export { columns, useData };
