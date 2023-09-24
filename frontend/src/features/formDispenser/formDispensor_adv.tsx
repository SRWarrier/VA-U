import { Form, Select, Input, DatePicker, Row, Col, InputNumber } from "antd";
import { FormLayout } from "antd/lib/form/Form";
import { FormInstance } from "antd";
import { FormFieldsTypes } from "./formFieldTypes";

interface FormDispenserProps {
  formfields: FormFieldsTypes[][];
  initialValues: any;
  layout?: FormLayout;
  formRef?: FormInstance<any>;
}

const compareDate = (date: any, daterange: [number, number]) => {
  const currentDate = new Date(date.toString());
  const futureDelta = daterange[1];
  const pastDelta = daterange[0];
  const Today = new Date();
  const FutureDateDelta = new Date(
    Today.setDate(Today.getDate() + futureDelta)
  );
  const PastDateDelta = new Date(Today.setDate(Today.getDate() - pastDelta));
  return currentDate > FutureDateDelta || currentDate < PastDateDelta;
};

const FormDispenser = ({
  formfields,
  initialValues,
  layout = "vertical",
  formRef,
}: FormDispenserProps) => {
  return (
    <Form
      layout={layout}
      initialValues={initialValues}
      form={formRef}
      style={{ padding: "10px" }}
    >
      {formfields.map((formRow) => (
        <Row gutter={8}>
          {formRow.map((field) => (
            <Col span={field.span ? field.span : 24 / formRow.length}>
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
                              ? (value) => field.onChangeFn!(value)
                              : undefined
                          }
                          disabled={field.disabled}
                          options={field.selectOptions}
                        />
                      );
                    case "date":
                      return (
                        <DatePicker
                          format={"DD-MMM-YYYY"}
                          onChange={
                            field.onChangeFn
                              ? (value) => field.onChangeFn!(value)
                              : undefined
                          }
                          style={{ width: "100%" }}
                        ></DatePicker>
                      );
                    case "datetime":
                      return (
                        <DatePicker
                          showTime
                          disabledDate={
                            field.restrictDates != undefined
                              ? (current) =>
                                  compareDate(current, field.restrictDates!)
                              : undefined
                          }
                          format={"DD-MMM-YYYY HH:mm"}
                          onChange={
                            field.onChangeFn
                              ? (value) => field.onChangeFn!(value)
                              : undefined
                          }
                          style={{ width: "100%" }}
                        ></DatePicker>
                      );
                    case "number":
                      return (
                        <InputNumber
                          onChange={
                            field.onChangeFn
                              ? (value) => field.onChangeFn!(value)
                              : undefined
                          }
                          min={field.minLength}
                          max={field.maxLength}
                          disabled={field.disabled}
                          style={{ width: "100%" }}
                        />
                      );
                    default:
                      return (
                        <Input
                          onChange={(value) => field.onChangeFn!(value)}
                          maxLength={field.maxLength}
                          disabled={field.disabled}
                        />
                      );
                  }
                })()}
              </Form.Item>
            </Col>
          ))}
        </Row>
      ))}
    </Form>
  );
};

export default FormDispenser;
