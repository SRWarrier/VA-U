import { useState, useContext } from "react";
import CharacterCornerActionButton from "./actionButtons";
import NavigateCharacters from "./NavigateCharacters";
import CharacterProfile from "./profile/characterProfile";
import ActionPanel from "./actionPanel/actionPanel";
import GameContext, { GameContextType } from "../../gameContext";
import { finance } from "../../data/characters/finance";
import "./characterCorner.css";
import {
  ClientDataType,
  VendorDataType,
  EmployeeDataType,
  FinanceDataType,
} from "../../data/EOTM_types/CharacterDataTypes";

interface CornerProps {
  position: "left" | "right";
  type: "Client" | "Vendor" | "Employee" | "Finance";
}

type Charactertypes =
  | ClientDataType
  | VendorDataType
  | EmployeeDataType
  | FinanceDataType;

const getCornerStyles = (position: CornerProps["position"]) => {
  switch (position) {
    case "left":
      return { gridColumn: 1, gridRow: "span 2" };
    case "right":
      return { gridColumn: 3, gridRow: "span 2" };
    default:
      return {};
  }
};

const CornerComponent = ({ position, type }: CornerProps) => {
  const { status, dispatch } = useContext(GameContext) as GameContextType;

  const [screenCharacterFn, setScreenCharacterFn] = useState();
  const getCharacterSet = () => {
    switch (type) {
      case "Client":
        return status.clients;
      case "Vendor":
        return status.vendors;
      case "Employee":
        return status.employees;
      case "Finance":
        return finance;
      default:
        return [];
    }
  };

  const [characterSet, setCharacterSet] = useState<{}[]>(getCharacterSet());
  const [currentCharacter, setCurrentCharacter] = useState(characterSet[0]);

  const containerStyle: React.CSSProperties = {
    ...getCornerStyles(position),
  };

  return (
    <div className="EOTM__corner-container">
      {position === "left" ? (
        <>
          <div className="EOTM__corner-profile">
            <CharacterProfile fallback={currentCharacter} type={type} />
            <NavigateCharacters type={type} characterset={characterSet}>
              <CharacterCornerActionButton />
            </NavigateCharacters>
          </div>
          <ActionPanel characterType={type} />
        </>
      ) : (
        <>
          <ActionPanel characterType={type} />
          <div className="EOTM__corner-profile">
            <CharacterProfile fallback={currentCharacter} type={type} />
            <NavigateCharacters type={type} characterset={characterSet}>
              <CharacterCornerActionButton />
            </NavigateCharacters>
          </div>
        </>
      )}
    </div>
  );
};

export default CornerComponent;
