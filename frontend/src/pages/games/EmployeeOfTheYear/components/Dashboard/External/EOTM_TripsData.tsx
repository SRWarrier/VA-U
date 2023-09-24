import { Table, Statistic } from "antd";
// import "./EOTM_TripsData.css";

const { Countdown } = Statistic;

const columns = [
  {
    title: "Client",
    dataIndex: "client",
    key: "client",
  },
  {
    title: "Vendor",
    dataIndex: "vendor",
    key: "vendor",
  },
  {
    title: "Vehicle",
    dataIndex: "vehicle",
    key: "vehicle",
  },
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate",
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
  },
  {
    title: "Profit",
    dataIndex: "profit",
    key: "profit",
  },
  {
    title: "TTC",
    dataIndex: "ttc",
    key: "ttc",
    width: 50,
    render: (endTime: number) => (
      <Countdown
        value={endTime}
        format="mm:ss"
        valueStyle={{ fontSize: "12px" }}
      />
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 120,
  },
];

const data = [
  {
    key: 1,
    client: "Delighted Kitchen",
    vendor: "Mayilvahanan",
    vehicle: "Tata Ace",
    rate: 12000,
    cost: 10000,
    profit: 2000,
    ttc: Date.now() + 2 * 36000,
    status: "running",
  },
  {
    key: 1,
    client: "Delighted Kitchen",
    vendor: "Mayilvahanan",
    vehicle: "Tata Ace",
    rate: 12000,
    cost: 10000,
    profit: 2000,
    ttc: Date.now() + 2 * 36000,
    status: "running",
  },
  {
    key: 1,
    client: "Delighted Kitchen",
    vendor: "Mayilvahanan",
    vehicle: "Tata Ace",
    rate: 12000,
    cost: 10000,
    profit: 2000,
    ttc: Date.now() + 2 * 36000,
    status: "running",
  },
  {
    key: 1,
    client: "Delighted Kitchen",
    vendor: "Mayilvahanan",
    vehicle: "Tata Ace",
    rate: 12000,
    cost: 10000,
    profit: 2000,
    ttc: Date.now() + 2 * 36000,
    status: "running",
  },
  {
    key: 1,
    client: "Delighted Kitchen",
    vendor: "Mayilvahanan",
    vehicle: "Tata Ace",
    rate: 12000,
    cost: 10000,
    profit: 2000,
    ttc: Date.now() + 2 * 36000,
    status: "running",
  },
  {
    key: 1,
    client: "Delighted Kitchen",
    vendor: "Mayilvahanan",
    vehicle: "Tata Ace",
    rate: 12000,
    cost: 10000,
    profit: 2000,
    ttc: Date.now() + 2 * 36000,
    status: "running",
  },
  {
    key: 1,
    client: "Delighted Kitchen",
    vendor: "Mayilvahanan",
    vehicle: "Tata Ace",
    rate: 12000,
    cost: 10000,
    profit: 2000,
    ttc: Date.now() + 2 * 36000,
    status: "running",
  },
  {
    key: 1,
    client: "Delighted Kitchen",
    vendor: "Mayilvahanan",
    vehicle: "Tata Ace",
    rate: 12000,
    cost: 10000,
    profit: 2000,
    ttc: Date.now() + 2 * 36000,
    status: "running",
  },
  {
    key: 1,
    client: "Delighted Kitchen",
    vendor: "Mayilvahanan",
    vehicle: "Tata Ace",
    rate: 12000,
    cost: 10000,
    profit: 2000,
    ttc: Date.now() + 2 * 36000,
    status: "running",
  },
  {
    key: 1,
    client: "Delighted Kitchen",
    vendor: "Mayilvahanan",
    vehicle: "Tata Ace",
    rate: 12000,
    cost: 10000,
    profit: 2000,
    ttc: Date.now() + 2 * 36000,
    status: "running",
  },
  {
    key: 1,
    client: "Delighted Kitchen",
    vendor: "Mayilvahanan",
    vehicle: "Tata Ace",
    rate: 12000,
    cost: 10000,
    profit: 2000,
    ttc: Date.now() + 2 * 36000,
    status: "running",
  },
];

const EOTM_TripData = () => {
  return (
    <Table
      dataSource={data}
      columns={columns}
      size="small"
      pagination={{ pageSize: 4, position: ["bottomCenter"] }}
      scroll={{ y: 155, x: "max-content" }}
    />
  );
};

export default EOTM_TripData;
