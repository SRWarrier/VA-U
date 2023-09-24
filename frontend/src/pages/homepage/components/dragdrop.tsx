import { message } from "antd";

const DropZone = ({ items, onDrop }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    const itemId = event.dataTransfer.getData("text/plain");
    const draggedItem = items.find((item) => item.id === Number(itemId));
    event.preventDefault();
    setIsDragOver(false);
    onDrop(draggedItem.message);
    messageApi.info(draggedItem.message);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: isDragOver ? "2px dashed #1890ff" : "2px dashed #ccc",
        padding: "20px",
        marginBottom: "10px",
      }}
    >
      {contextHolder}
      Drop Zone
    </div>
  );
};

const App = () => {
  const [items, setItems] = useState([
    { id: 1, message: "Item 1" },
    { id: 2, message: "Item 2" },
    { id: 3, message: "Item 3" },
  ]);

  const handleDragStart = (event, id) => {
    event.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (message) => {
    const draggedItem = items.find((item) => item.message === message);
    const updatedItems = items.filter((item) => item.message !== message);
    setItems([...updatedItems, draggedItem]);
  };

  return (
    <div>
      <DropZone items={items} onDrop={handleDrop} />
      {items.map((item) => (
        <div
          key={item.id}
          draggable
          onDragStart={(event) => handleDragStart(event, item.id)}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            cursor: "move",
          }}
        >
          {item.message}
        </div>
      ))}
    </div>
  );
};

export default App;
