import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="navbar-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link to="/information">Information</Link>
            </li>
            <li className="nav-item">
              <Link to="/team">Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
