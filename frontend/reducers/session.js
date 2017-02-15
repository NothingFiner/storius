import { merge } from 'lodash';
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, TOGGLE_AUTH_MODAL } from '../actions/session';

const defaultSession = {
  currentUser: null,
  errors: [],
  modalIsOpen: false,
};

const SessionReducer = (state = defaultSession, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.errors = [];
      newState.currentUser = action.currentUser;
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors.responseJSON;
      return newState;
    case TOGGLE_AUTH_MODAL:
      newState.modalIsOpen = !state.modalIsOpen;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
