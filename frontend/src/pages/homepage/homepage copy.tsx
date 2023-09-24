import { useState, useCallback, createContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import { ConfigProvider } from "antd";
import { Themes } from "../../features/themes/ThemeMap";
import "./homepage.css";
import getDataFromReduxStore from "@hooks/useDatafromStore";

import { LeftSideBar, TopBar } from "./components/index";
import { Overview } from "../../screens/screenIndex";

const { Content } = Layout;
const ThemeContext = createContext(null);

const Homepage = () => {
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [showNotification, setShowNotifications] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false);
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const navigate = useNavigate();
  const userData = getDataFromReduxStore("user");

  // Theme Manager
  const [themeColor, setThemeColor] = useState({
    scheme: "dark",
    color: "Sunset",
  });

  const handleSetThemeColor = (color: string) => {
    setThemeColor(color);
  };

  const toggleNotifications = () => {
    setShowNotifications((prevValue) => !prevValue); // Toggle the value
    setShowTaskList(false);
    setShowSidePanel(true);
  };

  const toggleTaskLists = () => {
    setShowTaskList((prevValue) => !prevValue); // Toggle the value
    setShowNotifications(false);
    setShowSidePanel(true);
  };

  const handleNavigation = useCallback(
    (currentPage: string, navigatelink: string) => {
      setCurrentPage(currentPage); //not in use anymore
      navigate(navigatelink);
    },
    []
  );

  const location = useLocation();

  return (
    <ConfigProvider
      theme={(() => {
        switch (themeColor.scheme) {
          case "light":
            return Themes.LightTheme;
          case "dark":
            return Themes.DarkTheme;
          default:
            return Themes.getCustomTheme(themeColor.scheme);
        }
      })()}
    >
      <Layout className="homepage__frame">
        <LeftSideBar getNavigation={handleNavigation} userLevel={2} />
        <Layout className="site-layout">
          <TopBar
            showNotification={toggleNotifications}
            showTaskList={toggleTaskLists}
            setThemeColor={handleSetThemeColor}
          />
          <Content className="site-layout-content">
            {location.pathname === "/wave" ? <Overview /> : <Outlet />}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Homepage;
