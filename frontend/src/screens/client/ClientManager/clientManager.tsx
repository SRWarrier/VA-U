import { useEffect, useState } from "react";
import { Layout, Typography, Input, Spin, Modal } from "antd";
import getDataFromStore from "@hooks/useDatafromStore";
import DataTable from "@features/createTable/DataTable";
import { columns } from "./clientManagerTableColumns";
import { returnOperation } from "@api/apiRouters";
import { generateForm } from "./Forms/editClientModal";
import "./clientManager.css";

const { Title } = Typography;

const App = () => {
  const [dataSource, setDataSource] = useState();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState();
  const industryStore = getDataFromStore("industry");
  const entitytypeStore = getDataFromStore("entitytype");

  useEffect(() => {
    const getClientList = async () => {
      try {
        const clientList = await returnOperation({ type: "client" });
        setDataSource(clientList);
      } catch (error) {
        console.log(error);
      }
    };
    getClientList();
  }, []);

  // const handleDelete = (record) => {
  //   const clientid = record.id;
  //   axios
  //     .delete("http://localhost:8000/api/clients/deleteclient/", {
  //       data: { clientid: clientid },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       setDataSource((prevDataSource) =>
  //         prevDataSource.filter((item) => item.id !== clientid)
  //       );
  //     })
  //     .catch((error) => {
  //       console.error("Failed to delete record", error);
  //     });
  // };

  // const handleEdit = (record) => {
  //   setEditModalVisible(true);
  //   const industryLookup = industryStore.data.reduce((lookup, item) => {
  //     lookup[item.id] = item.name;
  //     return lookup;
  //   }, {});

  //   const entityLookup = entitytypeStore.data.reduce((lookup, item) => {
  //     lookup[item.id] = item.name;
  //     return lookup;
  //   }, {});

  //   const updatedRecord = {
  //     ...record,
  //     industry: industryLookup[record.industry],
  //     entity_type: entityLookup[record.entity_type],
  //   };

  //   setCurrentRecord(updatedRecord);
  //   setEditModalVisible(true);
  // };

  // const handleEditModalOk = (values) => {
  //   console.log("Edit Modal Ok", values);
  // };

  // const handleEditModalCancel = () => {
  //   setEditModalVisible(false);
  // };

  // const handleSave = (formData) => {
  //   const { id } = formData;
  //   const industryLookup = industryStore.data.reduce(
  //     (lookup: any, item: any) => {
  //       lookup[item.name] = item.id;
  //       return lookup;
  //     },
  //     {}
  //   );

  //   const entityLookup = entitytypeStore.data.reduce(
  //     (lookup: any, item: any) => {
  //       lookup[item.name] = item.id;
  //       return lookup;
  //     },
  //     {}
  //   );

  //   const industryValue = industryLookup[formData.industry];
  //   const entity_typeValue = entityLookup[formData.entity_type];

  //   const updatedRecord = {
  //     ...formData,
  //     industry: industryValue,
  //     entity_type: entity_typeValue,
  //   };

  //   axios
  //     .put(`http://localhost:8000/api/clients/updateclient/`, updatedRecord)
  //     .then((response) => {
  //       console.log(response);
  //       setDataSource((prevDataSource) =>
  //         prevDataSource.map((item) => (item.id === id ? response.data : item))
  //       );
  //       setEditModalVisible(false);
  //     })
  //     .catch((error) => {
  //       console.error("Failed to update record", error);
  //     });
  //   setEditModalVisible(false);
  // };

  const EditForm = generateForm();
  return (
    <Layout>
      <Title level={4}>Client Management</Title>
      {dataSource === undefined ? (
        <Spin />
      ) : (
        <DataTable
          datasource={dataSource}
          addItemLink="addclient"
          tableColumns={columns}
          editForm={EditForm}
        />
      )}
    </Layout>
  );
};

export default App;
