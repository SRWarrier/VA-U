import React from "react";
import { useDrag } from "react-dnd";
import "./draggable.css";

interface DraggableProps {
  id: number | string;
  name: string;
  type: string;
  Component?: React.ReactNode;
}

const Draggable = ({ id, Component, name, type }: DraggableProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { id, component: Component, name: name, type: type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`dragabble__item ${
        isDragging ? "dragabble__item--dragging" : "dragabble__item--drag"
      }`}
    >
      {Component}
    </div>
  );
};

export default Draggable;
