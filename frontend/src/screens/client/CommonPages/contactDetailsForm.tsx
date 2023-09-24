import { useState, useEffect } from "react";
import { Form, Input, Button, Typography, Space, Select } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface ContactDetailsFormData {
  contactPersons: ContactPerson[];
}

interface ContactPerson {
  name: string;
  designation: string;
  mobileNumber: string;
  email: string;
  isPrimary: boolean;
}

interface ContactDetailsFormProps {
  formValues: ContactDetailsFormData;
  setFormValues: (values: ContactDetailsFormData) => void;
}

const ContactDetailsForm = ({
  formValues,
  setFormValues,
}: ContactDetailsFormProps) => {
  const [contactList, setContactList] = useState<ContactPerson[]>(
    formValues.contactPersons
  );
  const [saved, setSaved] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setContactList(formValues.contactPersons || []);
  }, [formValues.contactPersons]);

  const handleChange = () => {
    setSaved(false);
  };

  const handleRemoveContact = (index: number) => {
    setContactList((prevContactList) =>
      prevContactList.filter((_, i) => i !== index)
    );
  };

  const handleFinish = (values) => {
    const updatedFormValues = {
      ...formValues,
      contactPersons: values.contacts,
    };
    console.log("Form values:", updatedFormValues);
    setFormValues(updatedFormValues);
  };

  const triggerFinishEvent = () => {
    form.submit();
  };

  console.log(contactList);

  return (
    <>
      <Title level={4}>Contact Details</Title>
      <Form
        name="dynamic_form_nest_item"
        style={{ maxWidth: 600 }}
        autoComplete="off"
        onFinish={handleFinish}
        form={form}
      >
        <Form.List name="contacts" initialValue={contactList}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "name"]}
                    rules={[{ required: true, message: "Missing Name" }]}
                  >
                    <Input placeholder="Name" style={{ minWidth: "300px" }} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "designation"]}
                    rules={[{ required: true, message: "Missing designation" }]}
                  >
                    <Input
                      placeholder="designation"
                      style={{ minWidth: "300px" }}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "email"]}
                    rules={[
                      { required: true, message: "Missing email" },
                      {
                        type: "email",
                        message: "Invalid email id",
                      },
                    ]}
                  >
                    <Input
                      placeholder="email id"
                      style={{ minWidth: "300px" }}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "mobileNumber"]}
                    rules={[
                      { required: true, message: "Missing designation" },
                      {
                        pattern: /^[0-9]{10}$/,
                        message: "Invalid Mobile Number",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Mobile Number"
                      style={{ minWidth: "300px" }}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "isPrimary"]}
                    rules={[{ required: false, message: "Missing Primary" }]}
                  >
                    <Select
                      style={{ width: 120 }}
                      options={[
                        { value: false, label: "Other" },
                        { value: true, label: "Primary" },
                      ]}
                    />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add contact
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" onClick={triggerFinishEvent}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default ContactDetailsForm;
export type { ContactDetailsFormData };
