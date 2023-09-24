import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";

interface ConfirmationDialogProp {
  ok_button_text: string;
  message: string;
  is_danger?: boolean;
  isVisible: boolean;
  handle_delete: () => void;
  handle_close: () => void;
}

const ConfirmationDialog = ({
  ok_button_text,
  message,
  is_danger = false,
  isVisible,
  handle_delete,
  handle_close,
}: ConfirmationDialogProp) => {
  return (
    <Modal
      open={isVisible}
      title="Confirm"
      onCancel={handle_close}
      onOk={handle_delete}
      okText={ok_button_text}
      cancelText="Cancel"
      okButtonProps={{ danger: is_danger }}
    >
      <p>{message}</p>
    </Modal>
  );
};

export default ConfirmationDialog;
