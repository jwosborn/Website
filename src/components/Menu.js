import React from "react";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  let path = useLocation().pathname;
  return (
    <div className="menu is-medium is-on-top">
      <ul className="menu-list">
        <li className={path === "/" ? "is-active" : ""}>
          <Link to="/">
            <i className="fas fa-home fa-lg"></i>
          </Link>
        </li>{" "}
        <li className={path === "/about" ? "is-active" : ""}>
          <Link to="/about">
            <i className="fas fa-play fa-lg"></i>
          </Link>
        </li>
        <li className={path === "/beginnings" ? "is-active" : ""}>
          <Link to="/beginnings">
            <i className="fas fa-fast-backward fa-lg"></i>
          </Link>
        </li>
        <li className={path === "/dev" ? "is-active" : ""}>
          <Link to="/dev">
            <i className="fas fa-fast-forward fa-lg"></i>
            <br />
          </Link>
        </li>
        <li className={path === "/contact" ? "is-active" : ""}>
          <Link to="/contact">
            <i className="fas fa-phone-alt fa-lg"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
