import { InfoCard, LineChart } from "../../../components/charts";
import { Card, Col, Row, Statistic } from "antd";
import { Button } from "antd";
import ChartMenu from "../../../components/charts/features/ChartSetting/ChartSettings";

interface ComponentTransformerProps {
  type: string;
  name: string;
  id: string;
}

const ComponentTransformer = ({
  type,
  name,
  id,
}: ComponentTransformerProps) => {
  const TransformedComponent = () => {
    switch (type) {
      case "card":
        return <Statistic title={"test"} value={682163612} prefix="Rs." />;
      case "line":
        return <LineChart />;
      case "link":
        return <Button>{name}</Button>;
      default:
        return null;
    }
  };

  return (
    <div key={id} style={{ width: "100%", height: "100%" }}>
      <ChartMenu children={<TransformedComponent />} />
    </div>
  );
};

export { ComponentTransformer };
