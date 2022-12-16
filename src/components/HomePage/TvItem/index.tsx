import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../constants/routes";
import { ITVItem } from "../../../types/home-page";
import "./styles.css";
interface ITvItemProps {
  item: ITVItem;
}
export const TvItem: FC<ITvItemProps> = ({ item }) => {
  const { show } = item;
  let navigate = useNavigate();
  const linkToItem = () => {
    navigate(routes.show.get(item.show.id));
  };
  return (
    <div className="scheduled-item" onClick={linkToItem}>
      <img
        src={
          show.image && show.image.original
            ? show.image?.original
            : show.image?.medium
        }
        alt={show.name}
        className="scheduled-item-image"
      />
      <p>{show.name}</p>
    </div>
  );
};
