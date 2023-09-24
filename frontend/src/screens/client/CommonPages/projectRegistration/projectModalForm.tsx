import { Typography } from "antd";
import { ProjectRegistrationFormFields } from "../../ProjectManager/AddProject/projectRegistration/projectModalForm";
import FormDispenser from "../../../../features/formDispenser/formDispenser";

interface ProjectRegistrationFormProps {
  formValues: ProjectRegistrationFormData;
  setFormValues: (values: ProjectRegistrationFormData) => void;
}

interface ProjectRegistrationFormData {
  projectName: string;
  projectCity: string;
  gstin: string;
  billingAddress: string;
  shippingAddress: string;
}

const ProjectRegistrationForm = ({
  formValues,
  setFormValues,
}: ProjectRegistrationFormProps) => {
  return (
    <>
      <Typography.Title level={4}>Project Registration</Typography.Title>
      <FormDispenser
        formfields={ProjectRegistrationFormFields}
        initialValues={formValues}
        setFormValues={setFormValues}
      />
      <Typography.Text type="secondary">
        Note: If you need to add multiple projects, please use the Project
        Manager page.
      </Typography.Text>
    </>
  );
};

export default ProjectRegistrationForm;
export type { ProjectRegistrationFormData };
