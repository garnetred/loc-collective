import React, { useState } from 'react';
import './Modal.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { ReactComponent as CloseIcon } from '../../icons/X.svg';

const Modal = (props) => {
  const closeModal = () => {
    props.setIsModalOpen(false);
  };

  return (
    <nav className="modal-nav">
      <CloseIcon
        className="close-icon"
        alt="Close menu"
        onClick={closeModal}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            closeModal();
          }
        }}
        role="button"
        tabIndex={0}
      />
      <ul className="modal-nav-list">
        <NavLink className="modal-nav-items" to="/about" onClick={closeModal}>
          about
        </NavLink>
        <NavLink className="modal-nav-items" to="/styles" onClick={closeModal}>
          styles
        </NavLink>
        <NavLink className="modal-nav-items" to="/contact" onClick={closeModal}>
          contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default Modal;
