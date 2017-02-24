import { connect } from 'react-redux';
import Votes from './votes';
import { postUpvote, postDownvote } from '../../actions/votes';

const mapStateToProps = (state, { votes, userVote, votableId }) => ({
  votes,
  userVote,
  votableId,
});

const mapDispatchToProps = (dispatch, { type }) => ({
  upvote: id => dispatch(postUpvote(id, type)),
  downvote: id => dispatch(postDownvote(id, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Votes);
