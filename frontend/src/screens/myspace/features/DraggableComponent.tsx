import React, { MouseEvent } from "react";
import { Layout } from "react-grid-layout";
import { v4 as uuidv4 } from "uuid";
import { message } from "antd";

import { ComponentTransformer } from "./componentTransformer";

interface DraggableBoxProps {
  id: string;
  name: string;
  type: string;
  onDrop: (
    layout: Layout[],
    layoutItem: Layout,
    event: MouseEvent<HTMLElement>
  ) => void;
}

const DraggableBox = ({ id, name, type, onDrop }: DraggableBoxProps) => {
  const handleDrop = (
    layout: Layout[],
    layoutItem: Layout,
    event: MouseEvent<HTMLElement>
  ) => {
    const droppedData = JSON.parse(
      event.dataTransfer.getData("text/plain")
    ) as { id: string; name: string; type: string };

    if (id === droppedData.id) {
      message.info("Item already in your space.");
      return;
    }

    const transformedComponent = ComponentTransformer({ type, name });

    const newLayoutItem: Layout = {
      i: id || uuidv4(),
      x: Math.floor(event.clientX / 100),
      y: Math.floor(event.clientY / 100),
      w: 1,
      h: 1,
    };

    onDrop(layout, newLayoutItem, event);
  };

  return (
    <div onDrop={handleDrop} draggable className="draggable-box">
      {name}
    </div>
  );
};

export default DraggableBox;
