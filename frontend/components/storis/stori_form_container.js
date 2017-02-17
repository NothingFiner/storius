import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStori } from '../../actions/storis';
import StoriForm from './stori_form';

const mapStateToProps = ({ session }) => ({
  errors: session.errors,
});

const mapDispatchToProps = dispatch => ({
  createStori: stori => dispatch(createStori(stori)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StoriForm));
