import {
  MessageProps,
  EmployeeTask,
  EmployeeTaskAssignment,
  FinanceTask,
} from "./data/EOTM_types/ObjectDataTypes";
import {
  EmployeeDataType,
  ClientDataType,
  VendorDataType,
  FinanceDataType,
} from "./data/EOTM_types/CharacterDataTypes";

interface GameState {
  startpack: [];
  news: MessageProps[];
  clients: ClientDataType[];
  vendors: VendorDataType[];
  employees: EmployeeDataType[];
  finance: FinanceDataType[];
  day: number;
  current_client: ClientDataType;
  current_vendor: VendorDataType;
  current_employee: EmployeeDataType;
  current_finance: FinanceDataType;
  employee_accepted_tasks: Array<EmployeeTaskAssignment>;
  employee_pending_tasks: Array<EmployeeTask>;
  finance_tasks: Array<FinanceTask>;
}

const GameReducer = (state: GameState, action: any) => {
  switch (action.type) {
    case "startpack":
      return {
        ...state,
        startpack: action.payload,
      };
    case "add_news":
      return {
        ...state,
        news: [...state.news, action.payload],
      };
    case "remove_news":
      const updatedNews = state.news.filter(
        (newsItem) => newsItem.newsid !== action.payload
      );
      return {
        ...state,
        news: updatedNews,
      };
    case "clients":
      return {
        ...state,
        clients: [...state.clients, action.payload],
      };
    case "vendors":
      return {
        ...state,
        vendors: [...state.vendors, action.payload],
      };
    case "employees":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case "finance":
      return {
        ...state,
        finance: action.payload,
      };
    case "add_day":
      return {
        ...state,
        day: action.payload + 1,
      };
    case "current_client":
      return {
        ...state,
        current_client: action.payload,
      };
    case "current_vendor":
      return {
        ...state,
        current_vendor: action.payload,
      };
    case "current_employee":
      return {
        ...state,
        current_employee: action.payload,
      };
    case "current_finance":
      return {
        ...state,
        current_finance: action.payload,
      };
    case "add_finance_task":
      return {
        ...state,
        finance_tasks: action.payload,
      };
    case "add_employee_pending_task":
      return {
        ...state,
        employee_pending_task: action.payload,
      };
    case "add_employee_accepted_task":
      return {
        ...state,
        employee_accepted_tasks: action.payload,
      };
    case "add_client_task":
      const { clientId, task } = action.payload;
      const updatedClients = state.clients.map((client) => {
        if (client.id === clientId) {
          const taskCount = client.tasks.length;
          let _task = { ...task, taskid: taskCount };
          return {
            ...client,
            tasks: [...client.tasks, _task],
          };
        }
        return client;
      });

      return {
        ...state,
        clients: updatedClients,
      };
    default:
      return state;
  }
};

export { GameReducer };
