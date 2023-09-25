import { useEffect, useState } from "react";
import { Layout, Typography, Spin } from "antd";
import DataTable from "@features/createTable/DataTable";
import { columns } from "./userDataColumns";
import { generateForm } from "./Forms/editUserForm";
import { returnOperation } from "@api/apiRouters";

const { Title } = Typography;

const UserManager = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userList = await returnOperation({ type: "user" });
        setDataSource(userList);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const EditForm = generateForm();
  return (
    <Layout>
      <Title level={4}>User Management</Title>
      {dataSource === undefined ? (
        <Spin />
      ) : (
        <DataTable
          datasource={dataSource}
          addItemLink="adduser"
          tableColumns={columns}
          editForm={EditForm}
        />
      )}
    </Layout>
  );
};

export default UserManager;
