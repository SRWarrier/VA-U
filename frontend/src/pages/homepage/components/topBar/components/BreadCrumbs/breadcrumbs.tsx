import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "./breadcrumbs.css";

const Breadcrumbs = () => {
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const tail = pathSnippets[index];
    return {
      key: url,
      title: (
        <Link to={url}>{<div className="breadcrumb__items">{tail}</div>}</Link>
      ),
    };
  });

  const breadcrumbItems = [
    {
      title: (
        <Link to="/wave">
          <div className="breadcrumb__items">MySpace</div>
        </Link>
      ),
      key: "MySpace",
    },
  ].concat(extraBreadcrumbItems);

  return (
    <Breadcrumb
      separator="/"
      items={breadcrumbItems}
      className="breadcrumb__container"
    />
  );
};

export default Breadcrumbs;
