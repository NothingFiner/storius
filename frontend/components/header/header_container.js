import { connect } from 'react-redux';
import { logout, toggleAuthModal, setAuthFormType } from '../../actions/session';
import Header from './header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors,
  modalIsOpen: session.modalIsOpen,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleAuthModal: () => dispatch(toggleAuthModal()),
  setAuthFormType: formType => dispatch(setAuthFormType(formType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
