import React from 'react';
import { Link } from 'react-router';


const Header = ({ currentUser, logout }) => (
  <div className="header">
    <header className="header-primary">
      <Link to="/" className="logo-link">
        Stori.US
      </Link>
    </header>
  </div>
);

export default Header;
