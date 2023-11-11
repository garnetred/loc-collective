import React, { useState } from 'react';
import './Modal.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Modal = () => {
  // close modal
  // open modal
  return (
    <nav className="modal-nav">
      <ul className="modal-nav-list">
        <NavLink className="modal-nav-items" to="/about">
          about
        </NavLink>
        <NavLink className="modal-nav-items" to="/styles">
          styles
        </NavLink>
        <NavLink className="modal-nav-items" to="/contact">
          contact
        </NavLink>
      </ul>
    </nav>
  );
};
