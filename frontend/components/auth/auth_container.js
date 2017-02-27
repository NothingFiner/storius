import { connect } from 'react-redux';
import Auth from './auth';
import { toggleAuthModal, setAuthFormType, signup, login } from '../../actions/session';


const mapStateToProps = ({ errors, session }) => ({
  currentUser: session.currentUser,
  errors,
  modalIsOpen: session.modalIsOpen,
  formType: session.formType,
});

const mapDispatchToProps = dispatch => ({
  toggleAuthModal: () => dispatch(toggleAuthModal()),
  setAuthFormType: formType => dispatch(setAuthFormType(formType)),
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
