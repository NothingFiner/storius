import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/errors';
import { RECIEVE_STORI } from '../actions/storis';
import { SET_AUTH_FORM_TYPE, RECEIVE_CURRENT_USER } from '../actions/session';

const ErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_CURRENT_USER:
    case RECIEVE_STORI:
    case SET_AUTH_FORM_TYPE:
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default ErrorsReducer;
