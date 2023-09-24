import { useState } from "react";
import { Card, Button, Tooltip, Space } from "antd";
import { NodeIndexOutlined, ScheduleOutlined } from "@ant-design/icons";
import TripDetails from "./tripDetails";
import RouteMap from "../../features/maps/routemap";

interface ExtendedViewProps {
  tripData: TripDetailsProps;
}

interface TripDetailsProps {
  schedule: ScheduleProps;
  waypoints: WaypointsProps;
}

interface ScheduleProps {
  clientName: string;
  projectName: string;
  cityName: string;
  tripStartTime: Date;
  vehicleType: string;
  containerType: string;
  tripType: string;
  VendorName: string;
  DriverName: string;
  VehicleNumber: string;
  Tourchpoints: number;
  haltings: {}[];
  breakdowns: {}[];
  runKilometer: number;
}

interface WaypointsProps {
  waypoints: number[][];
}

const ExtendedView = ({ tripData }: ExtendedViewProps) => {
  const [toggleView, setToggleView] = useState<string>("schedule");

  const handleShowSchedule = () => {
    setToggleView("schedule");
  };

  const handleShowMap = () => {
    setToggleView("map");
  };
  return (
    <Card
      title="Trip Details"
      extra={
        <Space direction="horizontal" style={{ display: "flex" }}>
          <Tooltip title="Trip Detailed View">
            <Button
              icon={<ScheduleOutlined />}
              onClick={handleShowSchedule}
            ></Button>
          </Tooltip>
          <Tooltip title="Trip Map View">
            <Button
              icon={<NodeIndexOutlined />}
              onClick={handleShowMap}
            ></Button>
          </Tooltip>
        </Space>
      }
      style={{ width: "100%" }}
    >
      {toggleView === "schedule" ? (
        <TripDetails tripScheduleDetails={tripData.schedule} />
      ) : (
        <RouteMap tripdata={tripData} />
      )}
    </Card>
  );
};

export default ExtendedView;
export type { TripDetailsProps, ScheduleProps, WaypointsProps };
