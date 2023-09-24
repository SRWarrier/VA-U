import { useRouteError } from "react-router-dom";
import { ExclamationCircleTwoTone } from "@ant-design/icons";
import { Image } from "antd";
import "./Errorpage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1 className="error-page__title">Page Lost in Transit</h1>
      <p className="error-page__message">
        Don't worry, our tracking system is top notch. We will get you back on
        track very soon.
      </p>
      <p className="error-page__suggestion">
        Meantime, would you mind checking the address you would like to reach.
      </p>
    </div>
  );
}
