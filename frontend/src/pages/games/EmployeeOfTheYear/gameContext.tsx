import { createContext } from "react";
import {
  ClientDataType,
  VendorDataType,
  EmployeeDataType,
  FinanceDataType,
} from "./data/EOTM_types/CharacterDataTypes";

import {
  MessageProps,
  EmployeeTask,
  EmployeeTaskAssignment,
  FinanceTask,
} from "./data/EOTM_types/ObjectDataTypes";

interface GameContextType {
  status: {
    startpack: [];
    clients: ClientDataType[];
    vendors: VendorDataType[];
    employees: EmployeeDataType[];
    finance: FinanceDataType[];
    day: number;
    news: Array<MessageProps>;
    current_client: ClientDataType | undefined;
    current_vendor: VendorDataType | undefined;
    current_employee: EmployeeDataType | undefined;
    employee_accepted_tasks: Array<EmployeeTaskAssignment>;
    employee_pending_tasks: Array<EmployeeTask>;
    finance_tasks: Array<FinanceTask>;
  };
  dispatch: (newState: {}) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export default GameContext;
export type { GameContextType };
