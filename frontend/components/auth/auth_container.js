import { connect } from 'react-redux';
import Auth from './auth';
import { toggleAuthModal } from '../../actions/session';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors,
  modalIsOpen: session.modalIsOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleAuthModal: () => dispatch(toggleAuthModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
