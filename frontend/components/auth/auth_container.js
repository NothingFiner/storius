import { connect } from 'react-redux';
import Auth from './auth';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors,
});

export default connect(mapStateToProps)(Auth);
