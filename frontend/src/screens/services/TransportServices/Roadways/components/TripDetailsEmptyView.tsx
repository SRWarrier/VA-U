import { Empty } from "antd";

const EmptyCardView = () => {
  return (
    <Empty
      image="/img/waiting truck.gif"
      imageStyle={{ height: 200 }}
      description={<h4>Select trip to view details</h4>}
    />
  );
};

export default EmptyCardView;
