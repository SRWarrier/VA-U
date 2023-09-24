import { useState } from "react";
import { Modal, Button } from "antd";
import ProjectForm, {
  ProjectRegistrationFormData,
} from "../AddProject/AddProjectPage";

interface EditProjectProps {
  isVisible: boolean;
  projectRecord?: ProjectRegistrationFormData;
  setVisible: (visible: boolean) => void;
  onOk: (values: ProjectRegistrationFormData) => void;
  onCancel: () => void;
  entity_types: string[];
  industry_types: string[];
  handleSave: (formData: ProjectRegistrationFormData) => void;
}

const EditProject = ({
  isVisible,
  projectRecord = {} as ProjectRegistrationFormData,
  setVisible,
  onOk,
  onCancel,
  handleSave,
}: EditProjectProps) => {
  const [formData, setFormData] = useState(projectRecord);
  const handleFormValuesChange = (values) => {
    setFormData((prevState) => ({
      ...prevState,
      ...values,
    }));

    onOk({ ...formData, ...values });
  };

  return (
    <Modal
      open={isVisible}
      onCancel={() => {
        setVisible(false);
        onCancel();
      }}
      footer={[
        <Button key="more" onClick={() => console.log("more Clicked")}>
          More
        </Button>,
        <Button key="cancel" onClick={() => onCancel()}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={() => handleSave(formData)}>
          Save
        </Button>,
      ]}
      mask={true}
    >
      <ProjectForm
        title={"Edit Project"}
        formValues={formData}
        setFormValues={handleFormValuesChange}
      />
    </Modal>
  );
};

export default EditProject;
