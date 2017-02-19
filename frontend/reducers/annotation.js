import { merge } from 'lodash';
import { RECEIVE_ERRORS } from '../actions/errors';
import { RECEIVE_ANNOTATION, TOGGLE_ANNOTATION, TOGGLE_EDIT } from '../actions/storis';

const defaultAnnotation = {
  annotating: false,
  editing: false,
  annotation: {},
  errors: [],
};

const AnnotationsReducer = (state = defaultAnnotation, action) => {
  const newState = merge({}, state);
  newState.errors = [];
  switch (action.type) {
    case RECEIVE_ANNOTATION:
      newState.annotation = action.annotation;
      return newState;
    case TOGGLE_ANNOTATION:
      newState.annotation = !state.annotating;
      newState.annotation = {};
      return newState;
    case TOGGLE_EDIT:
      newState.editing = !state.editing;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors.responseJSON;
      return newState;
    default:
      return state;
  }
};

export default AnnotationsReducer;
