import { connect } from 'react-redux';
import StoriBody from './stori_body';

const mapStateToProps = ({ session, storis }) => ({
  stori: storis.stori,
  currentUser: session.currentUser,
});

export default connect(mapStateToProps)(StoriBody);
