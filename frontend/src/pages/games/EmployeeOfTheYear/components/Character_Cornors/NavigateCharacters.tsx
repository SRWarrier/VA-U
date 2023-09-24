import { useState, useContext } from "react";
import { Button, Space } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import {
  ClientDataType,
  VendorDataType,
  EmployeeDataType,
  FinanceDataType,
} from "../../data/EOTM_types/CharacterDataTypes";
import GameContext, { GameContextType } from "../../gameContext";
import { clients } from "../../data/characters/clients";
type Charactertypes =
  | ClientDataType
  | VendorDataType
  | EmployeeDataType
  | FinanceDataType;

interface NavigateCharacterProps {
  type: string;
  children: React.ReactNode;
  characterset: {}[];
}

const NavigateCharacters = ({ type, children }: NavigateCharacterProps) => {
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const { status, dispatch } = useContext(GameContext) as GameContextType;
  const [currentCharacter, setCurrentCharacter] = useState<Charactertypes>();

  const getCharacterSet = () => {
    switch (type) {
      case "Client":
        return status.clients;
      case "Vendor":
        return status.vendors;
      case "Employee":
        return status.employees;
      case "Finance":
        return status.finance;
      default:
        return [];
    }
  };

  const toggleCharacter = (change: number) => {
    const characterset = getCharacterSet();
    console.log(characterset);
    if (characterset.length === 1) {
      return 0;
    } else {
      setCurrentCharacterIndex((prevIndex) => {
        if (prevIndex === characterset.length - 1) {
          return 0;
        } else if (prevIndex === 0 && change < 0) {
          return characterset.length - 1;
        } else {
          return prevIndex + change;
        }
      });
    }

    const nextCharacter = characterset[currentCharacterIndex];
    setCurrentCharacter(nextCharacter);
    switch (type) {
      case "Client":
        dispatch({ type: "current_client", payload: nextCharacter });
        console.log(status.current_client);
        return;
      case "Vendor":
        dispatch({ type: "current_vendor", payload: nextCharacter });
        return;
      case "Employee":
        dispatch({ type: "current_employee", payload: nextCharacter });
        return;
      default:
        return;
    }
  };

  const addCient = () => {
    const rndlient = clients[3];
    const _rndclient = { ...rndlient, type: "Client" };
    dispatch({ type: "clients", payload: _rndclient });
    console.log(status.clients);
  };

  return (
    <>
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "space-between" }}
      >
        <Button
          icon={<CaretLeftOutlined />}
          onClick={() => {
            toggleCharacter(-1);
          }}
        ></Button>
        {children}
        <Button
          icon={<CaretRightOutlined />}
          onClick={() => {
            toggleCharacter(1);
          }}
        ></Button>
        <Button onClick={addCient}>Add Client</Button>
      </Space>
    </>
  );
};

export default NavigateCharacters;
