import { Button, Tooltip } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

interface CollapseMenuButtonProp {
  collapsedState: () => void;
  collapsed: boolean;
}

const CollapseMenuButton = ({
  collapsedState,
  collapsed,
}: CollapseMenuButtonProp) => {
  const handleCollapse = () => {
    collapsed = !collapsed;
    collapsedState();
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Tooltip title="Toggle Sidebar" placement="bottom">
        <Button
          className={`leftsidebar__togglebutton ${
            collapsed ? "leftsidebar__togglebutton--collapsed" : ""
          }`}
          type="primary"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={handleCollapse}
        ></Button>
      </Tooltip>
    </div>
  );
};

export default CollapseMenuButton;
