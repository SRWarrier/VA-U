import { Descriptions, Skeleton, Table } from "antd";
import { ScheduleProps } from "./tripExtendedView";

interface TripScheduleProps {
  tripScheduleDetails: ScheduleProps;
}

const TripSchedule = ({ tripScheduleDetails }: TripScheduleProps) => {
  if (!tripScheduleDetails) {
    return <Skeleton active />;
  }
  const {
    clientName,
    projectName,
    cityName,
    vehicleType,
    tripStartTime,
    containerType,
    tripType,
    VendorName,
    DriverName,
    VehicleNumber,
    Tourchpoints,
    haltings,
    breakdowns,
    runKilometer,
  } = tripScheduleDetails;

  const haltingsColumns = [
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "Duration", dataIndex: "duration", key: "location" },
  ];

  const breakdownsColumns = [
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "Duration", dataIndex: "location", key: "location" },
  ];
  return (
    <>
      <Descriptions title="Trip Schedule Details" column={3}>
        <Descriptions.Item label="Client">{clientName}</Descriptions.Item>
        <Descriptions.Item label="Project">{projectName}</Descriptions.Item>
        <Descriptions.Item label="City">{cityName}</Descriptions.Item>
        <Descriptions.Item label="Vehicle">{vehicleType}</Descriptions.Item>
        <Descriptions.Item label="Trip Start Time">
          {tripStartTime.toDateString()}
        </Descriptions.Item>
        <Descriptions.Item label="Container Type">
          {containerType}
        </Descriptions.Item>
        <Descriptions.Item label="Trip Type">{tripType}</Descriptions.Item>
        <Descriptions.Item label="Vendor">{VendorName}</Descriptions.Item>
        <Descriptions.Item label="Driver">{DriverName}</Descriptions.Item>
        <Descriptions.Item label="Vehicle Number">
          {VehicleNumber}
        </Descriptions.Item>
        <Descriptions.Item label="Touchpoints">
          {Tourchpoints}
        </Descriptions.Item>
        <Descriptions.Item label="Total Kilometer">
          {runKilometer}
        </Descriptions.Item>
      </Descriptions>
      <Table
        dataSource={haltings}
        columns={haltingsColumns}
        caption="Haltings"
        pagination={false}
      />
      <Table
        dataSource={breakdowns}
        columns={breakdownsColumns}
        caption="Breakdowns"
        pagination={false}
      />
    </>
  );
};

export default TripSchedule;
