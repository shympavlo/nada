import React, { FC } from "react";
import "./styles.css";

interface IButton {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}
export const Button: FC<IButton> = ({ title, onPress, disabled }) => {
  return (
    <button onClick={onPress} className="button" disabled={disabled}>
      <p className="button-titles">{title}</p>
    </button>
  );
};
