import { connect } from 'react-redux';
import Stori from './stori';
import { fetchStori, clearStori } from '../../actions/storis';

const mapStateToProps = ({ storis, session }) => ({
  loggedIn: !!session.currentUser,
  stori: storis.stori,
});

const mapDispatchToProps = (dispatch, { params }) => {
  const storiId = params.id;
  return {
    fetchStori: () => dispatch(fetchStori(storiId)),
    clearStori: () => dispatch(clearStori()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stori);
