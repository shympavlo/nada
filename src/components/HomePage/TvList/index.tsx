import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { FC, useState } from "react";
import { ITVItem } from "../../../types/home-page";
import { Button } from "../../common/Button";
import { TvItem } from "../TvItem";
import "./styles.css";

interface ITvList {
  scheduled: ITVItem[];
}
export const TvList: FC<ITvList> = ({ scheduled }) => {
  const [visible, setVisible] = useState(9);

  const showMore = () => {
    setVisible((prevValue) => prevValue + 9);
  };
  return (
    <>
      <div className="scheduled-list-container">
        {scheduled?.slice(0, visible).map((item: ITVItem) => (
          <TvItem item={item} key={item.id} />
        ))}
      </div>
      <div className="button-container">
        <Button
          title="Show more"
          onPress={showMore}
          disabled={visible >= scheduled.length}
        />
      </div>
    </>
  );
};
