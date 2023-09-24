import { Vehicles } from "./ObjectDataTypes";

export interface CharacterType {
  name: string;
  summary: string;
  imageURL: string;
}

export interface ClientDataType {
  id: number;
  satisfaction: number;
  receivable: number;
  tasks: [];
}

export interface VendorDataType {
  id: number;
  satisfaction: number;
  payables: number;
  vehicles: Vehicles[];
}

export interface EmployeeDataType {
  id: number;
  satisfaction: number;
  vendor: number;
  client: number;
}

export interface FinanceDataType {
  id: number;
  satisfaction: number;
  collectionPeriod: number;
}
