import { useState } from "react";
import type { ColumnsType } from "antd/es/table";
// import getProjectList from "../../../services/getProjectList";
import { returnOperation } from "../../../api/apiRouters";
import { Tag } from "antd";

interface DataType {
  key: string;
  name: string;
  client: number;
  city: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Client",
    dataIndex: "client",
    key: "client",
  },
  {
    title: "Hub",
    dataIndex: "hub",
    key: "hub",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color;
      let text;
      switch (status) {
        case "Suspended":
          color = "orange";
          text = "Suspended";
          break;
        case "Active":
          color = "green";
          text = "Active";
          break;
        case "Inactive":
          color = "red";
          text = "Inactive";
          break;
        default:
          color = "default";
          text = "Unknown";
      }

      return <Tag color={color}>{text}</Tag>;
    },
  },
];

const useData = () => {
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await returnOperation({ type: "project" });
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
