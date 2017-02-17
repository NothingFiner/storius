import { merge } from 'lodash';
import { RECEIVE_ERRORS } from '../actions/errors';
import { RECEIVE_STORIS, RECEIVE_STORI } from '../actions/storis';

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
    default:
      return state;
  }
};

export default StorisReducer;