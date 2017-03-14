import { connect } from 'react-redux';
import { toggleModal } from '../../actions/session';
import FormModal from './modal';

const mapStateToProps = ({ session, storis }) => ({
  currentUser: session.currentUser,
  modalIsOpen: session.modalIsOpen,
  storiShow: !!storis.stori.id,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormModal);
