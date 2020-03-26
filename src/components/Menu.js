import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="menu-list">
        <Link to="/">
          <div className="menu-item column">Home</div>
        </Link>
        <Link to="/beginnings">
          <div className="menu-item column">Beginnings</div>
        </Link>
        <Link to="/about">
          <div className="menu-item column">About Me</div>
        </Link>
        <Link to="/dev">
          <div className="menu-item column">My Dev Journey</div>
        </Link>{" "}
        <Link to="/contact">
          <div className="menu-item column">Contact Me</div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
