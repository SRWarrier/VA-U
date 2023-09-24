import { useState, useContext } from "react";
import { Modal, Row, Col, Button, Tabs } from "antd";
import { StartScreenItems } from "./startScreenTab";
import { generateCharacterMix } from "./generateCharacterMix";
import GameContext, {
  GameContextType,
} from "@pages/games/EmployeeOfTheYear/gameContext";

interface EOTMStartScreenProps {
  setStartScreenVisibility: (isVissible: boolean) => void;
}

const EOTM_StartScreen = ({
  setStartScreenVisibility,
}: EOTMStartScreenProps) => {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [disableStart, setdisableStart] = useState(true);
  const [activeTab, setActiveTab] = useState("1");
  const { status, dispatch } = useContext(GameContext) as GameContextType;
  const [startpack, setStartPack] = useState<{}[]>();

  const handleStartGame = () => {
    setStartScreenVisibility(false);
    setShowStartScreen(false);
    startpack?.map((character) => {
      switch (character.type) {
        case "Client":
          dispatch({ type: "clients", payload: character });
          dispatch({ type: "current_client", payload: character });
          return;
        case "Vendor":
          dispatch({ type: "vendors", payload: character });
          dispatch({ type: "current_vendor", payload: character });
          return;
        case "Employee":
          dispatch({ type: "employees", payload: character });
          dispatch({ type: "current_employee", payload: character });
          return;
        default:
          return;
      }
    });
    dispatch({
      type: "add_news",
      payload: {
        newsid: 0,
        message: "Welcome to Employee of the Month Game",
        type: "positive",
      },
    });
  };

  const handlePreviousScreen = () => {
    setActiveTab("1");
    setdisableStart(true);
  };

  const handleNextScreen = () => {
    const starterPack = generateCharacterMix();
    setStartPack(starterPack);
    dispatch({ type: "startpack", payload: starterPack });
    setActiveTab("2");
    setdisableStart(false);
  };

  return (
    <Modal
      mask={true}
      maskStyle={{ backgroundColor: "rgba(12,12,12,0.9)" }}
      bodyStyle={{ height: "100%", overflow: "auto" }}
      style={{ height: "80vh" }}
      centered={true}
      open={showStartScreen}
      width={1000}
      footer={
        <>
          <Button onClick={handlePreviousScreen}>Previous</Button>
          <Button onClick={handleNextScreen}>Next</Button>
          <Button
            type="primary"
            onClick={handleStartGame}
            disabled={disableStart}
          >
            Start Game
          </Button>
        </>
      }
      closable={false}
    >
      <Row>
        <Col>
          <Tabs
            defaultActiveKey="1"
            items={StartScreenItems}
            activeKey={activeTab}
          ></Tabs>
        </Col>
      </Row>
    </Modal>
  );
};

export default EOTM_StartScreen;
