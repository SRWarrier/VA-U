import React, { useState } from "react";
import { Typography, Row, Col } from "antd";
import "./NewsTicker.css";
import TickerMessage from "./tickerMessage";
import { MessageProps } from "../../data/EOTM_types/ObjectDataTypes";

const { Text } = Typography;

interface TickerProps {
  messages: MessageProps[];
  intervalDuration?: number;
  fontSize?: number;
  fontColor?: string;
}

const Ticker: React.FC<TickerProps> = ({
  messages,
  intervalDuration = 15,
  fontSize = 18,
}) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isMessageScrolling, setIsMessageScrolling] = useState(false);

  const handleAnimationIteration = () => {
    if (!isMessageScrolling) {
      setIsMessageScrolling(true);
    } else {
      setIsMessageScrolling(false);
    }
    setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <Row>
      <Col span={2}>
        <Text style={{ fontSize, fontWeight: "bold", margin: "8px" }}>
          Latest Updates:
        </Text>
      </Col>
      <Col span={22}>
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          onAnimationIteration={handleAnimationIteration}
        >
          {messages && (
            <TickerMessage tickerMessage={messages[currentMessageIndex]} />
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Ticker;
