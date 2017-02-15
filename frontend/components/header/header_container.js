import { connect } from 'react-redux';
import { logout, toggleAuthModal } from '../../actions/session';
import Header from './header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors,
  modalIsOpen: session.modalIsOpen,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleAuthModal: () => dispatch(toggleAuthModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
