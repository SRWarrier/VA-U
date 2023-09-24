import { useState } from "react";
import {
  Modal,
  Checkbox,
  Button,
  Upload,
  Typography,
  List,
  Tooltip,
} from "antd";
import { InboxOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import PreviewFile from "@features/previewDocuments/previewDocuments";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

const { Dragger } = Upload;
const { Title } = Typography;

const UploadDocuments = ({
  title,
  buttonText,
  checklist = [],
  fileid,
  onUpload,
}) => {
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewFile, setPreviewFile] = useState<File>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isChecklistChecked, setIsChecklistChecked] = useState(false);

  const formatFileSize = (sizeInBytes: number) => {
    const KB = 1024;
    const MB = 1024 * KB;
    if (sizeInBytes < MB) {
      return `${(sizeInBytes / KB).toFixed(2)} KB`;
    } else {
      return `${(sizeInBytes / MB).toFixed(2)} MB`;
    }
  };

  const handleUpload = (info) => {
    setFileList([info.file]);
  };

  const handlePreview = (file) => {
    setPreviewVisible(true);
    setPreviewFile(file);
  };

  const handleDelete = (file) => {
    setFileList((prevFileList) =>
      prevFileList.filter((item) => item.uid !== file.uid)
    );
  };

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const onCheck = (checkedValues: CheckboxValueType[]) => {
    console.log(checklist.length, checkedValues.length);
    if (checklist.length === checkedValues.length) {
      setIsChecklistChecked(true);
    } else {
      setIsChecklistChecked(false);
    }
  };
  const isDraggerDisabled = fileList.length > 0;

  return (
    <>
      <Button type="primary" onClick={handleModalOpen}>
        {buttonText}
      </Button>
      <Modal
        open={isModalVisible}
        title={title}
        onCancel={handleModalClose}
        footer={[
          <Button key="cancel" onClick={handleModalClose}>
            Cancel
          </Button>,
          <Button
            key="upload"
            type="primary"
            disabled={!isChecklistChecked}
            onClick={() => {
              if (fileList.length > 0) {
                onUpload(fileid, fileList[0].originFileObj);
              }
              handleModalClose();
            }}
          >
            Upload
          </Button>,
        ]}
      >
        {fileList.length > 0 ? (
          <List
            itemLayout="horizontal"
            dataSource={fileList}
            renderItem={(file) => (
              <List.Item
                actions={[
                  <Tooltip title="Preview">
                    <Button
                      type="link"
                      icon={<EyeOutlined />}
                      onClick={() => handlePreview(file)}
                    />
                  </Tooltip>,
                  <Tooltip title="Delete">
                    <Button
                      type="link"
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(file)}
                      danger
                    />
                  </Tooltip>,
                ]}
              >
                <List.Item.Meta
                  title={file.name}
                  description={
                    <span key="file-size">
                      Size: {formatFileSize(file.size)}
                    </span>
                  }
                />
              </List.Item>
            )}
          />
        ) : (
          <Dragger
            name={title.replace("Upload ", "")}
            accept=".pdf,.png,.jpeg,.jpg"
            beforeUpload={() => false}
            onChange={handleUpload}
            progress={{
              strokeColor: {
                "0%": "#108ee9",
                "100%": "#87d068",
              },
              strokeWidth: 3,
              format: (percent) =>
                percent && `${parseFloat(percent.toFixed(2))}%`,
            }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              {`Click or drag the ${title.replace(
                "Upload ",
                ""
              )} file to upload`}
            </p>
            <p className="ant-upload-hint">
              Only supports PDF, PNG, and JPEG files
            </p>
          </Dragger>
        )}

        {checklist.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <Title level={5}>Checklist</Title>
            <Checkbox.Group
              options={checklist}
              onChange={onCheck}
              style={{ display: "block" }}
            />
          </div>
        )}
      </Modal>
      <PreviewFile
        file={previewFile}
        setVisible={setPreviewVisible}
        visible={previewVisible}
      ></PreviewFile>
    </>
  );
};

export default UploadDocuments;
