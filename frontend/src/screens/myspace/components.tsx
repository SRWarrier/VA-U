const dashboardInfoCards = [
  <InfoCard
    description="Total purchase made in the last year"
    icon="Phone"
    icon_color="blue"
    value={20000}
    caption="Total Purchase"
    editable={false}
    units="K"
    growth={100}
  />,
  <InfoCard
    description="Total sales made in the last year"
    icon="Calendar"
    icon_color="yellow"
    value={112181200}
    caption="Total Sales"
    editable={false}
    size="wide"
    growth={12000}
  />,
  <InfoCard
    icon="Home"
    icon_color="red"
    value={200}
    caption="Total Purchase"
    editable={false}
    summary="There has been signifcant dip in sales this month"
    size="big"
    growth={-2000000}
  />,
  <InfoCard
    value={200}
    caption="Total Purchase"
    editable={false}
    size="small"
    show_details={false}
  />,
];

const SecondPanel = [
  <Gauge
    height={300}
    min={0}
    max={100}
    value={gaugeData[0].value}
    range={[0, 25, 50, 75, 100]}
    color={["#39B8FF", "#52619B", "#43E089", "#C0EDF3"]}
    statistic={{
      content: {
        formatter: () => {
          return `Value: ${gaugeData[0].value}`;
        },
        style: {
          fontSize: "30px",
          fontWeight: "bold",
        },
      },
    }}
  />,
];

const tasklist = [];
