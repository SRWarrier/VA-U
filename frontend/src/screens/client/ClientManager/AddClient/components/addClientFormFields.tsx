import { useState } from "react";

const PrimaryInfoBuilder = (
  industry_types: string[],
  entity_types: string[]
) => {
  const [ClientShortName, setClientShortName] = useState("");
  const PrimaryInfoFormFields = [
    {
      label: "Name",
      name: "name",
      rules: [{ required: true, message: "Please enter the name" }],
      style: { width: "50%", display: "inline-block" },
      relatedFunction: setClientShortName,
    },
    {
      label: "Shortname",
      name: "shortname",
      rules: [
        { required: true, message: "Shortname Missing" },
        {
          pattern: /^[\w]{4}$/,
          message: "Four Charater required",
        },
      ],
      style: { width: "10%", display: "inline-block" },
      maxLength: 4,
      referenceValue: ClientShortName,
    },
    {
      label: "Type of Entity",
      name: "entity_type",
      inputType: "select",
      selectOptions: entity_types,
      rules: [{ required: true, message: "Please select the type of entity" }],
    },
    {
      label: "Registered Office",
      name: "registered_office",
      rules: [
        {
          required: true,
          message: "Please enter the registered office address",
        },
      ],
    },
    {
      label: "PAN Number",
      name: "pan",
      rules: [
        { required: true, message: "Please enter the valid Pan Number" },
        {
          pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
          message: "Invalid PAN Number",
        },
      ],
    },
    {
      label: "CIN/Registration Number",
      name: "registration_number",
    },
    {
      label: "Industry Type",
      name: "industry",
      inputType: "select",
      selectOptions: industry_types,
    },
  ];
  return PrimaryInfoFormFields;
};

export default PrimaryInfoBuilder;
