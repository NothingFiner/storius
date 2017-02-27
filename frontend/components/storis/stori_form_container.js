import { connect } from 'react-redux';
import { createStori } from '../../actions/storis';
import StoriForm from './stori_form';

const mapStateToProps = ({ errors }) => ({
  errors,
});

const mapDispatchToProps = dispatch => ({
  createStori: stori => dispatch(createStori(stori)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoriForm);
