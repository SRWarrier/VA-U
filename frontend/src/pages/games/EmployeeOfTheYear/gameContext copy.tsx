import { createContext } from "react";
import {
  ClientDataType,
  VendorDataType,
  EmployeeDataType,
  FinanceDataType,
} from "./data/EOTM_types/CharacterDataTypes";

interface GameContextType {
  clients: ClientDataType[];
  vendors: VendorDataType[];
  employees: EmployeeDataType[];
  finance: FinanceDataType[];
  currentDay: number;
  updates: string[];
  addClient: (client: ClientDataType) => void;
  addVendor: (vendor: VendorDataType) => void;
  addEmployee: (employee: EmployeeDataType) => void;
  addDay: (currentDay: number) => void;
  updateClient: (updatedClient: ClientDataType) => void;
  setOnScreenClient: (client: ClientDataType) => void;
  setOnScreenVendor: (vendor: VendorDataType) => void;
  setOnScreenEmployee: (employee: EmployeeDataType) => void;
  onScreenClient: ClientDataType | undefined;
  onScreenVendor: VendorDataType | undefined;
  onScreenEmployee: EmployeeDataType | undefined;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export default GameContext;
export type { GameContextType };
