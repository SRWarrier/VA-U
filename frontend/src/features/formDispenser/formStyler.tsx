const formLayoutStyle = {
  three: {
    display: "inline-block",
    width: "30%",
    padding: "0px 10px 0px 10px",
  },
  two: {
    display: "inline-block",
    width: "45%",
    padding: "0px 10px 0px 0px",
  },
  one: {
    display: "inline-block",
    width: "100%",
    padding: "2px 0px 2px 0px",
  },
};

interface FormStylerProps {
  layout: keyof typeof formLayoutStyle;
  isModal: boolean;
  formfields: any;
}

const FormStyler = ({ layout, isModal, formfields }: FormStylerProps) => {
  const formLayout = isModal ? "one" : layout;
  const styledForm = formfields.map((field: any) => {
    return {
      ...field,
      style: formLayoutStyle[field.full_width ? "one" : formLayout],
    };
  });
  return styledForm;
};

export default FormStyler;
