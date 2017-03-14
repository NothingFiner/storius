import { connect } from 'react-redux';
import { logout, toggleModal, setAuthFormType } from '../../actions/session';
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
  toggleModal: () => dispatch(toggleModal()),
  setAuthFormType: formType => dispatch(setAuthFormType(formType)),
  search: query => dispatch(getSearchResults(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
