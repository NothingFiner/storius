import { connect } from 'react-redux';
import { logout, toggleAuthModal, setAuthFormType } from '../../actions/session';
import { getSearchResults } from '../../actions/searches';
import Header from './header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors,
  modalIsOpen: session.modalIsOpen,
  results: session.searchResults,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleAuthModal: () => dispatch(toggleAuthModal()),
  setAuthFormType: formType => dispatch(setAuthFormType(formType)),
  search: query => dispatch(getSearchResults(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
