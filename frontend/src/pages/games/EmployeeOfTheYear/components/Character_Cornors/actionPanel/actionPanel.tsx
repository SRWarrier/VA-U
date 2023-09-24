import { useState } from "react";
import ActionList from "./ListItem/Taskitem/actionList";
import VehicleList from "./ListItem/VehicleItem/vehicleList";
import EmployeeActionList from "./ListItem/EmployeeTask/EmployeeTask";
import FinanceTaskList from "./ListItem/FinanceTask/FinanceTask";
import MessageCenter from "./messages";

interface ActionPanelProp {
  characterType: string;
}

const getTaskPanel = (
  characterType: string,
  messageFn: (message: string) => void
) => {
  switch (characterType) {
    case "Client":
      return <ActionList setMessage={messageFn} />;
    case "Vendor":
      return <VehicleList setMessage={messageFn} />;
    case "Employee":
      return <EmployeeActionList setMessage={messageFn} />;
    case "Finance":
      return <FinanceTaskList setMessage={messageFn} />;
    default:
      return <></>;
  }
};

const ActionPanel = ({ characterType }: ActionPanelProp) => {
  const [message, setMessage] = useState<string>();

  return (
    <div
      style={{
        width: "100%",

        backgroundColor: "rgba(20,20,20,0.6)",
      }}
    >
      {getTaskPanel(characterType, setMessage)}
      <MessageCenter message={message} />
    </div>
  );
};

export default ActionPanel;
