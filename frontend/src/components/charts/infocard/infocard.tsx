import React from "react";
import { useRef, useState } from "react";
import { Tooltip, Button } from "antd";
import {
  InfoCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

import ChartEditMenu from "../features/editMenu";
import IconDispenser from "../../../features/IconDispenser";

import "./infocard.css";
import { colorCodes } from "../../../features/colorSchemes";
import { IconPicker } from "../../../features/iconPicker";

const unitChart = { L: 100000, K: 1000, C: 10000000, U: 1 };
const convUnits = (number: number, units: keyof typeof unitChart) => {
  return (
    (number / unitChart[units]).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    }) + (units != "U" ? units : "")
  );
};

interface InfoCardProps {
  description?: string;
  font_color_type?: string;
  icon?: React.ReactNode;
  caption?: string;
  editable?: boolean;
  size?: string;
  icon_color?: string;
  show_details?: boolean;
  growth?: number;
  isnumeric?: boolean;
  units?: string;
  summary?: string;
  value: number | string;
  onDelete?: () => void;
}

const InfoCard = ({
  description,
  icon,
  icon_color,
  caption,
  value,
  editable = false,
  growth,
  show_details = true,
  summary,
  units = "C",
  size = "normal",
  font_color_type,
}: InfoCardProps) => {
  const [cardSize, setCardSize] = useState(size);

  const handleDelete = () => {
    componentRef.current.remove();
  };

  const toggleSize = (resetSize: string) => {
    setCardSize(resetSize);
    componentRef.current.setAttribute("data-size", resetSize);
  };

  // Create reference for dom element
  const componentRef = useRef(null);

  return (
    <div
      className={`info-card ${"info-card--" + cardSize}`}
      ref={componentRef}
      data-size={cardSize}
    >
      <div
        className={`info-card__header ${
          editable && "info-card__header--editable"
        }`}
      >
        {description && (
          <Tooltip title={description}>
            <InfoCircleOutlined className="info-icon" />
          </Tooltip>
        )}
        {editable && (
          <ChartEditMenu
            onDelete={handleDelete}
            componentRef={componentRef}
            toggleSize={toggleSize}
          />
        )}
      </div>
      <div
        className={`card-content ${
          cardSize != "normal" && "card-content--" + cardSize
        }`}
      >
        {icon && (
          <div
            className={`metric-icon ${
              cardSize != "normal" && "metric-icon--" + cardSize
            }`}
          >
            {
              <IconDispenser
                icon={icon as keyof typeof IconPicker}
                color={icon_color as keyof typeof colorCodes}
              />
            }
          </div>
        )}
        <div className={`metric ${cardSize == "wide" && "metric--wide"}`}>
          <div
            className={`metric-value ${
              cardSize == "wide" && "metric-value--wide"
            } ${font_color_type && "metric-value--font-" + font_color_type}`}
          >
            {typeof value === "number"
              ? convUnits(value, units as keyof typeof unitChart)
              : value}
          </div>
          {caption && <div className="metric-name">{caption}</div>}
        </div>
        {growth && cardSize != "small" && (
          <div className="metric__growth-indicator">
            {growth > 0 ? (
              <ArrowUpOutlined className="metric__growth-indicator--positive" />
            ) : (
              <ArrowDownOutlined className="metric__growth-indicator--negetive" />
            )}
            {convUnits(growth, units as keyof typeof unitChart)}
          </div>
        )}
        {summary && cardSize === "big" && (
          <div className="metric__summary">{summary}</div>
        )}

        {!editable && show_details && cardSize != "small" && (
          <div className="show-details__container">
            <Button className="show-details-btn">Show Details</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
