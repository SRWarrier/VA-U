import { useState } from "react";
import { Row, Col } from "antd";
import TripMenu from "./components/tripMenu";
import ActiveTripsList from "./components/activeTrips";
import TripDetailsView, {
  TripDetailsProps,
} from "./components/tripExtendedView";
//import "./Roadways.css";

const Roadways = () => {
  const [details, setDetails] = useState<TripDetailsProps>();
  return (
    <Row gutter={24}>
      <Col span={10}>
        <TripMenu />
        <ActiveTripsList getDetails={setDetails} />
      </Col>
      <Col span={14}>{details && <TripDetailsView tripData={details} />}</Col>
    </Row>
  );
};

export default Roadways;

// const pinLocation: [number, number] = [77.6378911, 12.9162419];

// return <RenderMap />;
