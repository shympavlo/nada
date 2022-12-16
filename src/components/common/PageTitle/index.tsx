import React, { FC } from "react";
import "./styles.css";

interface IPageTitle {
  title: string;
}
export const PageTitle: FC<IPageTitle> = ({ title }) => (
  <h1 className="page-title">{title}</h1>
);
