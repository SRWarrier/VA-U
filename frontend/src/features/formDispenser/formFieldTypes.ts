import { SelectProps } from "antd";

interface FormFieldsTypes {
  name: string;
  label: string;
  span?: number;
  rules?: {}[];
  key?: string | number;
  inputType?: string;
  selectOptions?: SelectProps[]; // selection options
  style?: {};
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
  full_width?: boolean;
  placeholder?: string;
  group?: boolean;
  restrictDates?: [number, number]; //days [past, future]
  onChangeFn?: (values: any) => void;
}

export type { FormFieldsTypes };
