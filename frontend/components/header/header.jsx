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
      <span className="header-action" onClick={openLogin}>Log In</span>
      <p className="header-action" onClick={openSignup}>Sign Up</p>
    </div>
  );
  const UserActions = () => (
    <a className="header-action" onClick={logout}>Sign Out</a>
  );
  return (
    <div className="header">
      <header className="header-primary">
        <input className="header-searchbar" type="text" placeholder="SEARCH" />
        <div className="logo-link">
          <Link to="/" className="logo-link">
            STORIUS
          </Link>
        </div>
        <div className="header-actions">
          { currentUser === null ? AuthActions() : UserActions() }
        </div>
      </header>
      <header className="header-nav">

      </header>
    </div>
  );
};

Header.propTypes = {
  logout: React.PropTypes.func.isRequired,
  toggleAuthModal: React.PropTypes.func.isRequired,
  setAuthFormType: React.PropTypes.func.isRequired,
  currentUser: React.PropTypes.shape({
    id: React.PropTypes.integer,
    username: React.PropTypes.string,
    email: React.PropTypes.string,
    bio: React.PropTypes.string,
  }),
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
