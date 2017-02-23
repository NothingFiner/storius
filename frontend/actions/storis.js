import * as APIStoriUtil from '../util/stori_api';
import { receiveErrors } from './errors';

export const RECEIVE_STORIS = 'RECEIVE_STORIS';
export const RECEIVE_STORI = 'RECEIVE_STORI';
export const CLEAR_STORI = 'CLEAR_STORI';
export const REMOVE_STORI_ANNOTATION = 'REMOVE_ANNOTATION';
export const UPDATE_SELECTION = 'UPDATE_SELECTION';
export const CLEAR_SELECTION = 'CLEAR_SELECTION';
export const RECEIVE_STORI_ANNOTATION = 'RECEIVE_STORI_ANNOTATION';
export const REMOVE_STORI = 'REMOVE_STORI';

export const receiveStoris = storis => ({
  type: RECEIVE_STORIS,
  storis,
});

export const receiveStori = stori => ({
  type: RECEIVE_STORI,
  stori,
});

export const clearStori = () => ({
  type: CLEAR_STORI,
});

export const receiveStoriAnnotation = ({annotation}) => ({
  type: RECEIVE_STORI_ANNOTATION,
  annotation,
});

export const removeStoriAnnotation = ({annotationId}) => ({
  type: REMOVE_STORI_ANNOTATION,
  annotationId,
});

export const updateSelection = range => ({
  type: UPDATE_SELECTION,
  range,
});

export const clearSelection = () => ({
  type: CLEAR_SELECTION,
});

export const fetchStoris = () => dispatch => (
  APIStoriUtil.fetchStoris().then(data => dispatch(receiveStoris(data)))
);

export const fetchStori = storiId => dispatch => (
  APIStoriUtil.fetchStori(storiId).then(data => dispatch(receiveStori(data)))
);

export const createStori = stori => dispatch => (
  APIStoriUtil.createStori(stori)
    .then(data => dispatch(receiveStori(data)), errors => dispatch(receiveErrors(errors)))
);

export const updateStori = stori => dispatch => (
  APIStoriUtil.updateStori(stori)
    .then(data => dispatch(receiveStori(data)), errors => dispatch(receiveErrors(errors)))
);

export const deleteStori = storiId => dispatch => (
  APIStoriUtil.deleteStori(storiId)
    .then(data => dispatch(receiveErrors(data)), errors => dispatch(receiveErrors(errors)))
);
