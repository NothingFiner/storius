import { receiveErrors } from './errors';
import * as APIAnnotationUtil from '../util/annotations_api';
import { removeStoriAnnotation } from './storis';

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
export const TOGGLE_ANNOTATION = 'TOGGLE_ANNOTATION';
export const TOGGLE_EDIT = 'TOGGLE_EDIT';
export const SELECT_ANNOTATION = 'SELECT_ANNOTATION';
export const REMOVE_ANNOTATION = 'REMOVE_ANNOTATION';

export const receiveAnnotation = annotation => ({
  type: RECEIVE_ANNOTATION,
  annotation,
});

export const toggleAnnotation = annotationId => ({
  type: TOGGLE_ANNOTATION,
  annotationId,
});

export const selectAnnotation = annotationId => ({
  type: SELECT_ANNOTATION,
  annotationId,
});

export const toggleEdit = () => ({
  type: TOGGLE_EDIT,
});

export const removeAnnotation = annotationId => ({
  type: REMOVE_ANNOTATION,
  annotationId,
});

export const fetchAnnotation = annotationId => dispatch => (
  APIAnnotationUtil.fetchAnnotation(annotationId)
    .then(data => dispatch(receiveAnnotation(data)))
);

export const createAnnotation = (annotation, storiId) => dispatch => (
  APIAnnotationUtil.createAnnotation(annotation, storiId)
    .then(
      data => dispatch(receiveAnnotation(data)),
      errors => dispatch(receiveErrors(errors)),
    )
);

export const updateAnnotation = annotation => dispatch => (
  APIAnnotationUtil.updateAnnotation(annotation)
    .then(
      data => dispatch(receiveAnnotation(data)),
      errors => dispatch(receiveErrors(errors)),
    )
);

export const deleteAnnotation = annotationId => dispatch => (
  APIAnnotationUtil.deleteAnnotation(annotationId)
    .then(
      data => dispatch(removeAnnotation(data)),
      errors => dispatch(receiveErrors(errors)),
    ).then(
      data => dispatch(removeStoriAnnotation(data)),
    )
);
