import { connect } from 'react-redux';
import { toggleModal } from '../../actions/session';
import FormModal from './modal';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  modalIsOpen: session.modalIsOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormModal);
