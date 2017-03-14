import { connect } from 'react-redux';
import { toggleModal, setAuthFormType, signup, login } from '../../actions/session';
import AuthForm from './auth_form';

const mapStateToProps = ({ errors, session }) => ({
  currentUser: session.currentUser,
  errors,
  formType: session.formType,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal()),
  setAuthFormType: formType => dispatch(setAuthFormType(formType)),
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
