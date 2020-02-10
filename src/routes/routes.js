import React from "react";
import DND from "../components/dnd";
import Home from "../components/home";
import Farmers from "../components/farmers";
import CreateBox from "../components/creatBox";

const routes = {
  "/farmers": () => <Farmers />,
  "/createbox": () => <CreateBox />,
  "/": () => <Home />
};

export default routes;
