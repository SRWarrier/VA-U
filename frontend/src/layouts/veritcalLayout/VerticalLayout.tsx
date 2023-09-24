import React from "react";
import LayoutEditMenu from "../features/LayoutEditMenu";
import "./VerticalLayout.css";

interface VerticalLayoutProps {
  children: React.ReactNode;
  editable?: boolean;
}

const VerticalLayout = (components: VerticalLayoutProps, editable = false) => {
  return (
    <>
      {editable && (
        <div className="layout__edit-menu">
          <LayoutEditMenu layoutType="vertical" />
        </div>
      )}
      <div className="vertical_layout__container">{components.children}</div>
    </>
  );
};

export default VerticalLayout;
