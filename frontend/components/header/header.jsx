import React from 'react';
import { Link } from 'react-router';
import SearchResults from './search';


const Header = ({ currentUser, logout, toggleModal, setAuthFormType, search, results }) => {
  const openLogin = () => {
    setAuthFormType('login');
    toggleModal();
  };

  const openSignup = () => {
    setAuthFormType('signup');
    toggleModal();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    search(e.currentTarget.value);
  };

  const AuthActions = () => (
    <div>
      <span className="header-action" onClick={openLogin}>Log In</span>
      <span className="header-action" onClick={openSignup}>Sign Up</span>
    </div>
  );
  const UserActions = () => (
    <div className="display-flex">
      <div style={{ marginRight: '.25rem' }} className="profile-icon">
        <img alt="header-profile" src={currentUser.photo_url} />
      </div>
      <span>{currentUser.username}</span>
      <span className="header-action" onClick={logout}>Sign Out</span>
    </div>
  );
  const UserNav = () => {
    if (currentUser !== null) {
      return (
        <div>
          <Link to="/new">add a stori</Link>
          <span>|</span>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="header">
      <header className="header-primary">
        <div className="search-section">
          <input
            className="header-searchbar"
            onChange={handleSearch}
            type="text"
            placeholder="Search Storis"
          />
          <span>
            <i className="fa fa-search"/>
          </span>
          <SearchResults results={results} />
        </div>
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
        <Link to={'/#topStoris'}>top storis</Link>
        <span>|</span>
        { UserNav() }
        <a
          href="https://github.com/NothingFiner/storius"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/efiner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" />
        </a>
      </header>
    </div>
  );
};

Header.propTypes = {
  logout: React.PropTypes.func.isRequired,
  results: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  toggleModal: React.PropTypes.func.isRequired,
  setAuthFormType: React.PropTypes.func.isRequired,
  search: React.PropTypes.func.isRequired,
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
