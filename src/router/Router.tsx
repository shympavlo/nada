import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import HomePage from "../pages/HomePage";
import Show from "../pages/Show";

function Router() {
  return (
    <Routes>
      <Route path={routes.home.path} element={<HomePage />} key={"home"} />
      <Route path={routes.show.path} element={<Show />} key={"show"} />
    </Routes>
  );
}

export default Router;
