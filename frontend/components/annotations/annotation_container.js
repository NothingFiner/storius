import { connect } from 'react-redux';
import { fetchAnnotation, toggleAnnotation } from '../../actions/annotations';
import Annotation from './annotation';

const mapStateToProps = ({ session, storis, annotation: { annotation, errors, annotating, editing, selectedId } }) => {
  return {
    currentUser: session.currentUser,
    start_idx: storis.start_idx,
    length: storis.length,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Annotation);
