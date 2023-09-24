import { Button } from "antd";
import { Line } from "@ant-design/plots";

import "./linechart.css";

const LineChart = () => {
  // Sample data
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];

  // Configuration for the Line Chart
  const config = {
    data: data,
    xField: "year",
    yField: "value",
    height: 400,
    point: {
      size: 5,
      shape: "diamond",
    },
    lineStyle: {
      lineWidth: 2,
    },
  };

  return <Line {...config} />;
};

export default LineChart;
