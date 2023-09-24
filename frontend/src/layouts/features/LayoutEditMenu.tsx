import {
  AlignCenterOutlined,
  ColumnWidthOutlined,
  ColumnHeightOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Tooltip } from "antd";

interface LayoutEditMenuProps {
  layoutType: string;
}

const LayoutEditMenu = ({ layoutType }: LayoutEditMenuProps) => {
  return (
    <div className="layout_editmenu__container">
      <Tooltip title="Toggle Alignment">
        <Button icon={<AlignCenterOutlined />} />
      </Tooltip>
      {layoutType == "horizontal" ? (
        <>
          <Tooltip title="Toggle Height">
            <Button icon={<ColumnHeightOutlined />} />
          </Tooltip>
          <Tooltip title="Toggle Height">
            <Button icon={<DeleteOutlined />} danger />
          </Tooltip>
        </>
      ) : (
        <Tooltip title="Toggle Width">
          <Button icon={<ColumnWidthOutlined />} />
        </Tooltip>
      )}
    </div>
  );
};

export default LayoutEditMenu;
