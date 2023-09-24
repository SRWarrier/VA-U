import { useEffect, useState } from "react";
import { Layout, Typography, Input, Table, Spin, Alert } from "antd";
import getDataFromStore from "../../../hooks/useDatafromStore";
import LookupTable from "../../../features/lookupTable/lookupTables";
import DataTable from "@features/createTable/DataTable";
import { returnOperation } from "@api/apiRouters";
import { columns } from "./projectData";

const { Title } = Typography;

const ProjectManager = () => {
  const [dataSource, setDataSource] = useState();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState();
  const industryStore = getDataFromStore("industry");
  const entitytypeStore = getDataFromStore("entitytype");

  useEffect(() => {
    const getProjectList = async () => {
      try {
        const projectList = await returnOperation({ type: "project" });
        setDataSource(projectList);
      } catch (error) {
        console.log(error);
      }
    };
    getProjectList();
  }, []);

  const updateTable = (recordid: number) => {
    setDataSource((prevDataSource) =>
      prevDataSource.filter((item) => item.id !== recordid)
    );
  };

  const updateRecords = (record) => {
    const industryLookup = LookupTable({ lookupKey: "industry" });
    const entityLookup = LookupTable({ lookupKey: "entity" });
    const updatedRecord = {
      ...record,
      industry: industryLookup[record.industry],
      entity_type: entityLookup[record.entity_type],
    };
    setCurrentRecord(updatedRecord);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Title level={4}>Project Management</Title>
      {dataSource === undefined ? (
        <Spin />
      ) : (
        <DataTable
          datasource={dataSource}
          addItemLink="addproject"
          tableColumns={columns}
        />
      )}
    </Layout>
  );
};

export default ProjectManager;
