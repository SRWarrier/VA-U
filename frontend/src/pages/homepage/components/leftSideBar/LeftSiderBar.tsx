import { Layout, Divider, theme } from "antd";
import SidebarMenu from "./sidebarMenu";
import MenuSearch from "../topBar/menuSearch/menuSearch";
import CollapseMenuButton from "./CollapseMenuButton";
import { useState } from "react";
import UserBadge from "./badgeSide";

import "./leftSideBar.css";

const { Sider } = Layout;

interface LeftSidebarProps {
  getNavigation: (pagename: string, navigatelink: string) => void;
  userLevel: number;
}

const LeftSidebar = ({ getNavigation, userLevel = 0 }: LeftSidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const {
    token: { colorBgContainer, colorTextLabel },
  } = theme.useToken();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="leftsidebar__container"
      style={{ background: colorBgContainer }}
    >
      <div className={`leftsidebar__logo`} style={{ color: colorTextLabel }}>
        <span style={{ color: "green" }}>
          <b>T</b>
        </span>
        ripplr
      </div>
      <SidebarMenu
        level={userLevel}
        handleClick={getNavigation}
        collapsed={collapsed}
      />
      <CollapseMenuButton
        collapsedState={handleToggleCollapse}
        collapsed={collapsed}
      />
      <Divider />
      <UserBadge />
    </Sider>
  );
};

export default LeftSidebar;
