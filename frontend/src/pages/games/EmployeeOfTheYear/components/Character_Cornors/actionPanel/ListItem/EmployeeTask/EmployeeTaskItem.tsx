import { useState, useContext } from "react";
import {
  Card,
  Tooltip,
  Row,
  Col,
  Space,
  Statistic,
  CountdownProps,
} from "antd";
import {
  CommentOutlined,
  CloseOutlined,
  ThunderboltOutlined,
  BorderlessTableOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import GameContext, {
  GameContextType,
} from "@pages/games/EmployeeOfTheYear/gameContext";
import "./vehicleListTaskItem.css";

const { Countdown } = Statistic;

interface TaskCardProps {
  taskid: number;
  taskTitle: string;
  charcater: string;
  expectedBenefit: number;
  time: number;
  onAccept: () => void;
  onNegotiation: (currentAmount: number, satisfaction: number) => void;
}

const EmployeeTaskCard = ({
  taskid,
  taskTitle,
  charcater,
  expectedBenefit,
  time,
  onAccept,
  onNegotiation,
}: TaskCardProps) => {
  const [showButtons, setShowButtons] = useState(false);

  const handleNegotiation = () => {
    onNegotiation(500, 0.5);
  };

  const { status, dispatch } = useContext(GameContext) as GameContextType;
  return (
    <Card
      title={taskTitle}
      size="small"
      extra={
        <Countdown
          value={Date.now() + time * 60000}
          format="mm:ss"
          onFinish={() => setShowButtons(true)}
          valueStyle={{ fontSize: "10px" }}
        />
      }
      style={{ width: "100%", height: "80px", padding: "0px" }}
      headStyle={{ minHeight: "2px", padding: "2px", margin: "0px" }}
      bodyStyle={{ padding: "2px" }}
      bordered={false}
      type="inner"
    >
      <Row
        gutter={32}
        style={{
          justifyContent: "space-around",
        }}
      >
        <Col style={{ margin: "0px", padding: "0px" }}>
          <div>
            <Tooltip title="Character" color="rgba(12,12,12,0.4)">
              {<BorderlessTableOutlined />} {charcater}
            </Tooltip>
          </div>
        </Col>
        <Col style={{ margin: "0px", padding: "0px" }}>
          <div>
            <Tooltip title="Benefit" color="rgba(12,12,12,0.4)">
              <RocketOutlined /> {expectedBenefit}
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

export default EmployeeTaskCard;
