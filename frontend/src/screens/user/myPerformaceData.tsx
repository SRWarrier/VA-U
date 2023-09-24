import { DescriptionsProps, Tag, Image } from "antd";

const User_PrimaryInfo: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "Name",
    children: "Sarath Warrier",
    span: 1,
  },
  {
    key: "2",
    label: "Reporting Manager",
    children: "Sarath Warrier",
    span: 1,
  },
  {
    key: "3",
    label: "Designation",
    children: "Supervisor",
    span: 1,
  },
];

const Performance: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "Last Audit",
    children: "28th August 2023",
  },
  {
    key: "2",
    label: "Appreciations",
    children: "4",
  },
  {
    key: "3",
    label: "Claps",
    children: "5",
  },
];

const columns = [
  {
    title: "Criteria",
    dataIndex: "criteria",
    key: "criteria",
    render: (text) => <h4>{text}</h4>,
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
    render: (value) => <Tag color={value >= 80 ? "green" : "red"}>{value}</Tag>,
  },
  {
    title: "Baseline",
    dataIndex: "baseline",
    key: "baseline",
    render: (value) => <Tag color="green">{value}</Tag>,
  },
];

const data = [
  {
    key: "1",
    criteria: "App Usage",
    score: 90,
    baseline: 95,
  },
  {
    key: "2",
    criteria: "On time delivery",
    score: 87,
    baseline: 80,
  },
  {
    key: "3",
    criteria: "Data Completeness",
    score: 70,
    baseline: 90,
  },
  {
    key: "4",
    criteria: "Flagged Event",
    score: 2,
    baseline: 3,
  },
];
const Badges = [
  {
    key: "1",
    children: (
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Image
          src="\badges\supervisor\supreme.png"
          style={{ width: "150px", height: "150px" }}
        ></Image>
      </div>
    ),
  },
];

export { columns, data, User_PrimaryInfo, Performance, Badges };
