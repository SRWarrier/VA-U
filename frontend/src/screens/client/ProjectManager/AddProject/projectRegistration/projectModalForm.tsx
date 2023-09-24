const ProjectModalForm = [
  {
    label: "Project Name",
    name: "projectName",
    rules: [{ required: true, message: "Please enter project name" }],
    placeholder: "Enter project name",
  },
  {
    label: "Location",
    name: "location",
    rules: [{ required: true, message: "Please enter location identifier" }],
    placeholder: "Enter Location",
  },
  {
    label: "Project City",
    name: "projectCity",
    rules: [{ required: true, message: "Please enter project city" }],
    placeholder: "Enter project city",
  },
  {
    label: "Project ID",
    name: "projectid",
    disabled: true,
  },
];

export { ProjectModalForm };
