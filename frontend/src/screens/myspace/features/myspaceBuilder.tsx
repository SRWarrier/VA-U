import { Tabs, List, Drawer } from "antd";
import { MyspaceCharts } from "../myspaceComponents/myspaceCharts";
import { MyspaceShortcuts } from "../myspaceComponents/myspaceShortcuts";
import { v4 as uuidv4 } from "uuid";
import IconDispenser from "../myspaceComponents/iconDispensor";

const createChildren = (items: any[]) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={items}
      renderItem={(item) => {
        const id = uuidv4(); // Generate a unique ID for each item

        return (
          <div className="listitem__container">
            <div
              id={id}
              data-name={item.name}
              data-type={item.type}
              draggable={true}
              className="myspacebuilder__draggable"
              style={{ cursor: "grab" }}
              onDragStart={(e) => {
                e.dataTransfer.setData(
                  "text/plain",
                  JSON.stringify({ id, name: item.name, type: item.type })
                );
              }}
            >
              <List.Item key={id} extra={IconDispenser(item.type)}>
                <List.Item.Meta description={item.name} />
                {item.content}
              </List.Item>
            </div>
          </div>
        );
      }}
    />
  );
};

const tabData = [
  {
    label: "Charts",
    key: "1",
    children: createChildren(MyspaceCharts),
  },
  {
    label: "Shortcuts",
    key: "2",
    children: createChildren(MyspaceShortcuts),
  },
];

interface MySpaceBuilderProp {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const MySpaceBuilder = ({ visible, setVisible }: MySpaceBuilderProp) => {
  const handleDrawerClose = () => {
    setVisible(false);
  };
  return (
    <Drawer
      open={visible}
      title="MySpace Builder"
      getContainer={false}
      closable={true}
      onClose={handleDrawerClose}
      mask={false}
    >
      <Tabs
        defaultActiveKey="1"
        size="small"
        type="card"
        style={{ marginBottom: 32 }}
        items={tabData}
        className="myspacebuilder__tabs"
      ></Tabs>
    </Drawer>
  );
};

export default MySpaceBuilder;
