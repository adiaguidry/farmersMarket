import React from "react";
import "../components/style.scss";
import Nav from "./nav";
import { useRoutes } from "hookrouter";
import routes from "../routes/routes";

function App() {
  const routeResults = useRoutes(routes);
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <Nav />
      <div className="wrapper">{routeResults}</div>
    </div>
  );
}

export default App;
