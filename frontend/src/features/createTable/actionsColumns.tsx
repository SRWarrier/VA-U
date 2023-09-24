import VEDActionMenu from "@components/actionMenu/vedActionMenu";

interface ActionMenuProps {
  formField: any;
  editForm?: any;
}

const generateActionMenu = ({ formField, editForm }: ActionMenuProps) => {
  const actionColumn = {
    title: "Actions",
    dataIndex: "",
    key: "actions",
    render: (record: any) => (
      <VEDActionMenu
        record={record}
        formFields={formField}
        editForm={editForm}
      ></VEDActionMenu>
    ),
  };
  return actionColumn;
};

export default generateActionMenu;
