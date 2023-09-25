import { Menu } from "antd";
import MenuItems from "./sidebarMenuItems";
import { useState } from "react";

interface SidebarMenuProps {
  level: number; // User role level for menu customization
  handleClick: (itemname: string, itemlink: string) => void;
}

interface MenuItem {
  key: string;
  name: string;
  icon: JSX.Element;
  level: number;
  link: string;
  type?: string;
  children?: MenuItem[];
}

const SidebarMenu = ({ level, handleClick }: SidebarMenuProps) => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const roleMenu = MenuItems.filter((menuitem) => menuitem.level <= level);

  const handleMenuOpen = (openKeys: string[]) => {
    setOpenKeys([openKeys[openKeys.length - 1]]);
  };

  const handleMenuClick = (item: MenuItem) => {
    const { key, name, link } = item;
    setSelectedKeys([key]);
    handleClick(name, link);
  };

  return (
    <div style={{ height: "75vh", overflow: "auto" }}>
      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={handleMenuOpen}
        items={MenuItems}
      />
    </div>
  );
};

export default SidebarMenu;
