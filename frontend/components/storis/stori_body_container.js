import { connect } from 'react-redux';
import StoriBody from './stori_body';
import { toggleAnnotation, selectAnnotation } from '../../actions/annotations';
import { updateSelection, clearSelection, updateStori } from '../../actions/storis';
import { toggleModal } from '../../actions/session';

let storiId;

const mapStateToProps = ({ session, storis, annotation }) => {
  storiId = storis.stori.id;
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
  toggleAnnotation: () => dispatch(toggleAnnotation()),
  updateSelection: range => dispatch(updateSelection(range)),
  clearSelection: () => dispatch(clearSelection()),
  toggleModal: () => dispatch(toggleModal()),
  selectAnnotation: annotationId => dispatch(selectAnnotation(annotationId)),
  updateStori: stori => dispatch(updateStori(stori, storiId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoriBody);
