import { List, Typography } from "antd";
import VehicleItems from "./vehicleListTaskItem";

const { Title } = Typography;

const ActionItems = [
  {
    taskid: 1,
    vehicle: "Tata Ace",
    time: 6,
    amount: 20000,
    acceptTime: 6,
  },
  {
    taskid: 2,
    vehicle: "Bolero",
    time: 3,
    amount: 10000,
    acceptTime: 3,
  },
  {
    taskid: 3,
    vehicle: "Tata 407",
    time: 7,
    amount: 25000,
    acceptTime: 4,
  },
];

interface ActionListProp {
  setMessage: (message: string) => void;
}

const ActionList = ({ setMessage }: ActionListProp) => {
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
          Vehicle List
        </Title>
      </div>
      <List
        style={{ height: "65%" }}
        bordered={false}
        split={true}
        size="small"
      >
        {ActionItems.map((item) => (
          <List.Item key={item.taskid} style={{ padding: "1px" }}>
            <VehicleItems
              vehicle={item.vehicle}
              available={2}
              quality="bad"
              amount={item.amount}
              onAccept={() => console.log("Accepted")}
              onNegotiation={NegotiationMessages}
            />
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default ActionList;
