import { Button, Select } from "antd";
import {
  Line,
  Bar,
  Pie,
  Column,
  Area,
  Radar,
  Scatter,
} from "@ant-design/plots";
import { useState } from "react";
import { MinusOutlined, PlusOutlined, ExpandOutlined } from "@ant-design/icons";

interface ChartProps {
  title: string;
  data: Array<{}>;
  type: string;
}

const Chart = ({ title, data, type }: ChartProps) => {
  const [chartSize, setChartSize] = useState("medium");

  const handleSizeSelection = (size: string) => {
    setChartSize(size);
  };

  const getSizeRadius = (size: string): number => {
    switch (size) {
      case "small":
        return 0.5;
      case "medium":
        return 0.8;
      case "large":
        return 1.2;
      default:
        return 0.8;
    }
  };

  const handleShowDetails = () => {
    // Logic to show details
  };

  const chartConfig = {
    data: data,
    xField: "x",
    yField: "y",
    radius: getSizeRadius(chartSize),
  };

  let ChartComponent;
  switch (type) {
    case "line":
      ChartComponent = Line;
      break;
    case "bar":
      ChartComponent = Bar;
      break;
    case "pie":
      ChartComponent = Pie;
      break;
    case "column":
      ChartComponent = Column;
      break;
    case "area":
      ChartComponent = Area;
      break;
    case "radar":
      ChartComponent = Radar;
      break;
    case "scatter":
      ChartComponent = Scatter;
      break;
    default:
      ChartComponent = Line;
  }

  return (
    <div className={`chart chart-${chartSize}`}>
      <div className="chart-header">
        <h3 className="chart-title">{title}</h3>
      </div>
      <div className="size-selection">
        <Button
          onClick={() => handleSizeSelection("small")}
          icon={<MinusOutlined />}
        />
        <Button
          onClick={() => handleSizeSelection("medium")}
          icon={<PlusOutlined />}
        />
        <Button
          onClick={() => handleSizeSelection("large")}
          icon={<ExpandOutlined />}
        />
      </div>
      <ChartComponent {...chartConfig} />
      <div className="chart-footer">
        <Button onClick={handleShowDetails}>Show Details</Button>
      </div>
    </div>
  );
};

export default Chart;
