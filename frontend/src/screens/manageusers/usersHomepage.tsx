import { useEffect, useState } from "react";
import { Layout, Typography, Input, Table, Button, Modal } from "antd";
import { Link } from "react-router-dom";
import SearchTable from "@features/searchTables/searchTable";
import {
  PlusOutlined,
  ExportOutlined,
  SearchOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import VEDActionMenu from "@components/actionMenu/vedActionMenu";
import { useData, columns } from "./userData";

const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;
const { confirm } = Modal;

const UserManager = () => {
  const { isLoading, fetchData } = useData();
  const [dataSource, setDataSource] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [FilteredData, setFilteredData] = useState([]);

  useEffect(() => {
    refreshData();
  }, []);

  const onSearch = (value) => {
    setSearchQuery(value);
    const FilteredData = SearchTable(dataSource, searchQuery);
    setFilteredData(FilteredData);
  };

  const refreshData = () => {
    fetchData().then((customerList) => {
      setDataSource(customerList);
      setFilteredData(customerList);
    });
  };
  const handleView = (record) => {
    console.log("View", record);
  };

  const handleDelete = (record) => {
    const clientid = record.id;
  };

  const handleEdit = (record) => {
    setEditModalVisible(true);
  };

  const handleEditModalOk = (values) => {
    console.log("Edit Modal Ok", values);
  };

  const handleEditModalCancel = () => {
    setEditModalVisible(false);
  };

  const handleSave = (formData) => {
    const { id } = formData;
  };

  const actionColumn = {
    title: "Actions",
    dataIndex: "",
    key: "actions",
    render: (record) => (
      <VEDActionMenu
        handleView={handleView}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        record={record}
      ></VEDActionMenu>
    ),
  };

  const modifiedColumns = [...columns, actionColumn];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Title level={4}>User Management</Title>
      <Layout>
        <div
          style={{
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Search
            placeholder="Search users..."
            enterButton={<SearchOutlined />}
            size="large"
            onSearch={onSearch}
            style={{ flex: 1, marginRight: "16px" }}
          />
          <Button icon={<ExportOutlined />}>Export</Button>
          <Link to="addclient">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              style={{ marginLeft: "16px" }}
            >
              Add New
            </Button>
          </Link>
        </div>
        <Content style={{ margin: "16px", overflow: "auto" }}>
          <div style={{ maxWidth: "100%" }}>
            <Table columns={modifiedColumns} dataSource={FilteredData} />
          </div>
        </Content>
      </Layout>
      {editModalVisible && (
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
      )}
    </Layout>
  );
};

export default UserManager;
