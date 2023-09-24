import FormDispenser from "@features/formDispenser/formDispenser";

interface EditModalFormProp {
  formFields: {}[];
  formValues: any;
  updateValue: (formvalues: any) => void;
}

const EditModalForm = ({
  formFields,
  formValues,
  updateValue,
}: EditModalFormProp) => {
  return (
    <>
      <FormDispenser
        formfields={formFields}
        initialValues={formValues}
        setFormValues={updateValue}
      />
    </>
  );
};

export default EditModalForm;
