import { Tooltip, Dropdown, MenuProps, Space } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";
import ThemeColorPresets, {
  PresetProps,
} from "@features/themes/themesets/presets";

interface ThemeProps {
  scheme?: string;
  color?: string;
}

interface ThemeChangerProp {
  handler: ({ scheme, color }: ThemeProps) => void;
}

const buttonStyle = {
  background: "white",
  width: "12px",
  height: "12px",
  borderRadius: "80%",
  cursor: "pointer",
};

interface ThemeMenu {
  key: string;
  label: string;
  theme: PresetProps;
}

const ThemeChanger = ({ handler }: ThemeChangerProp) => {
  const getMenuProps = () => {
    const ThemeMenu: MenuProps["items"] = ThemeColorPresets.map((theme) => ({
      key: theme.label,
      label: <a>{theme.label}</a>,
      icon: (
        <div
          style={{
            backgroundColor: theme.colorPrimary,
            width: "10px",
            height: "10px",
          }}
        ></div>
      ),
    }));
    const MeneProps = {
      items: ThemeMenu,
      onClick: (selectTheme: ThemeMenu) => {
        handler({ color: selectTheme.key });
      },
    };
    return MeneProps;
  };
  return (
    <>
      <Space>
        <div className="themechange__container">
          <Tooltip placement="top" title="Dark Mode">
            <div
              style={{
                ...buttonStyle,
                background: "black",
                border: "2px solid white",
              }}
              onClick={() => handler({ scheme: "dark" })}
            ></div>
          </Tooltip>
          <Tooltip placement="top" title="Light Mode">
            <div
              style={{
                ...buttonStyle,
                background: "white",
                border: "2px solid black",
              }}
              onClick={() => handler({ scheme: "light" })}
            ></div>
          </Tooltip>
        </div>
        <Tooltip title="Change Theme Color">
          <Dropdown trigger={["click"]} menu={getMenuProps()}>
            <BgColorsOutlined />
          </Dropdown>
        </Tooltip>
      </Space>
    </>
  );
};

export default ThemeChanger;
