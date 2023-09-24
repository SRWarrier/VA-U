import { useState, useRef, MouseEvent } from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import { ComponentTransformer } from "../../screens/myspace/features/componentTransformer";
import { Button, message } from "antd";
import { EditOutlined, ContainerOutlined } from "@ant-design/icons";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./myspaceLayout.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

interface Box {
  key: string;
  name: string;
  type: string;
  component: JSX.Element;
}

interface MySpaceLayoutProps {
  editable: (setEditable: boolean) => void;
  viewBuilder: (viewBuilder: boolean) => void;
  builderVisible: boolean;
  layoutEditable: booelan;
}

const MySpaceLayout = ({
  editable,
  viewBuilder,
  builderVisible,
  layoutEditable,
}: MySpaceLayoutProps) => {
  const dropTargetRef = useRef<HTMLDivElement>(null);
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [layout, setLayout] = useState<Layout[]>([]);

  const onDrop = (
    _layout: Layout[],
    _layoutItem: Layout,
    event: MouseEvent<HTMLElement>
  ) => {
    const droppedData = JSON.parse(
      event.dataTransfer.getData("text/plain")
    ) as { id: string; name: string; type: string };

    const { id, name, type } = droppedData;

    console.log(droppedData);
    setBoxes((prevBoxes) => {
      const existingItem = prevBoxes.find((box) => box.key === id);
      if (existingItem) {
        message.info("Item already in your space.");
        return prevBoxes;
      } else {
        const transformedComponent = ComponentTransformer({ type, name, id });
        const updateProps = { ...transformedComponent };
        const dropZone = dropTargetRef.current?.getBoundingClientRect();
        if (dropZone) {
          const x = event.clientX;
          const y = event.clientY;
        }
        console.log("component", transformedComponent);

        return [...prevBoxes, transformedComponent];
      }
    });
  };

  const handleResize = (layout: Layout[], oldItem: Layout, newItem: Layout) => {
    const resizedItemId = newItem.i;
    const resizedItemIndex = boxes.findIndex(
      (box) => box.key === resizedItemId
    );

    if (resizedItemIndex !== -1) {
      const updatedBoxes = [...boxes];
      const resizedItem = updatedBoxes[resizedItemIndex];
      console.log(resizedItem.props);
      const newSize = { width: newItem.w, height: newItem.h };
      const updatedProp = {
        ...resizedItem.props,
        size: "wide",
      };
      const updatedItem = {
        ...resizedItem,
        props: updatedProp,
      };
      console.log(updatedItem);
      updatedBoxes[resizedItemIndex] = updatedItem;
      setBoxes(updatedBoxes);
    }
  };

  return (
    <div className="myspace__container">
      <div className="layout__editmenu">
        <Button
          icon={<EditOutlined />}
          onClick={() => editable(true)}
          className="myspace__editbutton"
        ></Button>
        {layoutEditable && (
          <Button
            icon={<ContainerOutlined />}
            onClick={() => viewBuilder(!builderVisible)}
            className="myspace__showdrawer"
          ></Button>
        )}
      </div>
      <div ref={dropTargetRef}>
        <ResponsiveReactGridLayout
          onDrop={onDrop}
          autoSize={true}
          isBounded={false}
          isDraggable={true}
          preventCollision={true}
          isDroppable={true}
          useCSSTransforms={true}
          // layouts={{ lg: layout }} // Pass the layout to the ResponsiveReactGridLayout
          isResizable={true}
          onResizeStop={handleResize}
          cols={{ lg: 6, md: 6, sm: 4, xs: 4, xxs: 2 }}
        >
          {boxes.map((box) => (
            <div key={box.key}>{box}</div>
          ))}
        </ResponsiveReactGridLayout>
      </div>
    </div>
  );
};

export default MySpaceLayout;
