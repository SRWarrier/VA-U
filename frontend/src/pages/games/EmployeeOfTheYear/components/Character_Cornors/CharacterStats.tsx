import { Col, Row, Statistic } from "antd";

const CharacterStats = () => {
  const percentFormatter = (value: number) => `${value}%`;
  const currencyFormatter = (value: number) =>
    `₹ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  return (
    <Row gutter={24} justify="end" className="EOTY__character_stats">
      <Col span={10}>
        <Statistic
          title="Satisfaction"
          value={Math.round(Math.random() * 100)}
          formatter={percentFormatter}
          valueStyle={{ fontSize: "14px" }}
          style={{ justifyContent: "center", textAlign: "center" }}
        />
      </Col>
      <Col span={14}>
        <Statistic
          title="Receivable"
          value={Math.round(Math.random() * 100000)}
          formatter={currencyFormatter}
          valueStyle={{ fontSize: "14px" }}
          style={{ justifyContent: "center", textAlign: "center" }}
        />
      </Col>
    </Row>
  );
};

export default CharacterStats;
