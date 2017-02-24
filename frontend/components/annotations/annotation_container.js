import { connect } from 'react-redux';
import { fetchAnnotation, toggleAnnotation, clearAnnotation, createAnnotation, toggleEdit, updateAnnotation, deleteAnnotation } from '../../actions/annotations';
import { clearSelection, receiveStoriAnnotation } from '../../actions/storis';
import Annotation from './annotation';

const mapStateToProps = ({ session, storis, annotation: { annotation, errors, showAnnotation, editing, selectedId } }) => {
  return {
    currentUser: session.currentUser,
    start_idx: storis.selection.start_idx,
    length: storis.selection.length,
    storiId: storis.stori.id,
    annotation,
    errors,
    showAnnotation,
    editing,
    selectedId,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
  toggleAnnotation: () => dispatch(toggleAnnotation(null)),
  clearSelection: () => dispatch(clearSelection()),
  createAnnotation: (annotation, storiId) => dispatch(createAnnotation(annotation, storiId)),
  receiveStoriAnnotation: annotation => dispatch(receiveStoriAnnotation(annotation)),
  toggleEdit: () => dispatch(toggleEdit()),
  updateAnnotation: annotation => dispatch(updateAnnotation(annotation)),
  deleteAnnotation: annotationId => dispatch(deleteAnnotation(annotationId)),
  clearAnnotation: () => dispatch(clearAnnotation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Annotation);
