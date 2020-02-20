import React from "react";
import { A } from "hookrouter";
import logo from "../images/fruit.svg";
import { useSelector } from "react-redux";

const Nav = () => {
  const user = useSelector(state => state.users.currentUser);
  const selectedFarm = useSelector(state => state.farm);
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg bg-light text-uppercase fixed-top"
        id="mainNav"
      >
        <A href="/">
          <img style={{ width: 60 }} src={logo} alt="" /> Ca Online farmers
          Market
        </A>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="navbar-toggler-icon fas fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          style={{ justifyContent: "space-evenly" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <A href="/farmers" className="nav-link">
                FARMERS
              </A>
            </li>
            <li className="nav-item active">
              <A href="/createbox" className="nav-link">
                CREATE A BOX
              </A>
            </li>
          </ul>
        </div>

        {user.firstName ? (
          <div
            className="d-flex justify-content-end collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <h5 className="m-2">Welcome {user.firstName}</h5>
            <button className="btn btn-sm">
              <a> Logut </a>
            </button>
          </div>
        ) : (
          <div>
            <button className="btn btn-sm">
              <a> LogIn </a>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
