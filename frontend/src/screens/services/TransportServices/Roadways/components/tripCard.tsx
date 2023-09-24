import { useContext } from "react";
import { Card, Tag, Row, Col, Typography } from "antd";
import { TripDetailsDemo } from "./tripDetailsDemo";
import { TripDetailsContext } from "@context/dataContexts";

const { Text } = Typography;

export interface TripProps {
  tripid: string;
  tripVehicle: string;
  tripStart: string;
  tripETA: string;
  tripStatus: string;
  getDetails: (details: any) => void;
}

const TripCard = ({
  tripid,
  tripVehicle,
  tripStart,
  tripETA,
  tripStatus,
  getDetails,
}: TripProps) => {
  const tripContext = useContext(TripDetailsContext);
  const handleClick = () => {
    getDetails(TripDetailsDemo);
  };
  return (
    <Card
      title={tripid}
      extra={
        <Tag
          color={
            tripStatus === "Breakdown"
              ? "volcano"
              : tripStatus === "Halting"
              ? "blue"
              : "green"
          }
        >
          {tripStatus}
        </Tag>
      }
      onClick={handleClick}
      hoverable
      size="small"
    >
      <Card.Meta style={{ width: "300px" }} />
      <Row>
        <Col span={12}>
          <Text strong>Project</Text>
        </Col>
        <Col span={12}>
          <Text strong>Vendor</Text>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Text>Licious Hoskote-BLR-Bengaluru-DELI</Text>
        </Col>
        <Col span={12}>
          <Text>QBT Logistics Private Limited</Text>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Text strong>Trip Start</Text>
        </Col>
        <Col span={12}>
          <Text strong> Driver Name</Text>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Text> {tripStart}</Text>
        </Col>
        <Col span={12}>
          <Text>{tripStatus}</Text>
        </Col>
      </Row>
      <Row justify="space-evenly">
        <Col span={12}>
          <Text strong>Estimated TTC</Text>
        </Col>
        <Col span={12}>
          <Text strong>Vehicle Type</Text>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Text>{tripETA}</Text>
        </Col>
        <Col span={12}>
          <Text>{tripVehicle}</Text>
        </Col>
      </Row>
    </Card>
  );
};

export default TripCard;
