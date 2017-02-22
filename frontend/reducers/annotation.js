import { merge } from 'lodash';
import { RECEIVE_ERRORS } from '../actions/errors';
import { RECEIVE_ANNOTATION, TOGGLE_ANNOTATION, TOGGLE_EDIT, SELECT_ANNOTATION } from '../actions/annotations';

const defaultAnnotation = {
  showAnnotation: false,
  editing: false,
  annotation: {},
  errors: [],
  selectedId: null,
};

const AnnotationsReducer = (state = defaultAnnotation, action) => {
  const newState = merge({}, state);
  newState.errors = [];
  switch (action.type) {
    case RECEIVE_ANNOTATION:
      newState.annotation = action.annotation;
      return newState;
    case TOGGLE_ANNOTATION:
      newState.selectedId = action.annotationId;
      newState.showAnnotation = !state.showAnnotation;
      newState.annotation = {};
      return newState;
    case TOGGLE_EDIT:
      newState.editing = !state.editing;
      return newState;
    case SELECT_ANNOTATION:
      newState.selectedId = action.annotationId;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors.responseJSON;
      return newState;
    default:
      return state;
  }
};

export default AnnotationsReducer;
