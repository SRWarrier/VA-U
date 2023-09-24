import FormDispenser from "@features/formDispenser/formDispenser";
import AddInvoiceBuilder from "./addInvoiceFormFields";
import { Form, Button, message, Typography } from "antd";
import { useState } from "react";
import UploadDocuments from "@features/uploaders/fileUploaderWithChecklist";

const { Title } = Typography;

const AddInvoice = () => {
  const AddInvoiceFields = AddInvoiceBuilder();
  const [uploadedDocs, setUploadedDocs] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const onUpload = (fileid: string, file: object) => {
    const docs = { ...uploadedDocs, fileid: fileid, file: file };
    setUploadedDocs(docs);
  };
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
    } catch (error) {
      messageApi.warning("Enter all fields");
    }
  };
  return (
    <>
      {contextHolder}
      <Title level={2}>Add Invoice</Title>
      <FormDispenser
        formRef={form}
        formfields={AddInvoiceFields}
        initialValues={{}}
        layout="vertical"
        isModal={false}
        formLayout="three"
      />
      <UploadDocuments
        title="Upload Invoice"
        buttonText="Upload Invoice"
        fileid="client_invoice_file"
        onUpload={onUpload}
      />

      <Button onClick={handleSubmit} type="primary">
        Submit
      </Button>
    </>
  );
};

export default AddInvoice;
