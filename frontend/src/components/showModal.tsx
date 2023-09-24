import { Modal, theme } from "antd";
import { ReactNode } from "react";
import {
  InfoCircleOutlined,
  WarningOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const ModalIcons = {
  info: InfoCircleOutlined,
  success: CheckCircleOutlined,
  error: ExclamationCircleOutlined,
  warning: WarningOutlined,
  question: QuestionCircleOutlined,
};

const {
  token: { colorBgElevated },
} = theme.useToken();

interface ModalProps {
  type: keyof typeof ModalIcons;
  title: string;
  mask?: boolean;
  content: ReactNode;
  okText?: string;
  okType?: "primary" | "danger";
  cancelText?: string;
  onOk: (data: any) => void;
  record?: any;
}

const ShowModal = ({
  title,
  mask = true,
  content,
  okText = "Ok",
  okType = "primary",
  cancelText = "Cancel",
  onOk,
  record,
}: ModalProps) => {
  console.log(record);
  Modal.confirm({
    style: { background: colorBgElevated },
    title: title,
    mask: mask,
    content: content,
    okText: okText,
    okType: okType,
    cancelText: cancelText,
    onOk: () => {
      onOk(record);
    },
  });
};

export default ShowModal;
