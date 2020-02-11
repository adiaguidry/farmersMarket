import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as createAction from "../actions/farmActions";
import "../components/style.scss";
import Nav from "./nav";
import { useRoutes } from "hookrouter";
import routes from "../routes/routes";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createAction.initialState());
  }, []);

  const routeResults = useRoutes(routes);
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <Nav />
      <div className="wrapper">{routeResults}</div>
    </div>
  );
}

export default App;
