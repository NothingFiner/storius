import { connect } from 'react-redux';
import Votes from './votes';
import { postUpvote, postDownvote } from '../../actions/votes';

const mapStateToProps = ({ annotation, storis }, { votableId, type }) => {
  switch (type) {
    case 'annotations':
      return {
        votes: annotation.annotation.votes,
        userVote: annotation.annotation.userVote,
        votableId,
      };
    case 'comments':
      return {
        votes: storis.stori.comments[votableId].votes,
        userVote: storis.stori.comments[votableId].userVote,
        votableId,
      };
    default:
      return {
        votes: 0,
        userVote: 0,
        votableId,
      };
  }
};

const mapDispatchToProps = (dispatch, { type }) => ({
  upvote: id => dispatch(postUpvote(id, type)),
  downvote: id => dispatch(postDownvote(id, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Votes);
