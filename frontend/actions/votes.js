import { upvote, downvote } from '../util/vote_api';

export const VOTE_ACTIONS = {
  annotations: 'RECEIVE_ANNOTATION_VOTE',
  storis: 'RECEIVE_STORI_VOTE',
  comments: 'RECEIVE_COMMENT_VOTE',
};

const receiveVote = (vote, id, type) => ({
  type: VOTE_ACTIONS[type],
  vote,
  id,
});

export const postUpvote = (id, type) => dispatch => (
  upvote(id, type).then(data => dispatch(receiveVote(data, id, type)))
);

export const postDownvote = (id, type) => dispatch => (
  downvote(id, type).then(data => dispatch(receiveVote(data, id, type)))
);
