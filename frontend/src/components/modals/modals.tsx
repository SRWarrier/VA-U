import { Modal, Button } from "antd";
import { theme } from "antd";

interface FormModalsProps {
  modalTitle: string;
  isVisible: boolean;
  setVisible: (visible: boolean) => void;
  showFooter: boolean;
  footerActionButtonText: string;
  footerActionFunction: (props: any) => void;
  children: React.ReactNode;
}

const FormModals = ({
  isVisible,
  modalTitle,
  setVisible,
  showFooter,
  footerActionButtonText,
  footerActionFunction,
  children,
}: FormModalsProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onCancel = () => {
    setVisible(false);
  };
  return (
    <Modal
      title={modalTitle}
      open={isVisible}
      maskStyle={{ background: colorBgContainer, filter: "blur(100px" }}
      onCancel={() => {
        setVisible(false);
        onCancel();
      }}
      footer={
        showFooter && [
          <Button key="cancel" onClick={() => onCancel()}>
            Cancel
          </Button>,
          <Button
            key="save"
            type="primary"
            onClick={() => handleSave(formData)}
          >
            Save
          </Button>,
        ]
      }
      mask={true}
    >
      {children}
    </Modal>
  );
};
