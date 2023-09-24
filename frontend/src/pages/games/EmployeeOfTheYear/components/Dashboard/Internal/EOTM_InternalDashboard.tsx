import { Card, Statistic, Row, Col } from "antd";

const EOTM_Status = () => {
  const totalReceivable = 2456000;
  const totalPayable = 2345545;
  const FundAvailable = 3436824;
  const WorkingCapital = (
    ((totalReceivable - totalPayable) * 30) /
    totalReceivable
  ).toFixed(2);

  return (
    <Card
      style={{
        borderRadius: 12,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        height: "100px",
      }}
    >
      <Row
        gutter={[16, 16]}
        align="middle"
        style={{ justifyContent: "space-around" }}
      >
        <Col span={4}>
          <Statistic title="Receivable" value={totalReceivable} />
        </Col>
        <Col span={4}>
          <Statistic title="Payable" value={totalPayable} />
        </Col>
        <Col span={4}>
          <Statistic title="Fund Available" value={FundAvailable} />
        </Col>
        <Col span={4}>
          <Statistic
            title="Working Capital"
            value={WorkingCapital}
            suffix="Days"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default EOTM_Status;
