import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Header.css";


const Header = () => {
    return(
        <nav>
            <NavLink className="loc-collective" to="/">
                loc collective.
            </NavLink>
            <section className="header-link-container">
                <NavLink className='nav-items' to="/about">about</NavLink>
                <NavLink className='nav-items' to="/contact">contact</NavLink>
                <NavLink className='nav-items' to="/styles">styles</NavLink>
                <NavLink className='nav-items' to="/resources">resources</NavLink>
            </section>
        </nav>
    )
}

export default Header;