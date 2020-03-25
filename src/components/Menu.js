import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar is-centered columns">
      <Link to="/">
        <div className="navbar-item column">Home</div>
      </Link>
      <Link to="/beginnings">
        <div className="navbar-item column">Beginnings</div>
      </Link>
      <Link to="/about">
        <div className="navbar-item column">About</div>
      </Link>
      <Link to="/dev">
        <div className="navbar-item column">My Dev Journey</div>
      </Link>
    </nav>
  );
}

export default Menu;
