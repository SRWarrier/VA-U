import { Button, Space } from "antd";
import { SolutionOutlined, PhoneOutlined } from "@ant-design/icons";

const CharacterCornerActionButtion = () => {
  return (
    <div className="EOTY__action_buttons">
      <Space>
        <Button shape="round" size="small" icon={<SolutionOutlined />}></Button>
        <Button shape="round" size="small" icon={<PhoneOutlined />}></Button>
      </Space>
    </div>
  );
};

export default CharacterCornerActionButtion;
