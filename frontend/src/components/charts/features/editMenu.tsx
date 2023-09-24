import { Tooltip, Button, Space, Modal } from "antd";
import { useState } from "react";
import {
  BorderOuterOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import ConfirmationDialog from "../../dialog/confirmationDialog";

interface ChartEditMenuProps {
  onDelete: () => void;
  toggleSize: (size: string) => void;
  componentRef: {
    current: any;
  };
}

const chartSize = ["small", "normal", "big", "wide"];

const ChartEditMenu = ({
  onDelete,
  toggleSize,
  componentRef,
}: ChartEditMenuProps) => {
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleToggleSize = () => {
    let current_size = componentRef.current.getAttribute("data-size");
    let sizeIndex = chartSize.indexOf(current_size);
    let resetIndex: number;
    if (sizeIndex + 1 < chartSize.length) {
      resetIndex = sizeIndex + 1;
    } else {
      resetIndex = 0;
    }
    toggleSize(chartSize[resetIndex]);
  };

  const handleDelete = () => {
    setConfirmModalVisible(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setConfirmModalVisible(false);
  };

  const handleCancelDelete = () => {
    setConfirmModalVisible(false);
  };

  return (
    <div className="info-card__editpanel">
      <Space>
        <Tooltip title="Toggle Size" placement="bottom">
          <Button
            shape="circle"
            icon={<BorderOuterOutlined />}
            onClick={handleToggleSize}
          />
        </Tooltip>
        <Tooltip title="Delete" placement="bottom">
          <Button
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={handleDelete}
            danger
          />
        </Tooltip>
      </Space>
      <ConfirmationDialog
        ok_button_text="Delete"
        message="Do you want to delete this info?"
        handle_delete={handleConfirmDelete}
        handle_close={handleCancelDelete}
        isVisible={confirmModalVisible}
        is_danger={true}
      />
    </div>
  );
};

export default ChartEditMenu;
