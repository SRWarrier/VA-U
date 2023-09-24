import { theme } from "antd";

const ThemeValueDispenser = (value: string) => {
  const themevalue = theme.useToken();
  const styleValue = { ...themevalue.token };

  return styleValue[value];
};

export default ThemeValueDispenser;
