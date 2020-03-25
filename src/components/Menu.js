import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar menu is-centered columns">
      <Link to="/">
        <div className="navbar-item column">Home</div>
      </Link>
      <Link to="/beginnings">
        <div className="navbar-item column">Beginnings</div>
      </Link>
      <Link to="/about">
        <div className="navbar-item column">About Me</div>
      </Link>
      <Link to="/dev">
        <div className="navbar-item column">My Dev Journey</div>
      </Link>{" "}
      <Link to="/contact">
        <div className="navbar-item column">Contact Me</div>
      </Link>
    </nav>
  );
}

export default Menu;
