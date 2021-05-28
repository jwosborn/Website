import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ title, path, location, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className={path === { location } ? "is-active" : ""}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      to={location}>
      {!isHovered ? (
        <i className={`fas ${icon} fa-lg`}></i>
      ) : (
        <i style={{ fontSize: ".5em" }}>{title}</i>
      )}
    </Link>
  );
};

function Menu() {
  let path = useLocation().pathname;
  return (
    <div className="menu is-medium is-on-top">
      <ul className="menu-list">
        <NavItem title="Home" path={path} location="/" icon="fa-home" />
        <NavItem title="About" path={path} location="/about" icon="fa-play" />
        <NavItem
          title="Past"
          path={path}
          location="/beginnings"
          icon="fa-fast-backward"
        />
        <NavItem
          title="Career"
          path={path}
          location="/dev"
          icon="fa-fast-forward"
        />
        <NavItem
          title="Contact"
          path={path}
          location="/contact"
          icon="fa-phone-alt"
        />
      </ul>
    </div>
  );
}

export default Menu;
