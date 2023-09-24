import Roadways from "../TransportServices/Roadways/Roadways";
import { LineChart } from "@components/charts";
import { Typography, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const TransportServices = () => {
  const navigate = useNavigate();
  const handleRoadTransport = () => {
    navigate("/wave/services/roadways");
  };
  const handleAirTransport = () => {
    navigate("/wave/services/air");
  };

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Title level={4} style={{ textAlign: "center" }}>
          Road Transport
        </Title>
        <LineChart />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <Button onClick={handleRoadTransport}>Go to page</Button>
        </div>
      </Col>
      <Col span={12}>
        <Title level={4} style={{ textAlign: "center" }}>
          Air Transport
        </Title>
        <LineChart />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <Link to="/services/roadways">
            <Button onClick={handleAirTransport}>Go to page</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default TransportServices;
