import { FormFieldsTypes } from "@features/formDispenser/formFieldTypes";

const printSelect = (selection: string) => {
  console.log(selection);
};

interface generateFormProps {
  handleRouteMap: (routemap: string) => void;
}

const generateForm = () => {
  const clientEditForm: FormFieldsTypes[][] = [
    [
      {
        label: "Client Name",
        name: "client Name",
        inputType: "input",
      },
    ],
    [
      {
        label: "Address",
        name: "address",
        inputType: "input",
      },
    ],
    [
      {
        label: "Entity Type",
        name: "entity type",
        inputType: "select",
        selectOptions: [
          { label: "Company", value: "company" },
          { label: "Individual", value: "individual" },
        ],
      },
      {
        label: "Industry",
        name: "industry",
        inputType: "select",
        selectOptions: [{ label: "Food", value: "food" }],
      },
    ],
  ];
  return clientEditForm;
};

export { generateForm };
