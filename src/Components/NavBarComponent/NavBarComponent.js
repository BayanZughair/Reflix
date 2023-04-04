import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarComponent.css';

const NavBarComponent = () => {
  return (
    <div className="nav-bar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
      </div>
      <div className="logo">REFLIX</div>
    </div>
  );
};

export default NavBarComponent;