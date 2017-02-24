import { upvote, downvote } from '../util/vote_api';

export const UPVOTE_ACTIONS = {
  annotations: 'RECEIVE_ANNOTATION_UPVOTE',
  storis: 'RECEIVE_STORI_UPVOTE',
  comments: 'RECEIVE_COMMENT_UPVOTE',
};

export const DOWNVOTE_ACTIONS = {
  annotations: 'RECEIVE_ANNOTATION_DOWNVOTE',
  storis: 'RECEIVE_STORI_DOWNVOTE',
  comments: 'RECEIVE_COMMENT_DOWNVOTE',
};

const receiveUpvote = (vote, id, type) => ({
  type: UPVOTE_ACTIONS[type],
  vote,
  id,
});

const receiveDownvote = (vote, id, type) => ({
  type: DOWNVOTE_ACTIONS[type],
  vote,
  id,
});

export const postUpvote = (id, type) => dispatch => (
  upvote(id, type).then(data => dispatch(receiveUpvote(data, id, type)))
);

export const postDownvote = (id, type) => dispatch => (
  downvote(id, type).then(data => dispatch(receiveDownvote(data, id, type)))
);
