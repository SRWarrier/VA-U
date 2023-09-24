import { ColumnsType } from "antd/es/table";
import { Tag } from "antd";

const columns: ColumnsType<any> = [
  {
    title: "Invoice No",
    dataIndex: "invoice_no",
    key: "invoice_no",
  },
  {
    title: "Invoice Date",
    dataIndex: "invoice_date",
    key: "invoice_date",
  },
  {
    title: "Project Name",
    dataIndex: "project_name",
    key: "project_name",
  },
  {
    title: "Taxable Value",
    dataIndex: "taxable_value",
    key: "taxable_value",
  },
  {
    title: "Tax Value",
    dataIndex: "tax_value",
    key: "tax_value",
  },
  {
    title: "Invoice Value",
    dataIndex: "invoice_value",
    key: "invoice_value",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color;
      let text;
      switch (status) {
        case "Revised":
          color = "orange";
          text = "Revised";
          break;
        case "Active":
          color = "green";
          text = "Active";
          break;
        case "Cancelled":
          color = "red";
          text = "Cancelled";
          break;
        default:
          color = "default";
          text = "Unknown";
      }

      return <Tag color={color}>{text}</Tag>;
    },
  },
];

export { columns };
