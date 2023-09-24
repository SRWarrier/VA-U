import { Button } from "antd";

function getNotification() {
  return [
    { message: "Hello", time: "10 minutes ago" },
    { message: "this", time: "1 hour ago" },
    { message: "is", time: "2 hour ago" },
    { message: "a", time: "test" },
  ];
}

const NotificationPopover = () => {
  const notificationItems = getNotification().map((item) => (
    <li className="notification-item">
      <span className="notification-message">{item.message}</span>
      <span className="notification-time">{item.time}</span>
    </li>
  ));

  const notificationContent = (
    <div className="notification-content">
      <h3 className="notification-heading">New Notifications</h3>
      <ul className="notification-list">{notificationItems}</ul>
      <Button className="view-all-button" type="primary" block>
        View All Notifications
      </Button>
    </div>
  );
  return notificationContent;
};

export default NotificationPopover;
