import { connect } from 'react-redux';
import Stori from './stori';
import { fetchStori, clearStori, deleteStori } from '../../actions/storis';

const mapStateToProps = ({ storis, session }) => ({
  loggedIn: !!session.currentUser,
  currentUser: session.currentUser,
  stori: storis.stori,
});

const mapDispatchToProps = (dispatch, { params }) => {
  const storiId = params.id;
  return {
    fetchStori: () => dispatch(fetchStori(storiId)),
    clearStori: () => dispatch(clearStori()),
    deleteStori: () => dispatch(deleteStori(storiId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stori);
