import { ToolOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import "./ChartSetting.css";

interface ChartMenuProp {
  children: React.ReactNode;
}

const ChartMenu = ({ children }: ChartMenuProp) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Button icon={<ToolOutlined />} className="chartmenu__button"></Button>
      {children}
    </div>
  );
};

export default ChartMenu;
