import { Card, Statistic, Row, Col, Space, Progress } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Countdown } = Statistic;

interface EOTMDashboardProps {
  roundTime: number;
}

const EOTM_Dashboard = ({ roundTime = 15 }: EOTMDashboardProps) => {
  const roundEndTime = Date.now() + roundTime * 60000;
  const totalRevenue = 2456000;
  const totalCost = 2345545;
  const profit = totalRevenue - totalCost;
  const profit_per = Math.round((profit / totalRevenue) * 100);

  return (
    <Card
      style={{
        borderRadius: 12,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        height: "120px",
      }}
    >
      <Row gutter={[16, 16]} align="middle">
        <Col span={3}>
          <Statistic title="Day" value={30} />
        </Col>
        <Col span={4}>
          <Statistic title="Revenue" value={totalRevenue} />
        </Col>
        <Col span={4}>
          <Statistic title="Cost" value={totalCost} />
        </Col>
        <Col span={4}>
          <Statistic title="Profit" value={profit} />
        </Col>
        <Col span={4}>
          <Statistic title="Profit %" value={profit_per} suffix="%" />
        </Col>
        <Col span={5}>
          <Space align="center" style={{ width: "100%" }}>
            <ClockCircleOutlined style={{ fontSize: 20, color: "#1890ff" }} />
            <Countdown
              title="Remaining Time"
              format="mm:ss"
              value={roundEndTime}
            />
          </Space>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Progress
            percent={Math.min(
              ((Date.now() - roundEndTime) / (roundTime * 60000)) * 100,
              100
            )}
            status="active"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default EOTM_Dashboard;
