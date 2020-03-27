import React from "react";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  let path = useLocation();
  return (
    <div className="tabs menu is-medium is-boxed is-centered is-on-top">
      <ul>
        <li className={path.pathname === "/" ? "is-active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={path.pathname === "/beginnings" ? "is-active" : ""}>
          <Link to="/beginnings">Beginnings</Link>
        </li>
        <li className={path.pathname === "/about" ? "is-active" : ""}>
          <Link to="/about">About Me</Link>
        </li>
        <li className={path.pathname === "/dev" ? "is-active" : ""}>
          <Link to="/dev">My Dev Journey</Link>
        </li>
        <li className={path.pathname === "/contact" ? "is-active" : ""}>
          <Link to="/contact">Contact me</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
