import { connect } from 'react-redux';
import Votes from './votes';
import { postUpvote, postDownvote } from '../../actions/votes';

const mapStateToProps = ({ annotation }, { votableId }) => {
  return {
    votes: annotation.annotation.votes,
    userVote: annotation.annotation.userVote,
    votableId,
  };
};

const mapDispatchToProps = (dispatch, { type }) => ({
  upvote: id => dispatch(postUpvote(id, type)),
  downvote: id => dispatch(postDownvote(id, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Votes);
