import * as APISessionUtil from '../util/session_api';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const login = user => dispatch => (
  APISessionUtil.login(user)
    .then(data => dispatch(receiveCurrentUser(data)), err => dispatch(receiveErrors(err)))
);

export const logout = () => dispatch => (
  APISessionUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)), err => dispatch(receiveErrors(err)))
);

export const signup = user => dispatch => (
  APISessionUtil.signup(user)
    .then(data => dispatch(receiveCurrentUser(data)), err => dispatch(receiveErrors(err)))
);
