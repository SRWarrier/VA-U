import { Card, Row, Col, Descriptions, Tag } from "antd";

interface TripSummary {
  vehicleNumber: string;
  vehicleType: string;
  driverName: string;
  tripStartTime: Date;
  estimatedTimeToReach: string;
  totalTripTime: string;
  tripStatus: string;
  currentLocation: string;
  touchPoints: string;
}

interface TripSummaryProps {
  TripSummary: TripSummary;
}

const TripMapSummary = ({ TripSummary }: TripSummaryProps) => {
  const {
    vehicleNumber,
    vehicleType,
    driverName,
    tripStartTime,
    estimatedTimeToReach,
    totalTripTime,
    tripStatus,
    currentLocation,
    touchPoints,
  } = TripSummary;

  let statusColor: string;
  switch (tripStatus) {
    case "Running":
      statusColor = "green";
      break;
    case "Halting":
      statusColor = "blue";
      break;
    case "Breakdown":
      statusColor = "red";
      break;
    default:
      statusColor = "green";
  }

  const tripStartTimeOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formattedTripStartTime = tripStartTime.toLocaleString(
    undefined,
    tripStartTimeOptions
  );

  return (
    <Card title={null} size="small">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Descriptions
            column={1}
            size="small"
            title="Vehicle Details"
            layout="horizontal"
            contentStyle={{ padding: 0, margin: 0 }}
          >
            <Descriptions.Item label="Vehicle Number">
              {vehicleNumber}
            </Descriptions.Item>
            <Descriptions.Item label="Vehicle Type">
              {vehicleType}
            </Descriptions.Item>
            <Descriptions.Item label="Driver Name">
              {driverName}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col xs={24} sm={8}>
          <Descriptions
            column={1}
            size="small"
            title="Trip Schedule"
            layout="horizontal"
            contentStyle={{ padding: 0, margin: 0 }}
          >
            <Descriptions.Item label="Start Time">
              {formattedTripStartTime}
            </Descriptions.Item>
            <Descriptions.Item label="Estimated Arrival Time">
              {estimatedTimeToReach}
            </Descriptions.Item>
            <Descriptions.Item label="Total Trip Time">
              {totalTripTime}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col xs={24} sm={8}>
          <Descriptions
            column={1}
            size="small"
            title="Status"
            layout="horizontal"
            contentStyle={{ padding: 0, margin: 0 }}
          >
            <Descriptions.Item label="Status">
              <Tag color={statusColor}>{tripStatus}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Current Location">
              {currentLocation}
            </Descriptions.Item>
            <Descriptions.Item label="Touch Points">
              {touchPoints}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Card>
  );
};

export default TripMapSummary;
