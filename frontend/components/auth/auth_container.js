import { connect } from 'react-redux';
import Auth from './auth';
import { toggleAuthModal, setAuthFormType } from '../../actions/session';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors,
  modalIsOpen: session.modalIsOpen,
  formType: session.formType,
});

const mapDispatchToProps = dispatch => ({
  toggleAuthModal: () => dispatch(toggleAuthModal()),
  setAuthFormType: () => dispatch(setAuthFormType()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
