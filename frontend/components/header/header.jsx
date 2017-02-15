import React from 'react';
import { Link } from 'react-router';


const Header = ({ currentUser, logout, toggleAuthModal, setAuthFormType }) => {
  const openLogin = () => {
    setAuthFormType('login');
    toggleAuthModal();
  };

  const openSignup = () => {
    setAuthFormType('signup');
    toggleAuthModal();
  };
  const AuthActions = () => (
    <div>
      <button className="header-action" onClick={openLogin}>Log In</button>
      <button className="header-action" onClick={openSignup}>Sign Up</button>
    </div>
  );
  const UserActions = () => (
    <button onClick={logout}>Sign Out</button>
  );
  return (
    <div className="header">
      <header className="header-primary">
        <div className="logo-link">
          <Link to="/" className="logo-link">
            STORIUS
          </Link>
        </div>
        <div className="header-actions">
          { currentUser === null ? AuthActions() : UserActions() }
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  logout: React.PropTypes.func.isRequired,
  toggleAuthModal: React.PropTypes.func.isRequired,
  setAuthFormType: React.PropTypes.func.isRequired,
};

export default Header;
