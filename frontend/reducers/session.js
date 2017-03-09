import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, TOGGLE_AUTH_MODAL, SET_AUTH_FORM_TYPE } from '../actions/session';
import { RECEIVE_SEARCH_RESULTS } from '../actions/searches';

const defaultSession = {
  currentUser: null,
  modalIsOpen: false,
  formType: 'login',
  searchResults: [],
};

const SessionReducer = (state = defaultSession, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return newState;
    case TOGGLE_AUTH_MODAL:
      newState.modalIsOpen = !state.modalIsOpen;
      return newState;
    case SET_AUTH_FORM_TYPE:
      newState.formType = action.formType;
      return newState;
    case RECEIVE_SEARCH_RESULTS:
      newState.searchResults = action.results;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
