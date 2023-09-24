import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Search } = Input;

interface SearchTableProps {
  datasource: any;
  returnData: (datasource: { datasource: object; isFiltered: boolean }) => void;
}

const SearchTable = ({ datasource, returnData }: SearchTableProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFiltered, setIsFiltered] = useState(true);

  const updateSearchQuery = (query: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(query.target.value);
  };

  const onSearch = (value: string) => {
    if (searchQuery.length > 0) {
      setIsFiltered(true);
      const filteredDataSource = datasource.filter((record: any) => {
        const recordValues = Object.values(record).join("").toLowerCase();
        const searchValue = searchQuery.toLowerCase();
        return recordValues.includes(searchValue);
      });
      returnData({ datasource: filteredDataSource, isFiltered: isFiltered });
    } else {
      setIsFiltered(false);
      returnData({ datasource: datasource, isFiltered: isFiltered });
    }
    console.log(isFiltered);
  };
  return (
    <Search
      placeholder="Search..."
      enterButton={<SearchOutlined />}
      size="large"
      onChange={(value) => updateSearchQuery(value)}
      onSearch={(value) => onSearch(value)}
      style={{ flex: 1, marginRight: "16px" }}
    />
  );
};

export default SearchTable;
