import { useEffect, useState } from "react";
import { Layout, Typography, Input, Modal } from "antd";
import DataTable from "@features/createTable/DataTable";
import { columns } from "./contractTableColumns";
import useData from "@hooks/useData";

const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;
const { confirm } = Modal;

const App = () => {
  const { fetchData } = useData();
  const [dataSource, setDataSource] = useState([
    {
      contract_id: "CLCONT001",
      project: "Test",
      service_type: "Transport",
      key: 1,
    },
  ]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState();
  const [clientContracts, setClientContracts] = useState();

  // useEffect(() => {
  //   const fetchDataAsync = async () => {
  //     const contracts = await fetchData("client_contracts");
  //     if (contracts) {
  //       setClientContracts(contracts);
  //     }
  //   };

  //   fetchDataAsync();
  // }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Title level={4}>Client Contracts</Title>
      <DataTable
        datasource={dataSource}
        addItemLink="addcontract"
        tableColumns={columns}
      />
      {/* {editModalVisible && (
        <EditClient
          isVisible={editModalVisible}
          clientRecord={currentRecord}
          setVisible={setEditModalVisible}
          onOk={handleEditModalOk}
          onCancel={handleEditModalCancel}
          entity_types={entitytypeStore?.data.map((type: any) => type.name)}
          industry_types={industryStore?.data.map((type: any) => type.name)}
          handleSave={handleSave}
        />
      )} */}
    </Layout>
  );
};

export default App;
