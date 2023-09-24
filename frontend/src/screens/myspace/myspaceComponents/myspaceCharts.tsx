import { InfoCard } from "../../../components/charts";

const MyspaceCharts = [
  {
    name: "Sales MTD Card",
    component: { InfoCard },
    level: 3,
    description: `Sales MTD Card display the total 
            sales made from the beginning of the Month till date`,
    type: "card",
  },
  {
    name: "Cost MTD Card",
    component: { InfoCard },
    level: 3,
    description: `Cost MTD Card display the total 
            cost incurred from the beginning of the Month till date`,
    type: "card",
  },

  {
    name: "Sales MTD Line",
    component: { InfoCard },
    level: 3,
    description: `Line Chart`,
    type: "line",
  },
  {
    name: "Cost MTD Line",
    component: { InfoCard },
    level: 3,
    description: `Line Chart MTD`,
    type: "line",
  },
];

export { MyspaceCharts };
