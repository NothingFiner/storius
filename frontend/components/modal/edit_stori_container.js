import { connect } from 'react-redux';
import { updateStori } from '../../actions/storis';
import { toggleModal } from '../../actions/session';
import EditStoriForm from './edit_stori';

const mapStateToProps = ({ session, storis }) => ({
  metadata: storis.stori.metadata,
  audioVideo: storis.stori.audio_video,
  userId: storis.stori.user_id,
  photo: storis.stori.photo,
  currentUserId: session.currentUser.id,
  storiId: storis.stori.id,
});

const mapDispatchToProps = dispatch => ({
  updateStori: stori => dispatch(updateStori(stori)),
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditStoriForm);
