import { Card, Typography, Button } from "antd";
import { CheckOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;
interface MessagePanel {
  message: string;
}

const MessageCenter = ({ message }: MessagePanel) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title level={5} style={{ margin: 0, padding: 0 }}>
          Messages
        </Title>
      </div>
      <Card style={{ height: "20%" }} bodyStyle={{ padding: "10px" }}>
        <div style={{ minHeight: "40px" }}>{message}</div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <CheckOutlined color="#fasdad" />
          <ExclamationCircleOutlined />
        </div>
      </Card>
    </>
  );
};

export default MessageCenter;
