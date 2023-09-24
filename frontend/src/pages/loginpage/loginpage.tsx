import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Loginform, Banner } from "./components/index";
import "./loginpage.css";

const LoginPage = () => {
  const [loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();
  const updateStatus = (status: boolean) => {
    setLoggedin(status);
    if (status) {
      navigate("/wave");
    }
  };

  return (
    <div className="loginpage">
      <div style={{ width: "50%" }}>
        <Banner />
      </div>
      <Loginform status={updateStatus} />
      <Link to={"wave"}></Link>
    </div>
  );
};

export default LoginPage;
