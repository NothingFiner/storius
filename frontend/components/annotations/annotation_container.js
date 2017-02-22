import { connect } from 'react-redux';
import { fetchAnnotation, toggleAnnotation, createAnnotation, toggleEdit, updateAnnotation } from '../../actions/annotations';
import { clearSelection, receiveStoriAnnotation } from '../../actions/storis';
import Annotation from './annotation';

const mapStateToProps = ({ session, storis, annotation: { annotation, errors, annotating, editing, selectedId } }) => {
  return {
    currentUser: session.currentUser,
    start_idx: storis.selection.start_idx,
    length: storis.selection.length,
    storiId: storis.stori.id,
    annotation,
    errors,
    annotating,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Annotation);
