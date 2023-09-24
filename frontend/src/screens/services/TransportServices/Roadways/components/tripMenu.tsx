import { Typography, Button, Row, Col, Input, Tag, Space } from "antd";
import { useState } from "react";
import AddTrip from "../addTrips/addTrips";
import TripCounter from "./tripsCounter";

const { Title } = Typography;
const { Search } = Input;

const TripMenu = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Row>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Title level={3}>Active Trips</Title>
          <div className="tripsMenu__buttonContainer">
            <Space>
              <Button onClick={handleModalOpen} type="primary">
                Add Trips
              </Button>
              <Button>Trip History</Button>
            </Space>
          </div>
        </div>
      </Row>

      <Row justify="center">
        <Col span={20}>
          <Search placeholder="Search Trips.." />
        </Col>
      </Row>

      <Row justify="center" gutter={20}>
        <Col span={22}>
          <TripCounter />
        </Col>
      </Row>
      <AddTrip isopen={isOpen} setOpen={setOpen}></AddTrip>
    </>
  );
};

export default TripMenu;
