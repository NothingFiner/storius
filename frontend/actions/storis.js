import * as APIStoriUtil from '../util/stori_api';
import { receiveErrors } from './errors';
import { RECEIVE_ANNOTATION } from './annotations';

export const RECEIVE_STORIS = 'RECEIVE_STORIS';
export const RECEIVE_STORI = 'RECEIVE_STORI';
export const CLEAR_STORI = 'CLEAR_STORI';
export const REMOVE_ANNOTATION = 'REMOVE_ANNOTATION';

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

export const receiveAnnotation = annotation => ({
  type: RECEIVE_ANNOTATION,
  annotation,
});

export const removeAnnotation = annotationId => ({
  type: REMOVE_ANNOTATION,
  annotationId,
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
