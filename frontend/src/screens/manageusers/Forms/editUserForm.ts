import { FormFieldsTypes } from "@features/formDispenser/formFieldTypes";

const printSelect = (selection: string) => {
  console.log(selection);
};

interface generateFormProps {
  handleRouteMap: (routemap: string) => void;
}

const generateForm = () => {
  const editUserForm: FormFieldsTypes[][] = [
    [
      {
        label: "User Name",
        name: "fullname",
        inputType: "input",
      },
    ],
    [
      {
        label: "Role",
        name: "userrole",
        inputType: "select",
        selectOptions: [
          { label: "Sales Manager", value: "sm" },
          { label: "Data Operator", value: "dops" },
          { label: "Supervisor", value: "sup" },
        ],
        span: 24,
      },
      ,
      {
        label: "Is Manager?",
        name: "is_manager",
        inputType: "select",
        selectOptions: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
    ],
  ];
  return editUserForm;
};

export { generateForm };
