import { receiveErrors } from './errors';
import * as APICommentUtil from '../util/comments_api';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment,
});

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId,
});

export const createComment = comment => dispatch => (
  APICommentUtil.createComment(comment)
    .then(
      data => dispatch(receiveComment(data)),
      errors => dispatch(receiveErrors(errors)),
    )
);

export const updateComment = comment => dispatch => (
  APICommentUtil.updateComment(comment)
    .then(
      data => dispatch(receiveComment(data)),
      errors => dispatch(receiveErrors(errors)),
    )
);

export const deleteComment = commentId => dispatch => (
  APICommentUtil.deleteComment(commentId)
    .then(
      data => dispatch(removeComment(data)),
      errors => dispatch(receiveErrors(errors)),
    )
);
