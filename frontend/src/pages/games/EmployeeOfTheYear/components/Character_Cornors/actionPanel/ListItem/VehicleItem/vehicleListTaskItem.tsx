import { useState } from "react";
import { Card, Tooltip, Row, Col, Space } from "antd";
import {
  CommentOutlined,
  CloseOutlined,
  ThunderboltOutlined,
  BorderlessTableOutlined,
  RocketOutlined,
  CoffeeOutlined,
  HeartFilled,
} from "@ant-design/icons";
import "./vehicleListTaskItem.css";

interface TaskCardProps {
  vehicle: string;
  amount: number;
  available: number;
  quality: "good" | "moderate" | "bad";
  negotiable?: "Yes" | "No";
  onAccept: () => void;
  onNegotiation: (currentAmount: number, satisfaction: number) => void;
}

const getVehicleHealth = (health: string) => {
  switch (health) {
    case "bad":
      return { color: "red" };
    case "moderate":
      return { color: "yellow" };
    default:
      return { color: "green" };
  }
};

const TaskCard = ({
  vehicle,
  amount,
  available,
  quality,
  onAccept,
  onNegotiation,
  negotiable = "Yes",
}: TaskCardProps) => {
  const [showButtons, setShowButtons] = useState(false);

  const handleNegotiation = () => {
    onNegotiation(amount, 0.5);
  };

  return (
    <Card
      title={vehicle}
      size="small"
      style={{ width: "100%", height: "80px", padding: "2px" }}
      headStyle={{ minHeight: "2px", padding: "2px", margin: "0px" }}
      bodyStyle={{ padding: "2px" }}
      bordered={false}
      type="inner"
    >
      <Row gutter={32}>
        <Col>
          <div>
            <Tooltip title="Quote Amount" color="rgba(12,12,12,0.4)">
              {<BorderlessTableOutlined />} {amount}
            </Tooltip>
          </div>
        </Col>
        <Col>
          <div>
            <Tooltip title="Available" color="rgba(12,12,12,0.4)">
              <RocketOutlined /> {available}{" "}
            </Tooltip>
            <Tooltip title={`${quality} quality`} color="rgba(12,12,12,0.4)">
              <HeartFilled style={getVehicleHealth(quality)} />
            </Tooltip>
          </div>
        </Col>
        <Col>
          <div>
            <Tooltip title="Negotiable" color="rgba(12,12,12,0.4)">
              <CoffeeOutlined /> {negotiable}
            </Tooltip>
          </div>
        </Col>
      </Row>

      <div
        style={{
          display: "flex",
          padding: "2px",
          justifyContent: "center",
        }}
      >
        <Space direction="horizontal" size={30}>
          <Tooltip
            title="Decline Task"
            color="rgba(12,12,12,0.4)"
            placement="bottom"
          >
            <CloseOutlined style={{ color: "red" }} />
          </Tooltip>
          <Tooltip
            title="Deploy Vehicle"
            color="rgba(12,12,12,0.4)"
            placement="bottom"
          >
            <ThunderboltOutlined onClick={onAccept} />
          </Tooltip>
          <Tooltip
            title="Negotiate"
            color="rgba(12,12,12,0.4)"
            placement="bottom"
          >
            <CommentOutlined onClick={handleNegotiation} />
          </Tooltip>
        </Space>
      </div>
    </Card>
  );
};

export default TaskCard;
