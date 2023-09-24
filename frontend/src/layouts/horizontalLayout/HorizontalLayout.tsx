import React from "react";
import LayoutEditMenu from "../features/LayoutEditMenu";
import "./HorizontalLayout.css";

interface HorizonatalLayoutProps {
  children: React.ReactNode;
  editable?: boolean;
}

const HorizontalLayout = (
  components: HorizonatalLayoutProps,
  editable = false
) => {
  return (
    <>
      {editable && (
        <div className="layout__edit-menu">
          <LayoutEditMenu layoutType="horizontal" />
        </div>
      )}
      <div className="horizontal_layout__container">{components.children}</div>
    </>
  );
};

export default HorizontalLayout;
