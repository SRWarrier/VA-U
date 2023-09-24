interface ProjectFormBuilderProp {
  client: string[];
  city: string[];
}

const ProjectFormBuilder = ({ client, city }: ProjectFormBuilderProp) => {
  const ProjectPageForm = [
    {
      label: "Project ID",
      name: "projectid",
      disabled: true,
    },
    {
      label: "Project Name",
      name: "projectName",
      rules: [{ required: true, message: "Please enter project name" }],
      placeholder: "Enter project name",
      style: {
        display: "inline-block",
        width: "35%",
        padding: "0px 0px 0px 10px",
      },
    },

    {
      label: "City",
      name: "city",
      rules: [{ required: true, message: "Please enter project name" }],
      inputType: "select",
      style: {
        display: "inline-block",
        width: "35%",
        padding: "0px 10px 0px 10px",
      },
      selectOptions: city,
    },
    {
      label: "Location",
      name: "location",
      rules: [{ required: true, message: "Please enter location identifier" }],
      placeholder: "Enter Location",
      style: {
        display: "inline-block",
        width: "30%",
        padding: "0px 10px 0px 10px",
      },
    },
    {
      label: "Client Name",
      name: "client",
      rules: [{ required: true, message: "Please enter project name" }],
      inputType: "select",
      selectOptions: client,
    },
    {
      label: "GSTIN",
      name: "gstin",
      rules: [{ required: true, message: "Please enter GSTIN" }],
      placeholder: "Enter GSTIN",
    },
  ];
  return ProjectPageForm;
};

export default ProjectFormBuilder;
