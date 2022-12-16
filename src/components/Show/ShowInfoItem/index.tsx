import React, { FC } from "react";
import "./styles.css";

interface ShowInfoItem {
  title: string;
  info: string;
}
export const ShowInfoItem: FC<ShowInfoItem> = ({ title, info }) => {
  return (
    <div className="show-info-item">
      <p className="show-info-title">{title}</p>
      <p className="show-info-info">{info}</p>
    </div>
  );
};
