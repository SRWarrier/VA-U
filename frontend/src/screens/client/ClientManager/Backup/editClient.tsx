import { useState } from "react";
import { Modal, Button } from "antd";
import PrimaryInfoForm, {
  PrimaryInfoFormData,
} from "../../CommonPages/primaryInfo/primaryInfoForm";

interface EditClientProps {
  isVisible: boolean;
  clientRecord?: PrimaryInfoFormData;
  setVisible: (visible: boolean) => void;
  onOk: (values: PrimaryInfoFormData) => void;
  onCancel: () => void;
  entity_types: string[];
  industry_types: string[];
  handleSave: (formData: PrimaryInfoFormData) => void;
}

const EditClient = ({
  isVisible,
  clientRecord = {} as PrimaryInfoFormData,
  setVisible,
  onOk,
  onCancel,
  entity_types,
  industry_types,
  handleSave,
}: EditClientProps) => {
  const [formData, setFormData] = useState(clientRecord);
  const handleFormValuesChange = (values) => {
    setFormData((prevState) => ({
      ...prevState,
      ...values,
    }));

    onOk({ ...formData, ...values });
  };

  return (
    <Modal
      title="Edit Client"
      open={isVisible}
      onCancel={() => {
        setVisible(false);
        onCancel();
      }}
      footer={[
        <Button key="cancel" onClick={() => onCancel()}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={() => handleSave(formData)}>
          Save
        </Button>,
      ]}
      mask={true}
    >
      <PrimaryInfoForm
        formValues={formData}
        setFormValues={handleFormValuesChange}
        entity_types={entity_types}
        industry_types={industry_types}
      />
    </Modal>
  );
};

export default EditClient;
