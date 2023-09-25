import { Layout, Button, Popover, Space, theme, Tooltip } from "antd";
import { useState, useEffect } from "react";
import Notifications from "./components/NotificationPopover";
import "./TopBar.css";
import UserMenu from "./UserMenu";
import BreadCrumb from "./components/BreadCrumbs/breadcrumbs";
import ThemeChanger from "./components/themeChanger/ThemeChanger";
import TourPage from "../../../../features/Tour/TourPages";
import { useNavigate } from "react-router-dom";
import MenuSearch from "./menuSearch/menuSearch";

import {
  BellOutlined,
  SolutionOutlined,
  QuestionCircleOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const { Header } = Layout;

interface ThemeProps {
  scheme?: string;
  color?: string;
}

interface TopBarProps {
  showNotification: () => void;
  showTaskList: () => void;
  setThemeColor: (props: ThemeProps) => void;
}

export default function Homepage_TopBar({
  showNotification,
  showTaskList,
  setThemeColor,
}: TopBarProps) {
  const user = useSelector((Userstate: RootState) => Userstate.user);
  const [username, setUsername] = useState(user.first_name || "");
  const [startTour, setStartTour] = useState(false);
  const navigate = useNavigate();

  const handleGameButtonClick = () => {
    navigate("/game");
  };

  useEffect(() => {
    setUsername(user.first_name);
    if (username === undefined) {
      const localUser = localStorage.getItem("user");
      if (localUser) {
        const localUserName = JSON.parse(localUser).first_name;
        setUsername(localUserName);
      }
    }
  }, [user.first_name]);

  const handleNotificationVisibleChange = (visible: boolean) => {
    if (visible) {
      showNotification();
    }
  };

  const {
    token: { colorBgContainer, colorPrimary, colorTextLabel },
  } = theme.useToken();

  const handleTour = () => {
    console.log("tourClicked");
    setStartTour(true);
  };

  return (
    <Header className="topbar__header" style={{ background: colorBgContainer }}>
      <BreadCrumb />
      <MenuSearch />
      <div className="topbar__actions">
        <Space size="large">
          <Tooltip title="Game Zone">
            <Button
              shape="circle"
              icon={<TrophyOutlined />}
              onClick={handleGameButtonClick}
            />
          </Tooltip>
          <Tooltip title="Tour this page">
            <Button
              shape="circle"
              icon={<QuestionCircleOutlined />}
              onClick={handleTour}
            />
          </Tooltip>
          <ThemeChanger handler={setThemeColor} />
          <div className="actions__actionbutton">
            <Tooltip title="Tasklist">
              <Button
                shape="circle"
                icon={<SolutionOutlined />}
                onClick={showTaskList}
              />
            </Tooltip>
            <Popover
              placement="bottomRight"
              content={Notifications}
              trigger="click"
              onOpenChange={handleNotificationVisibleChange}
            >
              <Tooltip title="Notifications">
                <Button shape="circle" icon={<BellOutlined />} />
              </Tooltip>
            </Popover>
            <UserMenu username={username} />
          </div>
        </Space>
      </div>
      {startTour && (
        <TourPage startTour={startTour} setStartTour={setStartTour} />
      )}
    </Header>
  );
}
