import { useContext, useState, useEffect } from "react";
import { InfoCircleFilled } from "@ant-design/icons";
import { Typography, Image, Tooltip, Avatar } from "antd";
import CharacterStats from "../CharacterStats";
import GameContext, { GameContextType } from "../../../gameContext";
import {
  ClientDataType,
  VendorDataType,
  EmployeeDataType,
  FinanceDataType,
} from "../../../data/EOTM_types/CharacterDataTypes";
import "./characterProfile.css";

const { Title, Paragraph } = Typography;

interface CharacterProfileProps {
  type: string;
  fallback: any;
}

type Charactertypes =
  | ClientDataType
  | VendorDataType
  | EmployeeDataType
  | FinanceDataType;

const CharacterProfile = ({ fallback, type }: CharacterProfileProps) => {
  const { status, dispatch } = useContext(GameContext) as GameContextType;

  const [character, setCharacter] = useState<Charactertypes>(
    {} as Charactertypes
  );

  const getCurrentCharacter = () => {
    switch (type) {
      case "Client":
        if (status.current_client === undefined) {
          console.log(status.current_client);
          setCharacter(fallback);
        } else {
          setCharacter(status.current_client);
        }

        return;
      case "Vendor":
        if (status.current_vendor === undefined) {
          setCharacter(fallback);
        } else {
          setCharacter(status.current_vendor);
        }
        return;
      case "Employee":
        if (status.current_employee === undefined) {
          setCharacter(fallback);
        } else {
          setCharacter(status.current_employee);
        }
        return;
      default:
        setCharacter(fallback);
        return;
    }
  };

  useEffect(() => {
    getCurrentCharacter();
  }, []);

  const getCharacterMood = (satisfactionLevel) => {
    const startColor = "rgba(56, 189, 34, 0.5)"; // Green
    const endColor = "#F90234"; // Red

    const gradient = `linear-gradient(90deg, ${startColor} ${satisfactionLevel}%, ${endColor} ${satisfactionLevel}%)`;
    return gradient;
  };

  return (
    <>
      <div className="EOTM__character__title--container">
        <Title
          level={5}
          style={{
            margin: "2px",
            padding: "2px",
            color: "#fff",
            alignItems: "left",
          }}
        >
          {type}
        </Title>
        <Tooltip title={character?.summary}>
          <InfoCircleFilled style={{ color: "white" }} />
        </Tooltip>
      </div>
      <div>
        <Image
          src={character?.imageURL}
          preview={false}
          width={200}
          height={200}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "5px",
          background: getCharacterMood(Math.trunc(Math.random() * 100) || 0),
        }}
      />
      <div className="EOTM__character--name">
        <Title level={5} style={{ margin: 0, padding: 0 }}>
          {character?.name}
        </Title>
      </div>
      <CharacterStats />
    </>
  );
};

export default CharacterProfile;
