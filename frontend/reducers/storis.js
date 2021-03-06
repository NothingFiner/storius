import { merge } from 'lodash';
import { RECEIVE_STORIS, RECEIVE_STORI, CLEAR_STORI, REMOVE_STORI_ANNOTATION, UPDATE_SELECTION, CLEAR_SELECTION, RECEIVE_STORI_ANNOTATION, REMOVE_STORI } from '../actions/storis';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comments';
import { UPVOTE_ACTIONS, DOWNVOTE_ACTIONS } from '../actions/votes';

const defaultStoris = {
  storis: [],
  stori: {},
  selection: {
    start_idx: 0,
    length: 0,
  },
};

const StorisReducer = (state = defaultStoris, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_STORIS:
      newState.storis = action.storis;
      return newState;
    case RECEIVE_STORI:
      newState.stori = action.stori;
      return newState;
    case REMOVE_STORI:
    case CLEAR_STORI:
      newState.stori = {};
      return newState;
    case RECEIVE_STORI_ANNOTATION:
      if (!newState.stori.annotations) {
        newState.stori.annotations = {};
      }
      Object.assign(newState.stori.annotations, {
        [action.annotation.id]: {
          id: action.annotation.id,
          start_idx: action.annotation.start_idx,
          length: action.annotation.length,
        },
      });
      return newState;
    case REMOVE_STORI_ANNOTATION:
      delete newState.stori.annotations[action.annotationId];
      return newState;
    case UPDATE_SELECTION:
      newState.selection.start_idx = action.range.index;
      newState.selection.length = action.range.length;
      return newState;
    case CLEAR_SELECTION:
      newState.selection.start_idx = 0;
      newState.selection.length = 0;
      return newState;
    case RECEIVE_COMMENT:
      if (!newState.stori.comments) {
        newState.stori.comments = {};
      }
      newState.stori.comments[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState.stori.comments[action.commentId];
      return newState;
    case UPVOTE_ACTIONS.comments:
      if (action.vote === 0) {
        newState.stori.comments[action.id].votes -= 1;
      } else {
        newState.stori.comments[action.id].votes += (1 - state.stori.comments[action.id].userVote);
      }
      newState.stori.comments[action.id].userVote = action.vote;
      return newState;
    case DOWNVOTE_ACTIONS.comments:
      if (action.vote === 0) {
        newState.stori.comments[action.id].votes += 1;
      } else {
        newState.stori.comments[action.id].votes -= (1 + state.stori.comments[action.id].userVote);
      }
      newState.stori.comments[action.id].userVote = action.vote;
      return newState;
    default:
      return state;
  }
};

export default StorisReducer;
