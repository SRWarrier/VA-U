import { Button } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

interface AddItemsProps {
  linktext: string;
}
const AddItemButton = ({ linktext }: AddItemsProps) => {
  return (
    <Link to={linktext}>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{ marginLeft: "16px" }}
      >
        Add New
      </Button>
    </Link>
  );
};

export default AddItemButton;
