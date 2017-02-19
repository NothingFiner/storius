import { combineReducers } from 'redux';
import session from './session';
import storis from './storis';
import annotation from './annotation';

export default combineReducers({
  session,
  storis,
  annotation,
});
