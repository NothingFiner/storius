import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, TOGGLE_AUTH_MODAL, SET_AUTH_FORM_TYPE } from '../actions/session';
import { RECEIVE_ERRORS } from '../actions/errors';

const defaultSession = {
  currentUser: null,
  errors: [],
  modalIsOpen: false,
  formType: 'login',
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
    case SET_AUTH_FORM_TYPE:
      newState.formType = action.formType;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
