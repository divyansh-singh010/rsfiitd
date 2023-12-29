import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="navbar-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/">Events</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/team">Team</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
