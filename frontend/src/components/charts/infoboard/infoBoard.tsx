import { Card, Space, Typography } from "antd";
import "./InfoBoard.css";

interface InfoBoardProps {
  title: string;
  value: string | number;
}

const { Title } = Typography;

const InfoBoard = ({ title, value }: InfoBoardProps) => {
  return (
    <Card className="info-board" bordered={false}>
      <Title level={4} className="info-board__title">
        {title}
      </Title>
      <Title level={2} className="info-board__value">
        {value}
      </Title>
    </Card>
  );
};

export default InfoBoard;
