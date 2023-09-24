import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Select,
  Typography,
  Row,
  Col,
  Space,
  Button,
  message,
} from "antd";
import { returnOperation, createOperation } from "@api/apiRouters";
import { ValidationDataType } from "@customtypes/validationTypes";
import UploadDocuments from "@features/uploaders/fileUploaderWithChecklist";
import LookupTable from "@features/lookupTable/lookupTables";
import useDataFromReduxStore from "@hooks/useDatafromStore";

const { Title } = Typography;

interface AddClientFormValues {
  name: string;
  shortname: string;
  registered_office: string;
  industry: string;
  entity_type: string;
  pan: string;
  registration_number: string;
  crf_file: object;
  pan_file: object;
}

interface FileData {
  fileid: string;
  filedata: object;
}

const AddClientForm = () => {
  const [form] = Form.useForm<AddClientFormValues>();
  const [industryList, setIndustryList] = useState<ValidationDataType[]>([]);
  const [entityList, setEntityList] = useState<ValidationDataType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCRFUploaded, setIsCRFUploaded] = useState(false);
  const [isPANUploaded, setIsPANUploaded] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [FileData, setFileData] = useState<FileData[]>([]);
  const user = useDataFromReduxStore("user");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const industryData = await returnOperation({ type: "industry" });
        const entityTypeData = await returnOperation({ type: "entity" });
        setIndustryList(industryData);
        setEntityList(entityTypeData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const industryLookup = LookupTable({
    lookupdata: industryList,
    lookupKey: "industry",
    indexAsKey: false,
  });

  const entityLookup = LookupTable({
    lookupdata: entityList,
    lookupKey: "entity",
    indexAsKey: false,
  });

  console.log(industryLookup);

  const convertToUpperCase =
    (fieldName: keyof AddClientFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const uppercasedValue = e.target.value.toUpperCase();
      form.setFieldsValue({ [fieldName]: uppercasedValue });
    };

  const handleValuesChange = (changedValues: Partial<AddClientFormValues>) => {
    if (changedValues.name) {
      const firstChar = changedValues.name.slice(0, 4).toUpperCase();
      form.setFieldsValue({ shortname: firstChar });
    }
  };

  const handleUpload = (documentType: string, file: any) => {
    if (documentType === "CRF") {
      setIsCRFUploaded(true);
      setFileData([...FileData, { fileid: "crf_file_id", filedata: file }]);
    } else if (documentType === "PAN") {
      setIsPANUploaded(true);
      setFileData([...FileData, { fileid: "pan_file_id", filedata: file }]);
    }
  };

  const handleFormSubmit = () => {
    if (isCRFUploaded && isPANUploaded) {
      const formValues = form.getFieldsValue();
      const industryValue = industryLookup[formValues.industry];
      const enittyValue = entityLookup[formValues.entity_type];
      console.log(FileData);
      const updatedFormValues = FileData.reduce((acc, item) => {
        return { ...acc, [item.fileid]: item.filedata };
      }, formValues);
      const newClientData = {
        ...updatedFormValues,
        created_by: user.employee_id,
        entity_type: enittyValue,
        industry: industryValue,
      };
      createOperation({ record: newClientData, type: "client" });
    } else {
      messageApi.warning("Please upload all required documents.");
    }
  };

  return (
    <>
      <Title level={4}>Client Registration Form</Title>
      <Form layout="vertical" form={form} onValuesChange={handleValuesChange}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="Client Name"
              name="name"
              rules={[
                { required: true, message: "Name cannot be empty." },
                { min: 8, message: "Name should be minimum 8 characters." },
              ]}
            >
              <Input type="text" onChange={convertToUpperCase("clientname")} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Shortname" name="shortname">
              <Input type="text" disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="Entity Type"
              name="entity_type"
              rules={[{ required: true, message: "Select Entity Type." }]}
            >
              <Select>
                {entityList.map((item) => (
                  <Select.Option key={item.id} value={item.name}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Industry"
              name="industry"
              rules={[{ required: true, message: "Select industry." }]}
            >
              <Select>
                {industryList.map((item) => (
                  <Select.Option key={item.id} value={item.name}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="Registered Office"
          name="registered_office"
          rules={[
            { required: true, message: "Enter Registered Office address." },
            {
              min: 8,
              message: "Address needs to be at least 8 characters long.",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="PAN"
              name="pan"
              rules={[
                { required: true, message: "Enter PAN number" },
                { pattern: /^[A-Z]{5}\d{4}[A-Z]$/, message: "Invalid PAN." },
              ]}
            >
              <Input
                type="text"
                onChange={convertToUpperCase("pan")}
                maxLength={10}
                minLength={10}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Registration Number" name="registration_number">
              <Input
                type="text"
                onChange={convertToUpperCase("registration_number")}
              />
            </Form.Item>
          </Col>
        </Row>
        <Space direction="horizontal">
          <Title level={4} style={{ paddingBottom: "20px" }}>
            Uploads:
          </Title>
          <UploadDocuments
            onUpload={handleUpload}
            title="Upload CRF"
            fileid="CRF"
            buttonText="Upload CRF"
            checklist={[
              "Does the CRF belong to the Client being created?",
              "Is all required field in the CRF filled?",
            ]}
          />
          <UploadDocuments
            onUpload={handleUpload}
            title="Upload PAN"
            fileid="PAN"
            buttonText="Upload PAN"
            checklist={[
              "Does the PAN belong to the Client being created?",
              "Is the PAN number clearly visible?",
            ]}
          />
        </Space>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {contextHolder}
          <Button
            type="primary"
            htmlType="submit"
            onClick={handleFormSubmit}
            loading={{}}
          >
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddClientForm;
