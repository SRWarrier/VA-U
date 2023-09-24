import "./loginBackground.css";

import DeliveryTruck from "./Truck/Truck";

const Road = () => {
  return <div className="road"></div>;
};

const Truck = () => {
  return (
    <div className="truck">
      <div className="truck-body"></div>
      <div className="truck-cabin"></div>
    </div>
  );
};

const Delivery = () => {
  return <div className="delivery"></div>;
};

const LoginBackground = () => {
  return (
    <div className="loginpage__container">
      <Road />
      <Truck />
      <DeliveryTruck />
    </div>
  );
};

export default LoginBackground;
