import { useState } from "react";
import ThemeContext, { ThemeContextProps } from "./context/themeContext";
import { ConfigProvider } from "antd";
import { Themes } from "./features/themes/ThemeMap";

const App = () => {
  const [theme, setThemeColor] = useState("light");

  const changeTheme = (newTheme: string) => {
    console.log(newTheme);
    setThemeColor(newTheme);
  };

  const themeContextValue: ThemeContextProps = {
    theme,
    themeSetter: changeTheme,
  };

  return (
    <ConfigProvider
      theme={(() => {
        switch (theme) {
          case "dark":
            return Themes.DarkTheme;
          default:
            return Themes.LightTheme;
        }
      })()}
    >
      <ThemeContext.Provider value={themeContextValue}></ThemeContext.Provider>
    </ConfigProvider>
  );
};
export default App;
