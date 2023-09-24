import { Layout } from "antd";
import { useState } from "react";
import { MySpaceLayout } from "../../layouts/index";
import MyspaceBuilder from "./features/myspaceBuilder";
import "./mySpace.css";

const { Content } = Layout;

const MySpace = () => {
  const [editable, setEditable] = useState<boolean>(false);
  const [builderVisible, setBuilderVisible] = useState<boolean>(false);
  return (
    <Layout style={{ height: "100%" }} className="myspace__container">
      <Content>
        <MySpaceLayout
          editable={setEditable}
          viewBuilder={setBuilderVisible}
          builderVisible={builderVisible}
          layoutEditable={editable}
        />
      </Content>
      {editable && (
        <MyspaceBuilder
          visible={builderVisible}
          setVisible={setBuilderVisible}
        />
      )}
    </Layout>
  );
};

export default MySpace;
