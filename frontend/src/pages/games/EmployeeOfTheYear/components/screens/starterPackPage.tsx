import { useContext } from "react";
import { Row, Col } from "antd";
import EOTM_ProfilePanel from "./profilePanel";
import GameContext, { GameContextType } from "../../gameContext";

const StarterPackPage = () => {
  const { status } = useContext(GameContext) as GameContextType;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Row gutter={12}>
        {status.startpack.map((character, index) => (
          <Col span={8} key={index}>
            <EOTM_ProfilePanel
              characterType={character.type}
              imageURL={character.imageURL}
              name={character.name}
              profileSummary={character.summary}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StarterPackPage;
