import { Spin, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./clientLoadingScreen.css";

const { Text } = Typography;

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <Spin indicator={<LoadingOutlined spin />} size="large" />
      <Text className="loading-screen__text">Loading...</Text>
      <Text className="loading-screen__humor">Patience is a virtue!</Text>
    </div>
  );
};

export default LoadingScreen;
