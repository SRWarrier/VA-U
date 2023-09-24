import { Descriptions, Table, Row, Col } from "antd";
import {
  User_PrimaryInfo,
  Performance,
  columns,
  data,
  Badges,
} from "./myPerformaceData";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const UserStat = () => {
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={3}>My Performace</Title>
          <Descriptions
            title="Primary"
            items={User_PrimaryInfo}
            layout="vertical"
            column={4}
          />
          <Title level={3}>Scorecard</Title>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            size="small"
            rowClassName="performance_scorecard__row"
          />
          <Descriptions
            title="Appreciations"
            items={Performance}
            layout="vertical"
          />
        </Col>
        <Col span={4}>
          <Descriptions
            title="Badges"
            items={Badges}
            layout="vertical"
            column={1}
          />
        </Col>
      </Row>
    </>
  );
};

export default UserStat;
