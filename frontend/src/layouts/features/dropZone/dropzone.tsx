import { useState } from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";

interface DropZoneProps {
  gridSize: number;
}

const DropZone = ({ gridSize }: DropZoneProps) => {
  const [items, setItems] = useState([]);

  const handleDrop = (item: [], position: { x: number; y: number }) => {
    const newItem: [] = { ...item, position };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: (item: Item, monitor: DropTargetMonitor) => {
      const position = monitor.getClientOffset();
      if (position) {
        handleDrop(item, position);
      }
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  }));

  const getDropZoneStyles = () => {
    if (canDrop && !isOver) {
      return { border: "1px dashed #999" };
    } else if (canDrop && isOver) {
      return { border: "1px dashed blue" };
    } else {
      return { border: "1px solid #999" };
    }
  };

  return (
    <div ref={drop} style={{ ...getDropZoneStyles(), padding: "16px" }}>
      <h2>Drop Zone</h2>
      {items.map((item) => (
        <DraggableItem
          key={item.id}
          item={item}
          gridSize={gridSize}
          onRemove={handleRemoveItem}
        />
      ))}
    </div>
  );
};

export default DropZone;
