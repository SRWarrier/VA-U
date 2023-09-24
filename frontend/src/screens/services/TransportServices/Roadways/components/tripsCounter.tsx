import { Segmented, Badge, Typography, Card } from "antd";

const { Text } = Typography;

const TripCounter = () => {
  const CounterOptions = [
    {
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Text>All</Text>
          <Badge
            count={200}
            showZero
            color="blue"
            offset={[2, 0]}
            size="small"
            style={{ fontSize: "10px" }}
          />
        </div>
      ),
      value: "all",
    },
    {
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Text>Running</Text>
          <Badge
            count={11}
            showZero
            color="lime"
            offset={[2, 0]}
            size="small"
            style={{ fontSize: "10px" }}
          />
        </div>
      ),
      value: "Running",
    },
    {
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Text>Breakdown</Text>
          <Badge
            count={200}
            showZero
            color="light-red"
            offset={[2, 0]}
            size="small"
            style={{ fontSize: "10px" }}
          />
        </div>
      ),
      value: "breakdown",
    },
    {
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Text>Halting</Text>
          <Badge
            count={200}
            showZero
            color="grey"
            offset={[2, 0]}
            size="small"
            style={{ fontSize: "10px" }}
          />
        </div>
      ),
      value: "Halting",
    },
    {
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Text>Completed</Text>
          <Badge
            count={200}
            showZero
            color="gold"
            offset={[2, 0]}
            size="small"
            style={{ fontSize: "10px" }}
          />
        </div>
      ),
      value: "Completed",
    },
  ];
  return (
    <Segmented
      defaultValue="all"
      options={CounterOptions}
      style={{ padding: "10px" }}
    />
  );
};

export default TripCounter;
