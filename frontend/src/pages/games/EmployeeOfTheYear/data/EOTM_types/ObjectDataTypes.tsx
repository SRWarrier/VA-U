import { EmployeeDataType } from "./CharacterDataTypes";

export type Industry =
  | "Food"
  | "Groceries"
  | "Electronics"
  | "Textiles"
  | "Furniture";

export interface PriceRange {
  low: number;
  mid: number;
  high: number;
  factor: number;
}

interface BreakdownFrequency {
  good: number;
  average: number;
  bad: number;
}

export interface VehicleProps {
  industryMostServed: Industry[];
  breakdownFrequency: BreakdownFrequency;
}

export interface MessageProps {
  newsid: number;
  message: string;
  type: "incident" | "request" | "negative" | "positive";
}

export interface Vehicles {
  id: number;
  name: string;
  deployed: number;
  quality: number;
  available: number;
}

export interface EmployeeTask {
  taskid: number;
  tasktitle: string;
  character: string;
  expectedBenefit: number;
  time: number;
}

export interface EmployeeTaskAssignment {
  task: EmployeeTask;
  employee: EmployeeDataType;
  progress: number;
}

export interface FinanceTask {
  taskid: number;
  tasktitle: string;
  tasktype: "billing" | "receivable" | "payable" | "followups";
  character: string;
  amount: number;
  time: number;
}
