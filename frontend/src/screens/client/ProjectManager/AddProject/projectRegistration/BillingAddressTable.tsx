import { useState, useEffect } from "react";
import { Form, Input, Button, Typography, Space, Select } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface Addresses {
  location: string;
  billingAddress: string;
  shippingAddress: string;
  active: "Active" | "Inactive";
}

interface BillingAddressesList {
  AddressList: Addresses[];
}

interface BillingAddressFormProps {
  formValues: BillingAddressesList;
  setFormValues: (values: BillingAddressesList) => void;
}

const BillingAddressForm = ({
  formValues,
  setFormValues,
}: BillingAddressFormProps) => {
  const [addressList, setAddressList] = useState<Addresses[]>(
    formValues.AddressList
  );
  const [form] = Form.useForm();

  useEffect(() => {
    setAddressList(formValues.AddressList);
  }, [formValues]);

  const handleRemoveAddress = (index: number) => {
    setAddressList((prevAddressList) =>
      prevAddressList.filter((_, i) => i !== index)
    );
  };

  const handleFinish = (values) => {
    setFormValues(values);
  };

  const triggerFinishEvent = () => {
    form.submit();
  };

  return (
    <>
      <Title level={4}>Billing Addresses</Title>
      <Form
        name="dynamic_form_nest_item"
        style={{ maxWidth: 600 }}
        autoComplete="off"
        onFinish={handleFinish}
        form={form}
      >
        <Form.List name="AddressList" initialValue={addressList}>
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
                    name={[name, "identifier"]}
                    rules={[{ required: true, message: "Add an Identifier" }]}
                  >
                    <Input
                      placeholder="Identification"
                      style={{ minWidth: "300px" }}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "billingAddress"]}
                    rules={[
                      { required: true, message: "Missing Billing Address" },
                    ]}
                  >
                    <Input
                      placeholder="Billing Address"
                      style={{ width: "500px" }}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "shippingAddress"]}
                    rules={[
                      { required: true, message: "Missing Shipping Address" },
                    ]}
                  >
                    <Input
                      placeholder="Shipping Address"
                      style={{ width: "500px" }}
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "active"]}
                    rules={[{ required: true, message: "Missing Active" }]}
                  >
                    <Select
                      style={{ width: 120 }}
                      defaultValue={"Active"}
                      options={[
                        { value: "Active", label: "Active" },
                        { value: "Inactive", label: "Inactive" },
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
                  Add Address
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </>
  );
};

export default BillingAddressForm;
export type { BillingAddressesList };
