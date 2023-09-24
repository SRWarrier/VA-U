import GameSelectionScreen from "./components/gameSelection";
import { Themes } from "@features/themes/ThemeMap";
import { Layout, ConfigProvider, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

const { Content } = Layout;

const GameHomePage = () => {
  const navigate = useNavigate();
  const handleBacktoHomepage = () => {
    navigate("/wave");
  };

  const location = useLocation();
  return (
    <ConfigProvider theme={Themes.DarkTheme}>
      <Layout>
        <Content>
          {location.pathname === "/game" ? (
            <>
              <Button
                icon={<ArrowLeftOutlined />}
                onClick={handleBacktoHomepage}
                style={{ position: "absolute", left: 0, top: "0%" }}
              >
                Back to Business
              </Button>
              <GameSelectionScreen />
            </>
          ) : (
            <Outlet />
          )}
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default GameHomePage;
