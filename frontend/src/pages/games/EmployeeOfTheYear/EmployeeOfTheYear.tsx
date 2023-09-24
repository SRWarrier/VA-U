import { useState, useReducer } from "react";
import TaskmastersCorner from "./components/Character_Cornors/characterCorner";
import { Row, Col, Typography } from "antd";
import { TrophyOutlined } from "@ant-design/icons";
import Ticker from "./components/NewsTicker/NewsTicker";
import "./EmployeeOfTheYear.css";
import EOTM_StartScreen from "./components/screens/components/startscreen/startScreen";
import GameContext from "./gameContext";
import EOTM_Dashboard from "./components/Dashboard/External/EOTM_dashboard";
import EOTM_TripData from "./components/Dashboard/External/EOTM_TripsData";
import EOTM_Status from "./components/Dashboard/Internal/EOTM_InternalDashboard";
import EOTM_StatusData from "./components/Dashboard/Internal/EOTM_StatusData";
import { GameReducer } from "./gameReducer";
import { GameDefaults } from "./gameDefaults";

const { Title } = Typography;

const EmployeeOfTheYear = () => {
  const [status, dispatch] = useReducer(GameReducer, GameDefaults);
  const [startVisible, setStartVisible] = useState<boolean>(true);

  return (
    <GameContext.Provider value={{ status, dispatch }}>
      <EOTM_StartScreen setStartScreenVisibility={setStartVisible} />
      {!startVisible && (
        <>
          <Row>
            <Col span={6}>
              <TaskmastersCorner position="left" type="Client" />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Title level={5} style={{ margin: "2px" }}>
                      Employee of the Month {<TrophyOutlined />}
                    </Title>
                  </div>
                </Col>
                <Col span={24}>
                  <EOTM_Dashboard roundTime={15}></EOTM_Dashboard>
                  <EOTM_TripData></EOTM_TripData>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <TaskmastersCorner position="right" type="Vendor" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Ticker messages={status.news} />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <TaskmastersCorner position="left" type="Employee" />
            </Col>
            <Col span={12}>
              <EOTM_Status />
              <EOTM_StatusData></EOTM_StatusData>
            </Col>
            <Col span={6}>
              <TaskmastersCorner position="right" type="Finance" />
            </Col>
          </Row>
        </>
      )}
    </GameContext.Provider>
  );
};

export default EmployeeOfTheYear;
