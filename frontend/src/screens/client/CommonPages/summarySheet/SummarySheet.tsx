import React from "react";
import { Typography, Button, Space, Table, theme } from "antd";
import { PrimaryInfoFormData } from "../primaryInfo/primaryInfoForm";
import { ProjectRegistrationFormData } from "../projectRegistration/projectModalForm";
import { ContactDetailsFormData } from "../contactDetailsForm";
import "./summarySheet.css";

const { Title, Paragraph } = Typography;

interface SummarySheetProps {
  formValues: SummarySheetFormValues;
}

interface SummarySheetFormValues {
  primaryInfo: PrimaryInfoFormData;
  projectRegistration: ProjectRegistrationFormData;
  contactDetails: ContactDetailsFormData;
}

const SummarySheet: React.FC<SummarySheetProps> = ({ formValues }) => {
  const handleConfirm = () => {
    // Handle confirmation action
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleUpload = () => {
    // Handle upload action
  };

  const columns = [
    {
      title: "Contact Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Is Primary",
      dataIndex: "isPrimary",
      key: "isPrimary",
      render: (isPrimary: boolean) => (isPrimary ? "Yes" : "No"),
    },
  ];

  const contactData = formValues.contactDetails.contactPersons || [];

  return (
    <>
      <div className="addclient_summary___header">
        <Title level={4}>Summary Sheet</Title>
      </div>
      <div className="addclient_summary_sections">
        <Title level={5}>Primary Info:</Title>
        <div className="addclient_summary_contents">
          {Object.keys(formValues.primaryInfo).map((key) => {
            const keyLabel = key
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
            return (
              <div className="addclient_summary_row">
                <Paragraph className="addclient_summary_label">
                  {keyLabel}:
                </Paragraph>
                <Paragraph className="addclient_summary_value">
                  {formValues.primaryInfo[key as keyof PrimaryInfoFormData]}
                </Paragraph>
              </div>
            );
          })}
        </div>
      </div>
      <div className="addclient_summary_sections">
        <Title level={5}>Projects:</Title>
        <div className="addclient_summary_contents">
          {Object.keys(formValues.projectRegistration).map((key) => {
            const keyLabel = key
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
            return (
              <div className="addclient_summary_row">
                <Paragraph className="addclient_summary_label">
                  {keyLabel}:
                </Paragraph>
                <Paragraph className="addclient_summary_value">
                  {
                    formValues.projectRegistration[
                      key as keyof ProjectRegistrationFormData
                    ]
                  }
                </Paragraph>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="addclient_summary_sections"
        style={{ backgroundColor: colorBgContainer }}
      >
        <Title level={5}>Contact Details:</Title>
        <div className="addclient_summary_contents">
          <Table
            columns={columns}
            dataSource={contactData}
            pagination={false}
          />
        </div>
      </div>
      <div className="addclient_summary__buttoncontainer">
        <Space direction="horizontal">
          <Button type="primary" onClick={handleConfirm}>
            Confirm
          </Button>
          <Button onClick={handleUpload}>Upload Documents</Button>
        </Space>
      </div>
    </>
  );
};

export default SummarySheet;
