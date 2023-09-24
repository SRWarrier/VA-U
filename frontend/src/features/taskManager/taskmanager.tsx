import { Table } from "antd";

const TaskList = () => {
  return <Table dataSource={taskListData} columns={taskListColumns} />;
};
