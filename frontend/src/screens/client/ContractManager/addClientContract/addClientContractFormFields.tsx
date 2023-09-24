const ContractForms = () => {
  const contractForm = [
    {
      label: "Contract ID",
      name: "contract_id",
      disabled: true,
    },
    {
      label: "Project Name",
      name: "projectName",
      rules: [{ required: true, message: "Please select project name" }],
      placeholder: "Enter project name",
    },
    {
      label: "Location",
      name: "location",
      rules: [{ required: true, message: "Please enter location identifier" }],
      placeholder: "Enter Location",
      full_width: true,
    },
  ];
  return contractForm;
};

export default ContractForms;
