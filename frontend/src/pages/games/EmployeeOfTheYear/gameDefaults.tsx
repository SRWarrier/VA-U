import { MessageProps } from "./data/EOTM_types/ObjectDataTypes";
import {
  EmployeeDataType,
  ClientDataType,
  VendorDataType,
  FinanceDataType,
} from "./data/EOTM_types/CharacterDataTypes";

const GameDefaults = {
  startpack: [],
  news: [] as MessageProps[],
  clients: [] as ClientDataType[],
  vendors: [] as VendorDataType[],
  employees: [] as EmployeeDataType[],
  finance: [] as FinanceDataType[],
  day: 1,
  current_client: {} as ClientDataType,
  current_vendor: {} as VendorDataType,
  current_employee: {} as EmployeeDataType,
  current_finance: {} as FinanceDataType,
  employee_accepted_tasks: [],
  employee_pending_tasks: [],
  finance_tasks: [],
};

export { GameDefaults };
