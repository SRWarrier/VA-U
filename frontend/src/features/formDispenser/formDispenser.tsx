import { Form, Select, Input, DatePicker } from "antd";
import { FormLayout } from "antd/lib/form/Form";
import FormStyler from "./formStyler";
import { FormInstance } from "antd";

interface FormFieldsProps {
  name: string;
  label: string;
  rules?: {}[];
  key?: string | number;
  inputType?: string;
  selectOptions?: string[];
  style?: {};
  disabled?: boolean;
  maxLength?: number;
  full_width?: boolean;
  placeholder?: string;
  group?: boolean;
  onChangeFn?: (values: any) => void;
}

interface FormDispenserProps {
  formfields: Partial<FormFieldsProps>[];
  initialValues: any;
  layout?: FormLayout;
  isModal: boolean;
  formLayout: "one" | "two" | "three";
  formRef: FormInstance<any>;
}

const FormDispenser = ({
  formfields,
  initialValues,
  layout = "vertical",
  isModal = false,
  formLayout,
  formRef,
}: FormDispenserProps) => {
  const formFields = FormStyler({
    isModal: isModal,
    layout: formLayout,
    formfields: formfields,
  });

  return (
    <Form layout={layout} initialValues={initialValues} form={formRef}>
      {formFields.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          name={field.name}
          rules={field.rules}
          style={field.style && { ...field.style }}
        >
          {(() => {
            switch (field.inputType) {
              case "select":
                return (
                  <Select
                    onChange={
                      field.onChangeFn
                        ? (value) =>
                            field.onChangeFn(
                              field.name as keyof FormFields,
                              value
                            )
                        : undefined
                    }
                    disabled={field.disabled}
                  >
                    {field.selectOptions.map((value) => (
                      <Select.Option key={value} value={value}>
                        {value}
                      </Select.Option>
                    ))}
                  </Select>
                );
              case "date":
                return (
                  <DatePicker
                    format={"DD-MMM-YYYY"}
                    onChange={
                      field.onChangeFn
                        ? (value) =>
                            field.onChangeFn(
                              field.name as keyof FormFields,
                              value
                            )
                        : undefined
                    }
                    style={{width:"100%"}}
                  ></DatePicker>
                );
              default:
                return (
                  <Input
                    onChange={
                      field.onChangeFn
                        ? (value) =>
                            field.onChangeFn(
                              field.name as keyof FormFields,
                              value
                            )
                        : undefined
                    }
                    maxLength={field.maxLength}
                    disabled={field.disabled}
                  />
                );
            }
          })()}
        </Form.Item>
      ))}
    </Form>
  );
};

export default FormDispenser;
