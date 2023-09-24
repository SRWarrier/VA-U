import { LineChartOutlined, LogoutOutlined } from "@ant-design/icons";

const userMenuData = [
  {
    label: "My Performance",
    key: "1",
    icon: <LineChartOutlined />,
  },
  {
    label: "Logout",
    key: "2",
    icon: <LogoutOutlined />,
    danger: true,
  },
];

export { userMenuData };
