import { v4 as uuidv4 } from "uuid";
import { ComponentTransformer } from "../../../screens/myspace/features/componentTransformer";
import { message } from "antd";
import { useState, MouseEvent } from "react";
import { Layout } from "react-grid-layout";

interface Box {
  key: string;
  name: string;
  type: string;
  component: JSX.Element;
}

const OnDrop = (
  _layout: Layout[],
  _layoutItem: Layout,
  event: MouseEvent<HTMLElement>
) => {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [layout, setLayout] = useState<Layout[]>([]);
  const droppedData = JSON.parse(event.dataTransfer.getData("text/plain")) as {
    id: string;
    name: string;
    type: string;
  };

  const { id, name, type } = droppedData;

  console.log(type);
  setBoxes((prevBoxes) => {
    const existingItem = prevBoxes.find((box) => box.key === id);
    if (existingItem) {
      message.info("Item already in your space.");
      return prevBoxes;
    } else {
      const transformedComponent = ComponentTransformer({ type, name });
      const newItem: Box = {
        key: id || uuidv4(),
        name,
        type,
        component: transformedComponent!,
      };

      const dropZone = dropTargetRef.current?.getBoundingClientRect();
      if (dropZone) {
        const x = Math.floor(event.clientX - dropZone.left);
        const y = Math.floor(event.clientY - dropZone.top);

        const newLayoutItem: Layout = {
          i: newItem.key,
          x: Math.floor(x / 100),
          y: Math.floor(y / 100),
          w: 1,
          h: 1,
        };

        setLayout((prevLayout) => [...prevLayout, newLayoutItem]);
      }

      return [...prevBoxes, newItem];
    }
  });
};

export default OnDrop;
