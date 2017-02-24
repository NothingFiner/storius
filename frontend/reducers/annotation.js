import { merge } from 'lodash';
import { RECEIVE_ERRORS } from '../actions/errors';
import { RECEIVE_ANNOTATION, CLEAR_ANNOTATION, TOGGLE_ANNOTATION, TOGGLE_EDIT, REMOVE_ANNOTATION, SELECT_ANNOTATION } from '../actions/annotations';
import { UPVOTE_ACTIONS, DOWNVOTE_ACTIONS } from '../actions/votes';

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
      if (state.selectedId === null) {
        newState.selectedId = action.annotation.id;
      }
      newState.annotation = action.annotation;
      return newState;
    case REMOVE_ANNOTATION:
      newState.annotation = {};
      newState.showAnnotation = false;
      return newState;
    case TOGGLE_ANNOTATION:
      newState.showAnnotation = !state.showAnnotation;
      return newState;
    case SELECT_ANNOTATION:
      newState.selectedId = action.annotationId;
      return newState;
    case TOGGLE_EDIT:
      newState.editing = !state.editing;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors.responseJSON;
      return newState;
    case CLEAR_ANNOTATION:
      newState.annotation = {};
      return newState;
    case UPVOTE_ACTIONS.annotations:
      if (action.vote === 0) {
        newState.annotation.votes -= 1;
      } else {
        newState.annotation.votes += (1 - state.annotation.userVote);
      }
      newState.annotation.userVote = action.vote;
      return newState;
    case DOWNVOTE_ACTIONS.annotations:
      if (action.vote === 0) {
        newState.annotation.votes += 1;
      } else {
        newState.annotation.votes -= (1 + state.annotation.userVote);
      }
      newState.annotation.userVote = action.vote;
      return newState;
    default:
      return state;
  }
};

export default AnnotationsReducer;
