import { connect } from 'react-redux';
import StoriBody from './stori_body';
import { toggleAnnotation } from '../../actions/annotations';
import { updateSelection, clearSelection } from '../../actions/storis';

const mapStateToProps = ({ session, storis, annotation }) => {
  return {
    stori: storis.stori,
    currentUser: session.currentUser,
    start_idx: storis.selection.start_idx,
    length: storis.selection.length,
    showAnnotation: annotation.showAnnotation,
  };
};

const mapDispatchToProps = dispatch => ({
  toggleAnnotation: annotationId => dispatch(toggleAnnotation(annotationId)),
  updateSelection: range => dispatch(updateSelection(range)),
  clearSelection: () => dispatch(clearSelection()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoriBody);
