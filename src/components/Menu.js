import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="section">
      <nav className="navbar">
        <Link to="/">
          <div className="navbar-item">Home</div>
        </Link>
        <Link to="/beginnings">
          <div className="navbar-item">Beginnings</div>
        </Link>
        <Link to="/about">
          <div className="navbar-item">About</div>
        </Link>
        <Link to="/dev">
          <div className="navbar-item">My Dev Journey</div>
        </Link>
      </nav>
    </div>
  );
}

export default Menu;
