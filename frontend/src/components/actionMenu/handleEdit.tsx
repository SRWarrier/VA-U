import { Modal, Button } from "antd";
import FormDispenser from "@features/formDispenser/formDispensor_adv";
import { FormFieldsTypes } from "@features/formDispenser/formFieldTypes";

interface FormModalsProps {
  modalTitle: string;
  isVisible: boolean;
  setVisible: (visible: boolean) => void;
  formfield: FormFieldsTypes[][];
  record: any;
}

const handleEdit = ({
  isVisible,
  modalTitle,
  setVisible,
  formfield,
  record,
}: FormModalsProps) => {
  const handleCancel = () => {
    setVisible(false);
  };
  console.log(record);
  return (
    <Modal
      title={modalTitle}
      open={isVisible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={() => console.log("save")}>
          Save
        </Button>,
      ]}
      mask={true}
    >
      {FormDispenser({
        formfields: formfield,
        initialValues: record,
      })}
    </Modal>
  );
};

export default handleEdit;
