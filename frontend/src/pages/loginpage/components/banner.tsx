import { Space, Image } from "antd";
import "./loginform.css";

const Banner = () => {
  return (
    <Space
      size="large"
      direction="vertical"
      className="loginpage__container--left"
    >
      <Image
        src="..\src\assets\landing--banner.svg"
        height="100vh"
        width="35vw"
        preview={false}
      ></Image>
    </Space>
  );
};

export default Banner;
