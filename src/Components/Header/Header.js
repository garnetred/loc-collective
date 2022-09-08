import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link className="loc-collective" to="/">
        loc collective.
      </Link>
      <section className="header-link-container">
        <NavLink className="nav-items" to="/about">
          about
        </NavLink>
        <NavLink className="nav-items" to="/contact">
          contact
        </NavLink>
        <NavLink className="nav-items" to="/styles">
          styles
        </NavLink>
      </section>
    </nav>
  );
};

export default Header;
