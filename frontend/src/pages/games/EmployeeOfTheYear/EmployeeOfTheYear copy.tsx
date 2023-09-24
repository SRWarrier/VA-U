import { useState, useReducer } from "react";
import TaskmastersCorner from "./components/Character_Cornors/characterCorner";
import { Row, Col, Typography } from "antd";
import { TrophyOutlined } from "@ant-design/icons";
import Ticker from "./components/NewsTicker/NewsTicker";
import "./EmployeeOfTheYear.css";
import EOTM_StartScreen from "./components/screens/components/startscreen/startScreen";
import {
  ClientDataType,
  VendorDataType,
  EmployeeDataType,
  FinanceDataType,
} from "./data/EOTM_types/CharacterDataTypes";
import GameContext from "./gameContext";
import EOTM_Dashboard from "./components/Dashboard/External/EOTM_dashboard";
import EOTM_TripData from "./components/Dashboard/EOTM_TripsData";
import { GameReducer } from "./gameReducer";
import { GameDefaults } from "./gameDefaults";

const { Title } = Typography;

const messages = [
  {
    message: "There has been an accident near Rastha Road. Expect delay!",
    type: "incident",
  },
  {
    message: "Client has put up a requirement for Tata Ace Vehicle.",
    type: "request",
  },
  { message: "Client has just made a payment.Hurray!!", type: "positive" },
  {
    message: "Vendor has denied new vehicle unless payment settled.",
    type: "negative",
  },
];

const EmployeeOfTheYear = () => {
  const [status, dispatch] = useReducer(GameReducer, GameDefaults);
  const [updates, setupdates] = useState<string[]>([]);
  const [clients, setClients] = useState<ClientDataType[]>([]);
  const [vendors, setVendors] = useState<VendorDataType[]>([]);
  const [employees, setEmployees] = useState<EmployeeDataType[]>([]);
  const [finance, setFinance] = useState<FinanceDataType[]>([]);
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [startVisible, setStartVisible] = useState<boolean>(true);
  const [onScreenClient, setOnScreenClient] = useState<ClientDataType>();
  const [onScreenVendor, setOnScreenVendor] = useState<VendorDataType>();
  const [onScreenEmployee, setOnScreenEmployee] = useState<EmployeeDataType>();

  const addClient = (client: ClientDataType) => {
    setClients((prevClients) => [...prevClients, client]);
  };

  const addVendor = (vendor: VendorDataType) => {
    setVendors((prevVendors) => [...prevVendors, vendor]);
  };

  const addEmployee = (employee: EmployeeDataType) => {
    setEmployees((prevEmployee) => [...prevEmployee, employee]);
  };

  const addDay = (Day: number) => {
    setCurrentDay((prevDay) => prevDay + 1);
  };

  const updateClient = (updatedClient: ClientDataType) => {
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    );
  };

  return (
    <GameContext.Provider
      value={{
        clients,
        vendors,
        employees,
        finance,
        currentDay,
        updates,
        onScreenClient,
        onScreenVendor,
        onScreenEmployee,
        addClient,
        addVendor,
        addEmployee,
        addDay,
        updateClient,
        setOnScreenClient,
        setOnScreenVendor,
        setOnScreenEmployee,
      }}
    >
      <EOTM_StartScreen
        setStartScreenVisibility={setStartVisible}
        isVisible={startVisible}
      />
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
              <Ticker messages={messages} />
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <TaskmastersCorner position="left" type="Employee" />
            </Col>
            <Col span={12}></Col>
            <Col span={6}>
              <TaskmastersCorner position="right" type="Vendor" />
            </Col>
          </Row>
        </>
      )}
    </GameContext.Provider>
  );
};

export default EmployeeOfTheYear;
