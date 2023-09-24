import { useState } from "react";
import { Steps, Button, message } from "antd";
import SummarySheet from "../../CommonPages/summarySheet/SummarySheet";
import axios from "axios";
import useDataFromStore from "@hooks/useDatafromStore";
import PrimaryInfoForm, {
  PrimaryInfoFormData,
} from "../../CommonPages/primaryInfo/primaryInfoForm";
import ProjectRegistrationForm, {
  ProjectRegistrationFormData,
} from "../../ProjectManager/AddProject/AddProjectPage";
import ContactDetailsForm, {
  ContactDetailsFormData,
} from "../../CommonPages/contactDetailsForm";

const CustomerRegistrationForm = () => {
  const industryStore = useDataFromStore("industry");
  const entitytypeStore = useDataFromStore("entitytype");
  const user = useDataFromStore("user");

  const [formState, setFormState] = useState({
    currentStep: 0,
    formValues: {
      primaryInfo: {} as PrimaryInfoFormData,
      projectRegistration: {} as ProjectRegistrationFormData,
      contactDetails: {} as ContactDetailsFormData,
    },
    isSubmitting: false,
    isFormValid: false,
  });

  const validateStep = () => {
    const { currentStep, formValues } = formState;
    const currentPageKey = Object.keys(formValues)[
      currentStep
    ] as keyof typeof formValues;
    const stepFields = formValues[currentPageKey];
    let isStepValid = false;
    if (!stepFields) {
      isStepValid = Object.values(stepFields).every(
        (value) => value.trim() !== ""
      );
    }

    return isStepValid;
  };

  const handleNext = () => {
    const isStepValid = validateStep();

    if (isStepValid) {
      setFormState((prevState) => ({
        ...prevState,
        currentStep: prevState.currentStep + 1,
      }));
    } else {
      message.warning("Please find all the fields before moving to next page");
    }
  };

  const handlePrevious = () => {
    setFormState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep - 1,
    }));
  };

  const handleFinish = () => {
    const { formValues } = formState;
    const industryLookup = industryStore.data.reduce(
      (lookup: any, item: any) => {
        lookup[item.name] = item.id;
        return lookup;
      },
      {}
    );

    const entityLookup = entitytypeStore.data.reduce(
      (lookup: any, item: any) => {
        lookup[item.name] = item.id;
        return lookup;
      },
      {}
    );

    const industryValue = industryLookup[formValues.primaryInfo.industry];
    const entity_typeValue = entityLookup[formValues.primaryInfo.entity_type];
    const newClientData = {
      ...formValues.primaryInfo,
      created_by: user?.first_name || "",
      entity_type: entity_typeValue,
      industry: industryValue,
    };
    setFormState((prevState) => ({
      ...prevState,
      isSubmitting: true,
    }));
    axios
      .post("http://localhost:8000/api/clients/addclient/", newClientData)
      .then((response) => {
        console.log(response.data);
        setFormState((prevState) => ({
          ...prevState,
          isSubmitting: false,
        }));
      })
      .catch((error) => {
        console.error(error);
        setFormState((prevState) => ({
          ...prevState,
          isSubmitting: false,
        }));
      });
  };

  const StepsList = [
    {
      title: "Primary Info",
      content: (
        <PrimaryInfoForm
          formValues={formState.formValues.primaryInfo}
          setFormValues={(values) =>
            setFormState((prevState) => ({
              ...prevState,
              formValues: {
                ...prevState.formValues,
                primaryInfo: values,
              },
            }))
          }
        />
      ),
    },
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

export default CustomerRegistrationForm;
