import React from 'react';
import { Link } from 'react-router';


const Header = ({ currentUser, logout, toggleAuthModal }) => (
  <div className="header">
    <header className="header-primary">
      <Link to="/" className="logo-link">
        Stori.US
      </Link>
      <button onClick={toggleAuthModal}>Log In</button>
    </header>
  </div>
);

export default Header;
