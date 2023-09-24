import { Menu } from "antd";
import MenuItems from "./sidebarMenuItems";
import { useState } from "react";

interface SidebarMenuProps {
  level: number; // User role level for menu customization
  handleClick: (itemname: string, itemlink: string) => void;
  collapsed: boolean;
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

const SidebarMenu = ({ level, handleClick, collapsed }: SidebarMenuProps) => {
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

  const renderMenuItem = (item: MenuItem) => {
    const { key, name, icon, link } = item;
    return (
      <Menu.Item key={key} icon={icon} onClick={() => handleMenuClick(item)}>
        {name}
      </Menu.Item>
    );
  };

  const renderSubMenu = (item: MenuItem) => {
    const { key, name, icon, children } = item;

    if (!collapsed && children && children.length > 0) {
      const permittedChildren = children.filter(
        (menuitem) => menuitem.level <= level
      );
      return (
        <Menu.SubMenu
          key={key}
          title={name}
          icon={icon}
          onTitleClick={() => handleMenuOpen([key])}
        >
          {permittedChildren.map((child) => renderMenuItem(child))}
        </Menu.SubMenu>
      );
    } else {
      return (
        <Menu.SubMenu key={key} title={name} icon={icon}>
          {children && children.length > 0 && (
            <Menu.ItemGroup key={key} title={name}>
              {children.map((child) => renderMenuItem(child))}
            </Menu.ItemGroup>
          )}
          {!children || children.length === 0 ? renderMenuItem(item) : null}
        </Menu.SubMenu>
      );
    }
  };

  return (
    <Menu
      mode="inline"
      selectedKeys={selectedKeys}
      className="leftsidebar__centered-menu"
      openKeys={openKeys}
      onOpenChange={handleMenuOpen}
    >
      {roleMenu.map((item) =>
        item.children && item.children.length > 0
          ? renderSubMenu(item)
          : renderMenuItem(item)
      )}
    </Menu>
  );
};

export default SidebarMenu;
