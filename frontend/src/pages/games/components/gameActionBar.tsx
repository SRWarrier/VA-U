import { Row, Col, Space, Tooltip, Button } from "antd";
import { PlayCircleOutlined, OrderedListOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface GameActionBarProps {
  gamelink: string;
  leaderboardlink?: string;
}

const GameActionBar = ({
  gamelink,
  leaderboardlink = "",
}: GameActionBarProps) => {
  const navigate = useNavigate();
  return (
    <Row>
      <Space>
        <Col>
          <Tooltip title="Play Game" placement="bottom">
            <Button
              type="primary"
              size="large"
              shape="circle"
              icon={<PlayCircleOutlined />}
              onClick={() => navigate(gamelink)}
            />
          </Tooltip>
        </Col>
        <Col>
          <Tooltip title="Leaderboard" placement="bottom">
            <Button
              type="primary"
              size="large"
              shape="circle"
              icon={<OrderedListOutlined />}
              onClick={() => navigate(leaderboardlink)}
            />
          </Tooltip>
        </Col>
      </Space>
    </Row>
  );
};

export default GameActionBar;
