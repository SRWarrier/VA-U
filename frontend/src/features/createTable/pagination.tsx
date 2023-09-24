import { Pagination } from "antd";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const Paginate = ({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    console.log(page);
    onPageChange(page);
  };

  return (
    <div className="custom-pagination">
      <Pagination
        current={currentPage}
        total={totalItems}
        pageSize={pageSize}
        onChange={handlePageChange}
        showSizeChanger={false}
        showQuickJumper={true}
        showTotal={(total, range) => (
          <div style={{ width: "150px" }}>
            {range[0]}-{range[1]} of {total} items
          </div>
        )}
      />
    </div>
  );
};

export default Paginate;
