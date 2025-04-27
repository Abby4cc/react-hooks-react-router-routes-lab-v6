import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar"> {/* Add this div */}
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Home
        </NavLink>
        <NavLink to="/directors" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Directors
        </NavLink>
        <NavLink to="/actors" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Actors
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;