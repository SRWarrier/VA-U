import { useState, useEffect } from "react";
import { Steps, Button } from "antd";
import SummarySheet from "../../CommonPages/summarySheet/SummarySheet";
import getDataFromStore from "../../../../hooks/useDatafromStore";
import ProjectRegistrationForm, {
  ProjectRegistrationFormData,
} from "./AddProjectPage";
import ContactDetailsForm, {
  ContactDetailsFormData,
} from "../../CommonPages/contactDetailsForm";
import { updateOperation } from "../../../../api/apiRouters";

const ProjectRegistration = () => {
  const user = getDataFromStore("user");
  const [formState, setFormState] = useState({
    currentStep: 0,
    formValues: {
      projectRegistration: {} as ProjectRegistrationFormData,
      contactDetails: {} as ContactDetailsFormData,
    },
    isSubmitting: false,
  });

  const handleNext = () => {
    setFormState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep + 1,
    }));
  };

  const handlePrevious = () => {
    setFormState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep - 1,
    }));
  };

  const handleFinish = () => {
    const { formValues } = formState;
    setFormState((prevState) => ({
      ...prevState,
      isSubmitting: true,
    }));

    updateOperation({
      record: formValues.projectRegistration,
      type: "project",
    });
  };

  const StepsList = [
    {
      title: "Project Registration",
      content: (
        <ProjectRegistrationForm
          formValues={formState.formValues.projectRegistration}
          setFormValues={(values) =>
            setFormState((prevState) => ({
              ...prevState,
              formValues: {
                ...prevState.formValues,
                projectRegistration: values,
              },
            }))
          }
          isModal={false}
        />
      ),
    },
    {
      title: "Contact Details",
      content: (
        <ContactDetailsForm
          formValues={formState.formValues.contactDetails}
          setFormValues={(values) =>
            setFormState((prevState) => ({
              ...prevState,
              formValues: {
                ...prevState.formValues,
                contactDetails: values,
              },
            }))
          }
        />
      ),
    },
    {
      title: "Summary",
      content: <SummarySheet formValues={formState.formValues} />,
    },
  ];

  const items = StepsList.map(({ title }) => ({
    key: title,
    title,
  }));

  return (
    <div>
      <Steps
        current={formState.currentStep}
        style={{ marginBottom: "24px" }}
        items={items}
      />
      <div>{StepsList[formState.currentStep].content}</div>
      <div style={{ marginTop: "24px", textAlign: "right" }}>
        {formState.currentStep > 0 && (
          <Button style={{ marginRight: "8px" }} onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {formState.currentStep < StepsList.length - 1 && (
          <Button type="primary" onClick={handleNext}>
            Next
          </Button>
        )}
        {formState.currentStep === StepsList.length - 1 && (
          <Button
            type="primary"
            onClick={handleFinish}
            loading={formState.isSubmitting}
          >
            Finish
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectRegistration;
