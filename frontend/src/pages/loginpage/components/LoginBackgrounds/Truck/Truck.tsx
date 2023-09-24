import "./Truck.css";

const DeliveryTruck = () => {
  return (
    <div className="truck-container">
      <div className="truck">
        <div className="truck__cabin">
          <div className="truck__window"></div>
          <div className="truck__headlights"></div>
        </div>
        <div className="truck__body">
          <div className="truck__cargo-container">
            <div className="truck__cargo"></div>
          </div>
          <div className="truck__rear-cabin"></div>
          <div className="truck__rear-lights"></div>
          <div className="truck__exhaust-pipe"></div>
        </div>
        <div className="truck__wheels">
          <div className="truck__wheel truck__wheel--front"></div>
          <div className="truck__wheel truck__wheel--rear"></div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTruck;
