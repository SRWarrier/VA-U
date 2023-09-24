import { List, Typography } from "antd";
import FinanceTaskCard from "./FinanceTaskItem";
import { useContext } from "react";
import GameContext, {
  GameContextType,
} from "@pages/games/EmployeeOfTheYear/gameContext";

const { Title } = Typography;

const ActionItems = [
  {
    taskid: 1,
    taskTitle: "Meeting with Client",
    charcater: "Delighted Kitchen",
    expectedBenefit: 1.2,
    time: 0.3,
  },
  {
    taskid: 2,
    taskTitle: "Meeting with Vendor",
    charcater: "Mayilvahanan",
    expectedBenefit: 0.5,
    time: 3,
  },
  {
    taskid: 3,
    taskTitle: "Onboarding",
    charcater: "Chrome Retail",
    expectedBenefit: 0.2,
    time: 4,
  },
];

interface ActionListProp {
  setMessage: (message: string) => void;
}

const FinanceActionList = ({ setMessage }: ActionListProp) => {
  const NegotiationMessages = (
    currentAmount: number,
    satisfactionLevel: number
  ) => {
    let negotiationMessages: string;

    if (satisfactionLevel < 0.5) {
      negotiationMessages = "We can offer a better price.";
    } else {
      negotiationMessages = "Our best price is on the table.";
    }

    if (currentAmount > 15000) {
      negotiationMessages =
        "Considering the task difficulty, we can offer more.";
    } else {
      negotiationMessages = "This is our final offer.";
    }

    setMessage(negotiationMessages);
  };

  const { status, dispatch } = useContext(GameContext) as GameContextType;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <Title level={5} style={{ margin: 0 }}>
          Activities
        </Title>
      </div>
      <List
        style={{ height: "65%" }}
        bordered={false}
        split={true}
        size="small"
      >
        {status.finance_tasks.map((item) => (
          <List.Item key={item.taskid} style={{ padding: "1px" }}>
            <FinanceTaskCard
              taskid={item.taskid}
              tasktype={item.tasktype}
              tasktitle={item.tasktitle}
              character={item.character}
              amount={item.amount}
              time={item.time}
              onAccept={() => console.log("Accepted")}
              onNegotiation={NegotiationMessages}
            />
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default FinanceActionList;
