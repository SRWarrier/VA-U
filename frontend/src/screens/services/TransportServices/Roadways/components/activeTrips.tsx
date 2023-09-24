import { useContext } from "react";
import { List, Col, Row } from "antd";
import { TripsData } from "../data/tripsData";
import TripCard from "./tripCard";

interface ActiveTripsProps {
  getDetails: (tripdetails: any) => void;
}

const ActiveTripsList = ({ getDetails }: ActiveTripsProps) => {
  return (
    <Row>
      <Col
        span={24}
        style={{ padding: "10px", overflow: "scroll", height: "70vh" }}
      >
        <List
          itemLayout="vertical"
          size="large"
          dataSource={TripsData}
          renderItem={(trip) => {
            const id = trip.tripid;
            return (
              <List.Item key={id}>
                <TripCard
                  tripid={trip.tripid}
                  tripETA={trip.tripETA}
                  tripStart={trip.tripStart}
                  tripVehicle={trip.tripVehicle}
                  tripStatus={trip.tripStatus}
                  getDetails={getDetails}
                />
              </List.Item>
            );
          }}
        ></List>
      </Col>
    </Row>
  );
};

export default ActiveTripsList;
