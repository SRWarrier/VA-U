import { Button, Typography, Modal, Space } from "antd";
import { useState } from "react";
import handleRecordDelete from "./handleRecordDelete";
import handleEdit from "./handleEdit";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

interface VEDActionMenuProps {
  record: any;
  formFields?: any;
  editForm?: any;
}

const useConfirmDelete = (modal: any) => {
  return (record: any) => {
    const { name } = record;
    modal.confirm({
      title: "Confirm Delete",
      content: (
        <div>
          <Typography.Text strong>Delete the following record:</Typography.Text>
          <Typography.Text type="danger" style={{ display: "block" }}>
            <strong>{name}</strong>
          </Typography.Text>
        </div>
      ),
      icon: <ExclamationCircleOutlined />,
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => handleRecordDelete(record),
    });
  };
};

const VEDActionMenu = ({
  record,
  formFields,
  editForm,
}: VEDActionMenuProps) => {
  const [modal, contextHolder] = Modal.useModal();
  const [isVisible, setVisible] = useState(false);
  const confirmDelete = useConfirmDelete(modal);
  const handleEditClick = (record: any) => {
    setVisible(true);
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button
          type="text"
          icon={<EyeOutlined />}
          // onClick={() => handleView(record)}
        />
        <Button
          type="text"
          icon={<EditOutlined />}
          onClick={() => handleEditClick(record)}
        />
        <Button
          type="text"
          icon={<DeleteOutlined />}
          onClick={() => confirmDelete(record)}
          danger
        />
      </Space>
      {handleEdit({
        isVisible: isVisible,
        setVisible: setVisible,
        record: record,
        modalTitle: "edit",
        formfield: editForm,
      })}
    </>
  );
};

export default VEDActionMenu;
