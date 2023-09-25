import { useNavigate } from "react-router-dom";

const HandleView = (record: any) => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/viewclient");
    console.log(record);
  };
};

export default HandleView;
