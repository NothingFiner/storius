import { connect } from 'react-redux';
import Stori from './stori';
import { fetchStori, clearStori, deleteStori } from '../../actions/storis';

const mapStateToProps = ({ storis, session }) => ({
  currentUser: session.currentUser,
  stori: storis.stori,
});

const mapDispatchToProps = (dispatch, { params }) => {
  const storiId = parseInt(params.id, 10);
  return {
    fetchStori: id => dispatch(fetchStori(id)),
    clearStori: () => dispatch(clearStori()),
    deleteStori: () => dispatch(deleteStori(storiId)),
    storiId,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stori);
