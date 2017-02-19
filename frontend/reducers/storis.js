import { merge } from 'lodash';
import { RECEIVE_ERRORS } from '../actions/errors';
import { RECEIVE_STORIS, RECEIVE_STORI, CLEAR_STORI, REMOVE_ANNOTATION } from '../actions/storis';
import { RECEIVE_ANNOTATION } from '../actions/annotations';

const defaultStoris = {
  storis: {},
  errors: [],
  stori: {},
};

const StorisReducer = (state = defaultStoris, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_STORIS:
      newState.storis = action.storis;
      return newState;
    case RECEIVE_STORI:
      newState.stori = action.stori;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors.responseJSON;
      return newState;
    case CLEAR_STORI:
      newState.stori = {};
      return newState;
    case RECEIVE_ANNOTATION:
      Object.assign(newState.stori.annotations, action.annotation);
      return newState;
    case REMOVE_ANNOTATION:
      delete newState.stori.annotations[action.annotationId];
      return newState;
    default:
      return state;
  }
};

export default StorisReducer;
