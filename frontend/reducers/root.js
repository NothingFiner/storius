import { combineReducers } from 'redux';
import session from './session';
import storis from './storis';

export default combineReducers({
  session,
  storis,
});
