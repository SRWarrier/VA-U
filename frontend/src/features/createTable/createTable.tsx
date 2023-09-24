import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import ActionMenu from "./actionsColumns";

interface CreateTableProps {
  columns: ColumnsType<any>;
  datasource: any;
  editForm?: any;
}

const CreateTable = ({ columns, datasource, editForm }: CreateTableProps) => {
  const actionColumn = ActionMenu({ formField: columns, editForm: editForm });
  const modifiedColumns = [...columns, actionColumn];
  return (
    <Table
      columns={modifiedColumns}
      dataSource={datasource}
      size="small"
      pagination={false}
    />
  );
};

export default CreateTable;
