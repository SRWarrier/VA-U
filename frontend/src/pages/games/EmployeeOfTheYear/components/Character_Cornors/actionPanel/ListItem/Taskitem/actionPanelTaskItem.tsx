import { useState, useContext } from "react";
import {
  Card,
  Tooltip,
  Row,
  Col,
  Statistic,
  Space,
  CountdownProps,
} from "antd";
import {
  CommentOutlined,
  CloseOutlined,
  ThunderboltOutlined,
  BorderlessTableOutlined,
  ClockCircleOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import "./actionPanelTaskItem.css";
import GameContext, {
  GameContextType,
} from "@pages/games/EmployeeOfTheYear/gameContext";
import { valueType } from "antd/es/statistic/utils";

const { Countdown } = Statistic;
interface TaskCardProps {
  vehicle: string;
  amount: number;
  time: number;
  acceptTime: number;
  negotiable?: "Yes" | "No";
  onAccept: () => void;
  onNegotiation: (currentAmount: number, satisfaction: number) => void;
}

const TaskCard = ({
  vehicle,
  amount,
  time,
  acceptTime,
  onAccept,
  onNegotiation,
  negotiable = "Yes",
}: TaskCardProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [remainingTime, setRemainingTime] = useState(acceptTime);
  const [fontStyle, setFontStyle] = useState({
    fontSize: "10px",
    color: "white",
  });
  const { status, dispatch } = useContext(GameContext) as GameContextType;

  const handleNegotiation = () => {
    onNegotiation(amount, 0.5);
  };

  const changeClosingToRed: CountdownProps["onChange"] = (val) => {
    const secondsRemaining = (val as number) / 1000;
    if (secondsRemaining === 10) {
      dispatch({
        type: "add_news",
        payload: {
          newsid: status.news.length + 1,
          message: "An offer is about to expire.",
          type: "negative",
        },
      });
      setFontStyle({ fontSize: "10px", color: "red" });
    }
  };

  return (
    <Card
      title={vehicle}
      size="small"
      extra={
        <Countdown
          value={Date.now() + acceptTime * 60000}
          format="mm:ss"
          onFinish={() => setShowButtons(true)}
          onChange={changeClosingToRed}
          valueStyle={fontStyle}
        />
      }
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
            <Tooltip title="Required Time" color="rgba(12,12,12,0.4)">
              <ClockCircleOutlined /> {time}
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
