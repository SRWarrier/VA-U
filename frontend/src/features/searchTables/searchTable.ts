const SearchTable = (datasource: any, query: any) => {
  const filteredDataSource = datasource.filter((record: any) => {
    const recordValues = Object.values(record).join("").toLowerCase();
    const searchValue = query.toLowerCase();
    return recordValues.includes(searchValue);
  });
  return filteredDataSource;
};

export default SearchTable;
