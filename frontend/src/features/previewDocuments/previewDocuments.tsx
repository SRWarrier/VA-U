import { useState } from "react";
import { Modal, Button } from "antd";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PreviewFileProp {
  file: File;
  setVisible: (visible: boolean) => void;
  visible: boolean;
}

const PreviewFile = ({ file, setVisible, visible }: PreviewFileProp) => {
  if (!file) {
    return;
  }
  const fileURL = URL.createObjectURL(file);
  const [numPages, setNumPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numPages));
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Modal
      title="Preview"
      className="preview-modal"
      open={visible}
      footer={[]}
      width={800}
      onCancel={() => {
        URL.revokeObjectURL(fileURL);
        setVisible(false);
      }}
      maskClosable={true}
    >
      {file.type === "application/pdf" ? (
        <>
          <div className="pdf-navigation">
            <Button
              type="primary"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span
              className="pdf-page-indicator"
              style={{ padding: "0% 2% 0% 2%" }}
            >
              Page {currentPage} of {numPages}
            </span>
            <Button
              type="primary"
              onClick={handleNextPage}
              disabled={currentPage === numPages}
            >
              Next
            </Button>
          </div>
          <Document
            file={fileURL}
            onLoadSuccess={onDocumentLoadSuccess}
            loading
          >
            <Page
              pageNumber={currentPage}
              width={750}
              renderTextLayer={false}
            />
          </Document>
        </>
      ) : (
        <img alt="Preview" style={{ width: "100%" }} src={fileURL} />
      )}
    </Modal>
  );
};

export default PreviewFile;
