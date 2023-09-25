import { Layout, Divider, theme } from "antd";
import SidebarMenu from "./sidebarMenu";
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
    token: { colorBgContainer, colorTextLabel, colorPrimary },
  } = theme.useToken();

  return (
    <Sider
      trigger={null}
      collapsed={true}
      style={{
        background: colorBgContainer,
      }}
    >
      <div className={`leftsidebar__logo`} style={{ color: colorTextLabel }}>
        <b>VA-</b>
        <span style={{ color: colorPrimary }}>
          <b>U</b>
        </span>
      </div>
      <SidebarMenu level={userLevel} handleClick={getNavigation} />
      <Divider />
      <UserBadge />
    </Sider>
  );
};

export default LeftSidebar;
