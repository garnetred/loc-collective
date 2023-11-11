import React from 'react';
import { ReactComponent as Hamburger } from '../../icons/hamburger-icon.svg';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  const openModal = () => {
    props.setIsModalOpen(true);
  };

  return (
    <nav>
      <Link className="loc-collective" to="/">
        loc collective.
      </Link>
      <section className="header-link-container">
        <NavLink className="nav-items" to="/about">
          about
        </NavLink>
        <NavLink className="nav-items" to="/styles">
          styles
        </NavLink>
        <NavLink className="nav-items" to="/contact">
          contact
        </NavLink>
      </section>
      <section className="header-hamburger">
        <Hamburger
          onClick={openModal}
          onKeyDown={openModal}
          role="button"
          alt="Open menu"
          tabIndex={0}
        />
      </section>
    </nav>
  );
};

export default Header;
