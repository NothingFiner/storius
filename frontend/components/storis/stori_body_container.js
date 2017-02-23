import { connect } from 'react-redux';
import StoriBody from './stori_body';
import { toggleAnnotation } from '../../actions/annotations';
import { updateSelection, clearSelection } from '../../actions/storis';
import { toggleAuthModal } from '../../actions/session';

const mapStateToProps = ({ session, storis, annotation }) => {
  return {
    stori: storis.stori,
    loggedIn: (session.currentUser !== null),
    start_idx: storis.selection.start_idx,
    length: storis.selection.length,
    showAnnotation: annotation.showAnnotation,
    editing: annotation.editing,
    selectedId: annotation.selectedId,
  };
};

const mapDispatchToProps = dispatch => ({
  toggleAnnotation: annotationId => dispatch(toggleAnnotation(annotationId)),
  updateSelection: range => dispatch(updateSelection(range)),
  clearSelection: () => dispatch(clearSelection()),
  toggleAuthModal: () => dispatch(toggleAuthModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoriBody);
