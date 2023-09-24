import { Dropdown, message } from "antd";
import { userMenuData } from "./components/userMenu/userMenuData";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
interface MenuClickProp {
  key: string;
  domEvent: {};
}

interface UserMenuProp {
  username: string;
}

const UserMenu = ({ username }: UserMenuProp) => {
  const navigation = useNavigate();

  const handleMenuClick = ({ key }: MenuClickProp) => {
    const clickedItem = userMenuData.find((item) => item.key === key);
    if (clickedItem) {
      const itemName = clickedItem.label;
      switch (itemName) {
        case "My Performance":
          navigation("analytics/myperformance");
          return;
        case "Logout":
          message.info(`You clicked on ${itemName}`);
          return;
        default:
          return;
      }
    }
  };

  const menuProps = {
    items: userMenuData,
    onClick: handleMenuClick,
  };
  return (
    <Dropdown.Button
      menu={menuProps}
      placement="bottomLeft"
      icon={<UserOutlined />}
      type="text"
    >
      {username.toUpperCase()}
    </Dropdown.Button>
  );
};

export default UserMenu;
