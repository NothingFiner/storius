import React from 'react';
import { Link } from 'react-router';


const Header = ({ currentUser, logout, toggleAuthModal, setAuthFormType }) => {
  const openLogin = () => {
    setAuthFormType('login');
    toggleAuthModal();
  };

  const openSignup = () => {
    setAuthFormType('singup');
    toggleAuthModal();
  };
  return (
    <div className="header">
      <header className="header-primary">
        <Link to="/" className="logo-link">
          Stori.US
        </Link>
        <button onClick={openLogin}>Log In</button>
        <button onClick={openSignup}>Sign Up</button>
      </header>
    </div>
  );
};

export default Header;
