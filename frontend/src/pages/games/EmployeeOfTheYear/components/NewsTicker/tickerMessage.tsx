import { Typography } from "antd";
import { MessageProps } from "../../data/EOTM_types/ObjectDataTypes";

const { Text } = Typography;

interface TickerMessageProps {
  tickerMessage: MessageProps;
}

const TickerMessage = ({ tickerMessage }: TickerMessageProps) => {
  let backgroundColor;
  const { message, type } = tickerMessage;

  switch (type) {
    case "incident":
      backgroundColor = "rgba(0, 40, 85, 0.5)"; // Dark blue with transparency
      break;
    case "request":
      backgroundColor = "rgba(233, 165, 0, 0.3)"; // Orange with transparency
      break;
    case "negative":
      backgroundColor = "rgba(233, 65, 54, 0.3)"; // Red with transparency
      break;
    case "positive":
      backgroundColor = "rgba(0, 168, 89, 0.3)"; // Green with transparency
      break;
    default:
      backgroundColor = "transparent";
      break;
  }

  return (
    <Text
      className="ticker scrolling-typing-animation"
      style={{
        display: "inline-block",
        alignItems: "center",
        fontSize: "16px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        backgroundColor: backgroundColor,
        padding: "8px",
        borderRadius: "4px",
        color: "#ffffff",
      }}
    >
      {message}
    </Text>
  );
};

export default TickerMessage;
