import { Layout, Row, Col } from "antd";
import { useState, useEffect } from "react";
import SearchTable from "./searchTable";
import AddItemButton from "./AddItemsToTable";
import ExportDataTable from "./exportData";
import CreateTable from "./createTable";
import type { ColumnsType } from "antd/es/table";
import Paginate from "./pagination";

const { Content } = Layout;

interface DataTableProps {
  datasource: any;
  addItemLink: string;
  tableColumns: ColumnsType<any>;
  editForm?: any;
}

const DataTable = ({
  datasource,
  addItemLink,
  tableColumns,
  editForm,
}: DataTableProps) => {
  const [tableData, setTableData] = useState(datasource);
  const [isFiltered, setIsFiltered] = useState(false);
  const [PaginatedData, setPaginatedData] = useState(tableData.slice(0, 10));
  const handleFilter = (data: { datasource: any; isFiltered: boolean }) => {
    setCurrentPage(1);
    setIsFiltered(data.isFiltered);
    setTableData(data.datasource);
    PaginateData(tableData);
  };

  const PaginateData = (data: object) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = isFiltered
      ? tableData.slice(startIndex, endIndex)
      : datasource.slice(startIndex, endIndex);
    setPaginatedData(paginatedData);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    PaginateData(tableData);
  }, [currentPage]);

  return (
    <Layout>
      <div
        style={{
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <SearchTable
          datasource={datasource}
          returnData={() => handleFilter}
        ></SearchTable>
        <ExportDataTable />
        <AddItemButton linktext={addItemLink} />
      </div>
      <Content>
        <div style={{ height: "70vh" }}>
          <CreateTable
            columns={tableColumns}
            datasource={PaginatedData}
            editForm={editForm}
          />
        </div>
        <Row justify="center">
          <Col>
            <Paginate
              currentPage={currentPage}
              totalItems={isFiltered ? tableData.length : datasource.length}
              pageSize={10}
              onPageChange={setCurrentPage}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default DataTable;
