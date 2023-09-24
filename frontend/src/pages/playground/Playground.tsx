import { Layout } from "antd";
import SIPDial from "@features/sipdial/dialler";

const { Content } = Layout;

const Playground = () => {
  return (
    <Layout>
      <Content>
        <SIPDial />
      </Content>
    </Layout>
  );
};

export default Playground;
