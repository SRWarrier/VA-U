import Icon from "@ant-design/icons";
import { IconPicker } from "./iconPicker";
import { colorCodes } from "./colorSchemes";

interface IconDispenserProps {
  icon: keyof typeof IconPicker;
  color: keyof typeof colorCodes;
}

const IconDispenser = ({ icon, color }: IconDispenserProps) => {
  return (
    <Icon
      component={IconPicker[icon] as React.ForwardRefExoticComponent<any>}
      style={{ color: colorCodes[color] }}
    />
  );
};

export default IconDispenser;
